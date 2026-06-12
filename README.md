# 🎨 Monalisa - Projeto Alura

Um projeto interativo que renderiza a famosa pintura **Monalisa** de Leonardo da Vinci utilizando **Canvas HTML5** e **JavaScript**.

## ✨ Características

- 🎭 **Renderização em Canvas**: Desenho completo da Monalisa usando primitivas gráficas
- 👀 **Olhos Interativos**: Os olhos seguem o movimento do seu mouse em tempo real
- 🎨 **Cores Originais**: Paleta de cores fiel à obra original
- 📱 **Responsivo**: Interface adaptada para diferentes tamanhos de tela
- ✨ **Animações Suaves**: Transições e efeitos visuais elegantes

## 🚀 Como Usar

### Abrir Localmente

1. Clone o repositório:
```bash
git clone https://github.com/savagekyo/alura1.git
cd alura1
```

2. Abra o arquivo `index.html` em seu navegador:
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou use um servidor local (recomendado):
```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (se tiver http-server instalado)
http-server
```

Depois acesse: `http://localhost:8000`

## 📁 Estrutura do Projeto

```
alura1/
├── index.html       # Arquivo HTML principal
├── styles.css       # Estilos CSS
├── script.js        # Lógica JavaScript (desenho e interatividade)
└── README.md        # Este arquivo
```

## 🎯 Como Funciona

### Canvas
- O projeto usa a API Canvas do HTML5 para desenhar a Monalisa
- Todas as formas (círculos, elipses, curvas) são desenhadas programaticamente

### Movimento dos Olhos
- Usa `mousemove` para capturar a posição do mouse
- Calcula o ângulo entre os olhos e o cursor
- A pupila se move mantendo uma distância fixa do centro do olho

### Paleta de Cores
A pintura utiliza cores inspiradas na obra original:
- **Pele**: Tons quentes e naturais (#D4A574)
- **Cabelo**: Marrom escuro (#6B4423)
- **Sombras**: Tons terrosos (#8B7355)
- **Olhos**: Marrom e preto (#3D3D3D)

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura e canvas
- **CSS3**: Estilos e animações
- **JavaScript Vanilla**: Lógica de desenho e interatividade

## 🎓 Aprendizados (Alura)

Este projeto demonstra:
- ✅ Uso da API Canvas do HTML5
- ✅ Manipulação de eventos do mouse
- ✅ Cálculos matemáticos (trigonometria)
- ✅ Animações com `requestAnimationFrame`
- ✅ Estrutura de projeto front-end
- ✅ Boas práticas de organização de código

## 🌟 Melhorias Futuras

- [ ] Adicionar mais detalhes ao desenho
- [ ] Implementar tema escuro
- [ ] Adicionar controles para ajustar velocidade dos olhos
- [ ] Suporte a toque (mobile)
- [ ] Exportar como imagem

## 📝 Autor

Desenvolvido por **savagekyo** para o curso de desenvolvimento web da Alura.

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

**Divirta-se interagindo com a Monalisa! 🎨👀**