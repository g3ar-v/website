import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Products() {
  const products = [
    {
      title: "Vasco",
      description:
        "Voice and text desktop automation tool — executes system commands and app interactions via natural language on macOS and Windows.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
      tags: ["Python", "NLP", "macOS", "Computer Automation"],
      liveUrl: "#",
      githubUrl: "https://github.com/g3ar-v/Vasco",
    },
    {
      title: "Network Provisioning Automation",
      description:
        "Automated provisioning checks, config validation, and log collection pipeline for ipNX enterprise/ISP network infrastructure.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
      tags: ["Python", "Bash", "NOC", "Network Automation"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Attendance Monitoring System",
      description:
        "Automated attendance tracking system with face recognition and real-time reporting dashboard for institutional use.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
      tags: ["Python", "Computer Vision", "React", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/g3ar-v",
    },
  ];

  return (
    <div className="min-h-screen bg-[#d9d9d9] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#2f2f2f] mb-4">Products</h1>
          <p className="text-xl text-[#2f2f2f]">
            Selected projects spanning network automation, voice AI, and developer
            tooling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2f2f2f] mb-2">
                  {product.title}
                </h3>
                <p className="text-[#2f2f2f] mb-4 text-sm">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-[#2f2f2f] rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={product.liveUrl}
                    className="inline-flex items-center gap-1 text-sm text-[#2f2f2f] hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={product.githubUrl}
                    className="inline-flex items-center gap-1 text-sm text-[#2f2f2f] hover:text-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
