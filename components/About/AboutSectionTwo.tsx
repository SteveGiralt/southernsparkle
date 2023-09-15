import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="dark:border-white/[.15] border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Meet Renee, RN, Nurse Injector, and Founder of Southern Sparkle Aesthetics"
                paragraph="Bringing 21 Years of Nursing Expertise and a Heart Full of Compassion to Every Treatment
                
                Welcome to Southern Sparkle Aesthetics, where beauty meets healthcare, and every smile shines a little brighter. At the heart of the practice is the dedicated and talented nurse injector, Renee."
                mb="44px"
              />
              <SectionTitle
                title="A Journey of Compassion and Expertise"
                paragraph="Renee's journey in healthcare began two decades ago when she embarked on her nursing career. With unwavering dedication and a genuine passion for helping others, she has touched countless lives through her work as a registered nurse. Over the years, she honed her skills, always striving for excellence in patient care.
                
                But Renee's story doesn't stop there. She's also a loving mother of six, embodying the values of care, patience, and nurturing in her personal life as well. Her nurturing spirit extends to her patients, creating a warm and welcoming environment at Southern Sparkle Aesthetics.                "
              />
              <SectionTitle
                title="Aesthetic Artistry and Professionalism"
                paragraph="Renee's journey led her to the captivating world of aesthetics, where science meets artistry. As a nurse injector, she combines her extensive medical background with an eye for beauty to deliver stunning results. Renee believes that confidence is the key to inner and outer radiance, and she's here to help you unlock it. With over 20 years of nursing experience, Renee understands the importance of trust in healthcare. At Southern Sparkle Aesthetics, she puts your well-being above all else, ensuring that every procedure is safe, comfortable, and tailored to your unique needs."
              />
              <SectionTitle
                title="Your Partner on the Path to Radiance"
                paragraph="Renee's commitment to excellence, backed by years of medical expertise, ensures that you're in capable hands. Whether you're seeking facial rejuvenation, skin enhancement, or any of her specialized treatments, Renee is your partner on the path to radiant confidence.
                
                We invite you to experience the Southern Sparkle difference, where professionalism, compassion, and expertise converge to make your aesthetic journey truly extraordinary. Explore a range of services and embark on a transformative experience guided by Renee's skilled hands and caring heart.
                
                Thank you for choosing Southern Sparkle Aesthetics. We look forward to helping you discover your inner and outer sparkle with Renee by your side."
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/renee2.jpg"
                  alt="About Renee"
                  height={982}
                  width={740}
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
