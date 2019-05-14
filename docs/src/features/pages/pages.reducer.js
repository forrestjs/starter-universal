export const initialState = {
    isLoading: false,
    hasLoaded: false,
    errorMsg: null,

    // used for listing the available pages
    // each node is a locale identifier that contains an array
    list: {},

    // used to show a single page
    // it uses the `locale/slug` as unique identifier
    map: {},
}

/**
* Actions
*/

export const LOAD_START = 'loadStart@pages'
export const LOAD_FAILED = 'loadFailed@pages'
export const SET_LIST = 'setList@pages'
export const SET_ITEM = 'setItem@pages'

export const loadStart = () => ({
    type: LOAD_START,
})

export const loadFailed = errorMsg => ({
    type: LOAD_FAILED,
    payload: errorMsg,
})

export const setList = (locale, items) => ({
    type: SET_LIST,
    payload: { locale, items },
})

export const setItem = (locale, slug, item) => ({
    type: SET_ITEM,
    payload: { locale, slug, item },
})

/**
* Handlers
*/

export const actionHandlers = {
    [LOAD_START]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [LOAD_FAILED]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        hasLoaded: true,
        errorMsg: payload,
    }),
    [SET_LIST]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        hasLoaded: true,
        list: {
            ...state.list,
            [payload.locale]: payload.items,
        },
    }),
    [SET_ITEM]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        hasLoaded: true,
        map: {
            ...state.map,
            [`${payload.locale}/${payload.slug}`]: payload.item,
        },
    }),
}

export default (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}
