let body = document.getElementsByTagName('main')[0];

for (let i in pokemon) {
    // Crear tarjeta principal
    let divCard = document.createElement('div');
    divCard.setAttribute('class', 'card');

    // Contenedor de contenido
    let divCont = document.createElement('div');
    divCont.setAttribute('class', 'contenido');

    // Icono de cierre
    let icon = document.createElement('div');
    icon.setAttribute('class', 'icon');
    icon.textContent = '╳';

    // Imagen del Pokémon
    let img = document.createElement('img');
    img.setAttribute('class', 'imagen');
    img.setAttribute('src', 'img/' + pokemon[i].id + '.png');

    // Título con nombre e id
    let h2 = document.createElement('h2');
    h2.textContent = pokemon[i]["nombre"] + '#' + pokemon[i].id;

    // Información del tipo
    let divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'info');

    let divTipo = document.createElement('div');
    divTipo.setAttribute('class', 'tipo');

    let tipo1 = document.createElement('b');
    tipo1.textContent = "Tipo : ";
    divTipo.appendChild(tipo1);

    let divTipo1 = document.createElement('div');
    for (let j in pokemon[i].tipos) {
        if(pokemon[i].tipos.length<j+2){
            divTipo1.textContent += pokemon[i]["tipos"][j];
        }else{
            divTipo1.textContent += pokemon[i]["tipos"][j] + ', ';
        }
    }

    // Estadísticas
    let divEstadisticas = document.createElement('div');
    divEstadisticas.setAttribute('class', 'estadisticas');

    let stats = [
        { estadistica: "HP: ", numero: pokemon[i].estadisticas_base["hp"] },
        { estadistica: "Ataque: ", numero: pokemon[i].estadisticas_base["ataque"] },
        { estadistica: "Defensa: ", numero: pokemon[i].estadisticas_base["defensa"] },
        { estadistica: "Ataque Especial: ", numero: pokemon[i].estadisticas_base["ataque_especial"] },
        { estadistica: "Defensa Especial: ", numero: pokemon[i].estadisticas_base["defensa_especial"] },
        { estadistica: "Velocidad: ", numero: pokemon[i].estadisticas_base["velocidad"] }
    ];
    
    stats.forEach(stat => {
        // Crear un contenedor para cada estadística
        let statContenedor = document.createElement('div');
        
        // Crear el b para la etiqueta
        let stat1 = document.createElement('b');
        stat1.textContent = stat.estadistica;
        
        statContenedor.appendChild(stat1);
        statContenedor.append(stat.numero);
        divEstadisticas.appendChild(statContenedor);
    });

    // Estructura final de la tarjeta
    divInfo.appendChild(divTipo);
    divTipo.appendChild(divTipo1);
    divInfo.appendChild(divEstadisticas);

    divCont.appendChild(icon);
    divCont.appendChild(img);
    divCont.appendChild(h2);
    divCont.appendChild(document.createElement('hr'));
    divCont.appendChild(divInfo);
    divCont.appendChild(document.createElement('hr'));
    divCard.appendChild(divCont);
    body.appendChild(divCard);
}
