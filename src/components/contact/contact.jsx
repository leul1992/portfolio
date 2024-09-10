"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { sendEmail } from "@/utils/send-email";
import { formSchema } from "@/lib/form-schema";
import { cn } from "@/utils/helper-codes";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values) => {
    const { data, error } = await sendEmail({
      email: values.email,
      subject: values.subject,
      message: values.message,
      twitter: values.twitter || null,
      linkedin: values.linkedin || null,
    });

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data);
    setEmailSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-0 flex flex-col items-center gap-10"
    >
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-0 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary-900 to-transparent rounded-full blur-lg opacity-70"
      />

      {/* Contact Form */}
      <div className="relative w-full md:w-1/2 z-10">
        {emailSubmitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-lg"
          >
            Email sent successfully! Thank you for Contacting me I&apos;ll get back to you ASAP.
          </motion.p>
        ) : (
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-semibold text-[#c72c6c] dark:text-[#07d0e5]"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                required
                className={cn(
                  "w-full p-2 bg-[#18191E] border border-[#33353F] rounded-lg placeholder-[#9CA2A9] text-gray-100 text-sm",
                  errors.email?.message && "border-red-500"
                )}
                placeholder="example@domain.com"
              />
              {errors.email?.message && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-1 text-sm font-semibold text-[#c72c6c] dark:text-[#07d0e5]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject")}
                required
                className={cn(
                  "w-full p-2 bg-[#18191E] border border-[#33353F] rounded-lg placeholder-[#9CA2A9] text-gray-100 text-sm",
                  errors.subject?.message && "border-red-500"
                )}
                placeholder="Subject"
              />
              {errors.subject?.message && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="twitter"
                className="block mb-1 text-sm font-semibold text-[#c72c6c] dark:text-[#07d0e5]"
              >
                Twitter (optional)
              </label>
              <input
                type="text"
                id="twitter"
                {...register("twitter")}
                className="w-full p-2 bg-[#18191E] border border-[#33353F] rounded-lg placeholder-[#9CA2A9] text-gray-100 text-sm"
                placeholder="https://twitter.com/username"
              />
            </div>

            <div>
              <label
                htmlFor="linkedin"
                className="block mb-1 text-sm font-semibold text-[#c72c6c] dark:text-[#07d0e5]"
              >
                LinkedIn (optional)
              </label>
              <input
                type="text"
                id="linkedin"
                {...register("linkedin")}
                className="w-full p-2 bg-[#18191E] border border-[#33353F] rounded-lg placeholder-[#9CA2A9] text-gray-100 text-sm"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-semibold text-[#c72c6c] dark:text-[#07d0e5]"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                required
                rows={4}
                className={cn(
                  "w-full p-2 bg-[#18191E] border border-[#33353F] rounded-lg placeholder-[#9CA2A9] text-gray-100 text-sm",
                  errors.message?.message && "border-red-500"
                )}
                placeholder="Your message and include your contact information. 🙏🏽"
              ></textarea>
              {errors.message?.message && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="py-2 bg-[#c72c6c] w-44 dark:bg-[#07d0e5] text-white font-medium rounded-lg hover:bg-[#b1225f] dark:hover:bg-[#06b2c4] transition-all"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
