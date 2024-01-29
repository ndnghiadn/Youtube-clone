"use client";

const Header = () => {

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="YouTube Logo" className="w-10 h-10 mr-2" />
          <span className="text-lg font-semibold">YouTube</span>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 mr-2 rounded"
          />
          <button className="bg-red-600 text-white px-3 py-1 rounded">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
