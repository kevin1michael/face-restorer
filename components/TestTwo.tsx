// [meta] name: GifCarouselTutorial
// [meta] description: A tutorial which is a carousel of gifs

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeftCircle } from "lucide-react";
import { ArrowRightCircle } from "lucide-react";
import { Pause } from "lucide-react";
import { Play } from "lucide-react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const gifs = [
  // Placeholder images, URLs to the GIFs should be placed here
  "https://media4.giphy.com/media/3owvKdSecsPWrDDjIQ/giphy.gif?cid=ecf05e47qolligmtym1e25e7bwlln2gny0ko8nk27p4wv5t6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/l1J9qemh1La8b0Rag/giphy.gif?cid=ecf05e47qolligmtym1e25e7bwlln2gny0ko8nk27p4wv5t6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/u1WhXLjwgcXpHJBMRM/giphy.gif?cid=ecf05e47qolligmtym1e25e7bwlln2gny0ko8nk27p4wv5t6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
];

function GifCarouselTutorial() {
  const [currentGif, setCurrentGif] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const prevGif = () =>
    setCurrentGif(currentGif - 1 >= 0 ? currentGif - 1 : gifs.length - 1);
  const nextGif = () =>
    setCurrentGif(currentGif + 1 < gifs.length ? currentGif + 1 : 0);

  const playSlideshow = () => {
    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      nextGif();
    }, 2000); // Change 2000 to the desired interval time
  };

  const pauseSlideshow = () => {
    setIsPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseSlideshow();
    } else {
      playSlideshow();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 dark:bg-black">
      <div className="relative mb-4">
        <img
          src={gifs[currentGif]}
          alt={`Step ${currentGif}`}
          className="rounded-lg"
        />
        <div className="absolute bottom-2 left-2 right-2">
          <Progress value={(currentGif + 1) * (100 / gifs.length)} />
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <Button variant="ghost" onClick={prevGif} disabled={currentGif === 0}>
          <ArrowLeftCircle className="h-6 w-6" /> Prev
        </Button>
        <div className="space-x-4">
          {isPlaying ? (
            <Button variant="ghost" onClick={togglePlayPause}>
              <Pause className="h-6 w-6" /> Pause
            </Button>
          ) : (
            <Button
              variant="ghost"
              onClick={togglePlayPause}
              tempoTestId="button"
            >
              <Play className="h-6 w-6" /> Play
            </Button>
          )}
          <Button
            variant="ghost"
            onClick={nextGif}
            disabled={currentGif === gifs.length - 1}
          >
            Next <ArrowRightCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="flex justify-center space-x-1">
        {gifs.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentGif ? "bg-blue-500" : "bg-gray-400"
            } dark:bg-gray-600`}
            onClick={() => setCurrentGif(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default GifCarouselTutorial;
