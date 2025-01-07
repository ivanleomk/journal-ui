// import { DailyLog } from "../components/DailyLog";

import { DailyLog } from "@/components/daily-log";

export default function Home() {
  return (
    <div className="text-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <DailyLog />
      </main>
    </div>
  );
}
