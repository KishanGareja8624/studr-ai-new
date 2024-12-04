import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { createServerClient } from "@supabase/auth-helpers-remix";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const response = new Response();
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  console.log("Request URL:", request.url);

  if (code) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { request, response }
    );

    await supabase.auth.exchangeCodeForSession(code);
  }

  // Dynamically set base URL
  const baseUrl = process.env.DOMAIN_URL!;
  console.log("Base URL:", baseUrl);

  return redirect(baseUrl, {
    headers: response.headers,
  });
};
