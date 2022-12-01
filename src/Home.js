import React from "react";
import "./Home.css";
import Product from  "./Product";


function Home() {
    return (
            <div className="home">
                <div className="home_container">
                    <img src="https://previews.123rf.com/images/bannosuke/bannosuke1605/bannosuke160500032/59606031-devices-with-internet-shop.jpg" 
                    alt="" className="home_image" />
                

                <div className="home_row">
                    <Product 
                        id="123"
                        title="torba"
                        price={11.96}
                        rating={3}
                        image="https://media.istockphoto.com/photos/suitcases-in-light-hotel-room-image-picture-id1132719236?s=612x612"
                        />
                    <Product
                     id="456"
                     title="torebeczka"
                     price={15.96}
                     rating={2}
                     image="https://st.depositphotos.com/1735158/4843/i/600/depositphotos_48437439-stock-photo-brown-leather-bag-in-female.jpg"
                    />
                </div>

                <div className="home_row">
                    <Product 
                     id="1234"
                     title="walizka"
                     price={1900}
                     rating={4}
                     image="https://st.depositphotos.com/1598609/1362/i/600/depositphotos_13628974-stock-photo-lunch-bag.jpg"
                    />
                    <Product
                     id="789"
                     title="walizka"
                     price={1900}
                     rating={4}
                     image="https://st.depositphotos.com/1770836/1381/i/600/depositphotos_13812318-stock-photo-fruits-and-vegetables-in-grocery.jpg"/>
                    <Product 
                     id="001"
                     title="walizka"
                     price={1900}
                     rating={4}
                     image="https://st3.depositphotos.com/13349494/37060/i/600/depositphotos_370600658-stock-photo-leather-handbag-golden-earrings-perfume.jpg"/>
                </div>

                <div className="home_row">
                    <Product 
                        id="789"
                     title="walizka"
                     price={1900}
                     rating={4}
                     image="https://st2.depositphotos.com/1137241/8362/i/600/depositphotos_83629852-stock-photo-womens-fashion-clutch-on-pink.jpg"/>
                    <Product 
                    id="789"
                    title="walizka"
                    price={1900}
                    rating={4}
                    image="https://st3.depositphotos.com/3268649/32542/i/600/depositphotos_325422072-stock-photo-festive-evening-golden-clutch-on.jpg"/>
                </div>    
            </div>
        </div>
      
    )
}

export default Home