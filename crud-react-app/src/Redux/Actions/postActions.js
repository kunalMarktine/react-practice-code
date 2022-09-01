import axios from "axios";
import { GET_POSTS, DELETE_POST, GET_POST, UPDATE_POST, ADD_POST } from './types'

export const getPost = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  dispatch({
    type: GET_POSTS,
    payload: res.data
  })
}

export const deletePost = (id) => async (dispatch) => {
  const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  dispatch({
    type: DELETE_POST,
    payload: id
  })
}

export const getSinglePost = (id) => async (dispatch) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  dispatch({
    type: GET_POST,
    payload: res.data
  })
}

export const updatePost = (newpost) => async (dispatch) => {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${newpost.id}`, {
    Headers: {
      'Content-Type': 'application/json'
    },
    body: {
      title: newpost.title,
      body: newpost.body,
      userId: 1

    }
  })
  dispatch({
    type: UPDATE_POST,
    payload:  res.data 
  })
}

export const newPost = (data) => async (dispatch) => {
  const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    Headers: {
      'Content-Type': 'application/json'
    },
    body: {
      title: data.title,
      body: data.body,
      userId: 1
    }
  })
  dispatch({
    type: ADD_POST,
    payload: res.data
  })
}


