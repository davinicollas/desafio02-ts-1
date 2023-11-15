interface IDIoBank {
    login:boolean
    user: { 
        email: string
        password: string
        name: string
        balance: number
        id: string
    }
}
const dioPro = {
    login: false,
    user: {
        email: "",
        password: "",
        name: "",
        balance: 1,
        id: "",
    }
}




export const getAllLocalStorage =  (): string | null =>{
    return localStorage.getItem('diobank')
}

export const CreateLocalStorage =  () : void =>{
    localStorage.setItem('diobank',JSON.stringify(dioPro))
}

export const changeLocalStorage = (dioBank: IDIoBank) => {
    localStorage.setItem('diobank',JSON.stringify(dioBank))
}
