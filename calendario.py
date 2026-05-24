import tkinter as tk

# -------------------------
# DADOS DOS ESTAGIÁRIOS
# -------------------------

agenda = {
    1: {
        "estagiario": "Ana",
        "horario": "08h às 12h"
    },

    2: {
        "estagiario": "Carlos",
        "horario": "13h às 18h"
    },

    3: {
        "estagiario": "Julia",
        "horario": "09h às 15h"
    },

    4: {
        "estagiario": "Pedro",
        "horario": "10h às 16h"
    }
}

# -------------------------
# JANELA
# -------------------------

janela = tk.Tk()

janela.title("Agenda da Clínica")

janela.geometry("900x600")

janela.config(bg="white")

# -------------------------
# TÍTULO
# -------------------------

titulo = tk.Label(
    janela,
    text="Agenda - Maio 2026",
    font=("Arial", 20, "bold"),
    bg="white"
)

titulo.pack(pady=20)

# -------------------------
# FRAME CALENDÁRIO
# -------------------------

frame_calendario = tk.Frame(
    janela,
    bg="white"
)

frame_calendario.pack()

# -------------------------
# CABEÇALHO DOS DIAS
# -------------------------

dias_semana = [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab"
]

for coluna, dia in enumerate(dias_semana):

    label = tk.Label(
        frame_calendario,
        text=dia,
        font=("Arial", 12, "bold"),
        width=15,
        height=2,
        bg="#dddddd",
        relief="solid"
    )

    label.grid(
        row=0,
        column=coluna,
        padx=2,
        pady=2
    )

# -------------------------
# CRIAR DIAS DO CALENDÁRIO
# -------------------------

linha = 1
coluna = 0

for dia in range(1, 32):

    # informações do estagiário
    info = agenda.get(
        dia,
        {
            "estagiario": "Livre",
            "horario": "-"
        }
    )

    # frame do dia
    frame_dia = tk.Frame(
        frame_calendario,
        width=120,
        height=100,
        bg="white",
        relief="solid",
        bd=1
    )

    frame_dia.grid(
        row=linha,
        column=coluna,
        padx=2,
        pady=2
    )

    frame_dia.grid_propagate(False)

    # número do dia
    numero_dia = tk.Label(
        frame_dia,
        text=str(dia),
        font=("Arial", 12, "bold"),
        bg="white",
        anchor="ne"
    )

    numero_dia.pack(
        anchor="ne",
        padx=5,
        pady=2
    )

    # nome do estagiário
    estagiario = tk.Label(
        frame_dia,
        text=info["estagiario"],
        font=("Arial", 10, "bold"),
        bg="white",
        fg="blue"
    )

    estagiario.pack()

    # horário
    horario = tk.Label(
        frame_dia,
        text=info["horario"],
        font=("Arial", 9),
        bg="white"
    )

    horario.pack()

    # controla colunas
    coluna += 1

    if coluna > 6:
        coluna = 0
        linha += 1

# -------------------------
# EXECUTAR
# -------------------------

janela.mainloop()