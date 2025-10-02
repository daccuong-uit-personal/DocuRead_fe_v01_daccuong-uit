import axios from "axios";

const API_URL = "/api"; // base API
const ENABLE_MOCK = true; // bật/tắt mock
const SIMULATE_ERROR = false;

// --- MOCK DATA ---
const mockBookDetail = (bookId) => ({
  id: bookId,
  title: "Ngạo Thế Cửu Trọng Thiên",
  author: "Phong Lăng Thiên",
  tags: ["huyền huyễn", "kiếm hiệp"],
  coverUrl: "https://picsum.photos/200/300?random=" + bookId,
  description:
    "Một kiếm khách cô độc chinh phục cửu trọng thiên, vượt qua muôn vàn thử thách.",
  views: 12345,
  status: "Đang ra",
  rating: { average: 4.5, count: 120 },
  chapters: [
    { id: 1, number: 1, title: "Khởi đầu", time: "1 ngày trước" },
    { id: 2, number: 2, title: "Thử thách", time: "20 giờ trước" },
    { id: 3, number: 3, title: "Hành trình", time: "10 giờ trước" },
  ],
});

const mockChapters = [
  { id: 1, number: 1, title: "Khởi đầu", content: "Nội dung chương 1...", time: "1 ngày trước" },
  { id: 2, number: 2, title: "Thử thách", content: "Nội dung chương 2...", time: "20 giờ trước" },
  { id: 3, number: 3, title: "Hành trình", content: "Nội dung chương 3...", time: "10 giờ trước" },
];

const mockComments = [
  { id: 1, user: "NamNguyen", avatar: "https://i.pravatar.cc/40?img=11", content: "Hay quá!", time: "2h trước" },
  { id: 2, user: "LinhTran", avatar: "https://i.pravatar.cc/40?img=12", content: "Main hơi bị buff mạnh 🤣", time: "5h trước" },
  { id: 3, user: "HoangVu", avatar: "https://i.pravatar.cc/40?img=13", content: "Đợi chap mới dài cổ luôn!", time: "1h trước" },
];

// --- SERVICE FUNCTIONS ---

export async function getBookDetail(bookId) {
  if (SIMULATE_ERROR) throw new Error("Lỗi mô phỏng getBookDetail");
  if (ENABLE_MOCK) return mockBookDetail(bookId);

  const res = await axios.get(`${API_URL}/books/${bookId}`);
  return res.data;
}

export async function getChapters(bookId, page = 1, limit = 20) {
  if (SIMULATE_ERROR) throw new Error("Lỗi mô phỏng getChapters");
  if (ENABLE_MOCK) {
    const start = (page - 1) * limit;
    return {
      data: mockChapters.slice(start, start + limit),
      total: mockChapters.length,
      page,
      limit,
    };
  }

  const res = await axios.get(`${API_URL}/books/${bookId}/chapters`, { params: { page, limit } });
  return res.data;
}

export async function getChapterDetail(bookId, chapterId) {
  if (SIMULATE_ERROR) throw new Error("Lỗi mô phỏng getChapterDetail");
  if (ENABLE_MOCK) {
    return mockChapters.find((ch) => ch.id === Number(chapterId));
  }

  const res = await axios.get(`${API_URL}/books/${bookId}/chapters/${chapterId}`);
  return res.data;
}

export async function getComments(bookId, page = 1, limit = 10) {
  if (SIMULATE_ERROR) throw new Error("Lỗi mô phỏng getComments");
  if (ENABLE_MOCK) {
    const start = (page - 1) * limit;
    return {
      data: mockComments.slice(start, start + limit),
      total: mockComments.length,
      page,
      limit,
    };
  }

  const res = await axios.get(`${API_URL}/books/${bookId}/comments`, { params: { page, limit } });
  return res.data;
}

export async function addComment(bookId, content) {
  if (SIMULATE_ERROR) throw new Error("Lỗi mô phỏng addComment");
  if (ENABLE_MOCK) {
    const newCmt = {
      id: mockComments.length + 1,
      user: "Bạn",
      avatar: "https://i.pravatar.cc/40?img=20",
      content,
      time: "vừa xong",
    };
    mockComments.unshift(newCmt);
    return newCmt;
  }

  const res = await axios.post(`${API_URL}/books/${bookId}/comments`, { content });
  return res.data;
}
