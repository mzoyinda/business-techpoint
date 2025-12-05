"use client";

import { Sparkles, ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  onJoinCommunity: () => void;
}

export default function Footer({ onJoinCommunity }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-24 pb-8 px-4 relative overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0397B3]/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* <div className="bg-gradient-to-br from-[#0397B3] to-teal-700 rounded-3xl p-12 md:p-16 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Sparkles size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build a Business That Works?
            </h2>
            <p className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join Business TechPoint and start building organized, automated, and scalable systems today
            </p>
            <button
              onClick={onJoinCommunity}
              className="group bg-white text-[#0397B3] px-10 py-5 rounded-xl text-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-3"
            >
              Join the Community
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div> */}

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Business TechPoint"
                width={260}
                height={70}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              A systems and operations community helping business owners build organized, automated, and scalable businesses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-[#0397B3] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-[#0397B3] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-[#0397B3] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0397B3] transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="/quiz" className="text-gray-600 hover:text-[#0397B3] transition-colors">
                  Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0397B3] transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0397B3] transition-colors">
                  Programs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0397B3] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0397B3] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0397B3] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0397B3] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Business TechPoint. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with care for business owners worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
