import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//Popol start 레이아웃

const Text = styled.div`
    width:100%;
    padding:85px;
    font-size: 30px;
    font-weight: 500;
    color:black;
    background-color: rgba(0,0,0,0.3);
`;

const Body = styled.div`
    width:100%;
    height:100%;
    display:flex;
`;

const Section1 = styled.div`
    width:70%;
    height:100%;
    margin:auto;
`;

const Section2 = styled.div`
    width:20%;
    height:100%;
`;

const Paper = styled.div`
    width:100%;
    height: calc(100% * 1.5/ 10);
    border:1px solid red;
    display: flex;
    flex-wrap: wrap;
`;

const Paperpicture = styled.div`
    width:30%;
    height:calc(65% - 200px);
    background-color: rgba(0,0,0,0.3);
`;

const Skillarea = styled.div`
    width:70%;
    height:calc(65% - 200px);
    background-color: rgba(0,0,0,0.4);
    display: flex;
    flex-wrap:wrap;
`;

const Useskill = styled.div`
    width:100%;
    height:calc(35%);
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-wrap:wrap;
`;

const Picture = styled.div`
    width:100%;
    height: 80%;
    margin:auto;
    background-image: url(${require('../../assets/user.png').default});
    background-size:cover;
`;

const Skill = styled.div`
    width:100%;
    height:100%;
    background-image:url(${props => props.BackImg});
    background-position: center;
    background-size: ${props => props.BackSize};
    background-repeat: no-repeat;
    position: relative;
    right: -100%;
    opacity: 0;
    font-size:40px;
    color:rgba(0,0,0,0.8);
    font-weight: 900;
    transition:all 0.4s ${props => props.delay};
`;

const Skillbox = styled.div`
    width: 33.333%;
    height:50%;
    overflow: hidden;
`;

const Span = styled.span`
    position: relative;
    top: 25px;
    color:black;
`;

const Stick = styled.div`
    width:80%;
    height:40px;
    border:2px solid black;
    border-radius: 5px;
    position: relative;
    top:50px;
    margin:auto;
`;

const Result = styled.div`
    width:${props => props.Width};
    height:100%;
    background-color:#3fce02;
    border-radius: 2px;
    transition:1.7s ${props => props.delay};
`;

const Resulttxt = styled.span`
    position: absolute;
    text-align:center;
    color:black;
    text-indent:-10px;
    transform: translateY(7px);
    font-size:20px;
    transition: 1s ${props => props.delay};
`;

const Intro = styled.div`
    width:100%;;
    height:calc(100% * 4 / 10);
    background-color: blue;
`;

const TxtEvent = () => {
    const delay = 4200;
    const [state, setState] = useState({
        sumtxt: "유",
    })

    useEffect(() => {

        setTimeout(() => {
            setState({
                sumtxt: "유 ",
            })
        }, delay * 1 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현",
            })
        }, delay * 2 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준",
            })
        }, delay * 3 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준 입",
            })
        }, delay * 4 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준 입니",
            })
        }, delay * 5 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준 입니다",
            })
        }, delay * 6 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준 입니다.",
            })
        }, delay * 7 / 27 + 200)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준 입니다",
            })
        }, delay * 8 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준 입니",
            })
        }, delay * 9 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준 입",
            })
        }, delay * 10 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현 준",
            })
        }, delay * 11 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유 현",
            })
        }, delay * 12 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "유",
            })
        }, delay * 13 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준 ",
            })
        }, delay * 14 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비",
            })
        }, delay * 15 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가",
            })
        }, delay * 16 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되",
            })
        }, delay * 17 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어",
            })
        }, delay * 18 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있",
            })
        }, delay * 19 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있는",
            })
        }, delay * 20 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있는 유",
            })
        }, delay * 21 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있는 유현",
            })
        }, delay * 22 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있는 유현준",
            })
        }, delay * 23 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있는 유현준 입",
            })
        }, delay * 24 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있는 유현준 입니",
            })
        }, delay * 25 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있는 유현준 입니다",
            })
        }, delay * 26 / 27)

        setTimeout(() => {
            setState({
                sumtxt: "준비가 되어있는 유현준 입니다.",
            })
        }, delay)

    }, [])

    return state;
}

const UseInfo = ({ Delay = 'number' }) => {
    let start = null;
    let progress;
    const html5 = 95;
    const css3 = 95;
    const javascript = 40;
    const jquery = 80;
    const php = 30;
    const react = 40;

    const [state, setState] = useState({
        opacity: 0,
        right: 100,
        delay: 0,
        html5: 0,
        css3: 0,
        javascript: 0,
        jquery: 0,
        php: 0,
        react: 0,
        hvalue: 0,
        cvalue: 0,
        jvalue: 0,
        qvalue: 0,
        pvalue: 0,
        rvalue: 0,
    })

    useEffect(() => {

        setTimeout(() => {
            setState({
                opacity: 1,
                right: 0,
                delay: Delay,
                html5: 95,
                css3: 95,
                javascript: 40,
                jquery: 80,
                php: 30,
                react: 40,
                hvalue: 0,
                cvalue: 0,
                jvalue: 0,
                qvalue: 0,
                pvalue: 0,
                rvalue: 0,
            })
        }, 0)

        setTimeout(() => {
            const step = timestamp => {

                if (!start) {
                    start = timestamp;
                }
                progress = (timestamp - start) / 15;

                setState({
                    opacity: 1,
                    right: 0,
                    delay: Delay,
                    html5: html5,
                    css3: css3,
                    javascript: javascript,
                    jquery: jquery,
                    php: php,
                    react: react,
                    hvalue: (progress >= html5) ? html5 : parseInt(progress),
                    cvalue: (progress >= css3) ? css3 : parseInt(progress),
                    jvalue: (progress >= javascript) ? javascript : parseInt(progress),
                    qvalue: (progress >= jquery) ? jquery : parseInt(progress),
                    pvalue: (progress >= php) ? php : parseInt(progress),
                    rvalue: (progress >= react) ? react : parseInt(progress),
                })

                if (progress >= 95) {
                    return;
                }

                window.requestAnimationFrame(step);
            }
            window.requestAnimationFrame(step);
        }, Delay * 1000)
    }, [])

    const { sumtxt } = TxtEvent();

    return <>
        <Body>
            <Section1>
                <Paper>
                    <Text>사용가능 프로그램 및 숙련도</Text>
                    <Paperpicture>
                        <Picture style={{ opacity: state.opacity }} />
                        <div style={{ color: "black", fontSize: "20px", fontWeight: "600", marginTop: "40px" }}>{sumtxt}</div>
                    </Paperpicture>
                    <Skillarea>
                        <Skillbox>
                            <Skill
                                BackImg={require('../../assets/HTML5-logo.png').default}
                                BackSize={'95% 85%'}
                                delay={`${state.delay * 1 / 6}s`}
                                style={{ opacity: state.opacity, right: state.right }}
                            />
                        </Skillbox>
                        <Skillbox>
                            <Skill BackImg={require('../../assets/CSS3-logo.png').default}
                                BackSize={'55% 85%'}
                                delay={`${state.delay * 2 / 6}s`}
                                style={{ opacity: state.opacity, right: state.right }}
                            />
                        </Skillbox>
                        <Skillbox>
                            <Skill BackImg={require('../../assets/js-logo.png').default}
                                BackSize={'85% 85%'}
                                delay={`${state.delay * 3 / 6}s`}
                                style={{ opacity: state.opacity, right: state.right }}
                            />
                        </Skillbox>
                        <Skillbox>
                            <Skill BackImg={require('../../assets/jQuery-logo.png').default}
                                BackSize={'85% 95%'}
                                delay={`${state.delay * 4 / 6}s`}
                                style={{ opacity: state.opacity, right: state.right }}
                            />
                        </Skillbox>
                        <Skillbox>
                            <Skill BackImg={require('../../assets/PHP-logo.png').default}
                                BackSize={'85% 65%'}
                                delay={`${state.delay * 5 / 6}s`}
                                style={{ opacity: state.opacity, right: state.right }}
                            />
                        </Skillbox>
                        <Skillbox>
                            <Skill
                                BackImg={require('../../assets/React-logo.png').default}
                                BackSize={'75% 80%'}
                                delay={`${state.delay}s`}
                                style={{ opacity: state.opacity, right: state.right }}
                            >
                                React
                            </Skill>
                        </Skillbox>
                    </Skillarea>
                    <Useskill>
                        <Skillbox>
                            <Span> HTML5 </Span>
                            <Stick>
                                <Resulttxt delay={state.delay}>{`${state.hvalue}%`}</Resulttxt>
                                <Result
                                    Width={`${state.html5}%`}
                                    delay={`${state.delay}s`}
                                />
                            </Stick>
                        </Skillbox>
                        <Skillbox>
                            <Span> CSS3 </Span>
                            <Stick>
                                <Resulttxt>{`${state.cvalue}%`}</Resulttxt>
                                <Result
                                    Width={`${state.css3}%`}
                                    delay={`${state.delay}s`}
                                />
                            </Stick>
                        </Skillbox>
                        <Skillbox>
                            <Span> JavaScript </Span>
                            <Stick>
                                <Resulttxt>{`${state.jvalue}%`}</Resulttxt>
                                <Result
                                    Width={`${state.javascript}%`}
                                    delay={`${state.delay}s`}
                                />
                            </Stick>
                        </Skillbox>
                        <Skillbox>
                            <Span> jQuery </Span>
                            <Stick>
                                <Resulttxt>{`${state.qvalue}%`}</Resulttxt>
                                <Result
                                    Width={`${state.jquery}%`}
                                    delay={`${state.delay}s`}
                                />
                            </Stick>
                        </Skillbox>
                        <Skillbox>
                            <Span> PHP </Span>
                            <Stick>
                                <Resulttxt>{`${state.pvalue}%`}</Resulttxt>
                                <Result
                                    Width={`${state.php}%`}
                                    delay={`${state.delay}s`}
                                />
                            </Stick>
                        </Skillbox>
                        <Skillbox>
                            <Span> React </Span>
                            <Stick>
                                <Resulttxt>{`${state.rvalue}%`}</Resulttxt>
                                <Result
                                    Width={`${state.react}%`}
                                    delay={`${state.delay}s`}
                                />
                            </Stick>
                        </Skillbox>
                    </Useskill>
                </Paper>
                <Intro>
                    좌 중[main] 우 형태의 슬라이드와 슬라이드 넘김에 따라 변경되는 txt이벤트 설정
                </Intro>
            </Section1>
            <Section2>우</Section2>
        </Body>
    </>
}
export default UseInfo;