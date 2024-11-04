const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// JSON, EU TE AMO
function readJson(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}


app.get('/data', (req, res) => {
    const data = readJson(path.join(__dirname, 'files', 'dados.json'));
    res.json(data);
});


app.post('/process', (req, res) => {
    const { cnpj, cnae, valor_nota } = req.body;
    const data = readJson(path.join(__dirname, 'files', 'dados.json'));

    const row = data.find(row => row['CNAE'] == cnae);
    if (row) {
        const naturezaServico = row['Natureza'];
        const servico = row['Serviço'];
        const aliquota = parseFloat(row['Alíquota']);
        const itemLC116 = row['Item LC 116'];
        const valorRetencao = valor_nota * (aliquota / 100);

        res.json({
            natureza_servico: naturezaServico,
            servico: servico,
            aliquota: `${aliquota}%`,
            valor_a_reter: valorRetencao.toFixed(2),
            item_lc116: itemLC116
        });
    } else {
        res.status(404).json({ message: 'CNAE não encontrado na planilha.' });
    }
});

// NÃO ME PERGUNTE
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
