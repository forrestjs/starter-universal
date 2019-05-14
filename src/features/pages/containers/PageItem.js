import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import MetaTags from 'containers/MetaTags'
import { loadPage } from '../pages.service'
import PageItemUI from '../components/PageItemUI'
import { messages } from '../locale'

const mapState = ({ pages }, { match }) => {
    const key = `${match.params.locale}/${match.params.slug}`

    return {
        locale: match.params.locale,
        slug: match.params.slug,
        isLoading: !(key in pages.map),
        content: pages.map[key],
    }
}

const mapProps = (dispatch) => ({
    loadPage: (locale, slug) => dispatch(loadPage(locale, slug)),
})

class PageItem extends React.Component {
    constructor (props) {
        super(props)
        const { content, locale, slug, loadPage } = this.props
        !content && loadPage(locale, slug)
    }

    render () {
        const { isLoading, content, intl } = this.props

        if (isLoading) {
            return (
                <div>{'loading'}</div>
            )
        }

        if (!content) {
            return (
                <div>{messages.notFound}</div>
            )
        }

        return (
            <>
                {content ? <MetaTags {...content} /> : null}
                <PageItemUI
                    {...this.props}
                    messages={{
                        goToMenu: intl.formatMessage(messages.goToMenu),
                        notFound: intl.formatMessage(messages.notFound),
                    }}
                />
            </>
        )
    }
}

PageItem.propTypes = {
    intl: intlShape.isRequired,
    loadPage: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    locale: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
}

PageItem.defaultProps = {
    content: null,
}

export default injectIntl(connect(mapState, mapProps)(PageItem))
