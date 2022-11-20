import React from 'react';
import './style.css';
import '../mainStyle.css';


function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./GalleryImages', false, /\.(png|jpe?g|svg)$/));

export default function Gallery() {
    return (
        <div className='Gallery'>
            <div className='top-block'>
                <h1>LIGHTBOX SECTION</h1>
                <h4>This is some text inside of a div block.</h4>
            </div>
            <div className='images-grid'>
                {images.map((image) => {
                    return <div><img src={image} alt="imageObject" /></div>
                })}
            </div>
        </div>
    );
}