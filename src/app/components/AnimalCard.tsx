
interface AnimalCardProps {
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function AnimalCard({ name, scientificName, description, imageUrl, imageAlt }: AnimalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl mb-1" style={{ color: '#00244d' }}>{name}</h3>
        <p className="text-sm italic mb-3" style={{ color: '#007099' }}>{scientificName}</p>
        <p className="text-sm leading-relaxed" style={{ color: '#00244d', opacity: 0.8 }}>{description}</p>
      </div>
    </div>
  );
}