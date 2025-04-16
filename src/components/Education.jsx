import React from 'react';

const Education = () => {
  return (
    <section class="my-8 px-10 md:px-16 lg:px-24">
  <h2 class="text-4xl mb-6">Education & Contact</h2>

  <div class="flex flex-col lg:flex-row gap-8 rounded-xl shadow-md p-6">

    <div class="flex flex-col gap-5 flex-1">
      <div class="flex flex-row items-center rounded-xl p-4 shadow-sm border max-w-full">
        <img 
          src="https://w7.pngwing.com/pngs/643/465/png-transparent-graduation-ceremony-education-school-square-academic-cap-student-education-logo-purple-angle-furniture-thumbnail.png" 
          alt="" 
          class="w-[50px] h-[50px] object-cover rounded-lg"
        />
        <div class="flex flex-col justify-center ml-4">
          <p class="font-bold">Elementary to Junior Highschool, Northridge Academy</p>
          <p class="text-sm">2011 - Present</p>
        </div>
      </div>

      <div class="flex flex-row items-center rounded-xl p-4 shadow-sm border max-w-full">
        <img 
          src="https://w7.pngwing.com/pngs/643/465/png-transparent-graduation-ceremony-education-school-square-academic-cap-student-education-logo-purple-angle-furniture-thumbnail.png" 
          alt="" 
          class="w-[50px] h-[50px] object-cover rounded-lg"
        />
        <div class="flex flex-col justify-center ml-4">
          <p class="font-bold">Senior Highschool STEM, University of the Cordilleras</p>
          <p class="text-sm">2019 - Present</p>
        </div>
      </div>

      <div class="flex flex-row items-center rounded-xl p-4 shadow-sm border max-w-full">
        <img 
          src="https://w7.pngwing.com/pngs/643/465/png-transparent-graduation-ceremony-education-school-square-academic-cap-student-education-logo-purple-angle-furniture-thumbnail.png" 
          alt="" 
          class="w-[50px] h-[50px] object-cover rounded-lg"
        />
        <div class="flex flex-col justify-center ml-4">
          <p class="font-bold">Bachelors in Information and Technology, University of the Cordilleras</p>
          <p class="text-sm">2023 - Present</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 flex-shrink-0 w-full lg:w-[300px] border-t lg:border-t-0 lg:border-l lg:pl-6 pt-6 lg:pt-0">
      <h3 class="text-2xl font-semibold">Contact Me</h3>

      <div class="flex items-center gap-3">
        <span class="text-gray-700">📧</span>
        <a href="mailto:christiiinereyes@gmail.com" class="hover:text-violet-500">christiiinereyes@gmail.com</a>
      </div>

      <div class="flex items-center gap-3">
        <span class="text-gray-700">🐙</span>
        <a href="https://github.com/Cyg-ni" target="_blank" class="hover:text-violet-500">github.com/Cyg-ni</a>
      </div>

      <div class="flex items-center gap-3">
        <span class="text-gray-700">📘</span>
        <a href="https://facebook.com/Cygniiii" target="_blank" class="hover:text-violet-500">/www.facebook.com/Cygniiii</a>
      </div>

      <div class="flex items-center gap-3">
        <span class="text-gray-700">🐦</span>
        <a href="https://twitter.com/cygniiiii" target="_blank" class="hover:text-violet-500">/x.com/cygniiiii</a>
      </div>
    </div>

  </div>
</section>

  );
};

export default Education;
