// No "use client" at the top for a server page

type PageProps = { params: { slug: string } };

export default async function Page({ params }: PageProps) {
  // Replace this with your real data loader:
  const post = await getPost(params.slug); // getPost should return a Promise

  // If your data is local (e.g. an in-file array), just synchronously find it:
  // const post = posts.find(p => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      {/* render content */}
    </article>
  );
}
