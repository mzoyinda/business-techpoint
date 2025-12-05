"use client";

import {
  FileText,
  Zap,
  Users,
  Video,
  Calendar,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface FooterProps {
  onJoinCommunity: () => void;
}

export default function Benefits({ onJoinCommunity }: FooterProps) {
  const benefits = [
    {
      icon: FileText,
      title: "Simple Tools & Templates",
      description:
        "Workflow guides and templates designed for practical implementation",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Step-by-Step Programs",
      description:
        "Organized programs to automate and streamline your business operations",
      gradient: "from-[#0397B3] to-teal-600",
    },
    {
      icon: Video,
      title: "Live Sessions & Challenges",
      description:
        "Hands-on implementation with guided support and real-time feedback",
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Supportive Network",
      description:
        "Join entrepreneurs and professionals improving together",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Calendar,
      title: "Expert Consulting",
      description:
        "Book systems, workflow, and automation consulting when you need it",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Personalized Operations",
      description:
        "Get customized operations mapping tailored to your business",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#0397B3] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0397B3]/10 to-teal-100/50 border border-[#0397B3]/20 rounded-full px-5 py-2 text-sm font-medium text-[#0397B3] mb-6">
            <Sparkles size={16} />
            <span>Community Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What You Get Inside
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build a business that works smoothly and scales confidently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#0397B3]/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0397B3] to-teal-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="text-white" size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0397B3] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-[#0397B3] opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={20} />
                <span className="text-sm font-semibold">Included</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-[#0397B3] to-teal-700 rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-200 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Plus Much More Inside
            </h3>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Join a growing community of business owners who are building efficient, automated, and scalable businesses
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full">
                <CheckCircle2 size={18} />
                <span>Monthly workshops</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full">
                <CheckCircle2 size={18} />
                <span>Implementation challenges</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full">
                <CheckCircle2 size={18} />
                <span>Private community forum</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full">
                <CheckCircle2 size={18} />
                <span>Resource library</span>
              </div>
            </div>
          </div>
          <div className="w-full text-center pt-8">
          <button
              onClick={onJoinCommunity}
              className="group bg-white text-[#0397B3] px-10 py-5 rounded-xl text-xl font-semibold hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-3"
            >
              Join the Community
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
