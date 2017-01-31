window.onload = function(){

	const url = "js/cidades.json";
	const cidades = [];

	var request = new Request(url,{
		method : 'POST',
		headers: new Headers()
	})

	fetch(request)
	.then(data => data.json())
	.then(cities => cidades.push(...cities))

	function encontraCombinacao(palavra, cidades){
		return cidades.filter(lugar => {
			const regex = new RegExp(palavra, 'gi');
			return lugar.cidade.match(regex) || lugar.estado.match(regex);
		});
	}

	function mostraEncontrados(){

		if(this.value.length >= 3){
			const listaEncontrados = encontraCombinacao(this.value, cidades);
			const html = listaEncontrados.map(lugar => {
				const regex = new RegExp(this.value, 'gi');
				const nomeCidade = lugar.cidade.replace(regex, `<span class="hl">${this.value}</span>`)
				const nomeEstado = lugar.estado.replace(regex, `<span class="hl">${this.value}</span>`)
				return `
				<li>${nomeCidade} - ${nomeEstado}</li>
				`;
			}).join('');

			sugestoes.innerHTML = html;
		}
	}

	const busca = document.querySelector(".search");
	const sugestoes = document.querySelector(".suggestions");

	busca.addEventListener('keyup',mostraEncontrados);


}