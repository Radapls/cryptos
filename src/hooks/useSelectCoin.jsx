/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file useSelectCoin.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: Epilogue, sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

const useSelectCoin = (label, options) => {

    const [state, setState] = useState('')

    const SelectCoin = () => (
        <>
        <Label> {label} </Label>
        <Select
            value={state}
            onChange={ e => setState(e.target.value)}>

            <option value="">Select</option>
            {options.map( option => (
                <option
                    key={option.id}
                    value={option.id}>
                {option.name}
                </option>
            ))}

        </Select>
        </>
    )

    return [state, SelectCoin]
}

export default useSelectCoin