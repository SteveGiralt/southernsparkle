"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import React from "react";

const Contact = () => {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp dark:bg-dark mb-12 rounded-md bg-white/[10%] px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              {!sent ? (
                <>
                  <h2 className="dark:text-white mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                    Ready To Begin?
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                    I would love to hear from you!
                  </p>
                  <ContactForm onSent={(result) => setSent(true)}>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="dark:text-white mb-3 block text-sm font-medium text-dark"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            className="dark:bg-[#242B51] dark:shadow-signUp w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="dark:text-white mb-3 block text-sm font-medium text-dark"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="dark:bg-[#242B51] dark:shadow-signUp w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="dark:text-white mb-3 block text-sm font-medium text-dark"
                          >
                            Your Message
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Enter your Message"
                            className="dark:bg-[#242B51] dark:shadow-signUp w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <button className="rounded-md bg-primary bg-opacity-80 px-9 py-4 text-base font-medium text-white shadow-signUp transition duration-300 ease-in-out hover:scale-105 hover:bg-opacity-100 hover:shadow-lg">
                          Send!
                        </button>
                      </div>
                    </div>
                  </ContactForm>
                </>
              ) : (
                <>
                  <h2 className="dark:text-white mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                    Thanks!
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                    I&apos;ll Be In Touch Soon!
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <Image
              src="/images/contact/contact.jpg"
              height={960}
              width={640}
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
