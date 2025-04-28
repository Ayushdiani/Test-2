import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Retreat {
  id: number;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
}

export default function Browse() {
  const [retreats, setRetreats] = useState<Retreat[]>([]);

  useEffect(() => {
    async function fetchRetreats() {
      const res = await fetch('/api/retreats');
      const data = await res.json();
      setRetreats(data);
    }
    fetchRetreats();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Retreats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {retreats.map((retreat) => (
          <div key={retreat.id} className="p-6 bg-white rounded-xl shadow-md overflow-hidden">
            <img src={retreat.imageUrl} alt={retreat.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold">{retreat.title}</h2>
            <p className="text-gray-600">{retreat.location}</p>
            <p className="text-gray-500">{retreat.date}</p>
            <Link href={`/retreat/${retreat.id}`}>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                View Retreat
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
