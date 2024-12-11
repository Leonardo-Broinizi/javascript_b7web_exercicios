let nome = '   Leonardo Broinizi de Farias   ';

console.log(nome.replaceAll(' ', '').length); // length é o método que retorna a quantidade de caracteres de uma string. 
// replaceAll retorna todas as seguencias de caracteres especificadas no primeiro argumento pela segunda. replace faz isso apenas com a primeira seguencia que encontrar. Se não encontrar não retorna erro, apenas ignora. Obs.: ele não altera a variável, apenas retorna esse valor. Para alterar a variável precisamos fazer 'variável = variável.replace()'

console.log(nome.indexOf('nar')); // indexOf retorna o index (posição) em que encontrou pela primeira vez a sequencia de caracteres que foi especificada. Se não encontrar ele retorna -1.

console.log(nome.toUpperCase());

console.log(nome.slice(4,7)); // slice seleciona apenas o trecho indicado da string.

console.log(nome.substr(4, 8)); // substr é parecido com o slice mas o segundo valor indicado, diferente de slice, não representa o index final que ele deve alcansar, mas a quantidade de caracteres que ele deve selecionar.

console.log(nome.toUpperCase()); // toUpperCase retorna todos os caracteres como maiúsculos. toLowerCase retorna todos como minúsculos. 

console.log(nome.trim()); // Retorna o conteúdo da string sem os espaços no início e no final.

console.log(nome.charAt(4)); // Mostra o caractere que está na posição informada.

console.log(nome[4]); // Um jeito mais simples de mostrar o caracter que está nessa posição do index.

console.log(nome.split(' ')); // Transforma uma string em um array. Isso é muito útil em muitos casos. A separação se dará a partir da sequencia informada, que será removida. Por exemplo: se, no caso dessa aula, eu passasse como argumento 'Broinizi', o retorno seria um array ['    Leonardo', ' de Farias    '], já que o Broinizi será removido e o array será separado com base nisso. Se eu passasse ' ', seria retornado um array com os nomes e alguns itens vazios (onde estavam os espaços em branco). Se eu passasse '', ele separaria todos os caracteres em ítens do array. 

console.log(nome);


// Obs.: Lembrando que esses métodos e propriedades não alteram a variável, eles retornam um valor.



// Anotações: 

/* Texto gerado pela MariTalk (Sabiá-3).

Prompt: Liste as principais propriedades de strings em JavaScript com sua sintaxe e explique seu uso.

Resposta: Em JavaScript, as strings são um dos tipos de dados fundamentais e possuem várias propriedades e métodos que podem ser utilizados para manipular e interagir com elas. Aqui estão algumas das principais propriedades de strings em JavaScript, junto com a sua sintaxe e uma breve explicação de seu uso:

1. **length**
   - **Sintaxe:** `string.length`
   - **Uso:** Retorna o número de caracteres na string.

2. **charAt()**
   - **Sintaxe:** `string.charAt(index)`
   - **Uso:** Retorna o caractere na posição especificada pelo índice.

3. **charCodeAt()**
   - **Sintaxe:** `string.charCodeAt(index)`
   - **Uso:** Retorna o valor numérico do caractere na posição especificada pelo índice.

4. **concat()**
   - **Sintaxe:** `string.concat(string2, string3, ..., stringN)`
   - **Uso:** Une duas ou mais strings e retorna uma nova string.

5. **indexOf()**
   - **Sintaxe:** `string.indexOf(searchString, position)`
   - **Uso:** Retorna a posição da primeira ocorrência de uma substring na string.

6. **lastIndexOf()**
   - **Sintaxe:** `string.lastIndexOf(searchString, position)`
   - **Uso:** Retorna a posição da última ocorrência de uma substring na string.

7. **slice()**
   - **Sintaxe:** `string.slice(startIndex, endIndex)`
   - **Uso:** Retorna uma parte da string entre os índices começando e terminando, ou até o final da string se o índice final não for especificado.

8. **substring()**
   - **Sintaxe:** `string.substring(startIndex, endIndex)`
   - **Uso:** Retorna uma parte da string entre os índices começando e terminando, ou até o final da string se o índice final não for especificado.

9. **substr()**
   - **Sintaxe:** `string.substr(startIndex, length)`
   - **Uso:** Retorna uma parte da string começando do índice inicial e com o número de caracteres especificado.

10. **split()**
    - **Sintaxe:** `string.split(separator, limit)`
    - **Uso:** Divide a string em um array de substrings, usando o separador especificado.

11. **replace()**
    - **Sintaxe:** `string.replace(regexp, replacement)`
    - **Uso:** Retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um valor específico.

12. **toUpperCase()**
    - **Sintaxe:** `string.toUpperCase()`
    - **Uso:** Retorna a string convertida para letras maiúsculas.

13. **toLowerCase()**
    - **Sintaxe:** `string.toLowerCase()`
    - **Uso:** Retorna a string convertida para letras minúsculas.

14. **trim()**
    - **Sintaxe:** `string.trim()`
    - **Uso:** Retorna uma nova string com os espaços em branco no início e no final removidos.

Essas são apenas algumas das propriedades e métodos mais comuns disponíveis para strings em JavaScript. Cada um deles pode ser extremamente útil em diferentes cenários de manipulação de texto e formatação de dados em aplicações web.

*/