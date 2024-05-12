import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Weatherapp.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
 import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
 import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
export default function InfoBox({ info }) {
  
  const RAIN_URL  = "https://images.unsplash.com/photo-1524813445246-21c59abc2517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwyNDIxOTIwfHxlbnwwfHx8fHw%3D"
 
  const WINTER_URL = "https://plus.unsplash.com/premium_photo-1670597621188-05cc907b0c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D"
  const HOT_URL = "https://images.unsplash.com/photo-1446844805183-9f5af45f89ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8MzkxMzMwfHxlbnwwfHx8fHw%3D"
  
  return (
    <>
      <div className="Infobox">
       
        <div className="container">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={info.temp > 15 ? HOT_URL : info.humidity > 80 ? RAIN_URL : WINTER_URL }

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component={"span"}>
              {info.city}
              {info.temp > 15 ? <WbSunnyTwoToneIcon /> : info.humidity > 80 ? <ThunderstormTwoToneIcon /> : <AcUnitIcon />}
              
              </Typography>
              <Typography variant="body2" color="text.secondary" component={"span"}>

                <p>Temparature = {info.temp}</p> 
                <p>Min-Temparature = {info.tempMin}</p>
                <p>Max-Temparature = {info.tempMax}</p>
                <p>Humidity = {info.humidity}</p>
                <p>The Weather can be describe as {info.weather} and feels like {info.feelsLike}</p>

              </Typography>
            </CardContent>

          </Card>
        </div>
      </div>
    </>
  )
}