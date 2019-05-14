import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import PageContent from './PageContent'
import { Subtitle, List, ResponsiveWrapper, Footer } from './styles'

const PagesListUI = ({ locale, pages, content, messages }) => (
    <Layout>
        <ResponsiveWrapper>
            {content ? <PageContent {...content} /> : null}
            {pages.length ? (
                <div>
                    <Subtitle>{messages.listTitle}</Subtitle>
                    <List>
                        {pages.map(page => (
                            <li key={page.slug}>
                                <Link to={`/${locale}/${page.slug}`}>{page.title}</Link>
                            </li>
                        ))}
                    </List>
                </div>
            ) : null}
        </ResponsiveWrapper>
        <Footer>
            <Link
                to={'/'}
                dangerouslySetInnerHTML={{ __html: messages.goToHome }}
            />
        </Footer>
    </Layout>
)

PagesListUI.propTypes = {
    loadPages: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    content: PropTypes.object,
    pages: PropTypes.arrayOf(PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
    messages: PropTypes.shape({
        listTitle: PropTypes.string.isRequired,
        goToHome: PropTypes.string.isRequired,
    }).isRequired,
}

PagesListUI.defaultProps = {
    pages: null,
    content: null,
}

export default PagesListUI
