let body = document.getElementsByTagName('main')[0];
let pokemonPlus = [];
if(localStorage.getItem('pokemonAnadidos')){
    pokemonPlus = JSON.parse(localStorage.getItem('pokemonAnadidos'));
}
let pokemonTodos = [];
pokemonTodos.push(pokemon);
pokemonTodos.push(pokemonPlus);
for (let j in pokemonTodos) {
    for(let i in pokemonTodos[j]){
        console.log(pokemonTodos[j][i]['id']);
        // Crear tarjeta principal
        let divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');
    
        // Contenedor de contenido
        let divCont = document.createElement('div');
        divCont.setAttribute('class', 'contenido');
    
        // Icono de para eliminar
        let icon = document.createElement('div');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('id', pokemonTodos[j][i]["id"]);
        icon.textContent = '╳';
    
        // Imagen del Pokemon
        let img = document.createElement('img');
        img.setAttribute('class', 'imagen');
        img.setAttribute('src', 'img/' + pokemonTodos[j][i].id + '.png');
        img.onerror = function () {
            this.setAttribute('src', 'img/who_pokemon.webp');
        };

        // Título con nombre e id
        let h2 = document.createElement('h2');
        h2.textContent = pokemonTodos[j][i]["nombre"] + '#' + pokemonTodos[j][i].id;
    
        // Información del tipo
        let divInfo = document.createElement('div');
        divInfo.setAttribute('class', 'info');
    
        let divTipo = document.createElement('div');
        divTipo.setAttribute('class', 'tipo');
    
        let tipo1 = document.createElement('b');
        tipo1.textContent = "Tipo : ";
        divTipo.appendChild(tipo1);
    
        let divTipo1 = document.createElement('div');
        for (let k in pokemonTodos[j][i].tipos) {
            if(pokemonTodos[j][i].tipos.length<k+2){
                divTipo1.textContent += pokemonTodos[j][i]["tipos"][k];
            }else{
                divTipo1.textContent += pokemonTodos[j][i]["tipos"][k] + ', ';
            }
        }
    
        // Estadísticas
        let divEstadisticas=''
        if(pokemonTodos[j][i].estadisticas_base){
            divEstadisticas = document.createElement('div');
            divEstadisticas.setAttribute('class', 'estadisticas');
        
            let stats = [
                { estadistica: "HP: ", numero: pokemonTodos[j][i].estadisticas_base["hp"] },
                { estadistica: "Ataque: ", numero: pokemonTodos[j][i].estadisticas_base["ataque"] },
                { estadistica: "Defensa: ", numero: pokemonTodos[j][i].estadisticas_base["defensa"] },
                { estadistica: "Ataque Especial: ", numero: pokemonTodos[j][i].estadisticas_base["ataque_especial"] },
                { estadistica: "Defensa Especial: ", numero: pokemonTodos[j][i].estadisticas_base["defensa_especial"] },
                { estadistica: "Velocidad: ", numero: pokemonTodos[j][i].estadisticas_base["velocidad"] }
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
        }
    
    
        // Estructura final de la tarjeta
        divInfo.appendChild(divTipo);
        divTipo.appendChild(divTipo1);
        if(divEstadisticas){
            divInfo.appendChild(divEstadisticas);
        }
    
        divCont.appendChild(icon);

        divCont.appendChild(img);

    
        divCont.appendChild(h2);
        divCont.appendChild(document.createElement('hr'));
        divCont.appendChild(divInfo);
        divCont.appendChild(document.createElement('hr'));
        divCard.appendChild(divCont);
        body.appendChild(divCard);
    
        let input = document.getElementById("input");
        input.addEventListener('keyup', buscar);
        function buscar(){
            if(pokemonTodos[j][i]["nombre"].toLowerCase().includes(input.value.toLowerCase())){
                divCard.classList.remove('ocultar');
            }else{
                divCard.classList.add('ocultar');
            }
        }
    }

}



