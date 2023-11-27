function cargarTerritorios() {
    var listaTerritorios = comunidadGJ.features.map(function (e) {
        return e.properties.NOMBRE_TI
    });
    const terrArray = new Set(listaTerritorios);
    var array = [...terrArray];
    /*var array = ["Alto Río Guaínia", "Arica", "Bajo Río Guainía", "CIMTAR",
        "Atabapo-Inírida", "Ríos Isana y Surubí", "Yaigojé Apaporis", "Bajo Río Caquetá - Amazonas",
        "PANÍ", "Pirá Paraná", "Río Tiquié", "Medio Río Guainía", "Mirití Paraná", "UITIBOC"];*/
    array.sort();
    addOptions("lisTerritorios", array);
}

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (lisTerritorios in array) {
        var opcion = document.createElement("option");
        opcion.text = array[lisTerritorios];
        // Añadimos un value a los option para hacer mas facil escoger las comunidades
        opcion.value = array[lisTerritorios].toLowerCase()
        selector.add(opcion);
    }
}

function cargarComunidades() {
    // Objeto de territorios con comunidades
    var listaComunidades = {
        "territorio indigena alto río guainía": ["Guayabal", "Guarinuma", "Santa Rosa de Pilon", "Sabanita", "Danto", "Caranacoa", "Puerto Principe", "Cacahual", "Santa Cruz", "Sabanita Japiare"],
        "territorio indígena arica": ['Puerto Cartagena', "Puerto Sábalo", "Nueva Reforma", "Nueva Unión del Buri", "Puerto Limon", "Puerto Tolima", "Nueva Esmeralda", "Pluma Blanca", "Centro Arica", "Consejo de Ancianos", "Nuevo Witemberg", "Nemunaa Arica"],
        "territorio indigena bajo río guainía": ["Punta Barbosa", "Sabanita Santafe", "Catanacumane", "Punta Brava", "Jiwa", "Araguato", "Cangrejo", "Playa 2", "Winape", "Tsipanape", "Piedra Blanca", "Danaco", "Santa Marta", "Playa Blaca I"],
        "territorio indígena de tarapacá": ["Barranco Colorado", "Belen de Arara", "Berrocal", "Buenos Aires", "Camanaos", "Caña Brava", "Gaudencia", "Guacamayas", "Matraca", "Nueva Esperaza", "Nueva Union", "Puerto Arenal", "Puerto Guainía", "Puerto Huila", "Puerto Nuevo", "Puerto Porvenir", "Puerto Ticuna", "Punta Tigre", "Pupuña", "San Pedro", "Santa Lucia", "Venadito", "Ventura Wainambi", "Wasaí", "Yawakaná"],
        "territorio indígena de atabapo-inírida": ["Pato Corona", "Merey", "Cacahual", "Santisima", "Chaquita", "San Juan", "Caño Raya", "Guayabal Vitina", "Berrocal Vitina", "Caño Bagre/Sardina Bagre", "Concordia", "Eden Vitina", "Huesito", "La Florida", "Morroco Caño Vitina", "Playa Blanca", "Rincon Vitina", "Villanueva"],
        "territorio indígena del río isana": ["Wasaí", "Puerto Arenal", "Barranco Colorado", "Wainambi", "Camanaos", "Punta Tigre", "Yawakaná", "Guacamayas", "San Pedro", "Matraca", "Puerto Guainía", "Berrocal", "Venadito", "Belen de Arara"],
        "consejo indígena de yaigojé apaporis": ["Puerto Ñumi", "Puerto Cedro", "Bocas del Taraira", "Puerto Solano", "Centro Providencia", "Vista Hermosa", "Puerto Curupira", "Campo Alegre", "Bocas del Uga (Wuga)", "Caño Laurel", "Agua Blanca", "Bellavista", "Jotabeya", "Awaurita", "Puerto Cordillera", "Bocas del Pirá", "Paromena", "La Playa", "Puerto Sabana", "Union Jirijirimo", "Santa Clara", "Siruya"],
        "territorio indígena del bajo río caquetá": ["Omima/Borikada", "Camaritagua", "Tanimuca", "Renacer", "Curare", "Yavira Angosturas", "Puerto Cordoba", "Lomalinda", "Yucuna", "Bacurí"],
        "territorio indígena del paní": ["Manacaro", "Mariapolis", "Puerto Remanso", "San Francisco", "Quinche", "Las Palmas"],
        "territorio indígena del río pirá paraná": ["Puerto Antonio", "Puerto Esperanza", "San Luis", "Santa Isabel", "Piedra Ñi", "Puerto Inayá", "Santa Rosa", "San Miguel", "Tatu", "Puerto Amazonas", "Sonaña", "Puerto Ortega", "Villa Nueva", "Hena", "Puerto  Cordoba", "Yoayá", "Toaka"],
        "territorio indigena medio río guainía": ["Santa Rita", "Caño Colorado", "Berrocal", "Tigre", "Cartagena", "Sejal", "Tabaquen", "San José", "Puerto Colombia", "Manacal", "Niñal", "Tonina", "Amanaven", "Yurizal", "La Esperanza",],
        "territorio indígena del río mirití paraná": ["Puerto Lago", "Quebrada Negra", "Villa Nueva", "Oiyaka", "Puerto Castaño", "Puerto Nuevo", "Puerto Guayabo", "Puerto Libre", "Wakayá", "Bellavista", "Mamurá", "Jariye", "Santa Isabel"],
        "territorio indígena de uitiboc": ["Alto Cardozo", "Centro Cardozo", "Bajo Cardozo", "Peña Blanca", "Centro Tarapacá", "Alpha Tum Sacha", "Quininayaco"],
        "territorio indígena del río tiquié": ["San Javier de Umuña", "San Juan de Mariñá", "San José de Timiña", "Espuma", "Puerto Colombia", "Trinidad del Tiquié", "San Francisco", "Bellavista de Abiyú", "Puerto Loro", "Santa Teresita", "Santa Catalina"],
    }
    //cimtar = tarapacá
    var territoriosLis = document.getElementById('lisTerritorios')
    var comunidadesLis = document.getElementById('lisComunidades')
    var territorioSeleccionado = territoriosLis.value
    console.log(territorioSeleccionado)
    // Se limpian las comunidades
    comunidadesLis.innerHTML = '<option value="">Seleccione una Comunidad.</option>'

    if (territorioSeleccionado !== '') {
        // Se seleccionan los territorios y se ordenan
        territorioSeleccionado = listaComunidades[territorioSeleccionado]
        territorioSeleccionado.sort()

        // Insertamos las comunidades
        territorioSeleccionado.forEach(function (lisComunidades) {
            let opcion = document.createElement('option')
            opcion.value = lisComunidades
            opcion.text = lisComunidades
            comunidadesLis.add(opcion)
        });
    }

}

// Iniciar la carga de territorios solo para comprobar que funciona
//cargarTerritorios();


/*var coordenadasCom = comunidadGJ.features.map(function (e) {
    return e.geometry.coordinates;
    
});
document.getElementById('lisComunidades').addEventListener('change', function (e) {
    let coordenadasCom = e.target.value.split(",");
    mymap.flyTo(coordenadasCom, 10).sort();
});*/