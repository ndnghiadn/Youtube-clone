"use client";

const MainContainer = () => {
  return (
    <div className="container mx-auto mt-8 flex">
      <div className="lg:w-3/4 lg:mr-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">Video Title</h1>
          <p className="text-gray-500">Author • 1M views • 1 day ago</p>
          <p className="mt-4">Video description goes here...</p>
        </div>
      </div>
      <div className="lg:w-1/4">
        <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
        <div className="mb-4">
          <img
            src="related_thumbnail.jpg"
            alt="Related Video Thumbnail"
            className="w-full h-20 object-cover mb-2"
          />
          <h3 className="text-md font-semibold">Related Video Title</h3>
          <p className="text-gray-500">Author • 500K views</p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
