import { Container, Swapper, Main, ContainerVideo } from "./styles";

import ReactPlayer from "react-player";
import { useVideoFunctions } from "../../hook/UseVideoFunctions";
import ContainerLeftItems from "../../components/containerLeftItems";
import ContainerHeader from "../../components/header";

function Home() {
  const {
    isPlaying,
    isContainerVideoExpanded,
    videoUrl,
    isSearch,
    isCopied,
    codeRef,
    videoUrls,
    HandleVideoBackOrGo,
    HandleVideoToggle,
    HandleSearch,
    HandleCopyCode,
    HandleTogglePlay,
    HandleExpandContainerVideo,
  } = useVideoFunctions();

  return (
    <Container>
      <Swapper>
        <ContainerLeftItems
          isPlaying={isPlaying}
          isContainerVideoExpanded={isContainerVideoExpanded}
          videoUrl={videoUrl}
          isSearch={isSearch}
          isCopied={isCopied}
          codeRef={codeRef}
          videoUrls={videoUrls}
          HandleVideoBackOrGo={HandleVideoBackOrGo}
          HandleVideoToggle={HandleVideoToggle}
          HandleSearch={HandleSearch}
          HandleCopyCode={HandleCopyCode}
          HandleTogglePlay={HandleTogglePlay}
          HandleExpandContainerVideo={HandleExpandContainerVideo}
        />

        <Main>
          <ContainerHeader
            HandleVideoBackOrGo={HandleVideoBackOrGo}
            codeRef={codeRef}
            HandleCopyCode={HandleCopyCode}
            isCopied={isCopied}
            videoUrl={videoUrl}
          />

          <ContainerVideo
            style={{
              height: isContainerVideoExpanded ? "100%" : "540px",
              width: isContainerVideoExpanded ? "1060px" : "100%",
            }}
          >
            <div style={{width:"100%", height:"100%", borderRadius:"30px",}}>
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing={isPlaying}
              controls={false}
            />
            </div>
            <ReactPlayer
              className="ambient"
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
