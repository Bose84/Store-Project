import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          This is
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
      Welcome to Our Home Essentials Store!
      Transform your living space with our handpicked collection of high-quality
       home appliances and furniture. From cozy sofas and elegant beds to practical tables, chairs, and 
       ambient lamps — we offer everything you need to make your home both stylish and comfortable. 
       Our goal is to bring you products that blend functionality with design, making your home truly feel like home.
        Explore our collection and find the perfect pieces to suit your space and lifestyle.
      </p>
    </>
  );
};

export default About;
