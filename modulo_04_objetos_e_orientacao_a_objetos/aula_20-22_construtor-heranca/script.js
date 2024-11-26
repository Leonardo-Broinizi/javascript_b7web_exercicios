// Código da aula sobre construtor:
/*let person = {
    name: 'Leonardo',
    lastName: 'Broinizi', 
    age: 90,
    getFullName() {
        return `${this.name} ${this.lastName}`;
    },
    start() {
        console.log(`deu start na pessoa`);
    }
}

console.log(person.getFullName()); 
*/

// Código da aula sobre herança: 

const defaultUser = {
    name: '',
    email: '',
    level: 1
} 

let user1 = {
    ...defaultUser,
    name: 'Leonardo',
    email: 'suporte@b7web.com.br'
}

let adm1 = {
    ...defaultUser,
    name: 'Admin Boladão',
    email: 'adm@admboladao.com.br',
    level: 2
}

console.log(adm1);