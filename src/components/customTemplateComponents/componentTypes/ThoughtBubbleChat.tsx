import React from "react";
import styled from "styled-components";

// Component props
type Props = {
    name? : string;
    text: string;
    variant? : string;
};

// Component wrapper function
export const ThoughtBubbleChat: React.FC<Props> = ({name,text, variant}) => {

    // Component end-return
    return (
        <Wrapper align={variant !== undefined ? variant : 'left'}>
            <Name align={variant !== undefined ? variant : 'left'}>{name}</Name>
            <Content>{text}</Content>
            {variant === undefined || variant === "left" ? 
            (<LeftDot></LeftDot>):
            (<RightDot></RightDot>)}
            
            
        </Wrapper>
    )
}


export const Wrapper = styled.div<{ align?: string }>`
    margin:2.5rem 3.125rem 10px 3.125rem;
    padding:1rem;
    background-color:white;
    border-radius:100px;
    border: 1px dotted white;
    max-width:50%;
    position:relative;
    float: ${(props) => props.align}
`;

export const LeftDot = styled.div`
    background-color:white;
    width:10px;
    height:10px;
    padding:0.3rem;
    border-radius:100px;
    position:absolute;
    top: 3.5rem;
    left:-1.5rem;
    box-shadow:-20px 10px 0px -5px rgba(255,255,255,255);
`;

export const RightDot = styled.div`
    background-color:white;
    width: 10px;
    height: 10px;
    padding: 0.3rem;
    border-radius:100px;
    position:absolute;
    top: 3.5rem;
    right: -1.5rem;
    box-shadow:20px 10px 0px -5px rgba(255,255,255,255);

`;
export const Name = styled.div<{align? : string}>`
    font-size:0.7rem;
    margin-left:10px;
    text-align: ${(props) => props.align}
`;

export const Content = styled.div`
    font-size:0.8rem;
    text-align:left;
    padding: 0.2rem;
`;