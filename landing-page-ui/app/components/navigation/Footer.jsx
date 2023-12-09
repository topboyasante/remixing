import { TbSourceCode } from "react-icons/tb/index.js";

export function Footer() {
  return (
    <footer className="w-full h-[30vh] border-b border-border-dark/50">
      <section className="max-w-screen-xl mx-auto p-8 border-l h-full border-r border-border-dark/50">
        <section className="flex justify-between items-center px-3 h-full">
          {/* Left Side */}
          <section>
            <section className="flex items-center gap-2">
              <TbSourceCode size={30} />
              <p className="font-semibold text-xl">
                sidetruck<span className="text-primary">.</span>
              </p>
            </section>
          </section>
          {/* Right Side */}
          <section></section>
        </section>
      </section>
    </footer>
  );
}
