from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

def conectar():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="389318Ser.",
        database="clinica_agendamento"
    )

@app.route("/horarios")
def horarios():
    especialidade = request.args.get("especialidade")
    data = request.args.get("data")

    conexao = conectar()
    cursor = conexao.cursor(dictionary=True)

    sql = """
        SELECT 
            h.id_horario,
            h.data_consulta,
            h.horario,
            s.nome AS sala,
            e.nome AS estagiario,
            esp.nome AS especialidade
        FROM horarios_disponiveis h
        JOIN salas s ON h.id_sala = s.id_sala
        JOIN estagiarios e ON h.id_estagiario = e.id_estagiario
        JOIN especialidades esp ON e.id_especialidade = esp.id_especialidade
        WHERE esp.nome = %s
        AND h.data_consulta = %s
        AND h.disponivel = TRUE
        ORDER BY h.data_consulta, h.horario
    """

    cursor.execute(sql, (especialidade, data))
    dados = cursor.fetchall()

    for item in dados:
        item["data_consulta"] = item["data_consulta"].strftime("%Y-%m-%d")
        item["horario"] = str(item["horario"])

    cursor.close()
    conexao.close()

    return jsonify(dados)

    




@app.route("/agendar", methods=["POST", "OPTIONS"])
def agendar():
    if request.method == "OPTIONS":
        return jsonify({"ok": True})

    dados = request.get_json()

    id_paciente = dados.get("id_paciente", 1)
    id_horario = dados.get("id_horario")

    conexao = conectar()
    cursor = conexao.cursor(dictionary=True)

    cursor.execute("""
        SELECT disponivel
        FROM horarios_disponiveis
        WHERE id_horario = %s
    """, (id_horario,))

    horario = cursor.fetchone()

    if not horario:
        cursor.close()
        conexao.close()
        return jsonify({"erro": "Horário não encontrado"}), 404

    if not horario["disponivel"]:
        cursor.close()
        conexao.close()
        return jsonify({"erro": "Horário já agendado"}), 400

    cursor.execute("""
        INSERT INTO agendamentos
        (id_paciente, id_horario, status)
        VALUES (%s, %s, 'Agendado')
    """, (id_paciente, id_horario))

    cursor.execute("""
        UPDATE horarios_disponiveis
        SET disponivel = FALSE
        WHERE id_horario = %s
    """, (id_horario,))

    conexao.commit()

    cursor.close()
    conexao.close()

    return jsonify({"mensagem": "Agendamento realizado com sucesso"})

print(app.url_map)

if __name__ == "__main__":
    app.run(debug=True)