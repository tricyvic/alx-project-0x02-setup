import Card from "@/components/common/Card";
import ModalForm from "@/components/common/PostModal";
import React, { useState } from "react";


export default function Home() {
  const [items, setItems] = useState<{ title: string; content: string }[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddItem = (data: { title: string; content: string }) => {
    setItems([...items, data]);
    setShowModal(false);
  };

  return (
    <div className="flex w-full h-screen bg-amber-50 flex-col" >
      <button  onClick={() => setShowModal(true)}>Add Item</button>
      {showModal && <ModalForm onSubmit={handleAddItem} onClose={() => setShowModal(false)} />}
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <Card title={item.title} content={item.content}/>
          </li>
        ))}
      </ul>
    </div>
  );
}