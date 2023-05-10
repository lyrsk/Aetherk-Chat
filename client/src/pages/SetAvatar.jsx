// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { setAvatarRoute } from '../utils/APIRoutes'
// import loader from '../assets/loader.gif'

// function SetAvatar () {
//   const api = 'https://api.multiavatar.com/4645646'

//   const navigate = useNavigate()

//   const [avatars, setAvatars] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [selectedAvatar, setSelectedAvatar] = useState(undefined)

//   const setProfilePicture = async () => {}

//   useEffect(async () => {
//     const data = []
//     for (let i = 0; i < 4; i++) {
//       const image = await axios.get(
//         `${api}/${Math.round(Math.random() * 1000)}`
//       )
//       const buffer = new Buffer(image.data)
//       data.push(buffer.toString('base64'))
//     }
//     setAvatars(data)
//     setIsLoading(false)
//   }, [])
//   return (
//     <div className='avatar-container'>
//       <h1>Selecciona tu avatar</h1>
//       <div className='avatars'>
//         {avatars.map((avatar, index) => {
//           return (
//             <div
//               key={index}
//               className={`avatar ${
//                     selectedAvatar === index ? 'selected' : ''
//                   }`}
//             >
//               <img
//                 src={`data:image/svg+xml;base64,${avatar}`}
//                 alt='avatar'
//                 key={avatar}
//                 onClick={() => setSelectedAvatar(index)}
//               />
//             </div>
//           )
//         })}
//       </div>
//       <button onClick={setProfilePicture} className='submit-btn'>
//         Seleccionar
//       </button>
//     </div>
//   )
// }

// export default SetAvatar
