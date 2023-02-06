/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Form.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import request from '../constants/api'
import { coins } from '../data/coins'
import useSelectCoin from '../hooks/useSelectCoin'
import { Error } from './Error'

export const Form = ({setCoins}) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [coin, SelectCoin] = useSelectCoin('Select your coin', coins)
    const [cryptoCoin, SelectCryptoCoin] = useSelectCoin('Select your crypto', cryptos)

    useEffect(() => {

const consultApi = async () => {

    const url = request.cryptoList
    const response = await fetch(url)
    const result = await response.json()

    const arrayCrypto = result.Data.map( crypto => {
        const object = {
            id: crypto.CoinInfo.Name,
            name: crypto.CoinInfo.FullName
        }
        return object
    })

    setCryptos(arrayCrypto)

    }
    consultApi()
}, [])

const handleSubmit = e => {
        e.preventDefault()

    if([coin, cryptoCoin].includes('')) {
        setError(true)

        return;
    }
    setError(false)
    setCoins({coin, cryptoCoin})
}

  return (
    <>
        {error && <Error>All the fields are mandatory</Error>}
        <form onSubmit={handleSubmit}>

            <SelectCoin/>
            <SelectCryptoCoin/>

            <InputSubmit
                type="submit"
                value="Quote" />
        </form>
    </>
  )
}

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease-in-out;
    margin-top: 30px;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`