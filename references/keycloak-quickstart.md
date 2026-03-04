# Keycloak Quickstart (Local Docker)

## 1. Start Keycloak

```bash
docker compose -f references/examples/keycloak-docker-compose.yml up -d
```

## 2. Open Admin Console

- URL: `http://localhost:8080`
- Admin user: `admin`
- Password: `admin`

## 3. Create Realm and Client

- Realm: `bootcamp`
- Client ID: `nextjs-app`
- Client type: confidential
- Valid redirect URI: `http://localhost:3000/api/auth/callback/keycloak`
- Web origin: `http://localhost:3000`

## 4. Create Roles and User

- Roles: `user`, `admin`
- Create test user and assign roles

## 5. Configure Next.js env

```env
AUTH_SECRET=replace-with-random-secret
AUTH_KEYCLOAK_ID=nextjs-app
AUTH_KEYCLOAK_SECRET=client-secret-from-keycloak
AUTH_KEYCLOAK_ISSUER=http://localhost:8080/realms/bootcamp
INTERNAL_API_BASE_URL=http://localhost:9000
```

## 6. Verify Login Flow

- Navigate to protected page
- Confirm redirect to Keycloak
- Login and verify callback success
- Call internal BFF endpoint and check 200 response
