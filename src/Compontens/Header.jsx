import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='logo'>
                <img className='w-[400px]' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;