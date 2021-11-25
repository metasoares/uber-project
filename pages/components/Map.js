import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'




const Map = ({ pickUpCoordinates,  dropOffCoordinates }) => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9za2lsbHMiLCJhIjoiY2t2Z3pjNHNrMGJucTJ2czMzcXpkZDF1NCJ9.HVqkqBnL7KNVQLxTFodqqw';


    useEffect(() => {
  
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',   // mapbox://styles/mapbox/streets-v11
          center: [-99.29011, 39.39172] ,   // United States coordinates [-99.29011, 39.39172]  // China  [113.341334,23.193119] 
          //Xiamen [ 118.10000,	24.479834]
          zoom: 3
        });

        // addToMap(map)
        if(pickUpCoordinates ){
          addToMap(map, pickUpCoordinates)
          console.log('pickUpCoordinates at Map.js', pickUpCoordinates)
        }

        if(dropOffCoordinates){
          addToMap(map, dropOffCoordinates)
          console.log('dropOffCoordinates at Map.js', dropOffCoordinates)
        }

        if(pickUpCoordinates && dropOffCoordinates){
          map.fitBounds([
            pickUpCoordinates,
            dropOffCoordinates
          ], {
            padding: 60
          })
        }

        //Get the mapbox road lines
        map.on('load', () => {
          map.addSource('lines', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {
                    color: '#F7455D', // red
                  },
                  geometry: {
                    type: 'LineString',
                    coordinates: [
                      pickUpCoordinates,
                      dropOffCoordinates
                  
                    ],
                  },
                },
                {
                  type: 'Feature',
                  properties: {
                    color: '#F7455D', // blue //#33C9EB
                  },
                  geometry: {
                    type: 'LineString',
                    coordinates: [
                      pickUpCoordinates,
                      dropOffCoordinates
                    ],
                  },
                },
              ],
            },
          });
          map.addLayer({
            id: 'lines',
            type: 'line',
            source: 'lines',
            paint: {
              'line-width': 3,
              // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
              // to set the line-color to a feature property value.
              //'line-color': 'yellow',
              'line-color': ['get', 'color']
            },
          });
        })
    


// Add geolocate control to the map.
// map.addControl(
//   new mapboxgl.GeolocateControl({
//   positionOptions: {
//   enableHighAccuracy: true
//   },
  // When active the map will receive updates to the device's location as it changes.
  // trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  // showUserHeading: true
  // })
  // );

        
      }, [ pickUpCoordinates, dropOffCoordinates]);


      // const coordinates = [
      //   {
      //     pickUpCoordinates: pickUpCoordinates
      //   },
      // {
      //   dropOffCoordinates: dropOffCoordinates
      // }
      // ]

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      //United States coordinates [-99.29011, 39.39172]
      .addTo(map);
      }



    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map;


const Wrapper = tw.div`
 flex-1 h-1/2`



 //Important
 //https://docs.mapbox.com/mapbox-tiling-service/examples/natural-earth-data-roads/


 //Example of how to use polygon 3D mapbox
 //https://docs.mapbox.com/mapbox-gl-js/example/3d-extrusion-floorplan/

 //Interpolate mpabox
 //https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#interpolate