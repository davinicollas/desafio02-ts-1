import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface iButton {
    event: MouseEventHandler
}

export const ButtonHellow = ({event }: iButton) => {

    return (
        <Button name="Login" onClick={event} colorScheme={'blue'} variant={'solid'} size='lg'
            border='2px'
            marginTop="4"> Login
        </Button>
    )
}