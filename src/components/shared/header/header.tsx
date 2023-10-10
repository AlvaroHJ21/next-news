import { InputSearch } from '@/components/news/input-search';

export const Header = () => {
  return (
    <header className="relative h-80 flex flex-col justify-end">
      <div className="absolute -z-10 h-full w-full">
        <img
          src="https://i.pinimg.com/originals/e1/26/d3/e126d318274739fbb93081612b4edbc3.jpg"
          alt=""
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      <div className="flex-1"></div>
      <div className="max-w-screen-xl m-auto w-[90%] py-8">
        {/* Input Search */}
        <InputSearch />
        <p className="text-center">#TrendingNews #Maling #mobilterbang #manusiasapi</p>
      </div>
    </header>
  );
};
