/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file App.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */
import styled from '@emotion/styled'
import { Form } from './components/Form'
import CryptoImage from './img/cryptos.png'

const Heading = styled.h1`
    font-family: Epilogue, sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;

    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
        margin:10px auto auto
    }
`
const Image = styled.img`
    max-width: 800px;
    width: 90%;
    margin: 100px auto 0 auto;
    display:block;
`
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 2rem;
    }
`


function App() {

  return (
    <Container>
        <Image src={CryptoImage} alt="Crypto banner" draggable="false"/>

        <div>
            <Heading>Search Crypto quotations</Heading>
            <Form/>
        </div>
    </Container>
  )
}

export default App
