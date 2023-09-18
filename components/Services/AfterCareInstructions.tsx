import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

import React from "react";

const AfterCareInstructions = (props) => {
  const {
    title,
    paragraph,
    steps = [],
    width = "570px",
    center,
    mb = "100px",
  } = props;

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="dark:border-white/[.15] border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className={`wow fadeInUp w-full ${
                  center ? "mx-auto text-center" : ""
                }`}
                data-wow-delay=".1s"
                style={{ maxWidth: width, marginBottom: mb }}
              >
                <h2 className="dark:text-white mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
                  {title}
                </h2>
                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                  {paragraph}
                </p>
                <div className="mt-4">
                  <ol className="ml-4 list-decimal">
                    {steps.map((step, index) => (
                      <div key={index}>
                        <h3 className="mt-1 font-semibold">{step.title}</h3>
                        <ul className="ml-4 list-disc">
                          {step.stages.map((stage, stageIndex) => (
                            <li key={stageIndex}>{stage}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterCareInstructions;
