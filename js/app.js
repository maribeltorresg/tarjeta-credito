function isValidCard(number){
    var arr = [];//guardaremos el número invertido
    //Invertimos el array
    for (var i = number.length - 1; i >= 0; i--){
        arr.push(number.charAt(i));
    }
    //Recorremos el array ya invertido
    for (var i = 0; i < arr.length; i++){
        //Saber si la posición es par
        if ((i + 1) % 2 === 0){
            //Si es par multiplicar * 2
            var numberPar = arr[i] * 2;
            if (numberPar >= 10){
                //aca siempre me dara dos números entonces convierto a string
                var sum = numberPar.toString();
                //con parseInt convertir a número
                var newNumber = parseInt(sum.charAt(0)) + parseInt(sum.charAt(1))
                arr[i] = newNumber;
            }
        }
    }
    //Declaramos una variable que esmpezara 0 y luego ir sumando
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    //Comparamos si la suma   
    if (total % 10 === 0){
        return('Tarjeta válida');
    }else {
        return('Tarjeta inválida');
    }
}
var number = parseInt(prompt('Introduce el número de tarjeta'));
console.log(isValidCard(number));