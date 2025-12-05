"use client";

import { Sparkles, ArrowRight, Zap, TrendingUp, Target } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  onJoinCommunity: () => void;
}

export default function Hero({ onJoinCommunity }: HeroProps) {
  return (
    <section className="min-h-screen relative flex items-center px-4 py-20 pt-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#BCE5EB] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0397B3] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#0397B3]/10 border border-[#0397B3]/20 rounded-full px-5 py-2 text-sm font-medium text-[#0397B3]">
              <Sparkles size={16} />
              <span>Systems & Operations Community</span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Build a Business That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0397B3] to-teal-600 mt-2">
                Runs Itself
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Transform your business with organized systems, automated workflows, and scalable processes. Learn, implement, and grow with expert guidance every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onJoinCommunity}
                className="group bg-[#0397B3] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#007a8f] transition-all duration-300 hover:shadow-xl hover:shadow-[#0397B3]/20 flex items-center justify-center gap-2"
              >
                Join the Community
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/quiz"
                className="group bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-[#0397B3] hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Take Assessment
                <Target size={20} className="group-hover:rotate-90 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Business Owners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Systems Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-12 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#0397B3] to-teal-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-[#BCE5EB] rounded-2xl opacity-20 blur-xl"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#0397B3]/5 to-teal-50 rounded-2xl border border-[#0397B3]/10 hover:border-[#0397B3]/30 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0397B3] to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Zap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Less Confusion
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Clear systems and structured processes that eliminate guesswork
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-teal-50 to-[#BCE5EB]/30 rounded-2xl border border-teal-200/50 hover:border-teal-300 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Less Manual Work
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Automated workflows that save hours every single day
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-[#0397B3]/30 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        More Clarity
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Structure and scale for confident, sustainable growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
