import axios from 'axios';
import { server } from '../store';
// import { useDispatch } from 'react-redux';

export const loadUser = ()=> async(dispatch)=>{

    try {

        dispatch({
            type: "loadUserRequest",
        })

        const {data} = await axios.get(`${server}/me` , {
            withCredentials: true, //mandatory
        })

        dispatch({
            type: "loadUserSuccess",
            payload: data.user,
        })

    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message
        })
    }
}


export const logout = ()=> async(dispatch)=>{

    try {

        dispatch({
            type: "logoutRequest",
        })

        await axios.get(`${server}/logout` , {
            withCredentials: true, //mandatory
        })

        dispatch({
            type: "logoutSuccess",
        })

    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: error.response.data.message
        })
    }
}