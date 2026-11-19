# VALIA — CitizenTech

**Global Solution 2026/2 — FIAP**  
**Turma:** 2TDSPI

## 1. Sobre o projeto

O VALIA é uma solução CitizenTech que utiliza Inteligência Artificial para apoiar a identificação e análise de possíveis situações de vulnerabilidade trabalhista.

A aplicação analisa informações de jornada de trabalho, como horário de entrada, saída e intervalo, apresentando pontos de atenção e relatórios informativos com fundamentação em documentos oficiais.

## 2. Objetivo

Desenvolver uma aplicação com IA generativa e RAG para auxiliar na análise de jornadas de trabalho, facilitando o acesso a informações relacionadas aos direitos trabalhistas.

## 3. Funcionalidades desenvolvidas

- Informar horário de entrada e saída.
- Informar duração do intervalo.
- Calcular a duração da jornada.
- Identificar possíveis pontos de atenção.
- Consultar documentos oficiais utilizando RAG.
- Gerar relatórios com IA generativa.
- Exibir os resultados na interface.
- Exportar relatórios em PDF.

## 4. Tecnologias utilizadas

**Frontend**
- React
- JavaScript
- Vite
- CSS

**Backend e IA**
- Python
- Flask
- Google Gemini
- Google Colab

**RAG**
- Sentence Transformers
- FAISS
- Embeddings
- Recuperação de documentos por similaridade.

## 5. Inteligência Artificial e RAG

O VALIA utiliza a técnica RAG (Retrieval-Augmented Generation), que permite recuperar informações de documentos oficiais para fornecer contexto ao modelo de IA.

Foram utilizadas as seguintes fontes:

- Consolidação das Leis do Trabalho (CLT).
- Constituição Federal.
- Lei Complementar nº 150/2015.

O processamento inclui extração dos documentos, divisão em trechos, geração de embeddings e indexação com FAISS.

Foram organizados **1.180 trechos documentais** para recuperação de informações.

Após a recuperação dos trechos relevantes, o contexto é enviado ao Google Gemini para geração dos relatórios.

## 6. Arquitetura da aplicação

O funcionamento ocorre da seguinte maneira:

1. O usuário informa os dados da jornada no frontend React.
2. O React envia as informações para a API Flask.
3. O backend processa os dados e realiza a análise.
4. O mecanismo RAG recupera trechos relevantes dos documentos oficiais.
5. O Google Gemini utiliza o contexto para gerar o relatório.
6. O resultado retorna à aplicação e pode ser exportado em PDF.

## 7. Testes e avaliação

Foram realizados testes com diferentes cenários de jornada:

- Jornada com intervalo reduzido.
- Jornada regular.
- Jornada com possível excesso de horas.

Também foi executada uma avaliação automatizada com três cenários, obtendo **3 de 3 testes aprovados**.

As evidências dos testes e dos resultados estão disponíveis na pasta de evidências do projeto.

## 8. MANUAL COMPLETO DE INSTALAÇÃO E EXECUÇÃO

Este manual apresenta o passo a passo para executar o VALIA pela primeira vez, desde a preparação do ambiente até a utilização da aplicação e geração do relatório em PDF.

A aplicação utiliza dois ambientes que precisam funcionar simultaneamente:

- **Google Colab:** responsável pelo processamento dos documentos, RAG, integração com Gemini e execução da API Flask.
- **Computador local:** responsável pela execução da interface desenvolvida em React.

O frontend e o backend precisam estar ativos ao mesmo tempo para que a análise funcione.

---

### 8.1. O que é necessário antes de começar?

Antes de executar o projeto, é necessário possuir:

1. Um computador com acesso à internet.
2. Uma conta Google para acessar o Google Colab.
3. Uma conta no GitHub para acessar o código-fonte.
4. Node.js instalado no computador.
5. Visual Studio Code instalado no computador.
6. Uma chave de API do Google AI Studio.
7. Uma conta no ngrok.

**Importante:** a chave do Gemini e o token do ngrok são credenciais pessoais. Não devem ser publicados no GitHub ou compartilhados com outras pessoas.

### 8.2. Baixar o projeto do GitHub

**Passo 1 — Acessar o repositório**

1. Abra o navegador de internet.
2. Acesse o repositório do VALIA no GitHub.
3. Na página inicial do projeto, localize o botão verde chamado **Code**.

**Passo 2 — Baixar os arquivos**

1. Clique em **Code**.
2. Selecione a opção **Download ZIP**.
3. Aguarde o download terminar.
4. Abra a pasta Downloads do computador.
5. Localize o arquivo ZIP do projeto.
6. Clique com o botão direito sobre o arquivo.
7. Selecione **Extrair Tudo**.
8. Escolha um local de fácil acesso, como a Área de Trabalho.

Ao finalizar, será criada uma pasta contendo os arquivos do projeto.

### 8.3. Preparar o Google Colab

O Google Colab será utilizado para executar o processamento de Inteligência Artificial e a API do VALIA.

**Passo 1 — Acessar o Google Colab**

1. Abra uma nova aba no navegador.
2. Acesse: https://colab.research.google.com/
3. Entre com sua conta Google.
4. Aguarde a abertura da página inicial.

**Passo 2 — Abrir o notebook do VALIA**

1. Localize a pasta do projeto que foi extraída do ZIP.
2. Procure o arquivo `VALIA_Inteligencia_Artificial.ipynb`.
3. Abra o Google Colab.
4. Clique em **Arquivo**.
5. Selecione **Fazer upload de notebook**.
6. Clique em **Escolher arquivo**.
7. Localize o notebook na pasta do VALIA.
8. Selecione o arquivo e aguarde o carregamento.

O notebook será aberto em uma nova página do Google Colab.

**Passo 3 — Conectar o ambiente**

1. No canto superior direito, clique em **Conectar**.
2. Aguarde o ambiente de execução ser iniciado.
3. Quando a conexão estiver ativa, será possível executar as células do notebook.

### 8.4. Configurar as credenciais de acesso

O VALIA utiliza o Google Gemini para gerar os relatórios e o ngrok para disponibilizar temporariamente a API.

**Passo 1 — Criar uma chave do Gemini**

1. Acesse https://aistudio.google.com/apikey
2. Entre com sua conta Google.
3. Crie uma chave de API.
4. Copie a chave gerada.
5. Não compartilhe essa chave publicamente.

**Passo 2 — Criar uma conta no ngrok**

1. Acesse https://ngrok.com/
2. Crie uma conta ou entre em uma conta existente.
3. Acesse o painel da plataforma.
4. Localize a seção de autenticação ou seu Authtoken.
5. Copie o token de autenticação.

**Passo 3 — Cadastrar as credenciais no Google Colab**

1. Volte para a página do notebook.
2. Localize o ícone de chave, chamado **Secrets**, na barra lateral esquerda.
3. Clique para abrir a área de segredos.
4. Clique em **Add a new secret**.
5. No campo de nome, digite `GEMINI_API_KEY`.
6. No campo de valor, cole a chave criada no Google AI Studio.
7. Ative a opção de acesso pelo notebook.
8. Crie outro segredo.
9. No campo de nome, digite `NGROK_AUTHTOKEN`.
10. No campo de valor, cole o token obtido no ngrok.
11. Ative a opção de acesso pelo notebook.

Ao finalizar, os dois segredos estarão disponíveis para o notebook sem que seja necessário escrever as credenciais diretamente no código.

### 8.5. Executar o notebook de Inteligência Artificial

**Passo 1 — Entender a organização do notebook**

O notebook contém células de código responsáveis por diferentes etapas do funcionamento do VALIA.

As células devem ser executadas na ordem em que aparecem, de cima para baixo.

**Passo 2 — Executar as células**

1. Volte ao início do notebook.
2. Localize a primeira célula de código.
3. Clique no botão de execução, representado pelo símbolo de reprodução (▶).
4. Aguarde a execução terminar.
5. Continue para a próxima célula.
6. Repita o procedimento até chegar às últimas células.

Outra opção é utilizar **Ambiente de execução → Executar tudo**, depois de conferir se os Secrets foram configurados corretamente.

**Atenção:** a primeira execução pode demorar mais porque algumas bibliotecas e modelos precisam ser baixados.

**Passo 3 — Instalar e preparar as bibliotecas**

Durante a execução, o notebook prepara as bibliotecas utilizadas no projeto, incluindo:

- Sentence Transformers: geração de embeddings.
- FAISS: indexação e busca por similaridade.
- Google GenAI: comunicação com o Gemini.
- Flask: criação da API.
- Flask-CORS: comunicação entre frontend e backend.
- Pyngrok: criação do túnel de acesso.

Aguarde cada célula terminar antes de prosseguir.

**Passo 4 — Carregar os documentos oficiais**

O notebook utiliza três documentos como fontes de informação:

- Consolidação das Leis do Trabalho (CLT).
- Constituição Federal.
- Lei Complementar nº 150/2015.

Os documentos são carregados e processados para que o sistema possa recuperar informações relevantes durante a análise.

**Passo 5 — Preparar a base de conhecimento**

O processamento realiza as seguintes atividades:

1. Extrai o texto dos documentos.
2. Divide o conteúdo em trechos menores.
3. Organiza os trechos para consulta.
4. Gera embeddings com o modelo Sentence Transformers.
5. Cria o índice vetorial utilizando FAISS.

O projeto organizou 1.180 trechos documentais para a recuperação de informações.

**Passo 6 — Inicializar o Gemini**

O notebook utiliza a chave `GEMINI_API_KEY`, cadastrada anteriormente nos Secrets, para inicializar o cliente do Google Gemini.

O modelo generativo é utilizado para produzir os relatórios com base nas informações recuperadas e nos dados da jornada.

**Passo 7 — Preparar a análise de jornada**

O notebook contém funções responsáveis por:

- Calcular a duração da jornada.
- Identificar possíveis pontos de atenção.
- Recuperar informações documentais.
- Gerar relatórios explicativos com apoio do Gemini.

**Passo 8 — Iniciar a API Flask**

Execute as células responsáveis pela criação e inicialização da API Flask.

A API disponibiliza a rota:

`POST /analisar`

Ela recebe os seguintes dados:

- `entrada`: horário de início da jornada.
- `saida`: horário de término da jornada.
- `pausa_minutos`: duração do intervalo em minutos.

O backend processa os dados e retorna o relatório gerado.

### 8.6. Disponibilizar a API utilizando ngrok

O ngrok permite que o frontend, executado no computador local, consiga acessar a API que está sendo executada no Google Colab.

**Passo 1 — Iniciar o túnel**

1. No notebook, localize a célula responsável pela inicialização do ngrok.
2. Execute essa célula.
3. Aguarde o processamento.
4. Localize o endereço HTTPS apresentado na saída da célula.

O endereço será semelhante a:

`https://exemplo.ngrok-free.dev`

**Passo 2 — Copiar o endereço**

1. Selecione o endereço HTTPS apresentado.
2. Copie o endereço completo.
3. Guarde-o para utilizar na configuração do frontend.

Não utilize um endereço antigo. O endereço pode mudar sempre que um novo túnel for iniciado.

**Passo 3 — Verificar a API**

Com o túnel ativo, o endereço principal da API pode ser acessado pelo navegador.

A rota principal retorna uma mensagem indicando o status da API, quando disponível.

O túnel e o ambiente do Google Colab devem permanecer ativos durante a utilização do sistema.

### 8.7. Preparar o computador para executar o frontend

O frontend do VALIA foi desenvolvido com React e Vite.

**Passo 1 — Instalar o Node.js**

1. Acesse https://nodejs.org/
2. Baixe a versão LTS.
3. Abra o instalador baixado.
4. Siga as instruções apresentadas.
5. Finalize a instalação.
6. Feche e abra novamente o terminal, caso já estivesse aberto.

**Passo 2 — Verificar a instalação**

1. Abra o menu Iniciar do Windows.
2. Digite `cmd`.
3. Abra o Prompt de Comando.
4. Digite:

```bash
node -v
```

5. Pressione Enter.
6. Em seguida, digite:

```bash
npm -v
```

7. Pressione Enter.

Se os dois comandos apresentarem números de versão, o Node.js e o npm estão disponíveis.

**Passo 3 — Abrir o projeto no Visual Studio Code**

1. Abra o Visual Studio Code.
2. Clique em **File** ou **Arquivo**.
3. Selecione **Open Folder** ou **Abrir Pasta**.
4. Localize a pasta do projeto que foi extraída do ZIP.
5. Selecione a pasta que contém o frontend.
6. Clique em **Selecionar Pasta**.

O conteúdo do projeto será exibido na barra lateral esquerda.

### 8.8. Instalar as dependências do frontend

**Passo 1 — Abrir o terminal**

No Visual Studio Code:

1. Clique no menu **Terminal**.
2. Selecione **New Terminal** ou **Novo Terminal**.
3. Aguarde a abertura do terminal na parte inferior da tela.

**Passo 2 — Entrar na pasta correta**

O terminal precisa estar dentro da pasta que contém o arquivo `package.json`.

Se ainda não estiver, utilize o comando `cd` seguido do caminho da pasta do frontend.

Exemplo:

```bash
cd "C:\Users\Beatriz\Desktop\GS_VALIA_IOT\VALIA_FRONTEND"
```

O caminho acima é um exemplo do ambiente de desenvolvimento original. Caso o projeto tenha sido extraído em outro local, utilize o caminho correspondente.

**Passo 3 — Instalar as dependências**

Digite:

```bash
npm install
```

Pressione Enter e aguarde a instalação terminar.

Esse comando instala as bibliotecas necessárias para executar a interface, conforme o arquivo `package.json`.

### 8.9. Configurar a comunicação entre React e Flask

Antes de iniciar o frontend, é necessário informar o endereço atual da API.

**Passo 1 — Abrir o arquivo App.jsx**

1. Na barra lateral do VS Code, abra a pasta `src`.
2. Localize o arquivo `App.jsx`.
3. Clique duas vezes para abrir o arquivo.

**Passo 2 — Localizar a variável API_URL**

Procure a seguinte configuração:

```javascript
const API_URL = 'https://...';
```

**Passo 3 — Atualizar o endereço**

Substitua o endereço antigo pelo endereço HTTPS copiado do ngrok.

Exemplo:

```javascript
const API_URL = 'https://SEU-ENDERECO-NGROK';
```

Não acrescente `/analisar` ao final da variável, pois essa rota já é acrescentada pela função de análise no frontend.

**Passo 4 — Salvar**

Pressione:

`Ctrl + S`

O arquivo estará atualizado.

### 8.10. Iniciar a aplicação VALIA

**Passo 1 — Abrir o terminal do VS Code**

Certifique-se de que o terminal está na pasta do frontend, onde está localizado o arquivo `package.json`.

**Passo 2 — Executar o Vite**

Digite:

```bash
npm run dev
```

Pressione Enter.

**Passo 3 — Acessar a aplicação**

O terminal apresentará uma mensagem semelhante a:

`Local: http://localhost:5173/`

1. Copie o endereço apresentado.
2. Abra uma nova aba do navegador.
3. Cole o endereço.
4. Pressione Enter.

A página inicial do VALIA será carregada.

### 8.11. Realizar uma análise de jornada

Com o frontend e o backend ativos:

1. Acesse a seção de análise de jornada.
2. Informe o horário de entrada.
3. Informe o horário de saída.
4. Informe o intervalo em minutos.
5. Clique no botão de análise.
6. Aguarde o processamento.
7. Confira o relatório apresentado na tela.

O frontend envia os dados para a API Flask, que executa a análise e utiliza o mecanismo RAG e o Gemini para produzir o relatório.

**Exemplo de teste:**

- Entrada: 08:00.
- Saída: 19:00.
- Intervalo: 30 minutos.

O sistema deverá calcular a duração da jornada e apresentar os possíveis pontos de atenção identificados.

### 8.12. Gerar o relatório em PDF

Após a análise:

1. Localize o botão de download do relatório.
2. Clique no botão.
3. Aguarde a geração do documento.
4. Abra a pasta Downloads do computador.
5. Localize o arquivo `relatorio-valia.pdf`.
6. Abra o arquivo para conferir o conteúdo.

### 8.13. Como encerrar a execução

Depois de utilizar o sistema:

1. Feche a aba do navegador que contém o frontend.
2. No terminal do VS Code, pressione `Ctrl + C` para interromper o Vite.
3. No Google Colab, interrompa o ambiente de execução quando não precisar mais utilizá-lo.

Ao encerrar o ambiente Colab ou o túnel ngrok, a API deixa de ficar disponível. Para utilizar novamente, será necessário iniciar o ambiente e atualizar o endereço da variável `API_URL`, se ele tiver mudado.

### 8.14. Problemas comuns durante a execução

| Problema | Possível solução |
|---|---|
| `npm` não é reconhecido | Verificar a instalação do Node.js e reiniciar o terminal. |
| `package.json` não encontrado | Conferir se o terminal está na pasta correta do frontend. |
| Erro de conexão com a API | Verificar se o Colab está conectado e se o ngrok está ativo. |
| Erro de autenticação do Gemini | Conferir se `GEMINI_API_KEY` foi cadastrada corretamente nos Secrets. |
| Erro de autenticação do ngrok | Conferir se `NGROK_AUTHTOKEN` foi cadastrado corretamente. |
| Página não abre | Verificar se `npm run dev` está em execução e utilizar o endereço apresentado no terminal. |
| Relatório não é gerado | Conferir a execução do notebook, o funcionamento da API e a conexão com o Gemini. |

**Observação final:** o VALIA foi desenvolvido como projeto acadêmico e sua execução utiliza Google Colab e ngrok para demonstração. O ambiente depende de conexão com a internet, credenciais válidas e disponibilidade dos serviços externos.

## 9. Uso responsável e limitações

O VALIA possui finalidade informativa e de apoio à análise.

- Os resultados dependem das informações fornecidas pelo usuário.
- A identificação de pontos de atenção não representa uma conclusão automática de irregularidade.
- A análise não substitui orientação jurídica profissional.
- A aplicação pode não contemplar todas as particularidades de contratos, regimes de trabalho e convenções coletivas.
- As respostas geradas pela IA devem ser verificadas.
- Credenciais e dados pessoais devem ser protegidos.

## 10. Integrantes

- Beatriz Franco RM563686
- Maria Fernanda Santos Mendes RM565277
- Giovana Souza Vieira RM564430
- Luis Guilherme Borges Silva RM566548
- Leonardo Zerbinatti de Sales RM562992

## 11. Projeto acadêmico

Desenvolvido para a Global Solution 2026/2 — FIAP, na disciplina Disruptive Architectures: IoT, IoB & Generative IA.
