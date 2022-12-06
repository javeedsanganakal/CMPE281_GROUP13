import {React, useState, useCallback} from 'react'
import styles from '../profile.module.scss';
import {Client} from "@googlemaps/google-maps-services-js"
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api"

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function FarmPlotting() {
//   AIzaSyDp0HPubcx8J-_CCMzxiHX46Dv0kRJocy4
    const { isLoaded } =  useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDp0HPubcx8J-_CCMzxiHX46Dv0kRJocy4"
    })
    const [map, setMap] = useState(null)

    const onLoad =  useCallback( function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(map)
    }, [])

  return (
    <div id={styles['farm_plotting']}>
        <div id='map' className={styles["map"]}>
              <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
              >
                  <></>
              </GoogleMap>
        </div>
    </div>
  )
}

export default FarmPlotting