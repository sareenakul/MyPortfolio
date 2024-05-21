"use client";
import About from "@/Components/About";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import WorkExperience from "@/Components/WorkExperience";
import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Akul's Portfolio</title>
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className="snap-start">
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
      <section id="projects" className="snap-start">
        <Projects/>
      </section>

      {/* Contact */}

      {/* Footer */}
    </div>
  );
}
