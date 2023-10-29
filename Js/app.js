let inicioCuenta; confirm ('Hola, eres un Usuario Registrado?')


do{
    inicioCuenta= prompt('Ingrese Nombre Ususario')
} while(inicioCuenta == '' ||  inicioCuenta == null);


switch(inicioCuenta) {

    
    case 'mariano':
        alert ('Bienvenido MARIANO');
        break;

    case 'marisa':
        alert ('Bienvenido MARISA');
        break;

    default:
        alert ('Lo siento no estas registrado');
        break;
}



