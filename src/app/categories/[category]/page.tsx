import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryRedirect({ params }: Props) {
  const { category } = await params;

  redirect(`/en/categories/${category}`);
}
