let body = document.getElementsByTagName('main')[0];
for(let i in pokemon){
    let divcard = document.createElement('div');
    divcard.setAttribute('class', 'card');
    let divcont = document.createElement('div');
    divcont.setAttribute('class', 'contenido');
    let icon = document.createElement('div');
    icon.setAttribute('class','icon')
    icon.textContent = '╳';
    let img = document.createElement('img');
    img.setAttribute('class', 'imagen');
    img.setAttribute('src','img/'+ pokemon[i].id+'.png');
    let h2 = document.createElement('h2');
    h2.textContent = pokemon[i]["nombre"]+'#'+pokemon[i].id;
    let divinfo = document.createElement('div');
    divinfo.setAttribute('class', 'info');
    let divtipo = document.createElement('div');
    divtipo.setAttribute('class', 'tipo');
    let divtipo1 = document.createElement('div');
    let b1 = document.createElement('b');
    b1.textContent = "Tipo : ";
    divtipo.appendChild(b1);
    for(let j in pokemon[i].tipos){
        divtipo1.textContent += pokemon[i]["tipos"][j]+',';  
    }

    let divEstadisticas = document.createElement('div');
    divEstadisticas.setAttribute('class','estadisticas');

    let b2 =document.createElement('b');
    b2.textContent = "HP: ";
    let divEstadisticas1 =document.createElement('div');
    divEstadisticas1.textContent = pokemon[i].estadisticas_base["hp"];
    divEstadisticas.appendChild(b2);
    divEstadisticas.appendChild(divEstadisticas1);
    
    let b3 =document.createElement('b');
    b3.textContent = "Ataque: ";
    let divEstadisticas2 =document.createElement('div');
    divEstadisticas2.textContent = pokemon[i].estadisticas_base["ataque"];
    divEstadisticas.appendChild(b3);
    divEstadisticas.appendChild(divEstadisticas2);
    
    let b4 =document.createElement('b');
    b4.textContent = "Defensa: ";
    let divEstadisticas3 =document.createElement('div');
    divEstadisticas3.textContent = pokemon[i].estadisticas_base["defensa"];
    divEstadisticas.appendChild(b4);
    divEstadisticas.appendChild(divEstadisticas3);
    
    let b5 =document.createElement('b');
    b5.textContent = "Ataque Especial: ";
    let divEstadisticas4 =document.createElement('div');
    divEstadisticas4.textContent = pokemon[i].estadisticas_base["ataque_especial"];
    divEstadisticas.appendChild(b5);
    divEstadisticas.appendChild(divEstadisticas4);
    
    let b6 =document.createElement('b');
    b6.textContent = "Defensa Especial: ";
    let divEstadisticas5 =document.createElement('div'); 
    divEstadisticas5.textContent = pokemon[i].estadisticas_base["defensa_especial"];
    divEstadisticas.appendChild(b6);
    divEstadisticas.appendChild(divEstadisticas5);
    
    let b7 =document.createElement('b');
    b7.textContent = "Velocidad: ";
    let divEstadisticas6 =document.createElement('div');
    divEstadisticas6.textContent = pokemon[i].estadisticas_base["velocidad"];
    divEstadisticas.appendChild(b7);
    divEstadisticas.appendChild(divEstadisticas6);
    
 
    let hr = document.createElement('hr');

    divcard.appendChild(divcont)
    divcont.appendChild(icon);
    divcont.appendChild(img);
    divcont.appendChild(h2);
    divcont.appendChild(divinfo);
    divinfo.appendChild(divtipo);
    divtipo.appendChild(divtipo1);
    divinfo.appendChild(divEstadisticas);
    divcont.appendChild(hr);
    body.appendChild(divcard);
}