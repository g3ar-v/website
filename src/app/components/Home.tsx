import {
  ArrowRight,
  Zap,
  Sparkles,
  Target,
  Mail,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

const experiences = [
  {
      role: "Fullstack Engineer",
      company: "Akxston",
      period: "2026",
      description: (
        <>
          Built and deployed the <span className="text-[#2f2f2f] font-semibold">Akxston website</span> end to end; <span className="text-[#2f2f2f] font-semibold">design, domain, hosting</span>. Currently leading the development of <span className="text-[#2f2f2f] font-semibold">Top Artisan</span>, a marketplace for local artisans to meet their desired clients and vice versa
        </>
      ),
    },
  {
    role: "Network Engineer",
    company: "ipNX Nigeria Limited",
    period: "2025 – 2026",
    description: (
      <>
        Maintained Layer 2 connectivity for <span className="text-[#2f2f2f] font-semibold">600+ enterprise customers in Abuja by liasing with their network teams to troubleshoot and resolve network links</span>. Deploying and optimising point-to-point/point-to-multi-point microwave radio links (<span className="text-[#2f2f2f] font-semibold">Cambium, Ubiquiti</span>) for last-mile connectivity, tuning for throughput and latency. Built monitoring dashboards in <span className="text-[#2f2f2f] font-semibold">UptimeKuma</span>, reducing fault detection time.
      </>
    ),
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
  {
    role: "Freelance Software Developer",
    company: "fiverr",
    period: "2022 – 2024",
    description: (
      <>
        <span className="text-[#2f2f2f] font-semibold">Troubleshooting codebases</span>. Engagements ranged from <span className="text-[#2f2f2f] font-semibold">automating internal workflows</span> and <span className="text-[#2f2f2f] font-semibold">integrating third-party services</span> to shipping production sites, <span className="text-[#2f2f2f] font-semibold">with direct client communication on scope, delivery and iteration</span>
      </>
    ),
    skills: [
      "Go",
      "PostgreSQL",
      "Kafka",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Distributed Systems",
      "Payments",
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
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-16 md:pb-0">
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0 hidden md:block">
              <img
                src="/portrait.png"
                alt="Victor Nyoyoko"
                className="w-[472px] h-[512px] object-cover grayscale"
              />
            </div>
            <div className="text-[#2f2f2f]">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                VICTOR
                <br></br>NYOYOKO
              </h1>
              <p className="text-lg md:text-base text-[#7d7d7d] mb-8 leading-relaxed font-semibold">
                I am a <span className="text-[#2f2f2f]">systems engineer</span>. Studied at the{" "}
                <span className="text-[#2f2f2f]">University of Birmingham</span>, where I lived and
                breathed <span className="text-[#2f2f2f]">Computer Science</span>. I work across the
                stack. From low-level <span className="text-[#2f2f2f]">C/C++</span> and network
                communications like <span className="text-[#2f2f2f]">cambium radios</span> to
                high-level <span className="text-[#2f2f2f]">AI</span> and{" "}
                <span className="text-[#2f2f2f]">backend solutions</span>. I have built projects
                spanning from <span className="text-[#2f2f2f]">voice AI</span>,{" "}
                <span className="text-[#2f2f2f]">human interfaces</span> to{" "}
                <span className="text-[#2f2f2f]">developer tooling</span>.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 bg-[#2f2f2f] border-2 text-white px-4 py-2 rounded-pill hover:bg-[#f2f2f2] hover:text-[#2f2f2f] hover:border-[#2f2f2f] transition-colors"
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
        <div className="absolute inset-0 bg-[#2f2f2f]">
          {/*<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />*/}
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            {/*<h2 className="text-4xl font-bold text-white mb-4">How I Think</h2>*/}
            {/*<p className="text-lg text-gray-200 max-w-2xl mx-auto">
              I find leverage in complex systems — mapping actors, dependencies, and
              incentive structures to move outcomes.
            </p>*/}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-lg overflow-hidden">
              <img src="/impact-middleware.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative text-white">
                <h3 className="text-2xl font-semibold mb-3">Middleware & Systems</h3>
                <p className="leading-relaxed">
                  Built VASCO — AI-to-hardware middleware bridging LLMs to physical
                  systems via Raspberry Pi and osascript
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-lg overflow-hidden">
              <img src="/halftone-orange.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative text-white">
                <h3 className="text-2xl font-semibold mb-3">Network Engineering</h3>
                <p className="leading-relaxed">
                  Deep experience at ipNX in maintaining and deploying reliable network
                  infrastructure — systems that stay up by design
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-lg overflow-hidden">
              <img src="/halftone-green.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative text-white">
                <h3 className="text-2xl font-semibold mb-3">Human Relations</h3>
                <p className="leading-relaxed">
                  I see technology as a tool. A tool to facilitate human connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#2f2f2f] mb-12 text-center">
            Experience
          </h2>
          <div className="rounded-xl border border-[#bebebe] bg-[#f2f2f2] px-2">
            <Accordion type="single" collapsible defaultValue="item-0">
              {experiences.map((exp, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 w-full">
                      <div>
                        <span className="text-[#2f2f2f] font-semibold">
                          {exp.role}
                        </span>
                        <span className="text-[#494949] md:ml-2">
                          · {exp.company}
                        </span>
                      </div>
                      <span className="text-[#717182] text-sm md:text-base">
                        {exp.period}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{exp.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
