import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 28px;
    margin-top: 20px;
`;

const Text = styled.span`
    color: ${props => props.color}
`;
const Message = ({ text, color }) => (
    <Container>
        <Text color={color}>{text}</Text>
    </Container>
);

Error.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Message;

