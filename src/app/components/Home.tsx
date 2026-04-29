import { ArrowRight, Zap, Sparkles, Target } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-visible">
        {/* Content: portrait + name, z-10 above page background */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-0">
          <div className="flex items-center gap-10">
            {/* Portrait — left side */}
            <div className="flex-shrink-0 hidden md:block">
              <img
                src="/portrait.png"
                alt="Victor Nyoyoko"
                className="w-[412px] h-[512px] object-cover grayscale"
              />
            </div>

            {/* Name + tagline + buttons */}
            <div className="text-[#2f2f2f]">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                VICTOR
                <br />
                NYOYOKO
              </h1>
              <p className="text-xl md:text-2xl text-[#2f2f2f] mb-8 leading-relaxed">
                I build backend systems on a networking foundation.<br />
                Reliable by default, not by luck.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-[#2f2f2f] text-white px-8 py-4 rounded-lg hover:bg-gray-500 transition-colors"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#2f2f2f] text-[#2f2f2f] px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section — no portrait */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gray-100">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&h=1080&fit=crop&q=80"
            alt="Section background"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What I Bring</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              A combination of technical expertise and creative problem-solving
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-[#bebebe] p-8 rounded-lg border border-gray-200 hover:border-gray-900 transition-all">
              <div className="w-12 h-12 mb-6 text-[#292929]">
                <Zap className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#292929]">
                Fast & Efficient
              </h3>
              <p className="text-[#292929] leading-relaxed">
                Building performant solutions that scale with your needs, optimized for
                speed and reliability
              </p>
            </div>
            <div className="group bg-[#bebebe] p-8 rounded-lg border border-gray-200 hover:border-gray-900 transition-all">
              <div className="w-12 h-12 mb-6 text-[#292929]">
                <Sparkles className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#292929]">
                Modern Design
              </h3>
              <p className="text-[#292929] leading-relaxed">
                Creating beautiful interfaces with attention to detail, where form meets
                function
              </p>
            </div>
            <div className="group bg-[#bebebe] p-8 rounded-lg border border-gray-200 hover:border-gray-900 transition-all">
              <div className="w-12 h-12 mb-6 text-[#292929]">
                <Target className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#292929]">
                User-Focused
              </h3>
              <p className="text-[#292929] leading-relaxed">
                Designing experiences that put users first, ensuring intuitive and
                delightful interactions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
