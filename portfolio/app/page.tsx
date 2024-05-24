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
import ak from "../public/Akuls.jpg";
import aa from "../public/akuls1.jpg"


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Akul's Portfolio</title>
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About/>
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
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
        <footer className=" sticky bottom-5 w-full cursor-pointer">
          <div>
            <Image className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" src={aa} alt="home"/>
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
