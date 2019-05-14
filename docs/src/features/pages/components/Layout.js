import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    text-align: left;
    margin: 1vh 4vw;
`

const Layout = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

Layout.propTypes = {
    children: PropTypes.any.isRequired, // eslint-disable-line
}

export default Layout
