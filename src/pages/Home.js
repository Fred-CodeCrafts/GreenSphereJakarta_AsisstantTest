import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto text-center py-10">
      {/* Welcome Section */}
      <div className="frame custom-frame">
        <h1 className="text-3xl font-bold mb-4 custom-heading btn-11">Welcome to Green Sphere</h1>
        <p className="text-xl mb-4 custom-paragraph btn-11">
          We are dedicated to creating a sustainable and eco-friendly future.
        </p>
        <div className="btn-9">
          {/* Full-width Banner Image */}
          <img
            src="header.png"
            alt="Green Sphere"
            className="w-full h-[400px] object-cover mx-auto mb-6 rounded-lg shadow-lg custom-element" // Full-width banner image
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center bg-white w-full">
  {/* Image Section */}
  <div className="flex justify-center w-full max-w-[500px]">
    <div className="btn-9">
      <img
        src="/vision_mission.png"
        alt="GreenSphere Banner"
        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl custom-element mb-2"
      />
    </div>
  </div>

        {/* Mission and Vision Section */}
        <div className="w-1/2 text-left p-6 space-y-4"> {/* Added space-y-4 for consistent spacing */}
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2 custom-heading btn-11">
              Our Mission
            </h3>
            <div className="p-4 border-2 border-green-500 rounded-lg transition-all duration-300 hover:shadow-xl hover:bg-green-100 custom-element">
              <p className="mb-4 btn-11">
                To inspire and empower communities to adopt sustainable practices, reducing carbon footprints globally.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 custom-heading btn-11">
              Our Vision
            </h3>
            <div className="p-4 border-2 border-green-500 rounded-lg transition-all duration-300 hover:shadow-xl hover:bg-green-100 custom-element">
              <p className="btn-11">
                A world where sustainable energy is accessible to all, fostering a thriving planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
