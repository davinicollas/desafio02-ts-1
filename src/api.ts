const conta = {
    email:'davi@nicollas.com',
    password: '12345',
    name: 'davi',
    saldo: 5000,
    id: '1'
}

export const api = new Promise((value)=>{
    setTimeout(()=>{
        value(conta)
    },3000)
})