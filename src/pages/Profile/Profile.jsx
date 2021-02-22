import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CSS from './Profile.module.css'

const Profile = (props) => {
  const { id } = useParams()

  const { user, handleDeleteUser, usersAPI } = props

  const [submittedClimbs, setSubmittedClimbs] = useState()

  const handleGetSubmittedClimbs = async () => {
    const results = await usersAPI.getSubmittedClimbs(id)
    setSubmittedClimbs(results)
  }

  useEffect(() => {
    handleGetSubmittedClimbs()
  }, [])

  return (
    <div className={CSS.page}>
      {user && user._id === id ?
        <>
          <h2>{user.username}'s Profile</h2>
          <div className={CSS.submittedContainer}>
            <h3>Submitted Climbs</h3>
            {submittedClimbs ?
              <ul>
                {submittedClimbs.map((climb, index) => (
                  <li className={index % 2 === 0 ? CSS.evenResult : CSS.oddResult} key={climb._id}>
                    <Link to={`/routes/${climb._id}`} target="_blank">{climb.name} / {climb.grade} / {climb.location} / submitted by {climb.addedBy}</Link>
                  </li>
                ))}
              </ul>
              :
              <p>Loading...</p>
            }
          </div>
          <h4>Delete Account?</h4>
          <button className={CSS.deleteBtn} onClick={handleDeleteUser}>Delete</button>
        </>
        :
        <p>User does not exist.</p>
   }
    </div>
  )
}

export default Profile