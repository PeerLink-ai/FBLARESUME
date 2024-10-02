import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Build a standout
          <br />
          resume effortlessly
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          With this free, FBLA-friendly, and feature-packed resume builder
        </p>
        <Link href="/resume-import" className="btn-primary mt-6 lg:mt-14">
          Get Started <span aria-hidden="true">→</span>
        </Link>
        <p className="mt-3 text-sm text-gray-600 lg:mt-36">
          Already have a resume? Analyze its performance with the{" "}
          <Link href="/resume-parser" className="underline underline-offset-2">
            resume analyzer
          </Link>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9909888228762886"
     crossOrigin="anonymous"></script>