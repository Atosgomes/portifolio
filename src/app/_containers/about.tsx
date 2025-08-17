import { Button } from "../../components/ui/button";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
export default function About() {
  return (
    <section className="bg-black text-white p-2 pb-10 px-2 lg:px-100 xl:px-100 2xl:px-100">
      <div className="text-center ">
        <h1 className="text-4xl font-bold m-10">Sobre Mim</h1>

        <Button className="bg-gray-800 p-2 rounded hover:bg-gray-700 hover:text-[#FACC15] cursor-pointer  text-center px-10 py-4 text-ml m-5 md:text-xl ">
          <a
            href="https://github.com/Atosgomes"
            target="_blank"
            rel="noopener noreferrer gap-2"
            className="cursor-pointer flex items-center justify-center gap-2 text-sm"
          >
            <GithubLogoIcon className="text-white" />
            Github
          </a>
        </Button>
        <Button className="bg-blue-800 p-2 rounded hover:bg-blue-700 hover:text-[#FACC15] cursor-pointer  text-center px-9 py-4 text-ml m-5 md:text-xl ">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer gap-2"
            className="cursor-pointer flex items-center justify-center gap-2 text-sm"
          >
            <LinkedinLogoIcon className="text-white" />
            Linkedin
          </a>
        </Button>
        <p className="text-2xl m-10">
          Sou um desenvolvedor web apaixonado por criar experiências incríveis.
        </p>
        <p className="text-1xl px-2">
          Olá! Meu nome é Atos Gomes de Oliveira e sou programador apaixonado
          por tecnologia e inovação. Trabalho com desenvolvimento web utilizando
          Node.js, Next.js e JavaScript, criando soluções modernas e eficientes
          para diversos tipos de projetos. Este portfólio foi criado para
          apresentar um pouco do meu trabalho, minhas habilidades e minha
          trajetória como desenvolvedor. Aqui você encontrará exemplos de
          sistemas que desenvolvi, sempre buscando as melhores práticas e as
          tecnologias mais atuais do mercado. Seja bem-vindo e sinta-se à
          vontade para conhecer mais sobre meu trabalho!
        </p>
      </div>
    </section>
  );
}
