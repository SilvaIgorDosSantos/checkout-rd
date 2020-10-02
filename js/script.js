let campoCepUsuario = document.querySelector('#cepUsuario');
let campoEnderecoUsuario = document.querySelector('#enderecoUsuario');
let campoBairroUsuario = document.querySelector('#bairroUsuario');
let campoCidadeUsuario = document.querySelector('#cidadeUsuario');
let campoEstadoUsuario = document.querySelector('#estadoUsuario');


/* resolvendo o problema com then */
/*function apiCep () {
    if (campoCepUsuario.value.length === 8) {
        //alert('CEP digitado: ' + campoCepUsuario.value);

        fetch(`https://brasilapi.com.br/api/cep/v1/${campoCepUsuario.value}`)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(data) {

            console.log(data);
        });
    }
}*/

/* resolvendo o problema com async e await*/
async function apiCep () {
    if (campoCepUsuario.value.length === 8) {
        let resposta = await fetch(`https://brasilapi.com.br/api/cep/v1/${campoCepUsuario.value}`);
        let data = await resposta.json();

        console.log(data);
        campoEnderecoUsuario.value = data.street;
        campoBairroUsuario.value = data.neighborhood;
        campoCidadeUsuario.value = data.city;
        campoEstadoUsuario.value = data.state;
    }
}

campoCepUsuario.addEventListener('keyup', apiCep);