import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  // Types
  type FooterSection = {
    title: string;
    links: string[];
  };

  type SocialLink = {
    icon: React.ElementType;
    href: string;
    label: string;
  };

  // Footer Data
  const footerSections: FooterSection[] = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "Documentation"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact", "Terms", "Privacy"],
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/sharkfuse",
      label: "Instagram",
    },
    { icon: Linkedin,
      href: "https://www.linkedin.com/in/felippecorrea/",
      label: "LinkedIn" 
    },
    {
      icon: Github,
      href: "https://github.com/sharkTech-solutions",
      label: "GitHub",
    },
  ];

  return (
    <footer className="py-16 bg-[#12141D] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <Image
              src="/images/lynx-logo-white-transparent.svg"
              alt="Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-[250px]">
              Build stunning landing pages faster with our modern templates.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Shark Tech Solutions. All rights
            reserved. | Developed by{" "}
            <Link
              href="https://www.linkedin.com/company/shark-teck-solution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#2B59FF] transition-colors duration-200 font-medium"
            >
              Shark Tech Solutions
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
