import React from 'react';

const SearchBox = () => {
  const [search, setSearch] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }


  return (
    <div className="bg-clip-padding w-full">
      <input type="text" className='w-full' placeholder="Search..." onChange={handleChange} value={search} />
    </div>
  );
};

export default SearchBox;