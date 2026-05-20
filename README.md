# Encomenda App

App mobile para agendamento de pedidos com pagamento antecipado, voltado para confeitarias e estabelecimentos que trabalham sob demanda.

---

## Equipe

| Nome                     | Função            |
| ------------------------ | ----------------- |
| Davi Nunes da Encarnação | Backend           |
| Erick Veras              | Backend           |
| Maiara Leda Oliveira     | Design / Frontend |
| Guilherme Mattos Macedo  | Frontend          |

---

## Tecnologias

- **Mobile:** React Native + Expo
- **Backend:** Node.js + Express
- **Banco de dados:** Firebase (Firestore)
- **Notificações:** WhatsApp (Evolution API)

---

## Como rodar

### Backend

```bash
cd backend
npm install
npm run dev
```

### App mobile

```bash
npm install
npx expo start
```

---

## Funcionalidades

- [ ] Cadastro de estabelecimentos e clientes
- [ ] Listagem de produtos com disponibilidade por data
- [ ] Pedidos agendados com pagamento antecipado
- [ ] Notificação automática ao estabelecimento via WhatsApp
- [ ] Painel de gerenciamento de agenda

---

## Variáveis de ambiente

Crie um `.env` dentro de `/backend` baseado no `.env.example`:

```env
PORT=3000
FIREBASE_API_KEY=
FIREBASE_PROJECT_ID=
WHATSAPP_API_URL=
WHATSAPP_API_KEY=
```

---

## Padrão de commits

```
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
```
