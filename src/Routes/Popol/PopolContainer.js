import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Presenter1 from './Presenter1';

const Container = styled.div`
        position:absolute;
        width:100%;
        height:${window.innerHeight * 7}px;
        background-color:rgba(215,215,215,1);
        overflow: hidden;
        color:white;
        text-align: center;
    `;

const Top = styled.div`
        position:fixed;
        width:100%;
        height: 200px;
        background-color:rgba(44, 130, 201, 0.4);
        z-index:2;
        border-bottom:1px solid black;
        transition: all 1s linear ${props => props.delay};
    `;

const Left = styled.div`
        position:fixed;
        width:20%;
        height:calc(100% - 200px);
        top:200px;
        background-color:rgba(44, 130, 201 , 1);
        z-index:2;
        transition: all 1s linear ${props => props.delay};
    `;

const Right = styled.div`
        position:fixed;
        width:20%;
        height:calc(100% - 200px);
        top:200px;
        background-color:rgba(44, 130, 201, 1);
        z-index:2;
        transition: all 1s linear ${props => props.delay};
    `;

//door 이동은 right left 와 함께 이동하며 따라왔다가 이동 완료시 그때 남은 30%를 이동시킨다  scale사용해서 파츠 맞추는 형식도 가능해보임
const Rightdoor = styled.div`
        position:fixed;
        height:calc(100% - 200px);
        top:200px;
        background-color: blueviolet;
        z-index: 1;
        transition: all 0.7s linear ${props => props.delay};
    `;

const Leftdoor = styled.div`
        position:fixed;
        width:calc(30%);
        height:calc(100% - 200px);
        top:200px;
        background-color: blueviolet;
        z-index: 1;
        transition: all 0.7s linear ${props => props.delay};
    `;

const BodyEvent = () => {
    const [state, setState] = useState({
        top: -200,
        left: -20,
        leftdoor: -30,
        right: -20,
        rightdoor: -30,
        Wrightdoor: "calc(30%)",
        delay: 2000,
    })

    useEffect(() => {

        setState({
            left: -20,
            right: -20,
            leftdoor: -30,
            rightdoor: -30,
            top: -200,
            Wrightdoor: "calc(30%)",
        })

    }, [])

    return <>
        <Top style={{ top: `${state.top}px` }} delay={state.delay} />
        <Left style={{ left: `${state.left}%` }} delay={state.delay * 6 / 10} />
        <Leftdoor style={{ left: `${state.leftdoor}%` }} delay={state.delay * 2 / 10} />
        <Right style={{ right: `${state.right}%` }} delay={state.delay * 6 / 10} />
        <Rightdoor style={{ right: `${state.rightdoor}%`, width: `${state.Wrightdoor}` }} delay={state.delay * 2 / 10} />
    </>
}


const PopolContainer = () => {

    const Event = BodyEvent()

    return <Container key={Event.key}>
        {Event}
        <Presenter1 Delay={2} />
    </Container>
}
export default PopolContainer;
