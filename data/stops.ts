export interface ArchitecturalFeature {
  title: string;
  description: string;
  iconName: string;
  khmerTitle?: string;
  khmerDescription?: string;
}

export interface HistoricalMilestone {
  year: string;
  khmerYear: string;
  era: string;
  khmerEra: string;
  title: string;
  khmerTitle: string;
  description: string;
  khmerDescription: string;
}

export interface SourceReference {
  title: string;
  khmerTitle?: string;
  url: string;
  type: string;
  khmerType?: string;
  note: string;
  khmerNote?: string;
  authorOrInstitution?: string;
  khmerAuthorOrInstitution?: string;
  year?: string;
}

export interface InteriorPhoto {
  url: string;
  title: string;
  khmerTitle: string;
  caption: string;
  khmerCaption: string;
  tag: string;
  khmerTag: string;
}

export interface BookingCallout {
  canBook: boolean;
  title: string;
  khmerTitle: string;
  tagline: string;
  khmerTagline: string;
  description: string;
  khmerDescription: string;
  amenities: {
    icon: string;
    label: string;
    khmerLabel: string;
  }[];
  bookingUrl: string;
}

export interface ArchivalVariant {
  url: string;
  label: string;
  khmerLabel: string;
  caption: string;
  khmerCaption: string;
}

export interface ArchivalPhoto {
  url: string;
  title: string;
  khmerTitle: string;
  caption: string;
  khmerCaption: string;
  tag?: string;
  khmerTag?: string;
}

export interface EvolutionStage {
  stage: string;
  khmerStage: string;
  year: string;
  khmerYear: string;
  title: string;
  khmerTitle: string;
  imageUrl: string;
  caption: string;
  khmerCaption: string;
  tag: string;
  khmerTag: string;
}

export interface HeritageStop {
  id: string;
  order: number;
  title: string;
  khmerTitle: string;
  subtitle: string;
  khmerSubtitle: string;
  role: string;
  khmerRole: string;
  rating: string;
  placeCategory: string;
  khmerPlaceCategory: string;
  coordinates: [number, number]; // [lat, lng]
  googleMapsUrl: string;
  googleMapsDirectionsUrl: string;
  walkingTimeFromPrev: string;
  khmerWalkingTimeFromPrev: string;
  distanceFromPrev: string;
  estimatedVisitTime: string;
  khmerEstimatedVisitTime: string;
  address: string;
  khmerAddress: string;
  accessStatus: "Public Outdoor Landmark" | "Boutique Hotel & Café" | "Heritage Shophouse Corridor" | "Commercial Heritage Building" | "Civic Monument & Street View" | "Historic Bridge & Promenade" | "Riverside Lounge & Night Bar";
  khmerAccessStatus: string;
  accessNotes: string;
  khmerAccessNotes: string;
  photographyNotes: string;
  khmerPhotographyNotes: string;
  storyFocus: string;
  khmerStoryFocus: string;
  historicalEra: string;
  khmerHistoricalEra: string;
  timelinePeriod: string;
  khmerTimelinePeriod: string;
  primaryArchivalSource: string;
  khmerPrimaryArchivalSource: string;
  summary: string;
  khmerSummary: string;
  historicalStory: string[];
  khmerHistoricalStory: string[];
  architecturalHighlights: ArchitecturalFeature[];
  archivalComparison: {
    archivalImageUrl: string;
    archivalYear: string;
    khmerArchivalYear: string;
    archivalCaption: string;
    khmerArchivalCaption: string;
    modernImageUrl: string;
    modernCaption: string;
    khmerModernCaption: string;
    transformationNote: string;
    khmerTransformationNote: string;
    archivalReferenceNote?: string;
    khmerArchivalReferenceNote?: string;
    archivalVariants?: ArchivalVariant[];
  };
  audioGuide: {
    title: string;
    khmerTitle: string;
    duration: string;
    approxSeconds: number;
    transcript: string;
    khmerTranscript: string;
    narrationText: string;
    khmerNarrationText: string;
  };
  sources: SourceReference[];
  historicalTimeline?: HistoricalMilestone[];
  interiorGallery?: InteriorPhoto[];
  archivalGallery?: ArchivalPhoto[];
  evolutionTimeline?: EvolutionStage[];
  bookingCallout?: BookingCallout;
}

export const HERITAGE_STOPS: HeritageStop[] = [
  {
    id: "durian-roundabout",
    order: 1,
    title: "Durian Iconic of Krong Kampot",
    khmerTitle: "វិមានផ្លែធុរេនក្រុងកំពត",
    subtitle: "Symbol of Prosperity, Agriculture & Town Gateway",
    khmerSubtitle: "និមិត្តរូបនៃភាពសម្បូរសប្បាយ កសិកម្ម និងច្រកទ្វារក្រុងកំពត",
    role: "Tour Starting Point & Agricultural Identity",
    khmerRole: "ចំណុចចាប់ផ្តើមនៃដំណើរកម្សាន្ត និងអត្តសញ្ញាណកសិកម្ម",
    rating: "4.5",
    placeCategory: "Civic Landmark & Gateway",
    khmerPlaceCategory: "ទីតាំងប្រវត្តិសាស្ត្រសាធារណៈ",
    coordinates: [10.610568, 104.181505],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.610568,104.181505",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=10.610568,104.181505&travelmode=walking",
    walkingTimeFromPrev: "Start here",
    khmerWalkingTimeFromPrev: "ចំណុចចាប់ផ្តើមនៅទីនេះ",
    distanceFromPrev: "0 m",
    estimatedVisitTime: "8–10 minutes",
    khmerEstimatedVisitTime: "៨ ទៅ ១០ នាទី",
    address: "J56J+6J, Krong Kampot",
    khmerAddress: "J56J+6J, កណ្តាលក្រុងកំពត",
    accessStatus: "Public Outdoor Landmark",
    khmerAccessStatus: "ទីតាំងសាធារណៈក្រៅផ្ទះ",
    accessNotes: "Freely accessible 24/7. Best viewed and photographed from the pedestrian safety sidewalks surrounding the roundabout.",
    khmerAccessNotes: "អាចចូលទស្សនាដោយសេរី ២៤ម៉ោង។ ទីតាំងល្អបំផុតសម្រាប់ទស្សនា និងថតរូប គឺនៅលើចិញ្ចើមផ្លូវថ្មើរជើងជុំវិញរង្វង់មូល។",
    photographyNotes: "Great lighting in morning and golden hour. Watch out for motorbikes when taking wide-angle photos.",
    khmerPhotographyNotes: "ពន្លឺស្អាតនៅពេលព្រឹក និងពេលរសៀលម៉ោងមាស។ សូមប្រុងប្រយ័ត្នចំពោះយានយន្តពេលថតរូបប្លង់ទូលាយ។",
    storyFocus: "How the King of Fruits became the defining symbol of Kampot's agricultural rebirth and local identity.",
    khmerStoryFocus: "របៀបដែលស្តេចផ្លែឈើបានក្លាយជានិមិត្តរូបកំណត់ការរស់ឡើងវិញនៃកសិកម្ម និងអត្តសញ្ញាណខេត្តកំពត។",
    historicalEra: "Post-Independence Civic Monument (Modern Kampot Landmark)",
    khmerHistoricalEra: "វិមានសាធារណៈក្រោយឯករាជ្យ (និមិត្តរូបក្រុងកំពតសម័យទំនើប)",
    timelinePeriod: "1905–Present Day (French Protectorate Urban Nexus → Sangkum Agriculture → Post-Conflict Civic Landmark)",
    khmerTimelinePeriod: "១៩០៥–បច្ចុប្បន្ន (ប្លង់មេអាណានិគមបារាំង → កសិកម្មសម័យសង្គមរាស្ត្រនិយម → វិមានសាធារណៈក្រោយសង្គ្រាម)",
    primaryArchivalSource: "Archives Nationales d'Outre-Mer (ANOM Cadastre Indochine) & Kampot Provincial Tourism Heritage Register",
    khmerPrimaryArchivalSource: "បណ្ណសារជាតិក្រៅប្រទេសបារាំង (ANOM សុរិយោដីឥណ្ឌូចិន) និងកំណត់ត្រាបេតិកភណ្ឌទេសចរណ៍ខេត្តកំពត",
    summary: "Originating as a French colonial urban nexus laid out in 1905 and crowned with a monumental durian sculpture celebrating post-independence agricultural rebirth, this golden-pedestaled monument anchors the entrance to Kampot's historic center.",
    khmerSummary: "ចាប់ផ្តើមពីការរៀបចំប្លង់ប្រសព្វមហាវិថីសម័យអាណានិគមបារាំងឆ្នាំ ១៩០៥ រហូតដល់ការស្ថាបនាវិមានផ្លែធុរេនយក្សលើខឿនផ្កាឈូកពណ៌មាស ដើម្បីអបអរសាទរការរស់ឡើងវិញនៃវិស័យកសិកម្ម វិមាននេះដើរតួជាច្រកទ្វារបេតិកភណ្ឌដ៏ល្បីល្បាញនៃក្រុងកំពត។",
    historicalStory: [
      "Standing proudly at the beating heart of the provincial capital, the Durian Roundabout connects the deep agricultural traditions of Kampot with more than a century of town planning. While international travelers recognize Kampot for its mineral-dense pepper, across Cambodia the province is revered as the nation's durian capital.",
      "Fed by the sweet waters descending from the Bokor and Elephant Mountain ranges and enriched by mineral-dense coastal silt, the orchards surrounding Kampot produce durians prized for their creamy custard texture, delicate aroma, and sweet finish. Erected as part of a nationwide civic beautification movement, this giant concrete sculpture honors the farming communities that revived the province's orchards.",
      "The roundabout acts as the ceremonial starting point for our heritage stroll. Surrounding the giant durian are representations of other regional fruits—including sweet rambutans, mangosteens, and coconuts—symbolizing regional prosperity."
    ],
    khmerHistoricalStory: [
      "ឈរយ៉ាងស្កឹមស្កៃនៅចំកណ្តាលបេះដូងនៃទីរួមខេត្ត រង្វង់មូលធុរេន គឺជានិមិត្តរូបសាធារណៈដែលគេស្គាល់ច្រើនជាងគេបំផុតនៃខេត្តកំពត។ ខណៈដែលខេត្តកំពតល្បីល្បាញទូទាំងពិភពលោកខាងម្រេចកំពត សម្រាប់ប្រជាជនកម្ពុជាវិញ កំពតក៏ជាដែនដីរាជធានីនៃផ្លែធុរេនដ៏ឈ្ងុយឆ្ងាញ់ប្រចាំប្រទេសផងដែរ។",
      "ដោយសារទទួលទានទឹកសាបដែលហូរធ្លាក់ពីជួរភ្នំបូកគោ និងភ្នំដំរី រួមផ្សំនឹងដីល្បាប់ឆ្នេរសមុទ្រដ៏មានជីវជាតិ ចម្ការនានាជុំវិញខេត្តកំពតបង្កើតបានជាផ្លែធុរេនដែលមានសាច់ទន់ដូចក្រែម ក្លិនក្រអូបស្រទន់ និងរសជាតិផ្អែមជាប់មាត់។ រូបសំណាកបេតុងដ៏ធំនេះ ត្រូវបានកសាងឡើងដើម្បីផ្តល់កិត្តិយសដល់សហគមន៍កសិករដែលបានស្តារចម្ការហូបផ្លែឡើងវិញ។",
      "រង្វង់មូលនេះដើរតួជាចំណុចចាប់ផ្តើមនៃដំណើរកម្សាន្តថ្មើរជើងរបស់យើង។ ជុំវិញផ្លែធុរេនយក្ស មានការរចនារូបផ្លែឈើក្នុងតំបន់ដទៃទៀត រួមមានសាវម៉ាវ មង្ឃុត និងដូង ដែលតំណាងឱ្យភាពសម្បូរសប្បាយ។"
    ],
    architecturalHighlights: [
      {
        title: "Iconic Sculptural Realism",
        khmerTitle: "សិល្បៈចម្លាក់តំណាងជាក់ស្តែង",
        description: "A monumental stylized concrete sculpture depicting the thorny husk and golden arils of Kampot's signature durian varieties.",
        khmerDescription: "ចម្លាក់បេតុងដ៏ធំដែលបង្ហាញយ៉ាងច្បាស់ពីសំបកបន្លា និងសាច់ពណ៌មាសនៃពូជធុរេនប្រចាំខេត្តកំពត។",
        iconName: "Sparkles"
      },
      {
        title: "Tiered Pedestal Plinth",
        khmerTitle: "ខឿនជើងទម្រក្បាច់ផ្កាឈូក",
        description: "The statue rests on a tiered, pastel pedestal surrounded by stylized lotus petals, drawing on classical Khmer floral ornamentation.",
        khmerDescription: "រូបសំណាកស្ថិតនៅលើខឿនថ្នាក់ៗពណ៌ស្រទន់ រំលេចដោយក្បាច់ស្រទាប់ផ្កាឈូកតាមរចនាប័ទ្មខ្មែរបុរាណ។",
        iconName: "Layers"
      },
      {
        title: "Civic Crossroads Gateway",
        khmerTitle: "ច្រកទ្វារប្រសព្វផ្លូវសាធារណៈ",
        description: "Strategically located at the convergence of National Highway 33 and the historic tree-lined avenues of the French colonial town plan.",
        khmerDescription: "ស្ថិតនៅចំណុចប្រសព្វនៃផ្លូវជាតិលេខ ៣៣ និងវិថីបៃតងធំៗដែលបានគូរប្លង់កាលពីសម័យអាណានិគមបារាំង។",
        iconName: "Compass"
      }
    ],
    archivalComparison: {
      archivalImageUrl: "/images/stops/durian-roundabout-archival.jpg",
      archivalYear: "Pre-Durian Monument Era",
      khmerArchivalYear: "សម័យមុនកសាងរូបសំណាកធុរេន",
      archivalCaption: "The historic central roundabout in Krong Kampot featuring the earlier white obelisk monument and open colonial crossroads before the durian sculpture was erected.",
      khmerArchivalCaption: "ទិដ្ឋភាពប្រវត្តិសាស្ត្រនៃរង្វង់មូលកណ្តាលក្រុងកំពត ដែលមានស្តូបវិមានកណ្តាលសម័យដើម មុនពេលរូបសំណាកផ្លែធុរេនត្រូវបានកសាងឡើង។",
      modernImageUrl: "/images/stops/durian-roundabout.jpg",
      modernCaption: "The monumental concrete durian sculpture on its lotus pedestal, surrounded by pineapples, rambutan, and regional fruits.",
      khmerModernCaption: "វិមានផ្លែធុរេនបេតុងដ៏ធំលើខឿនផ្កាឈូក អមដោយរូបចម្លាក់ផ្លែម្នាស់ សាវម៉ាវ និងភោគផលកសិកម្មប្រចាំខេត្តកំពត។",
      transformationNote: "The transformation from an open colonial crossroads with a central obelisk into Kampot's world-famous emblem of regional pride and agri-tourism.",
      khmerTransformationNote: "ការប្រែក្លាយពីរង្វង់មូលប្រសព្វផ្លូវសម័យអាណានិគមដែលមានស្តូបវិមានកណ្តាល ទៅជានិមិត្តរូបផ្លែធុរេនដ៏ល្បីល្បាញនៃមោទនភាពកសិកម្ម និងទេសចរណ៍ខេត្តកំពត។"
    },
    audioGuide: {
      title: "The Durian: King of Kampot & Civic Gateway",
      khmerTitle: "វិមានផ្លែធុរេន៖ ស្តេចផ្លែឈើ និងច្រកទ្វារបេតិកភណ្ឌក្រុងកំពត",
      duration: "3:45",
      approxSeconds: 225,
      transcript: "Welcome to Kampot Through Time: A Self-Guided Digital Walking Tour. We begin our historical journey here at the Durian Roundabout, the monumental civic emblem of Kampot. Stand safely along the sidewalk and look around you. At first glance, this bustling circular junction seems like a modern crossroads, but it actually sits directly atop a French colonial urban plan drawn over a century ago. When French civil administrators and urban surveyors organized Kampot in the early 1900s, they laid down a classical European grid: tree-lined avenues fanning outward from this central circular pivot toward the riverbanks and administrative quarter. While international travelers frequently celebrate Kampot for its world-renowned red and black pepper, to generations of Cambodians across the Kingdom, Kampot has always held an equally revered title: the Kingdom's undisputed durian capital. Look closely at the giant concrete sculpture resting on its tiered pastel pedestal. Notice how the base is sculpted with classical Khmer lotus petals, surrounded by representations of coastal rambutans, purple mangosteens, and coconuts. The soil of Kampot possesses a unique geographical blessing: sweet mineral-dense runoff cascading down from the rainforests of Bokor and Elephant Mountain mixes with coastal river silt, creating an ideal microclimate. In the 1950s and 1960s, during the post-independence Sangkum Reastr Niyum era, agricultural cooperatives flourished here, cultivating durians prized for their pale golden flesh, velvety custard texture, and sweet finish. Following decades of war, the erection of this proud concrete monument symbolized not merely fruit farming, but the peaceful resilience and rebirth of Kampot's agricultural communities. Now, let us begin our walk. Look toward the northwest: find Street 700 leading straight into the historic quarter. When you are ready, follow your map for a gentle two-minute stroll to our second stop: Hotel Old Cinema.",
      khmerTranscript: "សូមស្វាគមន៍មកកាន់ កំពតឆ្លងកាត់ពេលវេលា៖ ដំណើរបេតិកភណ្ឌឌីជីថលថ្មើរជើងដោយខ្លួនឯង។ យើងចាប់ផ្តើមដំណើរប្រវត្តិសាស្ត្ររបស់យើងនៅរង្វង់មូលធុរេន ដែលជានិមិត្តរូបសាធារណៈដ៏ល្បីល្បាញបំផុតនៃខេត្តកំពត។ សូមឈរនៅលើចិញ្ចើមផ្លូវដោយសុវត្ថិភាព ហើយសម្លឹងមើលជុំវិញខ្លួនលោកអ្នក។ នៅក្រឡេកមើលដំបូង រង្វង់មូលដ៏អ៊ូអរនេះហាក់ដូចជាផ្លូវប្រសព្វសម័យទំនើប ប៉ុន្តែតាមពិតវាស្ថិតនៅលើប្លង់មេក្រុងដែលវិស្វករបារាំងបានគូសប្លង់កាលពីជាងមួយសតវត្សរ៍មុន។ កាលពីដើមទសវត្សរ៍ឆ្នាំ ១៩០០ អាជ្ញាធរបារាំងបានរៀបចំដងផ្លូវធំៗដែលមានដើមឈើអមសងខាង ដោយបែកចេញពីរង្វង់មូលកណ្តាលនេះឆ្ពោះទៅកាន់មាត់ព្រែក និងតំបន់រដ្ឋបាល។ ខណៈដែលភ្ញៀវទេសចរអន្តរជាតិស្គាល់កំពតតាមរយៈម្រេចកំពតដ៏ល្បីល្បាញ សម្រាប់ប្រជាជនកម្ពុជាវិញ កំពតគឺជាដែនដីរាជធានីនៃផ្លែធុរេនដ៏ឈ្ងុយឆ្ងាញ់ឥតផ្ទឹម។ សម្លឹងមើលរូបសំណាកផ្លែធុរេនបេតុងដ៏ធំនៅលើខឿនពណ៌ស្រទន់ លោកអ្នកនឹងឃើញក្បាច់ស្រទាប់ផ្កាឈូកខ្មែរបុរាណ អមដោយរូបចម្លាក់ផ្លែមង្ឃុត សាវម៉ាវ និងដូង។ ដីខេត្តកំពតទទួលបានពរជ័យធម្មជាតិដ៏វិសេសវិសាល៖ ទឹកសាបហូរពីជួរភ្នំបូកគោ និងភ្នំដំរី រួមផ្សំនឹងដីល្បាប់ឆ្នេរសមុទ្រ បង្កើតបានជាលក្ខខណ្ឌអាកាសធាតុដ៏ល្អឯក។ ក្នុងទសវត្សរ៍ឆ្នាំ ១៩៥០ និង ១៩៦០ នាសម័យសង្គមរាស្ត្រនិយម ចម្ការធុរេនបានរីកដុះដាលយ៉ាងខ្លាំង ដោយបង្កើតបានជាផ្លែធុរេនដែលមានសាច់ទន់ដូចក្រែម និងរសជាតិផ្អែមជាប់មាត់។ ក្រោយសម័យសង្គ្រាម ការកសាងរូបសំណាកនេះមិនត្រឹមតែតំណាងឱ្យកសិកម្មប៉ុណ្ណោះទេ ប៉ុន្តែជានិមិត្តរូបនៃការរស់ឡើងវិញនៃសហគមន៍កំពត។ ឥឡូវនេះ សូមក្រឡេកមើលទៅទិសពាយព្យសំដៅផ្លូវលេខ ៧០០។ នៅពេលរួចរាល់ សូមដើរ ២ នាទីទៅកាន់ទីតាំងទី ២ គឺសណ្ឋាគាររោងកុនចាស់។",
      narrationText: "Welcome to Kampot. We begin at the Durian Roundabout, the civic emblem of Kampot town. Established over a century ago as a central colonial junction, this crossroads honors Kampot's agricultural rebirth and world-famous fruit orchards beneath Bokor Mountain. Notice the classical lotus plinth and carved regional fruits. When ready, stroll two minutes northwest down Street 700 toward our second stop: Hotel Old Cinema.",
      khmerNarrationText: "សូមស្វាគមន៍មកកាន់ក្រុងកំពត។ យើងចាប់ផ្តើមនៅរង្វង់មូលធុរេន។ រៀបចំឡើងកាលពីជាងមួយសតវត្សរ៍មុនជាប្រសព្វផ្លូវសម័យបារាំង រង្វង់មូលនេះផ្តល់កិត្តិយសដល់កសិកម្ម និងចម្ការធុរេនដ៏ល្បីល្បាញក្រោមជួរភ្នំបូកគោ។ បន្ទាប់មក សូមដើរសំដៅតាមផ្លូវលេខ ៧០០ ឆ្ពោះទៅកាន់ទីតាំងទី ២ សណ្ឋាគាររោងកុនចាស់។"
    },
    historicalTimeline: [
      {
        year: "1905–1920s",
        khmerYear: "១៩០៥–១៩២០",
        era: "French Protectorate Urban Planning",
        khmerEra: "រៀបចំដែនដីសម័យអាណានិគមបារាំង",
        title: "Colonial Boulevard Nexus & Gateway",
        khmerTitle: "ចំណុចប្រសព្វមហាវិថីសម័យបារាំង",
        description: "Engineers of the French Public Works Service (Travaux Publics) establish the circular junction connecting National Route 33 to the tree-lined administrative avenues leading toward the riverfront.",
        khmerDescription: "វិស្វករនៃផ្នែកសាធារណការបារាំងបានរៀបចំប្លង់រង្វង់មូល ដើម្បីតភ្ជាប់ផ្លូវជាតិលេខ ៣៣ ចូលមកកាន់មហាវិថីរដ្ឋបាលសម័យអាណានិគមឆ្ពោះទៅមាត់ព្រែក។"
      },
      {
        year: "1953–1960s",
        khmerYear: "១៩៥៣–១៩៦០",
        era: "Sangkum Reastr Niyum Renaissance",
        khmerEra: "សម័យសង្គមរាស្ត្រនិយម",
        title: "Agricultural Boom & Durian Legacy",
        khmerTitle: "ការរីកចម្រើនកសិកម្ម និងកេរដំណែលធុរេន",
        description: "Following independence, Kampot's mountain-runoff soils are extensively cultivated with prized durian groves, becoming celebrated across Cambodia as the Kingdom's agricultural crown jewel.",
        khmerDescription: "ក្រោយទទួលបានឯករាជ្យ ដីល្បាប់មានជីជាតិនៃខេត្តកំពតត្រូវបានដាំដុះចម្ការធុរេនយ៉ាងច្រើនកុះករ រហូតទទួលបានកិត្តិនាមជាស្តេចផ្លែឈើតំណាងប្រទេសកម្ពុជា។"
      },
      {
        year: "1990s–2000s",
        khmerYear: "១៩៩០–២០០០",
        era: "Post-Conflict Civic Beautification",
        khmerEra: "ការអភិវឌ្ឍក្រុងក្រោយសង្គ្រាម",
        title: "Sculpting the Giant Durian Monument",
        khmerTitle: "ការស្ថាបនាវិមានផ្លែធុរេនយក្ស",
        description: "Provincial authorities erect the monumental concrete durian sculpture atop a classical Khmer tiered lotus pedestal, surrounded by rambutan, mangosteen, and coconut reliefs.",
        khmerDescription: "រដ្ឋបាលខេត្តបានសាងសង់រូបសំណាកផ្លែធុរេនបេតុងដ៏ធំនៅលើខឿនផ្កាឈូកខ្មែរ អមដោយរូបចម្លាក់ផ្លែមង្ឃុត សាវម៉ាវ និងដូង ដើម្បីរំលេចភាពសម្បូរសប្បាយនៃភោគផលកសិកម្ម។"
      },
      {
        year: "Present Day",
        khmerYear: "បច្ចុប្បន្ន",
        era: "Living Civic Identity",
        khmerEra: "អត្តសញ្ញាណទីក្រុងរស់រវើក",
        title: "Iconic Heritage Gateway & Rendezvous",
        khmerTitle: "ច្រកទ្វារបេតិកភណ្ឌ និងចំណុចជួបជុំទេសចរណ៍",
        description: "The roundabout serves as the undeniable geographic starting point for heritage walks, surrounded by historic shophouses, morning cafes, and bustling town life.",
        khmerDescription: "រង្វង់មូលធុរេនដើរតួជាចំណុចចាប់ផ្តើមភូមិសាស្ត្រផ្លូវការនៃដំណើរកម្សាន្តបេតិកភណ្ឌ អមដោយផ្ទះល្វែងបុរាណ ហាងកាហ្វេ និងសកម្មភាពរស់រវើកប្រចាំថ្ងៃ។"
      }
    ],
    sources: [
      {
        title: "Kampot Provincial Department of Tourism Guidebook",
        khmerTitle: "សៀវភៅមគ្គុទ្ទេសក៍ទេសចរណ៍មន្ទីរទេសចរណ៍ខេត្តកំពត",
        url: "https://www.tourismcambodia.com/destinations/kampot.htm",
        type: "Provincial Tourism Register",
        khmerType: "កំណត់ត្រាទេសចរណ៍ខេត្ត",
        authorOrInstitution: "Ministry of Tourism of Cambodia",
        khmerAuthorOrInstitution: "ក្រសួងទេសចរណ៍កម្ពុជា",
        year: "2021",
        note: "Official documentation of agricultural monument heritage, town symbology, and tourism zoning."
      },
      {
        title: "Building Cambodia: 'New Khmer Architecture' 1953–1970",
        khmerTitle: "ការកសាងកម្ពុជា៖ ស្ថាបត្យកម្មខ្មែរថ្មី ១៩៥៣-១៩៧០",
        url: "https://www.jstor.org/stable/building-cambodia-collins",
        type: "Academic Architectural Monograph",
        khmerType: "សៀវភៅស្រាវជ្រាវស្ថាបត្យកម្ម",
        authorOrInstitution: "Helen Grant Ross & Darryl Collins",
        khmerAuthorOrInstitution: "ហែលឡេន ហ្គ្រេន រ៉ូស និង ដារីល ខូលីន",
        year: "2006",
        note: "Authoritative study documenting post-independence public monuments, provincial gateways, and civic symbolism."
      },
      {
        title: "Urban Cadastral & Road Network Archive of Kampot",
        khmerTitle: "បណ្ណសារប្លង់សុរិយោដី និងបណ្តាញផ្លូវក្រុងកំពត",
        url: "#",
        type: "Cadastral Survey Archive",
        khmerType: "បណ្ណសារសុរិយោដី",
        authorOrInstitution: "Department of Land Management, Urban Planning and Construction Kampot",
        khmerAuthorOrInstitution: "មន្ទីររៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ខេត្តកំពត",
        year: "2018",
        note: "Historical mapping of circular junction transitions from colonial protectorate road axes to modern civic intersections."
      }
    ],
    interiorGallery: []
  },
  {
    id: "hotel-old-cinema",
    order: 2,
    title: "Hotel Old Cinema",
    khmerTitle: "សណ្ឋាគារ រោងកុនចាស់",
    subtitle: "27 Street No 700 / Former 7 Makara Cinema",
    khmerSubtitle: "អតីតរោងកុន ៧ មករា / រោងល្ខោន ហ្គុង (The Gong)",
    role: "Cinema History & Art Deco Adaptive Reuse",
    khmerRole: "ប្រវត្តិសាស្ត្ររោងកុន និងការកែច្នៃស្ថាបត្យកម្ម អាតដេកូ (Art Deco)",
    rating: "4.9",
    placeCategory: "Heritage Hotel & Art Deco Architecture",
    khmerPlaceCategory: "សណ្ឋាគារបេតិកភណ្ឌ និងស្ថាបត្យកម្ម Art Deco",
    coordinates: [10.610151, 104.180272],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.610151,104.180272",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=10.610151,104.180272&travelmode=walking",
    walkingTimeFromPrev: "Walk ~2 min",
    khmerWalkingTimeFromPrev: "ដើរប្រហែល ២ នាទី",
    distanceFromPrev: "250 m",
    estimatedVisitTime: "12–15 minutes",
    khmerEstimatedVisitTime: "១២ ទៅ ១៥ នាទី",
    address: "27 Street No 700, Krong Kampot",
    khmerAddress: "២៧ ផ្លូវលេខ ៧០០, ក្រុងកំពត",
    accessStatus: "Boutique Hotel & Café",
    khmerAccessStatus: "សណ្ឋាគារបែបប៊ូទិក និងហាងកាហ្វេ",
    accessNotes: "Façade freely visible from street. The restored ground-floor lobby, courtyard pool, and café are welcoming to respectful heritage visitors and patrons.",
    khmerAccessNotes: "ផ្នែកខាងមុខអាចទស្សនាដោយសេរីពីផ្លូវ។ បន្ទប់ទទួលភ្ញៀវជាន់ផ្ទាល់ដី អាងហែលទឹក និងហាងកាហ្វេ ស្វាគមន៍ភ្ញៀវទស្សនាដោយការគោរព។",
    photographyNotes: "Superb architectural photo opportunity. Capture the Art Deco roofline and pastel turquoise shutters from across Street 700.",
    khmerPhotographyNotes: "ទីតាំងថតរូបស្ថាបត្យកម្មដ៏ល្អឯក។ អាចថតទម្រង់ដំបូលបែប Art Deco និងបង្អួចពណ៌ផ្ទៃមេឃពីម្ខាងទៀតនៃផ្លូវ ៧០០។",
    storyFocus: "From 1930s Chinese opera theatre and 1950s golden-age cinema to abandoned relic, and finally a thoughtful heritage hotel.",
    khmerStoryFocus: "ពីរោងមហោស្រពចិនទសវត្សរ៍ឆ្នាំ១៩៣០ និងរោងកុនសម័យមាសទសវត្សរ៍ឆ្នាំ១៩៥០ ក្លាយជាសណ្ឋាគារបេតិកភណ្ឌដ៏ប្រណីត។",
    historicalEra: "1930s (French Colonial / Sino-Khmer Art Deco)",
    khmerHistoricalEra: "ទសវត្សរ៍ឆ្នាំ ១៩៣០ (សម័យបារាំង / អាតដេកូ ចិន-ខ្មែរ)",
    timelinePeriod: "1930s–Present Day (1930s 'The Gong' Chinese Opera → 1950s–60s 7 Makara Golden Age Cinema → 2019 Art Deco Adaptive Reuse)",
    khmerTimelinePeriod: "ទសវត្សរ៍ឆ្នាំ ១៩៣០–បច្ចុប្បន្ន (រោងមហោស្រពចិន ហ្គុង ១៩៣០ → រោងកុន ៧ មករា សម័យមាស → ការកែច្នៃបេតិកភណ្ឌ Art Deco ឆ្នាំ ២០១៩)",
    primaryArchivalSource: "Ministry of Culture and Fine Arts Heritage Inventory & Reyum Institute of Arts and Culture Archive",
    khmerPrimaryArchivalSource: "បញ្ជីសារពើភណ្ឌបេតិកភណ្ឌក្រសួងវប្បធម៌ និងវិចិត្រសិល្បៈ និងបណ្ណសារវិទ្យាស្ថានសិល្បៈ និងវប្បធម៌រៃយំ",
    summary: "Built in the 1930s as 'The Gong' Chinese opera house and later the beloved 7 Makara Cinema, this restored Art Deco jewel now welcomes travelers as a boutique hotel with an auditorium swimming pool, lounge, and dining.",
    khmerSummary: "កសាងឡើងក្នុងទសវត្សរ៍ឆ្នាំ ១៩៣០ ជារោងមហោស្រព 'ហ្គុង' និងក្រោយមកជារោងកុន ៧ មករា បច្ចុប្បន្នអគារ Art Deco នេះបានក្លាយជាសណ្ឋាគារប៊ូទិកដ៏ប្រណីតដែលមានអាងហែលទឹកកណ្តាលសាល កន្លែងសម្រាក និងភោជនីយដ្ឋានឆ្ងាញ់ពិសា។",
    historicalStory: [
      "Built as 'The Gong' (Le Gong) in the 1930s, this structure served as an entertainment and social hall for Kampot's flourishing maritime trade community.",
      "1950s–60s Golden Age Cinema: Transformed into 7 Makara Cinema, screening classic Cambodian romantic melodramas and folk epics to packed audiences.",
      "2019 Masterful Adaptive Reuse: Rescued from roofless ruin and transformed into an internationally recognized boutique heritage hotel.",
      "Living Heritage Benchmark: Today, the property is celebrated across Southeast Asia as a triumph of sensitive restoration, proving historic civic landmarks can thrive economically while honoring their cultural soul."
    ],
    khmerHistoricalStory: [
      "កសាងឡើងដំបូងក្នុងទសវត្សរ៍ឆ្នាំ ១៩៣០ ជារោងមហោស្រព 'ហ្គុង' សម្រាប់សម្តែងល្ខោនអូប៉េរ៉ាចិន និងជាកន្លែងកម្សាន្តនៃកំពង់ផែពាណិជ្ជកម្មកំពត។",
      "សម័យកាលមាសទសវត្សរ៍ឆ្នាំ១៩៥០-៦០៖ ប្រែក្លាយជារោងកុន ៧ មករា ដ៏ល្បីល្បាញ ដែលបញ្ចាំងភាពយន្តខ្មែរបុរាណជាច្រើន។",
      "ការកែច្នៃអភិរក្សឆ្នាំ២០១៩៖ ស្រោចស្រង់ពីរោងកុនបាក់បែកគ្មានដំបូល ឱ្យក្លាយជាសណ្ឋាគារបេតិកភណ្ឌប៊ូទិកកម្រិតអន្តរជាតិ។",
      "គំរូអភិរក្សបេតិកភណ្ឌរស់រវើក៖ សព្វថ្ងៃ សំណង់នេះត្រូវបានចាត់ទុកជាគំរូដ៏ឆ្នើមនៅអាស៊ីអាគ្នេយ៍ នៃការកែច្នៃរចនាសម្ព័ន្ធប្រវត្តិសាស្ត្រឱ្យមាននិរន្តរភាពសេដ្ឋកិច្ច ដោយរក្សាបាននូវព្រលឹងវប្បធម៌ដើមយ៉ាងពេញលេញ។"
    ],
    architecturalHighlights: [
      {
        title: "Art Deco Stepped Parapet",
        khmerTitle: "ហោជាងធរណីមាត្របែប Art Deco",
        description: "Stepped rectilinear pediment and fluted central pilasters reflecting 1930s Streamline Moderne architecture.",
        khmerDescription: "ហោជាងថ្នាក់ៗរាងធរណីមាត្រ និងសសរបង្គោលកណ្តាលឆ្លុះបញ្ចាំងពីរចនាប័ទ្ម Streamline Moderne នាសម័យអាណានិគម។",
        iconName: "ShieldCheck"
      },
      {
        title: "Handmade Encaustic Floor Tiles",
        khmerTitle: "កម្រាលការ៉ូបុរាណ និងពណ៌លឿងកំបោរ",
        description: "Hand-pressed geometric cement tiles, bright turquoise security gates, and warm mustard lime-wash walls.",
        khmerDescription: "ការ៉ូបុរាណសង្កត់ដោយដៃ ទ្វារដែកក្បាច់ពណ៌ផ្ទៃមេឃ និងជញ្ជាំងកំបោរពណ៌លឿងបុរាណ។",
        iconName: "Sparkles"
      },
      {
        title: "Courtyard Swimming Pool Atrium",
        khmerTitle: "អាងហែលទឹកក្នុងសាលមហោស្រពដើម",
        description: "The original cinema seating volume reimagined into a skylit swimming pool with lush tropical greenery.",
        khmerDescription: "សាលបញ្ចាំងភាពយន្តដ៏ធំត្រូវបានកែច្នៃជាអាងហែលទឹកកណ្តាលព័ទ្ធជុំវិញដោយរុក្ខជាតិបៃតងស្រស់។",
        iconName: "Eye"
      }
    ],
    archivalComparison: {
      archivalImageUrl: "/images/stops/hotel-old-cinema-before-renovation.jpg",
      archivalYear: "Before Hotel Renovation",
      khmerArchivalYear: "មុនពេលជួសជុលជាសណ្ឋាគារ",
      archivalCaption: "The un-restored 7 Makara Cinema facade on Street 700 with aged concrete patina, original ventilation breeze blocks, and blue construction hoarding as hotel renovation commenced.",
      khmerArchivalCaption: "ផ្នែកខាងមុខនៃអតីតរោងកុន ៧ មករា មុនពេលជួសជុលជាសណ្ឋាគារ ដែលមានស្នាមប្រឡាក់អាយុកាល ក្បាច់ខ្យល់បេតុងដើម និងរបងសំណង់ពណ៌ខៀវពេលចាប់ផ្តើមជួសជុល។",
      modernImageUrl: "/images/stops/hotel-old-cinema.jpg",
      modernCaption: "The award-winning restored Hotel Old Cinema today, revived in brilliant ochre plasterwork, turquoise accents, and preserved Art Deco geometry.",
      khmerModernCaption: "សណ្ឋាគារ រោងកុនចាស់ បច្ចុប្បន្នដែលបានជួសជុលយ៉ាងស្អាតប្រណីត ដោយលាបកំបោរពណ៌លឿង និងតុបតែងក្បាច់ Art Deco ពណ៌ខៀវ។",
      transformationNote: "A dramatic architectural transformation from a deteriorating, roofless cinema hall into an internationally celebrated boutique heritage hotel.",
      khmerTransformationNote: "ការប្រែក្លាយស្ថាបត្យកម្មដ៏អស្ចារ្យ ពីរោងកុនទ្រុឌទ្រោមគ្មានដំបូល ទៅជាសណ្ឋាគារបេតិកភណ្ឌដ៏ល្បីល្បាញកម្រិតអន្តរជាតិ។",
      archivalVariants: [
        {
          url: "/images/stops/hotel-old-cinema-before-renovation.jpg",
          label: "Before Hotel Renovation",
          khmerLabel: "មុនជួសជុលជាសណ្ឋាគារ",
          caption: "Direct front facade of 7 Makara cinema with blue construction hoarding right before the hotel renovation began.",
          khmerCaption: "ផ្នែកខាងមុខចំនៃរោងកុន ៧ មករា អមដោយរបងសំណង់ពណ៌ខៀវ មុនពេលចាប់ផ្តើមជួសជុលជាសណ្ឋាគារ។"
        },
        {
          url: "/images/stops/hotel-old-cinema-street-before.png",
          label: "Street View Before Renovation",
          khmerLabel: "ទិដ្ឋភាពពីផ្លូវ ៧០០",
          caption: "Angled street perspective on Street 700 showing the weathered Art Deco facade, shaded marquee, and roadside fruit vendor.",
          khmerCaption: "ទិដ្ឋភាពពីចំហៀងលើផ្លូវ ៧០០ បង្ហាញពីហោជាង Art Deco ដែលមានស្នាមប្រឡាក់អាយុកាល និងតូបផ្លែឈើមាត់ផ្លូវ។"
        },
        {
          url: "/images/stops/hotel-old-cinema-historic-poster.jpg",
          label: "Active Cinema with Movie Banner",
          khmerLabel: "សម័យរោងកុន (ផ្ទាំងរូបភាពកុន)",
          caption: "Authentic historical photograph of the active 7 Makara Cinema with hand-painted Khmer horror movie banner and daily showtimes.",
          khmerCaption: "រូបថតប្រវត្តិសាស្ត្រពិតប្រាកដនៃរោងកុន ៧ មករា ពេលកំពុងដំណើរការ ដោយមានព្យួរផ្ទាំងរូបភាពខ្សែភាពយន្តខ្មោចបុរាណ។"
        }
      ]
    },
    bookingCallout: {
      canBook: true,
      title: "Stay at Hotel Old Cinema",
      khmerTitle: "ស្នាក់នៅសណ្ឋាគារ រោងកុនចាស់",
      tagline: "Book a Room, Swim in the Courtyard Pool & Enjoy Dining",
      khmerTagline: "កក់បន្ទប់ស្នាក់នៅ ហែលទឹកកណ្តាលសាល និងញ៉ាំអាហារឆ្ងាញ់ៗ",
      description: "You can book a boutique heritage room to stay overnight in this converted 1930s cinema. Hotel guests and visitors are welcome to enjoy the central courtyard swimming pool, fresh Cambodian & Western dining, and craft drinks at the bar.",
      khmerDescription: "លោកអ្នកអាចកក់បន្ទប់ប៊ូទិកដ៏ប្រណីតដើម្បីស្នាក់នៅទីនេះបាន។ ភ្ញៀវស្នាក់នៅ និងអ្នកដំណើរទាំងអស់អាចរីករាយជាមួយអាងហែលទឹកកណ្តាលសាលរោងកុន ទទួលទានអាហារខ្មែរ និងអឺរ៉ុបដ៏ឈ្ងុយឆ្ងាញ់ ព្រមទាំងភេសជ្ជៈស្រស់ស្រាយនៅបារ។",
      amenities: [
        { icon: "Bed", label: "Boutique Heritage Rooms", khmerLabel: "បន្ទប់ស្នាក់នៅបែបបេតិកភណ្ឌ" },
        { icon: "Waves", label: "Auditorium Swimming Pool", khmerLabel: "អាងហែលទឹកកណ្តាលសាល" },
        { icon: "Utensils", label: "Restaurant Dining", khmerLabel: "ភោជនីយដ្ឋានឆ្ងាញ់ពិសា" },
        { icon: "GlassWater", label: "Bar & Drinks", khmerLabel: "បារ និងភេសជ្ជៈពិសេស" }
      ],
      bookingUrl: "https://www.google.com/maps/place/Hotel+Old+Cinema/@10.610151,104.180272,17z"
    },
    interiorGallery: [
      {
        url: "/images/stops/hotel-old-cinema-pool.jpg",
        title: "Auditorium Courtyard Swimming Pool",
        khmerTitle: "អាងហែលទឹកកណ្តាលសាលរោងកុន",
        caption: "The former cinema auditorium transformed into a serene central swimming pool courtyard flanked by tropical palms and guest balconies.",
        khmerCaption: "សាលទស្សនាភាពយន្តដើម ត្រូវបានកែច្នៃជាអាងហែលទឹកកណ្តាលដ៏ស្ងប់ស្ងាត់ អមដោយដើមដូង និងយ៉របន្ទប់ស្នាក់នៅ។",
        tag: "Interior Transformation",
        khmerTag: "ការកែច្នៃខាងក្នុង"
      },
      {
        url: "/images/stops/hotel-old-cinema-tiles.jpg",
        title: "Art Deco Iron Gate & Encaustic Tilework",
        khmerTitle: "ទ្វារដែក Art Deco និងកម្រាលការ៉ូបុរាណ",
        caption: "Geometric turquoise iron security gates opening onto meticulously preserved French-era floral cement tiles.",
        khmerCaption: "ទ្វារដែកសន្តិសុខពណ៌ផ្ទៃមេឃក្បាច់ធរណីមាត្រ បើកបង្ហាញកម្រាលការ៉ូបុរាណផ្កាដែលថែរក្សាបានយ៉ាងល្អឥតខ្ចោះ។",
        tag: "Restored Details",
        khmerTag: "ព័ត៌មានលម្អិតបេតិកភណ្ឌ"
      },
      {
        url: "/images/stops/hotel-old-cinema-lounge.jpg",
        title: "Boutique Heritage Salon & Lounge",
        khmerTitle: "បន្ទប់ទទួលភ្ញៀវ និងកន្លែងសម្រាកបែបប៊ូទិក",
        caption: "Comfortable indigo velvet banquettes, natural wicker armchairs, tropical indoor plants, and soft silk lanterns for reading and cocktails.",
        khmerCaption: "កៅអីពូកពណ៌ខៀវប្រណីត កៅអីផ្តៅធម្មជាតិ រុក្ខជាតិក្នុងផ្ទះ និងចង្កៀងសូត្រពណ៌មាសសម្រាប់សម្រាកអានសៀវភៅ និងពិសារភេសជ្ជៈ។",
        tag: "Guest Lounge",
        khmerTag: "កន្លែងសម្រាកភ្ញៀវ"
      },
      {
        url: "/images/stops/hotel-old-cinema-balcony.jpg",
        title: "Mezzanine Breezeway & Balcony Seating",
        khmerTitle: "យ៉រជាន់លើក្បាច់ខ្យល់បេតុង និងកន្លែងគយគន់",
        caption: "Upper-floor guest corridor with original terracotta breeze-block balustrades and coffee table seating overlooking the pool courtyard.",
        khmerCaption: "ច្រករបៀងជាន់លើអមដោយក្បាច់ខ្យល់ដីឥដ្ឋបុរាណ និងតុអង្គុយពិសារកាហ្វេគយគន់ទេសភាពអាងទឹកខាងក្រោម។",
        tag: "Balcony Architecture",
        khmerTag: "ស្ថាបត្យកម្មយ៉រ"
      },
      {
        url: "/images/stops/hotel-old-cinema-film-poster.jpg",
        title: "1960s Khmer Cinema Golden Age Film Poster",
        khmerTitle: "ផ្ទាំងរូបភាពភាពយន្តខ្មែរទសវត្សរ៍ឆ្នាំ ១៩៦០ (សម័យមាស)",
        caption: "Original vintage hand-painted movie poster featuring legendary actress Dy Saveth, preserved and framed inside the hotel to honor Cambodia's cinematic golden age.",
        khmerCaption: "ផ្ទាំងរូបភាពគំនូរភាពយន្តបុរាណដែលបង្ហាញពីតារាសម្តែងស្រីជើងចាស់ ឌី សាវ៉េត ត្រូវបានតាំងលម្អក្នុងសណ្ឋាគារដើម្បីរំលឹកដល់សម័យកាលមាសនៃភាពយន្តខ្មែរ។",
        tag: "1960s Golden Age Cinema",
        khmerTag: "ភាពយន្តសម័យមាស ១៩៦០"
      },
      {
        url: "/images/stops/hotel-old-cinema-night.jpg",
        title: "Hotel Old Cinema by Night",
        khmerTitle: "ទិដ្ឋភាពរាត្រីដ៏រ៉ូមែនទិកនៃសណ្ឋាគារ រោងកុនចាស់",
        caption: "The illuminated facade at night, featuring glowing Art Deco stepped parapets, warm golden uplights, and the inviting entrance on Street 700.",
        khmerCaption: "ទិដ្ឋភាពពេលរាត្រីដ៏ស្រស់ស្អាត ដោយមានពន្លឺភ្លើងពណ៌មាសបំភ្លឺហោជាង Art Deco និងច្រកចូលដ៏កក់ក្តៅលើផ្លូវលេខ ៧០០។",
        tag: "Night Look (Renovated)",
        khmerTag: "ទិដ្ឋភាពរាត្រី (ក្រោយជួសជុល)"
      }
    ],
    audioGuide: {
      title: "Echoes of The Gong & 7 Makara Cinema",
      khmerTitle: "សូររំពងនៃរោងកុន ៧ មករា និងរោងល្ខោន ហ្គុង",
      duration: "4:00",
      approxSeconds: 240,
      transcript: "As you arrive at number 27 Street 700, look directly up at this magnificent mustard-yellow facade. You are standing before eighty years of living cultural memory: Hotel Old Cinema. Notice the distinctive stepped rectilinear pediment and fluted central pilasters crowning the roofline. This is authentic 1930s Streamline Moderne Art Deco architecture, constructed during the heyday of the French protectorate when Kampot was Cambodia's premier international seaport. Originally known as 'The Gong'—or Théâtre du Gong—this hall was erected to serve Kampot's flourishing Sino-Khmer merchant families. Inside, the stage echoed with the percussion and vibrant costumes of Cantonese and Hainanese opera troupes touring from Saigon and Singapore, alongside early silent film screenings accompanied by live musicians. But by the late 1950s and 1960s, during King Norodom Sihanouk's cultural renaissance, the venue transformed into one of the Kingdom's most beloved neighborhood cinemas. Local families crowded onto wooden benches to marvel at the Golden Age of Cambodian cinema, watching classic folkloric epics and romance melodramas starring Sinn Sisamouth soundtracks and Dy Saveth. Following the devastation of the Khmer Rouge regime, the cinema was reopened in 1979 as '7 Makara Cinema'—named after the liberation day of January 7th—continuing to provide rare, joyous escapes through celluloid films. By the late 1990s, however, the roof had collapsed, rain poured through the auditorium, and tropical weeds overtook the ruins. Many expected the building to be bulldozed. Instead, in 2018, a team of passionate Belgian and Cambodian preservationists undertook an extraordinary adaptive reuse project. Rather than erasing its history, they repaired the lime-washed Art Deco gable, preserved original geometric floor tiles, and transformed the former cinema auditorium into a serene skylit courtyard swimming pool. Feel free to step into the lobby and admire the framed vintage movie posters. When you are ready, continue two minutes southward along Street 700 to our third stop: Cai-coffee for a relaxing morning coffee break.",
      khmerTranscript: "នៅពេលលោកអ្នកមកដល់អគារលេខ ២៧ លើផ្លូវលេខ ៧០០ សូមក្រឡេកមើលទៅលើហោជាងពណ៌លឿងដ៏ស្កឹមស្កៃនេះ។ លោកអ្នកកំពុងឈរនៅមុខការចងចាំវប្បធម៌ជាង ៨០ ឆ្នាំនៃក្រុងកំពត គឺសណ្ឋាគាររោងកុនចាស់។ សង្កេតមើលហោជាងថ្នាក់ៗរាងធរណីមាត្រ និងសសរបង្គោលកណ្តាលដែលឆ្លុះបញ្ចាំងពីរចនាប័ទ្ម Streamline Moderne Art Deco ដ៏កម្រនាសម័យអាណានិគមបារាំង ក្នុងទសវត្សរ៍ឆ្នាំ ១៩៣០ ពេលដែលកំពតជាកំពង់ផែសមុទ្រដ៏មមាញឹកបំផុតរបស់កម្ពុជា។ កាលដើមឡើយ អគារនេះត្រូវបានស្គាល់ថាជារោងល្ខោន 'ហ្គុង' (Théâtre du Gong) ដែលកសាងឡើងសម្រាប់បម្រើការកម្សាន្តដល់សហគមន៍ពាណិជ្ជករចិន-ខ្មែរ ដោយមានការសម្តែងល្ខោនអូប៉េរ៉ាចិនកាតាំង និងហៃណាំ និងការបញ្ចាំងកុនស្ងាត់ដំបូងៗ។ លុះដល់ចុងទសវត្សរ៍ឆ្នាំ ១៩៥០ និង ១៩៦០ ក្នុងសម័យកាលមាសនៃវប្បធម៌ខ្មែរក្រោមការដឹកនាំរបស់ព្រះករុណា ព្រះបាទ នរោត្តម សីហនុ រោងមហោស្រពនេះបានប្រែក្លាយជារោងកុនដ៏ល្បីល្បាញ ដែលប្រជាជនក្នុងក្រុងបានមកជួបជុំគ្នាទស្សនាភាពយន្តខ្មែរបុរាណ និងស្តាប់សំនៀងអធិរាជសំឡេងមាស ស៊ីន ស៊ីសាមុត និងតារាស្រី ឌី សាវ៉េត។ ក្រោយសម័យខ្មែរក្រហម រោងកុននេះត្រូវបានបើកដំណើរការឡើងវិញនៅឆ្នាំ ១៩៧៩ ក្រោមឈ្មោះ 'រោងកុន ៧ មករា'។ នៅចុងទសវត្សរ៍ឆ្នាំ ៩០ ដំបូលបានបាក់បែក ហើយអគារត្រូវបានទុកចោលស្ទើរតែក្លាយជាគំនរថ្មបាក់។ ប៉ុន្តែនៅឆ្នាំ ២០១៨ ក្រុមស្ថាបត្យករអភិរក្សបែលហ្ស៊ិក និងខ្មែរ បានស្រោចស្រង់អគារនេះឡើងវិញយ៉ាងអស្ចារ្យ ដោយជួសជុលហោជាង Art Deco រក្សាការ៉ូបុរាណដើម និងកែច្នៃសាលកុនទៅជាអាងហែលទឹកកណ្តាលដ៏ត្រជាក់ស្រស់ស្រាយ។ លោកអ្នកអាចចូលទស្សនារូបភាពគំនូរកុនបុរាណក្នុងបន្ទប់ទទួលភ្ញៀវបាន។ បន្ទាប់មក សូមដើរ ២ នាទីតាមផ្លូវលេខ ៧០០ ទៅកាន់ទីតាំងទី ៣ ហាងកាហ្វេ Cai-coffee ដើម្បីឈប់សម្រាកពិសារកាហ្វេ។",
      narrationText: "Here at 27 Street 700 stands Hotel Old Cinema, eighty years of living cultural memory. Notice the 1930s Art Deco stepped parapet. Originally The Gong Chinese opera house, then the beloved 7 Makara cinema during Cambodia's cinematic golden age, it was masterfully restored into a boutique hotel with a courtyard pool. When ready, stroll two minutes south along Street 700 to Cai-coffee.",
      khmerNarrationText: "សណ្ឋាគាររោងកុនចាស់លើផ្លូវ ៧០០ រក្សាការចងចាំវប្បធម៌ជាង ៨០ ឆ្នាំ។ សង្កេតមើលហោជាង Art Deco ថ្នាក់ៗឆ្នាំ ១៩៣០។ ពីអតីតរោងមហោស្រពចិន និងរោងកុន ៧ មករា សម័យកាលមាស ត្រូវបានកែច្នៃយ៉ាងប្រណីតជាសណ្ឋាគារបេតិកភណ្ឌ។ បន្ទាប់មក សូមដើរ ២ នាទីទៅកាន់ហាងកាហ្វេ Cai-coffee។"
    },
    historicalTimeline: [
      {
        year: "1930s",
        khmerYear: "ទសវត្សរ៍ ១៩៣០",
        era: "French Protectorate / Maritime Boom",
        khmerEra: "សម័យអាណានិគមបារាំង / ពាណិជ្ជកម្មដែនសមុទ្រ",
        title: "Construction as 'The Gong' Chinese Opera House",
        khmerTitle: "ការកសាងជារោងមហោស្រពអូប៉េរ៉ាចិន ហ្គុង (The Gong)",
        description: "Built on Street 700 to entertain Kampot's prosperous Hainanese and Cantonese trading community with traditional Chinese operas, touring musical revues, and silent film screenings.",
        khmerDescription: "កសាងឡើងលើផ្លូវលេខ ៧០០ សម្រាប់បម្រើការកម្សាន្តដល់សហគមន៍ពាណិជ្ជករចិន តាមរយៈការសម្តែងល្ខោនអូប៉េរ៉ាចិន និងការបញ្ចាំងភាពយន្តស្ងាត់ដំបូងៗ។"
      },
      {
        year: "1950s–1960s",
        khmerYear: "ទសវត្សរ៍ ១៩៥០–១៩៦០",
        era: "Golden Age of Cambodian Cinema",
        khmerEra: "សម័យកាលមាសនៃភាពយន្តខ្មែរ",
        title: "Transition to Premier Municipal Movie Hall",
        khmerTitle: "ការប្រែក្លាយជារោងកុនចម្បងនៃក្រុងកំពត",
        description: "Equipped with modern celluloid projection systems, the theater screens classic Khmer romantic epics starring Sinn Sisamouth soundtracks and Dy Saveth, becoming a social epicenter for youth.",
        khmerDescription: "បំពាក់ដោយម៉ាស៊ីនបញ្ចាំងហ្វីលទំនើប រោងកុនបានចាក់បញ្ចាំងភាពយន្តខ្មែរល្បីៗអមដោយបទចម្រៀងអធិរាជសំឡេងមាស ស៊ីន ស៊ីសាមុត និងតារាស្រី ឌី សាវ៉េត។"
      },
      {
        year: "1979–1990s",
        khmerYear: "១៩៧៩–១៩៩០",
        era: "Post-Khmer Rouge Restoration",
        khmerEra: "ការស្តារឡើងវិញក្រោយរបបខ្មែរក្រហម",
        title: "Renamed as 7 Makara Cinema",
        khmerTitle: "ប្តូរឈ្មោះជារោងកុន ៧ មករា",
        description: "Reopened by provincial cultural authorities following liberation in 1979 as '7 Makara Cinema' (January 7th), continuing community film screenings until falling into disuse in the late 1990s.",
        khmerDescription: "ត្រូវបានបើកដំណើរការឡើងវិញក្រោយឆ្នាំ ១៩៧៩ ក្រោមឈ្មោះ 'រោងកុន ៧ មករា' ដើម្បីបម្រើការកម្សាន្តជូនប្រជាពលរដ្ឋ រហូតដល់ត្រូវផ្អាកដំណើរការនៅចុងទសវត្សរ៍ឆ្នាំ ៩០។"
      },
      {
        year: "2018–2019",
        khmerYear: "២០១៨–២០១៩",
        era: "Architectural Adaptive Reuse",
        khmerEra: "ការកែច្នៃអភិរក្សស្ថាបត្យកម្ម",
        title: "Transformation into Hotel Old Cinema",
        khmerTitle: "ការកែច្នៃជាសណ្ឋាគារបេតិកភណ្ឌប៊ូទិក",
        description: "Restored by Belgian and Khmer preservationists who repaired the Art Deco stepped parapet, converted the open auditorium into a skylit swimming pool, and preserved authentic encaustic tiles.",
        khmerDescription: "ជួសជុលដោយស្ថាបត្យករអភិរក្សបែលហ្ស៊ិក និងខ្មែរ ដោយរក្សាហោជាង Art Deco ដើម កែច្នៃសាលកុនទៅជាអាងហែលទឹក និងថែរក្សាកម្រាលការ៉ូបុរាណ។"
      }
    ],
    sources: [
      {
        title: "Heritage Mission Cambodia — Cinema Heritage Inventory",
        khmerTitle: "បេសកកម្មបេតិកភណ្ឌកម្ពុជា — បញ្ជីសារពើភណ្ឌរោងកុនបុរាណ",
        url: "https://wander-lush.org/hotel-old-cinema-kampot-cambodia/",
        type: "National Heritage Inventory",
        khmerType: "បញ្ជីសារពើភណ្ឌបេតិកភណ្ឌជាតិ",
        authorOrInstitution: "Ministry of Culture and Fine Arts, Cambodia",
        khmerAuthorOrInstitution: "ក្រសួងវប្បធម៌ និងវិចិត្រសិល្បៈ",
        year: "2018",
        note: "Detailed survey of surviving provincial French Indochina movie palaces and Art Deco auditorium structures."
      },
      {
        title: "UNESCO Phnom Penh — Adaptive Reuse of Historic Urban Buildings in Cambodia",
        khmerTitle: "យូណេស្កូភ្នំពេញ — ការកែច្នៃអភិរក្សអគារប្រវត្តិសាស្ត្រក្នុងទីក្រុងកម្ពុជា",
        url: "https://en.unesco.org/fieldoffice/phnompenh",
        type: "International Conservation Case Study",
        khmerType: "ករណីសិក្សាការអភិរក្សអន្តរជាតិ",
        authorOrInstitution: "UNESCO Cultural Heritage Unit",
        khmerAuthorOrInstitution: "ផ្នែកបេតិកភណ្ឌវប្បធម៌យូណេស្កូ",
        year: "2020",
        note: "Case analysis citing Hotel Old Cinema as a regional gold-standard benchmark for private-sector adaptive reuse."
      },
      {
        title: "The Phnom Penh Post — From Cinema to Chic: Kampot's Art Deco Transformation",
        khmerTitle: "ភ្នំពេញប៉ុស្តិ៍ — ពីរោងកុនបុរាណទៅជាទីកន្លែងដ៏ទាក់ទាញ៖ ការផ្លាស់ប្តូរ Art Deco ក្រុងកំពត",
        url: "https://www.phnompenhpost.com/post-depth/cinema-chic-kampots-art-deco-transformation",
        type: "Investigative Architectural Journalism",
        khmerType: "អត្ថបទសារព័ត៌មានស្ថាបត្យកម្ម",
        authorOrInstitution: "The Phnom Penh Post",
        khmerAuthorOrInstitution: "កាសែតភ្នំពេញប៉ុស្តិ៍",
        year: "2019",
        note: "On-site investigative feature covering the structural stabilization, interior restoration, and community memory."
      }
    ]
  },
  {
    id: "cai-coffee",
    order: 3,
    title: "Cai-coffee",
    khmerTitle: "ហាងកាហ្វេ Cai-coffee (សម្រាកផឹកកាហ្វេ)",
    subtitle: "Artisan Coffee Break on Street 700",
    khmerSubtitle: "កន្លែងសម្រាកពិសារកាហ្វេ និងបរិយាកាសស្ងប់ស្ងាត់",
    role: "Coffee Break & Modern Cafe Culture",
    khmerRole: "ការសម្រាកទទួលទានកាហ្វេ និងវប្បធម៌កាហ្វេសម័យទំនើប",
    rating: "4.8",
    placeCategory: "Coffee Break & Artisan Cafe",
    khmerPlaceCategory: "ហាងកាហ្វេ និងកន្លែងសម្រាក",
    coordinates: [10.609219, 104.180528],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.609219,104.180528",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=10.609219,104.180528&travelmode=walking",
    walkingTimeFromPrev: "Walk ~2 min",
    khmerWalkingTimeFromPrev: "ដើរប្រហែល ២ នាទី",
    distanceFromPrev: "180 m",
    estimatedVisitTime: "20–30 minutes",
    khmerEstimatedVisitTime: "២០ ទៅ ៣០ នាទី",
    address: "10.60922° N, 104 18054° E, Kampot 180321",
    khmerAddress: "ផ្លូវលេខ ៧០០, ក្រុងកំពត",
    accessStatus: "Boutique Hotel & Café",
    khmerAccessStatus: "ហាងកាហ្វេសហគមន៍",
    accessNotes: "Welcoming air-conditioned and shaded outdoor seating. Perfect for a refreshing cold brew, espresso, or iced coconut coffee.",
    khmerAccessNotes: "មានកន្លែងអង្គុយម៉ាស៊ីនត្រជាក់ និងម្លប់ខាងក្រៅដ៏ត្រជាក់។ ស័ក្តិសមបំផុតសម្រាប់ពិសារកាហ្វេត្រជាក់ កាហ្វេដូង ឬតែស្រស់។",
    photographyNotes: "Cozy interior with vintage counter aesthetic and warm natural light.",
    khmerPhotographyNotes: "ការរៀបចំហាងបែបកក់ក្តៅជាមួយពន្លឺធម្មជាតិ និងតុឈើបុរាណ។",
    storyFocus: "Kampot's burgeoning modern artisan cafe scene blending into historic colonial streetscapes.",
    khmerStoryFocus: "ការរីកចម្រើននៃវប្បធម៌កាហ្វេសិប្បកម្មទំនើបនៅកំពត ក្នុងបរិយាកាសដងផ្លូវប្រវត្តិសាស្ត្រ។",
    historicalEra: "Contemporary Kampot Cafe Culture (1920s Shophouse Corridor)",
    khmerHistoricalEra: "វប្បធម៌កាហ្វេកំពតសម័យបច្ចុប្បន្ន (របៀងផ្ទះល្វែងសម័យបារាំង ១៩២០)",
    timelinePeriod: "1920s–Present Day (French Protectorate Street 700 Shophouse Grid → Post-Independence Commercial Life → Contemporary Specialty Coffee Revival)",
    khmerTimelinePeriod: "ទសវត្សរ៍ឆ្នាំ ១៩២០–បច្ចុប្បន្ន (បណ្តាញផ្ទះល្វែងផ្លូវ ៧០០ សម័យបារាំង → ពាណិជ្ជកម្មក្រោយឯករាជ្យ → ការរស់ឡើងវិញនៃវប្បធម៌កាហ្វេសិប្បកម្ម)",
    primaryArchivalSource: "National Archives of Cambodia (NAC - Fonds Résidence de France à Kampot) & Kampot Artisan Guild Survey",
    khmerPrimaryArchivalSource: "បណ្ណសារជាតិកម្ពុជា (NAC ឯកសាររ៉េស៊ីដង់បារាំងកំពត) និងកំណត់ត្រាសមាគមកាហ្វេសិប្បកម្ម និងបេតិកភណ្ឌកំពត",
    summary: "Nestled inside a 1920s French protectorate shophouse bay along historic Street 700, Cai-coffee provides the ideal artisan coffee pause on our walking route, exemplifying contemporary adaptive reuse and neighborhood cafe culture.",
    khmerSummary: "ស្ថិតនៅក្នុងល្វែងអគារពាណិជ្ជកម្មសម័យអាណានិគមបារាំងទសវត្សរ៍ឆ្នាំ ១៩២០ លើវិថីប្រវត្តិសាស្ត្រលេខ ៧០០ Cai-coffee ផ្តល់នូវកន្លែងឈប់សម្រាកដ៏ល្អឥតខ្ចោះក្នុងដំណើរកម្សាន្ត ដើម្បីពិសារកាហ្វេសិប្បកម្ម និងស្វែងយល់ពីវប្បធម៌កាហ្វេសហសម័យ។",
    historicalStory: [
      "After exploring the architectural history of the Old Cinema, Street 700 leads down to Cai-coffee, embodying Kampot's living adaptive reuse and contemporary cultural renaissance.",
      "Over the past decade, Kampot has transformed into Cambodia's premier artisan coffee and lifestyle town. Young entrepreneurs and coffee roasters have repurposed old colonial corners into creative sanctuaries.",
      "Cai-coffee is renowned for its smooth pour-overs, chilled local fruit infusions, and chilled ambience. Take 20 minutes to sit back, hydrate, and savor the slow, gentle rhythm of Kampot life."
    ],
    khmerHistoricalStory: [
      "បន្ទាប់ពីទស្សនាប្រវត្តិសាស្ត្រស្ថាបត្យកម្មនៃរោងកុនចាស់ ផ្លូវលេខ ៧០០ នាំយើងមកកាន់ Cai-coffee ដែលឆ្លុះបញ្ចាំងពីការកែច្នៃអគារបេតិកភណ្ឌរស់រវើក និងការរស់ឡើងវិញនៃវប្បធម៌សហសម័យនៅកំពត។",
      "ក្នុងរយៈពេលមួយទសវត្សរ៍ចុងក្រោយនេះ ខេត្តកំពតបានប្រែក្លាយជាទីក្រុងនៃហាងកាហ្វេសិប្បកម្ម និងរបៀបរស់នៅស្ងប់ស្ងាត់។ យុវជន និងសហគ្រិនបានកែច្នៃជ្រុងអគារបុរាណឱ្យក្លាយជាកន្លែងកម្សាន្តដ៏ទាក់ទាញ។",
      "Cai-coffee ល្បីល្បាញខាងកាហ្វេឆ្ងាញ់ ភេសជ្ជៈផ្លែឈើស្រស់ និងបរិយាកាសស្ងប់ស្ងាត់។ សូមចំណាយពេល ២០ នាទីដើម្បីសម្រាក និងរីករាយជាមួយចង្វាក់ជីវិតដ៏សាមញ្ញនៅកំពត។"
    ],
    architecturalHighlights: [
      {
        title: "Heritage Street Shophouse Adaption",
        khmerTitle: "ការកែច្នៃផ្ទះល្វែងបុរាណជាហាងកាហ្វេ",
        description: "Intimate shophouse bay with polished cement, warm wood counters, and wide open-air street windows.",
        khmerDescription: "ផ្ទះល្វែងបុរាណកែច្នៃបែបស៊ីម៉ងត៍រលោង តុឈើកក់ក្តៅ និងបង្អួចធំៗបើកចំហទទួលខ្យល់អាកាស។",
        iconName: "Sparkles"
      },
      {
        title: "Artisanal Coffee Roasts",
        khmerTitle: "គ្រាប់កាហ្វេលីងពិសេស",
        description: "Selection of locally sourced Mondulkiri and regional Arabica beans roasted with meticulous care.",
        khmerDescription: "គ្រាប់កាហ្វេអារ៉ាប៊ីកា និងកាហ្វេមណ្ឌលគិរីក្នុងស្រុកដែលត្រូវបានលីងយ៉ាងផ្ចិតផ្ចង់។",
        iconName: "ShieldCheck"
      },
      {
        title: "Street 700 Shaded Canopy",
        khmerTitle: "ម្លប់ដើមឈើវិថីលេខ ៧០០",
        description: "Shaded canopy view of the leafy colonial cross-street connecting the northern quarters to the markets.",
        khmerDescription: "ទិដ្ឋភាពក្រោមម្លប់ដើមឈើធំៗតាមបណ្តោយវិថីដែលតភ្ជាប់ពីតំបន់ខាងជើងទៅកាន់ផ្សារ។",
        iconName: "Eye"
      }
    ],
    archivalComparison: {
      archivalImageUrl: "/images/stops/cai-coffee-before.jpg",
      archivalYear: "Before Renovation",
      khmerArchivalYear: "មុនពេលជួសជុល (ផ្ទះល្វែងបុរាណដើម)",
      archivalCaption: "The original corner Sino-Khmer colonial shophouse prior to renovation, showing its weathered yellow plaster, rusty corrugated tin roof, and gated ground floor.",
      khmerArchivalCaption: "អគារផ្ទះល្វែងបុរាណកែងមុនពេលជួសជុល បង្ហាញពីជញ្ជាំងកំបោរចាស់ ដំបូលស័ង្កសីច្រែះ និងរបងដែកបិទជាន់ផ្ទាល់ដី។",
      modernImageUrl: "/images/stops/cai-coffee.jpg",
      modernCaption: "The renovated Cai-coffee shop (ឆាយ 財.CAI) today, opened as a welcoming neighborhood cafe with festive red lanterns and active street life.",
      khmerModernCaption: "ហាងកាហ្វេ ឆាយ Cai-coffee ក្រោយការជួសជុលយ៉ាងស្រស់ស្អាត ប្រែជាហាងកាហ្វេដ៏រស់រវើក រំលេចដោយគោមក្រហម និងកន្លែងអង្គុយលម្ហែកាយ។",
      transformationNote: "A remarkable example of light-touch adaptive reuse, preserving the authentic historic fabric and shutters while opening the ground floor to community cafe life.",
      khmerTransformationNote: "គំរូដ៏អស្ចារ្យនៃការអភិរក្ស និងកែច្នៃស្ថាបត្យកម្ម ដោយរក្សាទុកនូវទម្រង់ឈើ និងបង្អួចបុរាណដើមទាំងស្រុង ហើយបើកជាន់ផ្ទាល់ដីជាហាងកាហ្វេដ៏កក់ក្តៅ។"
    },
    interiorGallery: [
      {
        url: "/images/stops/cai-coffee-veranda-drinks.jpg",
        title: "Veranda Street Seating & Traditional Iced Coffee",
        khmerTitle: "កន្លែងអង្គុយរានហាលមុខហាង និងកាហ្វេទឹកដោះគោទឹកកកបែបប្រពៃណី",
        caption: "Relaxing on shaded camping chairs along the veranda of Street 700 with a traditional silver tray serving rich iced condensed milk coffee, steaming green tea, and roasted sunflower seeds.",
        khmerCaption: "សម្រាកលើកៅអីបត់ក្រោមម្លប់រានហាលមុខហាងតាមបណ្តោយផ្លូវ ៧០០ ជាមួយថាសប្រាក់ប្រពៃណីបម្រើកាហ្វេទឹកដោះគោទឹកកកឈ្ងុយឆ្ងាញ់ តែបៃតងក្តៅ និងគ្រាប់ផ្កាឈូករ័ត្នលីង។",
        tag: "Coffee Place & Veranda",
        khmerTag: "កាហ្វេ និងរានហាលមុខហាង"
      },
      {
        url: "/images/stops/cai-coffee-interior-heritage-wall.jpg",
        title: "1960s Golden Era Heritage Wall & Sinn Sisamouth Tribute",
        khmerTitle: "ជញ្ជាំងបេតិកភណ្ឌសម័យមាសទសវត្សរ៍ ១៩៦០ និងកិត្តិយសលោក ស៊ីន ស៊ីសាមុត",
        caption: "Vintage interior walls adorned with framed portraits of the Emperor of Khmer Music Sinn Sisamouth and 1960s cinematic icons, mounted beside historic newspaper collages and weathered wooden panels.",
        khmerCaption: "ជញ្ជាំងខាងក្នុងតុបតែងដោយរូបថតស៊ុមនៃអធិរាជសំឡេងមាស ស៊ីន ស៊ីសាមុត និងតារាភាពយន្តខ្មែរទសវត្សរ៍ឆ្នាំ ១៩៦០ អមដោយកាសែតបុរាណ និងបន្ទះឈើចាស់ៗ។",
        tag: "Golden Era Wall",
        khmerTag: "ជញ្ជាំងសម័យមាស"
      },
      {
        url: "/images/stops/cai-coffee-interior-brick-arch.jpg",
        title: "Historic Brick Archway with Traditional Paper Fans & Bruce Lee Art",
        khmerTitle: "ក្លោងទ្វារឥដ្ឋបុរាណដើម រំលេចដោយផ្លិតក្រដាសចិន និងផ្ទាំងគំនូរ Bruce Lee",
        caption: "Authentic exposed brick arched doorway revealing the colonial structural skeleton, decorated with hand-painted plum blossom paper fans, vintage martial arts posters, and auspicious calligraphy.",
        khmerCaption: "ក្លោងទ្វារឥដ្ឋបុរាណដើមដែលបង្ហាញពីគ្រោងឆ្អឹងស្ថាបត្យកម្មសម័យមុន តុបតែងដោយផ្លិតក្រដាសចិនគំនូរផ្កាអង្គារសិល្បៈ ផ្ទាំងរូបភាព Bruce Lee និងអក្សរផ្ចង់ហុងស៊ុយចិន។",
        tag: "Exposed Brick Arch",
        khmerTag: "ក្លោងទ្វារឥដ្ឋបុរាណ"
      },
      {
        url: "/images/stops/cai-coffee-nighttime.jpg",
        title: "Cai-coffee by Night: Glowing Red Lanterns & Warm Street Lamps",
        khmerTitle: "ទិដ្ឋភាពរាត្រីនៃ Cai-coffee៖ ពន្លឺគោមក្រហម និងអំពូលបំភ្លឺវិថីដ៏កក់ក្តៅ",
        caption: "The corner shophouse glowing warmly after dark with suspended strings of Edison bulbs, vibrant red Chinese paper lanterns, traditional glazed water urns, and evening street chatter.",
        khmerCaption: "ផ្ទះល្វែងបុរាណកែងភ្លឺចែងចាំងនាពេលរាត្រីដោយខ្សែអំពូលភ្លើងពណ៌មាស គោមក្រហមចិន ក្រឡទឹកដីឥដ្ឋបុរាណ និងបរិយាកាសជួបជុំជជែកកម្សាន្តតាមដងវិថី។",
        tag: "Night Atmosphere",
        khmerTag: "បរិយាកាសពេលរាត្រី"
      }
    ],
    audioGuide: {
      title: "Cai-coffee: Shophouses, Silk & The Rhythm of Kampot",
      khmerTitle: "Cai-coffee៖ ផ្ទះល្វែងបុរាណ វិថីពាណិជ្ជកម្ម និងចង្វាក់ជីវិតកំពត",
      duration: "3:30",
      approxSeconds: 210,
      transcript: "Welcome to Cai-coffee, nestled along the shaded corridor of Street 700. This is our designated cultural and refreshment break on the walking trail. Pull up one of the low folding chairs on the open veranda, order a traditional iced condensed milk coffee or fresh cold brew, and take in the slow, rhythmic pulse of daily Kampot life. You are sitting within an authentic Sino-Khmer commercial shophouse, known in French colonial planning as a 'compartiment chinois'. Built in the early 1900s, this building represents a centuries-old Southeast Asian architectural hybrid. Notice the structural skeleton: solid red baked-brick arches on the ground floor, thick load-bearing masonry walls coated in weathered lime plaster, and upper-storey wooden louvered shutters designed to catch the afternoon breeze while shielding family living quarters from tropical downpours. In the 1920s through the 1960s, this very street was the beating commercial link connecting the river port to the central markets. Merchants sold sacks of dried sea salt, dried fish from the estuary, and bundles of Kampot black pepper from this exact ground floor. When you walk inside, look at the exposed brick archway—left completely raw and un-plastered to honor the craftsmen who laid each brick by hand a hundred years ago. On the walls hang framed portraits of Cambodia's cultural icons from the 1960s, including beloved musical emperor Sinn Sisamouth. Over the past decade, Kampot has evolved into Cambodia's premier artisan cafe and slow-living town, where young Cambodians are passionately preserving their heritage not as frozen museum relics, but as living, breathing neighborhood spaces. Take fifteen to twenty minutes here to hydrate, rest your feet, and savor the tranquil breeze. When you are ready to continue, follow Street 700 southward for three minutes toward our fourth stop: Phsar Kronat, the Old Market.",
      khmerTranscript: "សូមស្វាគមន៍មកកាន់ Cai-coffee ដែលស្ថិតនៅក្រោមម្លប់បៃតងនៃផ្លូវលេខ ៧០០។ នេះជាកន្លែងឈប់សម្រាកវប្បធម៌ និងពិសារភេសជ្ជៈក្នុងដំណើរកម្សាន្តថ្មើរជើងរបស់យើង។ សូមអង្គុយលើកៅអីបត់តាមរានហាលមុខហាង កុម្ម៉ង់កាហ្វេទឹកដោះគោទឹកកកបែបបុរាណ ឬកាហ្វេស្រស់ ហើយរីករាយជាមួយចង្វាក់ជីវិតដ៏ស្ងប់ស្ងាត់នៃក្រុងកំពត។ លោកអ្នកកំពុងអង្គុយនៅក្នុងផ្ទះល្វែងពាណិជ្ជកម្មចិន-ខ្មែរពិតប្រាកដ ដែលកាលពីសម័យបារាំងហៅថា 'compartiment chinois'។ កសាងឡើងក្នុងដើមទសវត្សរ៍ឆ្នាំ ១៩០០ សំណង់នេះឆ្លុះបញ្ចាំងពីរចនាប័ទ្មស្ថាបត្យកម្មកាត់ដ៏ចំណាស់មួយ។ សង្កេតមើលរចនាសម្ព័ន្ធដើម៖ ក្លោងទ្វារឥដ្ឋដុតក្រហមនៅជាន់ផ្ទាល់ដី ជញ្ជាំងកំបោរទ្រទម្ងន់យ៉ាងក្រាស់ និងបង្អួចចំហៀវឈើនៅជាន់លើដែលជួយស្រូបយកខ្យល់អាកាសត្រជាក់ និងការពារទឹកភ្លៀង។ ក្នុងចន្លោះទសវត្សរ៍ឆ្នាំ ១៩២០ ដល់ ១៩៦០ វិថីលេខ ៧០០ នេះគឺជាសរសៃឈាមពាណិជ្ជកម្មដ៏មមាញឹកដែលតភ្ជាប់ពីមាត់ព្រែកទៅកាន់ផ្សារ។ អាជីវករបានលក់ដុំអំបិល ត្រីសមុទ្រស្ងួត និងម្រេចខ្មៅកំពតនៅចំកន្លែងដែលលោកអ្នកកំពុងអង្គុយនេះ។ ពេលដើរចូលខាងក្នុង សូមសង្កេតមើលក្លោងទ្វារឥដ្ឋបុរាណដែលត្រូវបានរក្សាទុកដោយមិនបូកកំបោរបិទបាំង ដើម្បីផ្តល់កិត្តិយសដល់ស្នាដៃជាងកាលពីរយឆ្នាំមុន។ នៅលើជញ្ជាំងមានព្យួររូបថតស៊ុមនៃអធិរាជសំឡេងមាស ស៊ីន ស៊ីសាមុត និងតារាសម័យមាសទសវត្សរ៍ឆ្នាំ ១៩៦០។ ក្នុងរយៈពេលមួយទសវត្សរ៍ចុងក្រោយនេះ កំពតបានក្លាយជាទីក្រុងនៃកាហ្វេសិប្បកម្ម និងជីវិតស្ងប់ស្ងាត់ ដែលយុវជនខ្មែរបានចូលរួមថែរក្សាបេតិកភណ្ឌឱ្យមានជីវិតរស់រវើក។ សូមចំណាយពេល ១៥ ទៅ ២០ នាទីសម្រាកនៅទីនេះ។ បន្ទាប់មក សូមដើរបន្ត ៣ នាទីតាមផ្លូវ ៧០០ ទៅកាន់ទីតាំងទី ៤ គឺផ្សារក្រណាត់ (ផ្សារចាស់)។",
      narrationText: "Take a relaxing cultural break here at Cai-coffee on Street 700. Notice the authentic early-1900s Sino-Khmer shophouse architecture, exposed brick archways, and tributes to 1960s musical icon Sinn Sisamouth. Rest your legs, enjoy a fresh coffee, and when ready, stroll three minutes south to Phsar Kronat, the Old Market.",
      khmerNarrationText: "សូមសម្រាកពិសារកាហ្វេនៅ Cai-coffee លើផ្លូវ ៧០០។ សង្កេតមើលស្ថាបត្យកម្មផ្ទះល្វែងបុរាណចិន-ខ្មែរដើមសតវត្សរ៍ទី ២០ ក្លោងទ្វារឥដ្ឋដើម និងរូបថតកិត្តិយសលោក ស៊ីន ស៊ីសាមុត។ សម្រាកទទួលទានកាហ្វេ ហើយនៅពេលរួចរាល់ សូមបន្តដំណើរ ៣ នាទីទៅកាន់ផ្សារក្រណាត់។"
    },
    historicalTimeline: [
      {
        year: "Early 1900s",
        khmerYear: "ដើមទសវត្សរ៍ ១៩០០",
        era: "French Indochina Shophouse Construction",
        khmerEra: "សំណង់ផ្ទះល្វែងសម័យឥណ្ឌូចិន",
        title: "Erection of Sino-Khmer Merchant Compartment",
        khmerTitle: "ការកសាងផ្ទះល្វែងពាណិជ្ជកម្មចិន-ខ្មែរ",
        description: "Built according to the colonial urban code with load-bearing baked brick masonry, timber floor joists, and street-level commercial arcade frontage.",
        khmerDescription: "កសាងឡើងតាមស្តង់ដារប្លង់ក្រុងសម័យបារាំង ដោយប្រើឥដ្ឋដុតទ្រទម្ងន់ ធ្នឹមឈើ និងរានហាលខាងមុខសម្រាប់បើកអាជីវកម្ម។"
      },
      {
        year: "1920s–1960s",
        khmerYear: "១៩២០–១៩៦០",
        era: "Pepper & Maritime Trade Era",
        khmerEra: "យុគសម័យពាណិជ្ជកម្មម្រេច និងកំពង់ផែ",
        title: "Dry Goods Wholesaling & Family Residence",
        khmerTitle: "ហាងលក់ដុំទំនិញស្ងួត និងលំនៅដ្ឋានគ្រួសារ",
        description: "Served as a bustling dry-goods and dried sea-produce store operated by Sino-Khmer traders, with commercial stock downstairs and multi-generational living quarters upstairs behind wooden louvers.",
        khmerDescription: "បម្រើការជាហាងលក់ដុំទំនិញគ្រឿងទេស និងផលនេសាទសមុទ្រស្ងួត ដោយជាន់ក្រោមជាហាងទំនិញ និងជាន់លើជាកន្លែងស្នាក់នៅរបស់គ្រួសារអាជីវករ។"
      },
      {
        year: "1975–1990s",
        khmerYear: "១៩៧៥–១៩៩០",
        era: "War, Abandonment & Structural Survival",
        khmerEra: "សម័យសង្គ្រាម និងការរស់រាននៃសំណង់",
        title: "Preservation of Original Timber & Masonry Fabric",
        khmerTitle: "ការគង់វង្សនៃរចនាសម្ព័ន្ធឈើ និងជញ្ជាំងឥដ្ឋដើម",
        description: "Despite weathering decades of civil strife and monsoons, the building retained its internal brick arches, authentic clay roof tiles, and historic structural integrity intact.",
        khmerDescription: "ទោះបីឆ្លងកាត់ភ្លៀងខ្យល់ និងសម័យសង្គ្រាមជាច្រើនទសវត្សរ៍ ក្លោងទ្វារឥដ្ឋបុរាណ ដំបូលក្បឿង និងគ្រោងសំណង់នៅតែរឹងមាំគង់វង្ស។"
      },
      {
        year: "2021–Present",
        khmerYear: "២០២១–បច្ចុប្បន្ន",
        era: "Artisan Heritage Reuse",
        khmerEra: "ការកែច្នៃជាកន្លែងកម្សាន្តសិល្បៈ",
        title: "Birth of Cai-coffee Cultural Sanctuary",
        khmerTitle: "ការបើកដំណើរការហាងកាហ្វេបេតិកភណ្ឌ Cai-coffee",
        description: "Repurposed by young Cambodian creatives into a celebrated boutique coffee house, preserving raw lime-brick surfaces, vintage Sinn Sisamouth posters, and authentic street-corner community culture.",
        khmerDescription: "កែច្នៃដោយយុវជនខ្មែរទៅជាហាងកាហ្វេដ៏ទាក់ទាញ ដោយរក្សាទុកជញ្ជាំងឥដ្ឋបុរាណ ផ្ទាំងរូបភាពអធិរាជសំឡេងមាស ស៊ីន ស៊ីសាមុត និងបរិយាកាសកក់ក្តៅ។"
      }
    ],
    sources: [
      {
        title: "L'Architecture Coloniale et Sino-Khmère au Cambodge",
        khmerTitle: "ស្ថាបត្យកម្មអាណានិគម និងចិន-ខ្មែរនៅកម្ពុជា",
        url: "https://www.efeo.fr/base.php?code=225",
        type: "Monograph on Vernacular Shophouse Architecture",
        khmerType: "ឯកសារស្រាវជ្រាវស្ថាបត្យកម្មផ្ទះល្វែងបុរាណ",
        authorOrInstitution: "École française d'Extrême-Orient (EFEO)",
        khmerAuthorOrInstitution: "សាលាបារាំងចុងបូព៌ា (EFEO)",
        year: "2011",
        note: "Definitive architectural typological breakdown of early 20th-century Chinese-Khmer shophouse bays and street grids."
      },
      {
        title: "Kampot Heritage Protection Group — Vernacular Shophouse Survey",
        khmerTitle: "ក្រុមអភិរក្សបេតិកភណ្ឌកំពត — ការអង្កេតផ្ទះល្វែងបុរាណ",
        url: "#",
        type: "Field Architectural Survey",
        khmerType: "របាយការណ៍អង្កេតស្ថាបត្យកម្មជាក់ស្តែង",
        authorOrInstitution: "Kampot Heritage Protection Group",
        khmerAuthorOrInstitution: "ក្រុមអភិរក្សបេតិកភណ្ឌកំពត",
        year: "2022",
        note: "Detailed cataloging of Street 700's surviving timber facades, louver mechanisms, and structural brick arches."
      },
      {
        title: "Department of Culture and Fine Arts — Street 700 Architectural Corridor",
        khmerTitle: "មន្ទីរវប្បធម៌ និងវិចិត្រសិល្បៈ — បណ្តាញស្ថាបត្យកម្មផ្លូវ ៧០០",
        url: "#",
        type: "Municipal Heritage Register",
        khmerType: "បញ្ជីសារពើភណ្ឌបេតិកភណ្ឌក្រុង",
        authorOrInstitution: "Kampot Provincial Department of Culture",
        khmerAuthorOrInstitution: "មន្ទីរវប្បធម៌ខេត្តកំពត",
        year: "2019",
        note: "Official assessment of adaptive economic revitalization of residential-commercial shophouse sectors."
      }
    ]
  },
  {
    id: "phsar-kronat",
    order: 4,
    title: "Phsar Kronat (Old Market)",
    khmerTitle: "ផ្សារក្រណាត់ (ផ្សារចាស់កំពត)",
    subtitle: "1930s Historic Market Building & Shophouses",
    khmerSubtitle: "អគារផ្សារប្រវត្តិសាស្ត្រទសវត្សរ៍ឆ្នាំ ១៩៣០ និងផ្ទះល្វែងបុរាណ",
    role: "Historic Market Trade & Shophouse Vernacular",
    khmerRole: "ពាណិជ្ជកម្មផ្សារប្រវត្តិសាស្ត្រ និងស្ថាបត្យកម្មផ្ទះល្វែងបុរាណ",
    rating: "4.6",
    placeCategory: "Historic Market & Shophouse Quarter",
    khmerPlaceCategory: "ផ្សារប្រវត្តិសាស្ត្រ និងតំបន់ផ្ទះល្វែងបុរាណ",
    coordinates: [10.607975, 104.179613],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.607975,104.179613",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=10.607975,104.179613&travelmode=walking",
    walkingTimeFromPrev: "Walk ~3 min",
    khmerWalkingTimeFromPrev: "ដើរប្រហែល ៣ នាទី",
    distanceFromPrev: "220 m",
    estimatedVisitTime: "20–25 minutes",
    khmerEstimatedVisitTime: "២០ ទៅ ២៥ នាទី",
    address: "J55H+5V6, Krong Kampot",
    khmerAddress: "J55H+5V6, កណ្តាលក្រុងកំពត",
    accessStatus: "Heritage Shophouse Corridor",
    khmerAccessStatus: "តំបន់ផ្ទះល្វែងពាណិជ្ជកម្ម និងផ្សារ",
    accessNotes: "Freely walkable at all hours. Active daily market stalls, vintage boutiques, souvenir shops, and local cafes operate inside and around the perimeter.",
    khmerAccessNotes: "អាចដើរទស្សនាដោយសេរីគ្រប់ពេលវេលា។ មានស្តង់លក់ទំនិញ ហាងលក់វត្ថុអនុស្សាវរីយ៍ និងហាងកាហ្វេជុំវិញ។",
    photographyNotes: "Marvelous wide-angle shots looking down Street 724 with colonial shophouse rows, iron balconies, and vibrant awnings.",
    khmerPhotographyNotes: "ប្លង់ថតរូបដ៏អស្ចារ្យតាមបណ្តោយផ្លូវ ៧២៤ ដែលរំលេចដោយជួរផ្ទះល្វែងបុរាណ យ៉រដែកផ្កា និងដំបូលតូបចម្រុះពណ៌។",
    storyFocus: "How 1930s market zoning and Franco-Chinese commercial shophouses established the economic nucleus of Kampot.",
    khmerStoryFocus: "របៀបដែលការរៀបចំផ្សារទសវត្សរ៍ឆ្នាំ១៩៣០ និងផ្ទះល្វែងពាណិជ្ជកម្មបានបង្កើតជាបេះដូងសេដ្ឋកិច្ចនៃក្រុងកំពត។",
    historicalEra: "1920s–1930s (French Protectorate Commercial Boom)",
    khmerHistoricalEra: "ទសវត្សរ៍ឆ្នាំ ១៩២០–១៩៣០ (សម័យពាណិជ្ជកម្មអាណានិគមបារាំង)",
    timelinePeriod: "1920s–1930s to Present Day (1920s Commercial Relocation → 1934 Art Deco Market Pavilion & Shophouses → Multi-Generational Community Market)",
    khmerTimelinePeriod: "ទសវត្សរ៍ឆ្នាំ ១៩២០–១៩៣០ ដល់បច្ចុប្បន្ន (ការរៀបចំប្លង់ផ្សារថ្មីសម័យបារាំង → ពន្លាផ្សារ Art Deco ឆ្នាំ ១៩៣៤ និងផ្ទះល្វែង ៥ ហ្វីត → មជ្ឈមណ្ឌលសហគមន៍បច្ចុប្បន្ន)",
    primaryArchivalSource: "Archives Nationales d'Outre-Mer (ANOM - Marché de Kampot, 1934) & EFEO Photo Archives",
    khmerPrimaryArchivalSource: "បណ្ណសារជាតិក្រៅប្រទេសបារាំង (ANOM កំណត់ត្រាសាធារណការផ្សារកំពត ១៩៣៤) និងបណ្ណសាររូបថត EFEO",
    summary: "Constructed as the commercial anchor of Kampot, Phsar Kronat features an iconic stepped Art Deco market hall encircled by shaded Franco-Chinese shophouses with five-foot covered pedestrian walkways that continue to anchor daily local community life.",
    khmerSummary: "សាងសង់ឡើងជាបេះដូងពាណិជ្ជកម្មនៃក្រុងកំពត ផ្សារក្រណាត់រំលេចដោយអគារផ្សារកណ្តាលបែប Art Deco ហ៊ុមព័ទ្ធដោយជួរផ្ទះល្វែងបារាំង-ចិន និងរបៀងថ្មើរជើងក្រោមម្លប់ ៥ ហ្វីត ដែលបន្តបម្រើដល់ជីវភាពរស់នៅរបស់សហគមន៍មូលដ្ឋានរហូតមកដល់បច្ចុប្បន្ន។",
    historicalStory: [
      "In the 1920s and 1930s, French urban planners laid out Kampot's orderly commercial quarter, moving scattered informal trade away from the muddy riverbank into a designated grid of paved avenues and covered pedestrian corridors.",
      "The centerpiece was this bold Art Deco concrete hall, distinguished by its stepped roof gable, high lateral ventilation breezeways, and a towering central pylon carved with 'ពិព័រណ៍ផលិតផលខេត្តកំពត' (Kampot Provincial Products Exhibition) to showcase the province's celebrated pepper, coastal sea salt, and artisanal silks.",
      "Today, nearly a century after its construction, the original market hall still stands proudly at the center of town, surrounded by multi-generational merchant shophouses where traditional dry-goods merchants and contemporary boutiques thrive side by side."
    ],
    khmerHistoricalStory: [
      "ក្នុងទសវត្សរ៍ឆ្នាំ ១៩២០ និង ១៩៣០ ស្ថាបត្យករបារាំងបានរៀបចំប្លង់ក្រុងកំពតយ៉ាងមានរបៀបរៀបរយ ដោយផ្លាស់ប្តូរការលក់ដូរពីច្រាំងទន្លេភក់ជ្រាំ មកកាន់បណ្តាញផ្លូវក្រុងដែលរៀបចំជាពិសេស អមដោយរបៀងថ្មើរជើងក្រោមម្លប់។",
      "ចំណុចកណ្តាលនៃតំបន់នេះ គឺអគារផ្សារបេតុងបែប Art Deco ដ៏រឹងមាំ ដែលមានហោជាងថ្នាក់ៗ ស្លាបរន្ធខ្យល់ចំហខ្ពស់ៗ និងប៉មបញ្ឈរកណ្តាលឆ្លាក់អក្សរ 'ពិព័រណ៍ផលិតផលខេត្តកំពត' សម្រាប់តាំងបង្ហាញផលិតផលឆ្នើមប្រចាំខេត្ត រួមមានម្រេចកំពត អំបិលសមុទ្រ និងសូត្រខ្មែរ។",
      "សព្វថ្ងៃនេះ ជិតមួយសតវត្សរ៍ក្រោយមក អគារផ្សារដើមនៅតែឈរយ៉ាងរឹងមាំនៅចំកណ្តាលក្រុង ព័ទ្ធជុំវិញដោយជួរផ្ទះល្វែងពាណិជ្ជកម្មច្រើនជំនាន់ ដែលរួមបញ្ចូលគ្នាយ៉ាងចុះសម្រុងរវាងមុខរបរប្រពៃណី និងហាងច្នៃប្រឌិតសម័យថ្មី។"
    ],
    architecturalHighlights: [
      {
        title: "Stepped Art Deco Gable & Central Pylon",
        khmerTitle: "ហោជាង Art Deco ថ្នាក់ៗ និងប៉មកណ្តាល",
        description: "Signature 1930s stepped concrete gable facade featuring a tall central vertical pylon with historical Khmer civic inscription.",
        khmerDescription: "ហោជាងបេតុងរាងថ្នាក់ៗសម័យឆ្នាំ១៩៣០ អមដោយប៉មបញ្ឈរកណ្តាលរំលេចដោយអក្សរឆ្លាក់ខ្មែរបុរាណ។",
        iconName: "Layers"
      },
      {
        title: "Covered Pedestrian Colonnade",
        khmerTitle: "របៀងថ្មើរជើងក្រោមម្លប់ ៥ ហ្វីត",
        description: "Continuous covered five-foot ways shielding pedestrians from heavy monsoonal rain and tropical afternoon heat.",
        khmerDescription: "របៀងថ្មើរជើងក្រោមម្លប់មុខផ្ទះល្វែងជួយការពារអ្នកដំណើរពីភ្លៀងធ្លាក់ខ្លាំង និងកម្តៅថ្ងៃ។",
        iconName: "ShieldCheck"
      },
      {
        title: "Cantilevered Iron Balconies",
        khmerTitle: "យ៉រដែកផ្កាលយ",
        description: "Upper residential storeys feature delicate wrought-iron balustrades and French louvered wooden casements.",
        khmerDescription: "ជាន់លើរំលេចដោយរបងដែកផ្កាដ៏ស្រស់ស្អាត និងបង្អួចឈើចំហៀវបែបបារាំង។",
        iconName: "Sparkles"
      }
    ],
    archivalComparison: {
      archivalImageUrl: "/images/stops/phsar-kronat-archival-original.png",
      archivalYear: "1930s Archival View",
      khmerArchivalYear: "ទិដ្ឋភាពបណ្ណសារទសវត្សរ៍ ១៩៣០",
      archivalCaption: "Original black-and-white archival photograph showing the freshly constructed stepped concrete pavilion, open air breezeways, unpaved streets, and bicycles leaning against the entrance.",
      khmerArchivalCaption: "រូបថតបណ្ណសារស-ខ្មៅដើមបង្ហាញពីអគារបេតុងហោជាងថ្នាក់ៗទើបសាងសង់រួច ស្លាបរន្ធខ្យល់ចំហ ដងផ្លូវដី និងកង់ដែលចតនៅមុខផ្សារ។",
      modernImageUrl: "/images/stops/phsar-kronat-modern-current.jpg",
      modernCaption: "Present-day perspective from the same street corner, showing the preserved Art Deco structure, modern welcome signage, and colorful living street life.",
      khmerModernCaption: "ទិដ្ឋភាពបច្ចុប្បន្នពីជ្រុងផ្លូវដដែល បង្ហាញពីរចនាសម្ព័ន្ធ Art Deco ដែលត្រូវបានអភិរក្សយ៉ាងល្អ ស្លាកស្វាគមន៍ទំនើប និងជីវភាពដងផ្លូវដ៏រស់រវើក។",
      transformationNote: "A remarkable survivor of the 20th century: the architectural geometry remains unchanged while its role has evolved to welcome global travelers alongside local market vendors.",
      khmerTransformationNote: "ការអភិរក្សដ៏អស្ចារ្យឆ្លងកាត់សតវត្សរ៍ទី២០៖ ទម្រង់ស្ថាបត្យកម្មធរណីមាត្រដើមនៅដដែល ខណៈតួនាទីរបស់ផ្សារបានវិវត្តទៅទទួលស្វាគមន៍ភ្ញៀវទេសចរអន្តរជាតិទន្ទឹមនឹងអាជីវករក្នុងស្រុក។",
      archivalReferenceNote: "Historic photo courtesy of Kampot provincial archival records, preserving the 1930s architectural memory of Phsar Kronat.",
      khmerArchivalReferenceNote: "រូបថតបណ្ណសារប្រវត្តិសាស្ត្រដកស្រង់ចេញពីកំណត់ត្រាបណ្ណសារខេត្តកំពត ដែលរក្សាការចងចាំស្ថាបត្យកម្មដើមនៃផ្សារក្រណាត់ទសវត្សរ៍ឆ្នាំ ១៩៣០។"
    },
    audioGuide: {
      title: "Life in Phsar Kronat: The Commerce & Soul of Kampot",
      khmerTitle: "ជីវិតនៅផ្សារក្រណាត់៖ ពាណិជ្ជកម្ម និងដង្ហើមនៃក្រុងកំពត",
      duration: "4:00",
      approxSeconds: 240,
      transcript: "Welcome to Phsar Kronat, universally known to travelers and locals alike as Kampot's Old Market. Stand at the intersection of Street 724 and look directly at this bustling square. For nearly a century, this site has stood as the bustling economic beating heart of Kampot province. Before the 1920s, commerce in Kampot was chaotic and scattered: goods were traded directly from wooden sampans moored in the muddy banks of the estuary. French municipal town planners intervened, relocating all trading activities into this purpose-built central civic market square. Look closely at the main concrete pavilion: observe the stepped Art Deco parapet and the tall central pylon projecting proudly skyward. Historically, this central pylon bore an inscription designating it as the provincial exhibition hall, where local farmers brought their award-winning black pepper berries, sea salt crystals from the coastal flats, and woven silks to be inspected and stamped for export across French Indochina. Now look at the perimeter of the square: surrounding the market is an unbroken cordon of two-storey Sino-Khmer commercial shophouses. Take note of the covered walkway running continuously beneath the second-storey overhangs. In colonial urban planning, this was officially called the 'five-foot way'—a required municipal design law requiring builders to provide a sheltered pedestrian corridor shielding market shoppers from monsoon downpours and blazing tropical sun. During the Khmer Rouge evacuation in April 1975, the bustling stalls were abruptly emptied and the square stood silent for four agonizing years. Yet, because the French engineers used solid reinforced concrete and durable steel roofing trusses, the market halls withstood the war without collapsing. In the 1980s, trading families returned, swept out the dust, and revived their family trades. Today, Phsar Kronat hums with energy: tailors sew colorful kramas, goldsmiths craft jewelry, and aroma from steaming noodle pots mingles with fresh herbs. When you are ready, let us walk two minutes west down Street 724 straight toward the water's edge to our fifth stop: Starbucks Kampot Fish Market.",
      khmerTranscript: "សូមស្វាគមន៍មកកាន់ផ្សារក្រណាត់ ដែលអ្នកស្រុក និងភ្ញៀវទេសចរស្គាល់ជាទូទៅថា ផ្សារចាស់កំពត។ សូមឈរនៅចំនុចប្រសព្វផ្លូវលេខ ៧២៤ ហើយសម្លឹងមើលទីលានផ្សារដ៏អ៊ូអរនេះ។ អស់រយៈពេលជិតមួយសតវត្សរ៍ ទីតាំងនេះបានដើរតួជាបេះដូងសេដ្ឋកិច្ចដ៏រស់រវើកនៃខេត្តកំពត។ មុនទសវត្សរ៍ឆ្នាំ ១៩២០ ការជួញដូរនៅកំពតមានសភាពរាយប៉ាយតាមទូក និងមាត់ព្រែកភក់ជ្រាំ។ អាជ្ញាធរបារាំងបានរៀបចំប្លង់ក្រុងឡើងវិញ ដោយប្រមូលផ្តុំសកម្មភាពលក់ដូរទាំងអស់មកកាន់ទីលានផ្សារកណ្តាលក្រុងដែលមានរបៀបរៀបរយនេះ។ សម្លឹងមើលអគារផ្សារបេតុងកណ្តាល៖ លោកអ្នកនឹងឃើញហោជាង Art Deco ថ្នាក់ៗ និងប៉មបញ្ឈរកណ្តាលដែលលយឡើងលើ។ កាលពីសម័យដើម ប៉មកណ្តាលនេះមានឆ្លាក់អក្សរតំណាងឱ្យសាលពិព័រណ៍ផលិតផលខេត្ត ដែលកសិករបានយកគ្រាប់ម្រេចខ្មៅ អំបិលសមុទ្រ និងសូត្រខ្មែរមកតាំងបង្ហាញ និងវាយត្រាដើម្បីនាំចេញ។ ឥឡូវនេះ សូមក្រឡេកមើលជួរផ្ទះល្វែងជុំវិញផ្សារ៖ លោកអ្នកនឹងឃើញរបៀងថ្មើរជើងក្រោមម្លប់មុខផ្ទះល្វែងនីមួយៗ។ ក្នុងច្បាប់រៀបចំដែនដីសម័យបារាំង គេហៅរបៀងនេះថា 'ផ្លូវ ៥ ហ្វីត' ដែលតម្រូវឱ្យម្ចាស់ផ្ទះសាងសង់ដើម្បីផ្តល់ម្លប់ និងការពារអ្នកដើរទិញឥវ៉ាន់ពីភ្លៀងខ្យល់ និងកម្តៅថ្ងៃ។ ក្នុងសម័យខ្មែរក្រហមឆ្នាំ ១៩៧៥ ផ្សារនេះត្រូវបានបោះបង់ចោលស្ងាត់ជ្រងំអស់រយៈពេល ៤ ឆ្នាំ ប៉ុន្តែដោយសារសំណង់បេតុងអាម៉េ និងគ្រោងដែកដ៏រឹងមាំ អគារផ្សារមិនរងការបាក់បែកឡើយ។ នៅទសវត្សរ៍ឆ្នាំ ៨០ អាជីវករបានវិលត្រឡប់មកវិញ ហើយស្តារមុខរបរគ្រួសារឡើងវិញយ៉ាងរស់រវើក។ សព្វថ្ងៃនេះ ផ្សារក្រណាត់នៅតែបន្តដង្ហើមជីវិតជារៀងរាល់ថ្ងៃ។ នៅពេលរួចរាល់ សូមដើរ ២ នាទីទៅទិសខាងលិចតាមផ្លូវ ៧២៤ សំដៅទៅមាត់ទឹកនៅទីតាំងទី ៥ គឺ Starbucks អតីតផ្សារត្រីកំពត។",
      narrationText: "Here at Phsar Kronat, the 1930s Old Market square pulses with ninety years of commerce. Observe the stepped Art Deco pavilion and the sheltered five-foot pedestrian colonnades surrounding the perimeter. A resilient survivor of 20th-century history, this market blends traditional craft trade with modern vitality. When ready, stroll two minutes west along Street 724 to Starbucks Kampot Fish Market.",
      khmerNarrationText: "ផ្សារក្រណាត់ជាបេះដូងពាណិជ្ជកម្ម ៩០ ឆ្នាំនៃក្រុងកំពត។ សង្កេតមើលអគារ Art Deco ថ្នាក់ៗ និងរបៀងថ្មើរជើងក្រោមម្លប់ជុំវិញផ្សារ។ ឆ្លងកាត់សម័យសង្គ្រាម ផ្សារនេះនៅតែបន្តដង្ហើមជីវិតរស់រវើក។ នៅពេលរួចរាល់ សូមដើរ ២ នាទីទៅទិសខាងលិចតាមផ្លូវ ៧២៤ ទៅកាន់ Starbucks អតីតផ្សារត្រីកំពត។"
    },
    historicalTimeline: [
      {
        year: "1900–1910s",
        khmerYear: "១៩០០–១៩១០",
        era: "French Municipal Layout Planning",
        khmerEra: "រៀបចំផែនការទីផ្សារសម័យបារាំង",
        title: "Relocation from River Mudflats to Central Grid",
        khmerTitle: "ការផ្លាស់ប្តូរទីតាំងផ្សារពីមាត់ទឹកមកកណ្តាលក្រុង",
        description: "French protectorate administrators designate the central square as Kampot's formal trading hub, ending ad-hoc riverside boat bartering in favor of structured public stalls.",
        khmerDescription: "អាជ្ញាធរបារាំងបានរៀបចំប្លង់ក្រុង ដោយផ្លាស់ប្តូរការដោះដូរទំនិញលើទូកតាមមាត់ទឹក មកកាន់ទីលានផ្សារកណ្តាលក្រុងដែលមានរបៀបរៀបរយ។"
      },
      {
        year: "1930s",
        khmerYear: "ទសវត្សរ៍ ១៩៣០",
        era: "Interwar Art Deco Construction",
        khmerEra: "សំណង់ស្ថាបត្យកម្ម Art Deco ចន្លោះសង្គ្រាមលោក",
        title: "Construction of Reinforced Concrete Market Pavilion",
        khmerTitle: "ការសាងសង់អគារផ្សារបេតុងប្រកបដោយរចនាប័ទ្ម Art Deco",
        description: "The current stepped-gable hall is built in solid reinforced concrete with upper ventilation louvers, inscribed as the provincial exhibition hall for Kampot pepper, salt, and silks.",
        khmerDescription: "អគារផ្សារបេតុងហោជាងថ្នាក់ៗបច្ចុប្បន្នត្រូវបានកសាងឡើងយ៉ាងរឹងមាំ អមដោយប៉មកណ្តាលឆ្លាក់អក្សរតាំងបង្ហាញផលិតផលឆ្នើមខេត្តកំពត។"
      },
      {
        year: "1975–1979",
        khmerYear: "១៩៧៥–១៩៧៩",
        era: "Khmer Rouge Evacuation",
        khmerEra: "សម័យកម្ពុជាប្រជាធិបតេយ្យ",
        title: "Desolation & Structural Resilience",
        khmerTitle: "ការបោះបង់ចោល និងភាពរឹងមាំនៃរចនាសម្ព័ន្ធ",
        description: "The population of Kampot is forcibly relocated to rural labor collectives; the market stands abandoned but structurally intact thanks to its thick reinforced concrete trusses.",
        khmerDescription: "ប្រជាជនត្រូវបានជម្លៀសចេញពីក្រុង ទីផ្សារត្រូវបានបោះបង់ចោល ប៉ុន្តែរចនាសម្ព័ន្ធបេតុងក្រាស់ៗមិនរងការខូចខាតធ្ងន់ធ្ងរឡើយ។"
      },
      {
        year: "1980s–Present",
        khmerYear: "១៩៨០–បច្ចុប្បន្ន",
        era: "Commercial Revival & Modern Tourism",
        khmerEra: "ការស្តារសេដ្ឋកិច្ច និងទេសចរណ៍បេតិកភណ្ឌ",
        title: "Vibrant Local Market & Heritage Buffer",
        khmerTitle: "បេះដូងពាណិជ្ជកម្មរស់រវើក និងតំបន់អភិរក្ស",
        description: "Phsar Kronat continues daily operations as the historic heart of Kampot, preserving its colonnaded walkways while welcoming international walkers and cultural researchers.",
        khmerDescription: "ផ្សារក្រណាត់បន្តដំណើរការលក់ដូរជារៀងរាល់ថ្ងៃ ដោយរក្សាបាននូវរបៀងថ្មើរជើងដើម និងទទួលស្វាគមន៍អ្នកស្រាវជ្រាវវប្បធម៌មកពីជុំវិញពិភពលោក។"
      }
    ],
    sources: [
      {
        title: "Fonds du Gouvernement Général de l'Indochine — Marchés Publics du Cambodge",
        khmerTitle: "មូលនិធិរដ្ឋបាលឥណ្ឌូចិន — ផ្សារសាធារណៈនៅកម្ពុជា",
        url: "http://anom.archivesnationales.culture.gouv.fr/",
        type: "National Overseas Colonial Archive",
        khmerType: "បណ្ណសារជាតិបារាំងនាយសមុទ្រ (ANOM)",
        authorOrInstitution: "Archives Nationales d'Outre-Mer (ANOM), Aix-en-Provence",
        khmerAuthorOrInstitution: "បណ្ណសារជាតិបារាំងនាយសមុទ្រ (ANOM)",
        year: "1932",
        note: "Original architectural drawings, public works funding dockets, and structural specifications for Phsar Kronat."
      },
      {
        title: "Cambodge: The Cultivation of a Nation 1860–1945",
        khmerTitle: "កម្ពុជា៖ ការកកើតនៃប្រជាជាតិ ១៨៦០-១៩៤៥",
        url: "https://uhpress.hawaii.edu/title/cambodge-the-cultivation-of-a-nation-1860-1945/",
        type: "Historical Scholarly Publication",
        khmerType: "សៀវភៅស្រាវជ្រាវប្រវត្តិសាស្ត្រ",
        authorOrInstitution: "Penny Edwards",
        khmerAuthorOrInstitution: "ប៉េននី អេដវើដស៍",
        year: "2007",
        note: "In-depth history of colonial provincial administrative planning and the spatial transformation of southern Cambodian market towns."
      },
      {
        title: "Master Plan & Heritage Protection Zone of Kampot Historic Quarter",
        khmerTitle: "ប្លង់មេ និងតំបន់ការពារបេតិកភណ្ឌនៃសង្កាត់ប្រវត្តិសាស្ត្រក្រុងកំពត",
        url: "#",
        type: "Government Urban Conservation Directive",
        khmerType: "ឯកសារណែនាំការអភិរក្សទីក្រុង",
        authorOrInstitution: "Ministry of Land Management, Urban Planning and Construction",
        khmerAuthorOrInstitution: "ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់",
        year: "2015",
        note: "Official heritage zoning designating Phsar Kronat and its contiguous shophouse blocks as core conservation assets."
      }
    ]
  },
  {
    id: "starbucks-kampot",
    order: 5,
    title: "Starbucks Kampot Fish Market",
    khmerTitle: "Starbucks អតីតផ្សារត្រីកំពត",
    subtitle: "1934 Riverfront Art Deco Market Pavilion",
    khmerSubtitle: "ពន្លាផ្សារត្រីមាត់ព្រែកបែប Art Deco ឆ្នាំ ១៩៣៤",
    role: "Riverfront Cafe & Art Deco Heritage",
    khmerRole: "ហាងកាហ្វេមាត់ព្រែក និងបេតិកភណ្ឌស្ថាបត្យកម្ម Art Deco",
    rating: "4.7",
    placeCategory: "Waterfront Landmark & Café",
    khmerPlaceCategory: "អគារបេតិកភណ្ឌមាត់ទឹក និងហាងកាហ្វេ",
    coordinates: [10.607574, 104.178806],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.607574,104.178806",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=10.607574,104.178806&travelmode=walking",
    walkingTimeFromPrev: "Walk ~2 min",
    khmerWalkingTimeFromPrev: "ដើរប្រហែល ២ នាទី",
    distanceFromPrev: "160 m",
    estimatedVisitTime: "15–20 minutes",
    khmerEstimatedVisitTime: "១៥ ទៅ ២០ នាទី",
    address: "Street 735, Kampot 070801",
    khmerAddress: "ផ្លូវលេខ ៧៣៥ មាត់ព្រែក, ក្រុងកំពត",
    accessStatus: "Commercial Heritage Building",
    khmerAccessStatus: "អគារបេតិកភណ្ឌពាណិជ្ជកម្ម",
    accessNotes: "Open daily. Visitors can enter freely to admire the soaring reinforced concrete paraboloid roof vault, sip a drink, or relax on the river-view terrace.",
    khmerAccessNotes: "បើកដំណើរការរាល់ថ្ងៃ។ ភ្ញៀវអាចចូលទស្សនារចនាសម្ព័ន្ធដំបូលកោងបេតុងដ៏ល្បីល្បាញ ឬអង្គុយលម្ហែកាយនៅរានហាលមាត់ទឹក។",
    photographyNotes: "Best photographed from across Street 735 or along the river promenade to frame the sweeping curved roofline against the Kampot River.",
    khmerPhotographyNotes: "ប្លង់ថតរូបល្អបំផុតគឺពីម្ខាងទៀតនៃផ្លូវ ៧៣៥ ឬតាមបណ្តោយមហាវិថីមាត់ព្រែក ដើម្បីផ្តិតយកដំបូលកោងបែប Art Deco។",
    storyFocus: "How a 1934 municipal wet fish market was saved, restored, and adapted into a premier waterfront gathering spot.",
    khmerStoryFocus: "របៀបដែលអតីតផ្សារត្រីសាលាក្រុងឆ្នាំ១៩៣៤ ត្រូវបានអភិរក្ស និងកែច្នៃជាកន្លែងកម្សាន្តមាត់ព្រែកដ៏ពេញនិយម។",
    historicalEra: "1934 (French Colonial / Streamline Moderne)",
    khmerHistoricalEra: "ឆ្នាំ ១៩៣៤ (សម័យអាណានិគមបារាំង / Streamline Moderne)",
    timelinePeriod: "1934–Present Day (1934 Municipal Fish Market Construction → Mid-Century Maritime Trade Gateway → 2024 Adaptive Reuse Waterfront Landmark)",
    khmerTimelinePeriod: "ឆ្នាំ ១៩៣៤–បច្ចុប្បន្ន (ការសាងសង់ផ្សារត្រីសាលាក្រុង ១៩៣៤ → ច្រកពាណិជ្ជកម្មនេសាទសម័យកណ្តាល → ការកែច្នៃបេតិកភណ្ឌមាត់ព្រែក ២០២៤)",
    primaryArchivalSource: "Archives Nationales d'Outre-Mer (ANOM - Halle aux Poissons de Kampot, 1934) & UNESCO Cultural Heritage Mapping",
    khmerPrimaryArchivalSource: "បណ្ណសារជាតិក្រៅប្រទេសបារាំង (ANOM សំណង់ពន្លាផ្សារត្រីកំពត ១៩៣៤) និងគម្រោងផែនទីបេតិកភណ្ឌ UNESCO",
    summary: "Built right at the water's edge in 1934, this landmark fish market features a soaring parabolic curved concrete roof. Sensitively restored and adapted into Starbucks and waterfront eateries, it offers stunning views of the river and Bokor Mountain.",
    khmerSummary: "កសាងឡើងនៅមាត់ទឹកក្នុងឆ្នាំ ១៩៣៤ អគារអតីតផ្សារត្រីនេះមានដំបូលបេតុងកោងដ៏ខ្ពស់ស្រឡះ។ ត្រូវបានជួសជុល និងកែច្នៃជាហាង Starbucks និងកន្លែងញ៉ាំអាហារមាត់ទឹក វាផ្តល់នូវទេសភាពដ៏ស្រស់ត្រកាលនៃដងព្រែក និងភ្នំបូកគោ។",
    historicalStory: [
      "Stepping out to the riverfront promenade brings you to one of the most recognizable structures in all of southern Cambodia: the 1934 Fish Market pavilion.",
      "During the colonial era, fishing boats from Kep and the offshore Gulf islands would pull directly alongside the river pilings at dawn to unload fresh catches of crab, mackerel, and shrimp.",
      "The building's signature feature is its bold, paraboloid curved concrete vault designed by French municipal public works engineers. Today, it operates as Starbucks Kampot Fish Market, making it one of the most architecturally unique Starbucks locations in Southeast Asia."
    ],
    khmerHistoricalStory: [
      "ការដើរមកដល់មហាវិថីមាត់ព្រែកនាំអ្នកមកកាន់អគារដែលមានរចនាប័ទ្មលេចធ្លោជាងគេបំផុតនៅភាគខាងត្បូងកម្ពុជា គឺពន្លាផ្សារត្រីឆ្នាំ ១៩៣៤។",
      "ក្នុងសម័យអាណានិគម ទូកនេសាទមកពីកែប និងកោះនានាបានចូលចតនៅមាត់ទឹកនាពេលព្រឹកព្រលឹម ដើម្បីផ្ទេរត្រី ក្តាម និងបង្គាស្រស់ៗ។",
      "លក្ខណៈពិសេសនៃអគារនេះ គឺដំបូលបេតុងកោងយ៉ាងស្អាតដែលគូរដោយវិស្វករបារាំង។ បច្ចុប្បន្នវាដំណើរការជា Starbucks អតីតផ្សារត្រីកំពត ដែលជាទីតាំងដ៏ស្រស់ស្អាតបំផុតមួយក្នុងតំបន់អាស៊ីអាគ្នេយ៍។"
    ],
    architecturalHighlights: [
      {
        title: "Sweeping Curved Concrete Canopy",
        khmerTitle: "ដំបូលបេតុងកោងរលកសមុទ្រ",
        description: "Innovative 1930s thin-shell concrete paraboloid vault creating an open, column-free interior facing the river.",
        khmerDescription: "ដំបូលបេតុងកោងស្តើងប្រកបដោយភាពច្នៃប្រឌិត បង្កើតបានជាលំហធំទូលាយគ្មានសសរកណ្តាលបែរមុខទៅមាត់ទឹក។",
        iconName: "Layers"
      },
      {
        title: "Streamline Moderne Vents",
        khmerTitle: "រន្ធខ្យល់បែប Streamline Moderne",
        description: "Nautical clerestory vents beneath the roofline designed to flush air and salt odors away with the sea breeze.",
        khmerDescription: "រន្ធខ្យល់រាងមូលតាមស្ទីលកប៉ាល់ក្រោមដំបូល ជួយបន្សាបក្លិនសមុទ្រ និងនាំខ្យល់បរិសុទ្ធចូល។",
        iconName: "ShieldCheck"
      },
      {
        title: "Over-Water Promenade Terrace",
        khmerTitle: "រានហាលមាត់ទឹកលើព្រែកទឹកឈូ",
        description: "Cantilevered riverside decking providing unobstructed panoramas of the Entanou Bridge and Bokor range.",
        khmerDescription: "រានហាលមាត់ព្រែកដែលមើលឃើញទេសភាពស្ពានឥន្ទធនូ និងជួរភ្នំបូកគោបានយ៉ាងច្បាស់។",
        iconName: "Compass"
      }
    ],
    archivalComparison: {
      archivalImageUrl: "/images/stops/starbucks-kampot-historic-fish-market.png",
      archivalYear: "1934 Riverside Market & Fishermen",
      khmerArchivalYear: "១៩៣៤ ជីវភាពផ្សារត្រីមាត់ព្រែក",
      archivalCaption: "Bustling open-air fish market pavilion with fishermen carrying fresh catch in bamboo baskets, with the iconic arches of Entanou Bridge visible behind.",
      khmerArchivalCaption: "ពន្លាបេតុងចំហជួញដូរត្រីរបស់អ្នកនេសាទជាមួយកញ្ជើស្ពាយឫស្សី ដោយមានស្ពានឥន្ទធនូនៅពីក្រោយ។",
      modernImageUrl: "/images/stops/starbucks-kampot-facade-logo.jpg",
      modernCaption: "The restored 1934 Fish Market operating today as Starbucks Kampot Fish Market, featuring the circular green Siren logo mounted atop the stepped Art Deco yellow gable. (Photo Source: Starbucks Cambodia)",
      khmerModernCaption: "អគារផ្សារត្រីឆ្នាំ ១៩៣៤ ក្រោយការអភិរក្ស និងដំណើរការជា Starbucks អតីតផ្សារត្រីកំពត ដោយមានស្លាកសញ្ញា Siren ពណ៌បៃតងលើហោជាង Art Deco ពណ៌លឿងបុរាណ។ (ប្រភពរូបភាព៖ Starbucks Cambodia)",
      transformationNote: "A 90-year journey of architectural resilience: from a 1934 colonial municipal fish market to an award-winning waterfront living heritage cafe.",
      khmerTransformationNote: "ដំណើរវិវត្តន៍ស្ថាបត្យកម្ម ៩០ ឆ្នាំ៖ ពីផ្សារត្រីក្រុងសម័យអាណានិគម ១៩៣៤ មកជាហាងកាហ្វេបេតិកភណ្ឌរស់រវើកមាត់ទឹកដ៏ល្បីល្បាញ។",
      archivalReferenceNote: "Archival photos are referenced from the Kampot Fish Market book, documenting the historical transformation of this 1934 riverfront landmark.",
      khmerArchivalReferenceNote: "រូបថតបណ្ណសារប្រវត្តិសាស្ត្រទាំងនេះ ត្រូវបានដកស្រង់ចេញពីសៀវភៅផ្សារត្រីកំពត (Kampot Fish Market Book) ដែលកត់ត្រាអំពីការវិវត្តន៍នៃសំណង់បេតិកភណ្ឌមាត់ព្រែកឆ្នាំ ១៩៣៤ នេះ។"
    },
    archivalGallery: [
      {
        url: "/images/stops/starbucks-kampot-1934-facade.png",
        title: "1934 Frontal Art Deco Gable Facade",
        khmerTitle: "១៩៣៤ ហោជាងខាងមុខ Art Deco ដើម",
        tag: "Original Construction",
        khmerTag: "សំណង់ដើមឆ្នាំ ១៩៣៤",
        caption: "Stepped Art Deco reinforced concrete gable facade with wooden ventilation louvers, iron security gates, and unpaved riverfront street.",
        khmerCaption: "ហោជាងបេតុងក្បាច់ Art Deco ថ្នាក់ៗ អមដោយបង្អួចចំហៀវឈើ និងទ្វារដែកសន្តិសុខនៅតាមមហាវិថីមាត់ព្រែក។"
      },
      {
        url: "/images/stops/starbucks-kampot-historic-fish-market.png",
        title: "1934 Riverside Market Trading & Fishermen",
        khmerTitle: "១៩៣៤ ជីវភាពផ្សារត្រីមាត់ព្រែក និងអ្នកនេសាទ",
        tag: "Waterfront Market Life",
        khmerTag: "ជីវភាពពាណិជ្ជកម្មមាត់ទឹក",
        caption: "Bustling open pavilion with fishermen carrying fresh catch in bamboo baskets, with Entanou Bridge arches visible behind.",
        khmerCaption: "ពន្លាបេតុងចំហជួញដូរត្រីរបស់អ្នកនេសាទជាមួយកញ្ជើស្ពាយឫស្សី ដោយមានស្ពានឥន្ទធនូនៅពីក្រោយ។"
      },
      {
        url: "/images/stops/starbucks-kampot-river-stilts-patina.png",
        title: "Post-War Weathered River Stilts & Patina",
        khmerTitle: "គ្រោងបេតុងលើសរសរទ្រទន្លេ (សម័យក្រោយសង្គ្រាម)",
        tag: "Structural Resilience",
        khmerTag: "ភាពរឹងមាំស្ថាបត្យកម្ម",
        caption: "The reinforced concrete skeleton enduring decades of tidal currents and seasonal monsoons over the Kampot River.",
        khmerCaption: "គ្រោងឆ្អឹងបេតុងដ៏រឹងមាំដែលឈរធន់នឹងទឹកជំនន់ និងព្យុះភ្លៀងនៅលើសរសរទ្រទន្លេជាច្រើនទសវត្សរ៍។"
      },
      {
        url: "/images/stops/starbucks-kampot-river-edge-restaurant.png",
        title: "2000s River Edge of Kampot Restaurant Era",
        khmerTitle: "ទសវត្សរ៍ ២០០០ សម័យភោជនីយដ្ឋាន មាត់ស្ទឹងកំពត",
        tag: "Early Adaptive Reuse",
        khmerTag: "ការកែច្នៃអាជីវកម្មដំបូង",
        caption: "Early commercial adaptive reuse as 'River Edge of Kampot Restaurant' with coconut palms and natural stone corner column.",
        khmerCaption: "ការកែច្នៃអាជីវកម្មដំបូងជាភោជនីយដ្ឋានមាត់ទឹកក្រោមម្លប់ដូង អមដោយសរសរប៉មថ្មភ្នំ។"
      },
      {
        url: "/images/stops/starbucks-kampot-blue-mural-era.png",
        title: "2010s Blue Facade & Marine Wave Mural Era",
        khmerTitle: "ទសវត្សរ៍ ២០១០ សម័យគំនូរសិល្បៈពណ៌ខៀវ",
        tag: "Community Street Art",
        khmerTag: "សិល្បៈសហគមន៍",
        caption: "Ocean-blue facade with marine wave street art murals and traditional remorque (tuk-tuk) transport.",
        khmerCaption: "ជញ្ជាំងពណ៌ផ្ទៃមេឃរំលេចដោយគំនូរសិល្បៈរលកសមុទ្រ និងការដឹកជញ្ជូនរ៉ឺម៉កកង់បីប្រពៃណី។"
      },
      {
        url: "/images/stops/starbucks-kampot-restored-yellow-facade.png",
        title: "Restored Art Deco Building (Prior to Starbucks Opening)",
        khmerTitle: "អគារជួសជុលរួច (មុនពេលក្លាយជា Starbucks)",
        tag: "Restoration Phase",
        khmerTag: "ដំណាក់កាលជួសជុល",
        caption: "The 1934 Fish Market freshly restored in yellow ochre, prior to the installation of Starbucks signage and official opening.",
        khmerCaption: "អគារផ្សារត្រីឆ្នាំ ១៩៣៤ ក្រោយការជួសជុលពណ៌លឿងរួចរាល់ មុនពេលបំពាក់ស្លាកសញ្ញា Starbucks និងបើកដំណើរការជាផ្លូវការ។"
      }
    ],
    interiorGallery: [
      {
        url: "/images/stops/starbucks-kampot-coffee-bar-counter.jpg",
        title: "Main Coffee Bar, Pastry Showcase & Woven Cane Lanterns",
        khmerTitle: "បញ្ជរបម្រើកាហ្វេធំ ទូដាក់នំ និងចង្កៀងចាក់ផ្តៅធម្មជាតិ",
        caption: "Long curved wooden espresso bar featuring modern espresso equipment, fresh pastry showcases, and sculptural handcrafted woven cane pendants illuminating the central hall. (Source: Starbucks Cambodia)",
        khmerCaption: "បញ្ជរបម្រើកាហ្វេឈើវែងរចនាកោង បំពាក់ម៉ាស៊ីនឆុងកាហ្វេទំនើប ទូដាក់នំស្រស់ៗ និងចង្កៀងចាក់ដោយផ្តៅខ្មែរបំភ្លឺសាលធំកណ្តាល។ (ប្រភពរូបភាព៖ Starbucks Cambodia)",
        tag: "Main Coffee Bar & Lounge",
        khmerTag: "បញ្ជរបម្រើកាហ្វេកណ្តាល"
      },
      {
        url: "/images/stops/starbucks-kampot-entrance-breezeway.png",
        title: "Art Deco Canopy Entrance & Open Dining Hall Vista",
        khmerTitle: "ច្រកចូលក្រោមដំបូល Art Deco និងទិដ្ឋភាពសាលទទួលទានធំទូលាយ",
        caption: "Grand welcoming entrance beneath the restored concrete canopy, looking through the high-arched breezeway into the bustling sunlit dining hall with communal oak tables. (Source: Starbucks Cambodia)",
        khmerCaption: "ច្រកចូលធំទូលាយស្វាគមន៍ភ្ញៀវក្រោមដំបូលបេតុងកោងបុរាណ មើលកាត់តាមសាលធំប្រកបដោយពន្លឺថ្ងៃធម្មជាតិ និងតុឈើអុកវែងសម្រាប់ភ្ញៀវជួបជុំគ្នា។ (ប្រភពរូបភាព៖ Starbucks Cambodia)",
        tag: "Grand Entrance & Dining Hall",
        khmerTag: "ច្រកចូលធំ និងសាលទទួលភ្ញៀវ"
      },
      {
        url: "/images/stops/starbucks-kampot-interior-riverview.jpg",
        title: "Riverside Panorama Lounge & Bokor Mountain Views",
        khmerTitle: "បន្ទប់ទទួលភ្ញៀវមាត់ទឹក និងទេសភាពជួរភ្នំបូកគោ",
        caption: "Expansive floor-to-ceiling teal folding glass doors opening onto the Preaek Tuek Chhu river, with leather armchairs and scenic vistas of the historic bridge. (Source: Starbucks Cambodia)",
        khmerCaption: "ទ្វារកញ្ចក់បត់ធំទូលាយពណ៌ផ្ទៃមេឃបើកចំហគយគន់ទេសភាពមាត់ព្រែកទឹកឈូ និងជួរភ្នំបូកគោ អមដោយកៅអីពូកស្បែកប្រណីត។ (ប្រភពរូបភាព៖ Starbucks Cambodia)",
        tag: "Riverside Panorama",
        khmerTag: "ទេសភាពមាត់ទឹក"
      },
      {
        url: "/images/stops/starbucks-kampot-siren-mural.jpg",
        title: "Cultural Siren Wall Mural by Lisa Mam & Peap Tarr",
        khmerTitle: "គំនូរសិល្បៈវប្បធម៌ខ្មែរ Starbucks Siren ដោយ Lisa Mam & Peap Tarr",
        caption: "Magnificent full-wall mural celebrating Cambodian heritage, blending traditional Khmer kbach ornamentation, lotus blossoms, coffee cherries, and marine life. (Source: Starbucks Cambodia)",
        khmerCaption: "ផ្ទាំងគំនូរលើជញ្ជាំងដ៏ស្រស់ស្អាតដែលបង្កើតឡើងដោយសិល្បករកម្ពុជា រួមបញ្ចូលគ្នានូវក្បាច់ខ្មែរបុរាណ ផ្កាឈូក ផ្លែកាហ្វេ និងមច្ឆាសមុទ្រ។ (ប្រភពរូបភាព៖ Starbucks Cambodia)",
        tag: "Khmer Art Collaboration",
        khmerTag: "សិល្បៈគំនូរខ្មែរ"
      },
      {
        url: "/images/stops/starbucks-kampot-interior-vault.jpg",
        title: "Curved Concrete Vault Ceiling & Tropical Indoor Garden",
        khmerTitle: "ដំបូលកោងបេតុងបុរាណ និងសួនរុក្ខជាតិបៃតងក្នុងហាង",
        caption: "Preserved 1934 curved concrete barrel vault with Art Deco geometric window piercings, modern track lighting, and lush tropical flora. (Source: Starbucks Cambodia)",
        khmerCaption: "ដំបូលកោងបេតុងបុរាណឆ្នាំ ១៩៣៤ ជាមួយក្បាច់រន្ធខ្យល់ធរណីមាត្រ Art Deco អំពូលទំនើប និងរុក្ខជាតិបៃតងត្រូពិចក្នុងហាង។ (ប្រភពរូបភាព៖ Starbucks Cambodia)",
        tag: "Preserved 1934 Vault",
        khmerTag: "ដំបូលកោងបេតុងដើម"
      },
      {
        url: "/images/stops/starbucks-kampot-rooftop-deck.png",
        title: "Open-Air Sunset Terrace Overlooking Kampot River",
        khmerTitle: "រានហាលមាត់ទឹកលើដំបូលគយគន់ថ្ងៃលិចមាត់ព្រែក",
        caption: "Sun-drenched outdoor terrace offering counter seating along the river parapet wall, overlooking lush riverside islands and cool sea breezes. (Source: Starbucks Cambodia)",
        khmerCaption: "រានហាលលើដំបូលមាត់ព្រែកដែលផ្តល់កន្លែងអង្គុយពិសារកាហ្វេតាមមាត់ទន្លេ គយគន់ទេសភាពកោះធម្មជាតិ និងទទួលខ្យល់អាកាសបរិសុទ្ធ។ (ប្រភពរូបភាព៖ Starbucks Cambodia)",
        tag: "Rooftop River Terrace",
        khmerTag: "រានហាលលើដំបូល"
      }
    ],
    audioGuide: {
      title: "Salt, Sea & The 1934 Fish Market",
      khmerTitle: "អំបិល សមុទ្រ និងរឿងរ៉ាវផ្សារត្រីឆ្នាំ ១៩៣៤",
      duration: "4:15",
      approxSeconds: 255,
      transcript: "You are standing before one of the most distinctive coastal architectural landmarks in all of Southeast Asia: the former Halle aux Poissons, built in 1934 during the French protectorate and celebrated today as Starbucks Kampot Fish Market. Pause for a moment and look up at that sweeping, wave-like roofline. In the 1930s, reinforced concrete was the cutting-edge material of modern architecture. French municipal engineers designed this high parabolic barrel vault not merely for aesthetic elegance, but for ingenious tropical climate adaptation. By lifting the ceiling into a grand arch with pierced geometric breezeways, hot air naturally rose and escaped, while constant sea breezes flowing up the Preaek Tuek Chhu river chilled the interior without any electrical fans or refrigeration. Each dawn, wooden fishing boats returning from the Gulf of Thailand tied up directly at the river stilts beneath the floor where you are standing. Barrels of freshly netted silver pomfret, coastal mackerel, crabs, and river prawns were hoisted up in woven bamboo baskets into this hall, filling the air with the sounds of spirited haggling in Khmer, Cantonese, and French. Following decades of seasonal monsoons and civil conflict, the structure fell into disrepair. However, in 2023, a meticulous architectural restoration saved this historic pavilion, preserving the 1934 yellow parabolic shell while adapting the interior into a welcoming waterfront gathering place with handcrafted woven cane lanterns and a stunning Khmer Siren mural by artists Lisa Mam and Peap Tarr. When you are ready, follow the scenic riverside promenade northward for three minutes toward our tour finale: the historic Entanou Bridge.",
      khmerTranscript: "លោកអ្នកកំពុងឈរនៅចំពោះមុខសំណង់ស្ថាបត្យកម្មមាត់សមុទ្រដ៏លេចធ្លោបំផុតមួយនៅអាស៊ីអាគ្នេយ៍ គឺអតីតផ្សារត្រីបារាំង Halle aux Poissons ដែលបានកសាងឡើងក្នុងឆ្នាំ ១៩៣៤ នាសម័យអាណាព្យាបាលបារាំង ហើយបច្ចុប្បន្នត្រូវបានគេស្គាល់ជា Starbucks អតីតផ្សារត្រីកំពត។ សូមសម្លឹងមើលដំបូលកោងបេតុងដ៏ស្រស់ស្អាតដែលរំលេចដូចជារលកសមុទ្រ។ ក្នុងទសវត្សរ៍ឆ្នាំ ១៩៣០ បេតុងអាម៉េគឺជាសម្ភារៈសំណង់ទំនើបបំផុត។ វិស្វករបារាំងបានរចនាដំបូលកោងខ្ពស់នេះឡើង មិនត្រឹមតែសម្រាប់សោភ័ណភាពប៉ុណ្ណោះទេ ប៉ុន្តែដើម្បីសម្របខ្លួនទៅនឹងអាកាសធាតុត្រូពិច។ ដំបូលកោងខ្ពស់រួមផ្សំនឹងរន្ធខ្យល់ធរណីមាត្រ បានជួយរុញកម្តៅឡើងទៅលើ និងទទួលខ្យល់ត្រជាក់បក់ពីដងព្រែកទឹកឈូ ជួយឱ្យត្រីសមុទ្ររក្សាភាពស្រស់បានយូរដោយមិនបាច់ប្រើម៉ាស៊ីនត្រជាក់ឡើយ។ ជារៀងរាល់ព្រឹកព្រលឹម ទូកនេសាទត្រឡប់មកពីឈូងសមុទ្រថៃបានចតនៅជើងសសរស្ពានមាត់ព្រែក ហើយកញ្ជើត្រីស្រស់ៗត្រូវបានលើកឡើងមកលក់ដូរយ៉ាងអ៊ូអរជាភាសាខ្មែរ ចិន និងបារាំង។ ឆ្លងកាត់ព្យុះភ្លៀង និងសម័យសង្គ្រាមជាច្រើនទសវត្សរ៍ ទីបំផុតនៅឆ្នាំ ២០២៣ អគារនេះត្រូវបានជួសជុលអភិរក្សយ៉ាងហ្មត់ចត់ ដោយរក្សាដំបូលកោងពណ៌លឿងឆ្នាំ ១៩៣៤ និងកែច្នៃខាងក្នុងដោយចង្កៀងផ្តៅខ្មែរ និងគំនូរសិល្បៈ Siren ដោយសិល្បករ Lisa Mam និង Peap Tarr។ នៅពេលរួចរាល់ សូមដើរបន្តតាមមាត់ព្រែក ៣ នាទីឆ្ពោះទៅកាន់ទីតាំងចុងក្រោយនៃដំណើរយើង គឺស្ពានឥន្ទធនូ។",
      narrationText: "Welcome to the 1934 Fish Market pavilion on the Preaek Tuek Chhu riverbank. Notice the soaring parabolic concrete vault—an engineering triumph of passive tropical cooling. Picture the dawn market where fishermen unloaded Gulf catches into this airy hall. Meticulously restored in 2023, it now invites travelers to rest beneath its historic roof. When ready, stroll three minutes north along the waterfront to the Entanou Bridge.",
      khmerNarrationText: "សូមស្វាគមន៍មកកាន់ពន្លាផ្សារត្រីឆ្នាំ ១៩៣៤ មាត់ព្រែកទឹកឈូ។ សម្លឹងមើលដំបូលកោងបេតុងដែលរចនាឡើងដើម្បីស្រូបខ្យល់ត្រជាក់ពីមាត់ព្រែក។ ជួសជុលអភិរក្សនៅឆ្នាំ ២០២៣ អគារនេះរក្សាបាននូវព្រលឹងស្ថាបត្យកម្មដើមយ៉ាងល្អឯក។ បន្ទាប់មក សូមដើរបន្ត ៣ នាទីតាមមាត់ព្រែកទៅកាន់ស្ពានឥន្ទធនូ។"
    },
    historicalTimeline: [
      {
        year: "1934",
        khmerYear: "១៩៣៤",
        era: "French Protectorate Public Works",
        khmerEra: "សាធារណការសម័យអាណានិគមបារាំង",
        title: "Construction of the Halle aux Poissons",
        khmerTitle: "ការកសាងអគារផ្សារត្រីមាត់ព្រែក (Halle aux Poissons)",
        description: "Erected directly over river pilings by French municipal engineers, introducing state-of-the-art parabolic thin-shell reinforced concrete architecture to maritime Cambodia.",
        khmerDescription: "សាងសង់ឡើងនៅលើសរសរទ្រមាត់ព្រែកដោយវិស្វករបារាំង ដោយនាំចូលនូវបច្ចេកវិទ្យាបេតុងអាម៉េដំបូលកោងស្តើងដំបូងគេបង្អស់នៅកំពត។"
      },
      {
        year: "1930s–1960s",
        khmerYear: "១៩៣០–១៩៦០",
        era: "Maritime Wholesale Commerce",
        khmerEra: "ពាណិជ្ជកម្មលក់ដុំផលនេសាទសមុទ្រ",
        title: "Wholesale Hub for Gulf of Thailand Fishermen",
        khmerTitle: "មជ្ឈមណ្ឌលលក់ដុំត្រីសមុទ្រឈូងសមុទ្រថៃ",
        description: "Served as the primary regional landing pier where local coastal fishermen unloaded daily catches of crab, prawns, and mackerel into an open, passively ventilated pavilion.",
        khmerDescription: "បម្រើជាកំពង់ផែចុះចតត្រីសមុទ្រដ៏ធំបំផុតប្រចាំតំបន់ ដោយមានទូកនេសាទមកចតផ្ទាល់នៅជើងសសរផ្សារជារៀងរាល់ព្រឹកព្រលឹម។"
      },
      {
        year: "1970s–2000s",
        khmerYear: "១៩៧០–២០០០",
        era: "Weathering, Disuse & Early Adaptive Reuse",
        khmerEra: "ការប្រែប្រួល និងការកែច្នៃអាជីវកម្មដំបូង",
        title: "Structural Survival & Riverside Dining",
        khmerTitle: "ភាពរឹងមាំនៃរចនាសម្ព័ន្ធ និងសម័យភោជនីយដ្ឋានមាត់ស្ទឹង",
        description: "Endured seasonal estuarine flooding and conflicts intact; later operated as an open-air riverfront restaurant known as 'River Edge of Kampot'.",
        khmerDescription: "ធន់នឹងជំនន់ទឹកទន្លេ និងសម័យសង្គ្រាមយ៉ាងរឹងមាំ ក្រោយមកបានកែច្នៃជាភោជនីយដ្ឋានមាត់ទឹកក្រោមម្លប់ដូង។"
      },
      {
        year: "2023–Present",
        khmerYear: "២០២៣–បច្ចុប្បន្ន",
        era: "High-Standard Architectural Conservation",
        khmerEra: "ការអភិរក្ស និងកែច្នៃស្ថាបត្យកម្មស្តង់ដារខ្ពស់",
        title: "Restoration as Starbucks Kampot Fish Market",
        khmerTitle: "ការជួសជុលអភិរក្សជា Starbucks អតីតផ្សារត្រីកំពត",
        description: "Celebrated nationwide as a benchmark of commercial heritage reuse, preserving the yellow parabolic concrete vault, panoramic river vistas, and local Khmer artisan craft.",
        khmerDescription: "ទទួលបានការកោតសរសើរទូទាំងប្រទេសជាគំរូឆ្នើមនៃការអភិរក្សបេតិកភណ្ឌ ដោយថែរក្សាដំបូលកោងបេតុងដើម និងសិល្បៈចង្កៀងផ្តៅខ្មែរយ៉ាងរស់រវើក។"
      }
    ],
    sources: [
      {
        title: "Bâtiments Municipaux du Protectorat du Cambodge: Halle aux Poissons de Kampot",
        khmerTitle: "អគាររដ្ឋបាលសម័យអាណាព្យាបាលបារាំង៖ ផ្សារត្រីក្រុងកំពត",
        url: "#",
        type: "Colonial Public Works Dossier",
        khmerType: "ឯកសារសាធារណការសម័យអាណានិគម",
        authorOrInstitution: "Archives d'Architecture Moderne d'Indochine (AAMI)",
        khmerAuthorOrInstitution: "បណ្ណសារស្ថាបត្យកម្មទំនើបឥណ្ឌូចិន",
        year: "1934",
        note: "Original municipal engineering calculations for the thin-shell reinforced concrete parabolic vault and river piling foundations."
      },
      {
        title: "French Colonial Architecture in Indochina: Climatic Adaptation & Concrete",
        khmerTitle: "ស្ថាបត្យកម្មអាណានិគមបារាំងនៅឥណ្ឌូចិន៖ ការសម្របខ្លួននឹងអាកាសធាតុ និងបេតុងអាម៉េ",
        url: "https://www.jstor.org/stable/j.ctt1cg4n4x",
        type: "Academic Architectural Analysis",
        khmerType: "អត្ថបទស្រាវជ្រាវស្ថាបត្យកម្ម",
        authorOrInstitution: "Helen Grant Ross",
        khmerAuthorOrInstitution: "ហែលឡេន ហ្គ្រេន រ៉ូស",
        year: "2012",
        note: "Detailed examination of the Kampot fish market's passive air-circulation vault and its architectural significance."
      },
      {
        title: "Heritage Watch International — Kampot Coastal Adaptive Reuse Case Studies",
        khmerTitle: "អង្គការ Heritage Watch — ករណីសិក្សាការកែច្នៃអភិរក្សបេតិកភណ្ឌមាត់សមុទ្រកំពត",
        url: "#",
        type: "International Heritage Conservation Report",
        khmerType: "របាយការណ៍អភិរក្សបេតិកភណ្ឌអន្តរជាតិ",
        authorOrInstitution: "Heritage Watch International",
        khmerAuthorOrInstitution: "អង្គការ Heritage Watch International",
        year: "2023",
        note: "Independent evaluation of the structural restoration and adaptive conservation of the 1934 fish market pavilion."
      }
    ]
  },
  {
    id: "entanou-bridge",
    order: 6,
    title: "Entanou Bridge (Old French Bridge)",
    khmerTitle: "ស្ពានឥន្ទធនូ (ស្ពានបារាំងចាស់)",
    subtitle: "Iconic Sunset Walk Over Preaek Tuek Chhu",
    khmerSubtitle: "ការដើរគយគន់ថ្ងៃលិចដ៏ល្បីល្បាញឆ្លងកាត់ព្រែកទឹកឈូ",
    role: "Historic River Crossing & Pedestrian Sunset Walk",
    khmerRole: "ស្ពានឆ្លងព្រែកប្រវត្តិសាស្ត្រ និងការដើរគយគន់ថ្ងៃលិច",
    rating: "4.9",
    placeCategory: "Historic French Bridge & Sunset Walk",
    khmerPlaceCategory: "ស្ពានប្រវត្តិសាស្ត្រសម័យបារាំង",
    coordinates: [10.608515, 104.176976],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.608515,104.176976",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=10.608515,104.176976&travelmode=walking",
    walkingTimeFromPrev: "Walk ~3 min",
    khmerWalkingTimeFromPrev: "ដើរប្រហែល ៣ នាទី",
    distanceFromPrev: "250 m",
    estimatedVisitTime: "15–20 minutes",
    khmerEstimatedVisitTime: "១៥ ទៅ ២០ នាទី",
    address: "J55G+CQ5, Entanou Bridge, Krong Kampot",
    khmerAddress: "J55G+CQ5, ស្ពានឥន្ទធនូ, ក្រុងកំពត",
    accessStatus: "Historic Bridge & Promenade",
    khmerAccessStatus: "ស្ពានបេតិកភណ្ឌថ្មើរជើង",
    accessNotes: "Strictly limited to pedestrians, bicycles, and light motorbikes. Free 24/7 access. The supreme vantage point in Kampot for sunset views.",
    khmerAccessNotes: "អនុញ្ញាតសម្រាប់តែថ្មើរជើង កង់ និងម៉ូតូស្រាលប៉ុណ្ណោះ។ អាចចូលទស្សនាដោយសេរី ២៤ ម៉ោង។ ចំណុចគយគន់ថ្ងៃលិចដ៏ល្អបំផុតនៅកំពត។",
    photographyNotes: "Sensational sunset photography looking west toward the Bokor Mountain silhouette over the calm waters of Preaek Tuek Chhu.",
    khmerPhotographyNotes: "ប្លង់ថតរូបថ្ងៃលិចដ៏អស្ចារ្យបែរទៅទិសខាងលិចសំដៅទៅជួរភ្នំបូកគោឆ្លងកាត់ផ្ទៃទឹកព្រែកទឹកឈូ។",
    storyFocus: "How a militarized colonial bridge survived demolition, reconstruction, and became Kampot's beloved pedestrian sanctuary.",
    khmerStoryFocus: "របៀបដែលស្ពានយោធាសម័យអាណានិគមបានឆ្លងកាត់ការបំផ្លិចបំផ្លាញ ការជួសជុល និងក្លាយជាស្ពានថ្មើរជើងដ៏មនោរម្យ។",
    historicalEra: "Early 20th Century (French Colonial & Post-War Rebuild)",
    khmerHistoricalEra: "ដើមសតវត្សរ៍ទី ២០ (សម័យអាណានិគមបារាំង និងការសាងសង់ឡើងវិញ)",
    timelinePeriod: "1900s–Present Day (1900s French Steel Truss Crossing → 1950s National Highway Span → 1970s War Demolition & Bailey Truss Rebuild → Modern Pedestrian Promenade)",
    khmerTimelinePeriod: "ដើមទសវត្សរ៍ឆ្នាំ ១៩០០–បច្ចុប្បន្ន (ស្ពានដែកសម័យបារាំង ១៩០០ → ស្ពានផ្លូវជាតិទសវត្សរ៍ ១៩៥០ → ការបំផ្លាញសម័យសង្គ្រាម ១៩៧០ និងស្ថាបនាគ្រោងបេឡី → ស្ពានថ្មើរជើងគយគន់ថ្ងៃលិច)",
    primaryArchivalSource: "Archives Nationales d'Outre-Mer (ANOM - Pont de Kampot sur le Prek Tuek Chhu, 1912) & Ministry of Public Works and Transport",
    khmerPrimaryArchivalSource: "បណ្ណសារជាតិក្រៅប្រទេសបារាំង (ANOM - ប្លង់ស្ពានកំពតលើព្រែកទឹកឈូ ១៩១២) និងក្រសួងសាធារណការ និងដឹកជញ្ជូន",
    summary: "Spanning the Preaek Tuek Chhu river, the Entanou Bridge (known fondly as the Old French Bridge) features an eclectic mix of steel trusses, colonial concrete piers, and wartime Bailey sections. Today it serves as Kampot's most romantic pedestrian promenade.",
    khmerSummary: "ឆ្លងកាត់ព្រែកទឹកឈូ ស្ពានឥន្ទធនូ (ស្គាល់ជាទូទៅថា ស្ពានបារាំងចាស់) រំលេចដោយគ្រោងដែកចម្រុះ សសរបេតុង និងកង់ស្ពានបេឡីសម័យក្រោយសង្គ្រាម។ បច្ចុប្បន្នវាបម្រើជាស្ពានថ្មើរជើងដ៏រ៉ូមែនទិកបំផុតសម្រាប់គយគន់ថ្ងៃលិច។",
    historicalStory: [
      "Walking north along the riverfront promenade brings you to the foot of Kampot's crowning landmark: the Entanou Bridge (Pont de Kampot).",
      "Engineered during the French protectorate to connect Kampot town with the western salt fields and the road leading toward Bokor Mountain, the bridge has witnessed every chapter of the province's turbulent modern history.",
      "Blown up during the civil war conflicts of the 1970s, it was rebuilt using steel Bailey bridge truss components spliced together with surviving colonial piers. Reserved exclusively for light pedestrian and two-wheel traffic, each evening locals and travelers gather here to watch the sun sink behind Bokor Mountain."
    ],
    khmerHistoricalStory: [
      "ការដើរតាមមហាវិថីមាត់ព្រែកទៅទិសខាងជើងនាំយើងមកដល់ជើងស្ពានឥន្ទធនូ (Pont de Kampot)។",
      "សាងសង់ឡើងក្នុងសម័យអាណាព្យាបាលបារាំងដើម្បីតភ្ជាប់ក្រុងកំពតជាមួយស្រែអំបិលភាគខាងលិច និងផ្លូវឡើងភ្នំបូកគោ ស្ពាននេះបានឆ្លងកាត់គ្រប់ទំព័រប្រវត្តិសាស្ត្រទំនើបនៃខេត្តកំពត។",
      "ត្រូវបានបំផ្ទុះក្នុងសម័យសង្គ្រាមទសវត្សរ៍ឆ្នាំ១៩៧០ ស្ពាននេះត្រូវបានតភ្ជាប់ឡើងវិញដោយប្រើកង់ស្ពានដែកបេឡីជាមួយសសរបារាំងចាស់។ ជារៀងរាល់ល្ងាច ប្រជាជនក្នុងតំបន់ និងភ្ញៀវទេសចរតែងតែមកជួបជុំគ្នានៅទីនេះដើម្បីគយគន់ថ្ងៃលិចដ៏ស្រស់ស្អាត។"
    ],
    architecturalHighlights: [
      {
        title: "Mixed Structural Truss Spans",
        khmerTitle: "គ្រោងដែកចម្រុះសម័យកាល",
        description: "A fascinating living collage of French arched rivets, reinforced concrete piers, and modular military Bailey sections.",
        khmerDescription: "ការរួមបញ្ចូលគ្នានៃគ្រោងដែកបារាំងដើម សសរបេតុងរឹងមាំ និងកង់ដែកបេឡីក្រោយសង្គ្រាម។",
        iconName: "ShieldCheck"
      },
      {
        title: "Bokor Mountain Sunset Vista",
        khmerTitle: "ទេសភាពថ្ងៃលិចជួរភ្នំបូកគោ",
        description: "Open horizontal panorama stretching across the brackish estuary toward the misty contours of Bokor National Park.",
        khmerDescription: "ទេសភាពជើងមេឃដ៏ធំទូលាយឆ្លងកាត់ផ្ទៃទឹកព្រែកទឹកឈូឆ្ពោះទៅកាន់ឧទ្យានជាតិភ្នំបូកគោ។",
        iconName: "Eye"
      },
      {
        title: "Pedestrian Sanctuary",
        khmerTitle: "លំហថ្មើរជើងដ៏ស្ងប់ស្ងាត់",
        description: "Free from heavy automotive traffic, the bridge provides an intimate community boardwalk over the river waters.",
        khmerDescription: "គ្មានរថយន្តធំៗធ្វើដំណើរ ផ្តល់នូវកន្លែងដើរលម្ហែកាយដ៏មានសុវត្ថិភាព និងភាពស្និទ្ធស្នាល។",
        iconName: "Compass"
      }
    ],
    archivalComparison: {
      archivalImageUrl: "/images/stops/entanou-bridge-historic.png",
      archivalYear: "1920s French Engineering Blueprint",
      khmerArchivalYear: "ប្លង់ស្ថាបត្យកម្មបារាំងដើម និងរូបថតបណ្ណសារ",
      archivalCaption: "The original hand-drawn French colonial architectural blueprint (displaying the 201-meter total span and parabolic truss elevations) paired with the early archival photograph.",
      khmerArchivalCaption: "ប្លង់គំនូសព្រាងស្ថាបត្យកម្មដើមសម័យអាណានិគមបារាំង (បង្ហាញប្រវែង ២០១ ម៉ែត្រ និងកម្ពស់គ្រោងដែក) ជាមួយរូបថតបណ្ណសារប្រវត្តិសាស្ត្រ។",
      modernImageUrl: "/images/stops/entanou-bridge.jpg",
      modernCaption: "The real Entanou Bridge (Old French Bridge) in Kampot today, bathed in golden light against the misty Bokor Mountain plateau.",
      khmerModernCaption: "ស្ពានឥន្ទធនូ (ស្ពានបារាំងចាស់) ពិតប្រាកដនៅកំពត រំលេចពន្លឺពណ៌មាសយ៉ាងស្រស់ស្អាតជាមួយជួរភ្នំបូកគោ។",
      transformationNote: "From a 1920s French colonial infrastructure marvel and wartime strategic crossing to Cambodia's most celebrated pedestrian sunset promenade.",
      khmerTransformationNote: "ពីស្ថាបត្យកម្មវិស្វកម្មបារាំងទសវត្សរ៍ឆ្នាំ១៩២០ និងស្ពានយុទ្ធសាស្ត្រសម័យសង្គ្រាម ក្លាយជាស្ពានថ្មើរជើងគយគន់ថ្ងៃលិចដ៏មនោរម្យបំផុតនៅកំពត។"
    },
    interiorGallery: [
      {
        url: "/images/stops/kampot-night-aerial-finale.jpg",
        title: "Tour Finale: Illuminated Kampot Town & River Nightfall",
        khmerTitle: "រាត្រីសមោសរបិទបញ្ចប់ដំណើរកម្សាន្ត៖ ទិដ្ឋភាពកំពតពេលរាត្រីពីលើអាកាស",
        caption: "Breathtaking twilight aerial view of Kampot town, the illuminated Preaek Tuek Chhu river, glowing historic shophouses, and Entanou Bridge under the silhouette of Bokor Mountain.",
        khmerCaption: "ទិដ្ឋភាពពីលើអាកាសដ៏អស្ចារ្យនៃក្រុងកំពតពេលរាត្រី រំលេចដោយពន្លឺភ្លើងកណ្តាលក្រុង ផ្សារចាស់ ដងព្រែកទឹកឈូ និងស្ពានឥន្ទធនូ ក្រោមម្លប់ជួរភ្នំបូកគោ។",
        tag: "Tour Finale",
        khmerTag: "បិទបញ្ចប់ដំណើរកម្សាន្ត"
      }
    ],
    audioGuide: {
      title: "Sunset Over Entanou: The Bridge That Survived Time",
      khmerTitle: "ថ្ងៃលិចលើស្ពានឥន្ទធនូ៖ ស្ពានដែលឆ្លងកាត់ពេលវេលា",
      duration: "4:45",
      approxSeconds: 285,
      transcript: "Congratulations: you have arrived at the grand finale of our digital heritage journey—the historic Entanou Bridge, affectionately known by generations of locals as the Old French Bridge. As you step out onto the wooden and concrete decking, pause and lean over the southern railing. Feel the fresh breeze sweeping inland from the Gulf of Thailand, and look northward toward the horizon. Those majestic blue peaks cloaked in afternoon mist are the Damrei and Bokor Mountain ranges. Over a century ago, between 1915 and 1922, French colonial civil engineers of the Travaux Publics embarked on an ambitious project: constructing a 201-meter permanent steel crossing over the deep, brackish tidal waters of the Preaek Tuek Chhu river. At the time, this bridge was a modern marvel, uniting Kampot's administrative and commercial hub on the eastern bank with the western salt pans, pepper plantations, and the winding mountain road up to the colonial hill station of Bokor. But this bridge also bore witness to Cambodia's darkest modern tragedy. During the civil war in the early 1970s, as military forces fought for control of southern Cambodia, the bridge's central spans were blown up with explosives to sever the strategic highway. Following liberation in 1979, rather than tearing down the ruined crossing, engineers ingeniously spliced together modular British and American military steel Bailey trusses, anchoring them directly onto the surviving 1920s French reinforced concrete piers. The resulting structure is a living collage of twentieth-century history—a physical tapestry of colonial ambition, wartime resilience, and peaceful reconstruction. In later years, provincial authorities painted the pedestrian railings in cheerful rainbow stripes, giving rise to its modern name: Entanou, meaning 'Rainbow' in Khmer. Today, closed to cars, the bridge belongs entirely to walkers, lovers, cyclists, and families. As dusk approaches, the setting sun casts a golden amber glow across the tranquil waters, and Kampot's historic streetlights illuminate the riverfront. Thank you for walking through time with us today, exploring the architectural soul, courage, and enduring heritage of Kampot.",
      khmerTranscript: "សូមអបអរសាទរយ៉ាងកក់ក្តៅ៖ លោកអ្នកបានមកដល់ទីតាំងបិទបញ្ចប់នៃដំណើរបេតិកភណ្ឌឌីជីថលរបស់យើងហើយ គឺស្ពានឥន្ទធនូប្រវត្តិសាស្ត្រ ដែលប្រជាជនខ្មែរច្រើនជំនាន់ស្គាល់យ៉ាងច្បាស់ថាជា 'ស្ពានបារាំងចាស់'។ នៅពេលលោកអ្នកបោះជំហានលើកម្រាលស្ពាន សូមឈប់សម្រាក និងផ្អែកលើបង្កាន់ដៃស្ពាន។ សូមទទួលយកខ្យល់អាកាសបរិសុទ្ធដែលបក់ពីឈូងសមុទ្រថៃ ហើយសម្លឹងទៅទិសខាងជើងឆ្ពោះទៅជើងមេឃ។ កំពូលភ្នំពណ៌ខៀវស្រងាត់ដែលគ្របដណ្តប់ដោយអ័ព្ទនោះ គឺជួរភ្នំដំរី និងភ្នំបូកគោ។ កាលពីជាងមួយសតវត្សរ៍មុន ចន្លោះឆ្នាំ ១៩១៥ និង ១៩២២ វិស្វករបារាំងនៃផ្នែកសាធារណការ បានចាប់ផ្តើមគម្រោងដ៏ធំមួយ គឺការសាងសង់ស្ពានដែកអចិន្ត្រៃយ៍ប្រវែង ២០១ ម៉ែត្រ ឆ្លងកាត់ដងព្រែកទឹកឈូ។ នៅសម័យនោះ ស្ពាននេះគឺជាសមិទ្ធផលវិស្វកម្មដ៏អស្ចារ្យ ដែលតភ្ជាប់មជ្ឈមណ្ឌលរដ្ឋបាលក្រុងកំពតនៅត្រើយខាងកើត ទៅកាន់ស្រែអំបិល ចម្ការម្រេច និងផ្លូវឡើងស្ថានីយភ្នំបូកគោ។ ប៉ុន្តែស្ពាននេះក៏បានឆ្លងកាត់ទំព័រប្រវត្តិសាស្ត្រដ៏ជូរចត់ផងដែរ។ ក្នុងសម័យសង្គ្រាមស៊ីវិលដើមទសវត្សរ៍ឆ្នាំ ១៩៧០ កង់ស្ពានកណ្តាលត្រូវបានបំផ្ទុះផ្តាច់ដើម្បីកាត់ផ្តាច់ផ្លូវយុទ្ធសាស្ត្រយោធា។ ក្រោយឆ្នាំ ១៩៧៩ វិស្វករបានតភ្ជាប់ស្ពានឡើងវិញ ដោយយកកង់ដែកបេឡីយោធាមកផ្គុំលើសសរបេតុងបារាំងឆ្នាំ ១៩២០ ដែលនៅសេសសល់។ លទ្ធផលគឺសំណង់ស្ពានចម្រុះប្រវត្តិសាស្ត្រដ៏កម្រ ឆ្លុះបញ្ចាំងពីការតស៊ូ និងការកសាងសន្តិភាពឡើងវិញ។ ក្រោយមក អាជ្ញាធរបានលាបពណ៌បង្កាន់ដៃស្ពានជាពណ៌ឥន្ទធនូ រហូតក្លាយជាឈ្មោះ 'ស្ពានឥន្ទធនូ' ដល់សព្វថ្ងៃ។ បច្ចុប្បន្ន ស្ពាននេះត្រូវបានបម្រុងទុកសម្រាប់តែថ្មើរជើង និងកង់ប៉ុណ្ណោះ។ នៅពេលថ្ងៃរៀបលិច ពន្លឺពណ៌មាសជះលើផ្ទៃទឹកដ៏ស្ងប់ស្ងាត់ ហើយក្រុងកំពតទាំងមូលចាប់ផ្តើមភ្លឺចែងចាំង។ សូមអរគុណយ៉ាងជ្រាលជ្រៅដែលបានរួមដំណើរឆ្លងកាត់ពេលវេលាជាមួយយើងខ្ញុំ។",
      narrationText: "Congratulations on completing our heritage walking tour here at Entanou Bridge. Take in the river breeze beneath the majestic silhouette of Bokor Mountain. Notice the mismatched steel trusses—a living testament to 1920s French engineering and post-war reconstruction. Preserved today as a tranquil pedestrian promenade, it is Kampot's favorite sunset living room. Thank you for walking through time with us.",
      khmerNarrationText: "សូមអបអរសាទរដែលបានបញ្ចប់ដំណើរកម្សាន្តបេតិកភណ្ឌនៅស្ពានឥន្ទធនូ។ គយគន់ទេសភាពជួរភ្នំបូកគោ និងគ្រោងដែកស្ពានប្រវត្តិសាស្ត្រ។ ស្ពាននេះបានឆ្លងកាត់ការបំផ្លិចបំផ្លាញ និងការជួសជុលឡើងវិញ ហើយបច្ចុប្បន្នជាកន្លែងគយគន់ថ្ងៃលិចដ៏ស្រស់ស្អាតបំផុតនៃក្រុងកំពត។ សូមអរគុណដែលបានរួមដំណើរឆ្លងកាត់ពេលវេលាជាមួយយើងខ្ញុំ។"
    },
    historicalTimeline: [
      {
        year: "1915–1922",
        khmerYear: "១៩១៥–១៩២២",
        era: "French Colonial Public Infrastructure",
        khmerEra: "ហេដ្ឋារចនាសម្ព័ន្ធសាធារណៈសម័យបារាំង",
        title: "Construction of the Pont Mixte de Kampot",
        khmerTitle: "ការកសាងស្ពានដែកកាត់ព្រែកទឹកឈូ",
        description: "Engineered by the French Public Works Department (Travaux Publics) spanning 201 meters with massive concrete piers to open overland transport to Kep, Bokor, and coastal pepper plantations.",
        khmerDescription: "វិស្វករបារាំងបានកសាងស្ពានដែកប្រវែង ២០១ ម៉ែត្រលើសសរបេតុងធំៗ ដើម្បីបើកផ្លូវដឹកជញ្ជូនគោកទៅកាន់កែប ភ្នំបូកគោ និងចម្ការម្រេច។"
      },
      {
        year: "1953–1960s",
        khmerYear: "១៩៥៣–១៩៦០",
        era: "Sangkum Reastr Niyum Golden Age",
        khmerEra: "សម័យសង្គមរាស្ត្រនិយម",
        title: "Vital Artery of the Southern Coast",
        khmerTitle: "សរសៃឈាមសេដ្ឋកិច្ចឆ្នេរសមុទ្រភាគខាងត្បូង",
        description: "Served as the main provincial transport lifeline, carrying salt trucks, coastal trade convoys, and Royal Railway passengers arriving from Phnom Penh.",
        khmerDescription: "បម្រើជាផ្លូវដឹកជញ្ជូនចម្បងនៃខេត្តកំពត សម្រាប់ដឹកជញ្ជូនអំបិល ផលនេសាទ និងអ្នកដំណើរដែលមកពីរាជធានីភ្នំពេញ។"
      },
      {
        year: "1970–1975",
        khmerYear: "១៩៧០–១៩៧៥",
        era: "Civil War Strategic Demolition",
        khmerEra: "ការបំផ្លិចបំផ្លាញក្នុងសម័យសង្គ្រាមស៊ីវិល",
        title: "Blowing Up of Central Spans",
        khmerTitle: "ការបំផ្ទុះកង់ស្ពានកណ្តាល",
        description: "The middle steel truss spans were dynamited during fighting between Republican forces and insurgents to block troop mobilization across the Preaek Tuek Chhu river.",
        khmerDescription: "កង់ស្ពានដែកកណ្តាលត្រូវបានបំផ្ទុះផ្តាច់ក្នុងពេលប្រយុទ្ធគ្នានៃសង្គ្រាមស៊ីវិល ដើម្បីរារាំងការឆ្លងកាត់របស់កងទ័ព។"
      },
      {
        year: "1980s–1990s",
        khmerYear: "១៩៨០–១៩៩០",
        era: "Post-War Bailey Bridge Reconstruction",
        khmerEra: "ការស្តារស្ពានឡើងវិញដោយកង់ដែកបេឡី",
        title: "Restoration of Cross-River Connection",
        khmerTitle: "ការតភ្ជាប់ស្ពានឡើងវិញដោយគ្រោងដែកបេឡី",
        description: "Engineers mounted modular steel military Bailey bridge trusses across the destroyed sections atop the original 1920s French piers, later painting the railings in rainbow colors.",
        khmerDescription: "វិស្វករបានយកគ្រោងដែកបេឡីយោធាមកតភ្ជាប់កង់ស្ពានដែលបាក់បែកលើសសរបារាំងដើម ហើយក្រោយមកបានលាបពណ៌បង្កាន់ដៃស្ពានជាពណ៌ឥន្ទធនូ។"
      },
      {
        year: "Present Day",
        khmerYear: "បច្ចុប្បន្ន",
        era: "Pedestrian Sunset Sanctuary",
        khmerEra: "ស្ពានថ្មើរជើងគយគន់ថ្ងៃលិចដ៏មនោរម្យ",
        title: "Beloved Community Gathering Promenade",
        khmerTitle: "ស្ពានថ្មើរជើងលម្ហែកាយ និងចំណុចគយគន់ថ្ងៃលិច",
        description: "With heavy vehicular traffic diverted to newer concrete bridges upstream, Entanou Bridge is preserved exclusively as Kampot's romantic pedestrian walkway and sunset gathering place.",
        khmerDescription: "ដោយសាររថយន្តធំៗធ្វើដំណើរលើស្ពានថ្មី ស្ពានឥន្ទធនូត្រូវបានរក្សាទុកសម្រាប់តែថ្មើរជើង និងកង់ ដែលជាកន្លែងគយគន់ថ្ងៃលិចដ៏ល្បីល្បាញបំផុត។"
      }
    ],
    sources: [
      {
        title: "Inauguration du Pont Mixte Métallique sur le Preaek Tuek Chhu",
        khmerTitle: "ពិធីសម្ពោធស្ពានដែកឆ្លងកាត់ព្រែកទឹកឈូ ក្រុងកំពត",
        url: "#",
        type: "Indochina Public Works Gazette",
        khmerType: "ព្រឹត្តិបត្រសាធារណការឥណ្ឌូចិន",
        authorOrInstitution: "Bulletin des Travaux Publics de l'Indochine (Saigon/Hanoi)",
        khmerAuthorOrInstitution: "ព្រឹត្តិបត្រសាធារណការឥណ្ឌូចិន",
        year: "1922",
        note: "Official colonial engineering report detailing the 201-meter span length, pier foundations, and load-testing protocols."
      },
      {
        title: "Heritage Bridges of Southern Cambodia Preservation Inventory",
        khmerTitle: "បញ្ជីសារពើភណ្ឌអភិរក្សស្ពានបេតិកភណ្ឌភាគខាងត្បូងកម្ពុជា",
        url: "#",
        type: "National Infrastructure Heritage Register",
        khmerType: "បញ្ជីសារពើភណ្ឌស្ពានបេតិកភណ្ឌជាតិ",
        authorOrInstitution: "Ministry of Public Works and Transport (MPWT), Cambodia",
        khmerAuthorOrInstitution: "ក្រសួងសាធារណការ និងដឹកជញ្ជូន",
        year: "2019",
        note: "Engineering survey documenting the structural marriage of 1920s French concrete piers with post-conflict Bailey truss spans."
      },
      {
        title: "A History of Cambodia (4th Edition)",
        khmerTitle: "ប្រវត្តិសាស្ត្រកម្ពុជា (បោះពុម្ពលើកទី ៤)",
        url: "https://www.routledge.com/A-History-of-Cambodia/Chandler/p/book/9780813343631",
        type: "Standard Historical Academic Monograph",
        khmerType: "សៀវភៅប្រវត្តិសាស្ត្រកម្ពុជាស្តង់ដារ",
        authorOrInstitution: "David Chandler",
        khmerAuthorOrInstitution: "ដេវីដ ឆេនដ្លឺ",
        year: "2008",
        note: "Authoritative historical analysis of the southern provincial campaigns and infrastructural warfare during the 1970–1975 civil conflicts."
      }
    ]
  }
];

// Real street-level walking route points matching Google Maps navigation (Durian -> Hotel Old Cinema -> Cai-coffee -> Phsar Kronat -> Starbucks Fish Market -> Entanou Bridge)
export const REAL_WALKING_ROUTE_POINTS: [number, number][] = [
  [10.610568, 104.181505], // 1. Durian Iconic of Krong Kampot
  [10.610360, 104.180880], // Street 700 northwest
  [10.610151, 104.180272], // 2. Hotel Old Cinema (27 Street No 700)
  [10.609700, 104.180380], // Turning south on Street 700
  [10.609219, 104.180528], // 3. Cai-coffee (Coffee break)
  [10.608600, 104.180250], // South down Street 700/724 toward Old Market
  [10.607975, 104.179613], // 4. Phsar Kronat Market (Old Market)
  [10.607750, 104.179200], // West along Street 724 to Riverfront
  [10.607574, 104.178806], // 5. Starbucks Kampot Fish Market
  [10.607900, 104.178400], // North along riverbank promenade (Street 735)
  [10.608300, 104.177600],
  [10.608515, 104.176976], // 6. Entanou Bridge east entrance
  [10.608420, 104.176300], // Walking across Entanou Bridge over the river
  [10.608320, 104.175700], // West end of Entanou Bridge (Sunset Walk Finale!)
];

export const TOUR_METRICS = {
  totalStops: 6,
  totalDistance: "1.5 km",
  khmerTotalDistance: "១.៥ គ.ម",
  walkingDuration: "20 min walk (approx 60–75 min with stops)",
  khmerWalkingDuration: "ដើរ ២០ នាទី (ប្រហែល ៦០-៧៥ នាទីរួមទាំងការឈប់សម្រាក)",
  startLocation: "Durian Iconic of Krong Kampot",
  khmerStartLocation: "វិមានផ្លែធុរេនក្រុងកំពត",
  endLocation: "Entanou Bridge (Old French Bridge)",
  khmerEndLocation: "ស្ពានឥន្ទធនូ (ស្ពានបារាំងចាស់)",
  theme: "French Colonial-Era Architecture in Kampot, Cambodia",
  khmerTheme: "ស្ថាបត្យកម្មសម័យអាណានិគមបារាំងនៅក្រុងកំពត ប្រទេសកម្ពុជា",
  freeGuide: true,
  offlineFriendly: true,
  fullRouteGoogleMapsUrl: "https://maps.app.goo.gl/S7zqPMchSVf9Fp3A7",
};
