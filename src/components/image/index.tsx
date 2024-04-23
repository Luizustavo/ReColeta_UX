import React from "react";
import './style.css'

type ImageProps = {
    src: string,
    alt: string,
    width?: number,
    height?: number
}

const Image: React.FC<ImageProps> = ({src, alt, width, height}) => {
    return (
        <div className="image-container">
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    )
}

export default Image;
