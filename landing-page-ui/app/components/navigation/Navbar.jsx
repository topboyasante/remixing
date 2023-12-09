import { MdOutlineAlternateEmail } from "react-icons/md/index.js";

export default function Navbar() {
  return (
    <nav className="w-full h-full border-b border-[#1a252a]">
      <section className="max-w-screen-xl mx-auto p-5 xl:px-0 border-l border-r border-[#1a252a]">
        <section className="flex justify-between items-center px-3">
          {/* Left Side */}
          <section>
            <section className="flex items-center gap-3">
              <MdOutlineAlternateEmail />
              <p className="font-semibold text-xl">
                mails<span className="text-primary">.</span>
              </p>
            </section>
          </section>
        </section>
      </section>
    </nav>
  );
}
