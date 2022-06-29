import { useRecoilState, useRecoilValue } from "recoil";
import { activeIndex, createNewPage, deletePage, story } from "../atoms/story";
import { getDisplayScreenLength } from "../selectors/story";
import * as S from "../styles/screens/EditorStyles";

export const UpdatePageDisplay = () => {
  const [pages, setPages] = useRecoilState(story);
  const [pageNum, setPageNum] = useRecoilState(activeIndex);
  const numPages = useRecoilValue(getDisplayScreenLength);
  const handleSetPages = () => {
    setPages(createNewPage(pages));
    console.log(pageNum);
    setPageNum(numPages);
  };

  const handleDeleteCurrentPage = () => {
    if (pageNum + 1 === pages.pages.length && pageNum !== 0) {
      setPageNum(pageNum - 1);
    }
    setPages(deletePage(pages, pages.pages[pageNum]));
  };

  return (
    <>
      <S.CreateNewPageButton onClick={handleSetPages}>
        new page
      </S.CreateNewPageButton>
      <S.DeletePageButton onClick={handleDeleteCurrentPage}>
        Delete Page
      </S.DeletePageButton>
    </>
  );
};
