/**
 * etiquetas : 
 * div (clase card y estilo border color(color del pokemon))
 * dentro de este div (div clase contenido)
 * dentro del div card (<ins>X</ins>)
 * dentro del div card <img> con clase imagen y src=imagen
 */
let div = document.createElement('div');
div.setAttribute('class', 'card');
let color = pokemon[0]["color"];
div.setAttribute('style', 'border-color : '.color);
document.body.insertBefore(div, 'hola');
body.appendChild(div);

let body = document.getElementsByTagName('body')[0]
let ol = document.createElement('ol')
for(let i in pokemon){
    let li = document.createElement('li')
    li.textContent = pokemon[i]['id']
    ol.appendChild(li)
    body.appendChild(ol)
}



