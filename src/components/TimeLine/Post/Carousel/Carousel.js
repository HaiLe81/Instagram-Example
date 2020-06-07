import React from "react";
import "./Carousel.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
export default function Carousel(props) {
  const { urls } = props;
  const sizeImages = urls.length;
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={sizeImages}
        showControls={sizeImages > 1 ? true : false}
        showIndicators={sizeImages > 1 ? true : false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          {urls &&
            urls.map((item, index) => (
              <MDBCarouselItem key={index} itemId={`${(index += 1)}`}>
                <MDBView>
                  <img className="" src={`${item}`} alt="First slide" />
                </MDBView>
              </MDBCarouselItem>
            ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
