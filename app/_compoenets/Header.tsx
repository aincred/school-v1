"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAcademicOpen, setMobileAcademicOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const [mobileNoticesOpen, setMobileNoticesOpen] = useState(false);

  const aboutLinks = [
    { href: "/about/about-school", label: "About School" },
    { href: "/about/principaldesk", label: "Principal's Desk" },
    { href: "/about/facultystaff", label: "Faculty & Staff" },
    { href: "/about/awards", label: "Awards & Recognition" },
    { href: "/about/management", label: "Management Committee" },
    { href: "/about/infrastructure", label: "Infrastructure" },
  ];

  // 🎓 Academic links (with Admission Details + Fee Structure added)
  const academicLinks = [
    
    { href: "/academic/admission-details", label: "Admission Details" },
    { href: "/academic/fee-structure", label: "Fee Structure" },
    { href: "/academic/academicsdetails", label: "Academics Details" },
    { href: "/academic/academics-curriculum", label: "Academics Curriculum" },
    { href: "/academic/faq", label: "FAQ" },
    { href: "/academic/alumni", label: "Alumni" },
    { href: "/academic/health-care", label: "Health Care" },
    { href: "/academic/terms-conditions", label: "Terms And Conditions" },
  ];

  const galleryLinks = [
    { href: "/our-gallery", label: "Our Gallery" },
    { href: "/library", label: "Library" },
    { href: "/smart-class", label: "Smart Class" },
    { href: "/itc", label: "ITC" },
    { href: "/campus", label: "Campus" },
    { href: "/classroom", label: "Classroom" },
    { href: "/video-gallery", label: "Video Gallery" },
  ];

  const noticesLinks = [
    { href: "/our-notices", label: "Our Notices" },
    { href: "/our-events", label: "Our Events" },
    { href: "/press-release", label: "Press Release" },
  ];

  const mainLinks = [
    { href: "/mandatory-disclosure", label: "Mandatory Disclosure" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
      {/* 🔹 Top Info Bar */}
      <div className="bg-blue-400 text-gray-700 text-sm px-7 sm:px-6 lg:px-8 flex justify-between items-center h-10">
        <div>
          <span>Email: </span>
          <a
            href="mailto:info@nrcmsoeseraikella.com"
            className="hover:text-red-600"
          >
            info@nrcmsoeseraikella.com
          </a>
        </div>
        <div className="space-x-4 hidden sm:flex">
          <Link href="#" className="hover:text-red-600">
            Faculty & Staff
          </Link>
          <Link href="#" className="hover:text-red-600">
            Students
          </Link>
          <Link href="#" className="hover:text-red-600">
            Alumni
          </Link>
          <Link href="#" className="hover:text-red-600">
            Admin
          </Link>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="font-medium text-gray-800 hover:text-red-600 transition"
            >
              Home
            </Link>

            {/* About Us */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-gray-800 hover:text-red-600 transition flex items-center gap-1"
                >
                  About Us <ChevronDown className="w-4 h-4 mt-1px" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 shadow-lg animate-in fade-in-50 slide-in-from-top-1">
                {aboutLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Academic */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-gray-800 hover:text-red-600 transition flex items-center gap-1"
                >
                  Academic <ChevronDown className="w-4 h-4 mt-1px" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 shadow-lg animate-in fade-in-50 slide-in-from-top-1">
                {academicLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Gallery */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-gray-800 hover:text-red-600 transition flex items-center gap-1"
                >
                  Gallery <ChevronDown className="w-4 h-4 mt-1px" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 shadow-lg animate-in fade-in-50 slide-in-from-top-1">
                {galleryLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notices */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-gray-800 hover:text-red-600 transition flex items-center gap-1"
                >
                  Notices <ChevronDown className="w-4 h-4 mt-1px" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 shadow-lg animate-in fade-in-50 slide-in-from-top-1">
                {noticesLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-gray-800 hover:text-red-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 📱 Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-4">
                <div className="flex flex-col space-y-2">
                  <Link href="/" className="px-2 py-2 rounded hover:bg-gray-100">
                    Home
                  </Link>

                  {/* Mobile About */}
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center px-2 py-2"
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  >
                    About Us{" "}
                    <ChevronDown
                      className={`transition-transform ${
                        mobileAboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                  {mobileAboutOpen && (
                    <div className="pl-4 flex flex-col space-y-1">
                      {aboutLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Academic */}
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center px-2 py-2"
                    onClick={() => setMobileAcademicOpen(!mobileAcademicOpen)}
                  >
                    Academic{" "}
                    <ChevronDown
                      className={`transition-transform ${
                        mobileAcademicOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                  {mobileAcademicOpen && (
                    <div className="pl-4 flex flex-col space-y-1">
                      {academicLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Gallery */}
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center px-2 py-2"
                    onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
                  >
                    Gallery{" "}
                    <ChevronDown
                      className={`transition-transform ${
                        mobileGalleryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                  {mobileGalleryOpen && (
                    <div className="pl-4 flex flex-col space-y-1">
                      {galleryLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Notices */}
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center px-2 py-2"
                    onClick={() => setMobileNoticesOpen(!mobileNoticesOpen)}
                  >
                    Notices{" "}
                    <ChevronDown
                      className={`transition-transform ${
                        mobileNoticesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                  {mobileNoticesOpen && (
                    <div className="pl-4 flex flex-col space-y-1">
                      {noticesLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Other Links */}
                  {mainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-2 py-2 rounded hover:bg-gray-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
