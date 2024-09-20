import './Nav.css';
const Nav = () => {
    return <>
        <nav className='flex alignCenter spaceBetween'>
            <a className="flex alignCenter" href="/docsync/">
                <img src="assets/logo.jpg" alt="logo" />
                <h1>DocSync</h1>
            </a>
        </nav>
    </>
}
export default Nav;