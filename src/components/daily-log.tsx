"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function DailyLog() {
  const [entry, setEntry] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (!textAreaRef.current) {
      return;
    }

    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
    return () => window.removeEventListener("resize", resizeTextArea);
  }, []);

  return (
    <div className="space-y-8">
      <div className="space">
        <Textarea
          ref={textAreaRef}
          value={entry}
          onChange={(e) => {
            setEntry(e.target.value);
            resizeTextArea();
          }}
          placeholder="What were you most proud of today?"
          className="w-full resize-none min-h-[60px] border-0 focus:ring-0 focus:outline-none text-lg placeholder:text-gray-400"
        />
        <Button type="submit" className="w-full text-sm font-light">
          Add Entry
        </Button>
      </div>
    </div>
  );
}
