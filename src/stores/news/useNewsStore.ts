import { create } from 'zustand';
import type { Article, NewsResponse } from '@/interfaces';
import { formatDate, getYesterday } from '@/utils/format';

interface NewsState {
  articles: Article[];
  isLoading: boolean;
  setArticles: (articles: Article[]) => void;
  searchArticles: (query: string) => void;
}

export const useNewsStore = create<NewsState>()((set) => ({
  articles: [],
  isLoading: false,
  setArticles: (articles) => set({ articles }),
  searchArticles: (query) => {
    const newsParams = {
      q: query,
      from: formatDate(getYesterday()),
      to: formatDate(getYesterday()),
      sortBy: 'popularity',
      pageSize: '20',
    };
    set({ isLoading: true });
    fetch('/api/news?' + new URLSearchParams(newsParams))
      .then((resp) => resp.json())
      .then((data: NewsResponse) => {
        set({ articles: data.articles, isLoading: false });
      });
  },
}));
