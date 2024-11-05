# Sistema Tributário Online

## Descrição

O Sistema Tributário Online é uma aplicação web que permite aos usuários gerenciar tributos de maneira eficiente e realizar cálculos de retenção de impostos (IR e ISS) com base nas informações fornecidas. A aplicação é composta por um front-end desenvolvido em HTML, CSS e JavaScript, e um back-end desenvolvido em Node.js com Express.

## Estrutura do Projeto

```plaintext
sistema-tributario/
│
├── files/
│   └── Retencao_IR_ISS.xlsx
│   └── dados.json
│
├── public/
│   └── index.html
│
├── scripts/
│   └── processar_dados.py
│
├── node_modules/
│
├── server.js
└── package.json
```
Funcionalidades
Front-end
Interface de Usuário: Desenvolvida em HTML, CSS e JavaScript.

Formulário de Entrada: Permite ao usuário inserir CNPJ, CNAE e valor da nota fiscal.

Exibição de Resultados: Mostra os resultados do cálculo de retenção de impostos (natureza do serviço, alíquota, valor a reter, item da LC 116).

Back-end
API REST: Desenvolvida em Node.js e Express.

Processamento de Dados: Recebe dados do front-end, processa os cálculos e retorna os resultados.

Conexão com o JSON: Utiliza um arquivo JSON para armazenar as informações necessárias.

Base de Dados
Armazenamento de Dados: Utiliza um arquivo JSON (dados.json) para armazenar os dados da planilha Excel (Retencao_IR_ISS.xlsx).

Script de Processamento: Script Python (processar_dados.py) para processar os dados da planilha Excel e gerar o arquivo JSON.

Instalação
Back-end
Navegue até o diretório do projeto:
```sh
sh
cd sistema-tributario
```

Instale as dependências:

```sh
sh
npm install
```

Inicie o servidor:

```sh
sh
node server.js
```

Front-end
Abra o arquivo index.html no seu navegador.

Carregamento dos Dados
Para carregar os dados da planilha Excel para o arquivo JSON, siga os passos abaixo:

Navegue até o diretório scripts:

```sh
sh
cd scripts
```

Crie e execute o script processar_dados.py:
```py
python
import pandas as pd
```

## Lendo o arquivo Excel e pulando a primeira linha
```python
df = pd.read_excel('../files/Retencao_IR_ISS.xlsx', engine='openpyxl', skiprows=1)
```
## Selecionando as colunas pelo número - mudamos para letras
```python
colunas = df[['A', 'B', 'C', 'D', 'E']]
```
## Renomeando as colunas para nomes mais significativos
```python
colunas.columns = ['CNAE', 'Serviço', 'Alíquota', 'Natureza', 'Item LC 116']
```
## Salvando os dados em um arquivo JSON
```python
colunas.to_json('../files/dados.json', orient='records')
```
Execute o script:

```sh
sh
python processar_dados.py
```

## Como Usar

Abra o arquivo index.html no seu navegador.

Preencha o formulário com CNPJ, CNAE e valor da nota fiscal.

Envie o formulário e veja os resultados dos cálculos de retenção de impostos exibidos na página.

## Contribuição

Faça um fork do repositório.

Crie uma branch para sua feature:
```git
(git checkout -b feature/nova-feature).
```

Commit suas mudanças 
```git
(git commit -m 'Adicionei uma nova feature').
```

Faça um push para a branch:
```git
(git push origin feature/nova-feature).
```

Abra um Pull Request.

## Licença:

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
