import logo from '../assets/myLogo.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter } from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import {motion} from "framer-motion";

const Navbar = () => {

    const iconVarints = (duration) => ({
        initial : { y : -5 },
        animate : {
            y : [ 5 , -5 ],
            transition: {
                duration : duration ,
                ease : "linear",
                repeat: Infinity,
                repeatType : "reverse",
            },
        }
    })
    return (
        <div>
            <nav className="mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    <img src={logo} alt="logo" className="h-12 -m-4 ml-6 mx-auto w-15" />
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
                    <motion.span
                        variants={iconVarints(2.5)}
                        initial="initial"
                        animate="animate" ><a href="https://www.linkedin.com/in/yogendra-patidar-752513291/"><FaLinkedin/></a>
                    </motion.span>

                    <motion.span
                        variants={iconVarints(3)}
                        initial="initial"
                        animate="animate" ><a href="https://github.com/ypatidar628"><FaGithub/></a>
                    </motion.span>
                    {/*<motion.span*/}
                    {/*    variants={iconVarints(4)}*/}
                    {/*    initial="initial"*/}
                    {/*    animate="animate" ><FaInstagram/>*/}
                    {/*</motion.span>*/}
                    <motion.span
                        variants={iconVarints(2)}
                        initial="initial"
                        animate="animate" ><a href="https://x.com/YogendraPa36138"><FaSquareXTwitter /></a>
                    </motion.span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;