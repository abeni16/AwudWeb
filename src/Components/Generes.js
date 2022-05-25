import React from 'react'
import { AllCatgories } from '../Data'
import styled from 'styled-components'
import { geners } from '../Data'
import GenersItem from './GenersItem'
const Container = styled.div`
  display:flex;
  padding:20px 20px 0px 20px;
  justify-content:space-between;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 0px 20px ;

`
const Generes = () => {
  return (
      <>
      <Tetxt>Geners</Tetxt>
      <Container>
        {
          
            geners.map(item=>(
           <GenersItem item={item} key={item.id}/>
            ))
        }
    </Container>
      </>
    
  )
}

export default Generes