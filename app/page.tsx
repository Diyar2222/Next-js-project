import Image from "next/image";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Logo from "./ui/logo";

export default function Home() {
  return (
    <main>
      {/* Logo */}
      <div className="h-20 flex shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Logo />
      </div>
      {/*welcome screen*/}
      <div className="mt-4 flex grow flex-col md:flex-row gap-4">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme. </strong>
            This is the Next js example site
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm text-white font-medium transition-colors hover:bg-blue-400 md:text-base"
          >
            Go to login
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            alt="hero-image"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            alt="hero mobile"
            width={560}
            height={620}
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
