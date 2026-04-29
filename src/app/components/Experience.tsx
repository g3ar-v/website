import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Network Engineer — L2 Enterprise/ISP",
      company: "ipNX Nigeria Limited",
      period: "Apr 2025 – Feb 2026",
      description:
        "Maintained L2 connectivity and SLA availability for 600+ enterprise and ISP customers. Acted as the technical bridge between internal teams and customer stakeholders — translating requirements, managing expectations, and ensuring alignment across both sides. Deployed and optimised point-to-point/point-to-multi-point microwave radio links (Cambium, Ubiquiti) for last-mile connectivity, tuning for throughput and latency. Built monitoring dashboards in UptimeKuma, reducing fault detection to under five minutes.",
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
      role: "MEng Computer Science & Software Engineering",
      company: "University of Birmingham",
      period: "2018 – 2022",
      description:
        "Four-year integrated master's degree covering distributed systems, secure systems, software engineering, algorithms, and computer networks. Graduated with a focus on systems programming and backend architecture.",
      skills: [
        "Python",
        "Java",
        "C/C++",
        "JavaScript/TypeScript",
        "Distributed Systems",
        "Databases",
        "Software Engineering",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#d9d9d9] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#2f2f2f] mb-4">Experience</h1>
          <p className="text-xl text-[#2f2f2f]">
            Professional experience and academic background in backend systems,
            networking, and reliability engineering
          </p>
        </div>

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

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-[#2f2f2f] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
