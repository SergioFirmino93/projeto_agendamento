import mysql.connector

def conectar():

    conn = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="389318Ser.",
        database="clinica"
    )

    return conn

from pacientes import abrir_tela_pacientes

from select import abrir_tela_select

from calendario import abrir_tela_calendario

# Executa a função principal
abrir_tela_pacientes



