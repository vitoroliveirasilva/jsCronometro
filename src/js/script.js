// Seleciona o elemento do temporizador na página
const timerEl = document.getElementById('timer');
// Seleciona o elemento onde as marcações serão exibidas
const lista = document.getElementById('lista');
// Seleciona o menu de opções onde os botões estão localizados
const menuOpcoes = document.getElementById('menu_opcoes');


// Variáveis para controle do cronômetro e das marcações
let intervalId = 0; // ID do intervalo do cronômetro
let timer = 0; // Tempo acumulado do cronômetro em centésimos de segundo
let marks = []; // Array para armazenar as marcações feitas


// Função para formatar o tempo em string no formato HH:MM:SS:MS
const formatTime = (time) => {
    const horas = Math.floor(time / 360000);
    const minutos = Math.floor((time % 360000) / 6000);
    const segundos = Math.floor((time % 6000) / 100);
    const milissegundos = time % 100;

    // Retorna o tempo formatado como string
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}:${milissegundos.toString().padStart(2, '0')}`;
}


// Função para atualizar a exibição do temporizador
const setTimer = (time) => {
    timerEl.innerText = formatTime(time); // Atualiza o texto do temporizador
}


// Função para adicionar uma marcação à lista
const addMarkToList = (markIndex, markTime) => {
    // Adiciona um novo parágrafo com a marcação na lista
    lista.innerHTML += `<p>Marcação ${markIndex}: ${formatTime(markTime)} <i class="fa-solid fa-flag fa-rotate-by" style="--fa-rotate-angle: 15deg;"></i></p>`;
    lista.scrollTop = lista.scrollHeight; // Scroll pro final da lista
}


// Função para alternar o estado do cronômetro (iniciar, pausar, continuar)
const toggleTimer = () => {
    const button = document.getElementById('cronometrar'); // Seleciona o botão de cronômetro
    const action = button.getAttribute('action'); // Obtém a ação atual do botão

    clearInterval(intervalId); // Limpa qualquer intervalo existente

    // Inicia ou continua o cronômetro
    if (action === 'start' || action === 'continue') {
        intervalId = setInterval(() => { // Inicia o intervalo
            timer += 1; // Incrementa o tempo
            setTimer(timer); // Atualiza a exibição do temporizador
        }, 1); // Atualiza a cada 10 milissegundos
        button.setAttribute('action', 'pause'); // Atualiza a ação do botão
        button.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Atualiza o ícone do botão
    } else if (action === 'pause') { // Se o cronômetro estiver pausado
        button.setAttribute('action', 'continue'); // Permite continuar
        button.innerHTML = '<i class="fa-solid fa-play"></i>'; // Atualiza o ícone do botão
    }
}


// Função para marcar o tempo atual
const markTime = () => {
    // Verifica se o cronômetro foi iniciado
    if (intervalId !== 0) {
        if (marks.length < 100) { // Verifica se o limite de marcações foi alcançado
            marks.push(timer); // Adiciona o tempo atual ao array de marcações
            addMarkToList(marks.length, timer); // Adiciona a marcação à lista
            // Adiciona a classe margin-bottom após a primeira marcação
            if (marks.length === 1) {
                menuOpcoes.classList.add('margin-bottom'); // Adiciona a margem se for a primeira marcação
            }
        } else {
            alert("Limite de 50 marcações atingido!"); // Alerta se o limite foi alcançado
        }
    } else {
        alert("Por favor, inicie o cronômetro antes de marcar!"); // Alerta se o cronômetro não foi iniciado
    }
}


// Função para resetar o cronômetro
const resetarTimer = () => {
    clearInterval(intervalId); // Limpa o intervalo
    intervalId = 0; // Reseta o intervalor
    timer = 0; // Reseta o tempo
    marks = []; // Limpa as marcações
    setTimer(timer); // Atualiza a exibição do temporizador
    lista.innerHTML = ''; // Limpa a lista de marcações
    const button = document.getElementById('cronometrar');
    button.setAttribute('action', 'start'); // Reseta a ação do botão para iniciar
    button.innerHTML = '<i class="fa-solid fa-play"></i>'; // Atualiza o ícone do botão
    menuOpcoes.classList.remove('margin-bottom'); // Remove a classe margin-bottom após o reset
}


// Adiciona os ouvintes de eventos para os botões
document.getElementById('cronometrar').addEventListener('click', toggleTimer); // Inicia/pausa o cronômetro
document.getElementById('marcar').addEventListener('click', markTime); // Marca o tempo
document.getElementById('resetar').addEventListener('click', resetarTimer); // Reseta o cronômetro