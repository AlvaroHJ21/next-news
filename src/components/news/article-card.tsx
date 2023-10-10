import { Article } from '@/interfaces';

interface Props {
  article: Article;
}

export const ArticleCard = ({ article }: Props) => {
  const { title, urlToImage, url, source } = article;

  return (
    <a
      href={url}
      target="_blank"
      className="border border-gray-600 p-6 relative flex flex-col min-h-[200px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-red-50">
        <img
          src={
            urlToImage && urlToImage.length
              ? urlToImage
              : 'https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF'
          }
          alt=""
          className="w-full h-full brightness-50 object-cover"
        />
      </div>
      <div className="flex gap-1 items-center">
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
        <span className="text-xs">{source.name}</span>
      </div>
      <div className="flex-1"></div>
      <h3 className="font-semibold line-clamp-2">{title}</h3>
    </a>
  );
};
