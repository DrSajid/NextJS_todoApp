"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  const [name, setName] = useState("");
  return (
    <div>
      <input type="test" placeholder="Some task" onChange={(e) => setName(e.target.value)} value={name}></input>
      <button
        onClick={() => {
          addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}
