import React from "react";
import styled from "styled-components";

// Component props
type Props = {
    name? : string;
    text : string;

};

// Component wrapper function
export const SpanCardChat: React.FC<Props> = ({name, text}) => {

    // Component end-return
    return (
        <Wrapper>
            <Name>{name}</Name>
            <TextWrapper>
                <p>{text}</p>
            </TextWrapper>
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    text-align:center;
    margin-top:40px;
    box-shadow:0px 10px 10px 1px rgba(0,0,0,0.1);
    position:relative;
    display: inline-block;
    width:100%;
`;

export const Name = styled.h3`
    margin-left:5px;
    font-size: 0.7em;
    text-align:center;
`;

export const TextWrapper = styled.div`
    font-size: 0.8em;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color:white;
    flex-direction: column;
    width:100%;

    & p {
        text-align:center;
        margin:0.425em;
    }
`;