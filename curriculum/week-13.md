# Week 13 - OIDC/OAuth2 與 Authorization Code Flow（Chapter 13）

## 章節導讀

這一章是認證授權基礎課。先理解協定，Week 14 才能穩定落地 Auth.js + Keycloak。

你會學到：
1. OAuth2 與 OIDC 差異。
2. Authorization Code Flow 每一步在做什麼。
3. Keycloak 本機最小可用設定。

## 0 基礎詞彙

- `OAuth2`: 授權框架。
- `OIDC`: 在 OAuth2 上增加身份層（ID Token）。
- `Authorization Code Flow`: 前端跳轉登入，server 交換 token 的流程。
- `Issuer`: 身份提供者識別 URL。

## 協定流程圖（ASCII）

```text
1) Browser -> Keycloak /authorize
2) User login
3) Keycloak -> redirect_uri?code=...
4) App server -> Keycloak /token (code exchange)
5) App server gets tokens and creates session
6) Browser uses session cookie to access app
```

Mermaid source: [week-13-oidc-auth-code.mmd](../assets/diagrams/week-13-oidc-auth-code.mmd)

## 核心知識（像書一樣讀）

### 1. OAuth2 與 OIDC 的關係

- OAuth2 解決「你可不可以存取資源」。
- OIDC 解決「你是誰」。

### 2. 為什麼要 Authorization Code + Server Exchange

把 token 交換留在 server，可降低 token 暴露風險。

### 3. 常見故障點

1. `redirect_uri_mismatch`
2. `invalid_client`
3. 時鐘偏差導致 token 驗證失敗

## Code-Along（逐步照做）

### Step 0 - 啟動 Keycloak

```bash
docker compose -f references/examples/keycloak-docker-compose.yml up -d
```

等待啟動後，開 `http://localhost:8080`。

### Step 1 - 建立最小 realm/client

在 Keycloak 管理後台建立：
1. Realm: `bootcamp`
2. Client: `nextjs-app`
3. Client type: `confidential`
4. Valid redirect URIs: `http://localhost:3000/api/auth/callback/keycloak`

### Step 2 - 驗證 discovery endpoint

```bash
curl http://localhost:8080/realms/bootcamp/.well-known/openid-configuration
```

驗收：
1. 回傳 JSON。
2. 包含 `authorization_endpoint`、`token_endpoint`、`issuer`。

### Step 3 - 手動畫出你的 flow

建立 `notes/week-13-oidc-flow.md`，至少包含：
1. Browser 何時跳轉。
2. Server 何時交換 code。
3. Session 何時建立。

### Step 4 - 故障演練

故意把 redirect URI 改錯，觀察錯誤訊息並記錄排查順序。

## Token 圖（ASCII）

```text
ID Token     -> 說明使用者身份（給 Client）
Access Token -> 存取 API（給 Resource Server）
Refresh Token-> 換新 Access Token
```

## 常見錯誤與排查

1. issuer 設錯：
- 現象：驗證失敗。
- 修正：用 discovery endpoint 核對。

2. redirect URI 未白名單：
- 現象：登入後被拒。
- 修正：Keycloak client 設定補齊。

3. client secret 錯：
- 現象：token exchange 失敗。
- 修正：重新核對 confidential client secret。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（realm/client）。
- Day 3: 完成 Step 2~4（discovery + 故障演練）。
- Day 4: 完成 [Workshop week-13](../workshops/week-13/README.md)。
- Day 5: 完成 [Assignment week-13](../assignments/week-13/README.md)。

## Cline 協作模板

```text
請你把 OIDC Authorization Code Flow 用 8 步驟解釋給我，
每一步都要包含：
- 誰發請求
- 請求到哪裡
- 回應帶什麼
```

## 本週實作

- Workshop: [week-13](../workshops/week-13/README.md)
- Assignment: [week-13](../assignments/week-13/README.md)
- Rubric: [week-13](../rubrics/week-13.md)

## 完成定義

- 能獨立啟動 Keycloak 並完成 realm/client 基礎設定。
- 能正確解釋 Authorization Code Flow 每一步。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 只憑印象填 issuer/endpoint。
- Right: 先查 discovery endpoint 再設定。

```bash
# Right
curl http://localhost:8080/realms/bootcamp/.well-known/openid-configuration
```

```text
Use returned issuer/authorization_endpoint/token_endpoint as source of truth.
```

## 章節練習（不看答案先做）

1. 請畫出 Authorization Code Flow 6 步驟，並標註 request/response。
2. 請完成 Keycloak realm/client 最小設定並驗證 discovery endpoint。
3. 請故意製造 `redirect_uri_mismatch` 並寫排查順序。

## 提示（卡住再看）

1. 先核對 issuer 與 discovery endpoint。
2. callback URL 需完全匹配白名單。
3. 設定先檢查，再查程式與 token claim。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- discovery endpoint 回應證據。
- `notes/week-13-oidc-flow.md`。
- 至少一個故障演練記錄。

## 延伸閱讀（遇到進階需求再看）

- OAuth2 RFC 6749: <https://www.rfc-editor.org/rfc/rfc6749>
- OIDC Core: <https://openid.net/specs/openid-connect-core-1_0-18.html>
- Keycloak OIDC docs: <https://www.keycloak.org/securing-apps/oidc-layers>
