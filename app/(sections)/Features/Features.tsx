import React from "react";
import Image from "next/image";
import FeatureCard from "@/app/components/FeatureCard";

const Features = () => {
  type FeatureItem = {
    icon: string;
    title: string;
    description: string;
  };

  const features: FeatureItem[] = [
    {
      icon: "/icons/copy-paste.svg",
      title: "Simply Copy & Paste",
      description:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: "/icons/customize.svg",
      title: "Easy to customize",
      description:
        "Many desktop publishing packages and web page editors now use for them.",
    },
    {
      icon: "/icons/vs-code-blue.svg",
      title: "Made with TailwindCSS",
      description:
        "Many desktop publishing packages and web page editors now use for them.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="text-center">
        <p
          className="text-[#2B59FF] uppercase tracking-wide font-semibold
                text-xs sm:text-sm md:text-base"
        >
          +120 HANDCODED BLOCKS
        </p>

        <h3
          className="mt-3 font-bold text-gray-900 leading-tight
               text-2xl sm:text-3xl md:text-5xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Lynx helps you <br /> build beautiful websites
        </h3>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout: left text + right image */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-12 items-start">
          {/* left div */}
          <div className="mt-10 flex flex-col gap-2">
            {features.map((f, index) => (
              <FeatureCard
                key={index}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>

          {/* Right div */}
          <div className="w-full flex justify-center items-start max-h-[450px]">
            <Image
              src="/images/feature1.svg"
              alt="Feature visual"
              className="w-full h-auto object-contain"
              width={763}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
