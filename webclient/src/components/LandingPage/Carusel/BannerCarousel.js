import React from 'react';
import { Carousel } from 'antd';
import wall1 from '../../../images/wall2.jpg';
import wall2 from '../../../images/wall3.jpg';

const BannerCarousel = () => {

    return (
        <Carousel autoplay>
            <div>
                <h3>
                    <img className="d-block w-100" src={wall1} alt="Second slide" />
                </h3>
            </div>
            <div>
                <h3>
                    <img className="d-block w-100" src={wall2} alt="Second slide" />
                </h3>
            </div>
            <div>
                <h3>
                    <img className="d-block w-100" src={wall1} alt="Second slide" />
                </h3>
            </div>

        </Carousel>
    );
}

export default BannerCarousel;