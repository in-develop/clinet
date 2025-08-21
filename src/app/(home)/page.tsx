import { Button } from "@/shared/ui/Button";
import { TextInput } from "@/shared/ui/TextInput";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main className="row-start-2 flex flex-col">
        <h1>Hello team!</h1>

<Button variant="borderIcon"></Button>

<TextInput value='' onChange={() => null}   />

      </main>
    </div>
  );
}
