let pokemonsMas = [];
let pokemonInfo= location.search;
pokemonInfo = pokemonInfo.replace('?','');
let pokemonInfos = pokemonInfo.split('&');
console.log(pokemonInfos);
pokemonInfos.forEach(pokemon=>{
    pokemonsMas.push(pokemon.split('='));
})
let pokemonId = 0;
let pokemonAux = 0;
for (let i in pokemon) {
    pokemonAux = pokemon[i].id;
    if(pokemonAux>pokemonId){
        pokemonId = pokemonAux;
    }
}
pokemonsMas.push(['id',pokemonId]);
console.log(pokemonsMas);