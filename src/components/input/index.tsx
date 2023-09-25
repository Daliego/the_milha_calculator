import { useState } from "react"

interface INumberInput {
    value?: number
    className?: string
    id?: string
    changehandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const NumberInput = ({value, className, changehandler, id}: INumberInput) => {
    // const [input, setInput] = useState({value: value})

    return <input value={value ? (value  < 0 ? value = 0 : value) : 0} type="number" className={className} onChange={(e) => changehandler(e)} min={0} id={id} key={id}></input>
}