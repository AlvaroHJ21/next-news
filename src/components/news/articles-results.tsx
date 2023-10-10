'use client';

import React, { useEffect } from 'react';
import { ArticleCard } from './article-card';
import { Article } from '@/interfaces';
import { useNewsStore } from '@/stores/news/useNewsStore';
import { ArticlesPlaceholder } from './articles-placeholder';
import { NoResults } from './no-results';

interface Props {
  articles: Article[];
}

export const ArticlesResults = (props: Props) => {
  const articles = useNewsStore((state) => state.articles);
  const setArticles = useNewsStore((state) => state.setArticles);
  const isLoading = useNewsStore((state) => state.isLoading);

  useEffect(() => {
    setArticles(props.articles);
    return () => {};
  }, []);

  if (isLoading) {
    return <ArticlesPlaceholder />;
  }

  if (!isLoading && articles.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => {
        return <ArticleCard key={article.title + article.author} article={article} />;
      })}
    </div>
  );
};
