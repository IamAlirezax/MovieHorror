import React from 'react';
import { Jumbotron as Jumbo , Container  } from 'react-bootstrap';
import styled from 'styled-components';
import cinemaImage from '../assets/cinemaImage.jpg';


const Styles = styled.div`
.jumbotron{
    background:url(${cinemaImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
    text : algin;
}
.overlay{
    background-color : #000;
    opacity : 0.6;
    position: absolute;
    top:0;
    bottom : 0;
    z-index:-1;
}

`
;

export const Jumbotron = () => (
    <Styles>
  <Jumbo fluid className ="jumbo">
      <div className = "overlay"></div>
      <Container>
          <h1>𝐻𝑜𝓇𝓇𝑜𝓇 𝑀𝑜𝓋𝒾𝑒𝓈</h1>
          
      </Container>
        </Jumbo>

    </Styles>
)
