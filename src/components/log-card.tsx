import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import React from "react";

interface CardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  rotation: string;
}

export function Card({ id, date, title, description, rotation }: CardProps) {
  return (
    <Link
      href={`/log/${id}`}
      className="block transition-transform duration-300 hover:scale-[1.02]"
    >
      <div
        className={`group w-[300px] h-[280px] ${rotation} transition-all duration-300 hover:rotate-0 hover:-translate-y-4`}
      >
        <div className="w-full h-full bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between transition-all duration-300 group-hover:shadow-xl">
          <div className="mt-4">
            <div className="text-sm font-medium">{title}</div>
            <div className="text-xs text-gray-400">
              {formatDistanceToNow(new Date(date), { addSuffix: true })}
            </div>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
}
