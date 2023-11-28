// Función para generar los desplegables de territorios
function generarDesplegableTerritorios() {
    var territorios = [];
  
    // Recorre los datos para obtener territorios únicos
    comunidadGJ.forEach(function(item) {
        if (territorios.indexOf(item.properties.NOMBRE_TI) === -1) {
            territorios.push(item.properties.NOMBRE_TI);
        }
    });
  
    // Crea el desplegable de territorios
    var territoriosDropdown = document.getElementById('territoriosDropdown');
    territoriosDropdown.innerHTML = ''; // Limpia las opciones anteriores
  
    // Opción predeterminada
    var optionTerritorioDefault = document.createElement('option');
    optionTerritorioDefault.value = '';
    optionTerritorioDefault.textContent = 'Seleccione un territorio';
    optionTerritorioDefault.selected = true;
    optionTerritorioDefault.disabled = true;
    territoriosDropdown.appendChild(optionTerritorioDefault);
  
    // Recorre los datos para obtener territorios únicos
    var territorios = [];
    comunidadGJ.forEach(function(item) {
        if (territorios.indexOf(item.properties.NOMBRE_TI) === -1) {
            territorios.push(item.properties.NOMBRE_TI);
        }
    });
  
    // Crea las opciones para el desplegable de territorios
    territorios.forEach(function(territorio) {
        var option = document.createElement('option');
        option.value = territorio;
        option.textContent = territorio;
        territoriosDropdown.appendChild(option);
    });
  
    // Agrega un evento de cambio al desplegable de territorios
    territoriosDropdown.addEventListener('change', function() {
        var territorioSeleccionado = territoriosDropdown.value;
        generarDesplegableComunidades(territorioSeleccionado);
    });
  }
  
  // Función para generar el desplegable de comunidades y la tabla de familias
  function generarDesplegableComunidades(territorioSeleccionado) {
    var comunidades = [];
  
    // Filtra los datos para obtener comunidades del territorio seleccionado
    var comunidadesFiltradas = comunidadGJ.filter(function(item) {
        return item.properties.NOMBRE_TI === territorioSeleccionado;
    });
  
    // Recorre los datos filtrados para obtener comunidades únicas
    comunidadesFiltradas.forEach(function(item) {
        if (comunidades.indexOf(item.properties.NOMB_CNIDA) === -1) {
            comunidades.push(item.properties.NOMB_CNIDA);
        } 
    });
  
    // Crea el desplegable de comunidades
        var comunidadesDropdown = document.getElementById('comunidadesDropdown');
        comunidadesDropdown.innerHTML = ''; // Limpia las opciones anteriores
        var optionComunidadDefault = document.createElement('option');
        optionComunidadDefault.value = '';
        optionComunidadDefault.textContent = 'Seleccione una comunidad';
        optionComunidadDefault.selected = true;
        optionComunidadDefault.disabled = true;
        comunidadesDropdown.appendChild(optionComunidadDefault);
        comunidades.forEach(function(comunidad) {
        var option = document.createElement('option');
        option.value = comunidad;
        option.textContent = comunidad;
        comunidadesDropdown.appendChild(option);
    });
  
  
  function generarTablaFamilias(comunidadSeleccionada) {
      // Filtra los datos para obtener familias de la comunidad seleccionada
      var familiasFiltradas = comunidadGJ.filter(function(item) {
          return item.properties.NOMB_CNIDA === comunidadSeleccionada;
      });
  
      // Crea un objeto para mantener un registro de las familias y sus representantes
      var idCnidaComunidad = '';
      var familiasYRepresentantes = {};
  
      // Recorre los datos filtrados y registra un representante por cada familia
      familiasFiltradas.forEach(function(item) {
          var idFamilia = item.ID_FORM;
          if (!familiasYRepresentantes[idFamilia]) {
              // Si aún no se ha registrado un representante para esta familia, regístralo
              familiasYRepresentantes[idFamilia] = item.NMB_ESPANO;
          }
          if (!idCnidaComunidad) {
              idCnidaComunidad = item.ID_CNIDA;
          }
      });
  
      var familiasVistas = [];
  
      var tablaFamilias = '<thead><tr><th>ID Familia</th><th>Nombre de Representante</th></tr></thead><tbody>';
      for (var idFamilia in familiasYRepresentantes) {
          tablaFamilias += '<tr>';
          tablaFamilias += '<td>' + idFamilia + '</td>';
          tablaFamilias += '<td>' + familiasYRepresentantes[idFamilia] + '</td>';
          tablaFamilias += '<td><a href="familia.html?id=' + idFamilia +'" target="_blank">Ver Familia</a></td>';
          tablaFamilias += '</tr>';
  
          familiasVistas.push(idFamilia)
      }
      lsFam = JSON.parse(localStorage.getItem("familiarAgregado")) || [];
  
  
      for (var k in lsFam) {
          if (lsFam[k]['cnidad'] === idCnidaComunidad) {
              if (!familiasVistas.includes(lsFam[k]['familia'])) {
                  tablaFamilias += '<tr>'
                  tablaFamilias += '<td>' + lsFam[k]['familia'] + '</td>';
                  tablaFamilias += '<td>' + lsFam[k]['miembro'] + '</td>';
                  tablaFamilias += '<td>Nueva Familia. Edición no disponible</td>';
                  tablaFamilias += '</tr>';
                  familiasVistas.push(lsFam[k]['familia'])
              };
          };
      };
      tablaFamilias += '</tbody>';
  
      var agr_query =  document.getElementById('agrega-familia');
      agr_query.setAttribute('href', 'consulta.html?id='+idCnidaComunidad);
      agr_query.setAttribute('target', '_blank');
      agr_query.style.display = 'block';
  
      
  
      $('#familias').html(tablaFamilias);
  }
    // Genera la tabla de familias cuando se selecciona una comunidad
    comunidadesDropdown.addEventListener('change', function() {
        var comunidadSeleccionada = comunidadesDropdown.value;
        generarTablaFamilias(comunidadSeleccionada);
    });
  }
  generarDesplegableTerritorios()