//The Link component from Next.js is used for client-side navigation between pages in a Next.js application.
//This component allows for faster transitions between pages because it preloads pages linked by Link components, improving performance and user experience.
import Link from "next/link";
import { CgBriefcase } from "react-icons/cg";

//export default makes Header the default export of the module. When another file imports this module, they’ll get the Header function as the primary export.
export default function Header() {
  return (
    <header className="w-full p-3 shadow flex justify-between items-center lg:fixed top-0 bg-white bg-opacity-80 backdrop-blur-sm">
      <Link className="text-xl md:ml-20 flex gap-2 items-center" href="/">
        <CgBriefcase />
        <h1 className="font-bold">Arbetsplaneraren</h1>
      </Link>
      <Link
        className="text-xs md:text-sm md:mx-16 mx-2 text-sky-900 hover:text-blue-600 transition-colors duration-800"
        href="https://www.janniskaranikis.dev/"
        target="_blank"
      >
        JannisKaranikis.Dev
      </Link>
    </header>
  );
}
