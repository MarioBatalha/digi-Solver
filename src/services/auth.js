export const SignIn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                token: 'nskhdfoejrpiwaojfpngldngorhoijpoejawpojpovjp',
                user: {
                    name: 'Mario Batalha',
                    email: 'mariobatalha9@gmail.com',
                    password: 'mariobatalha'
                }
            })
        }, 2000)
    }
)}