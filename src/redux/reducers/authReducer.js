import {createReducer} from '@reduxjs/toolkit'

// const initialState = {

// }

export const authReducer = createReducer({} , {  
    loadUserRequest: (state , action) => {
        state.loading = true;
    },
    loadUserSuccess: (state , action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },

    loadUserFail: (state , action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    logoutRequest: (state , action) => {
        state.loading = true;
    },
    logoutSuccess: (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
    },

    logoutFail: (state , action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    clearError: (state , action) => {
        state.error = null;
    },
    clearMessage: (state , action) => {
        state.message = null;
    },
})