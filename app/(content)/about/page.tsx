import Blob from "@/components/blob";
import type { Metadata } from "next";
import Link from "next/link";

const socials = [
  {
    name: "Email",
    url: "mailto:thecrowdel@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pahreza-iqbal-prastowo/",
  },
  {
    name: "Github",
    url: "https://github.com/paresiqbal",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pares_iqbal/",
  },
];

export const metadata: Metadata = {
  title: "About",
  description: "Hello everyone, my name is Pares.",
};

export default function About() {
  return (
    <section className="-mt-6 max-w-screen-md md:mx-12">
      <Blob />
      <div className="prose mt-4 max-w-full space-y-8 dark:prose-invert">
        <div>
          <h1 id="about">
            <Link href="#about">About</Link>
          </h1>
          <p>
            Hello, my name is <b>Pahreza Iqbal Prastowo</b> (<b>Pares</b>), an
            enthusiastic fresh graduate with a strong passion for{" "}
            <i>full-stack web development</i>.
          </p>
          <p>
            I recently completed my studies in computer science at{" "}
            <Link
              target="_blank"
              className="bg-purple-600 underline"
              href="https://home.amikom.ac.id/"
            >
              Amikom Yogakarta University
            </Link>
            , where I gained a solid foundation in analytical and programming
            abilities. Throughout my academic journey, I gained hands-on
            experience in programming and ui design using technologies like{" "}
            <b>html</b>, <b>css</b>, and <b>javascript</b>.
          </p>
          <p>
            On the other hand, my love for technology and programming led me to
            delve into the world of full-stack development. I am skilled in
            front-end technologies such as <b>Next.js</b> and <b>TailwindCSS</b>
            , as well as back-end technologies like <b>Express JS</b>.
          </p>
        </div>

        <div>
          <h1 id="contact">
            <Link href="#contact">Contact</Link>
          </h1>
          <p>
            I’m always excited to connect with everyone so please don’t hesitate
            to reach out by following my social media below:
          </p>
          <ul>
            {socials.map((data, idx) => (
              <li key={idx}>
                <p className="my-2 truncate">
                  {data.name} -{" "}
                  <Link target="_blank" className="underline" href={data.url}>
                    {data.url.replace("mailto:", "")}
                  </Link>
                </p>
              </li>
            ))}
          </ul>
          <p>
            Also, you can read my resume{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://drive.google.com/file/d/15wuMtmAlahffkKQbOsHWQbM5j5pEdRZc/view?usp=drive_link"
            >
              here
            </Link>
            . Anyway, thanks for visiting my profile &#128591;
          </p>
        </div>
      </div>
    </section>
  );
}
