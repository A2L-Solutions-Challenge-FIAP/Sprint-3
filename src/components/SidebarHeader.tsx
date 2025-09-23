import logo_imrea_min from '../assets/logo_imrea_min.png'
import menu from '../assets/menu.svg'
const Header = () => {
  return (
    <div className='border border-gray-100 px-3 py-2 h-15 flex justify-between items-center'>
      <img src={logo_imrea_min} alt='Logo' className='w-10'/>
      <img src={menu} alt='Menu' className='w-6 cursor-pointer'/>
    </div>
  )
}

export default Header