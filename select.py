import tkinter as tk
from tkinter import messagebox

# 1. Funções de Dados (Simuladas)
def obter_pacientes():
    return ["1 - João Silva", "2 - Maria Oliveira", "3 - Carlos Souza"]

def obter_profissionais():
    return ["101 - Estagiário Arnaldo", "102 - Estagiária Juliana"]

# 2. Função de Agendamento Atualizada
def realizar_agendamento():
    try:
        # Pega a seleção das listas
        idx_p = lista_p.curselection()
        idx_prof = lista_prof.curselection()
        
        # Pega o que foi digitado nos campos de texto
        data = entry_data.get().strip()
        hora = entry_hora.get().strip()
        
        # Validação simples
        if not idx_p or not idx_prof:
            messagebox.showwarning("Atenção", "Selecione o paciente e o profissional!")
            return
        
        if not data or not hora:
            messagebox.showwarning("Atenção", "Preencha a data e o horário!")
            return
            
        paciente = lista_p.get(idx_p)
        profissional = lista_prof.get(idx_prof)
        
        # Mensagem final de sucesso
        resumo = f"Agendamento Realizado!\n\n" \
                 f"Paciente: {paciente}\n" \
                 f"Profissional: {profissional}\n" \
                 f"Data: {data}\n" \
                 f"Horário: {hora}"
                 
        messagebox.showinfo("Confirmação", resumo)
        
    except Exception as e:
        messagebox.showerror("Erro", str(e))

# 3. Configuração da Janela
janela = tk.Tk()
janela.title("Sistema de Agendamento")
janela.geometry("400x600") # Aumentei um pouco a altura para caber tudo

# --- SEÇÃO DE PACIENTES ---
tk.Label(janela, text="Selecione o Paciente:", font=("Arial", 9, "bold")).pack(pady=(10,0))
lista_p = tk.Listbox(janela, height=4, exportselection=False)
lista_p.pack(fill="x", padx=20)
for p in obter_pacientes():
    lista_p.insert(tk.END, p)

# --- SEÇÃO DE PROFISSIONAIS ---
tk.Label(janela, text="Selecione o Profissional:", font=("Arial", 9, "bold")).pack(pady=(10,0))
lista_prof = tk.Listbox(janela, height=4, exportselection=False)
lista_prof.pack(fill="x", padx=20)
for prof in obter_profissionais():
    lista_prof.insert(tk.END, prof)

# --- SEÇÃO DE DATA E HORA ---
tk.Label(janela, text="Data (DD/MM/AAAA):", font=("Arial", 9, "bold")).pack(pady=(10,0))
entry_data = tk.Entry(janela)
entry_data.pack(fill="x", padx=20)
entry_data.insert(0, "04/05/2026") # Valor sugestão

tk.Label(janela, text="Horário (HH:MM):", font=("Arial", 9, "bold")).pack(pady=(10,0))
entry_hora = tk.Entry(janela)
entry_hora.pack(fill="x", padx=20)
entry_hora.insert(0, "14:30") # Valor sugestão

# --- BOTÃO DE AÇÃO ---
btn = tk.Button(janela, text="AGENDAR CONSULTA", bg="#1e88e5", fg="white", 
                font=("Arial", 10, "bold"), height=2, command=realizar_agendamento)
btn.pack(pady=30, padx=20, fill="x")

janela.mainloop()