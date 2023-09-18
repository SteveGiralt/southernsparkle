import AfterCareInstructions from "@/components/Services/AfterCareInstructions";

const DermalFillerDetail = (props) => {
  const steps = [
    {
      title: "Immediate Post-Treatment Care (Day of Treatment)",
      stages: [
        "Avoid Touching: Refrain from touching or massaging the treated areas immediately after the procedure, as this can spread the filler and cause uneven results.",
        "Swelling and Bruising: Swelling and bruising are common after dermal filler treatments. You can apply a cold compress (ice pack wrapped in a clean cloth) for 15-20 minutes every hour to help reduce swelling and minimize bruising. Do this for the first 24 hours.",
        "Pain or Discomfort: You may experience some mild discomfort or tenderness at the injection sites. Over-the-counter pain relievers like acetaminophen (Tylenol) can be taken as directed to alleviate any pain.",
      ],
    },
    {
      title: "1-2 Days After Treatment",
      stages: [
        "Sleep with Head Elevated: Use an extra pillow to keep your head elevated while sleeping to minimize swelling.",
        "Avoid Strenuous Exercise: Refrain from strenuous exercise, alcohol consumption, and hot baths or saunas for 24-48 hours after the procedure, as they can exacerbate swelling and bruising.",
      ],
    },
    {
      title: "2-7 Days After Treatment",
      stages: [
        "Sun Protection: Continue to protect your skin from direct sunlight and avoid tanning beds, as UV radiation can worsen swelling and bruising.",
        "Apply Sunscreen: Apply sunscreen with SPF 30 or higher when going outside. Wear a wide-brimmed hat and sunglasses for added protection.",
        "Skincare and Makeup: Resume your regular skincare routine, but avoid applying too much pressure or rubbing the treated area. Discontinue any products that cause unusual redness, itching, or irritation.",
      ],
    },
    {
      title: "Long-Term Care (Beyond 7 Days)",
      stages: [
        "Maintain Balanced Diet: Continue to maintain a balanced diet rich in fruits and vegetables to support the healing process.",
        "Stay Hydrated: Drink plenty of water to stay well-hydrated, as adequate hydration is essential for the healing process.",
        "Follow Practitioner's Instructions: Follow any specific post-treatment instructions provided by your practitioner, including when to schedule follow-up appointments or additional treatments.",
        "Be Vigilant for Complications: Watch for any signs of complications, such as infection (increased redness, warmth, or pus), severe pain, or other concerning symptoms. Contact your practitioner immediately if you notice any of these.",
        "Discuss Maintenance: Talk to your practitioner about when to consider touch-up treatments or additional maintenance to prolong the effects of your dermal fillers.",
      ],
    },
  ];

  return (
    <AfterCareInstructions
      //   image="/images/services/filler-detail.jpg"
      //   imageDimensions={{ height: 640, width: 427 }}
      title="After Care for Dermal Fillers"
      paragraph="Congratulations on your dermal filler treatment at Southern Sparkle Aesthetics! We want to ensure that you have a safe and successful recovery. Please follow these aftercare instructions to optimize your results and minimize any potential side effects."
      steps={steps}
    />
  );
};

export default DermalFillerDetail;
