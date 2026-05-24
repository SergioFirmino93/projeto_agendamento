
import tkinter as tk
from banco_fake import inserir_paciente, listar_pacientes

# Função principal para abrir a tela

def abrir_tela_pacientes():
    # Criar janela principal
    janela = tk.Tk()
    janela.title("Paciente")
    janela.geometry("400x350")

    # -------------------------
    # CAMPO NOME
    # -------------------------
    tk.Label(janela, text="Nome").pack()
    nome_entry = tk.Entry(janela)
    nome_entry.pack()

    # -------------------------
    # CAMPO NASCIMENTO
    # -------------------------
    tk.Label(janela, text="Nascimento").pack()
    nascimento_entry = tk.Entry(janela)
    nascimento_entry.pack()

    # -------------------------
    # CAMPO CONTATO
    # -------------------------
    tk.Label(janela, text="Contato").pack()
    contato_entry = tk.Entry(janela)
    contato_entry.pack()

    # -------------------------
    # CAMPO HISTÓRICO
    # -------------------------
    tk.Label(janela, text="Histórico").pack()
    historico_entry = tk.Entry(janela)
    historico_entry.pack()

    # -------------------------
    # FUNÇÃO SALVAR
    # -------------------------
    # Essa função pega os dados digitados
    # e envia para o banco_fake.py
    
    def salvar():
        inserir_paciente(
            nome_entry.get(),
            nascimento_entry.get(),
            contato_entry.get(),
            historico_entry.get()
        )

        print("Paciente salvo com sucesso!")

    # Botão para salvar
    tk.Button(janela, text="Salvar", command=salvar).pack(pady=10)


    # -------------------------
    # FUNÇÃO LISTAR
    # -------------------------
    # Mostra todos os pacientes cadastrados
    
    def mostrar():
        dados = listar_pacientes()
        print("\nLISTA DE PACIENTES:")
        for paciente in dados:
            print(paciente)

    # Botão para listar
    tk.Button(janela, text="Listar Pacientes", command=mostrar).pack(pady=10)

    
    def excluir():
        id_paciente = int(id_entry.get())
        delete(id_paciente)

    btn_delete = tk.Button(janela, text="Excluir", command=excluir)
    btn_delete.pack(pady=10)
    
    
    # Inicia a janela
    janela.mainloop()
