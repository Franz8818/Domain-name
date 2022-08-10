console.log("Hello World");


//SEUDO CODIGO
//Yo haria tal cosa...

//LO PRIMERO QUE DEBO CREAR UNA FUNCIÓN

//ARRAYS DECLARADAS   
var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
var dot = ['.com', '.co',]
//RECORRO LOS ARREGLOS MEDIANTE UN BUCKLE FOR ANIDADO
for (let i = 0; i < pronoun.length; i++) {
    //UTILIZO i=0 PARA INDICAR DONDE EMPIEZO A RECORRER
    //i<pronoun.length QUE ARREGLO VA RECORRER Y HASTA DONDE
    //i++ ARANCA EN LA POSICION 0 PASANDO A LA SIGUIENTE HASTA RECORRERER TODAS LAS POSICIONES
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let m = 0; m < dot.length; m++) {
                console.log(pronoun[i]+adj[j]+noun[k]+dot[m])
            }
        }

    }

}

