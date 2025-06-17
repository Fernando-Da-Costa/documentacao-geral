
## Objetivo

Este projeto demonstra um sistema de **streaming de dados em tempo real** utilizando **Azure Event Hub**, containerizado via **Docker** e provisionado com **Terraform**. É uma base sólida para arquiteturas modernas orientadas a eventos, rodando em **Azure Kubernetes Service (AKS)**.

## 🧱 Arquitetura

- **Producer (Python)**: Simula eventos e os envia ao Event Hub.
- **Azure Event Hub**: Recebe os eventos do producer.
- **Azure Kubernetes Service (AKS)**: Orquestra o container do producer.
- **Azure Container Registry (ACR)**: Armazena a imagem Docker.
- **Terraform**: Provisiona os recursos da infraestrutura no Azure.

## 📦 Componentes

### a) Producer (`producer/main.py`)
- Gera eventos simulados a cada ~3 segundos.
- Cada evento contém:
  - `timestamp`
  - `mensagem`: `"evento simulado"`
- Utiliza `azure-eventhub` para envio.
- Logs detalhados para depuração.

### b) Docker (`producer/Dockerfile`)
- Imagem baseada em `python:3.10-slim`.
- `PYTHONUNBUFFERED=1` para logs em tempo real.
- Instala as dependências com `requirements.txt`.
- Entrypoint: `main.py`.

### c) Kubernetes (`producer/deployment.yaml`)
- **Secrets**: `eventhub-connection` para proteger a connection string.
- **Deployment**: Gerencia o ciclo de vida do pod.
- **Pods**: Executam o container do producer.

### d) Terraform (`infra/`)
- Automatiza a criação de:
  - Azure Event Hub + Namespace
  - Azure Container Registry
  - Azure Kubernetes Service (AKS)
  - Resource Group e Networking
- Permite reprodutibilidade e versionamento da infra.

## ⚙️ Variáveis de Ambiente

| Variável             | Descrição                                |
|----------------------|--------------------------------------------|
| `EVENT_HUB_CONN_STR` | Connection string (armazenada como Secret) |
| `EVENT_HUB_NAME`     | Nome do Event Hub (ex: `eh-streaming-data-dev`) |



## 🧪 Comandos Principais

```bash
# Terraform (dentro da pasta infra/)
terraform init
terraform plan
terraform apply

# Docker
docker build -t acrbatchstreamingdev.azurecr.io/eventhub-producer:latest ./producer
docker push acrbatchstreamingdev.azurecr.io/eventhub-producer:latest

# Kubernetes
kubectl apply -f producer/deployment.yaml
kubectl logs <pod-name>
kubectl delete deployment eventhub-producer
