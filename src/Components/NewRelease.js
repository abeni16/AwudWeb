import React from 'react'
import { LoveMusic} from '../Data'
import styled from 'styled-components'
import { NewReleased } from '../Data'
import NewReleaseItem from './NewReleaseItem'
const Container = styled.div`
  display:flex;
  padding:0px 20px 20px 20px;
  justify-content:space-between;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 20px 20px ;

`
const NewRelease = () => {
  return (
      <>
      <Tetxt>New Release for you</Tetxt>
      <Container>
        {
            NewReleased.map(item=>(
           <NewReleaseItem item={item}  key={item.id}/>
            ))
        }
    </Container>
      </>
    
  )
}

export default NewRelease