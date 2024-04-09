import Image from "next/image";
import Hero from '@/Components/main/Hero';
import Skills from '@/Components/main/Skills';
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className=" flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  )
}
