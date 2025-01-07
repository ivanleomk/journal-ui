import { formatDistanceToNow } from "date-fns";

export function ExpandedContent({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-medium mb-2">{title}</h1>
        <div className="text-sm text-gray-400">
          {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </div>
      </div>
      <div className="prose prose-lg">
        <p className="text-lg text-gray-500">{description}</p>
        <h2>Getting Started</h2>
        <p>
          Use this space to track your progress and reflect on your journey.
          Regular logging can help you:
        </p>
        <ul>
          <li>Build better habits through consistent tracking</li>
          <li>Identify patterns in your behavior and mood</li>
          <li>Celebrate small wins and progress</li>
          <li>Learn from challenges and setbacks</li>
        </ul>
      </div>
    </div>
  );
}
