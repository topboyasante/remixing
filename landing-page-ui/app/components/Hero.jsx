export default function Hero() {
  return (
    <section className="w-full h-full border-l border-r border-b border-[#1a252a] pt-16 relative">
      <div className="absolute z-[-1] bg-primary/20 top-0 left-[50%] -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[100px]"></div>
      <section className="py-8 w-full flex flex-col items-center">
        <section className="lg:w-[50%] mx-auto text-center ">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold mb-4">
            The email service you need, effortlessly
          </h1>
          <p className="text-[#9cc3bf]">
            The best API to reach humans instead of spam folders. Build, test,
            and deliver transactional emails at scale.
          </p>
        </section>
        <section className="flex my-5 gap-5 text-sm">
          <button className="border border-[#1a252a] rounded-3xl p-1">
            <section className="bg-[#2f4347] w-full h-full px-4 py-2 rounded-3xl flex items-center">
              Get Started {">"}
            </section>
          </button>
          <button className="border border-[#1a252a] rounded-3xl px-4 py-2">
            Documentation
          </button>
        </section>
        <section className="p-5 bg-[#1a252a] my-8">
          <img
            src="https://mintlify.com/_next/image?url=%2Fassets%2Fhero%2Fdark%2Fguides.png&w=1920&q=75"
            alt="hero-img"
          />
        </section>
      </section>
    </section>
  );
}
