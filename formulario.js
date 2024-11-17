let body = document.body;
let fieldset = document.createElement('fieldset');
body.appendChild(fieldset);
let legend = document.createElement('legend');
legend.textContent='Nuevo Pokemon';
fieldset.appendChild(legend);
let form = document.createElement('form');
form.setAttribute('action','datos.html');
form.setAttribute('method','get');
fieldset.appendChild(form);
let inputNom = document.createElement('input');
inputNom.setAttribute('type','text');
inputNom.setAttribute('name','nombre');
inputNom.setAttribute('class','input');
inputNom.setAttribute('placeholder','Nombre del pokemon');
inputNom.setAttribute('required','');
form.appendChild(inputNom);
let p = document.createElement('p');
p.textContent='Tipo uno:'
form.appendChild(p);
let select1 = document.createElement('select');
select1.setAttribute('name','tipo1');
select1.setAttribute('class','input');
form.appendChild(select1);
let tiposPok = [];
pokemon.forEach(atributos=>{
    atributos.tipos.forEach(tipo=>{
        if(!tiposPok.includes(tipo)){
            tiposPok.push(tipo);
        }
    })
});
tiposPok.forEach(tipo => {
    let option = document.createElement('option')
    option.setAttribute('value',tipo);
    option.textContent=tipo;
    select1.appendChild(option);
});
let p2 = document.createElement('p');
p2.textContent = 'Tipo dos:'
form.appendChild(p2);
select1 = document.createElement('select');
select1.setAttribute('name','tipo2');
select1.setAttribute('class','input');
form.appendChild(select1);
let option = document.createElement('option')
option.setAttribute('value','none');
option.textContent='None';
select1.appendChild(option);
tiposPok.forEach(tipo => {
    let option = document.createElement('option')
    option.setAttribute('value',tipo);
    option.textContent=tipo;
    select1.appendChild(option);
});
let br = document.createElement('br');
form.appendChild(br);
let submit = document.createElement('input');
submit.setAttribute('type','submit');
submit.setAttribute('value','Enviar');
form.appendChild(submit);
