const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#1A1919] text-[#FFFFFFB3]">
            <aside>
                <h2 className="text-[32px] mb-4 text-[#FFFFFF]">CareerHub</h2>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="font-bold text-[#FFFFFF]">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="font-bold text-[#FFFFFF]">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="font-bold text-[#FFFFFF]">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            
        </footer>
    );
};

export default Footer;