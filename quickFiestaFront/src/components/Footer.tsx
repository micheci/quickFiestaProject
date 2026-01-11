import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3 items-start">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">
            Quick<span className="text-[#FF6600]">Fiesta</span>
          </h3>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed max-w-sm">
            Stress-free birthday party planning for busy parents.
            From decorations to setup — we handle it all.
          </p>
        </div>

        {/* Links (hash anchors stay <a>) */}
        <div className="flex justify-center gap-6 text-sm font-medium flex-wrap">
          {[
            { label: "Home", href: "#hero" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Packages", href: "#packages" },
            { label: "Contact", href: "#contact" },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FF6600] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social */}
        {/* <div className="flex justify-center md:justify-end gap-4">
          {[BsFacebook, BsInstagram, BsYoutube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-[#FF6600] transition-all duration-200"
              aria-label="Social link"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div> */}
      </div>

      {/* Bottom bar */}
      <div className="mt-14 border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        <div>
          © {new Date().getFullYear()} QuickFiesta. All rights reserved.
        </div>

        <div className="mt-2">
          <Link
            to="/accessibility"
            className="hover:text-[#FF6600] transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}
