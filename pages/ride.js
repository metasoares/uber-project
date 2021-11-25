import { useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import cancel from './cancel'
import  Link from 'next/link'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
// import { carList } from './data/carList'
import { useSelector } from 'react-redux'
import { selectCars } from '../slices/carSlice'


const Ride = () => {


    const cars = useSelector(selectCars)

    console.log("Cars at ride.js", cars)

    const router = useRouter()
    const { pickUpCoordinates, dropOffCoordinates} = router.query
    

   const [ shareLinks, setShareLinks] =  useState(false)

   const handleShare =() => {
       if(shareLinks){
           setShareLinks(true)
       } else {
        setShareLinks(false)

       }
   }
   
   const [ closeShareItems, setCloseshareItems] = useState([])

   const handleCloseShare = (e) => {
     e.preventDefault()

        if(closeShareItems ) {
            setCloseshareItems([])
        }
   }

    return (
        <Wrapper>
            <Map 
            pickUpCoordinates={pickUpCoordinates}
            dropOffCoordinates={dropOffCoordinates}
            />
            <RideInfoContainer>
                <RideMessage>Driver is on the way.Please stay away from crowds while waiting</RideMessage>
                <RideInfo >
                    <RideDetails >
                    <RideMark>UberX</RideMark>
                        <RideColor>White</RideColor>
                        <RideDriver>
                            <DriverName>Driver Chen</DriverName>
                            <DriverRate>⭐ 4.8</DriverRate>
                        </RideDriver>
                    </RideDetails>
                    <RideImage  src="https://i.ibb.co/cyvcpfF/uberx.png"  alt="UberX image" />
                </RideInfo>
                <RideActionsButtonsContainer>
                    <MessageContainer>
                        <MessageIcon  src="https://www.kindpng.com/picc/m/150-1509057_messages-pressed-message-icon-black-png-transparent-png.png" alt="" />
                        <Message>Message</Message>
                    </MessageContainer>
                    <IconSeparator role="img" aria-label="|" value="|" ></IconSeparator>
                    <CallContainer>
                        <CallIcon src=" https://www.kindpng.com/picc/m/501-5013043_telephone-phone-call-icon-symbol-vector-tel-icon.png" alt="" />
                        <Call>Call</Call>
                    </CallContainer>
                    <IconSeparator role="img" aria-label="|" value="|" ></IconSeparator>
                    <CancelTripContainer>
                        
                          <CancelTripIcon src="https://w7.pngwing.com/pngs/897/805/png-transparent-computer-icons-icon-design-close-miscellaneous-logo-brand-thumbnail.png" alt="" />
                      
                          <CancelTrip onClick={()=>router.push('/cancel')}>Cancel Trip</CancelTrip>
                       
                    </CancelTripContainer>
                    <IconSeparator role="img" aria-label="|" value="|" ></IconSeparator>
                    <ShareContainer>
                        <ShareIcon src="https://www.pnglib.com/wp-content/uploads/2021/02/shares_602031512ed3c.png" alt="share icon" />
                        <Share onChange={()=>handleShare()}>Share</Share>
                    </ShareContainer>

                </RideActionsButtonsContainer>
            </RideInfoContainer>
            {shareLinks ?
            <>
            <ShareMediasContainer>
                    <ShareSocialMediaContainer>
                        Bruno
                        {/* { !closeShareItems ?
                        <> */}
                        <CloseShareIcon onChange={()=>handleCloseShare} src=" https://w7.pngwing.com/pngs/897/805/png-transparent-computer-icons-icon-design-close-miscellaneous-logo-brand-thumbnail.png" alt="" />
                       {/* </>
                       :
                       "RIDE PAGE...."
                        } */}
                    
                    </ShareSocialMediaContainer>
                </ShareMediasContainer>
            </>
            :
            null
  }
            
        </Wrapper>
    )
}

export default Ride

//Important
//https://www.geeksforgeeks.org/reactjs-toast-notification/

const Wrapper = tw.div`
flex w-full h-screen flex-col cursor-pointer
`
const RideInfoContainer = tw.div`
flex-1 flex flex-col  p-4 bg-gray-200
`

const RideMessage = tw.div`
h-14 w-full bg-pink-500 text-white text-sm px-2 py-3  rounded-t-lg border-b `
const RideInfo = tw.div`
flex   justify-between items-center h-18 w-full  px-2 py-4  bg-white` 

const RideDetails = tw.div`
flex flex-col
`
const RideMark = tw.div`
`
const RideColor = tw.div`
text-xs
`
const RideDriver = tw.div`
flex flex-row gap-1
`
const DriverName = tw.div`
text-xs
`
const DriverRate = tw.div`
text-xs
`
const RideImage = tw.img`
h-14 w-14  rotate-45
`

const RideActionsButtonsContainer = tw.div`
flex  items-center justify-between w-full h-16 border-t  py-px px-2 rounded-b-lg bg-white
`
const MessageContainer = tw.div`
flex  flex-col items-center`

const MessageIcon = tw.img`
h-3 w-3 `

const Message = tw.div`
text-xs mt-px`

const IconSeparator = tw.div`
bg-gray-200 w-px h-7 mx-1`

const CallContainer = tw.div`
flex  flex-col  items-center `

const CallIcon = tw.img`
h-3 w-3 `

const Call = tw.div`
text-xs mt-px`

const CancelTripContainer = tw.div`
flex  flex-col items-center`

const CancelTripIcon = tw.img`
h-3 w-3 `

const CancelTrip = tw.div`
text-xs mt-px`

const ShareContainer = tw.div`
flex   flex-col  items-center`

const ShareIcon = tw.img`
h-3 w-3 `

const Share = tw.div`
text-xs mt-px`

const ShareMediasContainer = tw.div`
  absolute  h-40 w-25 inset-x-10  bottom-20 bg-white
`
const ShareSocialMediaContainer = tw.div`
 flex flex-col items-center justify-center
`

const CloseShareIcon = tw.img`
h-8 w-8 rounded-full` 

//h-2/4 w-2/3 inset-x-16 inset-y-16

