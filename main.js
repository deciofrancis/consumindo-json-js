var request = new XMLHttpRequest();
request.open('GET', 'http://airbnb.douglasmaia.com/api/properties', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var dados = JSON.parse(request.responseText);
    console.log(dados);
    

    var func = dados.map(function(dados) {
    	const template = `	
				<div class="card flex-card-1">
					<img class="img-card" src="${dados.photo}">
					<div class="card-content">
						<h4 class="card-title">${dados.name}</h4>
					</div>
					<p "card__text">${dados.price}</p>
          <button class="button">Reservar</button>
				</div>
			`;

			document.getElementById("view").innerHTML += template;

		});

    

    var resp = request.responseText;
  } else {
   

  }

};

request.onerror = function() {
  
};

request.send();