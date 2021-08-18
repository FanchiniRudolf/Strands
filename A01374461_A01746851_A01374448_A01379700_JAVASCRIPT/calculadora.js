class Calculadora{
    //Suma
    suma(a, b, c ) {
        if(c){
            console.log(`La suma de ${a} y ${b}, y multiplicado por ${c} es: ${(a+b)*c}`);
        }else{
            console.log(`La suma de ${a} y ${b} es: ${(a+b)}`);
        };
    };

    //Resta
    resta(a, b, c  ) {
        if(c){
            console.log(`La resta de ${a} y ${b}, y multiplicado por ${c} es: ${(a-b)*c}`);
        }else{
            console.log(`La resta de ${a} y ${b} es: ${(a-b)}`);
        };
    };

    //Multi
    multiplicacion(a, b, c  ) {
        if(c){
            console.log(`La multiplicacion de ${a} y ${b}, y multiplicado por ${c} es: ${a*b*c}`);
        }else{
            console.log(`La multiplicacion de ${a} y ${b} es: ${(a*b)}`);
        };
    };

    //Div
    divison(a, b, c  ) {
        if(c){
            console.log(`La divison de ${a} y ${b}, y multiplicado por ${c} es: ${(a/b)*c}`);
        }else{
            console.log(`La divison de ${a} y ${b} es: ${(a/b)}`);
        };
    };

}

class CalculadoraPromise{
    //Suma
    suma(a,b,c) {
        let promesa = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if ( true ){
                    if(c){
                        console.log(`La suma de ${a} y ${b}, y multiplicado por ${c} es: ${(a+b)*c}`);
                    }else{
                        console.log(`La suma de ${a} y ${b} es: ${(a+b)}`);
                    };
                    resolve();
                }
                else{
                    reject();
                }
            }, 3000);
        });
        promesa.then(
            console.log("Suma exitosa...")
        )
    }

    //Resta
    resta(a, b, c  ) {
        let promesa = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if ( true ){
                    if(c){
                        console.log(`La suma de ${a} y ${b}, y multiplicado por ${c} es: ${(a-b)*c}`);
                    }else{
                        console.log(`La suma de ${a} y ${b} es: ${(a-b)}`);
                    };
                    resolve();
                }
                else{
                    reject();
                }
            }, 3000);
        });
        promesa.then(
            console.log("Resta exitosa...")
        )
    };

    //Multi
    multiplicacion(a, b, c  ) {
        let promesa = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if ( true ){
                    if(c){
                        console.log(`La suma de ${a} y ${b}, y multiplicado por ${c} es: ${(a*b)*c}`);
                    }else{
                        console.log(`La suma de ${a} y ${b} es: ${(a*b)}`);
                    };
                    resolve();
                }
                else{
                    reject();
                }
            }, 3000);
        });
        promesa.then(
            console.log("Multiplicacion exitosa...")
        )
    };

    //Div
    divison(a, b, c  ) {
        let promesa = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if ( true ){
                    if(c){
                        console.log(`La suma de ${a} y ${b}, y multiplicado por ${c} es: ${(a/b)*c}`);
                    }else{
                        console.log(`La suma de ${a} y ${b} es: ${(a/b)}`);
                    };
                    resolve();
                }
                else{
                    reject();
                }
            }, 3000);
        });
        promesa.then(
            console.log("Division exitosa...")
        )
    };
}

// Pruebas
// let calc = new Calculadora;

// calc.suma(1,2);
// calc.suma(1,2,3);

// calc.resta(1,2);
// calc.resta(1,2,3);

// calc.multiplicacion(1,2);
// calc.multiplicacion(1,2,3);

// calc.divison(1,2);
// calc.divison(1,2,3);

// let calcProm = new CalculadoraPromise;
// calcProm.suma(1,2);
// calcProm.suma(1,2,3);

// calcProm.resta(1,2);
// calcProm.resta(1,2,3);

// calcProm.multiplicacion(1,2);
// calcProm.multiplicacion(1,2,3);

// calcProm.divison(1,2);
// calcProm.divison(1,2,3);
