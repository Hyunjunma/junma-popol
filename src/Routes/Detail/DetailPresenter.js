import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader'
import Message from '../../Components/Message';
import Helmet from 'react-helmet';
import FlixStyle from '../../Components/GlobalStyles';

const Container = styled.div`
    height:calc(100vh - 50px);
    width:100%;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position:center center;
    filter: blur(3px);
    opacity:0.5;
    z-index:0px;
`;

const Content = styled.div`
    display:flex ;
    width: 100%;
    height: 100%;
    position: relative;
    z-index:1;
`;

const Cover = styled.div`
    width:30%;
    height:100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position:center center;
    border-radius: 10px;
    opacity: ${props => props.opacity};
    filter: blur(${props => props.opacity === 0.8 ? props => props.opacity + 1.5 : 0}px);
`;

const Data = styled.div`
    width:70%;
    margin-left:20px;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
    display: block;
`;

const ItemContainer = styled.span`

`;

const Item = styled.span`

`;

const Divider = styled.span`
 margin:0px 10px;
`;

const Overview = styled.p`
    font-size:12px;
    opacity: 0.7;
    line-height: 1.5;
    width:50%;
    margin-top:30px;
`;

const Error = styled.span`
    position:absolute;
    top:20px;
    left:0;
    text-align: center;
    width:30%;
    color:#e74c3c;
    opacity:0.7;
    font-size:30px;
    font-weight: 700;
`;


const DetailPresenter = ({ result, error, loading }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <>
                <Helmet>
                    <title>{result.original_title
                        ? result.original_title
                        : result.original_name
                    }</title>
                </Helmet>
                <FlixStyle />
            </>
            <>
                <Backdrop
                    bgImage={
                        result.backdrop_path ?
                            `https://image.tmdb.org/t/p/original${result.backdrop_path}` :
                            result.poster_path ?
                                `https://image.tmdb.org/t/p/original${result.poster_path}` :
                                require('../../assets/noPosterSmall.png').default
                    }
                />
                <Content>
                    <Cover
                        bgImage={
                            result.poster_path
                                ?
                                `https://image.tmdb.org/t/p/original${result.poster_path}` :
                                result.backdrop_path ?
                                    `https://image.tmdb.org/t/p/original${result.backdrop_path}` :
                                    require('../../assets/noPosterSmall.png').default


                        }
                        opacity={
                            result.poster_path ?
                                1 : 0.8
                        }
                    />
                    {result.poster_path ? null : <Error>Img Not Found</Error>}
                    <Data>
                        <Title>{result.original_title
                            ? result.original_title
                            : result.original_name
                        }
                        </Title>
                        <ItemContainer>
                            <Item>
                                {result.release_date
                                    ?
                                    <>
                                        {result.release_date ? result.release_date.substring(0, 4) : 'Not Found'}
                                    </>
                                    : result.first_air_date ? result.first_air_date.substring(0, 4) : 'Not Found'
                                }
                            </Item>
                            <Divider>●</Divider>
                            <Item>
                                {result.runtime ?
                                    `Running Time : ${result.runtime || result.episode_run_time[0]} min`
                                    : 'Not Found'

                                }
                            </Item>
                            <Divider>●</Divider>
                            <Item>
                                {result.genres.map(genre => genre.name !== null) ?
                                    <>{
                                        result.genres && /* index값이 갯수-1(배열의 최후값)인경우 / 부호를 붙이지 않음 */
                                        result.genres.map((genre, index) => index === result.genres.length - 1
                                            ? genre.name
                                            : `${genre.name} /`
                                        )}
                                    </>
                                    : 'Not Found'
                                }
                            </Item>
                        </ItemContainer>
                        <Overview>{result.overview}</Overview>
                    </Data>
                </Content>
                {error && <Message color='#e74c3c' text={error} />}
            </>
        </Container>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;
