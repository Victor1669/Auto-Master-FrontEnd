# ESTRUTURA DE PASTAS:

```
├── 📁 public
├── 📁 src
│   ├── 📁 Components
│   │   ├── 📁 CarBackground
│   │   ├── 📁 Content
│   │   ├── 📁 Form
│   │   ├── 📁 LandingHeader
│   │   ├── 📁 LandingSections
│   │   ├── 📁 TabBar
│   │   ├── 📄 App.jsx
│   ├── 📁 Context
│   ├── 📁 Hooks
│   ├── 📁 Pages
│   │   ├── 📁 Cadastro
│   │   ├── 📁 LandingPage
│   │   ├── 📁 Login
│   │   │   ├── 📁 ResetPassword
│   │   └── 📁 v1
│   │       ├── 📁 Clientes
│   │       ├── 📁 ListaServicos
│   │       ├── 📁 Servicos
│   │       ├── 📁 Veiculos
│   │       └── 📄 Home.jsx
│   ├── 📁 Services
│   ├── 📁 StyleSheets
│   ├── 📁 Utils
│   ├── 📁 assets
│   └── 📄 main.jsx
```

## IMPORTANTE:

### Esse projeto usa variáveis de ambiente

#### Variável para colocar o link onde o BackEnd está rodando:

- VITE_BASE_URL

### É necessário ter o Node na versão 20+, e pnpm baixados

**Gerenciador de pacotes**: PNPM
Bundler: Vite

**Bibliotecas**: react-router-dom, axios, react-toatify

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
