import React from 'react'
import { technology } from '../../Data'
import styled from 'styled-components'
import EntertainmentItem from './EntertainmentItem'
import TechnologyItem from './TechnologyItem'
const Container = styled.div`
  display:flex;
  padding:20px 20px 0px 20px;
  justify-content:space-between;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 0px 20px ;

`
const Technology = () => {
  return (
      <>
      <Tetxt>Entertainment</Tetxt>
      <Container>
        {
           technology.map(item=>(
           < TechnologyItem item={item}  key={item.id}/>
            ))
        }
    </Container>
      </>
    
  )
}

export default Technology