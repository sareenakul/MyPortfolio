"use client";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import WorkExperience from "@/Components/WorkExperience";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/16/solid";



export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* <audio src="../public/mus.mp3"></audio> */}
      <Head>
        <title>Akul`&apos;` Portfolio</title>
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero/>
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About/>
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        <WorkExperience/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects/>
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact/>
      </section>

      <Link href="#hero">
      <footer className="sticky bottom-5 w-[5%] cursor-pointer">
        <div className="flex">
          <HomeIcon className="h-10 w-10 text-gray-500 hover:text-[#F7AB0A] transition-colors duration-300 ease-in-out transform hover:scale-110" />
        </div>
      </footer>
    </Link>

      {/* Footer */}
      <section id="footer" className="snap-end">
        <Footer/>
      </section>
    </div>
  );
}
