# Sistema Tributário Online

## Descrição

O Sistema Tributário Online é uma aplicação web que permite aos usuários gerenciar tributos de maneira eficiente e realizar cálculos de retenção de impostos (IR e ISS) com base nas informações fornecidas. A aplicação é composta por um front-end desenvolvido em React e um back-end desenvolvido em Node.js com Express, além de utilizar MongoDB para armazenar os dados necessários para os cálculos.

## Estrutura do Projeto

```plaintext
sistema-tributario/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── controllers/
│       └── dataController.js
│   └── models/
│       └── Data.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── DataForm.js
│   │   │   └── DataTable.js
│   ├── package.json
│
├── data/
│   └── Retencao_IR_ISS.xlsx
```

## Funcionalidades

### Front-end

- **Interface de Usuário**: Desenvolvida em React.
- **Formulário de Entrada**: Permite ao usuário inserir CNPJ, CNAE e valor da nota fiscal.
- **Exibição de Resultados**: Mostra os resultados do cálculo de retenção de impostos (natureza do serviço, alíquota, valor a reter, item da LC 116).

### Back-end

- **API REST**: Desenvolvida em Node.js e Express.
- **Processamento de Dados**: Recebe dados do front-end, processa os cálculos e retorna os resultados.
- **Conexão com Banco de Dados**: Utiliza MongoDB para armazenar as informações necessárias.

### Base de Dados

- **Armazenamento de Dados**: Utiliza MongoDB para armazenar os dados do arquivo Excel (`Retencao_IR_ISS.xlsx`).
- **Script de Carregamento**: Script Node.js para carregar os dados da planilha para o MongoDB.

## Instalação

### Back-end

1. Navegue até o diretório backend:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor:
   ```sh
   node server.js
   ```

### Front-end

1. Navegue até o diretório frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie a aplicação:
   ```sh
   npm start
   ```

## Carregamento dos Dados

Para carregar os dados da planilha Excel para o MongoDB, siga os passos abaixo:

1. Navegue até o diretório backend:
   ```sh
   cd backend
   ```
2. Crie e execute o script `loadData.js`:

```javascript
const mongoose = require('mongoose');
const XLSX = require('xlsx');
const path = require('path');
const Data = require('./models/Data');

mongoose.connect('mongodb://127.0.0.1:27017/sistema-tributario', { useNewUrlParser: true, useUnifiedTopology: true });

const filePath = path.join(__dirname, '../data/Retencao_IR_ISS.xlsx');

const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

const loadData = async () => {
    await Data.deleteMany();

    for (const row of sheet) {
        const data = new Data({
            CNAE: row['A'],
            Serviço: row['B'],
            Alíquota: row['C'],
            Natureza: row['D'],
            'Item LC 116': row['E']
        });
        await data.save();
    }

    console.log('Dados carregados com sucesso!');
    mongoose.connection.close();
};

loadData();
```

3. Execute o script:
   ```sh
   node loadData.js
   ```

## Como Usar

1. Acesse `http://localhost:3000` no seu navegador.
2. Preencha o formulário com CNPJ, CNAE e valor da nota fiscal.
3. Envie o formulário e veja os resultados dos cálculos de retenção de impostos exibidos na página.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```sh
   git checkout -b feature/nova-feature
   ```
3. Commit suas mudanças:
   ```sh
   git commit -m 'Adicionei uma nova feature'
   ```
4. Faça um push para a branch:
   ```sh
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
```

Espero que isso ajude! Se precisar de mais alguma coisa, é só avisar. 🚀
