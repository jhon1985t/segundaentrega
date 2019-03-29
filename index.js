const {argv}=require('./yargs');
const {argv}=require('./usuario');
const {argv2}=require('./inscribir');
const funciones=require('./funciones')

let comando=argv._[0];

switch (comando){
	case 'crear':
	funciones.crear(argv);
	break
	case 'registrar':
	funciones.crearusuario(argv);
	break
	case 'mostrar':
	funciones.mostrar();
	break
	case 'inscribir':
	funciones.crearinscriptos(argv2);
	break	
	case 'registrados':
	funciones.mostrarusuarios();
	break
    case 'mostrarcurso':
	funciones.mostrarcurso(argv.nombre);
    break
    case 'mostrarcursodisponible':
    funciones.mostrarCursoDisponible(argv.nombre);
    break
	case 'mostrarcursosdisponibles':
	funciones.mostrarCursosDisponibles();
	break	
	case 'mostrarinscritos':
	funciones.mostrarinscritos();
	break
	case 'actualizar':
	funciones.actualizar(argv.id);
	break
	case 'eliminarInscrito':
	funciones.eliminarInscrito(argv2.id, argv2.curso);
	break
	default:
	console.log('No ingreso una funcion existente')
}