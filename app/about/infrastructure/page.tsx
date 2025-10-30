// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// const infrastructureItems = [
//   {
//     title: "School Building",
//     description:
//       "The school building stands as a beacon of knowledge and inspiration. Its modern architecture seamlessly blends functionality with aesthetics, featuring large windows that flood the interior with natural light and create an inviting learning environment. The facade showcases a harmonious mix of vibrant brickwork and energy-efficient glass panels, symbolizing the institution’s commitment to both tradition and innovation. Classrooms line the hallways, each thoughtfully designed to cater to diverse learning styles. Equipped with the latest educational technology, they offer a platform for interactive and collaborative learning experiences. The library, a treasure trove of knowledge, beckons with its extensive collection of books, e-books, and research materials.",
//     image: "/infrastructure/school-building.jpg", // replace with your image
//   },
//   {
//     title: "Smart Classroom",
//     description:
//       "A smart classroom, also known as a digital classroom, is an innovative learning environment that integrates technology and educational resources to enhance the teaching and learning experience. Equipped with digital tools such as interactive whiteboards, projectors, tablets, and internet connectivity, a smart classroom offers dynamic and engaging lessons. Teachers can access a wealth of online resources, multimedia content, and educational apps to create more interactive and personalized lessons. Students benefit from visual and interactive content that caters to various learning styles, fostering deeper understanding and knowledge retention.",
//     image: "/infrastructure/smart-classroom.jpg",
//   },
//   {
//     title: "School Library",
//     description:
//       "Our library is a haven for students and educators, offering a diverse collection of books, magazines, and digital resources to explore. Whether you are on a quest for academic research or seeking an enchanting story, our library provides a tranquil space for reading, learning, and collaborative study. With comfortable reading nooks, modern technology, and a dedicated staff to assist you, our library is the perfect place to expand your horizons and embark on intellectual adventures.",
//     image: "/infrastructure/library.jpg",
//   },
//   {
//     title: "ICT Lab",
//     description:
//       "The ICT lab empowers students to navigate the digital landscape with confidence. Under the guidance of skilled instructors, students engage in hands-on activities that promote problem-solving, collaboration, and innovation, preparing them for the technology-driven challenges of the modern world. Whether it is mastering software tools, delving into robotics, or exploring the intricacies of web development, the ICT lab is a space where students can discover, create, and excel in the realm of digital possibilities.",
//     image: "/infrastructure/ict-lab.jpg",
//   },
// ];

// export default function InfrastructurePage() {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
//         <div className="absolute inset-0">
//           <Image
//             src="/school-campus.jpg" // 🔁 Replace with your hero image
//             alt="School Infrastructure"
//             fill
//             className="object-cover opacity-30"
//           />
//         </div>
//         <div className="relative z-10 text-center px-4">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Infrastructure
//           </motion.h1>
//           <motion.p
//             className="max-w-2xl mx-auto text-lg opacity-90"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Explore the world-class facilities that create a dynamic learning environment at NR District CM School of Excellence, Seraikella.
//           </motion.p>
//         </div>
//       </section>

//       {/* Infrastructure Cards */}
//       <section className="py-16 px-6 md:px-20 bg-white">
//         <div className="max-w-6xl mx-auto space-y-20">
//           {infrastructureItems.map((item, index) => (
//             <motion.div
//               key={index}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               } items-center gap-10`}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <Card className="md:w-1/2 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
//                 <CardContent className="p-6">
//                   <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
//                     {item.title}
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed">
//                     {item.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const infrastructureItems = [
  {
    title: "School Building",
    description:
      "The school building stands as a beacon of knowledge and inspiration. Its modern architecture seamlessly blends functionality with aesthetics, featuring large windows that flood the interior with natural light and create an inviting learning environment. The facade showcases a harmonious mix of vibrant brickwork and energy-efficient glass panels, symbolizing the institution’s commitment to both tradition and innovation. Classrooms line the hallways, each thoughtfully designed to cater to diverse learning styles. Equipped with the latest educational technology, they offer a platform for interactive and collaborative learning experiences. The library, a treasure trove of knowledge, beckons with its extensive collection of books, e-books, and research materials.",
    image: "/infrastructure/school-building.jpg",
  },
  {
    title: "Smart Classroom",
    description:
      "A smart classroom, also known as a digital classroom, is an innovative learning environment that integrates technology and educational resources to enhance the teaching and learning experience. Equipped with digital tools such as interactive whiteboards, projectors, tablets, and internet connectivity, a smart classroom offers dynamic and engaging lessons. Teachers can access a wealth of online resources, multimedia content, and educational apps to create more interactive and personalized lessons. Students benefit from visual and interactive content that caters to various learning styles, fostering deeper understanding and knowledge retention.",
    image: "/infrastructure/smart-classroom.jpg",
  },
  {
    title: "School Library",
    description:
      "Our library is a haven for students and educators, offering a diverse collection of books, magazines, and digital resources to explore. Whether you are on a quest for academic research or seeking an enchanting story, our library provides a tranquil space for reading, learning, and collaborative study. With comfortable reading nooks, modern technology, and a dedicated staff to assist you, our library is the perfect place to expand your horizons and embark on intellectual adventures.",
    image: "/infrastructure/library.jpg",
  },
  {
    title: "ICT Lab",
    description:
      "The ICT lab empowers students to navigate the digital landscape with confidence. Under the guidance of skilled instructors, students engage in hands-on activities that promote problem-solving, collaboration, and innovation, preparing them for the technology-driven challenges of the modern world. Whether it is mastering software tools, delving into robotics, or exploring the intricacies of web development, the ICT lab is a space where students can discover, create, and excel in the realm of digital possibilities.",
    image: "/infrastructure/ict-lab.jpg",
  },
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-24 pb-16">
      {/* 🌟 Hero Section (unchanged) */}
      <section className="relative bg-linear-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/school-campus.jpg"
            alt="School Infrastructure"
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
            Our Infrastructure
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg opacity-90"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the world-class facilities that create a dynamic learning
            environment at NR District CM School of Excellence, Seraikella.
          </motion.p>
        </div>
      </section>

      {/* 🏫 Infrastructure Cards with Animation */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {infrastructureItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* 🖼️ Image with Hover Motion */}
              <motion.div
                className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* 💬 Card Animation */}
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <motion.h2
                      className="text-2xl font-semibold text-indigo-700 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      className="text-gray-700 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {item.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
