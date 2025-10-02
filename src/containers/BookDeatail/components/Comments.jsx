import React, { useState } from "react";

export default function Comments({ bookId }) {
  const [comments, setComments] = useState([
    { id: 1, user: "User A", content: "Truyện hay quá!", time: "1 giờ trước" },
  ]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), user: "Bạn", content: text, time: "vừa xong" },
    ]);
    setText("");
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Bình luận</h3>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border flex-1 px-2 py-1 rounded"
          placeholder="Viết bình luận..."
        />
        <button type="submit" className="bg-red-600 text-white px-3 rounded">
          Gửi
        </button>
      </form>

      <div className="space-y-2">
        {comments.map((c) => (
          <div key={c.id} className="border-b pb-2">
            <p className="text-sm font-semibold">{c.user}</p>
            <p>{c.content}</p>
            <span className="text-xs text-gray-400">{c.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
