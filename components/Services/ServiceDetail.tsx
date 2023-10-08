import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const ServiceDetail = (props: {
  title: string;
  paragraph: string;
  image: string;
  imageDimensions?: {
    height: number;
    width: number;
  };
  children?: any;
}) => {
  const {
    title,
    paragraph,
    image,
    imageDimensions = { height: 960, width: 640 },
    children,
  } = props;

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="dark:border-white/[.15] border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title={title} paragraph={paragraph} mb="44px" />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[740px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  objectFit={"contain"}
                  // height={imageDimensions.height}
                  // width={imageDimensions.width}
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
          {children}
          <div className="mt-2 flex items-center justify-center">
            <Link href="https://reneebrinson.setmore.com/">
              <button className="flex w-full items-center justify-center rounded-md bg-dark p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
