# Supabase setup

1. Create a Supabase project.
2. Open **SQL Editor**.
3. Run `supabase/schema.sql`.
4. Copy the project URL and the **service role key** into `.env.local`:

```env
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` as a `NEXT_PUBLIC_*` variable.

## What is stored

The `registrations` table is intentionally reusable for:

- Freedom Score assessments
- Free 1-to-1 sessions
- Paid 1-to-1 sessions
- Free webinars
- Paid webinars

Payment and Cal.com fields are nullable, so the current free 1-to-1 flow does not require either service.

## Freedom Score integration

The assessment registration step now creates the `assessment_id` in the server and saves the participant plus UTM attribution. When all 25 questions are completed, the answers and calculated Freedom Score are saved to the same registration row.
