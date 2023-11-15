import { login } from "./login"
describe('login', () => {



    it('Deve exibir um alert com boas vindas', async () => {
        const response =  await login('davi@nicollas.com', '12345')
        expect(response).toBeTruthy()
    })

    it('Email invalido ', async () => {
        const response = await login(`Email@invalido`, '123456')
        expect(response).toBeFalsy()
    })
  
});