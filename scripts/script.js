const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let data = {
        nome,
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

})