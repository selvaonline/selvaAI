// pages/index.js
import React, { useState } from "react";
import Board from "../components/Board";
import FileUpload from "../components/FileUpload";
import Search from "../components/Search";

export default function Home() {
  const [items, setItems] = useState([
    { id: "1", content: "First task" },
    { id: "2", content: "Second task" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <FileUpload />
      <Search />
      <Board items={items} onDragEnd={handleDragEnd} />
    </div>
  );
}
