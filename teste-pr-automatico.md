# Teste de PR Automático

Este arquivo foi criado para testar o fluxo de Pull Request automático.

## Como funciona:

1. **Criação de branch feature:**
   ```bash
   git checkout -b feature/teste-pr-automatico
   ```

2. **Fazer alterações e commit:**
   ```bash
   git add .
   git commit -m "feat: teste PR automático"
   ```

3. **Push para triggerar o workflow:**
   ```bash
   git push origin feature/teste-pr-automatico
   ```

4. **Resultado esperado:**
   - ✅ Workflow "Create Pull Request" executa
   - ✅ PR é criado automaticamente
   - ✅ Workflow "PR Validation" executa
   - ✅ Após merge, "Build and Deploy" executa

## Fluxo completo:

```
feature branch → Push → PR Automático → Validação → Merge → Deploy
```

---
*Arquivo criado para teste do CI/CD com PR automático* 