import { Header, Items, DivRoute, DivNav } from "./styles";

import {
  IoChevronBack,
  IoChevronForward,
  IoLockClosed,
  IoRefresh,
  IoShare,
  IoAddOutline,
  IoCopyOutline,
} from "react-icons/io5";
import { BsLayoutSidebar } from "react-icons/bs";

function ContainerHeader(props) {

  const {
    videoUrl,
    isCopied,
    codeRef,
    HandleVideoBackOrGo,
    HandleCopyCode,
  } = props;

  return (
    <Header>
      <DivNav>
        <Items>
          <BsLayoutSidebar size={24} />
        </Items>
        <Items onClick={() => HandleVideoBackOrGo(false)}>
          <IoChevronBack size={24} />
        </Items>
        <Items onClick={() => HandleVideoBackOrGo(true)}>
          <IoChevronForward size={24} />
        </Items>
      </DivNav>

      <DivRoute>
        <button>
          <span>Aa</span>
        </button>
        <p ref={codeRef}>
          <IoLockClosed size={16} />
          {videoUrl}
        </p>
        <button>
          <IoRefresh size={24} />
        </button>
      </DivRoute>

      <DivNav>
        <Items>
          <IoShare size={24} />
        </Items>
        <Items>
          <IoAddOutline size={24} />
        </Items>
        <Items onClick={HandleCopyCode}>
          <IoCopyOutline size={24} color="#FFF" />
        </Items>
        {isCopied && <span className="copy">Texto copiado!</span>}
      </DivNav>
    </Header>
  );
}

export default ContainerHeader;


/*

*/