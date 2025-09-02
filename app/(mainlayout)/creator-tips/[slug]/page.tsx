// app/(mainlayout)/creator-tips/[slug]/page.tsx

export const dynamic = 'force-dynamic'; // render at request time
export const revalidate = 0;

// If you have a data source, replace this with a real fetch.
// For now we just echo the slug so the page builds.
export default async function CreatorTipPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Example placeholder content:
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-bold">Creator Tip</h1>
      <p className="mt-4">Slug: <strong>{slug}</strong></p>
      <p className="mt-2 text-sm opacity-70">
        Placeholder while we wire real data fetching.
      </p>
    </div>
  );
}

// Ensure Next.js doesn't try to prebuild unknown slugs at build time.
export async function generateStaticParams() {
  return []; // no pre-rendered slugs for now
}
