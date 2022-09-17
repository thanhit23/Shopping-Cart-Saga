/*
 * cartReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

const initialState = [
    {
        id: 1,
        name: 'Iphone 12',
        price: 1200,
        status: true,
    },
];

const cartReducer = (state = initialState, action) =>
    // eslint-disable-next-line consistent-return
    produce(state, () => {
        switch (action.type) {
            default:
                return [...state];
        }
    });

export default cartReducer;
