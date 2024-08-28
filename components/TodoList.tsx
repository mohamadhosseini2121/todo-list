"use client";

import { useTodo } from "@/context/TodoContext";
import {
  CheckIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import UpdateTodoForm from "./UpdateTodoForm";
import { useState } from "react";

export default function TodoList() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const { removeTodo, todoList, updateTodo } = useTodo();

  function removeHandler(id: number) {
    const confirm = window.confirm("از حذف این تسک مطمئن هستید؟");
    if (confirm) removeTodo(id);
  }

  return (
    <ul className=" flex flex-col gap-2">
      {todoList.length === 0 ? (
        <p className="text-center py-3 text-sm font-semibold">
          لیست تسک های شما خالی است
        </p>
      ) : (
        todoList.map((todo) => (
          <li
            className="w-full px-3 py-4 rounded-lg bg-slate-700 text-white"
            key={todo.id}
          >
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-2">
                <button className="p-0 border-none">
                  {!todo.completed ? (
                    <CheckIcon
                      className="inline-block text-green-500 size-6 hover:opacity-50 transition-opacity"
                      onClick={() =>
                        updateTodo(todo.id, todo.title, !todo.completed)
                      }
                    />
                  ) : (
                    <XMarkIcon
                      className="inline-block text-red-500 size-6 hover:opacity-50 transition-opacity"
                      onClick={() =>
                        updateTodo(todo.id, todo.title, !todo.completed)
                      }
                    />
                  )}
                </button>
                <p
                  className={`ms-2 transition-colors  ${
                    todo.completed ? "line-through text-slate-400" : ""
                  }`}
                >
                  {todo.title}
                </p>
              </div>
              <div className="flex gap-3">
                <PencilIcon
                  className="text-white size-6 cursor-pointer hover:text-slate-400 transition-colors"
                  onClick={() => setEditingId(todo.id)}
                />
                <TrashIcon
                  className="text-white size-6 cursor-pointer hover:text-slate-400 transition-colors"
                  onClick={() => removeHandler(todo.id)}
                />
              </div>
            </div>
            {editingId === todo.id && (
              <UpdateTodoForm todo={todo} setEditingId={setEditingId} />
            )}
          </li>
        ))
      )}
    </ul>
  );
}
