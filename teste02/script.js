console.log(`JS conectado!`);

function abrirTelaPin(usuario, elementoClicado) {
    usuarioAtual = usuario;

    const fotoOriginal = elementoClicado.querySelector('.perfil-item-foto');
    const rect = fotoOriginal.getBoundingClientRect();

    document.querySelectorAll('.perfil-item').forEach((item) => {
        if (item !== elementoClicado) item.classList.add('escondido');
    });

    const titulo = document.querySelector('.titulo-selecao');
    if (titulo) titulo.classList.add('escondido');

    const clone = fotoOriginal.cloneNode();
    clone.classList.add('foto-clone');

    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
    document.body.appendChild(clone);

    fotoOriginal.style.visibility = 'hidden';

    const tamanhoFinal = 150;
    const escala = tamanhoFinal / rect.width;

    const destinoX = window.innerWidth / 2 - rect.width / 2;
    const destinoY = window.innerHeight / 2 - rect.height / 2;

    requestAnimationFrame(() => {
        clone.style.transform = `translate(${destinoX}px, ${destinoY}px) scale(${escala})`;
    });

    clone.addEventListener('transitionend', () => {
        fotoSelecionada.src = usuario.foto;
        nomeSelecionado.textContent = usuario.nome;

        telaSelecao.style.display = 'none';
        telaPin.classList.add('ativa');

        clone.remove();
        pinInput.value = '';
        pinInput.focus();
    }, { once: true });
}

// ---- 1. BASE DE USUÁRIOS (5 perfis) ----
const usuarios = [
    { nome: "João Peres", foto: "Wallpaper Peres balao subiu.png", pin: "2579", destino: "home.html" },
    { nome: "Luiz Lemos", foto: "foto usuario png.avif", pin: "1111", destino: "home.html" },
    { nome: "Vittor Sauer", foto: "foto usuario png.avif", pin: "2222", destino: "home.html" },
    { nome: "Kaue Pakagnan", foto: "foto usuario png.avif", pin: "3333", destino: "home.html" },
    { nome: "Wellington Rafael", foto: "foto usuario png.avif", pin: "4444", destino: "home.html" }
];

// ---- 2. ELEMENTOS DA TELA ----
const telaSelecao = document.getElementById('tela-selecao');
const listaPerfis = document.getElementById('lista-perfis');
const telaPin = document.getElementById('tela-pin');

const fotoSelecionada = document.getElementById('foto-selecionada');
const nomeSelecionado = document.getElementById('nome-selecionado');
const pinInput = document.getElementById('pin');
const mensagemErro = document.getElementById('mensagem-erro');
const btnVoltar = document.getElementById('btn-voltar');

let usuarioAtual = null;

// ---- 3. MONTA A LISTA DE PERFIS NA TELA 1 ----
usuarios.forEach((usuario) => {
    // wrapper que vai ter a "luz" atrás da foto (a foto entra dentro dele)
    const item = document.createElement('div');
    item.className = 'perfil-item';
    item.innerHTML = `
        <div class="perfil-foto-wrapper">
            <img src="${usuario.foto}" alt="${usuario.nome}" class="perfil-item-foto">
        </div>
        <span>${usuario.nome}</span>
    `;

    item.addEventListener('click', () => abrirTelaPin(usuario, item));
    listaPerfis.appendChild(item);
});

// ---- 4. VERIFICAÇÃO DO PIN ----
pinInput.addEventListener('input', () => {
    mensagemErro.classList.remove('mostrar');

    if (pinInput.value.length === 4) {
        if (pinInput.value === usuarioAtual.pin) {
            document.querySelector('.container-perfil').classList.add('sucesso');

            setTimeout(() => {
                window.location.href = usuarioAtual.destino;
            }, 600);
        } else {
            pinInput.classList.add('pin-erro');
            mensagemErro.textContent = 'PIN incorreto';
            mensagemErro.classList.add('mostrar');

            setTimeout(() => {
                pinInput.value = '';
                pinInput.classList.remove('pin-erro');
            }, 500);
        }
    }
});

btnVoltar.addEventListener('click', () => {
    telaPin.classList.remove('ativa');
    telaSelecao.style.display = 'flex';
    usuarioAtual = null;

    document.querySelectorAll('.perfil-item').forEach((item) => {
        item.classList.remove('escondido');
    });
    document.querySelector('.titulo-selecao').classList.remove('escondido');

    document.querySelectorAll('.perfil-item-foto').forEach((foto) => {
        foto.style.visibility = 'visible';
    });
});