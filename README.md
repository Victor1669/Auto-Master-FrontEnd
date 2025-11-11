# ESTRUTURA DE PASTAS:

```
├── 📁 public
├── 📁 src
│   ├── 📁 Components
│   │   ├── 📁 Form
│   │   ├── 📁 TabBar
│   │   ├── 📄 App.jsx
│   │   └── 📄 ProtectedRoute.jsx
│   ├── 📁 Context
│   │   └── 📄 AuthContext.jsx
│   ├── 📁 Hooks
│   │   ├── 📄 useClientes.jsx
│   │   ├── 📄 usePesquisaServico.jsx
│   │   ├── 📄 useServicos.jsx
│   │   ├── 📄 useUsuario.jsx
│   │   └── 📄 useVeiculo.jsx
│   ├── 📁 Pages
│   │   ├── 📁 Cadastro
│   │   ├── 📁 Content
│   │   │   ├── 📁 Clientes
│   │   │   ├── 📁 ListaServicos
│   │   │   ├── 📁 Servicos
│   │   │   │   ├── 📄 Cad_Servicos.jsx
│   │   │   │   ├── 🎨 Cad_Servicos.module.css
│   │   │   │   └── 📄 Servicos.jsx
│   │   │   ├── 📁 Veiculos
│   │   ├── 📁 LandingPage
│   │   ├── 📁 Login
│   │   │   ├── 📁 Reset
│   │   └── 📄 Home.jsx
│   ├── 📁 Services
│   │   ├── 📄 Clientes.jsx
│   │   ├── 📄 Servicos.jsx
│   │   ├── 📄 Usuario.jsx
│   │   └── 📄 Veiculos.jsx
│   ├── 📁 StyleSheets
│   │   └── 🎨 index.css
│   ├── 📁 Utils
│   │   └── 📄 DateFormatter.js
│   ├── 📁 assets
│   └── 📄 main.jsx
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package.json
├── ⚙️ pnpm-lock.yaml
└── 📄 vite.config.js
```

## IMPORTANTE:

### É necessário ter o Node na versão 20+, e pnpm baixados

**Gerenciador de pacotes**: PNPM
Bundler: Vite

**Bibliotecas**: react-router-dom, axios

#### Para instalar o pnpm:

- npm install -g pnpm

#### Para criar uma cópia local do repositório:

- git clone https://github.com/Victor1669/Auto-Master-FrontEnd

### Convenção de branchs:

- feat: adiciona/altera conteúdo
- fix: correção de bugs/erros
- docs: atualiza README

---

#### Baixar as dependências:

- pnpm install

#### Iniciar o servidor com o código (dentro do projeto):

- code . & pnpm vite

#### Para criar uma branch:

- git checkout -b **NOME_BRANCH**

(Se a branch não existir, vai ser criada uma nova e você vai ser movido pra ela)

#### Quando o dia começar e você for fazer alguma coisa, sempre deixe a branch principal atualizada:

- git checkout master
- git pull
- git checkout -b **BRANCH_ANTERIOR**

#### Enviar as mudanças:

- git checkout -b **NOME_BRANCH** (Se você não estiver na branch correta)
- git add .
- git commit -m **TEXTO_COMMIT**
- git push origin **NOME_BRANCH**

##### Mande uma pull request com título e descrição no GitHub e depois:

- git fetch origin
- git rebase origin/master
