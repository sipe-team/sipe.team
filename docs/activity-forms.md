# Activity forms

Routes: `/forms` (admin dashboard), `/forms/new/review`, `/forms/new/teams`, `/forms/edit/:id`, `/forms/respond/:id`, `/forms/results/:id`, `/forms/shared/:shareId`.

## Development

Set `ACTIVITY_FORMS_DEMO=true` and run `yarn next dev -p 6200`.
Only `NODE_ENV=development` permits the demo. Demo records persist in the ignored `.activity-forms.local/data.json`, including responses. Demo administration does not require login: bind the development server to localhost and use fictional data only. Production never falls back to local storage.

## Supabase setup

1. Apply `supabase/migrations/202610130001_activity_forms.sql` to the intended project. It creates three dedicated tables with RLS, revokes direct anonymous/authenticated access and permits the server service role.
2. Configure server-only environment variables `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ACTIVITY_FORMS_ADMIN_EMAILS` (comma-separated confirmed admin emails). Never prefix the service key with NEXT_PUBLIC. Keys must be entered through the hosting secret UI, not committed.
3. Provision and confirm the allowed administrators in Supabase Auth. They sign in using email/password. No public sign-up is provided. Session cookies are HttpOnly, SameSite Strict, secure in production, and expire after at most one hour. Each management request validates the token with Supabase and checks the allowlist. The entire allowlist shares access to all activity forms; this is an internal SIPE organizer workspace, not a multi-tenant form service.
4. Deploy a preview, verify admin sign-in, create/publish a form, submit from another device, inspect responses, create a team plan, share and revoke it. Production release requires these checks and confirmation of the intended project/admin list.

## Behavior

- Question types: short text, paragraph, single choice, multiple choice, dropdown, 1–5 rating, date. Required fields are validated on both client and server.
- Drafts are private. Published links permit anonymous responses. Closed forms reject submissions. Questions cannot change after responses exist; duplicate the form instead.
- A response draft is explicitly saved on the respondent's own device. Responses are sent to the server only on submission. Submission IDs are idempotent per page session; this is not a one-response-per-person identity guarantee.
- CSV export escapes formulas. Results are admin-only. Data is fetched on demand, without realtime subscriptions or polling.
- Team assignment enforces maximum team size and together/apart constraints; selected single-choice/dropdown answers are balanced on a best-effort basis. Bounded randomized backtracking reports inability to find a solution rather than ignoring constraints.
- The initial seating model is one team per table on a rows × columns grid. Mobile views scroll horizontally. Changing settings applies on the next random assignment.
- Each new randomized result has its own ID. Saved assignments can be reloaded, published as a capability link, and unshared. Public links expose only participant display names and table placement. They never expose raw responses or balancing attributes.
- No attachments, quiz grading, conditional branching, response editing links or notification emails are included in this version. Anonymous forms currently have no CAPTCHA or per-person submission limit; configure host-level rate limiting before broad public distribution.

## Verification

Pure model/assignment checks: `node --test tests/activity-forms.test.cjs` (run via `yarn node` for PnP).
Local HTTP integration: `node tests/activity-forms.integration.mjs` against the demo server on port 6200. This creates fictional forms and responses and refuses to run unless the server reports demo mode.

Also run TypeScript, lint and a production build after generating the existing site's Google Sheets JSON through the normal configured build process. Do not commit fixture JSON used for local checks.
