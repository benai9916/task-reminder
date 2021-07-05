import {AUTH, LOGIN, LOGOUT} from '../../constants/actionType';
import * as api from '../../API';


export const signin = (formData) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);

        dispatch({type: LOGIN , data})

        window.location.href = '/taskreminder';
    } catch (error) {
        console.log(error.response.data.errorMessage)
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData);

        dispatch({type: AUTH , data})

        window.location.href = '/taskreminder';
    } catch (error) {
        console.log(error)
    }
}

export const signout = () => async (dispatch) => {
    try {
        await api.signOut();

        dispatch({type: LOGOUT , payload: true})

        window.location.href = '/signin';
    } catch (error) {
        console.log(error)
    }
}