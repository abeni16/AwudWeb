import React from 'react'
import { entertainment } from '../../Data'
import styled from 'styled-components'
import EntertainmentItem from './EntertainmentItem'
const Container = styled.div`
  display:flex;
  padding:20px 20px 0px 20px;
  justify-content:space-between;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 0px 20px ;

`
const Entertainment = () => {
  return (
      <>
      <Tetxt>Entertainment</Tetxt>
      <Container>
        {
           entertainment.map(item=>(
           < EntertainmentItem item={item}  key={item.id}/>
            ))
        }
    </Container>
      </>
    
  )
}

export default Entertainment