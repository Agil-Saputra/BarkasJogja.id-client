// Next
import Image from 'next/image';
import Link from 'next/link';
// External Libaries
import { FC } from 'react';
// Type
type LocationCardProps = {
	title : string
	logoURL : string
	LocationID : number
};

const LocationCard : FC<LocationCardProps> = ({title, logoURL, LocationID}) => {
  return (
    <Link href={`/locations/${LocationID}`} className="w-full">
      <Image
        src={logoURL}
		width={112}
		height={112}
        alt="Location Thumbnail"
        className="rounded-md w-full h-[7rem] object-cover border-primary border-[3.3px]"
      />
      <p className="text-center font-semibold">{title}</p>
    </Link>
  );
};

export default LocationCard;
