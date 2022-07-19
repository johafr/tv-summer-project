import React from "react";
import styled from "styled-components";

// Component props
type Props = {
    name? : string;
    text: string;
};

// Component wrapper function
export const ThoughtBubbleChat: React.FC<Props> = ({name,text}) => {

    // Component end-return
    return (
        <Wrapper>
            <Name>{name}</Name>
            <Content>{text}</Content>
            <Dot></Dot>
        </Wrapper>
    )
}


export const Wrapper = styled.div`
    margin:40px 10px 10px 50px;
    padding:1rem;
    background-color:white;
    border-radius:100px;
    max-width:50%;
    position:relative;
`;

export const Dot = styled.div`
    background-color:white;
    width:10px;
    height:10px;
    padding:0.3rem;
    border-radius:100px;
    position:absolute;
    top: 3rem;
    left:-1.5rem;
    box-shadow:-20px 10px 0px -5px rgba(255,255,255,255);
`;
export const Name = styled.div`
    font-size:0.7rem;
    text-align:left;
    margin-left:10px;
`;
export const Content = styled.div`
    font-size:0.8rem;
    text-align:center;
`;