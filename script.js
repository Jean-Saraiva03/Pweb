/**
* 1) Recebe três números e retorna o maior deles.
*/
function encontrarMaior(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
 
/**
* 2) Recebe três números e retorna-os em ordem crescente.
*/
function ordenarNumeros(num1, num2, num3) {
    let menor, meio, maior;
 
    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
        if (num2 <= num3) {
            meio = num2;
            maior = num3;
        } else {
            meio = num3;
            maior = num2;
        }
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
        if (num1 <= num3) {
            meio = num1;
            maior = num3;
        } else {
            meio = num3;
            maior = num1;
        }
    } else {
        menor = num3;
        if (num1 <= num2) {
            meio = num1;
            maior = num2;
        } else {
            meio = num2;
            maior = num1;
        }
    }
 
    return menor + ", " + meio + ", " + maior;
}
 
/**
* 3) Recebe uma string e retorna se ela é palíndromo ou não.
*/
function verificarPalindromo(texto) {
    let textoMaiusculo = texto.toUpperCase();
    
    let textoReverso = "";
    for (let i = textoMaiusculo.length - 1; i >= 0; i--) {
        textoReverso += textoMaiusculo[i];
    }
 
    if (textoMaiusculo === textoReverso) {
        return "A palavra '" + texto + "' É um palíndromo.";
    } else {
        return "A palavra '" + texto + "' NÃO é um palíndromo.";
    }
}
 
/**
* 4) Recebe 3 valores, informa se formam um triângulo e qual é o tipo.
*/
function verificarTriangulo(a, b, c) {
    
    if (a + b > c && a + c > b && b + c > a) {
        
        if (a === b && b === c) {
            return "É um Triângulo Equilátero (todos os lados iguais).";
        } else if (a === b || a === c || b === c) {
            return "É um Triângulo Isósceles (dois lados iguais).";
        } else {
            return "É um Triângulo Escaleno (todos os lados diferentes).";
        }
 
    } else {
        return "Os valores NÃO formam um triângulo.";
    }
}
 
 

//CÓDIGO PARA MOSTRAR OS RESULTADOS NO HTML (index.html)

 

let divResultados = document.getElementById("resultados");
 

let htmlFinal = "";

htmlFinal += "<h3>--- Teste Função 1 (Maior Número) ---</h3>";
htmlFinal += "<p>O maior entre 15, 30, 10 é: <strong>" + encontrarMaior(15, 30, 10) + "</strong></p>";
 

htmlFinal += "<h3>--- Teste Função 2 (Ordem Crescente) ---</h3>";
htmlFinal += "<p>A ordem de 100, 20, 50 é: <strong>" + ordenarNumeros(100, 20, 50) + "</strong></p>";
 

htmlFinal += "<h3>--- Teste Função 3 (Palíndromo) ---</h3>";
htmlFinal += "<p>" + verificarPalindromo("Ovo") + "</p>";
htmlFinal += "<p>" + verificarPalindromo("JavaScript") + "</p>";
 

htmlFinal += "<h3>--- Teste Função 4 (Triângulo) ---</h3>";
htmlFinal += "<p>Lados 5, 5, 5: <strong>" + verificarTriangulo(5, 5, 5) + "</strong></p>";
htmlFinal += "<p>Lados 7, 7, 10: <strong>" + verificarTriangulo(7, 7, 10) + "</strong></p>";
htmlFinal += "<p>Lados 6, 7, 8: <strong>" + verificarTriangulo(6, 7, 8) + "</strong></p>";
htmlFinal += "<p>Lados 1, 2, 10: <strong>" + verificarTriangulo(1, 2, 10) + "</strong></p>";
 

divResultados.innerHTML = htmlFinal;