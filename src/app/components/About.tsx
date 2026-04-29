import { Code, Palette, Zap, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const skills = [
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

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design-Driven",
      description: "Bridging the gap between design and development seamlessly",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Building fast, optimized experiences that users love",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working with teams to create exceptional products",
    },
  ];

  return (
    <div className="min-h-screen bg-[#d9d9d9]">
      {/* Hero Section */}
      <section className="py-20 bg-[#d9d9d9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Portrait — left side */}
            <div className="relative order-2 md:order-1">
              <img
                src="/field-portrait.jpg"
                alt="Victor Nyoyoko"
                className="w-[412px] h-[512px] object-cover rounded-xl grayscale"
              />
            </div>

            <div className="order-1 md:order-2">
              <h1 className="text-5xl font-bold text-[#2f2f2f] mb-6">About Me</h1>
              <p className="text-lg text-[#2f2f2f] mb-4">
                I'm Victor Nyoyoko — a backend and systems engineer with a foundation in
                networking and . I build the infrastructure and automation that keeps
                networks running and engineers productive.
              </p>
              <p className="text-lg text-[#2f2f2f] mb-4">
                My foundation is rigorous: data structures, algorithms, and logic
                underpin everything I build. I work across the stack — from low-level
                C/C++ systems to high-level AI and machine learning solutions.
                Real-world tradeoffs are familiar terrain: performance versus
                correctness, security versus usability, scalability versus complexity.
                I'm drawn to hard problems. I build to last.
              </p>
              <p className="text-lg text-[#2f2f2f]">
                Currently Based in Nigeria. MEng Computer Science & Software Engineering
                from the University of Birmingham.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#f6f6f6]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
            What I Value
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2f2f2f] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#2f2f2f]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#2f2f2f] mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-2 text-[#2f2f2f]"
                    >
                      <span className="w-2 h-2 bg-gray-900 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
