import Image from 'next/image'
import Logo from '../../assets/Logo.png'
import LogoWithoutText from '../../assets/logoWithoutText.png'
import Search from './search'

const Header = () => {
  return (
    <header className="bg-primary sticky top-0 flex items-center gap-2 justify-between main-padding py-3 z-10">
      <div className="inline-flex max-sm:hidden ">
        <Image src={Logo} alt="BarkasJogja.com Logo" width={120} height={43} />
      </div>

      <div className="hidden max-sm:inline-flex ">
        <Image
          src={LogoWithoutText}
          alt="BarkasJogja.com Logo"
          height={60}
          width={43}
        />
      </div>

      <Search />
    </header>
  )
}

export default Header
