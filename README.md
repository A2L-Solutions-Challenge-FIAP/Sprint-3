# 📌 Projeto Sistema de Lembretes de Consultas


Este repositório dá continuidade ao desenvolvimento da solução proposta nas sprints anteriores, voltada à melhoria do processo de teleconsulta no IMREA – Instituto de Medicina Física e Reabilitação do Hospital das Clínicas.

Nesta nova etapa, o foco está na construção de um **sistema web de lembretes de consultas**, pensado especialmente para **auxiliar os funcionários do IMREA na gestão e envio de lembretes aos pacientes**. O objetivo é tornar o processo mais **eficiente, organizado e acessível**, reduzindo faltas e facilitando o acompanhamento dos atendimentos já agendados.

A interface do sistema foi desenvolvida com foco em **usabilidade, clareza e responsividade**, garantindo que os usuários internos possam visualizar, criar, editar e acompanhar o status dos lembretes com facilidade e agilidade.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [React Router DOM](https://reactrouter.com/)
- [VS Code](https://code.visualstudio.com/)

---

## 👥 Integrantes

| Nome           | RM     | Curso / Turma                                |
|----------------|--------|----------------------------------------------|
| Ana Freitas    | 565559 | Análise e Desenvolvimento de Sistemas - FIAP |
| Luis Borges    | 566548 | Análise e Desenvolvimento de Sistemas - FIAP |
| Gabriel Garcia | 563298 | Análise e Desenvolvimento de Sistemas - FIAP |

---


**Ícones utilizados:**  
- Utilizados para o menu onde cada item do menu tem um icone.
- Utilizados na pagina desenvolvedores, com icone do Github e LinkedIn
- Todos os icones utilizados estão na pasta assets, sendo em sua maior parte arquivos svg.



---

## 📁 Estrutura de Pastas

```
src/
├── assets/                 # Imagens e ícones
├── components/             # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SidebarFooter.tsx
│   │   ├── SidebarHeader.tsx
│   │   └── SidebarItems.tsx
├── pages/                  # Páginas principais
│   ├── Dashboard.tsx
│   ├── Developers.tsx
│   ├── Faq.tsx
│   ├── Home.tsx
│   ├── Logs.tsx
│   ├── Reports.tsx
│   ├── Sac.tsx
│   ├── Settings.tsx
│   └── UnderConstrution.tsx
├── App.tsx                 # Componente principal
├── main.tsx                # Ponto de entrada da aplicação
├── index.css               # Estilização base com Tailwind
└── Routes.tsx              # Configuração de rotas
```

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash

git clone https://github.com/A2L-Solutions-Challenge-FIAP/Sprint-3.git

```

### 2. Navegue até o diretório do projeto
```bash

cd Sprint-3

```

### 3. Instale as dependências
```bash

npm install

```

Se necessário, instale também:

**Bibliotecas para validação de formulários**
```bash

npm install react-hook-form zod @hookform/resolvers

```

**Roteamento**
```bash
npm install react-router-dom
```

**Tailwind CSS e plugins**
```bash

npm install -D tailwindcss @tailwindcss/forms

```

**Tipagens (em caso de erro com TypeScript)**
```bash

npm install -D @types/react @types/react-dom

```

### 4. Execute o projeto em ambiente de desenvolvimento

``` bash

npm run dev 

```
- acesse pelo navegador o link que aparecerá como este http://localhost:5173/

---

## 🔗 Links Importantes

- [📂 Repositório GitHub](https://github.com/A2L-Solutions-Challenge-FIAP/Sprint-4.git)
- [📹 Vídeo de Demonstração (YouTube)](https://youtube.com/meuvideo)
- [ Deploy Vercel](https://sprint-4-git-main-anafreitasbrs-projects.vercel.app/)


