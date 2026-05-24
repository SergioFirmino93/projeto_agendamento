# Lista onde os pacientes serão armazenados
pacientes = []

# Função para inserir um novo paciente
# Recebe os dados digitados na tela
# e adiciona na lista automaticamente

def inserir_paciente(nome, nascimento, contato, historico):
    # Gera um ID automático baseado no tamanho da lista
    novo_id = len(pacientes) + 1

    # Cria um dicionário com os dados do paciente
    paciente = {
        "id": novo_id,
        "nome": nome,
        "nascimento": nascimento,
        "contato": contato,
        "historico": historico
    }

    # Adiciona o paciente na lista
    pacientes.append(paciente)

# Função para listar todos os pacientes cadastrados
# Retorna a lista inteira

def listar_pacientes():
    return pacientes


def delete(id_paciente):
    # percorre a lista
    for paciente in pacientes:
        # compara IDs
        if paciente["id"] == id_paciente:
            pacientes.remove(paciente)
            return True

    return False

