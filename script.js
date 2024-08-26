let contador = 1;

const inc = ()=>{
    contador += 1;
    fetchPersonagem(contador);
}

const dec = ()=>{
    if(contador > 1){
        contador -= 1;
        fetchPersonagem(contador);
    }
}

const fetchPersonagem = async(contador)=>{
    let url = "https://rickandmortyapi.com/api/character/"+contador;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);

    // variaveis para colocar usar o innerHTML
    imageRes = document.getElementById('imagem')
    nomeRes = document.getElementById('nome');
    descricaoRes = document.getElementById('descricao')

    // inserido no html
    imageRes.src = data.image; 
    nomeRes.innerText = data.name;
    descricaoRes.innerText = data.gender + ", " + data.status + ", " + data.species + ", " + data.type + ", " + data.origin.name + ", Episódio: ";
}


fetchPersonagem(contador);