import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useApiContext } from '../../utils/useContent';

const SearchBox = () => {
  const { fetchMed } = useApiContext();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [displayBackNavigation, setDisplayBackNavigation] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const handleClick = () => {
    setDisplayBackNavigation(true);
    fetchMed(searchTerm);
    console.log('search', searchTerm);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setDisplayBackNavigation(true);
      console.log('search', searchTerm);
    }
  }

  const handleArrowClick = () => {
    setDisplayBackNavigation(false);
    setSearchTerm('');
  }

  return (
    <div className="flex flex-col items-center justify-center w-full pt-10 ">
      <div className="w-full relative h-fit">
        <span className="text-base absolute left-5 text-zinc-600 font-bold top-1/4">
          {displayBackNavigation ? (
            <ArrowRightIcon className="size-6 text-black-500 rotate-180" onClick={handleArrowClick}/>
          ) : (
            <MagnifyingGlassIcon className="size-6 text-black-500" />
          )}
        </span>
        <input
          className="w-full py-4 text-sm rounded-3xl pl-14 pr-24 bg-white"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDownCapture={handleKeyDown}
          placeholder="Type your medicine name here"
        />
        <button
          onClick={handleClick}
          className="absolute right-5 top-1/4 text-[#264c76] font-bold"
        >
          Search
        </button>
      </div>
      {/* <div className="w-full h-1 mx-20 bg-black"/> */}
    </div>
  );
};

export default SearchBox;