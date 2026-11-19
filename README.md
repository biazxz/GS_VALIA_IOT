# VALIA — CitizenTech

**Global Solution 2026/2 — FIAP**  
**Disciplina:** Disruptive Architectures: IoT, IoB & Generative IA  
**Turma:** 2TDSPI

---

# 1. SOBRE O PROJETO

O VALIA é uma solução CitizenTech desenvolvida para apoiar a identificação e análise de possíveis situações de vulnerabilidade trabalhista.

A aplicação utiliza informações relacionadas à jornada de trabalho, como horários de entrada, saída e intervalos, para identificar possíveis pontos de atenção e gerar relatórios informativos com apoio de Inteligência Artificial.

O objetivo é facilitar o acesso a informações trabalhistas e apoiar a compreensão de situações que podem exigir uma análise mais aprofundada.

O sistema possui caráter informativo e não substitui uma análise jurídica profissional.

# 2. OBJETIVO

Desenvolver uma aplicação que integre Inteligência Artificial generativa e RAG (Retrieval-Augmented Generation) para analisar informações de jornadas de trabalho e gerar relatórios fundamentados em documentos oficiais.

# 3. FUNCIONALIDADES

- Informar horário de entrada e saída.
- Informar a duração do intervalo em minutos.
- Calcular a duração da jornada.
- Identificar possíveis pontos de atenção.
- Consultar documentos oficiais por meio de RAG.
- Utilizar IA generativa para produzir relatórios.
- Apresentar os resultados na interface web.
- Exportar o relatório gerado em PDF.

# 4. TECNOLOGIAS UTILIZADAS

### Frontend
- React
- JavaScript
- Vite
- CSS

### Backend
- Python
- Flask
- Flask-CORS

### Inteligência Artificial
- Google Gemini
- Google GenAI

### Recuperação de informações — RAG
- Sentence Transformers
- Modelo paraphrase-multilingual-MiniLM-L12-v2
- Embeddings
- FAISS
- Busca vetorial por similaridade

### Ambiente de execução
- Google Colab
- Visual Studio Code
- Node.js
- npm
- ngrok

# 5. FONTES DE CONHECIMENTO

O VALIA utiliza documentos oficiais como fontes de consulta para fundamentar as análises.

Os documentos utilizados são:

1. Consolidação das Leis do Trabalho (CLT).
2. Constituição Federal.
3. Lei Complementar nº 150/2015.

Os arquivos PDF estão disponibilizados na raiz deste repositório.

# 6. FUNCIONAMENTO DO RAG

O projeto utiliza RAG (Retrieval-Augmented Generation), técnica que combina recuperação de informações documentais com geração de respostas por Inteligência Artificial.

O processo é realizado nas seguintes etapas:

1. Carregamento dos documentos oficiais em PDF.
2. Extração do conteúdo textual dos documentos.
3. Divisão do conteúdo em trechos menores.
4. Organização dos trechos para consulta.
5. Geração de embeddings utilizando Sentence Transformers.
6. Criação de um índice vetorial com FAISS.
7. Recuperação dos trechos mais relevantes para a consulta.
8. Envio do contexto recuperado ao Google Gemini.
9. Geração de um relatório informativo com base nas informações fornecidas.

Foram organizados 1.180 trechos documentais para recuperação de informações.

# 7. ARQUITETURA DA SOLUÇÃO

A aplicação é composta por três partes principais:

**Frontend React**

Responsável pela interface visual, entrada dos dados da jornada e apresentação dos relatórios.

**Backend Flask**

Responsável por receber as informações enviadas pelo frontend, executar a análise e disponibilizar o serviço por meio de uma API REST.

**Camada de Inteligência Artificial e RAG**

Responsável pela recuperação de informações dos documentos oficiais e pela geração dos relatórios utilizando o Google Gemini.

### Fluxo de funcionamento

1. O usuário informa os horários de trabalho e o intervalo.
2. O frontend React envia os dados para a API Flask.
3. O backend processa as informações.
4. O mecanismo RAG recupera trechos relevantes dos documentos.
5. O Google Gemini recebe o contexto recuperado e gera o relatório.
6. O resultado retorna ao frontend.
7. O usuário visualiza o relatório e pode exportá-lo em PDF.

# 8. MANUAL DE INSTALAÇÃO E EXECUÇÃO

Este manual descreve como preparar o ambiente e executar o VALIA pela primeira vez.

A execução utiliza dois ambientes simultâneos:

- Google Colab: processamento dos documentos, RAG, Gemini e API Flask.
- Computador local: execução da interface React.

É necessário manter os dois ambientes ativos durante a utilização da aplicação.

## 8.1. Pré-requisitos

Antes de começar, instale ou providencie:

- Computador com acesso à internet.
- Navegador de internet.
- Conta Google.
- Conta no GitHub.
- Node.js com npm.
- Visual Studio Code.
- Chave de API do Google AI Studio.
- Conta e token de autenticação do ngrok.

## 8.2. Baixar o projeto

1. Acesse o repositório do VALIA no GitHub.
2. Clique no botão verde **Code**.
3. Selecione **Download ZIP**.
4. Aguarde o download.
5. Abra a pasta Downloads do computador.
6. Clique com o botão direito no arquivo ZIP.
7. Selecione **Extrair Tudo**.
8. Escolha um local de fácil acesso.

Após a extração, os arquivos do projeto estarão disponíveis no computador.

## 8.3. Preparar o Google Colab

O Google Colab será utilizado para executar o notebook de Inteligência Artificial.

1. Acesse https://colab.research.google.com/
2. Entre com sua conta Google.
3. Clique em **Arquivo**.
4. Selecione **Fazer upload de notebook**.
5. Clique em **Escolher arquivo**.
6. Localize o arquivo `Valia_IA.ipynb` baixado do GitHub.
7. Selecione o arquivo.
8. Aguarde o notebook abrir.

## 8.4. Configurar as credenciais

O projeto utiliza duas credenciais externas.

### Chave do Google Gemini

1. Acesse https://aistudio.google.com/apikey
2. Entre com sua conta Google.
3. Crie uma chave de API.
4. Copie a chave gerada.

### Token do ngrok

1. Acesse https://ngrok.com/
2. Crie uma conta ou entre na sua conta.
3. Acesse o painel da plataforma.
4. Localize a opção de Authtoken.
5. Copie o token de autenticação.

### Cadastrar os Secrets no Colab

1. Volte ao notebook.
2. Na barra lateral esquerda, clique no ícone de chave, chamado **Secrets**.
3. Clique em **Add a new secret**.
4. No campo de nome, escreva `GEMINI_API_KEY`.
5. No campo de valor, cole a chave do Google AI Studio.
6. Habilite o acesso do notebook a esse segredo.
7. Crie outro segredo com o nome `NGROK_AUTHTOKEN`.
8. Cole o token do ngrok.
9. Habilite o acesso do notebook a esse segredo.

Não coloque as credenciais diretamente no código nem as publique no GitHub.

## 8.5. Executar o notebook

1. No Google Colab, clique em **Conectar**, no canto superior direito.
2. Aguarde a conexão do ambiente.
3. Volte ao início do notebook.
4. Localize a primeira célula de código.
5. Clique no botão de execução (▶) ao lado da célula.
6. Aguarde a execução terminar.
7. Continue executando as células de cima para baixo.

Também é possível utilizar a opção **Ambiente de execução → Executar tudo**, após configurar os Secrets.

A primeira execução pode demorar porque algumas bibliotecas e modelos precisam ser instalados e baixados.

## 8.6. Carregar os documentos PDF

Durante a execução, o notebook utiliza uma célula de upload para receber os documentos oficiais.

Quando aparecer a janela de seleção:

1. Clique em **Escolher arquivos**.
2. Localize os três documentos PDF baixados do repositório.
3. Selecione a Constituição Federal.
4. Selecione a CLT.
5. Selecione a Lei Complementar nº 150/2015.
6. Confirme o envio.
7. Aguarde a extração dos textos.

A célula utiliza a biblioteca PyPDF para realizar a leitura dos documentos.

## 8.7. Preparar a base RAG

Continue executando as células responsáveis pelo processamento documental.

O notebook realiza:

1. Extração dos textos dos PDFs.
2. Divisão dos documentos em trechos.
3. Organização dos trechos.
4. Geração dos embeddings.
5. Criação do índice FAISS.
6. Preparação da função de busca documental.

O modelo utilizado para embeddings é `paraphrase-multilingual-MiniLM-L12-v2`.

Após essa etapa, o sistema estará preparado para recuperar informações relevantes dos documentos.

## 8.8. Inicializar o Google Gemini

Continue executando as células de configuração do Gemini.

O notebook utiliza a credencial `GEMINI_API_KEY` cadastrada nos Secrets.

O modelo generativo recebe os dados da análise e o contexto documental recuperado pelo mecanismo RAG para produzir o relatório.

## 8.9. Inicializar a API Flask

Continue executando as células responsáveis pela configuração da API.

A API disponibiliza a rota:

`POST /analisar`

Os dados recebidos são:

- `entrada`: horário de entrada.
- `saida`: horário de saída.
- `pausa_minutos`: duração do intervalo em minutos.

O backend processa essas informações e retorna o relatório gerado.

## 8.10. Disponibilizar a API com ngrok

1. Localize a célula responsável pela configuração do ngrok.
2. Execute a célula.
3. Aguarde a criação do túnel.
4. Copie o endereço HTTPS apresentado na saída.

O endereço será semelhante a:

`https://exemplo.ngrok-free.dev`

Esse endereço é temporário e pode mudar quando o túnel for reiniciado.

Mantenha o Google Colab e o ngrok ativos durante a utilização do frontend.

## 8.11. Preparar o frontend

O frontend utiliza React e Vite.

### Instalar Node.js

1. Acesse https://nodejs.org/
2. Baixe a versão LTS.
3. Abra o instalador.
4. Siga as instruções apresentadas.
5. Finalize a instalação.

### Verificar a instalação

1. Abra o menu Iniciar do Windows.
2. Digite `cmd`.
3. Abra o Prompt de Comando.
4. Execute:

```bash
node -v
```

5. Pressione Enter.
6. Execute:

```bash
npm -v
```

7. Pressione Enter.

Se os comandos apresentarem números de versão, o Node.js e o npm estão disponíveis.

## 8.12. Abrir o frontend no Visual Studio Code

1. Abra o Visual Studio Code.
2. Clique em **File → Open Folder**.
3. Selecione a pasta do frontend do VALIA.
4. Clique em **Selecionar Pasta**.
5. Abra o terminal pelo menu **Terminal → New Terminal**.

O terminal deve estar localizado na pasta que contém o arquivo `package.json`.

## 8.13. Instalar as dependências

No terminal do Visual Studio Code, execute:

```bash
npm install
```

Pressione Enter e aguarde a instalação.

Esse comando instala as bibliotecas necessárias para executar o frontend, conforme o arquivo `package.json`.

## 8.14. Configurar o endereço da API

1. Abra o arquivo `src/App.jsx`.
2. Localize a variável `API_URL`.
3. Substitua o endereço antigo pelo endereço HTTPS atual gerado pelo ngrok.

Exemplo:

```javascript
const API_URL = 'https://SEU-ENDERECO-NGROK';
```

Não acrescente `/analisar` ao final da variável, pois a aplicação já acrescenta essa rota na chamada da API.

4. Pressione `Ctrl + S` para salvar.

## 8.15. Iniciar a aplicação

No terminal do Visual Studio Code, execute:

```bash
npm run dev
```

Pressione Enter.

O Vite apresentará um endereço local, normalmente:

`http://localhost:5173`

Copie o endereço, abra uma nova aba do navegador e cole o endereço na barra de navegação.

A página inicial do VALIA será carregada.

## 8.16. Realizar uma análise

Com o frontend e o backend ativos:

1. Acesse a seção de análise de jornada.
2. Informe o horário de entrada.
3. Informe o horário de saída.
4. Informe a duração do intervalo em minutos.
5. Clique no botão de análise.
6. Aguarde o processamento.
7. Confira o relatório apresentado na tela.

### Exemplo de teste

- Entrada: 08:00.
- Saída: 19:00.
- Intervalo: 30 minutos.

O sistema deverá calcular a duração da jornada e apresentar os possíveis pontos de atenção.

## 8.17. Exportar o relatório em PDF

1. Após a geração do relatório, localize o botão de download.
2. Clique no botão.
3. Aguarde a criação do documento.
4. Abra a pasta Downloads do computador.
5. Localize o arquivo `relatorio-valia.pdf`.
6. Abra o documento para conferir o resultado.

## 8.18. Encerrar a aplicação

1. No terminal do Visual Studio Code, pressione `Ctrl + C`.
2. No Google Colab, interrompa o ambiente de execução quando não precisar mais utilizar o sistema.
3. Encerre o túnel ngrok.

Quando o Colab ou o túnel forem encerrados, a API deixará de estar disponível.

Para uma nova execução, será necessário iniciar novamente o ambiente e atualizar o endereço da variável `API_URL`, caso tenha mudado.

## 8.19. Problemas comuns

| Problema | Solução |
|---|---|
| `npm` não é reconhecido | Verificar a instalação do Node.js e reiniciar o terminal. |
| `package.json` não encontrado | Conferir se o terminal está na pasta correta do frontend. |
| Erro de conexão com a API | Verificar se o Colab e o ngrok estão ativos. |
| Erro de autenticação Gemini | Conferir o Secret `GEMINI_API_KEY`. |
| Erro de autenticação ngrok | Conferir o Secret `NGROK_AUTHTOKEN`. |
| Página não abre | Verificar se `npm run dev` está em execução. |
| Relatório não é gerado | Conferir as células do notebook, a API e a conexão com o Gemini. |

# 9. TESTES E AVALIAÇÃO

Foram realizados testes com diferentes cenários de jornada:

| Teste | Entrada | Saída | Intervalo |
|---|---|---|---|
| 01 — Intervalo reduzido | 08:00 | 19:00 | 30 minutos |
| 02 — Jornada regular | 08:00 | 17:00 | 60 minutos |
| 03 — Possível excesso de horas | 08:00 | 18:00 | 60 minutos |

Também foi executada uma avaliação automatizada com três cenários, obtendo três testes aprovados.

As evidências dos testes estão disponíveis nos arquivos PNG do repositório.

# 10. USO RESPONSÁVEL E LIMITAÇÕES

O VALIA possui finalidade informativa e de apoio à análise.

- Os resultados dependem das informações fornecidas pelo usuário.
- A identificação de pontos de atenção não representa uma conclusão automática de irregularidade.
- A aplicação não substitui orientação jurídica profissional.
- A análise pode não contemplar todas as particularidades de contratos, regimes de trabalho e convenções coletivas.
- As respostas geradas por IA devem ser verificadas.
- Credenciais e dados pessoais devem ser protegidos.
- O ambiente demonstrativo com ngrok não representa uma implantação segura de produção.

# 11. EVIDÊNCIAS

O repositório disponibiliza imagens dos testes realizados:

- `teste_01_jornada_intervalo.png`
- `teste_02_jornada_regular.png`
- `teste_03_horas_extras.png`
- `teste_04_avaliacao_automatizada.png`
- `teste_rag_ia_gemini.png`

As imagens demonstram cenários de análise e resultados obtidos durante o desenvolvimento.

# 12. INTEGRANTES

- Beatriz Franco RM563686
- Maria Fernanda Santos Mendes RM565277
- Giovana Souza Vieira RM564430
- Luis Guilherme Borges Silva RM566548
- Leonardo Zerbinatti de Sales RM562992
# 13. REPOSITÓRIO

Projeto desenvolvido para a Global Solution 2026/2 — FIAP.

**VALIA — CitizenTech**
