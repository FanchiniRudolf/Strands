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

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}


// Pruebas
let calc = new Calculadora;

calc.suma(1,2);
calc.suma(1,2,3);

calc.resta(1,2);
calc.resta(1,2,3);

calc.multiplicacion(1,2);
calc.multiplicacion(1,2,3);

calc.divison(1,2);
calc.divison(1,2,3);

let calcProm = new CalculadoraPromise;
calcProm.suma(4,5);
calcProm.suma(4,5,3);

calcProm.resta(4,5);
calcProm.resta(4,5,3);

calcProm.multiplicacion(4,5);
calcProm.multiplicacion(4,5,3);

calcProm.divison(4,5);
calcProm.divison(4,5,3);

//await async
//OPTION 1
getJson("https://jsonplaceholder.typicode.com/posts/1/comments")
.then(data => console.log(data));

//OPTION 2
async function asyncTest(){
    jsondata = await getJson("https://jsonplaceholder.typicode.com/posts/1/comments")
    let [firstcomment] = jsondata;
    console.log(firstcomment);
    let {name:postname} = firstcomment;
    console.log(postname);
}

asyncTest().then(() => console.log("EOF") )