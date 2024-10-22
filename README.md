# Cronômetro

Este projeto é um cronômetro desenvolvido com **HTML**, **CSS** e **JavaScript**, que permite ao usuário iniciar, pausar e registrar tempos.

## Interface

![image](https://github.com/user-attachments/assets/06e7c369-d554-4bfb-9bca-9bb977684040)

## Funcionalidades

- Iniciar e pausar o cronômetro.
- Marcar tempo para registro do tempo atual.
- Reiniciar o cronômetro.
- Interface responsiva, estilizada com CSS e ícones do Font Awesome.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilos e layout responsivo.
- **JavaScript**: Funcionalidades do cronômetro.

## Estrutura do Projeto

```
/cronometro
├── index.html          # Arquivo HTML principal
├── src
│   ├── css
│   │   └── style.css   # Arquivo de estilo CSS
│   └── js
│       └── script.js    # Arquivo JavaScript com a lógica do cronômetro
```

## Como Usar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/vitoroliveirasilva/jsCronometro.git
   cd jsCronometro
   ```

2. **Abra o arquivo `index.html` em um navegador** para visualizar o cronômetro em funcionamento.

## Descrição do Código

### HTML

O arquivo `index.html` contém a estrutura básica do cronômetro:

- **Temporizador**: Exibe o tempo no formato `HH:MM:SS:MS`.
- **Menu de Opções**: Contém botões para controlar o cronômetro e registrar marcas.
- **Lista de Marcas**: Exibe as marcas de tempo registradas pelo usuário.

### CSS

O arquivo `style.css` define o estilo visual do cronômetro:

- **Fonte e Layout**: Usa a fonte 'Exo 2' do Google Fonts para um estilo moderno e cria um layout centralizado com flexbox.
- **Temas e Cores**: Utiliza variáveis de cores globais, permitindo fácil personalização. O plano de fundo do cronômetro é um gradiente linear com bordas destacadas.
- **Responsividade**: O layout é adaptável a diferentes tamanhos de tela, com ajustes específicos para dispositivos menores.
- **Transições Suaves**: Aplica transições sutis em botões e elementos interativos para uma melhor experiência do usuário.
- **Interação Visual**: O botão de marcação e a lista de marcações apresentam estilos dinâmicos ao passar o mouse, além de utilizar ícones FontAwesome para um visual mais atrativo.

### JavaScript

O arquivo `script.js` contém a lógica do cronômetro:

- **Controle de Tempo**: Utiliza `setInterval` para controlar a execução do cronômetro em intervalos de 10 milissegundos.
- **Formatação de Tempo**: Implementa a função `formatTime` para exibir o tempo no formato HH:MM:SS:MS.
- **Marcação de Tempo**: Permite que o usuário registre até 1.000 marcas de tempo, exibindo a diferença entre a marcação atual e a anterior.
- **Controle de Estado**: Alterna entre iniciar, pausar, continuar e resetar o cronômetro através da função `toggleTimer`.
- **Atualização Dinâmica**: O cronômetro e a lista de marcações são atualizados dinamicamente na página, sem necessidade de recarregamento.
- **Limite de Marcações**: Ao atingir o limite de 1.000 marcações, o sistema notifica o usuário.
- **Resets e Interações**: O botão de reset limpa o cronômetro, a lista de marcações e restaura os botões para o estado inicial.

### Funções Principais

- `formatTime(time)`: Formata o tempo em string no formato `HH:MM:SS:MS`.
- `setTimer(time)`: Atualiza a exibição do temporizador na tela.
- `addMarkToList(markIndex, markTime)`: Adiciona uma marca à lista de marcações.
- `toggleTimer()`: Alterna entre iniciar e pausar o cronômetro.
- `markTime()`: Marca o tempo atual, se o cronômetro estiver ativo.
- `resetarTimer()`: Reseta o cronômetro e limpa as marcações.

## Inspiração

O projeto foi inspirado pelo [vídeo](https://www.youtube.com/watch?v=AwnMzZSBn34) da [Larissa Kich](https://github.com/Larissakich). Embora tenha realizado alterações em todos os arquivos, sua abordagem inicial serviu como base.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
