//app/page.tsx
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Home() {
  return (
    <div>
      <h1 className="head-text text-left">Home</h1>
      <UserButton
        appearance={{
          baseTheme: dark,
        }}
        afterSignOutUrl="/"
      />
    </div>
  );
}
