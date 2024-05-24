// next
import Image from "next/image";
import Link from "next/link";

// components
import Canvas from "@/components/canvas";
import { Doodle1, Doodle2 } from "@/components/doodle";

// assets
import me from "@/public/default/me.svg";

export default function Main() {
  return (
    <section className="relative flex h-full cursor-pencil items-center justify-center pb-6 dark:cursor-pencil-dark md:w-screen md:pb-0 md:pr-2.5">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="relative hidden w-[350px] place-items-center dark:grid md:w-[400px]">
          <Image alt="doodle" src={me} priority />
          <Doodle1 className="absolute bottom-0 stroke-[#ffd55a]/70" />
        </div>
        <div className="relative grid w-[350px] place-items-center dark:hidden md:w-[400px]">
          <Image alt="doodle" src={me} priority />
          <Doodle1 className="absolute bottom-0 stroke-[#ff85a2]/70" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 md:ml-4 md:items-start">
          <h1 className="mt-1 font-doodle text-3xl md:text-4xl">
            Yahaloo,
            <span className="relative mx-1.5">
              i&apos;m pares.
              <Doodle2 className="absolute -bottom-2 -right-4 hidden w-24 stroke-[#ffd55a]/70 dark:block md:w-28" />
              <Doodle2 className="absolute -bottom-2 -right-4 block w-24 stroke-[#ff85a2]/70 dark:hidden md:w-28" />
            </span>
            ✌
          </h1>
          <p className="text-md max-w-[500px] text-center md:text-left md:text-lg">
            A self-taught programmer based in Bengkulu. Love to build things
            with code. Right now focusing on web development.
          </p>
          <p className="text-md max-w-[500px] text-center md:text-left md:text-lg">
            {"Peek my "}
            <Link
              className="relative z-10 font-semibold underline"
              href="/projects"
            >
              past works
            </Link>
            {", and learn more "}
            <Link
              href="/about"
              className="relative z-10 font-semibold underline"
            >
              about me
            </Link>
            .
          </p>
        </div>
      </div>
      <Canvas />
    </section>
  );
}
