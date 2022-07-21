import { useRecoilState, useRecoilValue } from "recoil";
import {
  activePageIndex,
  addPage,
  deletePage,
  PageProps,
} from "../../atoms/stories";
import { activeStoryStats, activeStory } from "../../selectors/stories";
import * as S from "../../styles/screens/EditorStyles";

export const UpdatePageDisplay = () => {
  const pages = useRecoilValue(activeStory).activeStoryPages;
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  const { numPages } = useRecoilValue(activeStoryStats);

  const handleAddPage = () => {
    const newPage: PageProps = {
      id: pages.length + 1,
      messages: [],
    };
    addPage(newPage);
    setPageNum(numPages);
    console.log(pages);
  };

  const handleDeleteCurrentPage = () => {
    if (pageNum + 1 === pages.length && pageNum !== 0) {
      setPageNum(pageNum - 1);
    }
    deletePage(pages[pageNum]);
    console.log("pn: " + pageNum);
  };

  return (
    <>
      <S.Button onClick={handleAddPage}>new page</S.Button>
      <S.Button onClick={handleDeleteCurrentPage}>Delete Page</S.Button>
    </>
  );
};
