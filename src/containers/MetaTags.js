import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

const mapState = ({ app }) => ({
    name: app.name,
})

const MetaTags = ({ name, title, description, keywords }) => {
    return (
        <Helmet>
            {title ? <title>{`${title} | ${name}`}</title> : name}
            {description ? <meta name="description" content={`${description} | ${name}`} /> : null}
            {keywords ? <meta name="keywords" content={keywords.join(', ')} /> : null}
        </Helmet>
    )
}

MetaTags.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
}

MetaTags.defaultProps = {
    title: null,
    description: null,
    keywords: null,
}

export default connect(mapState)(MetaTags)
