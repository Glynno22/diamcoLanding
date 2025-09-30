import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import logo from "../assets/logo.png"
import { variable } from '../constante'

// import { Link } from 'react-scroll'
export default function NavBar() {
    const [active, setActive] = useState('acceuil')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Variants d'animation pour les éléments de navigation
    const navItemVariants = {
        inactive: {
            scale: 1,
            color: "#000000",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        active: {
            scale: 1.05,
            color: "#059669", // text-green-600
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    // Variants pour la ligne de soulignement
    const underlineVariants = {
        hidden: {
            scaleX: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }

    // Variants pour l'effet de hover
    const hoverVariants = {
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    }

    // Variants pour le menu mobile
    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    // Variants pour les éléments du menu mobile
    const mobileItemVariants = {
        closed: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }

    // Variants pour l'animation du bouton hamburger
    const hamburgerLineVariants = {
        closed: {
            rotate: 0,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const topLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 8 }
    }

    const middleLineVariants = {
        closed: { opacity: 1 },
        open: { opacity: 0 }
    }

    const bottomLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -8 }
    }

    const menuItems = [
        { id: 'acceuil', label: 'Accueil', font: 'Lato', href: '#acceuil' },
        { id: 'a_propos', label: 'A Propos', font: 'Lato', href: '#apropos' },
        { id: 'services', label: 'Nos Services', font: 'Lato', href: '#solution' },
        { id: 'contact', label: 'Contactez Nous', font: 'Lato', href: '#contact' }
    ];

    const handleMenuItemClick = (itemId) => {
        setActive(itemId)
        setIsMenuOpen(false) // Fermer le menu mobile après sélection
    }

    return (
        <div className="w-full md:w-[68%] md:mx-[80px]  pt-4 md:pt-[20px] bg-purple-0 sticky" >
            {/* Container principal */}
            <div className="flex flex-row justify-between items-center md:justify-start md:gap-x-[135px]">
                
                {/* Logo */}
                <motion.div 
                    className=' cursor-pointer'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <img src={logo} alt='logo' className="h-8 md:h-auto"/>
                </motion.div>

                {/* Menu Desktop */}
                <div className="hidden md:grid grid-flow-col auto-cols-max gap-x-13">
                    {menuItems.map((item, index) => (
                        <motion.a 
                            key={item.id}
                            href={item.href}
                            className='text-2xl cursor-pointer relative'
                            style={{ fontFamily: item.font , fontWeight:"bold", color:variable.primaire}}
                            variants={navItemVariants}
                            animate={active === item.id ? 'active' : 'inactive'}
                            whileHover={{scale:1.1, transition:{duration:0.1}}}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                delay: (index+1) * 0.5, 
                                duration: 0.3,
                                ease: "easeOut"
                            }}
                            onClick={() => setActive(item.id)}
                        >
                            <motion.p variants={hoverVariants}>
                                {item.label}
                            </motion.p>
                            
                            <AnimatePresence>
                                {active === item.id && (
                                    <motion.hr 
                                        className='mt-2 border-2 rounded-4x'
                                        variants={underlineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        style={{ originX: 0.5 }}
                                    />
                                )}
                            </AnimatePresence>

                            <motion.div
                                className="absolute inset-0 bg-green-100 rounded-lg -z-10"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.1 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Bouton Hamburger Mobile */}
                <motion.button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    style={{ backgroundColor: variable.primaire, borderRadius: 8 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    animate={isMenuOpen ? "open" : "closed"}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        className="w-6 h-0.5 bg-white block"
                        variants={{...hamburgerLineVariants, ...topLineVariants}}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-white block"
                        variants={{...hamburgerLineVariants, ...middleLineVariants}}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-white block"
                        variants={{...hamburgerLineVariants, ...bottomLineVariants}}
                    />
                </motion.button>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden mt-4 bg-white shadow-lg rounded-lg overflow-hidden"
                        style={{ backgroundColor: variable.primaire }}
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="py-4 px-6 space-y-4">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item.id}
                                    href={item.href}
                                    className="text-xl cursor-pointer relative py-2"
                                    style={{ fontFamily: item.font }}
                                    variants={mobileItemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleMenuItemClick(item.id)}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.p
                                        className={`${active === item.id ? ' font-bold text-[#008BBB]' : 'text-white'} transition-colors`}
                                    >
                                        {item.label}
                                    </motion.p>
                                    
                                    {/* Indicateur actif pour mobile */}
                                    {active === item.id && (
                                        <motion.div
                                            className="absolute left-0 top-0 bottom-0 w-1  rounded-r "
                                            style={{ backgroundColor: variable.secondaire }}
                                            layoutId="mobileActiveIndicator"
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        />
                                    )}

                                    {/* Effet de hover pour mobile */}
                                    <motion.div
                                        className="absolute inset-0 bg-green-50 rounded -z-10"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 0.5 }}
                                        whileTap={{ opacity: 0.3 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 bg-white bg-opacity-20 z-[-1]"
                        // style={{ backgroundColor: variable.primaire, opacity: 0.5 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}