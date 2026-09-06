import { redirect } from "next/navigation";
import { auth } from "@/auth";
import AdminReviews from "./AdminReviews";

interface AdminReviewsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AdminReviewsPage({
  params,
}: AdminReviewsPageProps) {
  const { locale } = await params;
  const session = await auth();

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const userEmail = session?.user?.email?.trim().toLowerCase();

  if (
    !session?.user ||
    !adminEmail ||
    !userEmail ||
    userEmail !== adminEmail
  ) {
    redirect(`/${locale}`);
  }

  return <AdminReviews locale={locale} />;
}
