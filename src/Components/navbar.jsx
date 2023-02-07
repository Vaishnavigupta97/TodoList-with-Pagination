import '../App.css';


function Navbar() {
    return (
        <>
            <div className="navBar">
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                <div className="searchBar">
                    <input type='search' placeholder='search' />
                    <button className='navBtn'>Search</button>
                </div>
            </div>
        </>
    )
}
export default Navbar;