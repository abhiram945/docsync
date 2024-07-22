import './Nav.css';
const Nav = ({course, setCourse}) => {
    return <>
        <nav className='flex alignCenter spaceBetween'>
            <a className="flex alignCenter" href="/docsync/">
                <img src="assets/logo.jpg" alt="logo" />
                <h1>DocSync</h1>
            </a>
            <div className='flex courseSelectionContainer'>
                <button onClick={()=>{window.scrollTo({top:0}); setCourse(0)}}>Secured Computing</button>
                <button onClick={()=>{window.scrollTo({top:0}); setCourse(1)}}>Operational Research</button>
            </div>
        </nav>
    </>
}
export default Nav;