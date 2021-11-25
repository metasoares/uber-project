import { useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'
import { useRouter } from 'next/router'
import Link from 'next/link'
import carList  from '../public/data/carList'

const Confirm = () => {


      console.log("CARLIST AT CONFIRM  BIU", carList)

    const router = useRouter()
    const { pickUp, dropOff} = router.query

  console.log("PICKUP: " + pickUp, "DROPOFF: " + dropOff)


    const [pickUpCoordinates, setPickUpCoordinates] = useState([0,0])
    const [dropOffCoordinates, setDropOffCoordinates] = useState([0,0])



    const getPickUpCoordinates = (pickUp) => {


        // const pickUp = pickUp
        //fetch calls the api
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` +
         new URLSearchParams({
             access_token: 'pk.eyJ1IjoiYnJ1bm9za2lsbHMiLCJhIjoiY2t2Z3pjNHNrMGJucTJ2czMzcXpkZDF1NCJ9.HVqkqBnL7KNVQLxTFodqqw'
         }))
        .then(response => response.json())
        .then(data => {
            // console.log("Pick Up Coordinates: " +  data.features[0].center)
            setPickUpCoordinates(data.features[0].center)
        })
        }

        const getDropOffCoordinates = (dropOff) => {
            
            //fetch calls the api
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
             new URLSearchParams({
                 access_token: 'pk.eyJ1IjoiYnJ1bm9za2lsbHMiLCJhIjoiY2t2Z3pjNHNrMGJucTJ2czMzcXpkZDF1NCJ9.HVqkqBnL7KNVQLxTFodqqw'
             }))
            .then(response => response.json())
            .then(data => {
                
                // console.log("Drop Off Coordinates: " + data.features[0].center)
                setDropOffCoordinates(data.features[0].center)
            })
            }
        
        useEffect(() => {
           getPickUpCoordinates(pickUp)
           getDropOffCoordinates(dropOff)


        }, [pickUp, dropOff])

        //Pick Up coordinates Los Angeles [-118.487, 34.0196]
        //Drop Off coordinates Santa Monica [ß

        //Xiamen coordiantes [118.127499, 24.5405295]
     
    return (
        <Wrapper>
          
            <BackToSearchButtonContainer>
               <Link href="/search" passHref>
                <BackToSearchButton src="https://img.icons8.com/ios-filled/50/0000/left.png" alt=" a back button image" />
               </Link>
            </BackToSearchButtonContainer>
            
            <Map 
              pickUpCoordinates={pickUpCoordinates}
              dropOffCoordinates={dropOffCoordinates}
              />
            <RideContainer>
               
               
                   <RideSelector 
              
                 pickUpCoordinates={pickUpCoordinates}
                dropOffCoordinates={dropOffCoordinates}
                />
                
               
            
                {/* <Link href={{
                    pathname:'/ride',
                    query: {
                        pickUpCoordinates: pickUpCoordinates,
                        dropOffCoordinates: dropOffCoordinates,
                        
                    }
                }} passHref> */}
                <ConfirmButtonSelector>
                    Confirm UberX
                </ConfirmButtonSelector>
                {/* </Link> */}
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm


const Wrapper = tw.div`
flex flex-col h-screen`

const RideContainer = tw.div`
flex-1 flex flex-col bg-white  h-1/2`


const ConfirmButtonSelector = tw.div`
bg-black text-center  py-3 text-white my-4 mx-4 `

const BackToSearchButtonContainer = tw.div`
absolute top-4 left-4  z-10 rounded-full   bg-white shadow-md cursor-pointer`

const BackToSearchButton = tw.img`
h-8 w-8  object-contain 
`
