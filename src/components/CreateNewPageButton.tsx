import { useRecoilState } from "recoil";
import { activeIndex, createNewPage, StoryPages } from "../atoms/StoryPages";
import * as S from "../styles/screens/EditorStyles";

export const CreateNewPageButton = () => {
  const [pages, setPages] = useRecoilState(StoryPages);
  const [, setPageNum] = useRecoilState(activeIndex);
  const handleSetPages = () => {
    setPages(createNewPage(pages));
    setPageNum(pages.length);
  };

  return (
    <>
      <S.CreateNewPageButton onClick={handleSetPages}>
        new page
      </S.CreateNewPageButton>
    </>
  );
};
