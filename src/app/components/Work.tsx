import { ExternalLink, Github, Calendar } from "lucide-react";
import { VideoThumbnail } from "./figma/VideoThumbnail";

export function Work() {
  const products = [
    {
      title: "macOS voice to actions",
      description:
        "A voice command which prompts the agent to perform actions on your computer.",
      // thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
      youtubeId: "iPXBzHmu0Pg",
      tags: ["Python", "NLP", "macOS", "Computer Automation"],
      // liveUrl: "#",
      // githubUrl: "https://github.com/g3ar-v/Vasco",
      date: "2023",
    },
    {
      title: "LED feedback for a timer",
      description: "A light feeback for a 1 minute timer",
      youtubeId: "0tiOsWwmQKM",
      tags: [],
      githubUrl: "https://github.com/g3ar-v/respeaker-4mic-hat-skill.git",
      date: "2023",
    },
    {
      title: "Responsive carousel sections and resizable component on click",
      description: "",
      youtubeId: "Vb_HEg7Xlz0",
      tags: [],
      date: "2024",
    },
    {
      title: "Voice agent UI",
      description:
        "The notion here was to have an agent whose feedback response was to speak while also providing and updating data on UI. A major problem was the lag with the then TTS engine in processing text",
      youtubeId: "2t2-ocBrqc0",
      tags: [],
      date: "2023",
    },
    {
      title: "SwiftUI ephemeral chat for AI agents",
      description:
        "An ephemeral chat capsule, that supports visual context from macOS UI to be used to query an agent",
      youtubeId: "PTgpPBFD6U4",
      tags: [],
      date: "2026",
    },
    {
      title: "Concurrent voice and light feedback on hardware",
      description: "",
      youtubeId: "9gGjfX51C7U",
      tags: [],
      date: "2026",
    },
    {
      title: "Conversations with voice agent",
      description: "",
      youtubeId: "q25TCyh1s1k",
      tags: [],
      date: "2023",
    },
    {
      title: "Artisan UI/UX",
      description: "",
      youtubeId: "zl9_yTFbw2A",
      tags: [],
      date: "2026",
    },
    {
          title: "Top Artisan SignIn flow",
          description: "",
          youtubeId: "f-IYT2Fnerc",
          tags: [],
          date: "2026",
        }
  ];

  return (
    <div className="min-h-screen  py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#2f2f2f] mb-4">Work</h1>
          {/*<p className="text-xl text-[#2f2f2f]">
            Selected projects spanning network automation, voice AI, and developer
            tooling
          </p>*/}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#bebebe] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <VideoThumbnail
                  youtubeId={product.youtubeId}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#2f2f2f] mb-2">
                  {product.title}
                </h3>
                <p className="text-[#2f2f2f] mb-4 text-sm">{product.description}</p>
                {product.date && (
                  <div className="flex items-center gap-1 text-sm text-[#7d7d7d] mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{product.date}</span>
                  </div>
                )}
                {/*<div className="flex flex-wrap gap-2 mb-4">
                                {product.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-1 bg-gray-100 text-[#2f2f2f] rounded text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>*/}
                <div className="flex gap-3">
                  {product.liveUrl ? (
                    <a
                      href={product.liveUrl}
                      className="inline-flex items-center gap-1 text-sm text-[#2f2f2f] hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : null}
                  {product.githubUrl ? (
                    <a
                      href={product.githubUrl}
                      className="inline-flex items-center gap-1 text-sm text-[#2f2f2f] hover:text-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
