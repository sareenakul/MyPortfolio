"use client";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
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
      <section id="hero" className="snap-center">
        <Hero/>
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}

      {/* Footer */}
    </div>
  );
}
