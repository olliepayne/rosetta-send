import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CSS from './Profile.module.css'

// show climbs we submitted, and our wishlist

const Profile = (props) => {
 const { id } = useParams()

 const { user, authAPI, usersAPI } = props

 const [submittedClimbs, setSubmittedClimbs] = useState({})
 const [wishlist, setWishlist] = useState()

 const handleGetSubmittedClimbs = async () => {
  const results = await usersAPI.getSubmittedClimbs(id)
  console.log(results)
 }

 const handleGetWishlist = async () => {
  // follow previous pattern
 }

 const handleDeleteUser = () => {
  // delete user ** clear cookie -- authAPI
 }

 useEffect(() => {
  handleGetSubmittedClimbs()
 }, [])

 return (
  <div className={CSS.page}>
   
  </div>
 )
}

export default Profile