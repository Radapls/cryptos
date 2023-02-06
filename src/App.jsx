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
import { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners'
import { Form } from './components/Form'
import Result from './components/Result'
import CryptoImage from './img/cryptos.png'

function App() {

    const [coins, setCoins] = useState({})
    const [result, setResult ] = useState({})
    const [loading, setLoading ] = useState(false)

    useEffect(() => {
      if(Object.keys(coins).length > 0) {
        const {coin, cryptoCoin} = coins
        const quoteCrypto = async () => {
            setLoading(true)
            setResult({})

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`

            const response = await fetch(url)
            const result = await response.json()

            setResult(result.DISPLAY[cryptoCoin][coin])

            setLoading(false)
        }
        quoteCrypto()
      }

    }, [coins])

  return (
    <Container>
        <Image src={CryptoImage} alt="Crypto banner" draggable="false"/>

        <div>
            <Heading>Search Crypto quotations</Heading>
            <Form setCoins={setCoins}/>

            {loading && <ContainerCenter><CircleLoader color="#66a2fe" cssOverride={{display:'flex', alignItems: 'center', justifyContent: 'center'}}/></ContainerCenter>}
            {result.PRICE && <Result result={result}/> }
        </div>
    </Container>
  )
}

export default App

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
const ContainerCenter = styled.div`
height: 50%;
display: flex;
align-items: center;
justify-content: center;
`