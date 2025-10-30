"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const facultyMembers = [
  {
    name: "Kamlesh Kumar Prajapati",
    subject: "History & Civics",
    image: "/faculty/kamlesh.jpg",
  },
  {
    name: "Pinki Kumari",
    subject: "PGT - Biology",
    image: "/faculty/pinki.jpg",
  },
  {
    name: "Manoj Kumar Sinha",
    subject: "TGT - Biology",
    image: "/faculty/manoj.jpg",
  },
  {
    name: "Arjun Mahato",
    subject: "Physical Teacher",
    image: "/faculty/arjun.jpg",
  },
  {
    name: "Sweta Mahato",
    subject: "Geography - TGT",
    image: "/faculty/sweta.jpg",
  },
  {
    name: "Pramod Kumar Raut",
    subject: "English - TGT",
    image: "/faculty/pramod.jpg",
  },
];

const awards = [
  {
    title: "National Excellence Award",
    image: "/awards/award1.jpg",
    desc: "Recognized for outstanding contribution to quality education.",
  },
  {
    title: "State Innovation in Teaching Award",
    image: "/awards/award2.jpg",
    desc: "Honored for innovative teaching methodologies and student engagement.",
  },
  {
    title: "Academic Leadership Trophy",
    image: "/awards/award3.jpg",
    desc: "Awarded for consistent academic performance and leadership excellence.",
  },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50 text-gray-800">
      {/* 🌟 Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/faculty-hero.jpg"
            alt="Faculty Background"
            fill
            className="object-cover brightness-75"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-28 px-6 bg-black/40 backdrop-blur-sm">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Faculty & Staff
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            Dedicated educators inspiring young minds toward excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-sm text-gray-300"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            /{" "}
            <span className="font-medium text-indigo-200">
             Our Awards & Recognition
            </span>
          </motion.div>
        </div>
      </section>

      

      {/* 🏆 Awards Section */}
      <section className="max-w-7xl mx-auto px-6 mt-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-indigo-700 mb-4"
        >
          Our Awards & Recognition
        </motion.h2>
        <Separator className="mb-10 max-w-xs mx-auto bg-indigo-200" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-md hover:shadow-indigo-200 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full h-56">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{award.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌈 Closing Quote */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mt-24 px-6 text-center"
      >
        <blockquote className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed">
          “A great teacher inspires hope, ignites the imagination, and instills a love of learning.”
        </blockquote>
        <p className="text-indigo-600 mt-4 font-semibold text-lg">— Brad Henry</p>
      </motion.section>
    </div>
  );
}
