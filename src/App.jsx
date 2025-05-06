import './App.css'
import {OwlCarousel} from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {

  return (
  <OwlCarousel className='owl-theme' margin={10}  autoplay loop autoplayTimeout={500}>
  <div className='item'> 
     <img src="https://media.istockphoto.com/id/1252711563/photo/green-hills-of-lonavala-shot-during-the-rainy-season.jpg?s=2048x2048&w=is&k=20&c=bp_E0Jsl68JklnXNyIsDybPMOB7pi8txnLXUoqVgY9o="  alt="img"/> 
     </div>
  <div className='item'> 
     <img src="https://media.istockphoto.com/id/1160316337/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=5gj1mezzy3cHlCQcqiOIM8pLBLeMyWoxW3e_R57eyv8="/> 
     </div>
  <div className='item'>
      <img src="https://media.istockphoto.com/id/1252711563/photo/green-hills-of-lonavala-shot-during-the-rainy-season.jpg?s=2048x2048&w=is&k=20&c=bp_E0Jsl68JklnXNyIsDybPMOB7pi8txnLXUoqVgY9o="/> 
      </div>
<div className="item">
  <img src="https://media.istockphoto.com/id/1252711563/photo/green-hills-of-lona
vala-shot-during-the-rainy-season.jpg?s=2048x2048&w=is&k=20&c=bp_E0Jsl68JklnXNyIsDybPMOB7pi8txnLXUoqVgY9o="/>
</div>    
   </OwlCarousel>

  )
}

export default App;
