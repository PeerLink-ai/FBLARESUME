import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Always Free",
    text: "ResumeReady was built on the principle that everyone should have free access to professional resume templates and design tools.",
  },
  {
    src: featureUSSrc,
    title: "FBLA Ready",
    text: "ResumeReady is optimized to help Future Business Leaders of America (FBLA) members build winning resumes for competitions and career development.",
  },
  {
    src: featurePrivacySrc,
    title: "Privacy First",
    text: "ResumeReady keeps all your data stored locally in your browser, ensuring only you have access and complete control over your information.",
  },
  {
    src: featureOpenSourceSrc,
    title: "Fully Customizable",
    text: "ResumeReady offers a wide range of customization options, allowing users to create resumes that align with their personal branding and job search needs.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="mx-auto lg:max-w-4xl">
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES.map(({ src, title, text }) => (
            <div className="px-2" key={title}>
              <div className="relative w-96 self-center pl-16">
                <dt className="text-2xl font-bold">
                  <Image
                    src={src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Feature icon"
                  />
                  {title}
                </dt>
                <dd className="mt-2">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
