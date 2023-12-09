import { FaGoogle, FaYoutube } from "react-icons/fa/index.js";
import { SiTesla, SiVercel, SiHeroku } from "react-icons/si/index.js";

export default function Companies() {
  return (
    <section className="w-full h-full border-l border-r border-b border-[#1a252a] py-16">
      <section className="p-5">
        <p className="text-center lg:w-[40%] mx-auto">
          Companies of all sizes trust Resend to deliver their most important
          emails.
        </p>
        <section className="flex flex-wrap justify-center items-center my-5 gap-16">
          <FaGoogle size={50} />
          <FaYoutube size={50} />
          <SiTesla size={50} />
          <SiVercel size={50} />
          <SiHeroku size={50} />
        </section>
      </section>
    </section>
  );
}
