/**
 * This server setup uses hooks:
 * https://marcopeg.com/hooks/
 *
 * It's going to be a breeze to develop interconnected features!
 * Forget about messy code and huge routing folders, learn how
 * to think in features and organize your codebase around your real
 * business requirements instead ;-)
 */
import { registerAction, SETTINGS, FINISH } from '@marcopeg/hooks'
import { createHookApp, logBoot } from '@marcopeg/hooks'


/**
 * polyfill "fetch" in NodeJS
 * this is used by your client app to make requests while rendering on the server
 * */
require('es6-promise').polyfill()
require('isomorphic-fetch')


/**
 * App's Configuration
 * -------------------
 *
 * Most of the available services and features have default values that suit
 * the general needs (at least for me) and you may just like things the way they are.
 *
 * Anyway, this is the hook where you should grab any environment defined setting
 * and import into your application's context.
 *
 * Take a look at the `.env` file where I wrote some basic configuration that
 * many modules are able to read, and feel free to extend the `settings` object
 * with custom informations.
 *
 * Any new hook that you may need to register will receive those settings.
 */
registerAction({
    hook: SETTINGS,
    name: '♦ boot',
    handler: async ({ settings }) => {
        settings.express = {
            ssr: {
                // multilanguage cache policy
                shouldCache: (req) => (req.query.locale === undefined),
                getCacheKey: (req) => ({ value: [ req.url, req.locale.language, req.locale.region ] }),
            },
        }
    },
})


/**
 * Log hooks' boot tree in development
 * take a look at your console to visualize how each hook connects
 * with the rest of the application.
 */
process.env.NODE_ENV === 'development' && registerAction({
    hook: FINISH,
    name: '♦ boot',
    handler: () => logBoot(),
})


/**
 * App's Capabilities
 * ------------------
 *
 * Here is where you define all that your app can do:
 *
 * SERVICES are very generic and **business unaware** modules. They offer
 * capabilities that you generally need across very different applications,
 * like an Express app or a GraphQL endpoint.
 *
 * FEATURES are **business aware** modules that make sense only for this specific
 * application. Usually you write your data store models, routes or GraphQL
 * queries in a feature implementing one or more hooks.
 */
export default createHookApp({
    settings: {},
    services: [
        require('@forrestjs/core/services/env'),
        require('@forrestjs/core/services/logger'),
        require('@forrestjs/core/services/locale'),
        require('@forrestjs/core/services/express'),
        require('@forrestjs/core/services/express/cookie-helper'),
        require('@forrestjs/core/services/express/locale'),
        require('@forrestjs/core/services/express/graphql'),
        require('@forrestjs/core/services/express/ssr'),
    ],
    features: [
        require('./features/pages'),
    ],
})
