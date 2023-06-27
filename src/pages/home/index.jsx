import { Container, Swapper, Header, LeftItems, Main, ContainerVideo, ContainerItems, Items, DivNav, DivRoute, TitleMobile, DivMob } from "./styles";

import {
  IoPlayCircleOutline,
  IoAccessibilityOutline,
  IoAlbumsOutline,
  IoSearchOutline,
  IoChevronBack,
  IoChevronForward,
  IoLockClosed,
  IoRefresh,
  IoShare,
  IoAddOutline,
  IoCopyOutline,
  IoPauseCircleOutline,
} from "react-icons/io5";
import { BiMessageError } from "react-icons/bi";
import { BsLayoutSidebar } from "react-icons/bs";

import { useState, useRef } from "react";
import ReactPlayer from "react-player";

function Home() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isContainerVideoExpanded, setIsContainerVideoExpanded] = useState(false);
  const [videoUrl, setVideoUrl] = useState( "https://www.youtube.com/watch?v=f54u6ypHst8" );
  const [isSearch, setIsSearch] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  const videoUrls = [
    "https://www.youtube.com/watch?v=f54u6ypHst8",
    "https://www.youtube.com/watch?v=zOhmskMoFA4",
    "https://www.youtube.com/watch?v=vqzbgXeMEnU",
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

  const handleVideoToggle = () => {
    const currentIndex = videoUrls.indexOf(videoUrl);
    const nextIndex = (currentIndex + 1) % videoUrls.length;
    setVideoUrl(videoUrls[nextIndex]);
  };

  const handleSearch = () => {
    setIsSearch(true);
    setTimeout(() => {
      setIsSearch(false);
    }, 2000);
  };

  const handleCopyCode = () => {
    const codeText = codeRef.current.textContent;
    navigator.clipboard.writeText(codeText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleExpandContainerVideo = () => {
    setIsContainerVideoExpanded(!isContainerVideoExpanded);
  };

  return (
    <Container>
      <DivMob>
        <BiMessageError size={58} color="#ff0000" />
        <TitleMobile>
          Para uma melhor experiência, utilize uma tela maior.
        </TitleMobile>
      </DivMob>

      <Swapper>
        <LeftItems>
          <ContainerItems>
            <Items className="active" onClick={handleTogglePlay}>
              {isPlaying ? (
                <IoPauseCircleOutline size={24} />
              ) : (
                <IoPlayCircleOutline size={24} />
              )}
            </Items>
            <Items onClick={handleExpandContainerVideo}>
              <IoAccessibilityOutline size={24} />
            </Items>
            <Items>
              <IoAlbumsOutline size={24} onClick={handleVideoToggle} />
            </Items>
            <Items onClick={handleSearch}>
              <IoSearchOutline size={24} />
            </Items>
            {isSearch && <span className="search">Indisponivel!</span>}
          </ContainerItems>
        </LeftItems>

        <Main>
          <Header>
            <DivNav>
              <Items>
                <BsLayoutSidebar size={24} />
              </Items>
              <Items  onClick={() => HandleVideoBackOrGo(false)}>
                <IoChevronBack size={24} />
              </Items>
              <Items onClick={() => HandleVideoBackOrGo(true)}>
                <IoChevronForward size={24} />
              </Items>
            </DivNav>

            <DivRoute>
              <Items>
                <span>Aa</span>
              </Items>
              <p ref={codeRef}>
                <IoLockClosed size={16} />
                {videoUrl}
              </p>
              <Items>
                <IoRefresh size={24} />
              </Items>
            </DivRoute>

            <DivNav>
              <Items>
                <IoShare size={24} />
              </Items>
              <Items>
                <IoAddOutline size={24} />
              </Items>
              <Items onClick={handleCopyCode}>
                <IoCopyOutline size={24} color="#FFF" />
              </Items>
              {isCopied && <span className="copy">Texto copiado!</span>}
            </DivNav>
          </Header>

          <ContainerVideo style={{ height: isContainerVideoExpanded ? "540px" : "100%" }}>
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing={isPlaying}
              controls={false}
            />
          </ContainerVideo>
        </Main>
      </Swapper>
    </Container>
  );
}

export default Home;
