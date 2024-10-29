let body = document.getElementsByTagName('body')[0];
for(let i in pokemon){
    let divcard = document.createElement('div');
    divcard.setAttribute('class', 'card');
    divcard.setAttribute('style', 'border-color : green');
    let divcont = document.createElement('div');
    divcont.setAttribute('class', 'contenido');
    let ins = document.createElement('ins');
    ins.textContent = '╳';
    let img = document.createElement('img');
    img.setAttribute('class', 'imagen');
    img.setAttribute('src','img/'+ pokemon[i].id+'.png');
    let h2 = document.createElement('h2');
    h2.textContent = pokemon[i]["nombre"];
    let divinfo = document.createElement('div');
    divinfo.setAttribute('class', 'info');
    let divtipo = document.createElement('div');
    divtipo.setAttribute('class', 'tipo');
    let divtipo1 = document.createElement('div');
    let b1 = document.createElement('b');
    b1.textContent = "Tipo : ";
    divtipo.appendChild(b1);
    for(let j in pokemon[i].tipos){
        divtipo1.textContent += pokemon[i]["tipos"][j];  
    }
    let divtipo2 = document.createElement('div');
    let b2 = document.createElement('b');
    b2.textContent = "Fuerte Contra";
    for(let j2 in pokemon[i]["fuerza_contra"]){
        divtipo2.textContent += pokemon[i]["fuerza_contra"][j2];
        if(!divtipo2.textContent){
            divtipo2.textContent = "nada";
        }
    }
    divcard.appendChild(divcont)
    divcard.appendChild(ins);
    divcard.appendChild(img);
    divcard.appendChild(h2);
    divcard.appendChild(divinfo);
    divinfo.appendChild(divtipo);
    divtipo.appendChild(divtipo1);
    divtipo.appendChild(divtipo2);
    divtipo2.appendChild(b2);

    body.appendChild(divcard);
}