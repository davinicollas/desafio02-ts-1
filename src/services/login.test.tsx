import { login } from "./login"
describe('login', () => {


    const mockemail = 'davi@nicollas.com';

    it('Deve exibir um alert com boas vindas', async () => {
        const response =  await login(mockemail)
        expect(response).toBeTruthy()
    })

    it('Email invalido ', async () => {
        const response = await login(`Email@invalido`)
        expect(response).toBeFalsy()
    })
  
});