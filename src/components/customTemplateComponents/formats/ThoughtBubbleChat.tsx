import React from "react";
import styled from "styled-components";

// Component props
type Props = {
    name? : string;
    content: string;
    variant? : string;
};

// Component wrapper function
export const ThoughtBubbleChat: React.FC<Props> = ({name,content, variant}) => {

    // Component end-return
    return (
        <div style ={{width:'100%',backgroundColor:'transparent'}}>
        <Wrapper align={variant !== undefined ? variant : 'left'}>
            <Name align={variant !== undefined ? variant : 'left'}>{name}</Name>
            <Content>{content}</Content>
            {variant === undefined || variant === "left" ? 
            (<LeftDot></LeftDot>):
            (<RightDot></RightDot>)}
        </Wrapper>
        </div>
    )
}


export const Wrapper = styled.div<{ align?: string }>`
    margin:5% 10.5% 10px 10.5%;
    padding:1.5%;
    background-color:white;
    border-radius:100px;
    border: 1px dotted white;
    min-width:30%;
    max-width:70%;
    position:relative;
    float: ${(props) => props.align}
`;

export const LeftDot = styled.div`
    background-color:white;
    width:0.002rem;
    height:0.002rem;
    padding:0.3rem;
    border-radius:100%;
    position:absolute;
    top: 80.0%;
    left:-5%;
    box-shadow:-12px 10px 0px -2px rgba(255,255,255,255);
`;

export const RightDot = styled.div`
    background-color:white;
    width: 1px;
    height: 1px;
    padding: 0.3rem;
    border-radius:100px;
    position:absolute;
    top: 80%;
    right: -5%;
    box-shadow:20px 10px 0px -5px rgba(255,255,255,255);

`;
export const Name = styled.div<{align? : string}>`
    font-size:0.5rem;
    margin-left:10px;
    text-align: ${(props) => props.align}
`;

export const Content = styled.div`
    font-size:0.6rem;
    text-align:left;
    padding: 0.2rem;
`;