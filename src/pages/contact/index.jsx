import Curve from "@/components/Curve";
import Header from "@/components/Header";
import MagneticEffect from "@/components/MagneticEffect";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Curve>
      <div>
        <Header home={false} />
        <div className="py-20 min-h-[1180px] md:h-[1180px] w-[95%] md:w-[75%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="flex-[3] h-[100%] w-[100%]">
            <div className="h-[20%] flex flex-col justify-between">
              <h1 className="font-[500] text-[45px] lg:text-[64px] h-[30%] leading-[100%] hidden md:block">
                {"Let's start a project together"}
              </h1>
              <hr />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-[80%] w-[100%]"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-10 py-4">
                  <span className="text-sm font-[500]">01</span>
                  <div className="flex flex-col w-[100%]">
                    <label className="font-[500] text-2xl" htmlFor="name">
                      {"What's your name?"}
                    </label>
                    <input
                      {...register("name", {
                        required: "your name is required",
                      })}
                      type="text"
                      id="name"
                      className="w-[100%] py-6 outline-none"
                      placeholder="John Doe*"
                    />
                    {errors.name && (
                      <span className="text-red-500 capitalize">
                        {errors.name?.message}
                      </span>
                    )}
                  </div>
                </div>
                <hr className="w-[100%]" />
                <div className="flex items-center gap-10 py-4">
                  <span className="text-sm font-[500]">02</span>
                  <div className="flex flex-col w-[100%]">
                    <label className="font-[500] text-2xl" htmlFor="email">
                      {"What's your email?"}
                    </label>
                    <input
                      {...register("email", {
                        required: "your Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-[100%] py-6 outline-none"
                      placeholder="johndoe@mail.com*"
                    />
                    {errors.email && (
                      <span className="text-red-500 capitalize">
                        {errors.email?.message}
                      </span>
                    )}
                  </div>
                </div>
                <hr className="w-[100%]" />
                <div className="flex items-center gap-10 py-4">
                  <span className="text-sm font-[500]">03</span>
                  <div className="flex flex-col w-[100%]">
                    <label className="font-[500] text-2xl" htmlFor="services">
                      {"What services are you looking for?"}
                    </label>
                    <input
                      {...register("service", {
                        required: "What service do you required?",
                      })}
                      type="text"
                      id="services"
                      className="w-[100%] py-6 outline-none"
                      placeholder="Web Design, Web Development..."
                    />
                    {errors.service && (
                      <span className="text-red-500 capitalize">
                        {errors.service?.message}
                      </span>
                    )}
                  </div>
                </div>
                <hr className="w-[100%]" />
                <div className="flex items-center gap-10 py-4">
                  <span className="text-sm font-[500]">04</span>
                  <div className="flex flex-col w-[100%]">
                    <label className="font-[500] text-2xl" htmlFor="message">
                      Your message
                    </label>
                    <textarea
                      {...register("message", {
                        required: "your message?",
                        minLength: {
                          value: 10,
                          message:
                            "Please enter a text of atleast 10 characters",
                        },
                        maxLength: {
                          value: 3000,
                          message:
                            "Please enter a text between 10 and 3000 characters",
                        },
                      })}
                      type="text"
                      id="message"
                      className="w-[100%] py-6 outline-none"
                      placeholder="Hi John, can you help me with..."
                    />
                    {errors.message && (
                      <span className="text-red-500 capitalize">
                        {errors.message?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-fit mx-auto">
                <MagneticEffect>
                  <button
                    type="submit"
                    className="capitalize border border-black rounded-[50%] h-[150px] w-[150px] bg-black text-white text-[18px] transition duration-300 hover:text-black hover:bg-white"
                  >
                    Send it!
                  </button>
                </MagneticEffect>
              </div>
            </form>
          </div>
          <div className="flex-[1] h-[100%] w-[100%] flex flex-col gap-10 md:gap-0">
            <div className="h-[20%] flex items-center gap-4">
              <div className="h-[100px] w-[150px] md:w-[100px] relative">
                <Image
                  src="/pexels-stefan-stefancik-91227.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-[50%]"
                />
              </div>
              <h1 className="font-[500] text-[32px] h-[30%] leading-[100%]  md:hidden">
                {"Let's start a project together"}
              </h1>
            </div>
            <div className="h-[80%] flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-lg capitalize">
                  contact details
                </h2>
                <div className="w-fit">
                  <MagneticEffect>
                    <a href="#" className="underline-effect font-[500]">
                      info@johndoe.com
                    </a>
                  </MagneticEffect>
                </div>
                <div className="w-fit">
                  <MagneticEffect>
                    <a href="#" className="underline-effect font-[500]">
                      +123 456 789
                    </a>
                  </MagneticEffect>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-lg capitalize">
                  Business details
                </h2>
                <span className="font-[500]">VAT: AB123456789A123</span>
                <span className="font-[500]">Location: Wonderland</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-lg capitalize">socials</h2>
                <div className="w-fit">
                  <MagneticEffect>
                    <a href="#" className="underline-effect font-[500]">
                      Twitter
                    </a>
                  </MagneticEffect>
                </div>
                <div className="w-fit">
                  <MagneticEffect>
                    <a href="#" className="underline-effect font-[500]">
                      LinkedIn
                    </a>
                  </MagneticEffect>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Curve>
  );
}

export default Contact;
