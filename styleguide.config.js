const path = require('path')

module.exports = {
    /**
     * Include all the (almost) pure component examples here:
     */
    sections: [
        {
            name: 'Components',
            description: 'Application level dumb components',
            components: [
                'src/components/Markdown/Markdown.js',
            ],
        },
        {
            name: 'Features',
            description: 'Produce examples for each feature',
            sections: [
                {
                    name: 'features/locale',
                    components: [
                        'src/features/locale/LocaleSelectorUI.js',
                    ],
                },
                {
                    name: 'features/pages',
                    components: [
                        'src/features/pages/components/HomePageUI.js',
                        'src/features/pages/components/PagesListUI.js',
                        'src/features/pages/components/PageItemUI.js',
                        'src/features/pages/components/PageContent.js',
                    ],
                },
            ],
        },
    ],

    /**
     * Customize the styleguide appearance.
     */
    styles: {
        Section: {
            root: {
                marginBottom: '15vh',
            },
        },
    },

    /**
     * Inject utility components into the Styleguide context
     * this is really useful for providing a component with
     * some sort of state or routing capabilities
     */
    context: {
        ContextProvider: path.join(__dirname, 'src/lib/ContextProvider'),
    },

    /**
     * Inject the default CSS.
     * You may need to add more of those, but it's likely that you will
     * prefer to go the `styled-components` way.
     */
    require: [
        path.join(__dirname, 'src/index.css'),
    ],

    /**
     * CRA provides a fully functioning webpack config that is good for
     * the `/components` folder but doesn't work in any other context
     * out of the box!
     *
     * The trick is to simply provide this configuration back to Styleguidist.
     */
    webpackConfig: require('react-scripts-rewired/config/webpack.config.dev.extend'),
}
