import {
  Container,
  Swapper,
  Main,
  ContainerVideo,
  TitleMobile,
  DivMob,
} from "./styles";

import { BiMessageError } from "react-icons/bi";

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
      <DivMob>
        <BiMessageError size={58} color="#ff0000" />
        <TitleMobile>
          Para uma melhor experiência, utilize uma tela maior.
        </TitleMobile>
      </DivMob>

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
              height: isContainerVideoExpanded ? "660px" : "540px",
              width: isContainerVideoExpanded ? "1060px" : "960px",
            }}
          >
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing={isPlaying}
              controls={true}
            />
          </ContainerVideo>
        </Main>
      </Swapper>
    </Container>
  );
}

export default Home;

