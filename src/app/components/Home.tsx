import {
  ArrowRight,
  Zap,
  Sparkles,
  Target,
  Briefcase,
  Calendar,
  Mail,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const experiences = [
  {
    role: "Network Engineer — L2 Enterprise/ISP",
    company: "ipNX Nigeria Limited",
    period: "2025 – 2026",
    description:
      "Maintained Layer 2 connectivity and SLA availability for 600+ enterprise customers by troubleshooting and resolving network links, deploying and optimising point-to-point/point-to-multi-point microwave radio links (Cambium, Ubiquiti) for last-mile connectivity, tuning for throughput and latency. Built monitoring dashboards in UptimeKuma, reducing fault detection time.",
    skills: [
      "Python",
      "SolarWinds",
      "UptimeKuma",
      "L1/L2 Networking",
      "Cambium",
      "Ubiquiti",
      "Microwave Radio",
    ],
  },
];

const skillGroups = [
  {
    category: "Software Engineering",
    items: [
      "Algorithms & Data Structures",
      "OOP & Software Engineering Practice",
      "Functional Programming",
      "Programming Languages",
    ],
  },
  {
    category: "Systems & Infrastructure",
    items: [
      "Computer Networks & Operating Systems",
      "Advanced Networking",
      "Distributed Systems",
      "Systems Programming in C/C++",
    ],
  },
  {
    category: "AI & Applied Computing",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Real-World Systems Security",
    ],
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-visible">
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8 md:pb-16">
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0 hidden md:block">
              <img
                src="/portrait.png"
                alt="Victor Nyoyoko"
                className="w-[412px] h-[512px] object-cover grayscale"
              />
            </div>
            <div className="text-[#2f2f2f]">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                VICTOR
                <br></br>NYOYOKO
              </h1>
              <p className="text-lg md:text-base text-[#7d7d7d] mb-8 leading-relaxed font-semibold">
                I am a systems engineer. Studied at the University of Birmingham, where
                I lived and breathed Computer Science. I work across the stack. From
                low-level C/C++ and network communications like cambium radios to
                high-level AI and backend solutions. I have built projects spanning from
                voice AI, human interfaces to developer tooling.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 bg-[#2f2f2f] text-white px-8 py-4 rounded-lg hover:bg-[#bebebe] transition-colors"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
            {/*<h2 className="text-4xl font-bold text-white mb-4">How I Think</h2>*/}
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              I find leverage in complex systems — mapping actors, dependencies, and
              incentive structures to move outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-[#bebebe] p-8 rounded-lg border border-gray-200 hover:border-[#bebebe] transition-all">
              <div className="w-12 h-12 mb-6 text-[#292929]">
                <Zap className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#292929]">
                Middleware & Systems
              </h3>
              <p className="text-[#292929] leading-relaxed">
                Built VASCO — AI-to-hardware middleware bridging LLMs to physical
                systems via Raspberry Pi and osascript
              </p>
            </div>
            <div className="group bg-[#bebebe] p-8 rounded-lg border border-gray-200 hover:border-[#bebebe] transition-all">
              <div className="w-12 h-12 mb-6 text-[#292929]">
                <Sparkles className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#292929]">
                Network Engineering
              </h3>
              <p className="text-[#292929] leading-relaxed">
                Deep experience at ipNX in maintaining and deploying reliable network
                infrastructure — systems that stay up by design
              </p>
            </div>
            <div className="group bg-[#bebebe] p-8 rounded-lg border border-gray-200 hover:border-[#bebebe] transition-all">
              <div className="w-12 h-12 mb-6 text-[#292929]">
                <Target className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#292929]">
                Systems Mapping
              </h3>
              <p className="text-[#292929] leading-relaxed">
                Tracing dependencies, incentives, and actors to shift outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/*<h2 className="text-4xl font-bold text-[#2f2f2f] mb-12 text-center">
            Experience
          </h2>*/}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#bebebe] rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2f2f2f] mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[#2f2f2f] mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#2f2f2f] mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-[#2f2f2f] mb-4">{exp.description}</p>
                {/*<div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-[#2f2f2f] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>*/}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
