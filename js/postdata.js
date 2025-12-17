const gscript = 'https://script.google.com/macros/s/AKfycbzuVhgfFQ3VCHcROUZwU5-mTuJ1w0_MLdJTXJUBytF6zz2oxqg_KM5NUZ7hMbL_27xIPw/exec';

const form_data = document.forms['formulario-contato'];

form_data.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(gscript, { method: 'POST', body: new FormData(form_data) })
        .then(response => {
            // Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso
            alert('Dados enviados com sucesso!', response);
            form_data.reset(); 
        })
        .catch(error => {
            // Se houver erro no envio, a menssagem abaixo será exibida
            console.error('Erro no envio dos dados, meu!!', error);
        });
});
