"use client";

import Image from "next/image";
import Link from "next/link";
import { Target } from "lucide-react";

interface HeaderProps {
  onJoinCommunity: () => void;
}

export default function Header({ onJoinCommunity }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-4  z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
          <Image
            src="/logo.png"
            alt="Business TechPoint"
            width={115}
            height={40}
            className="transition-transform group-hover:scale-105"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/quiz"
            className="group hidden sm:flex items-center gap-2 text-gray-700 hover:text-[#0397B3] font-semibold transition-all duration-300 px-4 py-2 rounded-lg hover:bg-[#0397B3]/5"
          >
            <Target size={18} className="group-hover:rotate-90 transition-transform" />
            <span>Take Assessment</span>
          </Link>
          <button
            onClick={onJoinCommunity}
            className="bg-gradient-to-r from-[#0397B3] to-teal-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0397B3]/20 transition-all duration-300 hover:scale-105"
          >
            Join Community
          </button>
        </div>
      </div>
    </nav>
  );
}
