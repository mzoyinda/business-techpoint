"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg">
          <Image
               src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Business TechPoint"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            About <span className="text-[#0397B3]">Business TechPoint</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We help business owners and professionals build organised, automated, and scalable 
            businesses using simple systems, workflows, and practical tools.
          </p>

          <div className="space-y-5">
            {[
              "Simple tools & templates you can use immediately",
              "Guided programs that walk you step-by-step",
              "A community to help you grow with clarity",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-[#0397B3] mt-0.5" />
                <p className="text-gray-700 text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
