import { useState } from 'react';
import { AnimalCard } from './components/AnimalCard';

const aquariumAnimals = [
  {
    id: 1,
    name: 'Pile Perch',
    scientificName: 'Rhacochilus vacca',
    description: 'The Pile Perch is a species of surfperch native to the eastern Pacific Ocean, commonly found from Alaska to Baja California. They are known for their distinct black spot on the operculum, dusky fins, and a deeply forked tail, inhabiting rocky reefs, kelp forests, and pilings.',
    imageUrl: 'https://d2l2tjqqxralki.cloudfront.net/img/dive/hero.webp',
    imageAlt: 'A small silver fish with a slight brown overtone on sides, a dark vertical bar on midbody, tail fin deeply forked and a dark spot on the lower jaw.'
  },
  {
    id: 2,
    name: 'Kelp Crab',
    scientificName: 'Pugettia producta',
    description: "The Kelp Crab is a smooth-shelled, shield-shaped spider crab found in intertidal zones from Alaska to Mexico. Often clinging to bull kelp or pilings with long legs, they are primarily herbivores that match their color - ranging from yellow to dark brown or red - to their environment.",
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5fcad9a0e504e82ec5986320/1610578467990-4OK8HL7F2GNFWJK76JU3/Danny-Stephenson-210025+%282%29.jpg',
    imageAlt: 'A spindly, reddish-brown crab.'
  },
  {
    id: 3,
    name: 'Pacific Harbor Seal',
    scientificName: 'Phoca vitulina',
    description: 'Harbor seals are one of the most common marine mammals along the U.S. West and East Coasts. They are commonly seen resting on rocks and beaches along the coast and on floating ice in glacial fjords with their head and rear flippers elevated in a “banana-like” position. They feed primarily on fish in marine and estuarine waters, but also in rivers and freshwater lakes. Harbor seals are important indicators of a clean and healthy coastal marine ecosystem. They are a nutritional and cultural resource for Alaska Native communities, and are one of many natural attractions that draw visitors and commerce to US coastal states.',
    imageUrl: 'https://www.seattleaquarium.org/wp-content/uploads/2023/06/harbor-seal-header.jpg',
    imageAlt: 'A grey, torpedo shaped seal.'
  },
  {
    id: 4,
    name: 'Fried Egg Jellyfish',
    scientificName: 'Phacellophora camtschatica',
    description: 'The Fried Egg Jellyfish, also known as the egg yolk jellyfish, is a large, distinctive, and relatively harmless jelly found in the Pacific Northwest (PNW) from the Gulf of Alaska to Chile. It features a white, translucent bell with a yellow-orange, yolklike center, growing up to 2 feet in diameter with trailing venomous tentacles that can reach 10–20 feet in length.',
    imageUrl: 'https://gelatinoussting.com/wp-content/uploads/2018/04/3616874117_53dc5257ff_b-e1546992469938.jpg',
    imageAlt: 'A large jellyfish that resembles a sunny-side-up egg.'
  },
  {
    id: 5,
    name: 'Sculpin',
    scientificName: 'Cottidae',
    description: 'Sculpins are small, bottom-dwelling fish found in cold marine and freshwater habitats, characterized by large, flattened heads, fan-like pectoral fins, and mottled, camouflaged skin. They lack scales and possess two dorsal fins, acting as sedentary "sit-and-wait" predators on rocky substrates.',
    imageUrl: 'https://green2.kingcounty.gov/marine/AppData/PhotosCache/great%20sculpin12.jpg',
    imageAlt: 'A mottled brown fish with spikey, fan-like fins.'
  },
  {
    id: 6,
    name: 'Tube-snout',
    scientificName: 'Aulorhynchus flavidus',
    description: 'Aulorhynchus posess a slender snout, hence the common name. Like the sticklebacks, it feeds on small invertebrates and fish larvae. Also, like sticklebacks, it produces a sticky secretion from its kidneys when breeding. Whereas sticklebacks use this secretion to bind plant matter together to create a nest, the tube-snout simply attaches its eggs to a substrate. Aulorhynchus attaches its eggs to kelp, notably Macrocystis pyrifera.',
    imageUrl: 'https://d2l2tjqqxralki.cloudfront.net/img/dive/pipefish.webp',
    imageAlt: 'A school of small, tube-shaped fish.'
  }
];

export default function App() {
  const [fishCount, setFishCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFishSpotted = () => {
    setFishCount(prev => prev + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e0e9ee' }}>
      {/* Header */}
      <header className="text-white py-8 shadow-lg relative overflow-hidden" style={{ backgroundColor: '#007099' }}>
        {/* Background Logo */}
        <div className="absolute left-0 opacity-10" style={{ height: '500px', width: '500px', top: '-25px' }}>
          <img
            src="https://highline.edu/_resources/images/HC-seal-white-no-bg.png"
            alt="MaST Center Logo"
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl text-center mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>MaST Center Aquarium</h1>
          <p className="text-center text-2xl opacity-90" style={{ fontFamily: 'Oswald, sans-serif' }}>Explore the Salish Sea</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Video Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="aspect-video relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/88z3JG-cylU?autoplay=1&mute=1&si=MtXuN4q51OD4w5Rv"
              title="MaST Center Aquarium Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Fish Spotted Button */}
          <div className="p-6 border-t" style={{ backgroundColor: '#e0e9ee', borderColor: '#007099' }}>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm" style={{ color: '#00244d' }}>Total fish spotted today:</p>
                  <p className="text-3xl" style={{ color: '#007099' }}>{fishCount}</p>
                </div>
              </div>
              <button
                onClick={handleFishSpotted}
                className={`px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 ${isAnimating ? 'scale-110' : 'scale-100'
                  }`}
                style={{ backgroundColor: '#7ac142', color: '#00244d' }}
              >
                <span className="font-semibold">Fish Spotted!</span>
              </button>
            </div>
          </div>
        </div>

        {/* Animals Section */}
        <div className="mb-8">
          <h2 className="text-3xl mb-3 text-center" style={{ color: '#00244d' }}>Commonly Seen Marine Animals</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aquariumAnimals.map((animal) => (
              <AnimalCard
                key={animal.id}
                name={animal.name}
                scientificName={animal.scientificName}
                description={animal.description}
                imageUrl={animal.imageUrl}
                imageAlt={animal.imageAlt}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white py-6 mt-12" style={{ backgroundColor: '#00244d' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© MaST Center Aquarium.</p>
        </div>
      </footer>
    </div>
  );
}