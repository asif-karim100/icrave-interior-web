// import React from 'react'
// import './Home.css'



//  const Home = () => {
//   return (
//     <>
//     <div className="home-container">
//     <h1 >Elavating Interior Design With ICarve Creations</h1>
//     <br></br>
//    <h2>An Empty Room Is a Story Waiting To Happen,And You Are The Author</h2>
//     <br></br>

//     </div>
//     <div>
//       <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/modern-contemporary-living-room-with-neutral-tones/modern-living-room-colours.jpg'  alt='Interior Design' className='interior-image'></img>
//       <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/modern-u-shaped-living-room-with-cream-upholstered-seating/living-room-modern-sofa-set-design.jpg'      alt='Interior Design' className='interior-image'></img>
//       <img  src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/living-room-with-nilaya-sofa-and-brown-accent-chair-with-ap-luxe-centre-table/living-room-chairs-with-white-sofa.jpg'        alt='Interior Design' className='interior-image'></img>
//       <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/white-modern-living-room-with-nilaya-furniture/modern-white-living-room.jpg'      alt='Interior Design' className='interior-image'></img>
//       <img  src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/modern-living-room-with-ap-furniture-and-wall-panels/modern-small-living-room-ideas.jpg'       alt='Interior Design' className='interior-image'></img>
      
      
//       <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/modern-contemporary-living-room-with-wooden-panelling/contemporary-living-room-design.jpg '  alt='Interior Design' className='interior-image'></img>
//     </div>
//     </>
//   )
// }
// export default Home


import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="home-container">
        <h1>Elavating Interior Design With ICarve Creations</h1>
        <br />
        <h2>An Empty Room Is a Story Waiting To Happen, And You Are The Author</h2>
        <br />
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="slide">
            <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/modern-contemporary-living-room-with-neutral-tones/modern-living-room-colours.jpg' alt='Interior Design' className='interior-image' />
          </div>
          <div className="slide">
            <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/modern-u-shaped-living-room-with-cream-upholstered-seating/living-room-modern-sofa-set-design.jpg' alt='Interior Design' className='interior-image' />
          </div>
          <div className="slide">
            <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/living-room-with-nilaya-sofa-and-brown-accent-chair-with-ap-luxe-centre-table/living-room-chairs-with-white-sofa.jpg' alt='Interior Design' className='interior-image' />
          </div>
          <div className="slide">
            <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/white-modern-living-room-with-nilaya-furniture/modern-white-living-room.jpg' alt='Interior Design' className='interior-image' />
          </div>
          <div className="slide">
            <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/modern-living-room-with-ap-furniture-and-wall-panels/modern-small-living-room-ideas.jpg' alt='Interior Design' className='interior-image' />
          </div>
          <div className="slide">
            <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/modern-contemporary-living-room-with-wooden-panelling/contemporary-living-room-design.jpg' alt='Interior Design' className='interior-image' />
          </div>
        </Slider>
      </div>

      <div>
       <h2>We Design Your Dreams!</h2>
       <div className="card-container">
          <div className="card">
            <h3>Design Card</h3>
            <p>Creativity with ICrave Creations,where innovation meets imagination in every design</p>
          </div>
          <div className="card">
            <h3>Transform Your Existing Room</h3>
            <p>Let ICrave transform your space into a sanctuary of style and comfort,tailored precisely to your vision</p>
          </div>
          <div className="card">
            <h3>Manage Room Type</h3>
            <p>ICrave Creations,where every piece tells a story of passion and precision</p>
          </div>
        </div>

        <div className="image-text-container">
        <div className="image-text">
          <img src='https://margaritabravo.com/wp-content/uploads/2018/01/COLORADO-BOULDER-6.png' alt='Interior Design Left' />
          <h2>AfterBefore Crafting Dreams: Introducing ICrave Creations</h2>
          <p>ICrave Creations Where dreams take shape and ordinary space become extraordinary</p>
        </div>
        <div className="image-text">
          <img src='https://margaritabravo.com/wp-content/uploads/2018/01/COLORADO-BOULDER-5.png' alt='Interior Design Right' />
          <h2>AfterBefore Crafting Dreams: Introducing ICrave Creations</h2>
          <p>ICrave Creations Where dreams take shape and ordinary space become extraordinary</p>
        </div>
        </div>
        <div className="our-work-container">
        <h2>Our Work</h2>
        <div className="project">
          <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/our-work/a-complete-home-renovation-in-chennai/title-swing-in-the-living-room.jpg' alt='Project 1' />
          <div className="project-text">
            <h2>A complete home renovation in Bangalore</h2>
            <p><b>Project Brief: </b>A 3 BHK bungalow with an area of 3000 sqft</p>
          </div>
        </div>
        <div className="project">
          <img src='https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/our-work/a-cosy-home-in-mumbai/title-a-cosy-home-in-mumbai.jpg' alt='Project 2' />
          <div className="project-text">
            <h2>A Cosy home in Mumbai</h2>
            <p><b>Project Brief: </b>A complete home renovation for a family of five</p>
          </div>
        </div>
        </div>

       
      
        <Footer></Footer>
       
      </div>
    </>
  );
}

export default Home;



