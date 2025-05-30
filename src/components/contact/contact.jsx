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
import { Sparkles } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const { data, error } = await sendEmail(values);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success(data);
      setEmailSubmitted(true);
      reset();
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const words = "Let's build something amazing together.";

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10 w-full overflow-hidden"
    >
      {/* Animated Background */}
      <div className="w-full absolute inset-0 h-full">
        <Sparkles />
      </div>

      <div className="relative w-full max-w-4xl mx-auto z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <TextGenerateEffect
            words={words}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
          />
        </div>

        {/* Contact Form */}
        <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          {emailSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 sm:p-8"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Message Sent!
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Thank you for reaching out! I'll get back to you within 24
                hours.
              </p>
              <button
                onClick={() => setEmailSubmitted(false)}
                className="mt-6 py-2 px-6 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-lg hover:opacity-90 transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form
              className="flex flex-col space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={cn(
                      "w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors",
                      errors.email && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="example@domain.com"
                    required
                  />
                  {errors.email?.message && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject")}
                    className={cn(
                      "w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors",
                      errors.subject && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="What's this about?"
                    required
                  />
                  {errors.subject?.message && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label
      htmlFor="twitter"
      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      Twitter (optional)
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
        @
      </div>
      <input
        type="text"
        id="twitter"
        {...register("twitter")}
        className={cn(
          "w-full p-3 pl-8 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors",
          errors.twitter && "border-red-500 focus:ring-red-500"
        )}
        placeholder="username"
      />
    </div>
    {errors.twitter?.message && (
      <p className="mt-1 text-sm text-red-500 dark:text-red-400">
        {errors.twitter.message}
      </p>
    )}
  </div>

  <div>
    <label
      htmlFor="linkedin"
      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      LinkedIn (optional)
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
        linkedin.com/in/
      </div>
      <input
        type="text"
        id="linkedin"
        {...register("linkedin")}
        className={cn(
          "w-full p-3 pl-28 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors",
          errors.linkedin && "border-red-500 focus:ring-red-500"
        )}
        placeholder="username"
      />
    </div>
    {errors.linkedin?.message && (
      <p className="mt-1 text-sm text-red-500 dark:text-red-400">
        {errors.linkedin.message}
      </p>
    )}
  </div>
</div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={cn(
                    "w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors",
                    errors.message && "border-red-500 focus:ring-red-500"
                  )}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
                {errors.message?.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden py-3 px-8 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-lg hover:opacity-90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
