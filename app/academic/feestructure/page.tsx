"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
      {/* 🌈 Hero Section */}
      <section className="relative bg-linear-to-r  from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/school-campus.jpg"
            alt="Fee Structure"
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
            Our Fee Structure
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg opacity-90"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent and affordable fee structure for all categories of students.
          </motion.p>
        </div>
      </section>

      {/* 💰 Fee Details Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Development Fund */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold text-indigo-700 mb-6">
                  Development Fund
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-indigo-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold border">
                          Category
                        </th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold border">
                          General / BC
                        </th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold border">
                          SC / ST / BCT
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 px-4 border font-medium">Entry</td>
                        <td className="py-3 px-4 border">Rs. 5.00</td>
                        <td className="py-3 px-4 border">Rs. 5.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border font-medium">
                          Absence Fee
                        </td>
                        <td className="py-3 px-4 border">Rs. 0.10 (Per Day)</td>
                        <td className="py-3 px-4 border">Rs. 0.10 (Per Day)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border font-medium">
                          Development Fee
                        </td>
                        <td className="py-3 px-4 border">Rs. 100.00</td>
                        <td className="py-3 px-4 border">Rs. 50.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Student Fund */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold text-indigo-700 mb-6">
                  Student Fund
                </h2>

                <p className="text-gray-600 mb-4">
                  Applicable to all categories (General / BCI / BCII / SC / ST)
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-indigo-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold border">
                          Fee Type
                        </th>
                        <th className="py-3 px-4 text-left text-gray-700 font-semibold border">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 px-4 border font-medium">
                          Sport Fee
                        </td>
                        <td className="py-3 px-4 border">Rs. 2.50</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border font-medium">
                          Poor Fee
                        </td>
                        <td className="py-3 px-4 border">Rs. 0.50</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border font-medium">
                          Entertainment Fee
                        </td>
                        <td className="py-3 px-4 border">Rs. 4.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border font-medium">
                          Examination Fee
                        </td>
                        <td className="py-3 px-4 border">Rs. 30.00</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border font-medium">Science</td>
                        <td className="py-3 px-4 border">Rs. 2.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border font-medium">
                          Electricity
                        </td>
                        <td className="py-3 px-4 border">Rs. 2.50</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border font-medium">Culture</td>
                        <td className="py-3 px-4 border">Rs. 2.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border font-medium">Other</td>
                        <td className="py-3 px-4 border">Rs. 50.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
