# Week 13 - OIDC/OAuth2 與 Authorization Code Flow

## 本週目標

- 理解 OAuth2 與 OIDC 的角色與差異。
- 完整掌握 Authorization Code Flow（含 token exchange）。
- 在本機 Docker 啟動 Keycloak 並建立 realm/client/user/role。

## 對 Delphi 工程師的重要性

認證授權是企業專案核心。只會套件設定不夠，必須理解 protocol 才能在故障時快速排查。

## 知識模組

1. OAuth2 roles（Resource Owner/Client/Auth Server/Resource Server）
2. OIDC tokens（ID token vs Access token）
3. Authorization Code Flow steps
4. 常見錯誤（redirect URI mismatch、invalid_client、clock skew）

## 圖表（ASCII）

```text
Browser -> Auth server(login) -> callback(code)
-> App server exchanges code -> tokens -> session
```

## 建議節奏（20+ 小時）

- Day 1: protocol theory (4h)
- Day 2: Keycloak setup (4h)
- Day 3: flow tracing with logs/network (4h)
- Day 4: Workshop (5h)
- Day 5: Assignment + threat notes (4h)

## 本週實作

- Workshop: [week-13](../workshops/week-13/README.md)
- Assignment: [week-13](../assignments/week-13/README.md)
- Rubric: [week-13](../rubrics/week-13.md)

## Cline 必做

- 讓 Cline 畫出 flow step-by-step（文字或 mermaid）。
- 要求 Cline 列舉 5 個 OIDC 故障場景與排查順序。
- 人工比對 Cline 與 RFC/官方文件是否一致。

## 完成定義

- 能獨立啟動 Keycloak 並建立可用 client。
- 能解釋每一個 token 的用途與風險。

## 參考資料

- OAuth2 RFC 6749: <https://www.rfc-editor.org/rfc/rfc6749>
- OIDC Core: <https://openid.net/specs/openid-connect-core-1_0-18.html>
- Keycloak OIDC docs: <https://www.keycloak.org/securing-apps/oidc-layers>
