# Documentação de Teste de Workflow

## Visão Geral
Este documento foi criado para testar o workflow de criação automática de PRs e deploy.

## Estrutura do Workflow

### 1. Feature Branch → Develop
- **Trigger**: Push para branch `feature/**`
- **Ação**: Cria PR automático para `develop`
- **Workflow**: `create-pr.yml`

### 2. Develop → Main
- **Trigger**: Merge de PR para `develop`
- **Ação**: Cria PR automático para `main`
- **Workflow**: `develop-to-main-auto.yml`

### 3. Main → Deploy
- **Trigger**: Push para `main`
- **Ação**: Deploy automático para GitHub Pages
- **Workflow**: `deploy-gh-pages.yml`

## Status do Teste
- ✅ Branch feature criada
- ✅ Commits realizados
- ✅ Push para GitHub
- 🔄 Aguardando execução do workflow
- ⏳ PR automático deve ser criado

## Próximos Passos
1. Verificar se o PR foi criado no GitHub
2. Fazer merge do PR para develop
3. Verificar PR automático develop → main
4. Fazer merge para main
5. Verificar deploy automático 