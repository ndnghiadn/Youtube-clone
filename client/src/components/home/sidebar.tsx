"use client";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block lg:w-1/4 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Trending Videos</h2>
      <ul>
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center text-gray-300 hover:text-white"
          >
            <span className="mr-2">1.</span>
            Video Title 1
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
