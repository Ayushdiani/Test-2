import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to Retreat Haven
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Find and book exclusive wellness retreats.
      </p>
      <Link href="/browse">
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
          Browse Retreats
        </button>
      </Link>
    </main>
  );
}
