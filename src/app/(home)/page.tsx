"use client";

import { useState } from "react";

import TextInput from "@/shared/ui/TextInput/TextInput";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main className="row-start-2 flex flex-col">
        <h1>Hello team!</h1>

        <TextInput
          value={inputValue}
          label="Enter your email"
          onChange={(e) => setInputValue(e.target.value)}
          onClick={() => null}
        />
      </main>
    </div>
  );
}
