let pokemonsMas = [];
let pokemonInfo= location.search;
pokemonInfo = pokemonInfo.replace('?','');
let pokemonInfos = pokemonInfo.split('&');
let pokemonId = 0;
let pokemonAux = 0;
if(pokemonsMas.length>1){
    
}else{
    for (let i in pokemon) {
        pokemonAux = pokemon[i].id;
        if(pokemonAux>pokemonId){
            pokemonId = pokemonAux;
        }
    }
}
let nombre = pokemonInfos[0].split('=')[1];
let tipo1 = pokemonInfos[1].split('=')[1];
let tipo2 = pokemonInfos[2].split('=')[1];
let tipos = [];
tipos.push(tipo1);
tipos.push(tipo2);
let pokeNuevo = {"id":pokemonId+1,"nombre":nombre,"tipos":tipos};
console.log(pokeNuevo);