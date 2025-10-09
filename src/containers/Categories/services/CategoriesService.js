import axios from 'axios';
import { mockBooksDetail } from '../../Home/services/homeService';
const ENABLE_MOCK = true;

export const CategoriesService = {
  fetchBooks: async (apiUrl, page = 1, limit = 10) => {
    if (ENABLE_MOCK) {
      // Phân tích `apiUrl` để lọc mock data tương ứng
      const url = new URL(apiUrl, 'https://mock-base-url.com'); // base URL giả để parse dễ

      const category = url.searchParams.get('category'); // ví dụ: male, female, publication
      const sort = url.searchParams.get('sort'); // ví dụ: hot, new
      const tag = url.searchParams.get('tag'); // ví dụ: huyền huyễn, lịch sử

      // Lọc theo category
      let filteredBooks = mockBooksDetail;

      if (category) {
        filteredBooks = filteredBooks.filter(book => book.category === category);
      }

      if (tag) {
        filteredBooks = filteredBooks.filter(book => book.tags.includes(tag));
      }

      if (sort === 'hot') {
        filteredBooks = filteredBooks.sort(() => Math.random() - 0.5);
      }

      // Pagination
      const start = (page - 1) * limit;
      const end = start + limit;

      return {
        data: {
          books: filteredBooks.slice(start, end),
          total: filteredBooks.length,
          page,
          limit,
        },
      };
    }

    // Thực API thật nếu không bật mock
    const res = await axios.get(apiUrl, { params: { page, limit } });
    return res;
  },
};
