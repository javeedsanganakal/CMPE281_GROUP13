import React, { useEffect, useState } from 'react'
import { useJsApiLoader, Marker, GoogleMap, LoadScript, DirectionsRenderer, Polyline } from "@react-google-maps/api"
import "./style.css"
import DroneImaage from "../../../Assets/drone-image.svg";


function Map({ isConnected = false,zoom = 8 ,missionPlanner, markerTitle = false, icon = false, Lines = true, draggable = true, lineCoordinates, pointerCoordinates, isDisabled = false, MAXCORDS = 4 }) {
    const mapStyles = {
        height: "100vh",
        width: "100%"
    };
    const [clicks, setClicks] = useState([]);
    const [lineCords, setLineCords] = useState([])

    const [defaultCenter, setDefaultCenter]=useState({
        lat: 37.32778538983246,
        lng: -121.89828872680664
    })

    const onClick = (e) => {
        console.log(e.latLng.toJSON())
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
                if (!Lines) {
                    setLineCords([])
                } else {
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
    const [missionPlannerCoords, setMissionPlannerCoords] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (Array.isArray(missionPlanner)) {
            setMissionPlannerCoords(missionPlanner[count])
            setCount(count + 1)
        } else {
            return
        }
    }, [missionPlanner])
    useEffect(() => {
        const interval = setInterval(() => {
            if (count === missionPlanner.length || count - 1 > missionPlanner.length) {
                clearInterval(interval)
                return;
            }
            setMissionPlannerCoords(missionPlanner[count])
            setDefaultCenter(missionPlanner[0])
            setCount(count + 1)

        }, 3000)
        return () => clearInterval(interval)

    }, [missionPlannerCoords])
    return (
        <div id='map'>
            <LoadScript
                googleMapsApiKey='AIzaSyDp0HPubcx8J-_CCMzxiHX46Dv0kRJocy4'>
                <GoogleMap
                    onClick={onClick}
                    onIdle={onIdle}
                    mapContainerStyle={mapStyles}
                    zoom={zoom}
                    center={defaultCenter}
                >
                    <Polyline path={lineCords} />
                    {clicks.map((latLng, i) => {
                        return <Marker label={markerTitle[i]} icon={icon} onDragEnd={event => handleDragEnd(event, latLng)}
                            onDblClick={handleonDblClick}
                            draggable={draggable} key={i} position={latLng} />;
                    })
                    }
                    {
                        missionPlanner ? (<Marker icon={DroneImaage} key={0} position={missionPlannerCoords} />) : (<></>)
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map