import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import LocaleSelectorUI from './LocaleSelectorUI'
import { messages } from './locale'

const LocaleSelector = ({ intl }) => (
    <LocaleSelectorUI messages={{
        it: intl.formatMessage(messages.it),
        en: intl.formatMessage(messages.en),
    }} />
)

LocaleSelector.propTypes = {
    intl: intlShape.isRequired,
}

export default injectIntl(LocaleSelector)
