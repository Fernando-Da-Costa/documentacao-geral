# Configuração do CI/CD

## Workflows Disponíveis

### 1. Notify PR Creation (Recomendado)
- **Arquivo:** `.github/workflows/create-pr.yml`
- **Funcionalidade:** Cria uma issue notificando sobre a necessidade de criar um PR
- **Vantagens:** Não requer configuração adicional, funciona com as permissões padrão
- **Como usar:** Push para branch `feature/**` automaticamente cria uma issue

### 2. Create Pull Request (with PAT)
- **Arquivo:** `.github/workflows/create-pr-with-pat.yml`
- **Funcionalidade:** Cria PR automaticamente usando Personal Access Token
- **Requisitos:** Configurar secret `PAT_TOKEN` no repositório
- **Como configurar:**
  1. Criar Personal Access Token no GitHub (Settings > Developer settings > Personal access tokens)
  2. Adicionar token como secret `PAT_TOKEN` no repositório (Settings > Secrets and variables > Actions)
  3. Renomear arquivo para `create-pr.yml` se desejar usar esta opção

### 3. PR Validation
- **Arquivo:** `.github/workflows/pr-validation.yml`
- **Funcionalidade:** Valida PRs com lint e build
- **Trigger:** Qualquer PR para `main` ou `develop`

### 4. Build and Deploy
- **Arquivo:** `.github/workflows/build-deploy.yml`
- **Funcionalidade:** Deploy automático após merge de PR
- **Trigger:** PR mergeado na `main`

## Fluxo Recomendado

### Opção 1: Notificação Manual (Atual)
```
1. Push para feature branch
2. Workflow cria issue notificando sobre PR
3. Criar PR manualmente
4. Workflow valida PR
5. Merge do PR
6. Deploy automático
```

### Opção 2: PR Automático (Com PAT)
```
1. Push para feature branch
2. Workflow cria PR automaticamente
3. Workflow valida PR
4. Merge do PR
5. Deploy automático
```

## Configuração de Permissões

### Para PRs Automáticos:
1. **Personal Access Token:**
   - Scope: `repo` (acesso completo ao repositório)
   - Adicionar como secret: `PAT_TOKEN`

2. **Repository Settings:**
   - Settings > Actions > General
   - Workflow permissions: "Read and write permissions"
   - Allow GitHub Actions to create and approve pull requests: ✅

## Troubleshooting

### Erro: "GitHub Actions is not permitted to create or approve pull requests"
**Solução:** Use o workflow de notificação ou configure PAT

### Erro: "Protected branch update failed"
**Solução:** Configure branch protection para permitir PRs

### Workflow não executa
**Verificar:**
- Branch name segue padrão `feature/**`
- Workflow file está em `.github/workflows/`
- YAML syntax está correto

## Próximos Passos

1. **Testar workflow atual:** Push para branch feature
2. **Verificar issue criada:** GitHub > Issues
3. **Criar PR manualmente:** Usar link fornecido na issue
4. **Monitorar validação:** GitHub Actions
5. **Fazer merge:** Deploy automático

---
*Documentação do CI/CD - Última atualização: $(date)* 