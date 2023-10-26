'use client';
import { FC } from 'react';
// icons
import { AiOutlineSearch } from 'react-icons/ai';

type SearchProps = {};

const Search : FC<SearchProps> = () => {
  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('kontol');
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        placeholder="cari barang bekas.."
        className="py-[6px] px-2 rounded-md outline-none translate-x-2"
      />
      <button type="submit" className="bg-secondary p-2 z-10 rounded-e">
        <AiOutlineSearch color="white" size={20} />
      </button>
    </form>
  );
};

export default Search;
