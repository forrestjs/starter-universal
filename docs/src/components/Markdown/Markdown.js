import React from 'react'
import PropTypes from 'prop-types'
import Remarkable from 'remarkable'
import imgClassPlugin from './plugin-img-class'

Markdown.propTypes = {
    source: PropTypes.string,
    wrapper: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),
    options: PropTypes.object,
}

Markdown.defaultProps = {
    source: '',
    wrapper: 'div',
    options: {
        html: true,
        xhtmlOut: true,
        typographer: true,
    },
}

function Markdown ({ source, wrapper, options }) {
    const md = new Remarkable(options)
    md.use(imgClassPlugin)

    return React.createElement(wrapper, {
        dangerouslySetInnerHTML: {
            __html: md.render(source),
        },
    })
}

export default Markdown
