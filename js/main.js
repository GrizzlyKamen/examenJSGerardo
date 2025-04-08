let hyperlinks = document.querySelector('a');
let alumnos = [];

function registrar_alumno(){
    let nombre = prompt('Ingresa tu nombre completo: ')
    let grupo = prompt('Ingresa el grupo en el que estás inscrito: ')
    let matricula = prompt('Ingresa tu matricula: ')
    console.log(`${nombre}, ${grupo}, ${matricula}`)
    console.log('Se registró')
};
window.addEventListener('keydown',e => {
    if(e.key === 'R' && e.key === e.ctrlKey){
        registrar_alumno;
    };
});

hyperlinks.addEventListener('click', function(e){
    console.log('hizo click');
    e.preventDefault();
});



const btn_registrar = document.querySelector('#registrar-btn');
btn_registrar.onclick = registrar_alumno;
