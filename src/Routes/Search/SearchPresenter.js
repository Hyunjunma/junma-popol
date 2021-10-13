import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message'
import Poster from '../../Components/Poster';
import Helmet from 'react-helmet';
import Header from '../../Components/Header';
import FlixStyle from '../../Components/GlobalStyles';

const Container = styled.div`
    padding:20px;
    margin-top:50px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width:100%;
`;

const Input = styled.input`
    all: unset;
    font-size:28px;
    width:100%;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    loading,
    searchTerm,
    handleSubmit,
    updateTerm,
    error
}) => (
    <Container>
        <Header />
        <FlixStyle />
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search Movies or TV Shows..."
                value={searchTerm}
                onChange={updateTerm}
            />
        </Form>
        {loading ? (
            <Loader />
        ) : (
            <>
                <>
                    <Helmet>
                        <title>Search | Reactflix</title>
                    </Helmet>
                </>
                <>
                    {movieResults && movieResults.length > 0 && (
                        <Section title="Movie Results">
                            {movieResults.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    year={movie.release_date ? movie.release_date.substring(0, 4) : ""} /* some 값에서 년만 ㅈ랄가져옴 */
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}
                    {tvResults && tvResults.length > 0 && (
                        <Section title="TV Show Results">
                            {tvResults.map(show => (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.name}
                                    rating={show.vote_average}
                                    year={show.first_air_date ? show.first_air_date.substring(0, 4) : ""}
                                />
                            ))}
                        </Section>
                    )}
                    {error && <Message color='#95a5a5' text={error} />}
                    {tvResults &&
                        movieResults &&
                        tvResults.length === 0 &&
                        movieResults.length === 0 && (
                            <Message color='#95a5a5' text={`Nothing Found For : "${searchTerm}"`} />
                        )}
                </>
            </>
        )}
    </Container>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;