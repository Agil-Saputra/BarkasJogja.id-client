const ProductPageSkeleton = () => {
  const skeletonClass = 'rounded-md bg-slate-300 shadow-sm animate-pulse ';

  const thumbsArr: number[] = [];

  for (let i = 0; i < 4; i++) {
    thumbsArr.push(i);
  }

  return (
    <div className="grid gap-4">
      <div className={skeletonClass + 'w-[35%] h-[1.5rem]'}></div>
      <div>
        <div className={skeletonClass + 'w-full h-[15rem] mb-2'}></div>
        <div className="flex items-center gap-2">
          {thumbsArr.map((item) => (
            <div
              key={item}
              className={skeletonClass + 'w-[5rem] h-[5rem]'}
            ></div>
          ))}
        </div>
      </div>
      <div className={skeletonClass + 'w-full h-[3rem]'}></div>
      <div className={skeletonClass + 'w-full h-[5rem]'}></div>
      <div className={skeletonClass + 'w-full h-[8rem]'}></div>
    </div>
  );
};
export default ProductPageSkeleton;
