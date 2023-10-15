import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab';
import Rating from '@material-ui/lab/Rating';
import mapStyles from './mapStyles'


import useStyles from './styles';
import { LocationOnOutlined } from '@material-ui/icons';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) =>{
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');
    // const [childClicked, setChildClicked] = useState(null);


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys = {{key:"AIzaSyDgjBNBRY6_CisI70apfTxwIgdz750ppoE"}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {14}
                margin = {[50,50,50,50]}
                options = {{disableDefaultUI: true, zoomControl: true, styles:mapStyles}}
                onChange = {(e)=>{
                    console.log(e);
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
                }}
                onChildClick = {(child)=>setChildClicked(child)} 
            >
                {places?.map((place,i)=>(
                    <div 
                        className={classes.markerContainer} 
                        lat = {Number(place.latitude)}
                        lng = {Number(place.longitude)}
                        key = {i}
                    >
                        {
                            !isDesktop?(
                                <LocationOnOutlinedIcon color="primary" fontSize= "large"/>
                            ) : (
                                <Paper elevation={3} className={classes.paper} >
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom >
                                        {place.name}
                                    </Typography>
                                    <img className={classes.pointer} 
                                    src = {place.photo?place.photo.images.large.url:'https://assets.entrepreneur.com/content/3x2/2000/20160914225724-GettyImages-495332577.jpeg'}
                                    alt = {place.name}
                                    />
                                    <Rating size = "small" value = {Number(place.rating)} readOnly/>
                                </Paper>
                            )
                        }

                    </div>
                ))}
                {/* Hey THere */}
                {/* {weatherData?.list?.map((data,i)=>(
                    <div key={i} lat = {data.coord.lat} lng = {data.coord.lng}>
                        <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}  />
                    </div>
                ))} */}
            </GoogleMapReact>
        </div>
    ); 
};
export default Map;