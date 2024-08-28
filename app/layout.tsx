import type { Metadata } from "next";
import "./globals.css";
import { TodoProvider } from "@/context/TodoContext";

export const metadata: Metadata = {
  title: "My Todo List",
  description: "a simple todo list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
