// const gscript = 'https://script.google.com/macros/s/AKfycbwExY32Z_OenpIiwCXUhdPZ1C9MduDlpGJ4wgqhHsWGTCt_jXIHRvFsAdJ0By1_LsMXvw/exec';

// const form_data = document.forms['formulario-contato'];

// form_data.addEventListener('submit', function (e) {
//     e.preventDefault();

//     fetch(gscript, { method: 'POST', body: new FormData(form_data) })
//         .then(response => {
//             // Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso
//             alert('Dados enviados com sucesso!', response);
//             form_data.reset(); 
//         })
//         .catch(error => {
//             // Se houver erro no envio, a menssagem abaixo será exibida
//             console.error('Erro no envio dos dados, meu!!', error);
//         });
// });




// New code

let gScript = 'https://script.google.com/macros/s/AKfycbwExY32Z_OenpIiwCXUhdPZ1C9MduDlpGJ4wgqhHsWGTCt_jXIHRvFsAdJ0By1_LsMXvw/exec';

let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let data = new FormData(form);
    fetch(gScript, {
        method: 'POST',
        body: data
    })
        .then(res => res.test())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        form.reset();
});