interface ITitle {
    text: string
    fontSize?: number
    fontStyle?: string
}

export const Title = ({text, fontSize, fontStyle}: ITitle) => {
    return <h1>{text}</h1>
}