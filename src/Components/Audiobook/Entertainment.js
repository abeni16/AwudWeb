import React from 'react'
import { entertainment } from '../../Data'
import styled from 'styled-components'
import EntertainmentItem from './EntertainmentItem'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
const Container = styled.div`
  overflow:hidden ;
  width:1115px ;
  padding-left:25px ;
  margin-left:1px ;
  padding-right:25px ;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 0px 20px ;

`
const Entertainment = ({Podcasts}) => {
  const settings = {
    // lazyLoad:true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay:true,
    // speed:2000,
    // autoplaySpeed:2000,
    // cssEase:"linear"
  };
  return (
      <>
   
      <Tetxt>Entertainment</Tetxt>
      <Container>
      <Slider {...settings}>
        {
          
           entertainment.map(item=>(
           < EntertainmentItem item={item}  key={item.id}/>
            ))
        }
        </Slider>
    </Container>
      </>
    
  )
}

export default Entertainment