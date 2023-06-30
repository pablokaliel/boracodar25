import { LeftItems, ContainerItems, Items } from "./styles";

import {
  IoPlayCircleOutline,
  IoAccessibilityOutline,
  IoAlbumsOutline,
  IoSearchOutline,
  IoPauseCircleOutline,
} from "react-icons/io5";

function ContainerLeftItems(props) {
  
  const {
    isPlaying,
    isSearch,
    HandleVideoToggle,
    HandleSearch,
    HandleTogglePlay,
    HandleExpandContainerVideo,
  } = props;

  return (
    <LeftItems>
      <ContainerItems>
        <Items className="active" onClick={HandleTogglePlay}>
          {isPlaying ? (
            <IoPauseCircleOutline size={24} />
          ) : (
            <IoPlayCircleOutline size={24} />
          )}
        </Items>
        <Items onClick={HandleExpandContainerVideo}>
          <IoAccessibilityOutline size={24} />
        </Items>
        <Items>
          <IoAlbumsOutline size={24} onClick={HandleVideoToggle} />
        </Items>
        <Items onClick={HandleSearch}>
          <IoSearchOutline size={24} />
        </Items>
        {isSearch && <span className="search">Indisponivel!</span>}
      </ContainerItems>
    </LeftItems>
  );
}

export default ContainerLeftItems;
