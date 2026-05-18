// This is a Client Component because it needs to track what the user types
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This pushes the search term to the URL: e.g., /search?q=jersey
    router.push(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Tactical Gear..."
        className="w-full bg-transparent border-b border-zinc-800 py-2 focus:border-red-600 outline-none transition-all text-white"
      />
    </form>
  );
}