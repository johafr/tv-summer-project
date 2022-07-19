import React from "react";
import styled from "styled-components";

// Component props
type Props = {
    name?: string;
    text: string;
    align? : string;
};

// Component wrapper function
export const SpeechBubbleChat: React.FC<Props> = ({ name, text }) => {

    // Component end-return
    return (
        <div>
            <Wrapper>
                <Name>{name}</Name>
                <Point></Point>
                <Text>
                    {text}
                </Text>
            </Wrapper>
        </div>
    )
}

export const Wrapper = styled.div`
    margin-top:40px;
    margin-left:50px;
    padding: 2rem;
    background-color: white; 
    position:relative;
    border-radius:20px;
    display: inline-flex;
    max-width:70%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.05);
`;

export const Point = styled.div`
    width:0;
    height:0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 45px solid white;
    position: absolute;
    left: -1rem;
    bottom:-1.3rem;
    transform: rotate(60deg);
    overflow:hidden;
`;
export const Name = styled.h3`
    margin-top:-1.2rem;
    font-size:0.7rem;
    margin-left:-10px; 
    display: flex;
    position:absolute;
    width:90%;
`;
export const Text = styled.div`
    flex-direction: column;
    font-size:0.8rem;`;
