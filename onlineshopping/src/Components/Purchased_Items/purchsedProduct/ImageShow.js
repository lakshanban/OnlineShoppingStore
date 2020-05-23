import React from "react";
import {Carousel} from "react-bootstrap";



export default function ImageShow(props){




    return (
        <div style={{width:400}}>

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`data:image/jpeg;base64,${props.product.pimages[0].data}`}
                    alt="First slide"
                    height="500"

                />
                <Carousel.Caption>
                    <h3>{props.product.pname}</h3>
                    <p>{props.product.pdescription}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`data:image/jpeg;base64,${props.product.pimages[1].data}`}
                    alt="Third slide"
                    height="500"
                />

                <Carousel.Caption>
                    <h3>{props.product.pname}</h3>
                    <p>{props.product.pdescription}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`data:image/jpeg;base64,${props.product.pimages[2].data}`}
                    alt="Third slide"
                    height="500"
                />

                <Carousel.Caption>
                    <h3>{props.product.pname}</h3>
                    <p>{props.product.pdescription}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
    )
}
