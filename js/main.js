//Acceder a los elementos del DOM

const foto = document.querySelector('#foto img'); //foto del banner
const recomendados = document.querySelector('#recomendados'); // donde voy a incluir las fotos creadas
const destinos = document.querySelector('#destinos') //select
const destinosFotos = document.querySelector('#destinosFotos')


const fragment = document.createDocumentFragment();

//crear los array que voy a utilizar

arrayBanner = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'foto del mar con un atardecer',
        title: 'imagen 1',
        ciudad: 'Madrid'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'foto de globos aerostaticos',
        title: 'imagen 2',
        ciudad: 'Burgos'

    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'foto de un atardecer',
        title: 'imagen 3',
        ciudad: 'Barcelona'

    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'foto de campo de trigo con globos aerostaticos',
        title: 'imagen 4',
        ciudad: 'Logroño'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'foto de campo de trigo con globos aerostaticos',
        title: 'imagen 5',
        ciudad: 'Sevilla'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'foto de montañas con nieve',
        title: 'imagen 6',
        ciudad: 'Valencia'
    }
];

arrayFotos = [
    {
        src: 'assets/viajes/viajes-1.jpg',
        alt: 'foto de playa con palmera',
        title: 'viaje 1',
        parrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam dolor, error porro ex pariatur. Id obcaecati, deleniti eos amet provident eligendi veniam maxime? Minima assumenda quis atque dolore ratione.'
    },
    {
        src: 'assets/viajes/viajes-2.jpg',
        alt: 'foto del mar con bungalows',
        title: 'viaje 2',
        parrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia corrupti et recusandae autem dicta temporibus, obcaecati repudiandae nemo, neque id quidem accusantium dignissimos maiores ipsa eius? Natus, voluptas? Impedit.'
    },
    {
        src: 'assets/viajes/viajes-3.jpg',
        alt: 'fot de un poste con señalizacion',
        title: 'viaje 3',
        parrafo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nostrum nisi optio suscipit explicabo asperiores repellendus natus eligendi dolor error doloribus sint, dignissimos voluptatum quos nobis consequuntur pariatur hic tenetur?'
    },
];


arrayCiudades = ['Madrid', 'Burgos', 'Barcelona', 'Logroño', 'Sevilla', 'Valencia']

//fijar las variable y funciones que voy a utilizar


destinos.addEventListener('change', (ev) => {

    const ciudades = ev.target.value
    console.log(ciudades)
    const ciudadFoto = arrayBanner.find((item) => item.ciudad == ciudades)
    console.log(ciudadFoto)

    //mostrarFotoCiudades(ciudadFoto)
    
    const { src, ciudad } = ciudadFoto

    const cajadest = document.createElement('DIV')
    const imagendest = document.createElement('IMG')
    const titulodest = document.createElement('H2')
    imagendest.src = src
    titulodest.textContent = ciudad
    cajadest.append(titulodest,imagendest)

    fragment.append(cajadest)
    destinosFotos.append(fragment)
})

const mostrarBanner = () => {

    let numeroRandon = iteradorRandom()
    foto.src = arrayBanner[numeroRandon].src;
    foto.title = arrayBanner[numeroRandon].title;
    foto.alt = arrayBanner[numeroRandon].alt;

};


const iteradorRandom = () => {
    let numeroRandom = Math.floor(Math.random() * arrayBanner.length);
    return numeroRandom
};


const mostrarImagenes = () => {

    arrayFotos.forEach((item) => {

        const caja = document.createElement('DIV')
        const imagenCaja = document.createElement('IMG')
        const cajaTP = document.createElement('DIV')
        const tituloCaja = document.createElement('H2')
        const parrafoCaja = document.createElement('P')

        imagenCaja.src = item.src;
        imagenCaja.classList.add('card-img-top')
        caja.classList.add('card');
        caja.append(imagenCaja, cajaTP);
        tituloCaja.textContent = item.title;
        tituloCaja.classList.add('card-title');
        parrafoCaja.textContent = item.parrafo;
        parrafoCaja.classList.add('card-text');
        cajaTP.classList.add('card-body');
        cajaTP.append(tituloCaja, parrafoCaja);

        fragment.append(caja)

    });

    recomendados.append(fragment)
};

const mostrarCiudades = () => {

    arrayCiudades.forEach((item) => {
        const opciones = document.createElement('option')
        opciones.value = item
        opciones.textContent = item

        fragment.append(opciones)
    })
    destinos.append(fragment)
};

/*const mostrarFotoCiudades = (ciudadFoto) => {

 const cajadest = document.createElement('DIV')
    const imagendest = document.createElement('IMG')
    const titulodest = document.createElement('H2')
    imagendest.src = src
    titulodest.textContent = ciudad
    cajadest.append(titulodest,imagendest)

    fragment.append(cajadest)
    destinosFotos.append(fragment)
}*/
mostrarBanner()
mostrarImagenes()
mostrarCiudades()
//mostrarFotoCiudades()
// funciones voy a crear 2 eventos para desencadenar acciones