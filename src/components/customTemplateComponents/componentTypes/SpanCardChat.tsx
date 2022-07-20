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
    margin-top:1.0rem;
    //box-shadow:0px 10px 10px 1px rgba(0,0,0,0.1);
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
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    background-color:none;
    flex-direction: row;
    width:100%;
    align-self:center;

    & p {
        text-align:center;
        margin:0.425em;
        width:50%;
        margin-left:auto;
        margin-right:auto;
    }
`;