const initialState = {
    showCards: true,
};

export const componentState = (state = initialState, action) => {
    switch (action.type) {
        case 'toggleCards':
            return {
                ...state,
                showCards: action.shouldShow,
            };
        default:
            return state;
    }
};