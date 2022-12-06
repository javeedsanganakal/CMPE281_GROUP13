import React, { useEffect, useState } from 'react'
import { useJsApiLoader, Marker, GoogleMap, LoadScript, DirectionsRenderer, Polyline } from "@react-google-maps/api"
import "./style.css"

function Map({ isConnected = false,Lines= true, lineCoordinates, pointerCoordinates, isDisabled = false, MAXCORDS = 4 }) {
    const mapStyles = {
        height: "100vh",
        width: "100%"
    };
    const [clicks, setClicks] = useState([]);
    const [lineCords, setLineCords] = useState([])

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    const onClick = (e) => {
        if (isDisabled) {
            return;
        }
        console.log(e.latLng.toJSON())
        if (Array.isArray(clicks) && clicks.length < MAXCORDS) {
            setClicks(prev => [...prev, e.latLng.toJSON()]);
        } else {
            console.log("Max limit reached")
        }
    };
    useEffect(() => {

        if (Array.isArray(clicks) && clicks.length > 3) {
            // const cords = clicks.map(cor => {
            //     const cordinates = cor.
            //         console.log(cordinates)
            //     return cordinates
            // })
            if (isConnected) {

                let first = clicks[0]
                setLineCords([...clicks, first])
            } else {
                if (!Lines){
                    setLineCords([])
                }else{
                    setLineCords(clicks)
                }
            }
            // setLineCords([])
            // let first = clicks[0].toJSON()
            // setLineCords([...cords, first])
            console.log("runned")
        } else {
            setLineCords([])
        }


    }, [clicks])
    
    useEffect(() => {
        if (Array.isArray(lineCoordinates)) {
            setLineCords(lineCoordinates)
        }

    }, [lineCoordinates])
    useEffect(() => {
        if (Array.isArray(pointerCoordinates)) {
            setClicks(pointerCoordinates)
        }

    }, [pointerCoordinates])

    const onIdle = (m) => {
    };
    const handleDragEnd = (event, initial) => {
        if (isDisabled) {
            return;
        }
        const initialCords = initial
        const newCords = clicks.map(item => {
            if (item.lat === initialCords.lat) {
                return event.latLng
            } else {
                return item
            }
        })
        setClicks(newCords)
    }
    const handleonDblClick = (e) => {
        if (isDisabled) {
            return;
        }
        const filterArry = clicks.filter((item) => item.lat !== e.latLng.toJSON().lat);
        setClicks(filterArry);
    }
    return (
        <div id='map'>
            <LoadScript
                googleMapsApiKey='AIzaSyDp0HPubcx8J-_CCMzxiHX46Dv0kRJocy4'>
                <GoogleMap
                    onClick={onClick}
                    onIdle={onIdle}
                    mapContainerStyle={mapStyles}
                    zoom={4}
                    center={defaultCenter}
                >
                    <Polyline path={lineCords} />
                    {clicks.map((latLng, i) => {
                        return <Marker onDragEnd={event => handleDragEnd(event, latLng)}
                            onDblClick={handleonDblClick}
                            draggable={true} key={i} position={latLng} />;
                    })}

                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map