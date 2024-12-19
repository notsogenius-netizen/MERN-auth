import { PropsWithChildren } from "react";
import { ModeToggle } from "./mode-toggle";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-end">
          <ModeToggle />
        </div>
      </header>
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-6 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>footer</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
