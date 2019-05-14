import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import MetaTags from 'containers/MetaTags'
import HomePageUI from '../components/HomePageUI'
import { loadPage } from '../pages.service'
import { messages } from '../locale'

const mapState = ({ pages }, { match }) => ({
    content: pages.map['en/home'],
})

const mapProps = (dispatch) => ({
    loadPage: () => dispatch(loadPage('en', 'home')),
})

class HomePage extends React.Component {
    constructor (props) {
        super(props)
        const { content, loadPage } = this.props
        !content && loadPage()
    }

    render () {
        const { intl, content } = this.props

        return (
            <>
                {content ? <MetaTags {...content} /> : null}
                <HomePageUI
                    content={content}
                    messages={{
                        langIt: intl.formatMessage(messages.langIt),
                        langEn: intl.formatMessage(messages.langEn),
                    }}
                />
            </>
        )
    }
}

HomePage.propTypes = {
    loadPage: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
}

HomePage.defaultProps = {
    content: null,
}

export default injectIntl(connect(mapState, mapProps)(HomePage))

// Preload the next probable application chunk
require('../index').PagesList.preload()
require('components/Markdown').default.preload()
