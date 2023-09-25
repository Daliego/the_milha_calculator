import { useState } from "react"
import { Button, IButtonValue } from "../button"
import { NumberInput } from "../input"

export interface IMilhasInputPanel {
    clickHandler?: () => void
}

export const MilhasInputPanel = ({clickHandler}: IMilhasInputPanel) => {
    const [input, setInputValue] = useState({value: 100})

    const clickHandleChanger = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, buttonValue?:IButtonValue) => {
        e.preventDefault();
        if (buttonValue) {
            const {value, up} = buttonValue 

            const valueNumber = up ? value : -value

            setInputValue({value: input.value + valueNumber})
        }
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInputValue({value: Number(event.target.value)})
    }

    return (
    <div className='milhaInputGroup'>
        <Button text='-1k' clickHandler={clickHandleChanger} buttonValue={{up: false, value: 1000}}></Button>
        <Button text='-10k' clickHandler={clickHandleChanger} buttonValue={{up: false, value: 10000}}></Button>
        <NumberInput value={input.value} className="milhasInput" changehandler={onChangeHandler} id="milhasInputValue"></NumberInput>
        <Button text='+1k' clickHandler={clickHandleChanger} buttonValue={{up: true, value: 1000}}></Button>
        <Button text='+10k' clickHandler={clickHandleChanger} buttonValue={{up: true, value: 10000}}></Button>
    </div>
    )
}