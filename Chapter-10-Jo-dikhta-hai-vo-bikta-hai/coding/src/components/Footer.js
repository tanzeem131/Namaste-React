
const Footer = ()=>{
    return(
        <div className="bg-orange-400 h-56 p-4 m-2 shadow-2xl">
            <div className="flex justify-evenly">
                <p>&copy; 2024 lazeez khana. All rights reserved.</p>
                <div className="flex flex-col">
                    <a href="/menu">Menu</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/support">Support</a>
                </div>
                <div className="flex flex-col">
                    <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/Tanzeem_Dev" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;