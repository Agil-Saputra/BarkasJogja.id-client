// External Libaries
import { FC } from 'react';
// Components
// Utils
// Types

type TableChildrenProps = {
  title: string;
  text: string;
};

const TableChildren: FC<TableChildrenProps> = ({ title, text }) => {
  return (
    <div className="grid grid-cols-2 border-b py-1">
      <p className="font-semibold text-primary opacity-90">{title}</p>
		<p className='ml-1'>{text}</p>
    </div>
  );
};
export default TableChildren;
