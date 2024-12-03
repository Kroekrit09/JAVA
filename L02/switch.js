const status = 200;

switch (status) {
    case 200:
        console.log('ok!');
        break;
    case 400:
    case 500:
        console.log('Error!');
        break;
    default: 
        console.log('Unknow status');
        
}