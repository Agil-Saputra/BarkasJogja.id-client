// External Libaries
import { FC } from 'react';
// Types
import { ReactNode } from 'react';

type NavButtonProps = {
  icon: ReactNode;
  text: string;
  path: string;
};

const NavButton: FC<NavButtonProps> = ({ icon, text, path }) => {
  return (
    <a href={path} className="grid place-items-center">
      {icon}
      <p className="text-[14px] text-white">{text}</p>
    </a>
  );
};

export default NavButton;
