import { ArticlesResults } from '@/components/news/articles-results';
import { Header } from '@/components/shared/header/header';
import { NewsResponse } from '@/interfaces';
import { formatDate, getYesterday } from '@/utils/format';

const newsParams = {
  q: 'technology',
  from: formatDate(getYesterday()),
  to: formatDate(getYesterday()),
  sortBy: 'popularity',
  pageSize: '20',
  apiKey: process.env.NEWS_API_KEY!,
};

export default async function NewsPage() {
  const resp = await fetch('https://newsapi.org/v2/everything?' + new URLSearchParams(newsParams));
  const data = (await resp.json()) as NewsResponse;
  return (
    <>
      <Header />
      <main className="">
        <div className="max-w-screen-xl m-auto w-[90%]">
          <h1 className="text-4xl border-l-2 px-4 my-10">Top News</h1>
          <ArticlesResults articles={data.articles} />
        </div>
      </main>
    </>
  );
}
