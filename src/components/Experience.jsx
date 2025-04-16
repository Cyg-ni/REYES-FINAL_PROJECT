import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false to reset the animation each time the element enters the viewport
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

  return (
    <section ref={ref} className="my-8 justify-center mt-30 px-10 md:px-16 lg:px-24 ">
      <motion.h1 
        className="flex justify-center text-4xl"
        initial={{ opacity: 0 }} 
        animate={{ opacity: inView ? 1 : 0 }} 
        transition={{ duration: 1 }}>
        EXPERIENCE
      </motion.h1>
    
      <motion.div 
        id="ex1" 
        className="flex flex-col md:flex-row items-center mt-15 justify-end md:justify-start px-6 py-4 rounded-full border bg-zinc-950 border-gray-300 shadow-md w-full md:w-[80%] md:ml-0 md:mr-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        <div className="md:w-1/2 text-left pl-6 pr-2 space-y-2">
            <h3 className="text-xl font-bold">Environmental Asset Cleaner</h3>
            <p className="text-sm italic ">Concept Art & 3D Modeling Company</p>
            <ul className="list-disc list-inside">
              <li>Cleaned and optimized assets for digital art pipelines</li>
              <li>Worked closely with artists and modelers</li>
            </ul>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src="https://cdnb.artstation.com/p/assets/covers/images/019/681/079/large/pixel-mafia-pm-artstation-thumb-alley.jpg?1564567932"
              alt="Environmental Work"
              className="rounded-xl w-[200px] h-[130px] object-cover"
            />
        </div>
      </motion.div>

      <motion.div 
        id="ex2" 
        className="flex flex-col md:flex-row-reverse justify-between items-center px-6 py-4 rounded-full border border-gray-300 shadow-md w-full md:w-[80%] md:ml-auto mt-8"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        <div className="md:w-1/2 text-left pl-6 pr-2 space-y-2">
            <h3 className="text-xl font-bold">Technical Skills</h3>
            <ul className="list-disc list-inside">
              <li>HTML, CSS, JavaScript, Python, SQL, C# – proficient in developing responsive and dynamic web applications using these technologies</li>
              <li>TailwindCSS, Vue.js (Learning) – gaining expertise in modern front-end frameworks to build scalable and efficient user interfaces</li>
              <li>Deeply interested in Machine Learning – exploring various algorithms and their applications in data science and AI-driven projects</li>
            </ul>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src="https://blog.pango.education/hubfs/Coding%20Blog%20Image.jpg"
              alt="Tech Skills"
              className="rounded-xl w-[200px] h-[130px] object-cover"
            />
        </div>
      </motion.div>

      <motion.div 
        id="ex3" 
        className="flex flex-col md:flex-row items-center mt-10 justify-end md:justify-start px-6 py-4 rounded-full border border-gray-300 shadow-md w-full md:w-[80%] md:ml-0 md:mr-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        <div className="md:w-1/2 text-left pl-6 pr-2 space-y-2">
            <h3 className="text-xl font-bold">University Experience</h3>
            <p className="text-sm italic ">Web Development and Website Design</p>
            <ul className="list-disc list-inside">
              <li>Learned the basics of Python, JS, C++, C#, Java, and frameworks such as Tailwind and Vue</li>
              <li>Learned core skills to be able to work efficiently such as communication and independence</li>
            </ul>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/University_of_the_Cordilleras_%28main_building_and_nursing_building%29.jpg"
              alt="University Experience"
              className="rounded-xl w-[200px] h-[130px] object-cover"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
