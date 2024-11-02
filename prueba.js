let body = document.getElementsByTagName('body')[0];
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

    divcard.appendChild(divcont)
    divcard.appendChild(icon);
    divcard.appendChild(img);
    divcard.appendChild(h2);
    divcard.appendChild(divinfo);
    divinfo.appendChild(divtipo);
    divtipo.appendChild(divtipo1);
    divinfo.appendChild(divEstadisticas);
    body.appendChild(divcard);
}