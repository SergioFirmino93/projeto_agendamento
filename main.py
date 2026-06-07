import mysql.connector
from datetime import date, timedelta

conexao = mysql.connector.connect(
    host="localhost",
    user="root",
    password="389318Ser.",
    database="clinica_agendamento"
)

cursor = conexao.cursor()

horarios_padrao = [
    "08:00:00",
    "09:00:00",
    "10:00:00",
    "13:00:00",
    "14:00:00",
    "15:00:00",
    "16:00:00",
]

salas = [1, 2, 3, 4, 5]

escala = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 1],
    [2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
]

data_inicial = date.today()
quantidade_dias = 30

for i in range(quantidade_dias):
    data_atual = data_inicial + timedelta(days=i)

    # pula domingo
    if data_atual.weekday() == 6:
        continue

    estagiarios_do_dia = escala[i % len(escala)]

    for indice_sala, id_sala in enumerate(salas):
        id_estagiario = estagiarios_do_dia[indice_sala]

        for horario in horarios_padrao:
            sql = """
                INSERT INTO horarios_disponiveis
                (data_consulta, horario, id_sala, id_estagiario, disponivel)
                VALUES (%s, %s, %s, %s, TRUE)
            """

            valores = (
                data_atual,
                horario,
                id_sala,
                id_estagiario
            )

            cursor.execute(sql, valores)

conexao.commit()

cursor.close()
conexao.close()

print("Horários gerados com sucesso!")