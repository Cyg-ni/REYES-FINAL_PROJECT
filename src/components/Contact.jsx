import React from 'react';

const Contact = () => {
  return (
    <section className="my-8 justify-center mt-30 px-10 md:px-16 lg:px-24">
       <h2 className="flex justify-center text-4xl">The Developer</h2>
       
       <div className="flex justify-center mt-15">
        <img 
          src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/472711034_2077495526054072_9158759497993157495_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHBrYEF7nRZr_OS58KoYuFSsK1IdxoiIuCwrUh3GiIi4HSAk2mHX7pVZLHvI5rvea7Uk4yCgbon6henVQVTJVAR&_nc_ohc=bC4XihomJvIQ7kNvwF1Vwuh&_nc_oc=AdnvfaOp5lQxDlAO9Q8XCXeOFyK2IFpjZrCpnAFO9pNxwCnL2OLLWMk3Awp6r33_wOw&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=os5DPX-3W8ecgX3o0JVb0A&oh=00_AfEd6aiXQxl1QcpGtJWRSwmAHF3IzruNOwPUHPvfkbtkgQ&oe=68056CFE"
          className="w-[450px] h-[300px] object-cover object-top rounded-xl"
        />
      </div>

      <div className="flex flex-col items-center mt-5 text-center space-y-1">
        <p className="text-xl font-bold">Christine Jane P. Reyes</p>
        <p className="text-1.5xs font-light">Baguio City, Philippines</p>
        <p>
          I'm a 2nd year WebTech student with a passion for web design. I have experience in front-end development and graphic design.
        </p>
        <p>
          I'm always looking for an opportunity to grow my skills!
        </p>
      </div>
    </section>
  );
};

export default Contact;
