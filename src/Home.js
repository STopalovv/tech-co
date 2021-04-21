import React from 'react'
import './Home.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <CarouselProvider className="home__carousel"
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                isPlaying={true}
                infinite={true}
                interval={3000}
            >
                <Slider>
                    <Slide  className='header__slide' index={0}>
                        <Image className='header__slideImage' src='https://ardes.bg/uploads/banners/352a300c.jpg' hasMasterSpinner={true} />
                    </Slide>
                    <Slide className='header__slide' index={1}>
                        <Image className='header__slideImage' src='https://ardes.bg/uploads/banners/abbb0c75.jpg' hasMasterSpinner={true} />
                    </Slide>
                    <Slide className='header__slide' index={2}>
                        <Image className='header__slideImage' src='https://ardes.bg/uploads/banners/4eaefee7.jpg' hasMasterSpinner={true} />
                    </Slide>
                </Slider>
                <ButtonBack className='home__prevButton'> <ArrowBackIosIcon /></ButtonBack>
                <ButtonNext className='home__nextButton'> <ArrowForwardIosIcon /></ButtonNext>
            </CarouselProvider>
            </div>
           <h1>Hot Products</h1>
           <div className='home__row'>
               <Product 
                    id="1234"
                    title= "Apple iPhone 12, 64GB, 5G, Black"
                    price={1719.99}
                    rating={5}
                    image="https://s13emagst.akamaized.net/products/33382/33381513/images/res_9c502e664bde724a8f8e180bbe1582c9.jpg?width=450&height=450&hash=B5A412328A8BC51D19BCDA6A18A27080"
               />
               <Product 
                    id="2345"
                    title= "Samsung Galaxy A51, Dual SIM, 128GB, 4GB RAM, 4G, Prism Blue"
                    price={499}
                    rating={5}
                    image="https://s13emagst.akamaized.net/products/27773/27772383/images/res_928e056f22216ac1cd6e73b2cb58c9e1.jpg?width=450&height=450&hash=93E3B4191D6A8CD3389655CCBA585B56"
               />
           </div>
           <div className='home__row'>
               <Product 
                    id="1234"
                    title= "Gaming ASUS TUF FX505DT"
                    price={1379.99}
                    rating={5}
                    image="https://s13emagst.akamaized.net/products/24805/24804143/images/res_ba2c6784e84b2b1ff5cdea5fad7cc50e.jpg?width=450&height=450&hash=4EB5A2A00A53FCCF336A60247B2007EE"
               />
               <Product 
                    id="1234"
                    title= "Gaming ASUS ROG Strix G15 G512LI"
                    price={1859.99}
                    rating={5}
                    image="https://s13emagst.akamaized.net/products/29938/29937179/images/res_f4f8e66cfb3c12536e8f5f58e365dac5.jpg?width=450&height=450&hash=B2B8BB33D17B00A053B532D96EB460A6"
               />
               <Product 
                    id="1234"
                    title= "Gaming HP Pavilion 16-a0004nq"
                    price={1699.99}
                    rating={5}
                    image="https://s13emagst.akamaized.net/products/32383/32382054/images/res_5a86be4f656c250cb472e12f79b02569.jpg?width=450&height=450&hash=115E34336156363132C763C3F729942E"
               />
            </div>
            <div className='home__row'>
               <Product 
                    id="1234"
                    title= 'Samsung 55TU7172, 55"'
                    price={869.99}
                    rating={5}
                    image="https://s13emagst.akamaized.net/products/31164/31163465/images/res_903858feb9a59351a9b153771c650a6a.jpg?width=450&height=450&hash=7749B540E64519FF54974FDCCF9BF5C2"
               />
            </div>
        </div>
    )
}

export default Home
