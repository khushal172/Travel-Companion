import axios from 'axios';

// const axios = require('axios');
// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '6135648dcbmsh44c3873a658e3c5p19e37bjsn68b986fe6b60',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async (type, sw, ne)=>{
    try {
        //requent
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '6135648dcbmsh44c3873a658e3c5p19e37bjsn68b986fe6b60',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch (error) {
        console.log(error);
    }
}


// export const getWeatherData = async(lat, lng) => {
//   try{
//     const { data } = await axios.fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}",{
//       params: {
//         latitude: lat,
//         longitude: lng
//       },
//       headers: {
//         'X-RapidAPI-Key': '6135648dcbmsh44c3873a658e3c5p19e37bjsn68b986fe6b60',
//         'X-RapidAPI-Host': 'easy-weather1.p.rapidapi.com'
//       }
//     });
//     return data;
//   } catch(error){
//     console.log(error)
//   }
// }
