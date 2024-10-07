import React from 'react';

const AboutMe = [
  {
    title: "My Journey to Creating ResumeReady",
    content: (
      <>
        <p>
          I started ResumeReady because I recognized how challenging it can be for students
          and aspiring professionals to present themselves in a competitive environment.
          Coming from a background where career guidance wasn’t always accessible, I wanted
          to build a tool that could empower others like me—people who have the ambition
          but need the right resources to showcase their potential.
        </p>
        <p>
          ResumeReady isn’t just a tool; it’s the culmination of my own experiences
          navigating leadership roles, internships, and competitive events like FBLA. I’ve
          poured my insights and understanding into creating something that not only helps
          people build a resume but also helps them build confidence in their journey
          toward success.
        </p>
      </>
    ),
  },
  {
    title: "Inspired by My Leadership Experience",
    content: (
      <>
        <p>
          Throughout my time in leadership roles, including my work with FBLA and various
          community projects, I saw firsthand how important it is to have a resume that
          reflects both your skills and your story. Leading projects, organizing events,
          and participating in debates has taught me that presenting yourself with
          confidence is key—and that’s exactly what ResumeReady aims to instill in others.
        </p>
      </>
    ),
  },
  {
    title: "A Platform for Those Who Want to Stand Out",
    content: (
      <>
        <p>
          I believe everyone deserves the chance to stand out, and that’s why I designed
          ResumeReady with customization in mind. It’s not just about meeting standards—it's
          about helping individuals express who they are and what they’re capable of achieving.
        </p>
      </>
    ),
  },
  {
    title: "My Commitment to Privacy and Security",
    content: (
      <>
        <p>
          As someone who values personal privacy, I built ResumeReady with the commitment
          to protecting users’ data, ensuring that everything stays secure and accessible
          only to the person using it. I understand how personal the journey of building a resume
          can be, and it’s important to me that users can do so with peace of mind.
        </p>
      </>
    ),
  },
];

const AboutPage = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 text-gray-700 bg-white">
      {/* Background watermark logo */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/assets/RR-logo.png" // Adjusted logo path
          alt="ResumeReady Watermark"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative lg:flex lg:items-start lg:gap-12">
        <div className="text-center lg:w-1/3 lg:text-left">
          <img
            src="/assets/about.jpg" // Direct path specified
            alt="Andrew McMorrow"
            className="mx-auto w-3/4 h-auto rounded-lg shadow-lg" // Adjust size to control space
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:w-2/3">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-6">
            {AboutMe.map(({ title, content }) => (
              <div key={title} className="text-left">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <div className="text-base leading-relaxed">
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;




<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9909888228762886"
    crossOrigin="anonymous"></script>
</head>
