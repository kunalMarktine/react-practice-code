import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../Molecules/Card';
import { useDispatch } from 'react-redux'
import { action } from '../../Redux/index'
import Addfrom from '../Molecules/Addfrom';
import Spinner from '../Atoms/Spinner';


const Home = () => {
  const dispatch = useDispatch()
  const {posts , loading } = useSelector(state => state.post)
  const [newpost, setNewPost] = useState([])

  useEffect(() => {
    dispatch(action.getPost())
    setNewPost(posts)
    
  }, [newpost])


  
  return (
    <>
      <div style={{ width: '90%', margin: 'auto' }}>
        <Addfrom/>
        {loading && <Spinner/>}
        {posts.map((post) => (
          <div key={post.id} style={{ display: 'inline-block' }}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home