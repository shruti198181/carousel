import Carousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css' 
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './App.css';
function App () {
return (
  <Carousel className="owl-theme" margin={10}  nav autoplay loop>  
    <div className="item">
      <img src="https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ="/>
      </div>
    <div className="item">
      <img src="https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc="/>
      </div>
    <div className="item">
      <img src="https://media.istockphoto.com/id/1347088244/photo/kerala-most-beautiful-place-of-india.jpg?s=612x612&w=0&k=20&c=oBVJ6rUfq1YOua_4Oqhj0B1TFwcMFhniaysLJEN_eh8="/>
      </div>
  </Carousel>
)
}
export default App;
