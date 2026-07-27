import {
  ArrowRight,
  Zap,
  Sparkles,
  Target,
  Mail,
} from "lucide-react";
import { Link } from "react-router";
import { GrainGradient } from "@paper-design/shaders-react";
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
          Built and deployed the <span className="text-[#f1f1f1] font-semibold">Akxston website</span> end to end; <span className="text-[#f1f1f1] font-semibold">design, domain, hosting</span>. Currently leading the development of <span className="text-[#f1f1f1] font-semibold">Top Artisan</span>, a marketplace for local artisans to meet their desired clients and vice versa
        </>
      ),
    },
  {
    role: "Network Engineer",
    company: "ipNX Nigeria Limited",
    period: "2025 – 2026",
    description: (
      <>
        Maintained Layer 2 connectivity for <span className="text-[#f1f1f1] font-semibold">600+ enterprise customers in Abuja by liasing with their network teams to troubleshoot and resolve network links</span>. Deploying and optimising point-to-point/point-to-multi-point microwave radio links (<span className="text-[#f1f1f1] font-semibold">Cambium, Ubiquiti</span>) for last-mile connectivity, tuning for throughput and latency. Built monitoring dashboards in <span className="text-[#f1f1f1] font-semibold">UptimeKuma</span>, reducing fault detection time.
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
        <span className="text-[#f1f1f1] font-semibold">Troubleshooting codebases</span>. Engagements ranged from <span className="text-[#f1f1f1] font-semibold">automating internal workflows</span> and <span className="text-[#f1f1f1] font-semibold">integrating third-party services</span> to shipping production sites, <span className="text-[#f1f1f1] font-semibold">with direct client communication on scope, delivery and iteration</span>
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
                <span className="text-[#2f2f2f]">designing human interfaces</span> to{" "}
                <span className="text-[#2f2f2f]">developer tooling</span>. I have an emerging presence in the applications of electronics and hardware.
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
        <div className="absolute inset-0 bg-[#0f1f1f]" />
        <div className="relative z-10 mx-auto px-6">
          <div className="text-center mb-12">
            {/*<h2 className="text-4xl font-bold text-white mb-4">How I Think</h2>*/}
            {/*<p className="text-lg text-gray-200 max-w-2xl mx-auto">
              I find leverage in complex systems — mapping actors, dependencies, and
              incentive structures to move outcomes.
            </p>*/}
          </div>
          <div className="grid md:grid-cols-4 gap-4">
                      <div className="group relative p-8 rounded-lg overflow-hidden min-h-[480px]">
                        <img src="/impact-middleware.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <h3 className="text-2xl font-semibold mb-3">Middleware & Systems</h3>
                          <p className="leading-relaxed">
                            Built VASCO — AI-to-hardware middleware bridging LLMs.
                          </p>
                        </div>
                      </div>
                      <div className="group relative p-8 rounded-lg overflow-hidden min-h-[480px]">
                        <img src="/impact-network.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <h3 className="text-2xl font-semibold mb-3">Network Engineering</h3>
                          <p className="leading-relaxed">
                            Deep experience in maintaining, optimising and deploying reliable network
                            infrastructure: systems that stay up by design
                          </p>
                        </div>
                      </div>
                      <div className="group relative p-8 rounded-lg overflow-hidden min-h-[480px]">
                        <img src="/impact-human.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 " />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <h3 className="text-2xl font-semibold mb-3">Human Relations</h3>
                          <p className="leading-relaxed">
                            I see technology as a tool. A tool to facilitate human connection. My experiences have provided me with the platform to hone my understanding of what clients want.
                          </p>
                        </div>
                      </div>
                      <div className="group relative p-8 rounded-lg overflow-hidden min-h-[480px]">
                        <img src="/impact-design.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 " />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <h3 className="text-2xl font-semibold mb-3">Design</h3>
                          <p className="leading-relaxed">
                            Design is identification.
                          </p>
                        </div>
                      </div>
                    </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 overflow-hidden min-h-[700px]">
        <div className="absolute inset-0" />
        <GrainGradient
          className="pointer-events-none absolute inset-0 h-full w-full"
          colors={["#0f1f1f", "#a49c74"]}
          colorBack="#1f1f1f"
          softness={0.5}
          intensity={0.5}
          noise={0.25}
          shape="blob"
          speed={1}
          scale={1}
          rotation={92}
          offsetX={0.02}
        />
        {/*<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_55%)]" />*/}
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col px-6 pt-5 pb-5 gap-20">
          <h2 className="text-4xl font-bold text-[#f2f2f2] mb-12 text-center">
            Experience
          </h2>
          <div className="mt-auto rounded-xl border border-[#2f2f2f] backdrop-blur-lg px-2 shadow-[0_20px_60px_rgba(47,47,47,0.08)]">
            <Accordion type="single" collapsible defaultValue="item-0">
              {experiences.map((exp, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 w-full">
                      <div>
                        <span className="text-[#f2f2f2] font-semibold">
                          {exp.role}
                        </span>
                        <span className="text-[#d8d8d8] md:ml-2">
                          · {exp.company}
                        </span>
                      </div>
                      <span className="text-[#f3f3f3] text-sm md:text-base">
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
