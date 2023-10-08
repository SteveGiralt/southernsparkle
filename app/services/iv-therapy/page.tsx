import ServiceDetail from "../../../components/Services/ServiceDetail";
import IVMenu from "public/images/services/IV-Bar-Menu.png";
import Image from "next/image";
import Link from "next/link";

const IVTherapyDetail = (props) => {
  return (
    <ServiceDetail
      image="/images/services/iv-detail.jpg"
      imageDimensions={{ height: 594, width: 430 }}
      title="Elevate Your Wellness: IV Therapy for Vibrant Living"
      paragraph="At Southern Sparkle Aesthetics, Renee offers expertly administered IV therapy, a powerful and efficient way to enhance your vitality, boost your immune system, and achieve optimal health. IV therapy delivers essential nutrients, vitamins, minerals, and hydration directly into your bloodstream, ensuring rapid absorption and immediate results. Nurse Injector Renee tailors each IV therapy session to meet your unique needs. Whether you're looking to boost energy levels, improve skin complexion, recover from dehydration and fatigue, or enhance your immune system, she has a customized solution for you. With a commitment to your well-being, she goes beyond the ordinary to help you look and feel your best. Schedule your appointment with her today and embark on a journey to vibrant health and vitality."
    >
      <div className="mx-auto mt-10 max-w-2xl">
        <Link href={`/images/services/IV-Bar-Menu.png`} target="_blank">
          <Image src={IVMenu} alt="IV Bar Menu" />
        </Link>
      </div>
    </ServiceDetail>
  );
};

export default IVTherapyDetail;
