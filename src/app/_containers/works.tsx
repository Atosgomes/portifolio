import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Works() {
  return (
    <section id="works" className="h-full">
      <div className="bg-black text-white p-2 text-center pb-10">
        <h1 className="text-4xl font-bold m-10">Meus Trabalhos</h1>
        <p className="m-10">Aqui estão alguns dos projetos em que trabalhei</p>

        <div className="overflow-x-hidden">
          <Carousel className="  flex justify-center max-w-6xl mx-auto">
            <CarouselContent>
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 min-w-[300px] flex justify-center">
                <Image
                  src="/33.png"
                  alt="Descrição"
                  width={500}
                  height={500}
                  className="w-[300px] h-auto object-contain"
                />
              </CarouselItem>

              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 min-w-[300px] flex justify-center">
                <Image
                  src="/33.png"
                  alt="Descrição"
                  width={500}
                  height={500}
                  className="w-[300px] h-auto object-contain"
                />
              </CarouselItem>

              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 min-w-[300px] flex justify-center">
                <Image
                  src="/33.png"
                  alt="Descrição"
                  width={500}
                  height={500}
                  className="w-[300px] h-auto object-contain"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
