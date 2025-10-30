"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const committeeMembers = [
  {
    name: "Mangal Singh Hembrom",
    role: "SMC President",
    image: "/committee/mangal-singh.jpg", // replace with your image path
  },
  {
    name: "Management Committee Meeting",
    role: "",
    image: "/committee/meeting1.jpg", // replace with your image path
  },
  {
    name: "Meeting",
    role: "",
    image: "/committee/meeting2.jpg", // replace with your image path
  },
];

export default function ManagementCommitteePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/school-campus.jpg" // 🔁 Replace with your own background image
            alt="School Management Committee"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Management Committee
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg opacity-90"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The School Management Committee plays a vital role in guiding our vision and ensuring smooth functioning of all academic and administrative operations.
          </motion.p>
        </div>
      </section>

      {/* Committee Members Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold text-indigo-700 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Management Committee Members
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {committeeMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <div className="relative w-full h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    {member.role && (
                      <p className="text-indigo-600 mt-2 font-medium">{member.role}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
