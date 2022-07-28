import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePageIndex, Message } from "../../atoms/stories";
import { activePage, activeStoryStats } from "../../selectors/stories";
import { screenDimensions } from "../../atoms/screenDimensions";
import * as S from "../../styles/components/MobileView";
import { InteractionSwitch } from "./InteractionSwitch";
import { MobileViewComponent } from "./MobileViewComponent";

export const MobileView: React.FC = () => {
  //Recoil values
  const [pageNum, setPageNum] = useRecoilState(activePageIndex);
  const { numPages } = useRecoilValue(activeStoryStats);

  const screen = useRecoilValue(screenDimensions);
  //Recoil selectors
  const currentPage = useRecoilValue(activePage);
  const numberOfPages = useRecoilValue(activeStoryStats).numPages!;

  const handleGoLeft = () => {
    if (pageNum !== 0) {
      setPageNum(pageNum! - 1);
    }
  };

  const handleGoRight = () => {
    if (pageNum! < numberOfPages - 1) {
      setPageNum(pageNum! + 1);
    }
  };

  return (
    <>
      {screen.winWidth > 650 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MobileViewComponent
            handleGoLeft={handleGoLeft}
            currentPage={currentPage}
            callbackFunction={(card: Message) => (
              <InteractionSwitch
                key={card.id}
                id={card.id}
                person={card.person}
                content={card.content}
                format={card.format}
              />
            )}
            handleGoRight={handleGoRight}
            pageNum={pageNum}
            numPages={numPages}
          />
        </div>
      ) : (
        <S.ScreenMobile className="screen">
          <S.GoLeftTouchDiv onClick={handleGoLeft} />
          <S.OutputScreenMobile className="output-screen">
            <S.ContentDivMobile className="content-div">
              {currentPage?.messages.map((card: Message) => (
                <InteractionSwitch
                  key={card.id}
                  id={card.id}
                  person={card.person}
                  content={card.content}
                  format={card.format}
                />
              ))}
            </S.ContentDivMobile>
          </S.OutputScreenMobile>
          <S.GoRightTouchDiv onClick={handleGoRight} />
        </S.ScreenMobile>
      )}
    </>
  );
};
