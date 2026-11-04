"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HERITAGE_STOPS, HeritageStop, TOUR_METRICS, REAL_WALKING_ROUTE_POINTS } from "@/data/stops";
import {
  Navigation,
  Compass,
  ArrowRight,
  ExternalLink,
  MapPin,
  Star,
  Footprints,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MapComponentProps {
  initialStopId?: string;
  onSelectStop?: (stop: HeritageStop) => void;
  className?: string;
}

type MapLayerType = "googleRoad" | "googleSat" | "googleTerrain";

export default function MapComponent({
  initialStopId,
  onSelectStop,
  className = "h-[740px] w-full",
}: MapComponentProps) {
  const { language } = useLanguage();
  const isKm = language === "km";

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);
  const markersRef = useRef<{ [key: string]: any }>({});
  const polylineGlowRef = useRef<any>(null);
  const polylineDotsRef = useRef<any>(null);
  const userMarkerRef = useRef<any>(null);

  const [mapLayer, setMapLayer] = useState<MapLayerType>("googleRoad");
  const [selectedStop, setSelectedStop] = useState<HeritageStop>(() => {
    if (initialStopId) {
      const found = HERITAGE_STOPS.find((s) => s.id === initialStopId);
      if (found) return found;
    }
    return HERITAGE_STOPS[0];
  });

  const [isLocating, setIsLocating] = useState(false);
  const [geoNotice, setGeoNotice] = useState<string | null>(null);

  // 100% Genuine Google Maps Tiles (Roadmap, Photorealistic Satellite Hybrid, and Terrain)
  const getTileConfig = (layer: MapLayerType) => {
    switch (layer) {
      case "googleSat":
        return {
          // Google Satellite Hybrid (realistic aerial photography with roads & labels)
          url: "https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
          options: {
            subdomains: ["0", "1", "2", "3"],
            maxZoom: 20,
            attribution: "© Google Maps Satellite",
          },
        };
      case "googleTerrain":
        return {
          // Google Terrain with topography and shaded relief
          url: "https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
          options: {
            subdomains: ["0", "1", "2", "3"],
            maxZoom: 20,
            attribution: "© Google Maps Terrain",
          },
        };
      case "googleRoad":
      default:
        return {
          // Google Standard Vector Roadmap
          url: "https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
          options: {
            subdomains: ["0", "1", "2", "3"],
            maxZoom: 20,
            attribution: "© Google Maps",
          },
        };
    }
  };

  // Helper to build realistic Google Maps Place popup HTML
  const buildPopupHtml = (stop: HeritageStop) => {
    const stopImage = stop.archivalComparison.modernImageUrl || stop.archivalComparison.archivalImageUrl;
    const stopTitle = isKm ? stop.khmerTitle : stop.title;
    const stopRole = isKm ? stop.khmerRole : stop.role;
    const stopSummary = isKm ? stop.khmerSummary : stop.summary;
    const stopTime = isKm ? stop.khmerWalkingTimeFromPrev : stop.walkingTimeFromPrev;

    return `
      <div class="google-place-popup p-0 overflow-hidden font-sans text-[#1F354D]">
        <div class="relative w-full h-36 overflow-hidden bg-slate-900">
          <img src="${stopImage}" alt="${stop.title}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          
          <div class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#1F354D] text-white text-[11px] font-bold shadow-md border border-white/20">
            Stop 0${stop.order}
          </div>
          <div class="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white text-[#1F354D] text-[11px] font-extrabold shadow-md flex items-center">
            ★ ${stop.rating}
          </div>
          <div class="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/70 text-white text-[10px] font-medium backdrop-blur-xs">
            ${stopTime}
          </div>
        </div>

        <div class="p-4 space-y-2.5">
          <div>
            <h4 class="text-sm font-extrabold text-[#1F354D] leading-tight">
              ${stopTitle}
            </h4>
            <p class="text-[11px] text-[#B77B5B] font-bold mt-0.5">
              ${stopRole}
            </p>
          </div>

          <p class="text-[11px] text-[#55534B] font-medium line-clamp-2 leading-relaxed">
            ${stopSummary}
          </p>

          <div class="text-[10px] text-[#55534B] font-bold pt-2 border-t border-[#E8D9B8] flex items-center justify-between">
            <span>📍 ${stop.address}</span>
          </div>

          <div class="pt-1 flex items-center gap-2">
            <a href="/stops/${stop.id}" class="flex-1 py-2 px-3 rounded-xl bg-[#1F354D] hover:bg-[#F0A536] hover:text-[#1F354D] text-white text-[11px] font-extrabold text-center shadow-xs transition-colors">
              ${isKm ? "មើលលម្អិត" : "View Stop Details"} →
            </a>
            <a href="${stop.googleMapsDirectionsUrl}" target="_blank" rel="noopener noreferrer" class="py-2 px-3 rounded-xl bg-white hover:bg-[#F5F0E5] text-[#1F354D] border border-[#E8D9B8] text-[11px] font-extrabold text-center transition-colors flex items-center space-x-1 shadow-xs">
              <span>${isKm ? "ផែនទី" : "Directions"}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    `;
  };

  // Sync selectedStop if initialStopId changes from parent
  useEffect(() => {
    if (initialStopId) {
      const found = HERITAGE_STOPS.find((s) => s.id === initialStopId);
      if (found && found.id !== selectedStop.id) {
        setSelectedStop(found);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.flyTo(found.coordinates, 17, { duration: 0.6 });
          const marker = markersRef.current[found.id];
          if (marker) {
            setTimeout(() => {
              marker.openPopup();
            }, 250);
          }
        }
      }
    }
  }, [initialStopId]);

  // Initialize Map
  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    let isMounted = true;

    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Safeguard against Leaflet "Map container is already initialized"
      if ((mapContainerRef.current as any)._leaflet_id) {
        (mapContainerRef.current as any)._leaflet_id = null;
      }

      // Center around Kampot town historic center
      const map = L.map(mapContainerRef.current, {
        center: [10.6092, 104.1782],
        zoom: 16,
        zoomControl: false,
        attributionControl: false,
      });

      L.control.zoom({ position: "topleft" }).addTo(map);

      // Invalidate size to guarantee tiles paint immediately
      setTimeout(() => {
        if (map) map.invalidateSize();
      }, 150);
      setTimeout(() => {
        if (map) map.invalidateSize();
      }, 500);

      const handleResize = () => {
        if (map) map.invalidateSize();
      };
      window.addEventListener("resize", handleResize);

      // Load Real Google Maps tiles
      const config = getTileConfig(mapLayer);
      const tileLayer = L.tileLayer(config.url, config.options).addTo(map);
      tileLayerRef.current = tileLayer;

      // 1. Walking Route: Outer line glow
      const routeGlow = L.polyline(REAL_WALKING_ROUTE_POINTS, {
        color: "#1A73E8", // Google Navigation Blue
        weight: 9,
        opacity: 0.35,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);
      polylineGlowRef.current = routeGlow;

      // 2. Walking Route: Blue navigation walking dots
      const routeDots = L.polyline(REAL_WALKING_ROUTE_POINTS, {
        color: "#185ABC",
        weight: 5,
        opacity: 0.95,
        dashArray: "7, 10",
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);
      polylineDotsRef.current = routeDots;

      // 3. Add Realistic Google Maps Marker Pins + Popups
      HERITAGE_STOPS.forEach((stop) => {
        const isCurrent = stop.id === selectedStop.id;
        const color = isCurrent ? "#F0A536" : "#1F354D";

        const customIcon = L.divIcon({
          className: "heritage-marker-container",
          html: `
            <div class="google-pin ${isCurrent ? "active" : ""}" id="pin-${stop.id}">
              <div class="google-pin-head" style="background: ${color}; color: ${isCurrent ? "#1F354D" : "#FFFFFF"};">
                ${stop.order}
              </div>
              <div class="google-pin-tail" style="color: ${color};"></div>
            </div>`,
          iconSize: [36, 44],
          iconAnchor: [18, 44],
          popupAnchor: [0, -42],
        });

        const marker = L.marker(stop.coordinates, { icon: customIcon }).addTo(map);

        // Bind Google Maps Place Card Popup
        const popupContent = buildPopupHtml(stop);
        marker.bindPopup(popupContent, {
          maxWidth: 280,
          minWidth: 260,
          className: "custom-google-popup",
          autoPan: true,
          autoPanPadding: [20, 20],
        });

        marker.on("click", () => {
          handleSelectStop(stop);
        });

        markersRef.current[stop.id] = marker;
      });

      // Auto-open popup for initial stop
      setTimeout(() => {
        if (markersRef.current[selectedStop.id]) {
          markersRef.current[selectedStop.id].openPopup();
        }
      }, 600);

      mapInstanceRef.current = map;
    });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Switch Tile Layer dynamically (Google Roadmap / Google Satellite Hybrid / Google Terrain)
  const handleSwitchLayer = (newLayer: MapLayerType) => {
    setMapLayer(newLayer);
    if (!mapInstanceRef.current || !tileLayerRef.current) return;

    import("leaflet").then((L) => {
      const config = getTileConfig(newLayer);
      mapInstanceRef.current.removeLayer(tileLayerRef.current);
      const layer = L.tileLayer(config.url, config.options).addTo(mapInstanceRef.current);
      tileLayerRef.current = layer;
    });
  };

  // Update Pin Highlight when selectedStop changes
  useEffect(() => {
    HERITAGE_STOPS.forEach((stop) => {
      const pinEl = document.getElementById(`pin-${stop.id}`);
      if (pinEl) {
        const head = pinEl.querySelector(".google-pin-head") as HTMLElement;
        const tail = pinEl.querySelector(".google-pin-tail") as HTMLElement;
        if (stop.id === selectedStop.id) {
          pinEl.classList.add("active");
          if (head) {
            head.style.background = "#F0A536";
            head.style.color = "#1F354D";
          }
          if (tail) tail.style.color = "#F0A536";
        } else {
          pinEl.classList.remove("active");
          if (head) {
            head.style.background = "#1F354D";
            head.style.color = "#FFFFFF";
          }
          if (tail) tail.style.color = "#1F354D";
        }
      }
    });
  }, [selectedStop]);

  // Update popup HTML whenever language switches
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    HERITAGE_STOPS.forEach((stop) => {
      const marker = markersRef.current[stop.id];
      if (marker) {
        marker.setPopupContent(buildPopupHtml(stop));
      }
    });
  }, [language]);

  const handleSelectStop = (stop: HeritageStop) => {
    setSelectedStop(stop);
    if (onSelectStop) onSelectStop(stop);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(stop.coordinates, 17, { duration: 0.6 });
      const marker = markersRef.current[stop.id];
      if (marker) {
        setTimeout(() => {
          marker.openPopup();
        }, 250);
      }
    }
  };

  const handleLocateMe = () => {
    setIsLocating(true);
    setGeoNotice(null);

    if (!navigator.geolocation) {
      setGeoNotice(
        isKm
          ? "កម្មវិធីរុករករបស់អ្នកមិនគាំទ្រការកំណត់ទីតាំង GPS ទេ។"
          : "Geolocation is not supported by your browser."
      );
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const { latitude, longitude } = pos.coords;

        if (mapInstanceRef.current) {
          import("leaflet").then((L) => {
            if (userMarkerRef.current) {
              userMarkerRef.current.remove();
            }

            const userIcon = L.divIcon({
              className: "user-gps-marker",
              html: `<div style="background: #2563EB; width: 22px; height: 22px; border-radius: 50%; border: 3.5px solid white; box-shadow: 0 0 16px rgba(37,99,235,0.9); animation: pulse 2s infinite;"></div>`,
              iconSize: [22, 22],
              iconAnchor: [11, 11],
            });

            const userMarker = L.marker([latitude, longitude], { icon: userIcon }).addTo(
              mapInstanceRef.current
            );
            userMarkerRef.current = userMarker;

            const kampotCenter = [10.609, 104.178];
            const distanceKm = Math.sqrt(
              Math.pow((latitude - kampotCenter[0]) * 111, 2) +
                Math.pow((longitude - kampotCenter[1]) * 111, 2)
            );

            if (distanceKm > 25) {
              setGeoNotice(
                isKm
                  ? `ទីតាំងរបស់អ្នកនៅក្រៅក្រុងកំពត (ប្រហែល ${Math.round(distanceKm)} គ.ម)។ បានដាក់ចំណុច GPS របស់អ្នក ប៉ុន្តែរក្សាទិដ្ឋភាពលើផ្លូវបេតិកភណ្ឌកំពត។`
                  : `You are currently outside Kampot (~${Math.round(distanceKm)} km away). GPS pin placed, keeping view on Kampot heritage walking trail.`
              );
              mapInstanceRef.current.flyTo([10.6092, 104.1782], 16);
            } else {
              setGeoNotice(
                isKm
                  ? "បានរកឃើញទីតាំងរបស់អ្នកនៅកំពត! សូមដើរតាមគន្លងផ្លូវទៅកាន់ទីតាំងជិតបំផុត។"
                  : "Found your location in Kampot! Follow the route to the nearest stop."
              );
              mapInstanceRef.current.flyTo([latitude, longitude], 17);
            }
          });
        }
      },
      () => {
        setIsLocating(false);
        setGeoNotice(
          isKm
            ? "មិនអាចចូលប្រើទីតាំង GPS បានទេ។ កំពុងបង្ហាញផ្លូវបេតិកភណ្ឌកំពត។"
            : "Location access unavailable. Centered on Kampot heritage center."
        );
      },
      { timeout: 8000 }
    );
  };

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([10.6092, 104.1782], 16, { duration: 0.8 });
    }
  };

  return (
    <div
      className={`relative ${className} rounded-3xl overflow-hidden border border-[#E8D9B8] dark:border-[#455565] shadow-xl flex flex-col`}
    >
      {/* Full-Height Map View Canvas with Google Maps Tiles */}
      <div ref={mapContainerRef} className="w-full h-full flex-1 z-0 bg-[#E8D9B8] min-h-[500px]" />

      {/* TOP BAR OVERLAY */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Left: Places Counter Pill */}
        <div className="pointer-events-auto flex items-center space-x-2">
          <div className="bg-white/95 dark:bg-[#263B4B]/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-[#E8D9B8] dark:border-[#455565] text-[#1F354D] dark:text-[#F5F0E5] flex items-center space-x-2">
            <Footprints className="w-4 h-4 text-[#F0A536]" />
            <span className="text-xs sm:text-sm font-bold">
              {isKm
                ? `${TOUR_METRICS.totalStops} ទីតាំង • ផ្លូវដើរ ${TOUR_METRICS.khmerTotalDistance}`
                : `${TOUR_METRICS.totalStops} Places • ${TOUR_METRICS.totalDistance} Walking Trail`}
            </span>
          </div>
        </div>

        {/* Right: Map Layer Switcher (Roadmap vs Realistic Satellite vs Terrain) + GPS */}
        <div className="pointer-events-auto flex flex-wrap items-center gap-2">
          {/* Map Layer Selector */}
          <div className="bg-white/95 dark:bg-[#263B4B]/95 backdrop-blur-md p-1 rounded-full shadow-lg border border-[#E8D9B8] dark:border-[#455565] flex items-center space-x-1 text-xs">
            <button
              onClick={() => handleSwitchLayer("googleRoad")}
              className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                mapLayer === "googleRoad"
                  ? "bg-[#1F354D] dark:bg-[#F0A536] text-white dark:text-[#1F354D] shadow-xs"
                  : "text-[#55534B] dark:text-[#C2BBAE] hover:bg-[#E8D9B8]/40 dark:hover:bg-[#182A39]"
              }`}
            >
              Google Map
            </button>
            <button
              onClick={() => handleSwitchLayer("googleSat")}
              className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                mapLayer === "googleSat"
                  ? "bg-[#1F354D] dark:bg-[#F0A536] text-white dark:text-[#1F354D] shadow-xs"
                  : "text-[#55534B] dark:text-[#C2BBAE] hover:bg-[#E8D9B8]/40 dark:hover:bg-[#182A39]"
              }`}
            >
              Realistic Satellite
            </button>
            <button
              onClick={() => handleSwitchLayer("googleTerrain")}
              className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                mapLayer === "googleTerrain"
                  ? "bg-[#1F354D] dark:bg-[#F0A536] text-white dark:text-[#1F354D] shadow-xs"
                  : "text-[#55534B] dark:text-[#C2BBAE] hover:bg-[#E8D9B8]/40 dark:hover:bg-[#182A39]"
              }`}
            >
              Terrain
            </button>
          </div>

          {/* Main "Open in Google Maps" Button */}
          <a
            href={TOUR_METRICS.fullRouteGoogleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-[#F0A536] hover:bg-[#e09425] text-[#1F354D] shadow-md transition-all group"
            title={isKm ? "បើកផ្លូវពេញលេញនៅក្នុង Google Maps" : "Open full walking tour in Google Maps"}
          >
            <span>{isKm ? "បើកក្នុង Google Maps" : "Open now"}</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* GPS Locate Button */}
          <button
            onClick={handleLocateMe}
            className="p-2.5 bg-white dark:bg-[#263B4B] hover:bg-[#E8D9B8]/40 dark:hover:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] rounded-full shadow-lg border border-[#E8D9B8] dark:border-[#455565] transition-all active:scale-95 flex items-center justify-center cursor-pointer"
            title={isKm ? "ទីតាំងរបស់ខ្ញុំ" : "Find my GPS location"}
            aria-label="Find my GPS location"
          >
            <Navigation
              className={`w-4 h-4 text-[#F0A536] ${
                isLocating ? "animate-spin" : ""
              }`}
            />
          </button>

          {/* Reset Map Center */}
          <button
            onClick={handleResetView}
            className="p-2.5 bg-white dark:bg-[#263B4B] hover:bg-[#E8D9B8]/40 dark:hover:bg-[#182A39] text-[#1F354D] dark:text-[#F5F0E5] rounded-full shadow-lg border border-[#E8D9B8] dark:border-[#455565] transition-all active:scale-95 flex items-center justify-center cursor-pointer"
            title={isKm ? "កំណត់ទិដ្ឋភាពឡើងវិញ" : "Reset map view"}
            aria-label="Reset map view"
          >
            <Compass className="w-4 h-4 text-[#1F354D] dark:text-[#F5F0E5]" />
          </button>
        </div>
      </div>

      {/* Geolocation Notice Toast */}
      {geoNotice && (
        <div className="absolute top-18 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-30 bg-[#1F354D]/95 dark:bg-[#263B4B]/95 backdrop-blur text-white text-xs p-3 rounded-xl shadow-xl border border-white/20 flex items-start space-x-2.5 animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-[#F0A536] flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p>{geoNotice}</p>
          </div>
          <button
            onClick={() => setGeoNotice(null)}
            className="text-white/70 hover:text-white font-bold ml-1 text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
