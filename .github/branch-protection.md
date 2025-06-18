# Branch Protection Configuration

## 🔒 Configuração de Proteção de Branches

### Branches que devem ser protegidas:

#### 1. **main** (Produção)
- ✅ Require a pull request before merging
- ✅ Require approvals: **2**
- ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require status checks to pass before merging
  - `Enhanced CI/CD Pipeline`
  - `security-audit`
  - `lint-and-type-check`
  - `test`
  - `build`
- ✅ Require branches to be up to date before merging
- ✅ Include administrators
- ✅ Restrict pushes that create files that match the specified pattern
  - Pattern: `*.md`

#### 2. **develop** (Desenvolvimento)
- ✅ Require a pull request before merging
- ✅ Require approvals: **1**
- ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require status checks to pass before merging
  - `Enhanced CI/CD Pipeline`
  - `security-audit`
  - `lint-and-type-check`
  - `test`
- ✅ Require branches to be up to date before merging
- ✅ Include administrators

### Como configurar:

1. Vá para **Settings** → **Branches**
2. Clique em **Add rule**
3. Configure cada branch conforme especificado acima
4. Salve as configurações

### Benefícios:

- 🔒 **Segurança**: Previne pushes diretos para branches críticas
- ✅ **Qualidade**: Garante que apenas código validado seja mergeado
- 👥 **Colaboração**: Força revisão de código
- 🚀 **Confiança**: Garante que o código em produção é estável 