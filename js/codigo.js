function copyAnio(){
 let anio = new Date().getFullYear();
 document.getElementById("copyanio").innerHTML = anio;

}

function fechaHora() {
    let fecha = new Date();



let fecha=new Date();
let dia,hora;
let arrSemana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
dia = arrSemana[fecha.getDay()];
hora = fecha.getHours() + ':' + (fecha.getMinutes()<10?'0':'') + fecha.getMinutes();
document.getElementById("fechahora").innerHTML = "texto hoy es" + dia + 'hora es' + hora + '.':
}

function voltear() {
    let numero = prompt("Por favor, introduzca un número de más de un dígito:");
    let invertido;
    if (numero !=null && numero != undefined && numero != '' && numero.length > 1) {
        invertido = invertir(numero);
        alert("El número " + numero + " invertido es " + invertido + '.');
    } else {

        alert("Lo que ha introducido no es válido. Vuelva a intentarlo.");
    }





    }






document.getElementById("copyanio") ("La hora actual es: " + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes();

/*
let d=new Date();
let dia=new Array(7);
dia[0]="domingo";
dia[1]="lunes";
dia[2]="martes";
dia[3]="miércoles";
dia[4]="jueves";
dia[5]="viernes";
dia[6]="sábado";
document.write("Hoy es: " + dia[d.getDay()] + '. ');
document.write("La hora actual es: " + d.getHours() + ':' + d.getMinutes() + '.');


let a = '' */
