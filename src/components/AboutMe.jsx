import React, { useState } from 'react';
import '../App.css';

const AboutMe = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="my-5 mt-25">
      <div className="flex justify-center items-center min-h-[60vh] px-6 md:px-12 lg:px-20 ">
        <div className="relative">
          <img
            className="w-[850px] h-auto rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            src="https://cms.jibecdn.com/prod/blacklinesystems-product-technology/assets/LP-SKU-A1-IMG-BG-en-us-1646083757867.png"
            alt="Background"
          />

          <p className="absolute inset-x-0 top-[45%] flex justify-center items-center text-white text-3xl font-bold drop-shadow-lg animate-fade-in-up">
            Hey there! I'm Christine Jane Reyes.
          </p>
          <p className="absolute inset-x-0 top-[55%] flex justify-center items-center text-white text-base font-medium drop-shadow-lg animate-fade-in-up">
            2nd Year Web-Dev student, JRPG enjoyer, and loves learning new things.
          </p>
        </div>
      </div>

      {/* Image row section */}
      <div
        id="AboutMeImage"
        className="flex justify-center gap-4 mt-6 px-4 overflow-x-auto"
      >
        {[
          "https://platform.polygon.com/wp-content/uploads/sites/2/2025/03/monster_hunter_wilds_zoh_shia_guide_2.jpg?quality=90&strip=all&crop=0,0,100,100",
          "https://heartandpaw.com/wp-content/uploads/2022/05/cats-groom-each-other.jpg",
          "https://i.redd.it/lpd3dt0sj4va1.jpeg",
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            className="w-[250px] h-[180px] object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition duration-300"
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-70 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;
