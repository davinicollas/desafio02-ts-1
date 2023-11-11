import { Button } from "@chakra-ui/react"

interface iButton {
    descricao: string,
    forname: string,
    event: (param: string) => void
}

export const ButtonHellow = ({forname, descricao, event }: iButton) => {

    return (
        <Button onClick={() => event(forname)} colorScheme={'blue'} variant={'solid'} size='lg'
            border='2px'
            marginTop="4">
            {descricao}
        </Button>
    )
}