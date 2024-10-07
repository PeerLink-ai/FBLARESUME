import React from 'react';
import Head from 'next/head';  // Import Head for managing head of document
import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";
import { Footer } from "home/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9909888228762886"
                crossOrigin="anonymous"></script>
      </Head>
      <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
        <Hero />
        <Steps />
        <Features />
        <Testimonials />
        <QuestionsAndAnswers />
      </main>
      <Footer />
    </>
  );
}
