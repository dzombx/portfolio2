"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const slides = [
  { src: "/1.jpg", alt: "Slide 1" },
  { src: "/2.jpg", alt: "Slide 2" },
  { src: "/3.jpg", alt: "Slide 3" },
]

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-amber-50 px-4"
      style={{
        fontFamily:
          '"SF Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-slate-900">
          Hello Trevor
        </h1>

        <div className="mx-auto w-full max-w-3xl">
          <Carousel className="relative bg-[#f5f2e7] rounded-2xl p-4 shadow-md">
            <CarouselContent className="flex">
              {slides.map((slide) => (
                <CarouselItem key={slide.src} className="relative overflow-hidden rounded-xl flex justify-center items-center">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="block max-w-full max-h-[70vh] object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="bg-emerald-100 text-slate-800 hover:bg-emerald-200" />
            <CarouselNext className="bg-emerald-100 text-slate-800 hover:bg-emerald-200" />
          </Carousel>
        </div>
      </div>
    </main>
  )
}
