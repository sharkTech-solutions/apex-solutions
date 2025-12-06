"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@/app/components/Button";

// Navbar.tsx (data section)
interface LinkItem {
  label: string;
  href: string;
  src?: string;
}

interface CTAButton {
  text: string;
  href?: string;
  onClick?: () => void;
}

interface NavbarData {
  logo: {
    src: string;
    alt: string;
  };
  links: LinkItem[];
  cta: CTAButton;
}

const navbarData: NavbarData = {
  logo: {
    src: "/images/lynx-logo-white-transparent.svg",
    alt: "Lynx Studio Logo",
  },
  links: [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: {
    text: "Get Started",
    href: "#cta",
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#12141D] text-white z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="shrink-0 cursor-pointer">
          <Image
            src={navbarData.logo.src}
            alt={navbarData.logo.alt}
            width={100}
            height={30}
            className="w-28 sm:w-32 md:w-36 h-auto"
            priority
          />
        </Link>

        {/* Center Links */}
        <ul className="hidden [@media(min-width:820px)]:flex space-x-10 text-base">
          {navbarData.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-inter hover:text-[#1668E8] hover:text-underline transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden [@media(min-width:820px)]:block">
          <Button variant="primary" size="md" fullWidth={false}>
            {navbarData.cta.text}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="[@media(min-width:820px)]:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-[#12141D] [@media(min-width:820px)]:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-sm">
            {navbarData.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#1668E8] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Button
              variant="primary"
              size="md"
              className="mt-4"
              fullWidth={false}
              onClick={() => setMenuOpen(false)}
            >
              {navbarData.cta.text}
            </Button>
          </ul>
        </div>
      )}
    </nav>
  );
}
