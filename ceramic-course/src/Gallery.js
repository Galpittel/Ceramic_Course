import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

const images = [
    {
        original: 'https://content.vp4.me/orlysmoove/Content/%d7%a1%d7%93%d7%a0%d7%aa%20%d7%92%d7%99%d7%a0%d7%94%20%d7%91%d7%a6%d7%9c%d7%97%d7%aa%206_864x576-r.png',
        thumbnail: 'https://content.vp4.me/orlysmoove/Content/%d7%a1%d7%93%d7%a0%d7%aa%20%d7%92%d7%99%d7%a0%d7%94%20%d7%91%d7%a6%d7%9c%d7%97%d7%aa%206_864x576-r.png',
        description: 'Bringing nature into your home, one ceramic garden at a time.'
    },
    {
        original: 'https://content.vp4.me/orlysmoove/Content/%e2%80%8f%e2%80%8f20221104_143844%20-%20%d7%a2%d7%95%d7%aa%d7%a7_864x648-r.jpg',
        thumbnail: 'https://content.vp4.me/orlysmoove/Content/%e2%80%8f%e2%80%8f20221104_143844%20-%20%d7%a2%d7%95%d7%aa%d7%a7_864x648-r.jpg',
        description: 'Light up your Hanukkah with our ceramic garden in a plate, a symbol of hope and growth for the Festival of Lights.'
    },
    {
        original: 'https://content.vp4.me/orlysmoove/Content/20211129_104319_864x648-r.jpg',
        thumbnail: 'https://content.vp4.me/orlysmoove/Content/20211129_104319_864x648-r.jpg',
        description: 'Create your own serene oasis with our ceramic garden in a plate workshop.'
    },
    {
        original: 'https://content.vp4.me/orlysmoove/Content/%d7%a1%d7%93%d7%a0%d7%aa%20%d7%92%d7%99%d7%a0%d7%94%20%d7%91%d7%a6%d7%9c%d7%97%d7%aa%202_864x576-r.png',
        thumbnail: 'https://content.vp4.me/orlysmoove/Content/%d7%a1%d7%93%d7%a0%d7%aa%20%d7%92%d7%99%d7%a0%d7%94%20%d7%91%d7%a6%d7%9c%d7%97%d7%aa%202_864x576-r.png',
        description: 'Small but mighty - our ceramic garden in a plate adds a touch of tranquility to any space.'
    },
    {
        original: 'https://market.marmelada.co.il/images/detailed/6117/20200430_162303.jpg?source_page=products.view',
        thumbnail: 'https://market.marmelada.co.il/images/detailed/6117/20200430_162303.jpg?source_page=products.view',
        description: 'Unleash your creativity and cultivate your very own mini garden in a plate!'
    },
    {
        original: 'https://market.marmelada.co.il/images/detailed/6117/20200430_164124.jpg?source_page=products.view',
        thumbnail: 'https://market.marmelada.co.il/images/detailed/6117/20200430_164124.jpg?source_page=products.view',
        description: 'Make your house a home with our unique ceramic garden in a plate personalized with your family name.'
    },
    {
        original: 'https://market.marmelada.co.il/images/detailed/6117/20200126_163239.jpg?source_page=products.view\n',
        thumbnail: 'https://market.marmelada.co.il/images/detailed/6117/20200126_163239.jpg?source_page=products.view\n',
        description: 'Art and nature come together in our ceramic garden in a plate workshop.'
    }
];

function Gallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = (event, { index }) => {
        setSelectedImageIndex(index);
        setIsZoomed(false);
    };

    const handleImageMouseOver = (event, { index }) => {
        setSelectedImageIndex(index);
        setIsZoomed(true);
    };

    const handleImageMouseOut = () => {
        setIsZoomed(false);
    };

    return (
        <div className="gallery-container">
            <ImageGallery
                items={images}
                thumbnailPosition="bottom"
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                startIndex={selectedImageIndex}
                onClick={handleImageClick}
                onMouseOver={handleImageMouseOver}
                onMouseOut={handleImageMouseOut}
                renderItem={(item) => {
                    return (
                        <div className={`image-wrapper ${isZoomed ? 'zoomed' : ''}`}>
                            <img
                                src={item.original}
                                alt={item.description}
                                className="image"
                            />
                            <div className="caption">{item.description}</div>
                        </div>
                    );
                }}
            />
        </div>
    );
}

export default Gallery;
