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
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 flex-1 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Viết bình luận..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
        >
          Gửi
        </button>
      </form>

      <div className="divide-y divide-gray-100">
        {comments.map((c) => (
          <div key={c.id} className="py-3">
            <p className="font-medium text-gray-800">{c.user}</p>
            <p className="text-gray-700">{c.content}</p>
            <span className="text-xs text-gray-400">{c.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
