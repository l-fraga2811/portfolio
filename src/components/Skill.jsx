/**
 * @copyright 2024 DevFraga
 * @license Apache-2.0
 */

/***********
 * IMPORTS *
 ***********/
import Skillcard from "./Skillcard";

const skillItem = [
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Biblioteca",
  },

  {
    imgSrc: "/images/nextjs.svg",
    label: "NextJS",
    desc: "Framework",
  },

  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },

  {
    imgSrc: "/images/jest.svg",
    label: "Jest",
    desc: "Testing",
  },
  {
    imgSrc: "/images/redux.svg",
    label: "Redux",
    desc: "State Management",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Ferramentas que utilizo</h2>

        <p className="text-zinc-400 mt-3 max-w-[50ch] mb-8 reveal-up">
          Ferramentas e tecnologias que utilizo para criar sites e aplicativos
          excepcionais e de alto desempenho.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <Skillcard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              key={key}
              classes="reveal-up "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
