"use client";

import { Box, Cog, Users, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Service() {
  const features = [
    {
      icon: Box,
      title: "Tools & Templates",
      description: "Simple resources that help you organize and automate without the guesswork",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Cog,
      title: "Guided Programs",
      description: "Step-by-step systems to build structure and automation into your business",
      image: "https://images.pexels.com/photos/7414218/pexels-photo-7414218.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with entrepreneurs who are building smarter, not harder",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: TrendingUp,
      title: "Live Implementation",
      description: "Hands-on workshops and challenges for real results, not just theory",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="service" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden mb-20">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16">
            <div className="text-white space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Need Deeper Support?
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Book personalized sessions to get expert help tailored to your specific business challenges and goals.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 size={24} className="text-[#0397B3]" />
                  Systems & Workflow Consulting
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  Get expert guidance to map and optimize your operations
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 size={24} className="text-[#0397B3]" />
                  Automation Setup Session
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  Implement powerful automation that saves hours every week
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 size={24} className="text-[#0397B3]" />
                  Personalized Operations Mapping
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  Custom roadmap for building your business systems
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 md:p-12 text-center border border-gray-200">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Who Is This For?
          </h3>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Business TechPoint is for anyone who wants <span className="font-bold text-[#0397B3]">less confusion</span>,{" "}
            <span className="font-bold text-[#0397B3]">less manual work</span>, and more{" "}
            <span className="font-bold text-[#0397B3]">clarity</span>,{" "}
            <span className="font-bold text-[#0397B3]">structure</span>, and{" "}
            <span className="font-bold text-[#0397B3]">scale</span>.
          </p>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            We help you build a business that works smoothly—so you can grow confidently.
          </p>
        </div>
      </div>
    </section>
  );
}
