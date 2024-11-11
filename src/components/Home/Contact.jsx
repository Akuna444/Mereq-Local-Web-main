"use client";
import { useState } from "react";
import Reveal from "../UI/Animations/Reveal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="section-padding">
      <div className="w-full md:px-20 flex flex-col">
        <Reveal>
          <h2 className="dark:text-secondary text-center md:text-left text-primary mb-5 font-bold">
            Get free Marketing Consultation
          </h2>
        </Reveal>

        <h4 className="dark:text-white md:text-left text-center  text-black w-full md:w-[60%]">
          <Reveal>
            {" "}
            Fill out the following form and we will contact you soon
          </Reveal>
        </h4>

        <form className="flex flex-col w-full items-center md:items-start md:w-[75%]  gap-2">
          <div className="flex flex-col w-full">
            <label className="text-left my-2 text-primary dark:text-tertiary">
              <h6>Name</h6>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="contact-input"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-left my-2 text-primary dark:text-tertiary">
              <h6>Phone Number</h6>
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="contact-input"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-left my-2 text-primary dark:text-tertiary">
              <h6>Email</h6>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="contact-input"
            />
          </div>
          <div className="flex md:justify-start justify-center my-8 text-white w-full ">
            <Reveal>
              <button
                type="submit"
                className="dark:bg-[#146154]   bg-secondary bg-opacity-70 dark:bg-opacity-100 hover:dark:bg-[#146154]/80 hover:bg-secondary/80 shadow-glow border-gray-300 border-2 rounded-[20px]  w-fit  md:py-3 px-5 py-1 md:px-10"
              >
                <h6 className="font-semibold md:text-xl text-lg">Request</h6>
              </button>
            </Reveal>
          </div>
          <div className="dark:text-white text-center md:text-left w-full text-primary">
            <Reveal>
              <p>We will use your information to contact you</p>
            </Reveal>
            <Reveal>
              <p>
                Read more about how we use private data in <br />
                <a href="#" className="text-tertiary">
                  Privacy and Policy
                </a>
              </p>{" "}
            </Reveal>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
