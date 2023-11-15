import { CreateLocalStorage, changeLocalStorage, getAllLocalStorage } from "./storage"
const dioBank = {
    login: false
}

describe ('storage', () => {  
    
    const mockSetItem = jest.spyOn(Storage.prototype,'setItem')

    it('deve retorna o localstorage', ()=> {
        const mockGetItem = jest.spyOn(Storage.prototype , 'getItem')

        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('deve criar o objeto',()=>{
        CreateLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))

    })

    it('deve alterar o valod do o objeto',()=>{
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))

    })
})