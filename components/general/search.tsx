'use client';
import { FC } from 'react';
// icons
import { AiOutlineSearch } from 'react-icons/ai';
// Next
import { useRouter } from 'next/navigation';

type SearchProps = {};

const Search : FC<SearchProps> = () => {
const router = useRouter()
  const handleSearch = (event : any) => {
    event.preventDefault();
	router.push(`/produk/${event.target.search.value && 'search/' + event.target.search.value }`)
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center w-full">
      <input
	  name='search'
        placeholder="cari barang bekas.."
        className="py-[6px] w-full px-2 rounded-md outline-none translate-x-2"
      />
      <button type="submit" className="bg-secondary p-2 z-10 rounded-e">
        <AiOutlineSearch color="white" size={20} />
      </button>
    </form>
  );
};

export default Search;
