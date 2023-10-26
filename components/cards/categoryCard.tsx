// Next
import Image from 'next/image';
// External Libaries
import { FC } from 'react';
import Link from 'next/link';

type CategoryCardProps = {
	categoryTitle : string
	categoryImageURL : string
	categoryID : number
};

const CategoryCard : FC<CategoryCardProps> = ({categoryImageURL, categoryTitle, categoryID}) => {
  return (
    <Link href={`/categories/${categoryID}`} className="w-[4rem]">
      <Image
        src={categoryImageURL}
        alt="Thumbnail Image"
		width={100}
		height={100}
        className="shadow-lg border-2 rounded-[4px] border-white h-[3.5rem] object-cover"
      />

      <p className="text-[.78rem] font-semibold text-center leading-4">
        {categoryTitle}
      </p>
    </Link>
  );
};

export default CategoryCard;
