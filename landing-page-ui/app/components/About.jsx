import React from "react";

export default function About() {
  return (
    <section className="w-full h-full border-l border-r border-b border-border-dark/50">
      <section className="w-full h-full flex flex-col lg:flex-row items-center">
        {/* Left Side */}
        <section className="lg:w-[50%] h-full lg:border-r border-b lg:border-b-0 border-border-dark/50 px-8 py-16 relative">
          <div className="absolute z-[-1] bg-primary/20 bottom-0 right-0 w-[200px] h-[200px] rounded-full blur-[100px]"></div>
          <h1 className="text-2xl lg:text-3xl font-semibold">
            World-class
            <br />
            developer experience
          </h1>
          <p className="my-3">
            We are a team of engineers who love building tools for other
            engineers. Our goal is to create the email platform we've always
            wished we had — one that just works.
          </p>
          <img
            src="https://mintlify.com/_next/image?url=%2Fassets%2Fvalues%2Fdark%2Fgorgeous.png&w=640&q=75"
            alt="img-2"
          />
        </section>
        {/* Right Side */}
        <section className="lg:w-[50%] h-full px-8 py-16 relative">
          <div className="absolute z-[-1] bg-primary/20 bottom-0 right-0 w-[200px] h-[200px] rounded-full blur-[100px]"></div>
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Your app
            <br />
            is more than its container
          </h1>
          <p className="my-3">
            Create beautiful templates without having to deal with {`<table> `}
            layouts and HTML. Powered by react-email, our open source component
            library.
          </p>
          <img
            src="https://mintlify.com/_next/image?url=%2Fassets%2Fvalues%2Fdark%2Fdeveloper.png&w=640&q=75"
            alt="img-2"
          />
        </section>
      </section>
    </section>
  );
}
