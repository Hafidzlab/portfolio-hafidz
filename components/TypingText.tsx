"use client";

import { useEffect, useMemo, useState } from "react";

export default function TypingText({ words = [] }: { words?: string[] }) {
  const list = useMemo(() => (words ?? []).filter(Boolean), [words]);

  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (list.length === 0) return;

    const current = list[i % list.length];
    const speed = del ? 40 : 80;

    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 700);
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDel(false);
          setI((x) => x + 1);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, del, i, list]);

  return <span className="text-sky-300">{text}</span>;
}
