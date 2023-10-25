import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './reducers/authReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});


export default store;


// export const server = "https://mfburgerwala.vercel.app/api/v1"
export const server = "http://localhost:4000/api/v1"