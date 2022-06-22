import React from "react";
import { useRecoilState } from "recoil";
import { sentencesState } from "../atoms/sentences";

// Component props
type Props = {

};

// Component wrapper function // This component calculates reading time based on amount of words written via editor
export const EditorReadingTime: React.FC<Props> = ({  }) => {
    const [sentences,] = useRecoilState(sentencesState);


    let wordCount : number = 0;
    let readingTime : number | string = 0;

    // Split and count all words in sentences
    sentences.map((sentence) => {
      const words = sentence.content.split(' ');
      wordCount += words.length;
    })

    // Calculate est. reading time based on 250 words per minute.
    if(wordCount < 200) { readingTime = '< 0'}
    else {readingTime = Math.ceil(wordCount/250);}

    



    // Component end-return
    return (
    <div>
        <p>Wordcount : {wordCount}</p>
        <p>Estimated reading time {readingTime} minutes... </p>
    </div>
    )
}