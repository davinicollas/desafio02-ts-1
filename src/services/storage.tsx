interface IDIoBank {
    login:boolean
}
const dioPro = {
    login: false
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