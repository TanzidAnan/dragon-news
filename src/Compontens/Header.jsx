import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className='logo'>
                <img className='w-[400px]' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;