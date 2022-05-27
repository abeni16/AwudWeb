import React from "react";
import styled from "styled-components";
import { MdFavoriteBorder } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const Infoi = styled.div`
  opacity: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0vh;
  left: 0vh;
  padding-top: 21vh;
  padding-left: 1vh;
  height: 30vh;
  width: 90%;
  display: flex;
`;
const Container = styled.div`
  flex: 1;
  /* margin:3px; */
  width: 20vw;
  margin: 4px;
  /* margin-left:20px ; */
  height: 40vh;

  position: relative;

  &:hover ${Infoi} {
    opacity: 1;
  }
`;

const Image = styled.img`
  border-radius: 5px;
  width: 90%;
  height: 30vh;
  object-fit: cover;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const Info = styled.div`
  margin-top: 5px;
  text-align: left;
`;
const Title = styled.h1`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
const ArtistName = styled.p`
  color: black;
  font-size: 15px;
`;
const Date = styled.p`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;
const MusicLoveCardItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Infoi>
        <Icon>
          <BsPlayFill />
        </Icon>
        <Icon>
          <MdFavoriteBorder />
        </Icon>
        <Icon>
          <BiDotsHorizontalRounded />
        </Icon>
      </Infoi>
      <Info>
        <Title>{item.musicTitle}</Title>
        <ArtistName>{item.artistName}</ArtistName>
        <Date>{item.releasedDate}</Date>
      </Info>
    </Container>
  );
};

// const Infoi = styled.div`
// opacity:0 ;
// position:absolute ;
// background-color:rgba(0,0,0,0.2);
// top: 0vh;
// left:0vh;
// padding-top:27vh ;
// padding-left:1vh ;
// height:35vh;
// display:flex;

// z-index:1;

// `
// const Container = styled.div`
// margin-left:20px ;
//  height:49vh ;
//  position: relative;
//  background-color: black;
//  &:hover ${Infoi}{
//     opacity : 1;
//  }
//  `
// const Image = styled.img`
//  border-radius:5px ;
//  width:100% ;
//  height:35vh ;
//  object-fit:cover ;
//  z-index:1;

// `
// const Info = styled.div`
//   padding-top:20px ;
//   width:100% ;
// /* top: 0;
// left:0;

// height:100%;
// display:flex ;
// align-items:center ;
// justify-content:center ; */
// /* background-color:red ; */
// `
// const Title = styled.h1`
// color:white ;
// font-size:15px ;
// `
// const ArtistName = styled.p`
// color:white ;
// font-size:15px ;
// font-weight:bold ;
// `
// const Date = styled.p`
// color:white ;
// font-size:15px ;
// font-weight:bold ;
// `

// const Icon = styled.div`
// width:40px ;
// height:40px ;
// border-radius: 50%;
// background-color:white ;
// display:flex ;
// align-items:center ;
// justify-content:center ;
// margin:5px ;
// transition:all 0.2s ease;
// &:hover{
//     transform:scale(1.2) ;
// }
// `
// const MusicLoveCardItem= ({item}) => {
//   return (
//     <Container>
//        <Image src={item.img}/>

//         {/* <Infoi>
//           <Icon><BsPlayFill/></Icon>
//           <Icon><MdFavoriteBorder/></Icon>
//           <Icon><BiDotsHorizontalRounded/></Icon>
//         </Infoi> */}
//         <Info>
//             <Title>{item. musicTitle}</Title>
//             <ArtistName>{item.artistName}</ArtistName>
//             <Date>{item.releasedDate}</Date>
//         </Info>

//     </Container>
//   )
// }

export default MusicLoveCardItem;
