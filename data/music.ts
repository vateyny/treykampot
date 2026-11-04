export interface GoldenAgeSong {
  id: string;
  title: string;
  khmerTitle: string;
  artist: string;
  khmerArtist: string;
  year: string;
  genre: string;
  khmerGenre: string;
  duration: string;
  durationSeconds: number;
  coverImage: string;
  youtubeId: string;
  youtubeUrl: string;
  description: string;
  khmerDescription: string;
  walkRecommendation: string;
  khmerWalkRecommendation: string;
  recommendedStopId: string;
  archiveSource: string;
  khmerArchiveSource: string;
  archiveUrl: string;
  melodyNotes?: [number, number][];
}

export interface FeaturedArtist {
  id: string;
  name: string;
  khmerName: string;
  title: string;
  khmerTitle: string;
  bio: string;
  khmerBio: string;
  activeYears: string;
  photoUrl: string;
  notableTracks: string[];
}

export const SOUNDS_OF_KAMPOT_HEADER = {
  title: "Sounds of Kampot",
  khmerTitle: "សំនៀងក្រុងកំពត",
  subtitle: "A collection of songs that brings back the sounds and memories of an earlier Kampot.",
  khmerSubtitle: "កម្រងចម្រៀងដែលនាំមកនូវសំនៀង និងការចងចាំនៃក្រុងកំពតសម័យមុន។",
  description:
    "Take a moment to listen to the music of another time. Featuring selected Cambodian songs that connect with Kampot's history, landscapes and memories, this collection offers a little glimpse into the sounds of the past.",
  khmerDescription:
    "សូមចំណាយពេលមួយភ្លែតដើម្បីស្តាប់តន្ត្រីនៃសម័យកាលមុន។ រួមបញ្ចូលនូវបទចម្រៀងខ្មែរឆ្នើមៗដែលផ្សារភ្ជាប់ជាមួយនឹងប្រវត្តិសាស្ត្រ ទេសភាព និងការចងចាំនៃខេត្តកំពត កម្រងចម្រៀងនេះផ្តល់នូវទិដ្ឋភាពដ៏រស់រវើកនៃសំនៀងពីអតីតកាល។",
  tagline: "Listen, remember and discover Kampot through music.",
  khmerTagline: "ស្តាប់ ចងចាំ និងស្វែងយល់ពីកំពតតាមរយៈតន្ត្រី。"
};

export const GOLDEN_AGE_SONGS: GoldenAgeSong[] = [
  {
    id: "kampot-kompoul-doung-chet",
    title: "Kampot Kompoul Doung Chet",
    khmerTitle: "កំពតកំពូលដួងចិត្ត",
    artist: "Sinn Sisamouth",
    khmerArtist: "ស៊ីន ស៊ីសាមុត",
    year: "1970",
    genre: "Romantic Ballad / Kampot Heritage Anthem",
    khmerGenre: "មនោសញ្ចេតនា / កេរដំណែលកំពត",
    duration: "3:30",
    durationSeconds: 210,
    coverImage: "/images/music/cambodian-golden-age-album.png",
    youtubeId: "ZmTGtmCx6QA",
    youtubeUrl: "https://www.youtube.com/watch?v=ZmTGtmCx6QA",
    description:
      "A timeless poetic tribute to the tranquil waters of Preaek Tuek Chhu, the gentle mountain shadows of Bokor, and the enduring memories of Kampot.",
    khmerDescription:
      "បទចម្រៀងអមតៈរបស់លោក ស៊ីន ស៊ីសាមុត រំលឹកពីអនុស្សាវរីយ៍ ខ្យល់ជំនោរព្រែកទឹកឈូ និងសម្រស់ក្រុងកំពតដែលដក់ជាប់ក្នុងបេះដូង។",
    walkRecommendation:
      "The perfect accompaniment as you walk across Entanou Bridge to watch the evening sunset sink behind Bokor Mountain.",
    khmerWalkRecommendation:
      "ស័ក្តិសមបំផុតសម្រាប់ស្តាប់ពេលកំពុងដើរកាត់ស្ពានឥន្ទធនូ គយគន់ថ្ងៃលិចពីលើដងព្រែកទឹកឈូ។",
    recommendedStopId: "entanou-bridge",
    archiveSource: "Cambodian Vintage Music Archive & YouTube Official Record",
    khmerArchiveSource: "បណ្ណសារតន្ត្រីបុរាណកម្ពុជា",
    archiveUrl: "https://www.youtube.com/watch?v=ZmTGtmCx6QA",
    melodyNotes: [
      [293.66, 1.0], [329.63, 1.0], [392.00, 1.5], [440.00, 0.5],
      [523.25, 2.0], [440.00, 1.0], [392.00, 1.0], [329.63, 2.0],
      [293.66, 1.0], [329.63, 1.0], [392.00, 2.0], [440.00, 1.5],
      [392.00, 0.5], [329.63, 2.0], [293.66, 2.0]
    ]
  },
  {
    id: "cham-choup-roal-tngai-lngeach",
    title: "Cham Choup Roal Tngai Lngeach",
    khmerTitle: "ចាំជួបរាល់ថ្ងៃល្ងាច",
    artist: "Sinn Sisamouth",
    khmerArtist: "ស៊ីន ស៊ីសាមុត",
    year: "1968",
    genre: "Classic Romance Ballad",
    khmerGenre: "មនោសញ្ចេតនាសម័យមាស",
    duration: "3:15",
    durationSeconds: 195,
    coverImage: "/images/music/cambodian-golden-age-album.png",
    youtubeId: "5wkbacdCEOE",
    youtubeUrl: "https://www.youtube.com/watch?v=5wkbacdCEOE",
    description:
      "A gentle romantic ballad recalling faithful promises to meet every evening as the golden afternoon light settles over the town.",
    khmerDescription:
      "បទចម្រៀងពិរោះស្រទន់ រំលឹកពីការសន្យារង់ចាំជួបគ្នារៀងរាល់ពេលល្ងាចនាក្រុងកំពត។",
    walkRecommendation:
      "Listen as you begin your walk around the bustling Durian Roundabout starting point.",
    khmerWalkRecommendation:
      "ស្តាប់ពេលចាប់ផ្តើមដំណើរថ្មើរជើងនៅជុំវិញរង្វង់មូលធុរេនក្រុងកំពត។",
    recommendedStopId: "durian-roundabout",
    archiveSource: "Cambodian Vintage Music Archive & YouTube Official Record",
    khmerArchiveSource: "បណ្ណសារតន្ត្រីបុរាណកម្ពុជា",
    archiveUrl: "https://www.youtube.com/watch?v=5wkbacdCEOE",
    melodyNotes: [
      [392.00, 1.0], [440.00, 1.0], [523.25, 1.5], [587.33, 0.5],
      [659.25, 2.0], [587.33, 1.0], [523.25, 1.0], [440.00, 2.0],
      [392.00, 1.5], [440.00, 0.5], [523.25, 2.0], [392.00, 2.0]
    ]
  },
  {
    id: "chet-mouy-tloem-mouy",
    title: "Chet Mouy Tloem Mouy",
    khmerTitle: "ចិត្តមួយថ្លើមមួយ",
    artist: "Sinn Sisamouth & Ros Serey Sothea",
    khmerArtist: "ស៊ីន ស៊ីសាមុត និង រស់ សេរីសុទ្ធា",
    year: "1969",
    genre: "Golden Age Duet",
    khmerGenre: "ចម្រៀងឆ្លើយឆ្លងសម័យមាស",
    duration: "3:42",
    durationSeconds: 222,
    coverImage: "/images/music/cambodian-golden-age-album.png",
    youtubeId: "b8yUSKoUFVo",
    youtubeUrl: "https://www.youtube.com/watch?v=b8yUSKoUFVo",
    description:
      "The quintessential 1960s duet by Cambodia's most beloved voices, capturing enduring love and devotion.",
    khmerDescription:
      "ចម្រៀងឆ្លើយឆ្លងដ៏ល្បីល្បាញនៃសម័យមាស ឆ្លុះបញ្ចាំងពីសេចក្តីស្រឡាញ់ស្មោះស្ម័គ្រ និងភក្តីភាពជានិច្ចនិរន្តរ៍។",
    walkRecommendation:
      "Enjoy as you admire the 1930s Art Deco facade and vintage balconies of Hotel Old Cinema.",
    khmerWalkRecommendation:
      "ស្តាប់ពេលកំពុងទស្សនាស្ថាបត្យកម្ម Art Deco ឆ្នាំ ១៩៣០ នៃសណ្ឋាគាររោងកុនចាស់។",
    recommendedStopId: "hotel-old-cinema",
    archiveSource: "Smithsonian Folkways & YouTube Official Record",
    khmerArchiveSource: "បណ្ណសារសំនៀងសម័យមាស ស្មីតសូនៀន",
    archiveUrl: "https://www.youtube.com/watch?v=b8yUSKoUFVo",
    melodyNotes: [
      [329.63, 1.0], [392.00, 1.0], [440.00, 1.0], [523.25, 1.5],
      [440.00, 0.5], [392.00, 1.0], [329.63, 1.0], [293.66, 2.0]
    ]
  },
  {
    id: "choup-doy-chaidan",
    title: "Choup Doy Chaidan",
    khmerTitle: "ជួបដោយចៃដន្យ",
    artist: "Sinn Sisamouth",
    khmerArtist: "ស៊ីន ស៊ីសាមុត",
    year: "1967",
    genre: "Acoustic Melody",
    khmerGenre: "មនោសញ្ចេតនា",
    duration: "3:10",
    durationSeconds: 190,
    coverImage: "/images/music/cambodian-golden-age-album.png",
    youtubeId: "N7U7f6DhBbY",
    youtubeUrl: "https://www.youtube.com/watch?v=N7U7f6DhBbY",
    description:
      "A lyrical ballad capturing unexpected encounters, gentle shyness, and serene moments in a provincial town.",
    khmerDescription:
      "បទចម្រៀងរំលេចអារម្មណ៍នៃការជួបគ្នាដោយចៃដន្យនៅជ្រុងវិថីដ៏ស្ងប់ស្ងាត់នៃក្រុងកំពត។",
    walkRecommendation:
      "A warm and contemplative song for relaxing with coffee along the Street 700 shophouse arcade at Cai-coffee.",
    khmerWalkRecommendation:
      "បទភ្លេងកក់ក្តៅស័ក្តិសមសម្រាប់សម្រាកទទួលទានកាហ្វេតាមរបៀងផ្លូវ ៧០០ នៅ Cai-coffee។",
    recommendedStopId: "cai-coffee",
    archiveSource: "Cambodian Vintage Music Archive & YouTube Official Record",
    khmerArchiveSource: "បណ្ណសារតន្ត្រីបុរាណកម្ពុជា",
    archiveUrl: "https://www.youtube.com/watch?v=N7U7f6DhBbY",
    melodyNotes: [
      [440.00, 0.5], [440.00, 0.5], [493.88, 1.0], [523.25, 1.0],
      [587.33, 1.0], [523.25, 0.5], [493.88, 0.5], [440.00, 1.5]
    ]
  },
  {
    id: "pel-oun-khleat-tov",
    title: "Pel Oun Khleat Tov",
    khmerTitle: "ពេលអូនឃ្លាតទៅ",
    artist: "Sinn Sisamouth",
    khmerArtist: "ស៊ីន ស៊ីសាមុត",
    year: "1966",
    genre: "Nostalgic Romance",
    khmerGenre: "មនោសញ្ចេតនានឹករលឹក",
    duration: "3:25",
    durationSeconds: 205,
    coverImage: "/images/music/cambodian-golden-age-album.png",
    youtubeId: "Kz7tocA2Xvw",
    youtubeUrl: "https://www.youtube.com/watch?v=Kz7tocA2Xvw",
    description:
      "A moving reflection on distance, sweet memories, and the longing that bridges the past and the present.",
    khmerDescription:
      "បទចម្រៀងបង្ហាញពីក្តីនឹករលឹក និងអនុស្សាវរីយ៍ផ្អែមល្ហែមដែលដក់ជាប់ក្នុងចិត្តមិនអាចបំភ្លេចបាន។",
    walkRecommendation:
      "Evocative atmosphere for exploring the shaded covered five-foot walkways of Phsar Kronat (Old Market).",
    khmerWalkRecommendation:
      "បរិយាកាសនឹករលឹកស័ក្តិសមពេលដើរកាត់របៀងម្លប់ ៥ ហ្វីតនៃផ្សារចាស់ (ផ្សារក្រណាត់)។",
    recommendedStopId: "phsar-kronat",
    archiveSource: "National Radio of Cambodia & YouTube Official Record",
    khmerArchiveSource: "បណ្ណសារវិទ្យុជាតិកម្ពុជា",
    archiveUrl: "https://www.youtube.com/watch?v=Kz7tocA2Xvw",
    melodyNotes: [
      [293.66, 1.0], [329.63, 1.0], [392.00, 1.0], [440.00, 1.5],
      [392.00, 0.5], [329.63, 2.0], [261.63, 2.0]
    ]
  },
  {
    id: "soriya-riep-lich",
    title: "Soriya Riep Lich",
    khmerTitle: "សូរិយារៀបលិច",
    artist: "Sinn Sisamouth & Ros Serey Sothea",
    khmerArtist: "ស៊ីន ស៊ីសាមុត និង រស់ សេរីសុទ្ធា",
    year: "1968",
    genre: "Sunset Duet",
    khmerGenre: "មនោសញ្ចេតនាថ្ងៃលិច",
    duration: "3:38",
    durationSeconds: 218,
    coverImage: "/images/music/cambodian-golden-age-album.png",
    youtubeId: "vDG1P5kBgoM",
    youtubeUrl: "https://www.youtube.com/watch?v=vDG1P5kBgoM",
    description:
      "A masterwork celebrating sunset over the river and the gentle descent of evening over the Elephant Mountains.",
    khmerDescription:
      "បទចម្រៀងដ៏ស្រទន់ ពណ៌នាពីពន្លឺព្រះអាទិត្យរៀបអស្តង្គតលើដងព្រែក និងជួរភ្នំបូកគោ។",
    walkRecommendation:
      "Listen from the open riverside terrace of Starbucks Kampot Fish Market as dusk falls.",
    khmerWalkRecommendation:
      "ស្តាប់ពីរានហាលមាត់ព្រែកនៃ Starbucks អតីតផ្សារត្រី ខណៈពេលថ្ងៃរៀបលិច។",
    recommendedStopId: "starbucks-kampot",
    archiveSource: "Cambodian Vintage Music Archive & YouTube Official Record",
    khmerArchiveSource: "បណ្ណសារតន្ត្រីបុរាណកម្ពុជា",
    archiveUrl: "https://www.youtube.com/watch?v=vDG1P5kBgoM",
    melodyNotes: [
      [392.00, 1.0], [329.63, 1.0], [293.66, 1.5], [329.63, 0.5],
      [392.00, 2.0], [440.00, 1.0], [523.25, 2.0]
    ]
  },
  {
    id: "khyol-samut",
    title: "Khyol Samut (Sea Breeze)",
    khmerTitle: "ខ្យល់សមុទ្រ",
    artist: "Sinn Sisamouth",
    khmerArtist: "ស៊ីន ស៊ីសាមុត",
    year: "1971",
    genre: "Coastal Anthem / Soulful Ballad",
    khmerGenre: "បទមនោសញ្ចេតនាឆ្នេរសមុទ្រ",
    duration: "3:50",
    durationSeconds: 230,
    coverImage: "/images/music/cambodian-golden-age-album.png",
    youtubeId: "QVLA4vHIdio",
    youtubeUrl: "https://www.youtube.com/watch?v=QVLA4vHIdio",
    description:
      "The definitive coastal anthem of southern Cambodia, evoking the gentle sea breeze, rolling river tides, and wide horizons.",
    khmerDescription:
      "បទចម្រៀងដ៏ល្បីល្បាញប្រចាំឆ្នេរសមុទ្រភាគខាងត្បូង ពិពណ៌នាពីជំនោរខ្យល់សមុទ្រ រលកទឹក និងផ្តេកមេឃដ៏ធំល្វឹងល្វើយ។",
    walkRecommendation:
      "Listen as you stroll along the open waterfront promenade facing Bokor Mountain.",
    khmerWalkRecommendation:
      "ស្តាប់ពេលកំពុងដើរកម្សាន្តតាមមហាវិថីមាត់ព្រែកចំហ បែរមុខទៅជួរភ្នំបូកគោ។",
    recommendedStopId: "entanou-bridge",
    archiveSource: "Cambodian Vintage Music Archive & YouTube Official Record",
    khmerArchiveSource: "បណ្ណសារតន្ត្រីបុរាណកម្ពុជា",
    archiveUrl: "https://www.youtube.com/watch?v=QVLA4vHIdio",
    melodyNotes: [
      [329.63, 0.5], [392.00, 1.0], [440.00, 1.0], [523.25, 1.5],
      [440.00, 0.5], [392.00, 1.0], [329.63, 2.0]
    ]
  },
  {
    id: "derm-doung-proloeung-sneh",
    title: "Derm Doung Proloeung Sneh",
    khmerTitle: "ដើមដូងព្រលឹងស្នេហ៍",
    artist: "Sinn Sisamouth",
    khmerArtist: "ស៊ីន ស៊ីសាមុត",
    year: "1972",
    genre: "Pastoral Romance",
    khmerGenre: "មនោសញ្ចេតនាចម្ការដូង",
    duration: "3:18",
    durationSeconds: 198,
    coverImage: "/images/music/cambodian-golden-age-album.png",
    youtubeId: "BrcR7NWka8E",
    youtubeUrl: "https://www.youtube.com/watch?v=BrcR7NWka8E",
    description:
      "A romantic song celebrating the rustling coconut palms that grace the riverbanks and countryside of Kampot.",
    khmerDescription:
      "បទចម្រៀងមនោសញ្ចេតនាក្រោមម្លប់ចម្ការដូងដ៏ត្រជាក់តាមដងព្រែកនៃខេត្តកំពត។",
    walkRecommendation:
      "A peaceful rhythm for exploring Kampot's agricultural traditions and leafy riverbanks.",
    khmerWalkRecommendation:
      "ចង្វាក់ដ៏ស្ងប់ស្ងាត់សម្រាប់ស្វែងយល់ពីប្រពៃណីកសិកម្ម និងម្លប់បៃតងតាមដងព្រែកកំពត។",
    recommendedStopId: "durian-roundabout",
    archiveSource: "Cambodian Vintage Music Archive & YouTube Official Record",
    khmerArchiveSource: "បណ្ណសារតន្ត្រីបុរាណកម្ពុជា",
    archiveUrl: "https://www.youtube.com/watch?v=BrcR7NWka8E",
    melodyNotes: [
      [261.63, 1.0], [293.66, 1.0], [329.63, 1.5], [392.00, 0.5],
      [440.00, 2.0], [392.00, 1.0], [329.63, 2.0]
    ]
  }
];

export const FEATURED_ARTISTS: FeaturedArtist[] = [
  {
    id: "sinn-sisamouth",
    name: "Sinn Sisamouth",
    khmerName: "ស៊ីន ស៊ីសាមុត",
    title: "The Emperor of Khmer Music",
    khmerTitle: "អធិរាជសំនៀងមាស",
    bio:
      "Born in Stung Treng in 1932, Sinn Sisamouth was a medical orderly who rose to become Cambodia's most prolific and celebrated singer-songwriter. Composing thousands of songs spanning romantic ballads, mambo, psychedelic rock, and traditional folk, his voice remains the defining soundtrack of pre-war modern Cambodia.",
    khmerBio:
      "ប្រសូតនៅខេត្តស្ទឹងត្រែងក្នុងឆ្នាំ ១៩៣២ លោក ស៊ីន ស៊ីសាមុត គឺជាអ្នកនិពន្ធ និងតារាចម្រៀងដ៏ឆ្នើមបំផុតនៃប្រទេសកម្ពុជា។ លោកបាននិពន្ធ និងច្រៀងបទចម្រៀងរាប់ពាន់បទ ចាប់ពីមនោសញ្ចេតនា រ៉ុក រហូតដល់ចម្រៀងប្រជាប្រិយ។",
    activeYears: "1953–1975",
    photoUrl: "/images/music/cambodian-golden-age-album.png",
    notableTracks: [
      "កំពតកំពូលដួងចិត្ត (Kampot Kompoul Doung Chet)",
      "ចាំជួបរាល់ថ្ងៃល្ងាច (Cham Choup Roal Tngai Lngeach)",
      "ខ្យល់សមុទ្រ (Khyol Samut)",
      "ដើមដូងព្រលឹងស្នេហ៍ (Derm Doung Proloeung Sneh)"
    ]
  },
  {
    id: "ros-serey-sothea",
    name: "Ros Serey Sothea",
    khmerName: "រស់ សេរីសុទ្ធា",
    title: "The Golden Voice of the Royal Capital",
    khmerTitle: "រាជិនីសំឡេងមាស",
    bio:
      "Born in Battambang in 1948, Ros Serey Sothea rose from humble beginnings to become the undisputed queen of Cambodian music. Bestowed the title 'Golden Voice of the Royal Capital' by King Norodom Sihanouk, her remarkable vocal range captivated millions.",
    khmerBio:
      "ប្រសូតនៅខេត្តបាត់ដំបងក្នុងឆ្នាំ ១៩៤៨ អ្នកស្រី រស់ សេរីសុទ្ធា បានក្លាយជារាជិនីចម្រៀងដ៏ល្បីល្បាញបំផុត។ អ្នកស្រីទទួលបានព្រះរាជទានគោរមងារ 'រាជិនីសំឡេងមាស' ពីព្រះបាទនរោត្តម សីហនុ។",
    activeYears: "1963–1975",
    photoUrl: "/images/music/cambodian-golden-age-album.png",
    notableTracks: [
      "ចិត្តមួយថ្លើមមួយ (Chet Mouy Tloem Mouy)",
      "សូរិយារៀបលិច (Soriya Riep Lich)"
    ]
  }
];
