import pandas as pd

# GAMBIARRA 1
df = pd.read_excel('../files/Retencao_IR_ISS.xlsx', engine='openpyxl', skiprows=1)

# GAMBIARRA 2
colunas = df[['A', 'B', 'C', 'D', 'E']]

# GAMBIARRA 3
colunas.columns = ['CNAE', 'Serviço', 'Alíquota', 'Natureza', 'Item LC 116']

# SALVANDO UMA DISGRAÇA
colunas.to_json('../files/dados.json', orient='records')

#NÃO SEI COMO, MAS DEU CERTO