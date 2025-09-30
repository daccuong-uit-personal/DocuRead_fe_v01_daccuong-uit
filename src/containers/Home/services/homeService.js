import axios from 'axios';

const API_URL = '/api'; // Base API URL
const ENABLE_MOCK = true; // Toggle để bật/tắt mock data
const SIMULATE_ERROR = false; // Toggle để mô phỏng lỗi API

// Mock data với mô tả cải thiện
export const mockBooksDetail = [
  {
    id: 101,
    title: 'Tử Thần Hồi Sinh',
    cover: 'https://picsum.photos/200/300?random=101',
    description: 'Một hành trình huyền huyễn đầy kịch tính, nơi nhân vật chính đối mặt với số phận nghiệt ngã.',
    author: 'Tác giả 1',
    link: '/book/101',
    category: 'male',
    tags: ['huyền huyễn', 'phiêu lưu'],
  },
  {
    id: 102,
    title: 'Đại Đạo Chi Tôn',
    cover: 'https://picsum.photos/200/300?random=102',
    description: 'Hành trình tu luyện vượt muôn trùng kiếp nạn để chạm tới đỉnh cao võ đạo.',
    author: 'Tác giả 2',
    link: '/book/102',
    category: 'male',
    tags: ['huyền huyễn', 'tu luyện'],
  },
  {
    id: 103,
    title: 'Thiên Hạ Đệ Nhất',
    cover: 'https://picsum.photos/200/300?random=103',
    description: 'Một thiếu niên bình thường vươn lên trở thành bá chủ thiên hạ.',
    author: 'Tác giả 3',
    link: '/book/103',
    category: 'male',
    tags: ['huyền huyễn', 'trùng sinh'],
  },
  {
    id: 104,
    title: 'Đại Minh Vương Triều',
    cover: 'https://picsum.photos/200/300?random=104',
    description: 'Tái hiện triều đại hùng mạnh với những âm mưu chính trị và chiến tranh.',
    author: 'Tác giả 4',
    link: '/book/104',
    category: 'publication',
    tags: ['lịch sử', 'chính trị'],
  },
  {
    id: 105,
    title: 'Thần Ma Đế Tôn',
    cover: 'https://picsum.photos/200/300?random=105',
    description: 'Cuộc chiến giữa thần và ma, nơi số phận thế giới được định đoạt.',
    author: 'Lão Cửu',
    link: '/book/105',
    category: 'male',
    tags: ['huyền huyễn', 'đại chiến'],
  },
  {
    id: 106,
    title: 'Ngạo Thế Cửu Trọng Thiên',
    cover: 'https://picsum.photos/200/300?random=106',
    description: 'Một kiếm khách cô độc chinh phục cửu trọng thiên.',
    author: 'Phong Lăng Thiên',
    link: '/book/106',
    category: 'male',
    tags: ['huyền huyễn', 'kiếm hiệp'],
  },
  {
    id: 107,
    title: 'Đại Chúa Tể',
    cover: 'https://picsum.photos/200/300?random=107',
    description: 'Hành trình của một thiên tài trẻ tuổi trong thế giới tiên hiệp rộng lớn.',
    author: 'Thiên Tàm Thổ Đậu',
    link: '/book/107',
    category: 'male',
    tags: ['tiên hiệp', 'huyền huyễn'],
  },
  {
    id: 108,
    title: 'Đại Hiệp Xuất Sơn',
    cover: 'https://picsum.photos/200/300?random=108',
    description: 'Câu chuyện võ hiệp đẫm máu về lòng trung nghĩa và giang hồ hiểm ác.',
    author: 'Vô Danh',
    link: '/book/108',
    category: 'female',
    tags: ['võ hiệp', 'giang hồ'],
  },
  {
    id: 109,
    title: 'Thần Điêu Hiệp Lữ',
    cover: 'https://picsum.photos/200/300?random=109',
    description: 'Một bản tình ca bi tráng giữa Dương Quá và Tiểu Long Nữ.',
    author: 'Kim Dung',
    link: '/book/109',
    category: 'female',
    tags: ['võ hiệp', 'tình cảm'],
  },
  {
    id: 110,
    title: 'Đấu Phá Thương Khung',
    cover: 'https://picsum.photos/200/300?random=110',
    description: 'Hành trình từ phế vật đến đỉnh cao của Tiêu Viêm trong thế giới đấu khí.',
    author: 'Thiên Tàm Thổ Đậu',
    link: '/book/110',
    category: 'male',
    tags: ['huyền huyễn', 'trùng sinh'],
  },
  {
    id: 111,
    title: 'Hồng Nhan Lưu Luyến',
    cover: 'https://picsum.photos/200/300?random=111',
    description: 'Câu chuyện tình yêu đầy bi kịch giữa một nữ kiếm khách và vị tướng quân trẻ tuổi.',
    author: 'Tiểu Hồng',
    link: '/book/111',
    category: 'female',
    tags: ['võ hiệp', 'tình cảm', 'lãng mạn'],
  },
  {
    id: 112,
    title: 'Nguyệt Hạ Tình Ca',
    cover: 'https://picsum.photos/200/300?random=112',
    description: 'Một cô gái vượt qua định kiến xã hội để theo đuổi tình yêu và tự do.',
    author: 'Hàn Mai',
    link: '/book/112',
    category: 'female',
    tags: ['lãng mạn', 'cổ đại'],
  },
  {
    id: 113,
    title: 'Phượng Hoàng Niết Bàn',
    cover: 'https://picsum.photos/200/300?random=113',
    description: 'Hành trình tái sinh của một nữ nhân trong thế giới đầy âm mưu và quyền lực.',
    author: 'Ngọc Lan',
    link: '/book/113',
    category: 'female',
    tags: ['cổ đại', 'trùng sinh', 'nữ cường'],
  },
  {
    id: 114,
    title: 'Lục Y Tiên Tử',
    cover: 'https://picsum.photos/200/300?random=114',
    description: 'Một nữ y tiên dùng tài năng y thuật để cứu người và tìm lại tình yêu đã mất.',
    author: 'Tố Tố',
    link: '/book/114',
    category: 'female',
    tags: ['tiên hiệp', 'lãng mạn'],
  },
  {
    id: 115,
    title: 'Bích Hải Triều Sinh',
    cover: 'https://picsum.photos/200/300?random=115',
    description: 'Câu chuyện về tình bạn và tình yêu giữa hai nữ nhân trong giang hồ hiểm ác.',
    author: 'Vân Phi',
    link: '/book/115',
    category: 'female',
    tags: ['võ hiệp', 'tình cảm'],
  },
  {
    id: 116,
    title: 'Hán Triều Phong Vân',
    cover: 'https://picsum.photos/200/300?random=116',
    description: 'Tái hiện thời kỳ Hán triều với những trận chiến và mưu lược đỉnh cao.',
    author: 'Sử Gia',
    link: '/book/116',
    category: 'publication',
    tags: ['lịch sử', 'chiến tranh'],
  },
  {
    id: 117,
    title: 'Tam Quốc Diễn Nghĩa',
    cover: 'https://picsum.photos/200/300?random=117',
    description: 'Kinh điển lịch sử về các cuộc chiến tranh và mưu lược thời Tam Quốc.',
    author: 'La Quán Trung',
    link: '/book/117',
    category: 'publication',
    tags: ['lịch sử', 'tam quốc'],
  },
  {
    id: 118,
    title: 'Thủy Hử',
    cover: 'https://picsum.photos/200/300?random=118',
    description: 'Câu chuyện về 108 anh hùng Lương Sơn Bạc chống lại bất công.',
    author: 'Thi Nại Am',
    link: '/book/118',
    category: 'publication',
    tags: ['lịch sử', 'võ hiệp'],
  },
  {
    id: 119,
    title: 'Tây Du Ký',
    cover: 'https://picsum.photos/200/300?random=119',
    description: 'Hành trình thỉnh kinh đầy kỳ ảo của Tôn Ngộ Không và đồng đội.',
    author: 'Ngô Thừa Ân',
    link: '/book/119',
    category: 'publication',
    tags: ['huyền huyễn', 'phiêu lưu'],
  },
  {
    id: 120,
    title: 'Đông Chu Liệt Quốc',
    cover: 'https://picsum.photos/200/300?random=120',
    description: 'Tái hiện các câu chuyện lịch sử từ thời Xuân Thu đến Chiến Quốc.',
    author: 'Phùng Mộng Long',
    link: '/book/120',
    category: 'publication',
    tags: ['lịch sử', 'chính trị'],
  },
];

export const mockBanners = [
  { id: 1, image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg', link: '/book/101', title: 'Tử Thần Hồi Sinh' },
  { id: 2, image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_88.jpg', link: '/book/105', title: 'Thần Ma Đế Tôn' },
  { id: 3, image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_86.jpg', link: '/book/107', title: 'Đại Chúa Tể' },
  { id: 4, image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_89.jpg', link: '/book/103', title: 'Thiên Hạ Đệ Nhất' },
];

export const mockDiscussions = {
  'hot-discussions': {
    title: 'Thảo luận Nổi Bật',
    discussions: [
      { id: 1, avatar: 'https://i.pravatar.cc/40?img=11', user: 'NamNguyen', content: 'Ai đọc tới chương 50 của Tử Thần Hồi Sinh rồi thấy sao?', time: '2h trước' },
      { id: 2, avatar: 'https://i.pravatar.cc/40?img=12', user: 'LinhTran', content: 'Main trong Đại Chúa Tể hơi bị buff mạnh quá 🤣', time: '5h trước' },
      { id: 3, avatar: 'https://i.pravatar.cc/40?img=13', user: 'HoangVu', content: 'Thần Điêu Hiệp Lữ có ai thấy Tiểu Long Nữ đáng yêu không?', time: '1h trước' },
      { id: 4, avatar: 'https://i.pravatar.cc/40?img=14', user: 'AnhThu', content: 'Đại Minh Vương Triều hay nhưng hơi dài, có ai đồng ý không?', time: '3h trước' },
      { id: 5, avatar: 'https://i.pravatar.cc/40?img=15', user: 'MinhKhang', content: 'Có truyện nào giống Đấu Phá Thương Khung không nhỉ?', time: '6h trước' },
      { id: 6, avatar: 'https://i.pravatar.cc/40?img=16', user: 'HuyenNguyen', content: 'Tử Thần Hồi Sinh có twist bất ngờ nào không?', time: '4h trước' },
      { id: 7, avatar: 'https://i.pravatar.cc/40?img=17', user: 'ThanhLe', content: 'Đại Chúa Tể chap mới ra chưa?', time: '2h trước' },
      { id: 8, avatar: 'https://i.pravatar.cc/40?img=18', user: 'QuangPham', content: 'Nhạc nền Thần Điêu Hiệp Lữ hay quá, ai thích không?', time: '7h trước' },
      { id: 9, avatar: 'https://i.pravatar.cc/40?img=19', user: 'MaiTran', content: 'Đại Minh Vương Triều có đáng bỏ thời gian đọc không?', time: '1h trước' },
      { id: 10, avatar: 'https://i.pravatar.cc/40?img=20', user: 'DucNguyen', content: 'Đấu Phá Thương Khung có ngoại truyện không?', time: '3h trước' },
      { id: 11, avatar: 'https://i.pravatar.cc/40?img=21', user: 'LanPham', content: 'Chương 100 Tử Thần Hồi Sinh có cao trào không?', time: '5h trước' },
      { id: 12, avatar: 'https://i.pravatar.cc/40?img=22', user: 'KhangLe', content: 'Thích Đại Chúa Tể vì nhân vật phụ quá chất!', time: '6h trước' },
      { id: 13, avatar: 'https://i.pravatar.cc/40?img=23', user: 'HieuNguyen', content: 'Ai biết truyện nào có plot twist hay không?', time: '8h trước' },
      { id: 14, avatar: 'https://i.pravatar.cc/40?img=24', user: 'TrangPham', content: 'Tử Thần Hồi Sinh có kết thúc mở không?', time: '9h trước' },
      { id: 15, avatar: 'https://i.pravatar.cc/40?img=25', user: 'SonLe', content: 'Đại Chúa Tể có nhân vật phản diện nào ấn tượng?', time: '10h trước' },
      { id: 16, avatar: 'https://i.pravatar.cc/40?img=26', user: 'YenTran', content: 'Thần Điêu Hiệp Lữ có ai dislike Dương Quá không?', time: '11h trước' },
    ],
  },
  'recent-discussions': {
    title: 'Thảo luận Gần Đây',
    discussions: [
      { id: 17, avatar: 'https://i.pravatar.cc/40?img=27', user: 'TuanAnh', content: 'Ai biết truyện mới nào hay không?', time: '1h trước' },
      { id: 18, avatar: 'https://i.pravatar.cc/40?img=28', user: 'HoaNguyen', content: 'Tử Thần Hồi Sinh có đáng đọc tiếp không?', time: '2h trước' },
      { id: 19, avatar: 'https://i.pravatar.cc/40?img=29', user: 'BinhPham', content: 'Đại Chúa Tể có plot twist không nhỉ?', time: '3h trước' },
      { id: 20, avatar: 'https://i.pravatar.cc/40?img=30', user: 'LienLe', content: 'Thần Điêu Hiệp Lữ chap cuối thế nào?', time: '4h trước' },
      { id: 21, avatar: 'https://i.pravatar.cc/40?img=31', user: 'DungNguyen', content: 'Đại Minh Vương Triều có nhân vật nào đáng nhớ?', time: '5h trước' },
      { id: 22, avatar: 'https://i.pravatar.cc/40?img=32', user: 'CuongTran', content: 'Đấu Phá Thương Khung chap mới ra chưa?', time: '6h trước' },
      { id: 23, avatar: 'https://i.pravatar.cc/40?img=33', user: 'ThuyDuong', content: 'Thích Tử Thần Hồi Sinh vì cốt truyện!', time: '7h trước' },
      { id: 24, avatar: 'https://i.pravatar.cc/40?img=34', user: 'VietAnh', content: 'Đại Chúa Tể có ai dislike không?', time: '1h trước' },
      { id: 25, avatar: 'https://i.pravatar.cc/40?img=35', user: 'PhuongNguyen', content: 'Thần Điêu Hiệp Lữ có ngoại truyện không?', time: '2h trước' },
      { id: 26, avatar: 'https://i.pravatar.cc/40?img=36', user: 'HungLe', content: 'Đại Minh Vương Triều có twist không?', time: '3h trước' },
      { id: 27, avatar: 'https://i.pravatar.cc/40?img=37', user: 'MyTran', content: 'Đấu Phá Thương Khung đáng đọc không?', time: '4h trước' },
      { id: 28, avatar: 'https://i.pravatar.cc/40?img=38', user: 'QuocDat', content: 'Tử Thần Hồi Sinh chap cuối thế nào?', time: '5h trước' },
      { id: 29, avatar: 'https://i.pravatar.cc/40?img=39', user: 'LanHuong', content: 'Đại Chúa Tể có nhân vật phụ nào hay?', time: '6h trước' },
      { id: 30, avatar: 'https://i.pravatar.cc/40?img=40', user: 'MinhQuan', content: 'Thần Điêu Hiệp Lữ có ai yêu thích nhạc?', time: '7h trước' },
      { id: 31, avatar: 'https://i.pravatar.cc/40?img=41', user: 'ThanhTam', content: 'Đại Minh Vương Triều có kết thúc hay không?', time: '8h trước' },
      { id: 32, avatar: 'https://i.pravatar.cc/40?img=42', user: 'HaiNam', content: 'Đấu Phá Thương Khung có ngoại truyện không?', time: '9h trước' },
    ],
  },
};

export const mockQAs = {
  'hot-qas': {
    title: 'Hỏi Đáp Nổi Bật',
    qas: [
      { id: 1, avatar: 'https://i.pravatar.cc/40?img=21', user: 'Admin', content: 'Tuần này sẽ có event tặng coin cho độc giả!', time: '1 ngày trước' },
      { id: 2, avatar: 'https://i.pravatar.cc/40?img=22', user: 'ReaderX', content: 'Có ai biết khi nào Thần Điêu Hiệp Lữ ra ngoại truyện không?', time: '3 ngày trước' },
      { id: 3, avatar: 'https://i.pravatar.cc/40?img=23', user: 'NamNguyen', content: 'Tử Thần Hồi Sinh có chap mới chưa?', time: '2h trước' },
      { id: 4, avatar: 'https://i.pravatar.cc/40?img=24', user: 'LinhTran', content: 'Đại Chúa Tể có event gì sắp tới không?', time: '5h trước' },
      { id: 5, avatar: 'https://i.pravatar.cc/40?img=25', user: 'HoangVu', content: 'Thần Điêu Hiệp Lữ có bản anime không?', time: '1h trước' },
      { id: 6, avatar: 'https://i.pravatar.cc/40?img=26', user: 'AnhThu', content: 'Đại Minh Vương Triều có ngoại truyện không?', time: '4h trước' },
      { id: 7, avatar: 'https://i.pravatar.cc/40?img=27', user: 'MinhKhang', content: 'Đấu Phá Thương Khung có spin-off không?', time: '6h trước' },
      { id: 8, avatar: 'https://i.pravatar.cc/40?img=28', user: 'HuyenNguyen', content: 'Tử Thần Hồi Sinh có chap bonus không?', time: '3h trước' },
      { id: 9, avatar: 'https://i.pravatar.cc/40?img=29', user: 'ThanhLe', content: 'Đại Chúa Tể có thông tin chap mới không?', time: '2h trước' },
      { id: 10, avatar: 'https://i.pravatar.cc/40?img=30', user: 'QuangPham', content: 'Thần Điêu Hiệp Lữ có bản live-action không?', time: '7h trước' },
      { id: 11, avatar: 'https://i.pravatar.cc/40?img=31', user: 'MaiTran', content: 'Đại Minh Vương Triều có chap đặc biệt không?', time: '1h trước' },
      { id: 12, avatar: 'https://i.pravatar.cc/40?img=32', user: 'DucNguyen', content: 'Đấu Phá Thương Khung có bản tiếng Anh không?', time: '5h trước' },
      { id: 13, avatar: 'https://i.pravatar.cc/40?img=33', user: 'LanPham', content: 'Tử Thần Hồi Sinh có ai spoil chap cuối không?', time: '4h trước' },
      { id: 14, avatar: 'https://i.pravatar.cc/40?img=34', user: 'KhangLe', content: 'Đại Chúa Tể có bản manga không?', time: '6h trước' },
      { id: 15, avatar: 'https://i.pravatar.cc/40?img=35', user: 'HieuNguyen', content: 'Thần Điêu Hiệp Lữ có bản game không?', time: '3h trước' },
      { id: 16, avatar: 'https://i.pravatar.cc/40?img=36', user: 'TrangPham', content: 'Đại Minh Vương Triều có chap bonus không?', time: '2h trước' },
    ],
  },
  'recent-qas': {
    title: 'Hỏi Đáp Gần Đây',
    qas: [
      { id: 17, avatar: 'https://i.pravatar.cc/40?img=37', user: 'SonLe', content: 'Ai biết truyện mới nào hot không?', time: '1h trước' },
      { id: 18, avatar: 'https://i.pravatar.cc/40?img=38', user: 'YenTran', content: 'Tử Thần Hồi Sinh có bản dịch không?', time: '2h trước' },
      { id: 19, avatar: 'https://i.pravatar.cc/40?img=39', user: 'TuanAnh', content: 'Đại Chúa Tể có chap đặc biệt không?', time: '3h trước' },
      { id: 20, avatar: 'https://i.pravatar.cc/40?img=40', user: 'HoaNguyen', content: 'Thần Điêu Hiệp Lữ có bản cũ không?', time: '4h trước' },
      { id: 21, avatar: 'https://i.pravatar.cc/40?img=41', user: 'BinhPham', content: 'Đại Minh Vương Triều có bản hoàn chỉnh không?', time: '5h trước' },
      { id: 22, avatar: 'https://i.pravatar.cc/40?img=42', user: 'LienLe', content: 'Đấu Phá Thương Khung có bản audio không?', time: '6h trước' },
      { id: 23, avatar: 'https://i.pravatar.cc/40?img=43', user: 'DungNguyen', content: 'Tử Thần Hồi Sinh có bản remake không?', time: '1h trước' },
      { id: 24, avatar: 'https://i.pravatar.cc/40?img=44', user: 'CuongTran', content: 'Đại Chúa Tể có bản đặc biệt không?', time: '2h trước' },
      { id: 25, avatar: 'https://i.pravatar.cc/40?img=45', user: 'ThuyDuong', content: 'Thần Điêu Hiệp Lữ có bản mới không?', time: '3h trước' },
      { id: 26, avatar: 'https://i.pravatar.cc/40?img=46', user: 'VietAnh', content: 'Đại Minh Vương Triều có bản cũ không?', time: '4h trước' },
      { id: 27, avatar: 'https://i.pravatar.cc/40?img=47', user: 'PhuongNguyen', content: 'Đấu Phá Thương Khung có bản hoàn thành không?', time: '5h trước' },
      { id: 28, avatar: 'https://i.pravatar.cc/40?img=48', user: 'HungLe', content: 'Tử Thần Hồi Sinh có bản tiếng Nhật không?', time: '6h trước' },
      { id: 29, avatar: 'https://i.pravatar.cc/40?img=49', user: 'MyTran', content: 'Đại Chúa Tể có bản quốc tế không?', time: '1h trước' },
      { id: 30, avatar: 'https://i.pravatar.cc/40?img=50', user: 'QuocDat', content: 'Thần Điêu Hiệp Lữ có bản cải tiến không?', time: '2h trước' },
      { id: 31, avatar: 'https://i.pravatar.cc/40?img=51', user: 'LanHuong', content: 'Đại Minh Vương Triều có bản gốc không?', time: '3h trước' },
      { id: 32, avatar: 'https://i.pravatar.cc/40?img=52', user: 'MinhQuan', content: 'Đấu Phá Thương Khung có bản đặc biệt không?', time: '4h trước' },
    ],
  },
};

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const generateTopTen = (baseIds) => {
  const list = [...baseIds];
  while (list.length < 10) {
    list.push(list[list.length % baseIds.length]);
  }
  return list.map((id, index) => ({ ...mockBooksDetail.find(book => book.id === id), rank: index + 1 }));
};

// Mock rankings
const mockRankings = {
  'male-hot': { title: 'TOP NAM HOT', bookIds: generateTopTen(shuffle([101, 105, 110, 103, 106, 102, 107])) },
  'male-new': { title: 'TOP NAM MỚI', bookIds: generateTopTen([110, 107, 105, 106, 101, 102].reverse()) },
  'male-complete': { title: 'TOP NAM HOÀN THÀNH', bookIds: generateTopTen(shuffle([104, 106, 109, 108, 110, 101])) },
  'female-hot': { title: 'TOP NỮ HOT', bookIds: generateTopTen(shuffle([104, 108, 109, 102, 103, 101])) },
  'female-new': { title: 'TOP NỮ MỚI', bookIds: generateTopTen(shuffle([107, 103, 105, 102, 108, 110])) },
  'female-complete': { title: 'TOP NỮ HOÀN THÀNH', bookIds: generateTopTen(shuffle([109, 108, 104, 101, 103, 106])) },
  'publication-bestseller': { title: 'ẤN PHẨM BÁN CHẠY', bookIds: generateTopTen(shuffle([109, 104, 110, 108, 101, 105])) },
  'publication-new': { title: 'ẤN PHẨM MỚI', bookIds: generateTopTen(shuffle([103, 106, 107, 102, 105])) },
  'publication-graphic-novel': { title: 'TRUYỆN TRANH', bookIds: generateTopTen(shuffle([107, 102, 103, 104, 109, 110])) },
};

// API service
export const homeService = {
  getBanners: async () => {
    if (SIMULATE_ERROR && Math.random() < 0.3) {
      throw new Error('Lỗi mô phỏng khi lấy banners');
    }
    if (ENABLE_MOCK) {
      return { data: mockBanners };
    }
    const res = await axios.get(`${API_URL}/banners`);
    return res;
  },

  getNewBooks: async (page = 1, limit = 10) => {
    if (SIMULATE_ERROR && Math.random() < 0.3) {
      throw new Error('Lỗi mô phỏng khi lấy sách mới');
    }
    if (ENABLE_MOCK) {
      const start = (page - 1) * limit;
      const end = start + limit;
      const newBooks = mockBooksDetail
        .filter(book => [101, 102, 103, 104].includes(book.id))
        .slice(start, end);
      return { data: newBooks };
    }
    const res = await axios.get(`${API_URL}/new-books`, { params: { page, limit } });
    return res;
  },

  getRecommendBooks: async (page = 1, limit = 6) => {
    if (SIMULATE_ERROR && Math.random() < 0.3) {
      throw new Error('Lỗi mô phỏng khi lấy sách đề cử');
    }
    if (ENABLE_MOCK) {
      const start = (page - 1) * limit;
      const end = start + limit;
      const maleBooks = mockBooksDetail
        .filter(book => book.category === 'male')
        .slice(start, end);
      const femaleBooks = mockBooksDetail
        .filter(book => book.category === 'female')
        .slice(start, end);
      const publicationBooks = mockBooksDetail
        .filter(book => book.category === 'publication')
        .slice(start, end);
      return {
        data: {
          male: maleBooks,
          female: femaleBooks,
          publication: publicationBooks,
        },
      };
    }
    const res = await axios.get(`${API_URL}/recommend-books`, { params: { page, limit } });
    return res;
  },

  getRanking: async (rankingType, page = 1, limit = 10) => {
    if (SIMULATE_ERROR && Math.random() < 0.3) {
      throw new Error(`Lỗi mô phỏng khi lấy xếp hạng ${rankingType}`);
    }
    if (ENABLE_MOCK) {
      const ranking = mockRankings[rankingType] || { title: '', bookIds: [] };
      const start = (page - 1) * limit;
      const end = start + limit;
      return {
        data: {
          title: ranking.title,
          books: ranking.bookIds.slice(start, end),
        },
      };
    }
    const res = await axios.get(`${API_URL}/rankings/${rankingType}`, { params: { page, limit } });
    return res;
  },

  getDiscussions: async (discussionType, page = 1, limit = 12) => {
    if (SIMULATE_ERROR && Math.random() < 0.3) {
      throw new Error(`Lỗi mô phỏng khi lấy thảo luận ${discussionType}`);
    }
    if (ENABLE_MOCK) {
      const discussionData = mockDiscussions[discussionType] || { title: 'Thảo luận Không Xác Định', discussions: [] };
      const start = (page - 1) * limit;
      const end = Math.min(start + limit, discussionData.discussions.length);
      return {
        data: {
          title: discussionData.title,
          discussions: discussionData.discussions.slice(start, end).sort(() => Math.random() - 0.5),
          total: discussionData.discussions.length,
          page,
          limit,
        },
      };
    }
    const res = await axios.get(`${API_URL}/discussions/${discussionType}`, { params: { page, limit } });
    return res;
  },
  getQAs: async (qaType, page = 1, limit = 9) => {
    if (SIMULATE_ERROR && Math.random() < 0.3) {
      throw new Error(`Lỗi mô phỏng khi lấy hỏi đáp ${qaType}`);
    }
    if (ENABLE_MOCK) {
      const qaData = mockQAs[qaType] || { title: 'Hỏi Đáp Không Xác Định', qas: [] };
      const start = (page - 1) * limit;
      const end = Math.min(start + limit, qaData.qas.length);
      return {
        data: {
          title: qaData.title,
          qas: qaData.qas.slice(start, end).sort(() => Math.random() - 0.5),
          total: qaData.qas.length,
          page,
          limit,
        },
      };
    }
    const res = await axios.get(`${API_URL}/qas/${qaType}`, { params: { page, limit } });
    return res;
  },
};