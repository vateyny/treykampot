import React from "react";
import { notFound, redirect } from "next/navigation";
import { HERITAGE_STOPS } from "@/data/stops";
import StopDetailView from "@/components/StopDetailView";

export function generateStaticParams() {
  return HERITAGE_STOPS.map((stop) => ({
    id: stop.id,
  }));
}

export default function StopDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Legacy URL redirects to new itinerary stops
  if (params.id === "kampot-post-office") {
    redirect("/stops/cai-coffee");
  }
  if (params.id === "historic-shophouses") {
    redirect("/stops/phsar-kronat");
  }
  if (params.id === "former-fish-market") {
    redirect("/stops/starbucks-kampot");
  }

  const stopIndex = HERITAGE_STOPS.findIndex((s) => s.id === params.id);
  if (stopIndex === -1) {
    notFound();
  }

  const stop = HERITAGE_STOPS[stopIndex];
  const prevStop = stopIndex > 0 ? HERITAGE_STOPS[stopIndex - 1] : null;
  const nextStop =
    stopIndex < HERITAGE_STOPS.length - 1
      ? HERITAGE_STOPS[stopIndex + 1]
      : null;

  return (
    <StopDetailView
      stop={stop}
      prevStop={prevStop}
      nextStop={nextStop}
    />
  );
}
