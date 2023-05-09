import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setAvatarRoute } from '../utils/APIRoutes'

function SetAvatar () {
  const api = 'https://api.multiavatar.com/'

  const navigate = useNavigate()

  const [avatars, setAvatars] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)
  return (
    <div>
      <h1 />
    </div>
  )
}

export default SetAvatar
