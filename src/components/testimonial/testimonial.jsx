"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "@/utils/helpers";
import {
  FaQuoteLeft,
  FaFilePdf,
  FaExternalLinkAlt,
  FaChevronDown,
} from "react-icons/fa";

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeDoc, setActiveDoc] = useState(null);

  const visibleTestimonials = testimonialsData.slice(0, visibleCount);
  const hasMore = visibleCount < testimonialsData.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, testimonialsData.length));
  };

  return (
    <section
      id="testimonials"
      className="py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What colleagues and clients say about my work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="flex-grow">
                <FaQuoteLeft className="text-blue-500 text-2xl opacity-30 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="mt-auto">
                <div className="font-bold text-gray-800 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-blue-500 dark:text-blue-400 mb-4">
                  {testimonial.role}
                </div>

                {testimonial.document && (
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => setActiveDoc(testimonial.document)}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaFilePdf className="text-red-500" />
                      View {testimonial.document.type}
                    </button>
                    <a
                      href={testimonial.document.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Download
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={loadMore}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm transition-all"
          >
            <span>View More Testimonials</span>
            <FaChevronDown className="text-blue-500 animate-bounce" />
          </button>
        </motion.div>
      )}

      {/* Document Viewer Modal */}
      {activeDoc && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveDoc(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              ✕
            </button>

            <div className="h-[80vh] flex flex-col">
              {activeDoc.type === "pdf" ? (
                <iframe
                  src={`${activeDoc.url}#view=fitH`}
                  className="w-full flex-grow border-none"
                  title={`${activeDoc.type} document`}
                />
              ) : (
                <img
                  src={activeDoc.preview}
                  alt={`${activeDoc.type} preview`}
                  className="w-full h-full object-contain"
                />
              )}

              <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {activeDoc.type === "pdf"
                    ? "Certificate of Achievement"
                    : "Recommendation Letter"}
                </span>
                <a
                  href={activeDoc.url}
                  download
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <FaFilePdf />
                  {activeDoc.type === "pdf"
                    ? "Download PDF"
                    : "Download Document"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
