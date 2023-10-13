"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import formatCurrency from "@/utils/formatCurrency";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-8 md:py-10 lg:py-14">
      <div className="container">
        <SectionTitle
          title="Featured Services"
          paragraph="In collaboration with the spa at CPR Fitness, Southern Sparkle Aesthetics will be offering neurotoxins, dermal fillers, and IV vitamin therapy. In addition, we offer professional dental whitening as well as Semaglutide weight loss injections. Experience the transformation with a wide range of personalized beauty and wellness services at Southern Sparkle Aesthetics."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="IV Therapy"
            detailPage="/services/iv-therapy/"
            // price={`${formatCurrency(50)} per Unit`}
            price="From $75"
            subtitle="Recharge your vitality and enhance your well-being."
            image={"/images/services/iv_therapy.png"}
          >
            <OfferList text="Boosts Energy and Vitality" status="active" />
            <OfferList text="Revitalizes Skin and Complexion" status="active" />
            <OfferList text="Enhances Immune System" status="active" />
            <OfferList
              text="Relieves Dehydration and Fatigue"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Neurotoxins"
            detailPage="/services/neurotoxins/"
            price={`${formatCurrency(11)} per Unit`}
            subtitle="Rediscover Youthful Radiance with Neurotoxin Treatments."
            image={"/images/services/botox.png"}
          >
            <OfferList text="Reduces Fine Lines and Wrinkles" status="active" />
            <OfferList
              text="Minimizes Facial Muscle Contractions"
              status="active"
            />
            <OfferList text="Restores a Youthful Appearance" status="active" />
            <OfferList
              text="Non-Invasive Anti-Aging Solution"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Dermal Fillers"
            detailPage="/services/dermal-fillers/"
            // price={`${formatCurrency(100)} per Treatment`}
            price="Contact For A Quote"
            subtitle="Revitalize Your Natural Beauty with Dermal Fillers."
            image={"/images/services/filler.png"}
          >
            <OfferList text="Restores Facial Volume" status="active" />
            <OfferList
              text="Smoothes Wrinkles and Fine Lines"
              status="active"
            />
            <OfferList text="Enhances Lips and Cheeks" status="active" />
            <OfferList
              text="Non-Surgical Facial Rejuvenation"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Semaglutide Weight Loss"
            detailPage="/services/weight-loss/"
            // price={`${formatCurrency(100)} per Treatment`}
            price="$300/month"
            subtitle="Discover Your Path to Lasting Weight Management"
            image={"/images/services/weight-loss.jpg"}
          >
            <OfferList text="Once Weekly Injections" status="active" />
            <OfferList
              text="Expert guidance and support from our experienced specialist"
              status="active"
            />

            <OfferList
              text="Administered by a professional RN"
              status="active"
            />
            <OfferList
              text="Personalized monitoring and adjustments to your program"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Professional Dental Whitening"
            detailPage="/services/dental-whitening/"
            // price={`${formatCurrency(100)} per Treatment`}
            price="$75"
            subtitle="Unveil Your Radiant Smile"
            image={"/images/services/whitening.png"}
          >
            <OfferList
              text="Utilization of advanced technology and proven techniques"
              status="active"
            />
            <OfferList
              text="Solutions targeting stubborn stains, discoloration, and overall enhancement of dental aesthetics for a radiant, lasting impression"
              status="active"
            />
            <OfferList
              text="Revitalizes your smile, boosts self-confidence, and leaves you with a luminous and captivating appearance."
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
