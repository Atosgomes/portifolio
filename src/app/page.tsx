import { Main } from "next/document";
import  Home  from "./_containers/home"
import "./globals.css";
import About from "./_containers/about";
export default function Page() {
  return (
<main>
  <Home />
  <About />
</main>

  )
}