"use client";

const ContactForm = (props: {
  children: React.ReactNode;
  onSent: (result: any) => void;
}) => {
  const { onSent, children } = props;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "faf52ab1-671e-46c5-b455-2c414a767de6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      onSent(result);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default ContactForm;
