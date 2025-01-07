import { ExpandedContent } from "@/components/expanded-content";
import { logs } from "@/constants/logs";

import Link from "next/link";

export default function Page({ params }: { params: { slug: string[] } }) {
  const log = logs.find((log) => log.id === params.slug[0]);
  if (!log) {
    return <div>Log not found</div>;
  }
  return (
    <div className="text-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <Link href="/log" className="hover:underline">
            ← Back to Logs
          </Link>
        </div>
        <ExpandedContent
          title={log.title}
          date={log.date}
          description={log.description}
        />
      </main>
    </div>
  );
}
