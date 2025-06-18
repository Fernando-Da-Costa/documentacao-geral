# Teste do Workflow Separado

Este arquivo foi criado para testar o fluxo completo com workflows separados para PR automático e deploy.

## Fluxo sendo testado:

1. ✅ **Feature Branch**: `feature/teste-workflow-separado`
2. 🔄 **PR para Develop**: Será criado manualmente
3. 🔄 **PR Automático**: Develop → Main (criado automaticamente pelo workflow)
4. 🔄 **Deploy Automático**: GitHub Pages (executado pelo workflow separado)
dsdad
## Detalhes do teste:
- **Branch**: feature/teste-workflow-separado
- **Data**: $(Get-Date)
- **Objetivo**: Verificar se os workflows separados funcionam corretamente

## Workflows envolvidos:
- `.github/workflows/develop-to-main-auto.yml` (PR automático)
- `.github/workflows/deploy-gh-pages.yml` (deploy)

## Resultado esperado:
- Site atualizado em: https://fernando-da-costa.github.io/documentacao-geral/
- PR automático criado e mergeado
- Deploy executado após merge na main 