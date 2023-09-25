import styled from "styled-components"

const HeaderBackgroundCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    border-radius: 50px;
    background-color: blue;
`

export const HeaderBackground = () => {
    return <HeaderBackgroundCircle></HeaderBackgroundCircle>
}