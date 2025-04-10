"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState({});
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sectionIds = [
        "home",
        "about",
        "services",
        "products",
        "why-us",
        "contact",
      ];

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "/careers" },
  ];

  const dropdownItems = {
    Products: [
      { name: "DataSense", href: "#products", id: "DataSense" },
      { name: "SupportSense", href: "#products", id: "SupportSense" },
      { name: "NotifyBot", href: "#products", id: "NotifyBot" },
    ],
    Services: [
      { name: "AI-Driven Software Development", href: "#ai" },
      { name: "Enterprise Software Development", href: "#data" },
      { name: "Database Management & Smart Optimization", href: "#database" },
      { name: "Data Engineering & Analytics", href: "#data-eng" },
      { name: "System Integration & API Engineering", href: "#integration" },
      { name: "Full-Cycle Product Development", href: "#product-development" },
    ],
    Careers: [
      { name: "Open Roles", href: "/careers" },
      { name: "Culture", href: "/culture" },
    ],
  };

  const isDropdown = (name) => Object.keys(dropdownItems).includes(name);

  const scrollToSection = (hash) => {
    if (pathname === "/") {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${hash}`);
    }
  };

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    scrollToSection(href);
  };

  const toggleMobileDropdown = (itemName) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050d1b]/90 backdrop-blur-md py-2"
          : "bg-[#050d1b] py-2"
      } border-b border-[#1f2a3a]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* ✅ Responsive Logo with Text */}
        <Link href="/" className="flex items-center space-x-3 mb-3">
            <img
              src="/Newlogo4.png"
              alt="Maverick Ignite Logo"
              className="h-10 sm:h-14 w-auto object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                MAVERICK IGNITE
              </h1>
              <p className="text-sm font-bold text-gray-300 -mt-1 tracking-wide">
                SOLUTIONS LLP
              </p>
            </div>
          </Link>

        {/* ✅ Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-4 xl:space-x-6 text-sm font-medium text-white"
          ref={dropdownRef}
        >
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {isDropdown(item.name) ? (
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.name ? null : item.name)
                  }
                  className={`flex items-center gap-1 nav-link tracking-wide cursor-pointer ${
                    activeSection === item.href ? "text-cyan-400" : ""
                  }`}
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-link tracking-wide cursor-pointer ${
                    activeSection === item.href ? "text-cyan-400" : ""
                  }`}
                >
                  {item.name}
                </button>
              )}

              {openDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 bg-[#0a1224] shadow-lg rounded-md py-2 w-52 z-50">
                  {dropdownItems[item.name].map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() =>
                        item.name === "Careers"
                          ? router.push(subItem.href)
                          : handleNavClick(subItem.href)
                      }
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-cyan-700/30 transition"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#050d1b]/95 backdrop-blur-md text-white px-5 py-4 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <div key={item.name}>
              {isDropdown(item.name) ? (
                <button
                  onClick={() => toggleMobileDropdown(item.name)}
                  className="flex justify-between items-center w-full text-sm tracking-wide"
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openMobileDropdowns[item.name] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`block nav-link text-sm tracking-wide ${
                    activeSection === item.href ? "text-cyan-400" : ""
                  }`}
                >
                  {item.name}
                </button>
              )}

              {isDropdown(item.name) && openMobileDropdowns[item.name] && (
                <div className="ml-4 mt-1 space-y-2">
                  {dropdownItems[item.name].map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() =>
                        item.name === "Careers"
                          ? router.push(subItem.href)
                          : handleNavClick(subItem.href)
                      }
                      className="block text-left text-sm text-gray-300 hover:text-white"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
