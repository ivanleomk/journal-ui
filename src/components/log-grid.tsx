"use client";
import { useCallback, useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { logs } from "@/constants/logs";
import { ExpandedContent } from "./expanded-content";
import Link from "next/link";

interface CardProps {
  date: string;
  title: string;
  description: string;
  rotation: string;
  onClick: () => void;
  isExpanded?: boolean;
  handleBack: () => void;
}

export function ComponentGrid() {
  const [selectedLog, setSelectedLog] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransition] = useTransition();

  const handleLogClick = (id: string) => {
    startTransition(() => {
      setSelectedLog(selectedLog === id ? null : id);
      window.history.pushState(
        {},
        "",
        selectedLog === id ? "/log" : `/log/${id}`
      );
    });
  };

  const handleBack = useCallback(() => {
    startTransition(() => {
      setSelectedLog(null);
      window.history.pushState({}, "", "/log");
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedLog) {
        if (event.key === "Escape") {
          handleBack();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLog, handleBack]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow relative pt-12">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto gap-y-12 pb-8">
          {logs.map((log, index) => (
            <Card
              onClick={() => handleLogClick(log.id)}
              key={log.id}
              rotation={index % 2 === 0 ? "rotate-6" : "-rotate-6"}
              isExpanded={selectedLog === log.id}
              handleBack={handleBack}
              {...log}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export function Card({
  date,
  title,
  description,
  rotation,
  onClick,
  isExpanded = false,
  handleBack,
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      layout
      animate={{
        scale: isExpanded ? 1 : 1,
        zIndex: isExpanded ? 50 : 0,
      }}
      transition={{
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      }}
      style={{
        position: isExpanded ? "fixed" : "relative",
        top: isExpanded ? 0 : "auto",
        left: isExpanded ? 0 : "auto",
        right: isExpanded ? 0 : "auto",
        bottom: isExpanded ? 0 : "auto",
        width: isExpanded ? "100%" : 300,
        height: isExpanded ? "100vh" : 280,
      }}
    >
      {isExpanded ? (
        <div className="h-screen bg-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-semibold">
              KAIZEN
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline text-lg">
                New
              </Link>
              <Link href="/log" className="hover:underline text-lg">
                Log
              </Link>
            </div>
          </div>
          <div className="text-gray-900 ">
            <main className="container mx-auto px-4 py-12 max-w-5xl">
              <div className="mb-8">
                <div onClick={handleBack} className="hover:underline">
                  ← Back to Logs
                </div>
              </div>
              <ExpandedContent
                title={title}
                date={date}
                description={description}
              />
            </main>
          </div>
        </div>
      ) : (
        <div
          className={`w-full h-full bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl cursor-pointer hover:rotate-0 ${rotation} hover:-translate-y-2 hover:bg-gray-50`}
        >
          <div className="mt-4">
            <div className="text-sm font-medium">{title}</div>
            <div className="text-xs text-gray-400">
              {formatDistanceToNow(new Date(date), { addSuffix: true })}
            </div>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      )}
    </motion.div>
  );
}
