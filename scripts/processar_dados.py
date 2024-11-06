import pandas as pd

df = pd.read_excel('../files/Retencao_IR_ISS.xlsx', engine='openpyxl', skiprows=1)

print(df.head())
print(df.columns)

df.columns = ['CNAE', 'Serviço', 'Alíquota', 'Natureza', 'Item LC 116']

colunas = df[['CNAE', 'Serviço', 'Alíquota', 'Natureza', 'Item LC 116']]

colunas.to_json('../files/dados.json', orient='records')

print("Dados mapeados salvos em dados.json")
