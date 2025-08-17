export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm">
          © {new Date().getFullYear()} Atos Gomes de Oliveira. Todos os direitos reservados.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://github.com/Atosgomes" target="_blank" rel="noopener noreferrer" className="hover:text-[#FACC15]">
            GitHub
          </a>
          <a href="mailto:atos22dr1@gmail.com" className="hover:text-[#FACC15]">
            Email
          </a>
          <a href="https://wa.me/5521982473103" target="_blank" rel="noopener noreferrer" className="hover:text-[#FACC15]">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}