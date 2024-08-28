"use client";

import { useTodo } from "@/context/TodoContext";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function AddTodoBox() {
  const { createTodo } = useTodo();
  const [title, setTitle] = useState("");

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  }

  return (
    <form
      className="flex items-center gap-2 w-full mb-10"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="border-none rounded-lg flex-grow h-12 text-slate-900 px-3"
        value={title}
        placeholder="عنوان تسک مورد نظر خود را وارد کنید"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-slate-900 rounded-lg">
        <PlusIcon className="size-12 text-white hover:text-slate-400 transition-colors" />
      </button>
    </form>
  );
}
