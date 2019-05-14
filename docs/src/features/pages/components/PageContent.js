import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'components/Markdown'
import styled from 'styled-components'

const Wrapper = styled.div`
    color: #333;

    h1 {
        font-size: 1.8rem;
        border-bottom: 1px solid #666;
        padding-bottom: 0.5rem;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }

    h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    
    h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    pre {
        background-color: #eee;
        padding: 15px;
    }

    p {
        line-height: 1.5em;
    }

    p + h2 {
        margin-top: 3rem;
    }

    a {
        color: #106cce;
    }

    hr {
        border: 0;
        height: 1px;
        background: #333;
        background-image: -webkit-linear-gradient(left, #ccc, #333, #ccc);
        background-image: -moz-linear-gradient(left, #ccc, #333, #ccc);
        background-image: -ms-linear-gradient(left, #ccc, #333, #ccc);
        background-image: -o-linear-gradient(left, #ccc, #333, #ccc);
    }

    figure {
        margin: 1rem 0;
        text-align: center;

        img {
            max-width: 100%;
            min-width: 100%;
        }

        figcaption {
            font-style: italic;
        }
    }

    figure.small {
        display: inline;
        text-align: left;

        img {
            min-width: auto;    
        }
        figcaption {
            display: none;
        }
    }
`

const PageContent = ({ body }) => (
    <Markdown
        source={body}
        wrapper={Wrapper}
    />
)

PageContent.propTypes = {
    body: PropTypes.string.isRequired,
}

export default PageContent
