import AddTodoBox from "@/components/AddTodo";
import Spinner from "@/components/Spinner";
import dynamic from "next/dynamic";
import Image from "next/image";

const TodoList = dynamic(() => import("@/components/TodoList"), {
  loading: () => (
    <div className="flex justify-center py-3">
      <Spinner />
    </div>
  ),
  ssr: false,
});

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-4 lg:p-20 bg-slate-100">
      <h1 className="text-3xl font-bold text-center text-slate-700">
        لیست تسک های
      </h1>
      <h2 className="text-lg text-center text-slate-700 py-3">
        وب اپلیکیشن ساده برای مدیریت تسک های روزانه
      </h2>
      <div className="bg-slate-200 rounded-lg p-4 lg:min-w-[500px] max-w-[600px]">
        <AddTodoBox />
        <TodoList />
      </div>
    </main>
  );
}
