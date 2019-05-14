/**
 * Set all the language capabilities for the app.
 *
 * NOTE: the translations will come from the server, this is just for
 * the localized functions such dates or similar stuff.
 *
 * https://github.com/yahoo/react-intl/wiki#loading-locale-data
 */

import { addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'

addLocaleData([ ...en, ...it ])

