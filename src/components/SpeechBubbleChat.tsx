import React from "react";
import styled from "styled-components";

// Component props
type Props = {
    name?: string;
    text: string;
    variant? : string;
};

// Component wrapper function
export const SpeechBubbleChat: React.FC<Props> = ({ name, text, variant }) => {


    // Component end-return
    return (
        <div>
            <Wrapper align={variant !== undefined ? variant : 'left'}>
                <Name align={variant !== undefined ? variant : 'left'}>{name}</Name>
                <Text>
                    {text}
                </Text>
                {variant === undefined || variant === 'left' ? 
                (<LeftPoint></LeftPoint>):
                (<RightPoint></RightPoint>)}
            </Wrapper>
        </div>
    )
}

export const Wrapper = styled.div<{ align? : string }>`
    margin-top:40px;
    margin-left:50px;
    margin-right:50px;
    padding: 0.5rem;
    background-color: white; 
    position:relative;
    border-radius:20px;
    max-width:70%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.05);
    z-index: 0;
    float: ${(props) => props.align};
`;

export const LeftPoint = styled.div`
    width:0;
    height:0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 45px solid white;
    position: absolute;
    left: -1rem;
    bottom:-1.2rem;
    transform: rotate(60deg);
    z-index: -1;
`;

export const RightPoint = styled.div`
    width:0;
    height:0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 45px solid white;
    position: absolute;
    right: -1rem;
    bottom:-1.2rem;
    transform: rotate(300deg);
    z-index: -1;
`;
export const Name = styled.h3<{align? : string}>`
    font-size:0.7rem;
    margin-left:10px;
    margin-right:10px;
    text-align: ${(props) => props.align};
`;

export const Text = styled.div`
    flex-direction: column;
    font-size:0.8rem;
    padding: 0.2rem;
`;

