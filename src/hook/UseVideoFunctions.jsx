import { useState, useRef } from "react";

export const useVideoFunctions = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isContainerVideoExpanded, setIsContainerVideoExpanded] = useState(false);
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=qC0vDKVPCrw");
  const [isSearch, setIsSearch] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  const videoUrls = [
    "https://www.youtube.com/watch?v=qC0vDKVPCrw",
    "https://www.youtube.com/watch?v=Gt6wKDnG0xA",
    "https://www.youtube.com/watch?v=os19tQVAGZk",
    "https://www.youtube.com/watch?v=knHGZF6-8rc"
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
