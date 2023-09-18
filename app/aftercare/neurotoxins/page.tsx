import AfterCareInstructions from "@/components/Services/AfterCareInstructions";

const NeurotoxinAfterCareInstructions = (props) => {
  const steps = [
    {
      title: "Immediate Post-Neurotoxin Injection (Day of Treatment)",
      stages: [
        "Avoid Touching: Refrain from touching or massaging the treated areas immediately after the injection to prevent the neurotoxin from spreading.",
        "Stay Upright: Remain in an upright position for at least 4 hours after the injection. Avoid lying down or bending over.",
        "Minimize Physical Activity: Avoid strenuous exercise and activities that increase blood flow to the face for the rest of the day.",
      ],
    },
    {
      title: "1-7 Days After Neurotoxin Injection",
      stages: [
        "Be Patient: It may take several days (usually 2-7 days) for the neurotoxin to take full effect. Results are not immediate.",
        "Avoid Alcohol and Blood Thinners: Refrain from consuming alcohol and medications or supplements that can thin your blood for a few days after the injection to reduce the risk of bruising.",
        "Use Sunscreen: Protect your skin from direct sunlight and use sunscreen with SPF 30 or higher when going outside.",
      ],
    },
    {
      title: "Long-Term After Neurotoxin Injection (Beyond 7 Days)",
      stages: [
        "Maintain Expression: Do not overly restrict facial expressions. It's normal to have some movement, and excessive restriction can lead to an unnatural appearance.",
        "Follow Up: Attend any scheduled follow-up appointments with your practitioner to assess the results and discuss any concerns.",
        "Additional Injections: Discuss with your practitioner when to consider follow-up neurotoxin injections to maintain the desired effect.",
        "Skin Care: Continue with your regular skincare routine, and avoid harsh chemical peels or laser treatments in the treated areas without consulting your practitioner.",
        "Report Any Issues: If you experience unusual side effects, complications, or concerns, contact your healthcare provider promptly.",
      ],
    },
  ];
  return (
    <AfterCareInstructions
      title="After Care for Neurotoxin Services"
      paragraph="After undergoing neurotoxin injections, it's crucial to follow specific aftercare instructions to optimize your results and ensure a safe, comfortable recovery. These guidelines will help you navigate the days and weeks following your treatment, promoting both the longevity of the effects and your overall well-being. Neurotoxin injections, like Botox, require special attention to ensure the best possible outcome while minimizing potential side effects. By adhering to these aftercare instructions, you can enjoy a smoother, more youthful appearance with confidence and peace of mind."
      steps={steps}
    />
  );
};

export default NeurotoxinAfterCareInstructions;
