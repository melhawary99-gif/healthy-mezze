import { auth } from "@/auth";

export async function requireAdmin() {
  const session = await auth();

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const userEmail = session?.user?.email?.trim().toLowerCase();

  if (
    !session?.user ||
    !adminEmail ||
    !userEmail ||
    userEmail !== adminEmail
  ) {
    return null;
  }

  return session;
}
