import React from 'react'
import { LoveMusic} from '../Data'
import styled from 'styled-components'
import { NewReleased } from '../Data'
import NewReleaseItem from './NewReleaseItem'
const Container = styled.div`
  display:flex;
  padding:0px 20px 20px 20px;
  background-color: gray;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 20px 20px ;

`
const Slider = () => {
  return (
      <>
      <Tetxt>New Release for you</Tetxt>
      <Container>
        {
            NewReleased.map(item=>(
                <Tetxt>{item}</Tetxt>
            ))
        }
    </Container>
      </>
    
  )
}

export default Slider