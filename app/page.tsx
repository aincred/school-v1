"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const notices = [
  { id: 1, title: "ADMISSION 2025", date: "2025-07-21", img: "/notices.jpg" },
  { id: 2, title: "ADMISSION 2025", date: "2025-07-21", img: "/notices.jpg" },
  { id: 3, title: "ADMISSION 2025", date: "2025-07-21", img: "/notices.jpg" },
];

const facilities = [
  { id: 1, title: "Furnished Classrooms", desc: "Spacious, well-furnished classrooms providing a comfortable learning environment.", icon: "/table.png" },
  { id: 2, title: "School Libraries", desc: "A wide range of books and journals for intellectual growth and curiosity.", icon: "/science.png" },
  { id: 3, title: "Visual Learning", desc: "Smart classes and AV-based education to make learning engaging.", icon: "/business-intelligence.png" },
];

const gallery = ["/OMS_0396-e1555931460205.jpg", "/hero.jpg", "/heroimage.jpg"];
const events = ["/events.jpg", "/events.jpg", "/events.jpg"];

export default function SchoolHomepage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-sky-50 text-slate-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="School Hero Background"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />

        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full text-center sm:text-left px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto sm:mx-0"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-xl">
              St. Mary&apos;s Higher Secondary School
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 drop-shadow-lg">
              Excellence in Education Since 1985 — Nurturing Young Minds, Inspiring Futures.
            </p>
            <div className="mt-6 flex gap-4 justify-center sm:justify-start">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg">
                  Admissions
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-sky-700">
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Decorative Wave */}
        <motion.svg
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 left-0 w-full h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,120 C360,0 1080,0 1440,120 L1440,00 L0,0 Z" fill="#fff" />
        </motion.svg>
      </section>

      {/* LATEST NOTICE */}
      <section className="py-16 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-indigo-700 mb-10"
        >
          Latest Notice
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {notices.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="hover:-translate-y-1 transition-transform duration-300"
            >
              <Card className="shadow-lg hover:shadow-2xl">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image src={n.img} alt={n.title} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-700">{n.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{n.date}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-indigo-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-indigo-700 mb-10"
        >
          Our Facilities
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 container mx-auto px-4">
          {facilities.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="border-t-4 border-indigo-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                      <Image src={f.icon} alt={f.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-indigo-700 text-lg">{f.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="py-16 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Principal&apos;s Message</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to St. Mary&apos;s School — where we inspire young minds to achieve greatness and lead with integrity.
            Our focus lies on holistic development, combining academic excellence with moral and social responsibility.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our dedicated faculty, modern facilities, and innovative teaching methods ensure each student thrives in a
            safe and inclusive environment.
          </p>
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Read More</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image src="/principle.jpg" alt="Principal" width={600} height={400} className="object-cover w-full h-full" />
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-indigo-700 mb-10"
        >
          Photo Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 container mx-auto px-4">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
            >
              <Image src={g} alt={`Gallery ${i + 1}`} width={400} height={300} className="object-cover w-full h-56" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-indigo-700 mb-10"
        >
          Our Events
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 container mx-auto px-4">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="hover:-translate-y-1 transition-transform duration-300"
            >
              <Card className="shadow-lg hover:shadow-2xl">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={e} alt={`Event ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-700">Upcoming Events</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
