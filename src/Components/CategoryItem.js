import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 flex:1; 
 margin:3px;
 height:23vh;
 position:relative ;
 `
const Image = styled.img`
 border-radius:5px ;
 width:90% ;
 height:15vh ;
 background-color:#f5fbfd;
 object-fit:cover ;

`
const Info = styled.div`
position:absolute ;
top: 0;
left:0;
width:90% ;
height:15vh;
display:flex ;
align-items:center ;
justify-content:center ;
/* background-color:red ; */
`
const Title = styled.h1`
color:white ;
font-size:20px ;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      {console.log("geners")}
        <Image src={item.img}/>
        
        <Info>
            <Title>{item.title}</Title>
        </Info>
        
    </Container>
  )
}

export default CategoryItem