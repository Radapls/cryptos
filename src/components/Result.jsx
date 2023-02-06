/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Result.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
color: #fff;
font-family: Epilogue, sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`

const Text = styled.p`
font-size: 18px;

span{
    font-weight: 700;
}
`

const Price = styled.p`
font-size: 24px;

span{
    font-weight: 700;
}
`

const Image = styled.img`
    display:block;
    width: 120px;
`


const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
  return (
    <Container>
        <Image
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt="image Crypto" />

        <div>
            <Price>The prices is: <span>{PRICE}</span></Price>
            <Text>The highest price is: <span>{HIGHDAY}</span></Text>
            <Text>The lowest prices is: <span>{LOWDAY}</span></Text>
            <Text>Variation in the last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Last update: <span>{LASTUPDATE}</span></Text>
        </div>
    </Container>
  )
}

export default Result