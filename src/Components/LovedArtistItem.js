import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
 flex:1; 
 margin:3px;
 height:50vh;
 position:relative ;
 background-color: black;
 `
const Image = styled.img`
 border-radius:50% ;
 width:90% ;
 height:35vh ;
 object-fit:cover ;

`
const Info = styled.div`
position:absolute ;
padding-top:10px ;
padding-left:100px ;
display:flex ;
align-items:center ;
justify-content:center ;
/* background-color:red ; */
`
const Title = styled.h1`
color:white ;
font-size:15px ;
`
const LovedArtistItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item. artistName}</Title>
        </Info>
        
    </Container>
  )
}

export default LovedArtistItem