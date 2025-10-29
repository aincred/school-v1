"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function PrincipalDesk() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/principal-hero.jpg" // 🔁 replace with your hero background image
            alt="Principal Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Principal’s Message
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
          >
            “Nurturing young minds to become the leaders of tomorrow.”
          </motion.p>
        </div>
      </section>

      {/* Message Section */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Principal Photo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/principle.jpg" // 🔁 replace with principal photo path
              alt="Principal"
              width={300}
              height={300}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* Message Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-4">
              Welcome to NR +2 High School
            </h2>
            <Separator className="mb-6" />
            <p className="text-gray-700 leading-relaxed text-justify mb-4">
              Welcome to <strong>NR +2 High School</strong>, where we believe in nurturing young
              minds to become the leaders of tomorrow. Our commitment is to provide a supportive and
              enriching environment that fosters academic excellence, personal growth, and social
              responsibility.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify mb-4">
              At NR +2 High School, we emphasize a holistic approach to education. Our dedicated
              faculty and staff work tirelessly to create a learning atmosphere that encourages
              curiosity, critical thinking, and creativity. We offer a robust curriculum that not
              only meets but exceeds educational standards, ensuring our students are well-prepared
              for higher education and beyond.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              We pride ourselves on our diverse and inclusive community, where every student is
              valued and respected. Our extracurricular programs — ranging from sports to arts and
              technology clubs — provide opportunities for students to explore their interests and
              develop new skills. We believe that education extends beyond the classroom, and we are
              committed to helping our students grow into well-rounded individuals.
            </p>

            <div className="mt-8 text-right">
              <p className="text-lg font-semibold text-indigo-700">Principal</p>
              <p className="text-gray-600 italic">NR +2 High School, Seraikella</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Closing Quote */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mt-20 px-6 text-center"
      >
        <blockquote className="text-2xl italic text-gray-800">
          “Education is not the learning of facts, but the training of the mind to think.”
        </blockquote>
        <p className="text-indigo-600 mt-4 font-semibold">— Albert Einstein</p>
      </motion.section>
    </div>
  );
}

