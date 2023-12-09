import { TbSourceCode } from "react-icons/tb/index.js";

export default function Features() {
  return (
    <section className="w-full h-full border-l border-r border-b border-border-dark/50">
      <section className="border-b border-border-dark/50 p-8">
        <h1 className="text-2xl lg:text-3xl font-semibold">Why Sidetruck?</h1>
      </section>
      <section className="w-full h-full flex flex-col lg:flex-row items-center">
        {/* Left Side */}
        <section className="lg:w-[50%] h-full lg:border-r border-b lg:border-b-0 border-border-dark/50 px-8 py-16 relative">
          <div className="absolute z-[-1] bg-primary/20 bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[100px]"></div>
          <TbSourceCode size={30} />
          <br />
          <h1 className="text-xl lg:text-2xl font-semibold">
            World-class
            <br />
            developer experience
          </h1>
          <p className="my-3 text-[#f5f5f5]/70">
            We are a team of engineers who love building tools for other
            engineers. Our goal is to create the email platform we've always
            wished we had — one that just works.
          </p>
        </section>
        {/* Middle Side */}
        <section className="lg:w-[50%] h-full px-8 py-16 relative lg:border-r border-b lg:border-b-0 border-border-dark/50">
          <div className="absolute z-[-1] bg-primary/20 bottom-0 left-[50%] -translate-x-1/2 w-[200px] h-[200px] rounded-full blur-[100px]"></div>
          <TbSourceCode size={30} />
          <br />
          <h1 className="text-xl lg:text-2xl font-semibold">
            Your app is more than its container
          </h1>
          <p className="my-3 text-[#f5f5f5]/90">
            Create beautiful templates without having to deal with {`<table> `}
            layouts and HTML. Powered by react-email, our open source component
            library.
          </p>
        </section>
        {/* Right Side */}
        <section className="lg:w-[50%] h-full px-8 py-16 relative">
          <div className="absolute z-[-1] bg-primary/20 bottom-0 right-0 w-[200px] h-[200px] rounded-full blur-[100px]"></div>
          <TbSourceCode size={30} />
          <br />
          <h1 className="text-xl lg:text-2xl font-semibold">
            Your app is more than its container
          </h1>
          <p className="my-3 text-[#f5f5f5]/70">
            Create beautiful templates without having to deal with {`<table> `}
            layouts and HTML. Powered by react-email, our open source component
            library.
          </p>
        </section>
      </section>
    </section>
  );
}
