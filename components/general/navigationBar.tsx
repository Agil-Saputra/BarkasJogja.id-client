// Components
import NavButton from './navButton';
// Icons
import {
  AiFillQuestionCircle,
  AiFillPlusCircle,
  AiFillHome,
} from 'react-icons/ai';

const iconProps = {
  color: 'white',
  size: 25,
  className: 'text-white',
};

const NavigationBar = () => {
  return (
    <nav className="bg-primary shadow-md max-w-[26.75rem] mx-auto flex gap-2 item fixed bottom-0 w-full justify-between main-padding p-2 ">
      <NavButton path="/" icon={<AiFillHome {...iconProps} />} text="Beranda" />
      <a
        href="/jual-barang"
        className="grid text-secondary place-items-center text-sm items-center shadow-md p-1 -translate-y-1 bg-white border-2 border-secondary px-4 rounded-xl w-fit"
      >
        <AiFillPlusCircle size={25} />
        Jual Barang
      </a>
      <NavButton
        path="/request-barang"
        icon={<AiFillQuestionCircle {...iconProps} />}
        text="Permintaan"
      />
    </nav>
  );
};

export default NavigationBar;
