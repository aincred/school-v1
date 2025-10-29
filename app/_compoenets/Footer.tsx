import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10 mt-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* School Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* Replace with actual logo */}
            <div className="relative w-12 h-12 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
              <span className="text-lg font-semibold text-white">N</span>
            </div>
            <h3 className="font-semibold text-lg">NR District CM SoE Seraikella</h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            NR District CM SoE Seraikella is managed by the Department of Education. It is located in SERAIKELLA block of SARAIKELA KHARSAWAN district of Jharkhand.
          </p>

          <div className="mt-4 space-y-1 text-sm">
            <p>📞 +91-6203063079</p>
            <a href="mailto:info@nrcmsoeseraikella.com" className="hover:underline text-indigo-300 hover:text-indigo-200">
              ✉️ info@nrcmsoeseraikella.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              "About School",
              "Faqs",
              "Contact Us",
              "Alumni",
              "Awards & Recognition",
              "Terms And Conditions",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-indigo-300 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Academics</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Fee Structure",
              "School Events",
              "Latest Notices",
              "Press Release",
              "Admission Process",
              "Academic Curriculum",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-sky-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Campus Info */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Our Campus</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Infrastructure",
              "Health Care",
              "Faculty & Staff",
              "Principal's Desk",
              "Mandatory Disclosure",
              "Management Committee",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-sky-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <h5 className="font-medium text-sm mb-2">Follow Us On</h5>
            <div className="flex gap-3">
              {/* Replace # with actual links */}
              <Link href="#" className="hover:text-indigo-300">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#" className="hover:text-indigo-300">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="hover:text-indigo-300">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="hover:text-indigo-300">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
        <p>
          Copyright © 2025 <span className="text-slate-300">NR District CM SoE Seraikella</span>, Developed by
          <Link href="https://bluerix.com" target="_blank" className="text-indigo-300 hover:underline ml-1">
            Bluerix (OPC) Pvt. Ltd.
          </Link>
        </p>
      </div>
    </footer>
  );
}
