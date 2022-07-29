import { useRecoilState, useRecoilValue } from "recoil";
import {
  activePageIndex,
  addPage,
  deletePage,
  Page,
} from "../../atoms/stories";
import { activeStoryStats, activeStory } from "../../selectors/stories";
import * as S from "../../styles/screens/EditorStyles";
import styled from "styled-components";

export const AddAndDeletePage = () => {
  const pages = useRecoilValue(activeStory).activeStoryPages;
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  const { numPages } = useRecoilValue(activeStoryStats);

  const handleAddPage = () => {
    const newPage: Page = {
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
    <Container>
      <S.Button onClick={handleAddPage}>Add page</S.Button>
      <S.Button onClick={handleDeleteCurrentPage}>Delete Page</S.Button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  left: 20%;
  margin-top: 2rem;
`;
