import { useState } from "react";
import { Play } from "lucide-react";

interface VideoThumbnailProps {
  youtubeId: string;
  thumbnail?: string;
  title: string;
  className?: string;
}

export function VideoThumbnail({
  youtubeId,
  thumbnail,
  title,
  className = "",
}: VideoThumbnailProps) {
  const [playing, setPlaying] = useState(false);
  const [didError, setDidError] = useState(false);

  // Fallback thumbnail derived from YouTube's standard thumbnail URL
  const posterSrc =
    thumbnail ||
    `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div
      className={`relative aspect-video bg-gray-100 overflow-hidden cursor-pointer group ${className}`}
      onClick={() => setPlaying((p) => !p)}
    >
      {!playing ? (
        <>
          <img
            src={posterSrc}
            alt={`${title} preview`}
            className="w-full h-full object-cover"
            onError={() => {
              // Fall back to YouTube's hqdefault if maxresdefault is missing
              if (!didError) setDidError(true);
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
              <Play
                className="w-6 h-6 text-gray-900 ml-1"
                fill="currentColor"
              />
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  );
}
