import noResultsImg from '@/assets/img/no-results.svg';

export const NoResults = () => {
  return (
    <div className='mb-20'>
      <div className="max-w-sm m-auto">
        <img src={noResultsImg.src} alt="" />
        <p className='text-center my-2 uppercase font-black'>No results</p>
      </div>
    </div>
  );
};
