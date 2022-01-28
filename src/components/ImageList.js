import React from 'react';

const ImageList = ({ images }) => {
    const list = images.map(image => {
        const { description, id, urls } = image
        return <img src={urls.regular} alt={description} key={id} />
    })

    return (
        <div>{list}</div>
    );
}

export default ImageList;