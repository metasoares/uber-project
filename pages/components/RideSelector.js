import { useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import  carList  from '../../public/data/carList'
import Link from 'next/link'
import ride from '../ride'
import {  useDispatch} from 'react-redux'
// import { addToRide } from '../../slices/carSlice'
import { useRouter } from 'next/router'


const RideSelector = ( { pickUpCoordinates, dropOffCoordinates, id,imgUrl, service, multiplier, driver, isChecked}) => {



    // const router = useRouter()
    // const { index, service, driver, multiplier, imgUrl} = router.query

    //Checked if the user has selected a car and unchecked if the user has not selected a car
    // //or if he suser has selected another car
    // const cars = useSelector(selectCars)
     
    // console.log("Cars", cars)
    //Get geometry coordinates lines
    // const [ routeCoordinates, setRouteCoordinates ] = useState(null)
  
    const dispatch = useDispatch()
    // const handleChecked = () => {
     
    //   const car = {
    //       service: car.service,
    //       driver: car.driver,
    //       multiplier: car.multiplier,
    //       imgUrl: car.imgUrl

    //   }
         
    //     dispatch(addToRide(car))
        

     
    // }
    // console.log("imgUrl at RideSelector", imgUrl)
   

    
   
    //Calculating ride price and time
    const [ rideDuration, setRideDuration] = useState(0)

   // get the distance between pickupCoordinates and dropoffCoordiantes 
   //MapBox API
    useEffect(() => {
      
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}.json?` + 
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiYnJ1bm9za2lsbHMiLCJhIjoiY2t2Z3pjNHNrMGJucTJ2czMzcXpkZDF1NCJ9.HVqkqBnL7KNVQLxTFodqqw'
        })).then(res => res.json())
        .then(data => {
            if(data.routes){
                setRideDuration(data.routes[0].duration / 100 )
                // setRouteCoordinates(data.routes[0].geometry.coordinates)
            } else {
                setRideDuration(0)
                // setRouteCoordinates(null)

            }
        })

        // setRouteCoordinates(routeCoordinates)

    }, [pickUpCoordinates, dropOffCoordinates])

    return (
        <Wrapper>
            <Title>
                Choose a ride or swipe up for more 
            </Title>
            <CarList>
                
               
               {carList?.map((car,index)=>(
               <Car key={index} >
                    <CarImage src={car.imgUrl}  alt="" />
                    <CarDetails>
                        <Service >{car.service}</Service>
                        <Time>{car.timeAway}</Time>
                    </CarDetails>
                    <CarPrice >
                        { "$" + (rideDuration * car.multiplier).toFixed(2)}
                    </CarPrice>
                    {/* <CarChecked type="checkbox"     /> */}
                    
                </Car>))}
                
                

                     {/* <Link href={{
                        pathname: '/ride',
                         query: {
                             service: car.service,
                             imgUrl: car.imgUrl,
                             rideDuration: rideDuration
                         }
                    }} replace passHref>
                    <CarChecked type="checkbox" checked={carSelected} onChange={()=>{handleChecked()}} key={index}  />
                    </Link> */}
               
               
            </CarList>
        </Wrapper> 
    )
}

export default RideSelector


const Wrapper = tw.div`
 flex-1   bg-white  overflow-y-scroll flex flex-col`

 const Title = tw.div`
  text-gray-500 text-xs text-center py-2 border-b  
  `
const CarList = tw.div`
overflow-y-scroll
 `

const Car = tw.div`
 flex  items-center  px-4 py-3`

const CarImage = tw.img`
h-14 w-14 mr-4
`

const CarDetails = tw.div`
 flex-1 flex-col  `

const Service = tw.div`
font-medium text-px`

const Time = tw.div`
text-xs text-blue-500`

const CarPrice = tw.div`
text-sm`

const CarChecked = tw.input`
ml-2  outline-none cursor-pointer`
