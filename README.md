# Cronômetro

Este projeto é um cronômetro desenvolvido com **HTML**, **CSS** e **JavaScript**, que permite ao usuário iniciar, pausar e registrar tempos.

## Interface

![image](https://github.com/user-attachments/assets/5ef2ee4e-a0ba-4cdd-b55c-b12b3e07c23b)

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

- Utiliza variáveis de cor para facilitar a personalização.
- Adiciona estilo aos elementos para um layout responsivo e atrativo.
- Inclui transições suaves para a interação do usuário.

### JavaScript

O arquivo `script.js` contém a lógica do cronômetro:

- **Controle de Tempo**: Usa `setInterval` para atualizar o temporizador.
- **Marcação de Tempo**: Permite que o usuário registre até 100 marcas de tempo.
- **Controle de Estado**: Inicia, pausa e reinicia o cronômetro conforme necessário.

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
