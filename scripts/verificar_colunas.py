import pandas as pd

df = pd.read_excel('../files/Retencao_IR_ISS.xlsx', engine='openpyxl', skiprows=1)

print(df.head())
print(df.columns)
