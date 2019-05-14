import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import MetaTags from 'containers/MetaTags'
import { loadPages } from '../pages.service'
import PagesListUI from '../components/PagesListUI'
import { messages } from '../locale'

const mapState = ({ pages }, { match }) => ({
    locale: match.params.locale,
    pages: pages.list[match.params.locale],
    content: pages.map[`${match.params.locale}/index`],
})

const mapProps = (dispatch) => ({
    loadPages: (locale) => dispatch(loadPages(locale)),
})

class PagesList extends React.Component {
    constructor (props) {
        super(props)
        const { pages, locale, loadPages } = this.props
        !pages && loadPages(locale)
    }

    render () {
        const { pages, content, intl } = this.props

        if (!pages) {
            return (
                <div>
                    {'loading'}
                </div>
            )
        }

        return (
            <>
                {content ? <MetaTags {...content} /> : null}
                <PagesListUI
                    {...this.props}
                    messages={{
                        goToHome: intl.formatMessage(messages.goToHome),
                        listTitle: intl.formatMessage(messages.listTitle),
                    }}
                />
            </>
        )
    }
}

PagesList.propTypes = {
    intl: intlShape.isRequired,
    loadPages: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    pages: PropTypes.array,
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
}

PagesList.defaultProps = {
    pages: null,
    content: null,
}

export default injectIntl(connect(mapState, mapProps)(PagesList))

// Preload the next probable application chunk
require('../index').PageItem.preload()

