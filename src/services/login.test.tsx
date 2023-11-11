import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login('Davi')
        expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo: Davi')
    })
})