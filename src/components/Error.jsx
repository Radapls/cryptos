/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Error.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import styled from '@emotion/styled'
import React from 'react'

export const Error = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

const Text = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: Epilogue, sans-serif;
    font-weight: 700;
    text-align: center;
`
