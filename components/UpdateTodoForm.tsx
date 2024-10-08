"use client";

import { TodoModel, useTodo } from "@/context/TodoContext";
import { useState } from "react";
import Spinner from "./Spinner";

type props = {
  todo: TodoModel;
  setEditingId: (id: number | null) => void;
};
export default function UpdateTodoForm({ todo, setEditingId }: props) {
  const { updateTodo } = useTodo();
  const [newTitle, setNewTitle] = useState(todo.title);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    setIsSubmitting(true);
    e.preventDefault();
    updateTodo(todo.id, newTitle, todo.completed);
    setEditingId(null);
    setNewTitle("");
    setIsSubmitting(false);
  }

  return (
    <form
      className="flex items-center gap-2 w-full mt-5"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="border-none rounded-lg flex-grow h-10 text-slate-900 px-3"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      {!isSubmitting ? (
        <button
          type="submit"
          className="bg-slate-900 size-10 rounded-lg text-white hover:text-slate-400 transition-colors"
          disabled={isSubmitting}
        >
          ثبت
        </button>
      ) : (
        <Spinner />
      )}
    </form>
  );
}
