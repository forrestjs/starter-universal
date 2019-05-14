import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from './Layout'
import PageContent from './PageContent'
import { Footer } from './styles'

const Wrapper = styled.div`
    max-width: 750px;
    margin: 6vh auto;
`

const PageItemUI = ({ locale, content, messages }) => (
    <Layout>
        <Wrapper>
            <PageContent {...content} />
        </Wrapper>
        <Footer>
            <Link
                to={`/${locale}`}
                dangerouslySetInnerHTML={{ __html: messages.goToMenu }}
            />
        </Footer>
    </Layout>
)

PageItemUI.propTypes = {
    locale: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    messages: PropTypes.shape({
        goToMenu: PropTypes.string.isRequired,
    }).isRequired,
}

export default PageItemUI
