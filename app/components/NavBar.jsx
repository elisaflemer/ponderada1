import Image from 'next/image'
import { BsSun } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div className="flex justify-between w-full items-center px-14 pt-5">
        <Image src="/img/thumbnail.png" alt="Naruto" width={50} height={50} className='rounded-full shadow-md p-[1px] cursor-pointer'/>
        <div className='flex justify-between rounded-full shadow-sm px-8 py-2 items-center border-[1px] border-grey font-xs gap-7 font-light'>
            <h3 className='font-bold cursor-pointer hover:text-[#F56E45]'>Recommend!</h3>
            <div className='flex items-center justify-center gap-1'>
              🍥
              <span className='font-bold text-xs text-gray-500'>0</span>
            </div>
        </div>
        <div className='rounded-full border-[1px] border-grey shadow-sm p-2 cursor-pointer'>
          <BsSun style={{ color: "gray", fontSize: 24}} />
        </div>
    </div>
  )
}

export default NavBar