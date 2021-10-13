import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size:12px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Img404 = styled.span`
    position: absolute;
    transform: translate(5px,-180px);
    color:#95a5a5;
`;

const Rating = styled.span`
    position:relative;
    bottom:20px;
    left:65px;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    &:hover{
        ${Image}{
            opacity: 0.3;
        }
        ${Img404}{
            color:white;
        }
        ${Rating}{
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size:10px;
    color:rgba(255,255,255,0.5);
`;

/* 이미지 정보는 url 이름 년도 별점 */
const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/react-flix/movie/${id}` : `/react-flix/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image
                    bgUrl={
                        imageUrl
                            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                            : require("../assets/noPosterSmall.png").default
                    }
                />
                {imageUrl ? '' : <Img404>Img Not Found</Img404>}
                <Rating>
                    <span role="img">
                        ⭐
                    </span>
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
)
Poster.propTypes = {
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
};

export default Poster;
