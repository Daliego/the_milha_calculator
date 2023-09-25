import { useState } from "react";
import { NumberInput } from "../input"
import { Button, IButtonValue } from "../button";
import styled from "styled-components";

export interface IMIlhasDescountPanel {
    className?: string
}

export const IMIlhasDesountPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 70%;
`

export const MilhasDescountPanel = ({className}: IMIlhasDescountPanel) => {
    const [input, setInputValue] = useState({
        input_price: 70,
        input_discount: 0,
        input_bonus: 0
    })

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault(); 
        
        setInputValue({...input, [event.target.id]: `${event.target.value}`})        
    }

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, buttonValue?: IButtonValue) => {
        const milhas = document.querySelector('#milhasInputValue')?.attributes[4].nodeValue;
        console.log("Milhas: " + milhas)
        const numberOfMilheiro: number = Number(milhas)/1000
        console.log("Numero de milheiros: " + numberOfMilheiro)

        const {input_price, input_discount, input_bonus} = input
        console.log(`Price: ${input_price}, Discount: ${input_discount}, Bonus: ${input_bonus}`)    

        if (input_discount > 0 && input_bonus > 0) {
            const priceForMilheiro = (input_price - input_price * input_discount/100)/(numberOfMilheiro + numberOfMilheiro * input_bonus/100)
            console.log("Preço por milheiro " + priceForMilheiro)   
        } else {
            const priceForMilheiro = (input_price)/((numberOfMilheiro + numberOfMilheiro * input_bonus/100))
            console.log(priceForMilheiro)
        }

    }

    return (
        <IMIlhasDesountPanel>
            <label htmlFor='input_price'>Preço milheiro</label>
            <NumberInput id="input_price" value={input.input_price} changehandler={onChangeHandler}></NumberInput>
            <label htmlFor='input_discount'>Desconto</label>
            <NumberInput id="input_discount" value={input.input_discount} changehandler={onChangeHandler}></NumberInput>
            <label htmlFor='input_bonus'>Bônus</label>
            <NumberInput id="input_bonus" value={input.input_bonus} changehandler={onChangeHandler}></NumberInput>
            <Button text="Calcular" clickHandler={onClickHandler}></Button>
        </IMIlhasDesountPanel>
    )
}