const form = document.getElementById('form');

function empty(element){
    return !element;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if(empty(name) || empty(email)) {

        let alert = document.getElementById('alerta');
        let msgAlert = `
            <div style="text-align: left">
                <p>***Preencha todos os campos para realizar o cadastro</p>
            </div>
        `;
        alert.innerHTML = msgAlert;

    } else {
        let data = {
            name,
            email
        }
    
        let convertData = JSON.stringify(data);
    
        localStorage.setItem('lead', convertData);
    
        let content = document.getElementById('content');
    
        let pronto = `
            <div>
                <h2 class="msg">Obrigado por se cadastrar</h2>
                <p>Em breve te mandaremos super ofertas!</p>
            </div>
        `;
    
        content.innerHTML = pronto;
    }

})