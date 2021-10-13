import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Components/Section';
import styled from 'styled-components';
import Loader from '../../Components/Loader'
import Message from '../../Components/Message'
import Poster from '../../Components/Poster';
import Helmet from 'react-helmet';
import Header from '../../Components/Header';
import FlixStyle from "../../Components/GlobalStyles"

const Container = styled.div`
    padding: 20px;
    margin-top:50px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <>
                <Helmet>
                    <title>TV | Reactflix</title>
                </Helmet>
                <Header />
                <FlixStyle />
            </>
            <>
                {topRated && topRated.length > 0 && (
                    <Section title='Top Rated Shows'>
                        {topRated.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.name}
                                rating={movie.vote_average}
                                year={movie.first_air_date.substring(0, 4)}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title='Popular Shows'>
                        {popular.map(show => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                imageUrl={show.poster_path}
                                title={show.name}
                                rating={show.vote_average}
                                year={show.first_air_date.substring(0, 4)}
                            />
                        ))}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title='airingToday Shows'>
                        {airingToday.map(show => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                imageUrl={show.poster_path}
                                title={show.name}
                                rating={show.vote_average}
                                year={show.first_air_date.substring(0, 4)}
                            />
                        ))}
                    </Section>
                )}
                {error && <Message color='#e74c3c' text={error} />}
            </>
        </Container>
    );

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TVPresenter;