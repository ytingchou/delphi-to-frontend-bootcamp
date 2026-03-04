# Delivery Readiness Checklist

## Functional

- [ ] All acceptance criteria are met.
- [ ] Manual smoke test completed.
- [ ] No obvious UX blocking issues.

## Code Quality

- [ ] `eslint` passes with no errors.
- [ ] No dead code or debug leftovers.
- [ ] Naming and folder structure are consistent.

## Testing

- [ ] Unit tests added/updated.
- [ ] Important integration paths are tested.
- [ ] Failing-path tests exist (error handling).

## Security

- [ ] Secrets only in environment variables.
- [ ] No token leak to browser unless intentionally public.
- [ ] Auth checks exist on protected routes/actions.

## Observability

- [ ] Logs are actionable and non-sensitive.
- [ ] Error messages support troubleshooting.
- [ ] Monitoring hooks/todo notes are documented.

## Release

- [ ] Risk assessment documented.
- [ ] Rollback plan documented.
- [ ] Reviewer checklist completed.
