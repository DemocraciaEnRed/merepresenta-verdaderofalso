import json
import pandas as pd

df = pd.read_csv("preguntas.csv")
df = df.fillna("")

df = df.rename(columns={
    "Pregunta": "text",
    "V/F": "answer",
    "Respuesta": "description",
})

df['answer'] = df['answer'].replace({'Verdadero': True, 'Falso': False})

data = []
for bloque in df['Bloque'].unique():
    df_bloque = df[df['Bloque']==bloque]
    df_bloque = df_bloque.drop(columns=["Bloque"])
    data.append(df_bloque.to_dict(orient="records"))

with open('questions.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)    