import MaxWidthWrapper from './Wrappers/MaxWidthWrapper'
import Logo from './Logo'
import { ModeToggle } from './ToggleButton';
import Link from 'next/link';
import { Bell, Facebook, Instagram, Search, Twitter, User2 } from 'lucide-react';
import { CurrencyCombo } from './Comboboxes/CurrencyCombo';

const Navbar = () => {
  const navbarItems = ['Shop', "Sale", "Custom", "About", "Team", "Blog", "Contact"];
  return (
    <nav className='py-4 fixed top-0 left-0 z-50 w-full'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between'>
          {/* LEFT  */}
          <Logo />
          {/* MIDDLE SEC 1 */}
          <div className='flex items-center gap-4'>
            {navbarItems.map((item) => (
                <Link href={`/${item.toLocaleLowerCase()}`} key={item}>
                    {item}
                </Link>
            ))}
          </div>
          {/* MIDDLE SEC2  */}
          <div className='flex items-center gap-2'>
            <Search/>
            <User2/>
            <Bell/>
            {/* CURRENCY DROPDOWN  */}
            <CurrencyCombo/>
          </div>
          {/* RIGHT SEC  */}
          <div className='flex items-center gap-2'>
            <p>Follow us:</p>
            <Facebook/>
            <Instagram/>
            <Twitter/>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar

