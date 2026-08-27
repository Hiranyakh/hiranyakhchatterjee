const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getConfig() {
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured."
    );
  }

  return { supabaseUrl, serviceRoleKey };
}

export async function supabaseInsert<T = unknown>(
  table: string,
  row: Record<string, unknown>
): Promise<T> {
  const { supabaseUrl, serviceRoleKey } = getConfig();

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.message || data?.hint || "Supabase insert failed."
    );
  }

  return data as T;
}

export async function supabaseUpdate<T = unknown>(
  table: string,
  filters: Record<string, string>,
  patch: Record<string, unknown>
): Promise<T> {
  const { supabaseUrl, serviceRoleKey } = getConfig();

  const query = new URLSearchParams(
    Object.entries(filters).map(([key, value]) => [key, `eq.${value}`])
  );

  const response = await fetch(
    `${supabaseUrl}/rest/v1/${table}?${query.toString()}`,
    {
      method: "PATCH",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(patch),
      cache: "no-store",
    }
  );

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.message || data?.hint || "Supabase update failed."
    );
  }

  return data as T;
}
