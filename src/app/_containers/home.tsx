import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../../components/ui/button";

export default function Home() {
  return (
    <section className="bg-black text-white p-2 h-[50vh]">
      <div className="text-center">
        <h1 className="text-2xl font-bold m-5 md:text-4xl md:m-15 ">
          Bem vindo ao meu Portfolio,
        </h1>
        <h1 className="text-2xl font-bold m-5 md:text-4xl md:m-15 ">
          Meu nome é Atos Desenvolvedor Web.
        </h1>
        <p className="text-2xl m-5 md:text-3xl md:m-15 ">
          Crio sistemas para web, utilizando as mais recentes tecnologias.
        </p>
        <Button className="bg-green-500 p-2 rounded hover:bg-green-800 hover:text-[#FACC15] cursor-pointer  text-center px-6 py-3 text-ml m-5 md:text-xl ">
          <a
            href="https://wa.me/5521982473103"
            target="_blank"
            rel="noopener noreferrer gap-2"
            className="cursor-pointer flex items-center justify-center gap-2 text-sm"
          >
            <WhatsappLogoIcon className="text-white" />
            Fale Comigo
          </a>
        </Button>
      </div>
    </section>
  );
}
