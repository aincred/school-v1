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

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
      {/* 🌟 Hero Section */}
      <section className="relative bg-linear-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="/faculty-hero.jpg" // 🔁 Replace with your background image
            alt="Faculty Background"
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
            Our Faculty & Staff
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
          >
            “Dedicated educators inspiring young minds toward excellence.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-sm text-gray-200"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            / <span className="font-medium text-indigo-200">Our Faculty & Staff</span>
          </motion.div>
        </div>
      </section>

      {/* 👩‍🏫 Faculty Section */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-4 text-center">
            Meet Our Dedicated Team
          </h2>
          <Separator className="mb-10 max-w-sm mx-auto" />
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Our teachers are the heart of our institution — passionate, experienced, and committed
            to nurturing every student’s potential.
          </p>

          {/* 👥 Faculty Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-md hover:shadow-indigo-300 hover:-translate-y-1 transition-all duration-300 rounded-2xl border border-indigo-100 overflow-hidden bg-white">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <motion.div
                      className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-indigo-200 shadow-inner bg-gray-50"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={144}
                        height={144}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/faculty/placeholder.png";
                        }}
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 text-sm mt-1">
                      {member.subject}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 🌈 Closing Quote */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mt-20 px-6 text-center"
      >
        <blockquote className="text-2xl italic text-gray-800">
          “A great teacher inspires hope, ignites the imagination, and instills a love of learning.”
        </blockquote>
        <p className="text-indigo-600 mt-4 font-semibold">— Brad Henry</p>
      </motion.section>
    </div>
  );
}
