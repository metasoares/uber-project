import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { useRouter } from 'next/router'


const Search = () => {

  

  const [pickUp, setPickUp ] = useState("")
  const [dropOff, setDropOff] = useState("")

  // const router = useRouter()

  // const handlePickUp = (e) => {
  //   e.preventDefault()
  //   router.push(pickUp)
  // }

  // const handleDropOff = () => {
  //   e.preventDefault()
  //   router.push(dropOff)
    
  // }

// console.log(pickUp)
// console.log(dropOff)



    return (
        <Wrapper id="app">
            <ButtonContainer>
              <Link href="/" passHref>
              <BackButton  src="https://img.icons8.com/ios-filled/50/0000/left.png" alt="a back button image" />
              </Link>
                
            </ButtonContainer>
            <InputContainer>
              <FromToIcons>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                <Line  src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"  />
                <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
              </FromToIcons>
              <InputBoxes>
                <Input 
                value={pickUp}  onChange={(e)=> setPickUp(e.target.value)}
                placeholder="Enter pick up location" required/>
                <Input 
                value={dropOff}  onChange={(e)=> setDropOff(e.target.value)} 
                 placeholder="Where to ?" required/>
              </InputBoxes>
              <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>
            <SavedPlaces>
              <StarIcon  src=" https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
              Saved Places
            </SavedPlaces>
            <Link href={{
              pathname: "/confirm",
              query: {
                pickUp: pickUp,
                dropOff: dropOff
              
              }
            }} passHref>
               <ConfirmLocationsButton >
                 Confirm Locations
              </ConfirmLocationsButton>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px-4 
`
const BackButton = tw.img`
h-8   px-2 cursor-pointer
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const FromToIcons = tw.div`
w-10 flex flex-col  mr-2  items-center`

const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10`

const Square = tw.img`
h-3 
`

const InputBoxes = tw.div`
flex flex-col  flex-1 
`
const Input = tw.input`
h-9 bg-gray-200 my-2 rounded-2 p-2  outline-none border-none  text-sm`

const PlusIcon = tw.img`
h-7 w-7 bg-gray-200  ml-3 rounded-full  cursor-pointer`

const SavedPlaces = tw.div`
 flex  bg-white items-center text-sm  px-4 py-2`

const StarIcon = tw.img`
 h-8 w-8  bg-gray-400 rounded-full p-2 mr-2`

 const ConfirmLocationsButton = tw.div`
 bg-black text-white  text-center mt-2 mx-4 px-4 py-3 cursor-pointer`




