import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

const weights = [
  "font-thin",
  "font-normal",
  "font-medium",
  "font-black",
  "font-black",
  "font-medium",
  "font-normal",
  "font-thin",
];

const invertedWeights = [
  "group-hover:font-black",
  "group-hover:font-medium",
  "group-hover:font-normal",
  "group-hover:font-thin",
  "group-hover:font-thin",
  "group-hover:font-normal",
  "group-hover:font-medium",
  "group-hover:font-black",
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-pink-100">
      <Image
        src="/ball2.gif"
        alt="A blue ball"
        width={200}
        height={200}
        className="pointer-events-none absolute left-0 top-6"
      />
      <Image
        src="/ball1.gif"
        alt="A pink ball"
        width={100}
        height={100}
        className="pointer-events-none absolute right-2 top-24"
      />
      <Image
        src="/ball2.gif"
        alt="A blue ball"
        width={150}
        height={150}
        className="pointer-events-none absolute bottom-60 right-0"
      />
      <Image
        src="/ball1.gif"
        alt="A pink ball"
        width={200}
        height={200}
        className="pointer-events-none absolute bottom-12 left-12"
      />
      <Image
        src="/ball2.gif"
        alt="A pink ball"
        width={200}
        height={200}
        className="pointer-events-none absolute bottom-12 left-1/2 hidden"
      />
      <h1 className="group relative z-[1] cursor-default text-7xl sm:text-9xl">
        {/* <Image */}
        {/*   src="/lilguy.gif" */}
        {/*   alt="A cute lil guy dancing" */}
        {/*   width={400} */}
        {/*   height={200} */}
        {/*   className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2" */}
        {/* /> */}
        {"Demonimo".split("").map((letter, i) => (
          <span
            key={nanoid()}
            className={`${weights[i]} transition-all duration-300 ${invertedWeights[i]}`}
          >
            {letter}
          </span>
        ))}
        <div className="pointer-events-none absolute left-2/3 top-40 -z-[1] h-[80vh] w-full -translate-y-1/2">
          <Image
            src="/FROGGINS.png"
            alt="frog"
            fill
            className="object-contain"
          />
        </div>
      </h1>
      <h2 className=" mt-4 text-xl">Magazine coming soon</h2>
    </main>
  );
}
