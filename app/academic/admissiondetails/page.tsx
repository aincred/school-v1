"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AdmissionInformationPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/school-campus.jpg"
            alt="Admission Information"
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
            Admission Information
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg opacity-90"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn about the admission process, eligibility criteria, and important
            requirements for joining our school and hostel programs.
          </motion.p>
        </div>
      </section>

      {/* Admission Details */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* How to Apply */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Detail About How To Apply
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The school offers admissions from Nursery onwards. Children are promoted 
              to KG after completing the academic year. Admissions are also available 
              directly in KG and higher classes. As a girls’ school, only girls are admitted 
              even in the primary section.
            </p>
          </motion.div>

          {/* Primary Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-all rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                  Primary Section
                </h3>
                <p className="text-gray-700 mb-3">
                  Admissions are based on two main criteria:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Age Requirement:</strong> The government-prescribed age
                    criteria are:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Nursery – 3+ (as of 31 March)</li>
                      <li>KG – 4+</li>
                      <li>1st – 5+</li>
                      <li>2nd – 6+</li>
                      <li>3rd – 7+</li>
                      <li>4th – 8+</li>
                      <li>5th – 9+</li>
                    </ul>
                    A higher age is acceptable, but not a lower age.
                  </li>
                  <li>
                    <strong>Evidence of Previous Class:</strong> For Class 2 and above,
                    the following documents are required:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Transfer Certificate (TC) / School Leaving Certificate (SLC)</li>
                      <li>Marksheet of the previous class</li>
                      <li>Aadhar card (with DOB)</li>
                      <li>Bank account details (in student’s name)</li>
                      <li>Income proof</li>
                      <li>Caste certificate (if applicable)</li>
                      <li>Two recent photographs</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </motion.div>

          {/* Secondary Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-all rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                  Secondary School
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Admissions mainly take place in Class 6. They can also be done in Classes 7, 8, 9, and 11. 
                  No admissions are made in Board classes (10th & 12th). For Govt schools, requests must 
                  come online; for aided/public schools, TC and marksheet are sufficient.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Admissions begin from <strong>1st April</strong> (except Class 11, which starts from 
                  <strong> 1st July</strong> after summer vacation and results). Usually, admissions close 
                  on <strong>31st July</strong> but may extend till <strong>31st August</strong>.
                </p>
                <p className="text-gray-700 italic">
                  Please visit the school to obtain the admission form.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Hostel Admissions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-all rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                  Admissions in the Hostel
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The girls’ hostel is mainly for SC and ST students, though general category 
                  students may also be admitted under certain conditions. Hostel admission 
                  is open for Classes 6 and above and follows the same admission timetable 
                  as the school.
                </p>
                <p className="text-gray-700">
                  Please collect the admission form directly from the hostel warden.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
