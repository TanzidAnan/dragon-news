import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className='logo'>
                <img className='w-[400px]' src={logo} alt="" />
            </div>
            <h1 className='text-gray-500'>Journalism Without Fear or Favour</h1>
        </div>
    );
};

export default Header;