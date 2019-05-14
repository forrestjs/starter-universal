import React from 'react'
import PropTypes from 'prop-types'
import { SetLocaleLink as Link } from '@forrestjs/core/features/locale'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;

    & a {
        color: #fff;
        text-decoration: none;
    }

    & a.active {
        text-decoration: underline;
    }
`

const LocaleSelectorUI = ({ messages }) => (
    <Wrapper>
        <Link
            to="en_GB"
            activeClassName={'active'}
        >
            {messages.en}
        </Link>
        {' | '}
        <Link
            to="it_IT"
            activeClassName={'active'}
        >
            {messages.it}
        </Link>
    </Wrapper>
)

LocaleSelectorUI.propTypes = {
    messages: PropTypes.shape({
        it: PropTypes.string.isRequired,
        en: PropTypes.string.isRequired,
    }).isRequired,
}

export default LocaleSelectorUI
