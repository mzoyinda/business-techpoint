"use client";

import { Settings, Rocket, Map, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServicesProps {
  onJoinCommunity: () => void;
}

export default function Services({ onJoinCommunity }: ServicesProps) {
  const services = [
    {
      icon: Settings,
      title: "Systems & Workflow Consulting",
      description:
        "Get expert guidance on building efficient systems and workflows tailored to your business needs.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-[#0397B3] to-teal-600",
    },
    {
      icon: Rocket,
      title: "Automation Setup Session",
      description:
        "Hands-on help setting up automations that save time and reduce manual work.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-teal-500 to-teal-700",
    },
    {
      icon: Map,
      title: "Personalized Operations Mapping",
      description:
        "Complete analysis and mapping of your operations to identify gaps and opportunities.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-slate-700 to-gray-900",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#BCE5EB] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0397B3]/10 border border-[#0397B3]/20 rounded-full px-5 py-2 text-sm font-medium text-[#0397B3] mb-6">
            <Rocket size={16} />
            <span>Expert Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Need Deeper Help?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you need personalized support, book a session with our experts and get tailored solutions for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#0397B3]/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0397B3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#0397B3] font-semibold group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 border border-gray-200 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Join Business TechPoint today and get access to all our resources, expert support, and community
            </p>
            <button
              onClick={onJoinCommunity}
              className="group bg-gradient-to-r from-[#0397B3] to-teal-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:shadow-xl hover:shadow-[#0397B3]/20 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Join Business TechPoint Today
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
