"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function AboutSchool() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/school-campus.jpg" // 🔁 replace with your hero image path
            alt="School Campus"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Welcome to the NR District CM School of Excellence, Seraikella
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Managed by the Department of Education, located in SERAIKELLA block of SARAIKELA KHARSAWAN district of Jharkhand.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-4">
            About Our School
          </h2>
          <Separator className="mb-6" />
          <p className="text-gray-700 leading-relaxed text-justify">
            NR District CM SoE Seraikella is an institution dedicated to providing quality education
            to nurture intellectual, emotional, and moral growth in students. The school is
            administered by the <strong>Department of Education</strong> and serves as a model of
            academic excellence within the <strong>SARAIKELA KHARSAWAN district of Jharkhand</strong>.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-justify">
            We focus on developing a learning environment where students can explore, innovate, and
            realize their true potential. Our dedicated staff and state of the art infrastructure
            aim to shape responsible and skilled citizens for tomorrow’s world.
          </p>
        </motion.div>
      </section>

      {/* Vision and Mission Section */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Vision */}
          <div className="bg-white shadow-md rounded-2xl p-8 border-l-4 border-indigo-600">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Vision</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              To create a learning environment that encourages curiosity, creativity, and character
              building. Our vision is to empower students with knowledge, skills, and values that
              enable them to contribute meaningfully to society.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white shadow-md rounded-2xl p-8 border-l-4 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">Mission</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              The mission of NR District CM SoE Seraikella is to deliver holistic education focused
              on academic excellence, discipline, and moral values. We strive to cultivate critical
              thinking, leadership, and a sense of responsibility in every learner.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mt-20 px-6 text-center"
      >
        <blockquote className="text-2xl italic text-gray-800">
          “Without vision and mission, people perish — and so do schools.”
        </blockquote>
        <p className="text-indigo-600 mt-4 font-semibold">— NR District CM SoE Seraikella</p>
      </motion.section>
    </div>
  );
}
