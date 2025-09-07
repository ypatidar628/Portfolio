import {RiReactjsLine} from "react-icons/ri";
import {TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import {SiAngular, SiMongodb, SiTypescript} from "react-icons/si";
import {RiTailwindCssFill } from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress } from "react-icons/si";
import {motion} from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";


const Technologies =()=> {
    const iconVarints = (duration) => ({
        initial : { y : -10 },
        animate : {
            y : [ 10 , -10 ],
            transition: {
                duration : duration ,
                ease : "linear",
                repeat: Infinity,
                repeatType : "reverse",
            },
        }
    })

    return (
        <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{ opacity : 1 , y : 0 }}
            initial={{ opacity : 0 , y : -100 }}
            transition={{ duration : 1 }}
            className="my-20 text-center text-4xl">Technologies</motion.h2>
         <motion.div
             whileInView={{ opacity : 1 , x : 0 }}
             initial={{ opacity : 0 , x : -100 }}
             transition={{ duration : 1.5 }}
             className="flex flex-wrap items-center justify-center gap-4">
             <motion.div
                 variants={iconVarints(2.5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 ">
                 <RiReactjsLine className="text-7xl text-cyan-400 -mb-2 mt-2 pb-4"/>
             </motion.div>
             <motion.div
                 variants={iconVarints(3)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 ">
                 <TbBrandJavascript className="text-7xl text-yellow-300 -mb-2 mt-2 pb-4"/>
             </motion.div>
             <motion.div
                 variants={iconVarints(5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 ">
                 <SiMongodb className="text-7xl text-green-400 -mb-2 mt-2 pb-4"/>
             </motion.div>
             <motion.div
                 variants={iconVarints(2)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 ">
                 <RiTailwindCssFill className="text-7xl text-blue-500 -mb-2 mt-2 pb-4"/>
             </motion.div>
             <motion.div
                 variants={iconVarints(6)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 ">
                 <FaNodeJs className="text-7xl text-green-400 -mb-2 mt-2 pb-4"/>
             </motion.div>
             <motion.div
                 variants={iconVarints(4)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 ">
                 <SiExpress className="text-7xl text-white -mb-2 mt-2 pb-4"/>
             </motion.div>
             
             <motion.div
                 variants={iconVarints(5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 ">
                 <SiAngular  className="text-7xl text-red-600 -mb-2 mt-2 pb-4"/>
             </motion.div>
             <motion.div
                 variants={iconVarints(2)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 ">
                <TbBrandTypescript className="text-7xl text-blue-600 -mb-2 mt-2 pb-4"/>
             </motion.div>

         </motion.div>


        </div>
    );
}

export default Technologies;