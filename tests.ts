import { getPasswordStrength, getUsersWithStrongPassword } from "./index";


describe("Teste unitário de getPasswordStrength," () => {
    test("Deve retornar 0 quando senha for null", () => {
        const testPass = null
        const result = getPasswordStrength(testPass)
        expect(result).toBe(0) 
    })
    test("Deve retornar 0 false quando senha for vazia", () => {
        const testPass = ""
        const result = getPasswordStrength(testPass)
        expect(result).toBe(0) 
    })

    test("Deve retornar 5 quando senha for forte", () => {
        const testPass = "Trabalho1@123"
        const result = getPasswordStrength(testPass)
        expect(result).toBe(5) 
    })

    test("Deve retornar 3 quando senha for ok", () => {
        const testPass = "trabalho2!"
        const result = getPasswordStrength(testPass)
        expect(result).toBe(3) 
    })
    test("Deve retornar 1 quando senha for fraca", () => {
        const testPass = "trabalho"
        const result = getPasswordStrength(testPass)
        expect(result).toBe(1) 
    })
})

describe("Teste para testar se a função chama outra função", () => {
    test("Deve retornar os 3 usuários")
        const testUsersPass = [
            {
                id: 1,
                name: 'Flávio',
                email: '',
                nickname: 'flavio',
                password: 'senha@#SuperForte123'
            },
            {
                id: 2,
                name: 'Jamil',
                email: '',
                nickname: 'jamil',
                password: 'senha@#SuperForte123'
            },
            {
                id: 3,
                name: 'Fábio',
                email: '',
                nickname: 'fabio',
                password: 'senha@#SuperForte123'
            }
        ]
        const result = getUsersWithStrongPassword(testUsersPass)
        expect(result.size).toBe(3)
})