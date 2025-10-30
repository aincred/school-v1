"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutAcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
      {/* 🌈 Hero Section */}
      <section className="relative bg-linear-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/school-campus.jpg" // Replace with your hero image
            alt="About Academics"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Academics
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto text-lg opacity-90"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Excellence in education through leadership, creativity, and teamwork.
          </motion.p>
        </div>
      </section>

      {/* 📚 Academics Content Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Academics Overview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
                  Academics Details
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At NR District CM School of Excellence, Seraikella, we believe
                  education goes beyond textbooks. Our academic program fosters
                  critical thinking, creativity, and curiosity among students.
                  The curriculum is designed to balance intellectual, emotional,
                  and physical development, ensuring that each child achieves
                  their full potential.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* School Club Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
                  School Club
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A school club is a group of students who come together to
                  pursue a common interest or goal. Joining a school club offers
                  students the opportunity to build friendships, develop
                  leadership qualities, and learn new skills outside the
                  classroom. Participation in clubs not only enhances a
                  student’s overall personality but also strengthens their
                  college applications and prepares them for future careers.
                </p>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  There are a variety of school clubs available — from art and
                  music to science, literature, and community service — each
                  designed to nurture different talents and passions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Four Houses Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
                  There are Four Houses in the School
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At our school, we aim to nurture future leaders. Through our
                  house system, students learn teamwork, discipline, and
                  leadership. Each house promotes a healthy sense of competition
                  in academics, sports, and cultural activities, motivating
                  students to bring out their best.
                </p>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  Our Principal, an award-winning leader, serves as an inspiring
                  role model, guiding both teachers and students toward
                  excellence. We believe that every student has the potential to
                  lead — with hard work, integrity, and determination.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
