import {DELETE, UPDATE, FETCH_ALL, CREATE} from '../../constants/actionType'
import * as api from '../../API';

// action creator
export const getTask = () => async (dispatch) => { 
    try {
        const { data } = await api.fetchTask();

        dispatch({ type:  FETCH_ALL, payload: data })
       
    } catch (error) {
        console.log('get error ==> ', error)
    }
}

export const addTask = (products) => async (dispatch) => {
    try {   
        const {data} = await  api.addTask(products)

        dispatch({ type: CREATE , payload: data})
    } catch (error) {
        console.log('post error ==> ', error)
    }
}

export const updateTask = (id, products) => async (dispatch) => {
    try {
       const { data } =  await api.updateTask(id, products)

       dispatch({ type: UPDATE, payload: data})
    } catch(error) {
        console.log(error)
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.deleteTask(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}