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
                title="Meet Renee, Your Aesthetic Maven and Founder"
                paragraph="Renee is the heart and soul behind Southern Sparkle Aesthetics. With a passion for enhancing natural beauty and promoting holistic wellness, she brings a unique blend of expertise and compassion to every client's journey.
                
                With 21 years of nursing experience, and an advanced education in nursing; Renee has honed her craft to perfection, specializing in neurotoxins and dermal fillers. Her commitment to precision and safety ensures that each treatment is a work of art, restoring confidence and revealing the best version of you.
                
                Beyond her technical prowess, Renee is a warm and caring professional who believes in the power of personalized care. She listens attentively to your desires, ensuring that every visit is a tailored experience, just for you.
                
                With Renee as your guide, you're not just a client; you're a cherished individual on a path to timeless beauty and well-being. Discover the Southern Sparkle difference with Renee, where every treatment is a celebration of your unique sparkle."
                mb="44px"
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
                  // height={982}
                  // width={740}
                  objectFit={"contain"}
                  fill
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
