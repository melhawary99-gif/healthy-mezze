import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RecipeRedirect({ params }: Props) {
  const { slug } = await params;

  redirect(`/en/recipes/${slug}`);
}
