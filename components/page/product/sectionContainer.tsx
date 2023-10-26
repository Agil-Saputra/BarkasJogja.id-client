// External Libaries
import { FC, ReactNode } from 'react';
// Components
// Utils
// Types

type SectionContainerProps = {
	children : ReactNode
	title : string
};

const SectionContainer: FC<SectionContainerProps> = ({ children, title }) => {
  return (
    <div className="bg-white shadow-sm p-4 rounded-md mt-4 ">
		 <h2 className="font-bold text-xl mb-2 leading-5">{title}</h2>
      {children}
    </div>
  );
};
export default SectionContainer;
