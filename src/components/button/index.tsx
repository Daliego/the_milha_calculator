import React from 'react'
import styled from 'styled-components'

export interface IButtonValue {
    value: number
    up: boolean
}

interface IButtonStyle {
    color?: string
    className?: string
    text: string
    buttonValue?: IButtonValue
    clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, buttonValue?: IButtonValue) => void
}

const ButtonStyle = styled.button`
    color: "#715fb7";
    display: inline-block;
    font-size: 1em;
    text-align: center;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    display: flex;
`

export const Button = ({className, text, clickHandler, buttonValue}: IButtonStyle) => {
    // if (!buttonValue) {

    // }
    // const {value, up} = buttonValue;

    // const valueNumber = up ? value : -value

    return <ButtonStyle className={className} onClick={(e) => clickHandler(e, buttonValue ? buttonValue : undefined)}>{text}</ButtonStyle>
}