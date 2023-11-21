import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";
import contact_bg from "../../assets/contact/contact_bg.jpg";
import Container from "../../components/container/Container";
import Cover from "../../components/cover/Cover";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Location from "./Location";

const Contact = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onSubmit = (data) => {
    reset();
    toast?.info(`We received your message${data?.name}!`, {
      position: "top-right",
      theme: "colored",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Bistro Boss</title>
      </Helmet>
      <Cover
        img={contact_bg}
        title="Contact Us"
        desc="Would you like to try a dish?"
      />
      <div className="py-12">
        <Container>
          <Location />
          <div className="mt-10">
            <SectionTitle
              heading="CONTACT FORM"
              subHeading="Send Us a Message"
            />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="form-control w-full md:flex-1">
                  <label>Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Enter your name"
                    className="outline-0 border p-2 rounded text-sm"
                  />
                  {errors?.name?.type === "required" && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control w-full md:flex-1">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                    className="outline-0 border p-2 rounded text-sm"
                  />
                  {errors?.email?.type === "required" && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
              </div>
              <div className="form-control flex-1">
                <label>Phone Number</label>
                <input
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="Enter your Phone number"
                  className="outline-0 border p-2 rounded text-sm"
                />
                {errors?.phone?.type === "required" && (
                  <span className="text-red-500">Phone number is required</span>
                )}
              </div>
              <div className="form-control flex-1">
                <label>Message</label>
                <textarea
                  type="text"
                  {...register("message", { required: true })}
                  className="outline-0 border p-2 rounded text-sm"
                  placeholder="Write your message"
                  cols="30"
                  rows="10"
                />
                {errors?.message?.type === "required" && (
                  <span className="text-red-500">Message is required</span>
                )}
              </div>
              <div className="form-control flex flex-col md:flex-row md:gap-5">
                <label>
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha"
                  className="w-full outline-0 border p-2 rounded text-sm"
                  required
                />
              </div>
              <div className="form-control flex items-center">
                <input
                  type="submit"
                  value="Submit"
                  disabled={disabled}
                  className="bg-yellow-600 transition-all duration-500 p-2 rounded uppercase text-white font-medium disabled:bg-slate-200"
                />
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
