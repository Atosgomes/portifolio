import { Main } from "next/document";
import Home from "./_containers/home";
import About from "./_containers/about";
import Works from "./_containers/works";
import Form from "./_containers/form";
import "./globals.css";
import Footer from "./_containers/footer";
export default function Page() {
  return (
    <main>
      <div className="border border-amber-400 m-2">
        <Home />
        <About />
        <Works />
        <Form />
        <Footer />
      </div>
    </main>
  );
}
