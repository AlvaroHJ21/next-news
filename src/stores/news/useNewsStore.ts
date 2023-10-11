import { create } from 'zustand';
import type { Article, NewsResponse } from '@/interfaces';
import { formatDate, getYesterday } from '@/utils/format';

const NEXT_PUBLIC_NEWS_API = process.env.NEXT_PUBLIC_NEWS_API!;

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
      apiKey: NEXT_PUBLIC_NEWS_API,
    };
    set({ isLoading: true });
    fetch('https://newsapi.org/v2/everything?' + new URLSearchParams(newsParams))
      .then((resp) => resp.json())
      .then((data: NewsResponse) => {
        // console.log(data.articles);
        set({ articles: data.articles, isLoading: false });
      });
  },
}));
