import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import { List } from './styles'
import PageContent from './PageContent'

const HomePageUI = ({ content, messages }) => (
    <Layout>
        {content ? (
            <PageContent {...content} />
        ) : null}
        <List>
            <li><Link to="/it">{messages.langIt}</Link></li>
            <li><Link to="/en">{messages.langEn}</Link></li>
        </List>
    </Layout>
)

HomePageUI.propTypes = {
    content: PropTypes.object,
    messages: PropTypes.shape({
        langIt: PropTypes.string.isRequired,
        langEn: PropTypes.string.isRequired,
    }).isRequired,
}

HomePageUI.defaultProps = {
    content: null,
}

export default HomePageUI
