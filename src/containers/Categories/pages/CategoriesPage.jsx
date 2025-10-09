import React, { useState, useEffect, useMemo } from "react";
import SearchInput from "../../../components/ui/SearchInput";
import BookList from "../components/BookList";
import Button from "../../../components/ui/Button";

// Các bộ lọc bên trái (filter options)
const FILTER_OPTIONS = {
  category: ["全部", "玄幻", "奇幻", "武侠", "都市", "历史", "军事", "游戏", "科幻", "灵异", "仙侠", "其他"],
  status: ["全部", "连载中", "已完结"],
  paid: ["全部", "免费", "会员免费", "付费"],
  words: ["全部", "20万字以下", "20-50万字", "50-100万字", "100-200万字", "200万字以上"],
  updated: ["全部", "3天内", "7天内", "15天内", "30天内"],
};

// Tabs đầu trang
const TABS = ["男生", "女生", "出版"];
const SORT_OPTIONS = ["人气", "收藏", "评分", "更新", "字数"];

export default function CategoriesPage() {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("男生");
  const [filters, setFilters] = useState({
    category: "全部",
    status: "全部",
    paid: "全部",
    words: "全部",
    updated: "全部",
  });
  const [sortBy, setSortBy] = useState("人气");

  // 🧠 Memo hóa url gọi API
  const apiUrl = useMemo(() => {
    const params = new URLSearchParams();

    params.append("tab", selectedTab);
    params.append("search", search);
    params.append("sort", sortBy);

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "全部") params.append(key, value);
    });

    return `/api/books?${params.toString()}`;
  }, [selectedTab, search, filters, sortBy]);

  const handleFilterClick = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="flex w-full max-w-7xl mx-auto px-4 py-6">
      {/* 📌 Sidebar bên trái */}
      <aside className="w-60 mr-6 hidden md:block space-y-6">
        {/* 🔍 SearchInput */}
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
          placeholder="Tìm truyện..."
        />

        {/* 📚 Tabs - ngang hàng */}
        <div className="flex gap-2 flex-wrap">
          {TABS.map((tab) => (
            <Button
              key={tab}
              variant={selectedTab === tab ? "primary" : "secondary"}
              context="tab"
              size="sm"
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* 🧩 Filter Options */}
        <div className="space-y-6">
          {Object.entries(FILTER_OPTIONS).map(([key, options]) => (
            <div key={key}>
              <h4 className="text-sm font-semibold mb-2 text-gray-800 capitalize">
                {key}
              </h4>
              <div className="flex flex-wrap gap-2 text-sm">
                {options.map((option) => (
                  <Button
                    key={option}
                    variant={filters[key] === option ? "primary" : "secondary"}
                    context="filter"
                    size="sm"
                    onClick={() => handleFilterClick(key, option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* 📖 Main Content bên phải */}
      <main className="flex-1">
        {/* 🔽 Sort Bar */}
        <div className="flex items-center space-x-2 mb-4 text-sm">
          {SORT_OPTIONS.map((sort) => (
            <Button
              key={sort}
              variant={sortBy === sort ? "primary" : "ghost"}
              size="sm"
              context="sort"
              onClick={() => setSortBy(sort)}
            >
              {sort}
            </Button>
          ))}
        </div>

        {/* 📕 Book List */}
        <BookList apiUrl={apiUrl} />
      </main>
    </div>
  );
}
