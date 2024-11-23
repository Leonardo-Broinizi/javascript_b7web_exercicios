let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Uva'];

console.log(`Frutas: ${fruits}`);

let bigfruits = fruits.filter((item) => {
    return item.length > 4;
    /*if(item.lenght > 4) {
        return true;
    } else {
        return false;
    }*/
});

console.log(`Frutas que tem o nome com mais de 4 letras: ${bigfruits}`);

let ok = fruits.every((value) => {
    return value.length > 3;
});

if(ok) {
    console.log('O nome de todas as frutas tem mais de 3 letras.');
} else {console.log('Há frutas com o nome com menos de 4 letras.')};

ok = fruits.some((value) => {
    return value.length >= 7;
});

if(ok) {
    console.log('Pelo menos o nome de uma dessas frutas tem 7 letras ou mais.');
} else {
    console.log('O nome de nenhuma destas frutas tem 7 letras ou mais.');
};

if(fruits.includes('Uva')) {
    console.log('Existe Uva nessa lista.');
} else {
    console.log('Não existe Uva nessa lista.');
};