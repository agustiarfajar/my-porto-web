import { BiLogoFlutter, BiLogoPhp, BiLogoPostgresql, BiLogoPython } from "react-icons/bi";
import { DiHtml5 } from "react-icons/di";
import { FaNodeJs} from "react-icons/fa";
import { RiBootstrapFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJsonwebtokens, SiLaravel,  SiMysql, SiPostman } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import * as motion from "framer-motion/client";
import { Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

export default function Skills() {
    return(
        <div className="pb-24">
            <motion.h2  
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                    Skills
            </motion.h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <DiHtml5 className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <BiLogoPhp className="text-7xl text-purple-500" />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-4">
                    <BiLogoFlutter className="text-7xl text-sky-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4">
                    <SiLaravel className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4">
                    <SiJsonwebtokens className="text-7xl text-red-700" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <RiReactjsFill className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>              
                
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <RiBootstrapFill className="text-7xl text-purple-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-4">
                    <RiTailwindCssFill className="text-7xl text-sky-500" />
                </motion.div>    
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-4">
                    <SiMysql className="text-7xl text-cyan-500" />
                </motion.div>            
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4">
                    <BiLogoPython className="text-7xl text-sky-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <SiPostman className="text-7xl text-orange-500" />
                </motion.div>               
            </motion.div>
        </div>
    );
}