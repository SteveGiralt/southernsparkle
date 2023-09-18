import AfterCareInstructions from "@/components/Services/AfterCareInstructions";

const IVAfterCareInstructions = (props) => {
  const steps = [
    {
      title: "Immediate Post-IV Therapy (During and Right After)",
      stages: [
        "Stay Hydrated: Continue to drink water throughout the IV therapy session to help flush out toxins and support hydration.",
        "Monitor for Reactions: Pay attention to any adverse reactions during the IV therapy, such as allergic responses, pain at the injection site, or dizziness. Inform the healthcare provider immediately if you experience any concerning symptoms.",
        "Rest: After the IV therapy session, take some time to relax and rest. Avoid strenuous activities for at least a few hours.",
      ],
    },
    {
      title: "1-24 Hours After IV Therapy",
      stages: [
        "Stay Hydrated: Continue to drink water and stay well-hydrated after the session to maximize the benefits of IV therapy.",
        "Monitor for Effects: Pay attention to how you feel and any changes in your symptoms or energy levels. IV therapy effects can vary from person to person.",
        "Resume Normal Activities: You can generally resume your normal activities, including work and exercise, unless otherwise advised by your healthcare provider.",
      ],
    },
    {
      title: "Long-Term After IV Therapy (Beyond 24 Hours)",
      stages: [
        "Follow Up: If you were receiving IV therapy for a specific medical condition or health goal, follow up with your healthcare provider as recommended to assess the treatment's effectiveness.",
        "Maintain Hydration: Continue to prioritize hydration by drinking an adequate amount of water daily.",
        "Diet and Lifestyle: Consider maintaining a balanced diet and a healthy lifestyle to support your overall well-being.",
        "Contact Your Provider: If you experience any unexpected or concerning symptoms after IV therapy, contact your healthcare provider for guidance and evaluation.",
      ],
    },
  ];
  return (
    <AfterCareInstructions
      title="After Care for IV Therapy"
      paragraph="After receiving IV vitamin supplementation, commonly known as a Myers' Cocktail, it's crucial to follow specific aftercare instructions to optimize the benefits of the treatment and ensure your well-being. These guidelines are tailored to support your post-treatment recovery and enhance the absorption of essential vitamins and minerals. Organized by timeframes, from immediate post-treatment care to long-term considerations, these instructions will help you navigate your journey towards improved health and vitality."
      steps={steps}
    />
  );
};

export default IVAfterCareInstructions;
