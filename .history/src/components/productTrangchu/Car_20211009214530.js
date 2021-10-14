import React from 'react'
import { Carousel } from 'react-bootstrap'

export const Car = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="kichthuoc"
                        className="d-block w-100"
                        src="/images/crsimage1.jpg"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="kichthuoc"

                        className="d-block w-100"
                        src="/images/crsimage2.jpg"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="kichthuoc"
                        className="d-block w-100"
                        src="/images/crsimage3.jpg"
                    />
                    
                </Carousel.Item>
            </Carousel>
        </>
    )
}
