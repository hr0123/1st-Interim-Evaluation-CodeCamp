import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Wrapper = styled.div`
  width: 764px;
  margin-left: 25px;
  margin-bottom: 20px;
  margin: 0px 20px 20px 20px;
`;
const SliderItem = styled.div`
  width: 764px;
  height: 240px;
  font-size: 50px;
  font-weight: bold;
  color: white;
  background-color: #6400ff;
  text-align: center;
  padding-top: 70px;
`;

export default function Banner() {
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem>Carousel 1</SliderItem>
        </div>
        <div>
          <SliderItem>Carousel 2</SliderItem>
        </div>
        <div>
          <SliderItem>Carousel 3</SliderItem>
        </div>
      </Slider>
    </Wrapper>
  );
}
