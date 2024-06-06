
const Footer = ()=>{
    return(
        <div className="bg-orange-400 h-56 p-4 m-2 shadow-2xl">
            <div className="flex justify-evenly">
                <p className="my-1 py-1">&copy; 2024 lazeez khana. All rights reserved.</p>
                <div className="flex flex-col my-1 py-1 gap-2">
                    <a className="hover:font-semibold px-4 w-4" href="/menu">Menu</a>
                    <a className="hover:font-semibold px-4 w-4" href="/about">About</a>
                    <a className="hover:font-semibold px-4 w-4" href="/contact">Contact</a>
                    <a className="hover:font-semibold px-4 w-4" href="/support">Support</a>
                </div>
                <div className="flex flex-col my-1 py-1 gap-2">
                    <a className="hover:font-semibold px-4 w-4" href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a className="hover:font-semibold px-4 w-4" href="https://twitter.com/Tanzeem_Dev" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a className="hover:font-semibold px-4 w-4" href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;