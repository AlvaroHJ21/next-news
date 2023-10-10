'use client';

import { useNewsStore } from '@/stores/news/useNewsStore';

export const InputSearch = () => {
  const searchArticles = useNewsStore((state) => state.searchArticles);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { query } = e.target as HTMLFormElement;

    if (query.value) {
      searchArticles(query.value);
    } else {
      searchArticles('tech');
    }
  }

  return (
    <form onSubmit={handleSearch} className="py-4 relative w-full max-w-md m-auto">
      <input
        type="text"
        placeholder="Search..."
        className="text-sm py-4 px-8 w-full text-black outline-none"
        name="query"
      />
      <button className="w-12 h-12 bg-black absolute right-[2px] top-0 bottom-0 m-auto">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};
