// External Libaries
import { FC } from 'react';

type InputInfoTextProps = {
	title : string
	helpText : string
};

const TitleInformationText: FC<InputInfoTextProps> = ({title, helpText}) => {
  return (
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-[12px] leading-[12px]">
        {helpText}<span className='text-primary text-[1rem]'>*</span>
      </p>
    </div>
  );
};
export default TitleInformationText;
