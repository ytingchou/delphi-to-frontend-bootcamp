# Next.js + Auth.js + Keycloak (Server-Side OIDC) Reference

This reference demonstrates:

- OIDC Authorization Code Flow with Keycloak provider
- Session access on server side
- Calling downstream API through Next.js Route Handlers (BFF)
- Avoiding browser-side token handling to reduce CORS and token leakage risk

## Expected Environment Variables

- `AUTH_SECRET`
- `AUTH_KEYCLOAK_ID`
- `AUTH_KEYCLOAK_SECRET`
- `AUTH_KEYCLOAK_ISSUER` (e.g. `http://localhost:8080/realms/bootcamp`)
- `INTERNAL_API_BASE_URL` (e.g. `http://backend:9000`)

## File Map

- `auth.ts`: Auth.js provider/session callbacks
- `app/api/auth/[...nextauth]/route.ts`: Auth.js route handlers export
- `middleware.ts`: optional route protection
- `app/api/bff/profile/route.ts`: internal BFF endpoint example
- `app/api/bff/admin-report/route.ts`: role-gated BFF endpoint example

## Notes

- Keep provider secrets and access tokens server-side.
- Do not expose raw access tokens to browser JavaScript.
- Route Handlers can map backend errors to stable frontend contracts.
