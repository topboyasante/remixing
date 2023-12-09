import { TbSourceCode } from "react-icons/tb/index.js";

const Links = [
  {
    id: 0,
    name: "Documentation",
  },
  {
    id: 1,
    name: "Pricing",
  },
  {
    id: 2,
    name: "Contribute",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full h-full border-b border-border-dark/50">
      <section className="max-w-screen-xl mx-auto p-5 xl:px-0 border-l border-r border-border-dark/50">
        <section className="flex justify-between items-center px-3">
          {/* Left Side */}
          <section>
            <section className="flex items-center gap-2">
              <TbSourceCode size={30} />
              <p className="font-semibold text-xl">
                sidetruck<span className="text-primary">.</span>
              </p>
            </section>
          </section>
          {/* Middle */}
          <section className="hidden lg:block">
            <section className="flex items-center gap-5">
              {Links.map((item) => {
                return (
                  <p key={item.id} className="font-semibold">
                    {item.name}
                  </p>
                );
              })}
            </section>
          </section>
          {/* End */}
          <section>
            <section className="flex items-center gap-2">
              <button className="border border-border-dark/50 rounded-3xl px-4 py-2 text-sm">
                Sign In
              </button>
            </section>
          </section>
        </section>
      </section>
    </nav>
  );
}
