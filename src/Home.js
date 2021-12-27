import React from 'react';
import Product from './Product'
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <img className='home_image' src="https://m.media-amazon.com/images/I/8129plm6hAL._SX3000_.jpg" alt="" />
            {/* Product id, title, rating, image */}
            <div className="home_row">
                <Product
                    id='101'
                    title='HP Pavilion Gaming Ryzen 5 15.6-inch(39.6 cm) FHD Gaming Laptop (8GB/512GB SSD/144Hz/RTX 3050 4GB Graphics/Windows 10/MS Office 2019/1.98kg), 15-ec2075AX, Black'
                    price={60999.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71Zv+aRg6GL._SL1500_.jpg"
                />
                <Product
                    id='102'
                    title='WARM LEATHER GLOVES FOR MEN BOY GIRL WOMEN /PROTECTIVE WARM HAND RIDING,CYCLING,BIKE GLOVES(Black)'
                    price={279.63}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/51HTUXfLCTL._UX522_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id='103'
                    title="Ben Martin Men's Quilted Bomber Jacket"
                    price={999.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41dC9Rr1DkL.jpg"
                />
                <Product
                    id='104'
                    title="iQOO Z5 5G(Arctic Dawn, 8GB RAM, 128GB Storage)|5000mAH"
                    price={43500.00}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71mCphsCGZL._SY606_.jpg"
                />
                <Product
                    id='105'
                    title='Black Disposable Face Masks - 50 Pack, Black -Soft on Skin -'
                    price={299.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71GQ7a36EaL._UX522_.jpg"
                />
            </div>
            <div className="home_row">

                <Product
                    id='106'
                    title='AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)'
                    price={38999.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71AqQyCMmeL._SX522_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;