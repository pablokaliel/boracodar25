import { useState, useRef } from "react";

export const useVideoFunctions = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isContainerVideoExpanded, setIsContainerVideoExpanded] = useState(false);
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=cbSHUVSUFgY");
  const [isSearch, setIsSearch] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  const videoUrls = [
    "https://www.youtube.com/watch?v=cbSHUVSUFgY",
    "https://www.youtube.com/watch?v=Hq4cIzdS50A",
    "https://www.youtube.com/watch?v=zOhmskMoFA4",
    "https://www.youtube.com/watch?v=8dkwk6d8vdY",
    "https://www.youtube.com/watch?v=vqzbgXeMEnU",
    "https://www.youtube.com/watch?v=isn44MT-aIQ",
    "https://www.youtube.com/watch?v=uL6nu0-zhu0&feature=youtu.be",
  ];

  const HandleVideoBackOrGo = (isForward) => {
    const currentIndex = videoUrls.indexOf(videoUrl);
    let nextIndex;

    if (isForward) {
      nextIndex = (currentIndex + 1) % videoUrls.length;
    } else {
      nextIndex = currentIndex === 0 ? videoUrls.length - 1 : currentIndex - 1;
    }
    setVideoUrl(videoUrls[nextIndex]);
  };

  const HandleVideoToggle = () => {
    const currentIndex = videoUrls.indexOf(videoUrl);
    const nextIndex = (currentIndex + 1) % videoUrls.length;
    setVideoUrl(videoUrls[nextIndex]);
  };

  const HandleSearch = () => {
    setIsSearch(true);
    setTimeout(() => {
      setIsSearch(false);
    }, 2000);
  };

  const HandleCopyCode = () => {
    const codeText = codeRef.current.textContent;
    navigator.clipboard.writeText(codeText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const HandleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const HandleExpandContainerVideo = () => {
    setIsContainerVideoExpanded(!isContainerVideoExpanded);
  };

  return {
    isPlaying,
    isContainerVideoExpanded,
    videoUrl,
    isSearch,
    isCopied,
    codeRef,
    HandleVideoBackOrGo,
    HandleVideoToggle,
    HandleSearch,
    HandleCopyCode,
    HandleTogglePlay,
    HandleExpandContainerVideo,
  };
};
