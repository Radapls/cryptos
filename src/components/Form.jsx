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
import React from 'react'
import { coins } from '../data/coins'
import useSelectCoin from '../hooks/useSelectCoin'

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

export const Form = () => {


    const [coin, SelectCoin] = useSelectCoin('Select your coin', coins)

  return (
    <form>

        <SelectCoin/>

        {coin}

        <InputSubmit
            type="submit"
            value="Quote" />
    </form>
  )
}
