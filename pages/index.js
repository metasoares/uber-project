import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
// import mapboxgl from '!mapbox-gl'
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut} from 'firebase/auth'
import { useRouter} from 'next/router'





export default function Home() {
  


     

 

  const [ user, setUser] = useState(null)
  const router = useRouter()

  useEffect(()=>{
   return  onAuthStateChanged(auth,user => {
      if(user) {
       setUser({
        //  username: user.displayName,
         email: user.email,
         name: user.displayName,
         photoURL: user.photoURL
       })}
       else {
         setUser(null)
         router.push('/signup')
       }
    })

    
          
  
  },[router])

  const signOutUser =() => {
    // const auth = getAuth();
    signOut(auth)
    .then(()=> {
      setUser(null)
      router.push("/")
    })
  }

  return (
    <Wrapper>
      <Map />
     <ActionItems >
     <SignOutButtonContainer>
             <SignOutButton onClick={()=>signOutUser()}>Sign Out</SignOutButton>
          </SignOutButtonContainer>
        <Header >
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218144.jpg" />
          
          <Profile>
            { user && user.name ?
            <>
            <Name>{ user && user.name }</Name>
            </>
            :
             user && user.email ?
             <>
              <Email>{ user && user.email }</Email>
              {/* <UserImageForThiscase src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png" alt="user image" /> */}
            </>
             :
            //  user && user.username ?
            //  <>
            //  <Name>{user && user.username}</Name>
            //  </>
            //  :
             <>
             <Name>Welcome</Name>
             </>
            }
            {/* <Name>{ user && user.name }</Name> */}
            { user  && user.photoURL ? 
            <UserImage src={ user && user.photoURL } 
           />
            : 
            <UserImage src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png" alt="user image" />
  }
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search"  passHref>
          <ActionButton  >
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uperx.png"   />
            Ride
          </ActionButton>
          </Link>
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
             2-Wheels
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <Link href="/search"  passHref>
       <InputButton>
        Where to ?
       </InputButton>
       </Link>
     </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
 flex flex-col h-screen bg-gray-300
 `

 const SignOutButtonContainer = tw.div`
   absolute top-3 left-3  w-22  bg-white rounded-xs
 `
 const SignOutButton = tw.div`
 text-xs  text-center p-1 font-medium`


 const ActionItems = tw.div`
 bg-white  flex-1 p-4
 `
 const Header = tw.div`
  flex  justify-between items-center
  `
 const UberLogo = tw.img`
 h-28 ml-1
 `

 const Profile = tw.div`
  flex items-center  

 `
 // float-right h-auto w-screen bg-pink-500  p-2
 const Name = tw.div`
  flex mr-4   text-sm 
 `

 const Email = tw.div`
 flex mr-1   text-xs `

 const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
 `

 const ActionButtons = tw.div`
  flex mt-3  
 `
 //flex justify-between

 const ActionButton = tw.div`
 bg-gray-200 flex-1 m-1 h-25
 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition cursor-pointer text-sm
  
 `

 const ActionButtonImage = tw.img`
 h-3/6
 `

 const InputButton = tw.div`
 h-18 bg-gray-200 text-xl flex items-center p-4 mt-8 cursor-pointer
 `
