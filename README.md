# JogoMina - Campo Minado em React Native

## 📱 Sobre o Projeto

JogoMina é uma implementação do clássico jogo Campo Minado (Minesweeper) em React Native. O jogo apresenta uma interface intuitiva, sistema de marcação de bandeiras, detecção de vitória/derrota e um campo de jogo dinâmico que se ajusta ao tamanho da tela.
 
## 🎮 Funcionalidades

- [x] Campo de jogo dinâmico
- [x] Sistema de marcação de bombas
- [x] Detecção de explosão
- [x] Números indicando bombas próximas
- [x] Sistema de vitória/derrota
- [x] Interface responsiva
- [x] Diferentes níveis de dificuldade

## 🚀 Tecnologias Utilizadas

- React Native
- TypeScript
- React Hooks
- StyleSheet para estilização
- Dimensions API para responsividade

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Field.tsx       # Componente do campo individual
│   ├── Mine.tsx        # Componente da mina
│   └── Flags.tsx       # Componente da bandeira
├── functions.ts        # Lógica do jogo
├── params.ts          # Parâmetros e configurações
├── Minefield.tsx      # Campo do jogo
└── App.tsx           # Componente principal
```

## 🎯 Principais Componentes

### Field (Campo)
```typescript
interface FieldProps {
  mined: boolean;
  opened: boolean;
  nearmines: number;
  exploded: boolean;
  flagged: boolean;
  onOpen: () => void;
}
```

### Mine (Mina)
```typescript
// Representação visual da mina com estilos dinâmicos
const styles = {
  coremine: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: 'black'
  }
  // ... outros estilos
}
```

### Flags (Bandeira)
```typescript
interface FlagProps {
  bigger?: boolean;  // Controla o tamanho da bandeira
}
```

## ⚙️ Configurações do Jogo

```typescript
const params = {
    blockSize: 30,       // Tamanho de cada bloco
    borderSize: 5,       // Tamanho da borda
    fontSize: 15,        // Tamanho da fonte
    headerRatio: 0.15,   // Proporção do cabeçalho
    difficultLevel: 0.1  // Nível de dificuldade (10% de minas)
}
```

## 🎲 Lógica do Jogo

### Criação do Tabuleiro
```typescript
const createBoard = (rows: number, columns: number) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => ({
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearmines: 0
        }));
    });
};
```

### Distribuição das Minas
```typescript
const spreadmines = (board: any, minesamount: number) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesplanted = 0;
    // Lógica de distribuição aleatória
}
```

## 🎨 Estilização

O jogo utiliza um sistema de cores para indicar a quantidade de minas próximas:
- 1 mina: Azul (#2a2bd7)
- 2 minas: Verde (#2b520f)
- 3-5 minas: Vermelho (#f9060a)
- 6+ minas: Rosa (#f221a9)

## 💻 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Rafa1a/JogoMina.git
   cd JogoMina
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npx react-native run-android
   # ou
   npx react-native run-ios
   ```

## 🎮 Como Jogar

1. Toque em um campo para revelá-lo
2. Números indicam quantas minas estão adjacentes
3. Evite tocar em campos com minas
4. Use bandeiras para marcar possíveis minas
5. Revele todos os campos sem minas para vencer

## 🔧 Personalizações

Para ajustar a dificuldade do jogo, modifique o `params.ts`:
```typescript
const params = {
    // ...
    difficultLevel: 0.1  // Ajuste entre 0.1 e 0.3
}
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova Feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## ✨ Próximas Atualizações

- [ ] Adicionar sistema de pontuação
- [ ] Adicionar sons e efeitos visuais
- [ ] Salvar recordes localmente
- [ ] Adicionar modo multiplayer

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
⌨️ Desenvolvido com ❤️ por [seu-nome](https://github.com/Rafa1a)
