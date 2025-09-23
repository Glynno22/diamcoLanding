import { useState } from "react";
import { motion } from "framer-motion";

import CardAvantage from "./CardAvantage";
import { avantages } from "./data";

const PourquoiDiamco = () => {
  const [activeId, setActiveId] = useState(null); // Aucune carte active par défaut

  return (
    <section className="py-20 mt-20 px-6 lg:px-20   flex flex-col justify-center ">
      
      <div className="text-center mb-12">
        <p className="text-gray-500 uppercase tracking-wider text-sm mb-4">Nos Avantages</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-16">Pourquoi Diamco ?</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
        {avantages.map((item) => (
          <CardAvantage
            key={item.id}
            {...item}
            active={activeId === item.id}
            onClick={() => {
              setActiveId(activeId === item.id ? null : item.id)
              console.log(activeId);
              
            }}
          />
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2">
        {avantages.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              activeId === item.id ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
          
          
        ))}
      </div>
    </section>
  );
};

export default PourquoiDiamco;

  //  <div className='  flex  bg-green w-screen  mb-20'
  //       style={{
  //         scrollbarWidth:"none",
  //         scrollBehavior:"smooth"
  //       }}
  //     >
  //       {/* <div className='absolute h-[120px] w-screen bg-amber-10'>
  //         <NavBar/>
  //       </div> */}

  //       {/* <Repere/> */}
  //       {/* <motion.div className='   bg-green-100'
  //       initial={{ opacity: 0, scale:1.2 }}
  //       animate={{ opacity: 1, scale:1 }}
  //       transition={transition}
  //         style={{
  //           // width: width < 950 ? "100%":"100%",
  //           marginLeft: "80px",
  //           // marginRight: "80px",
  //           width:  width < 950 ?`calc(100% - 150px)`: '50%'
  //         }}
  //       >
  //         <div className='bg-amber-10 max-w-[883px] h-[275px] p-2.5 pl-0 inline' >
  //           <span
  //             style={{
  //               fontFamily:"Du'bai Bold",
  //               color:variable.primaire,
  //               // backgroundColor:"red",
  //               // width:"100%",
  //               fontSize:86,
  //               // fontWeight:"bold",
  //               lineHeight:0.9,
  //               height:255,
  //               letterSpacing:-0.32
  //             }}
  //           >Choisissez une eau pure, choisissez Diamco.</span>
  //         </div>
  //         <div  className='mt-10 bg-amber-30 w-full '
  //           style={{

  //           }}
  //         >
  //           <span
  //             style={{
  //               textAlign:"justify",
  //               fontFamily:"Lato",
  //               fontSize:27,
  //               lineHeight:0.9,
  //               height:120,
  //               letterSpacing:0,
  //               // backgroundColor:"red",
  //               color:"#0E3643",
  //               width:"100%000..0000000"
  //             }}
  //           >
  //             Découvrez l'expérience d'une eau véritablement saine. Notre technologie avancée élimine les impuretés
  //             pour que vous ne buviez que le meilleur.
  //           </span>
  //         </div>
  //         <div className='flex mt-5 bg-amber-30 w-full  items-center space-x-10'>
  //             <button className='' style={{backgroundColor:variable.secondaire, borderRadius:30, paddingTop:14, paddingBottom:14}}>Commandez un dispositif</button>
  //             <button className='flex items-center justify-center ' style={{backgroundColor:variable.white, borderColor:variable.secondaire, color:variable.secondaire, borderRadius:30}}><img src={Group} alt="" srcset="" /> <p >Visionnez une demo</p></button>
  //         </div>
  //         <div className='mt-5 '>
  //           <a href="" style={{scrollBehavior:"smooth", textDecoration: "underline", color: variable.secondaire }}>Decouvrez la solution</a>
  //         </div>
  //         <div className='mt-5 flex space-x-5 items-center justify-center gap-1'>
  //           <div>
  //             <p style={{color: variable.primaire }}>Avec le soutien de </p>
  //           </div>
  //           <div><img src={orange} alt="" /></div>
  //           <div><img src={eau} alt="" /></div>
  //           <div><img src={unicef} alt="" /></div>
  //           <div><img src={bio} alt="" /></div>
  //           <div><img src={agl} alt="" /></div>
  //           <div><img src={btp} alt="" /></div>
  //           <div><img src={odc} alt="" /></div>
  //         </div>
  //       </motion.div> */}

  //       {/* <motion.div className='bg-amber-100  h-screen   bg-no-repeat  '
  //       style={{
  //         backgroundImage: width >=950 ?`url(${back})`: "",
  //         //  objectFit: contain,
  //         // backgroundSize: width >=950 ? "contain" : "contain",
  //       }}
  //       initial={{ opacity: 0, scale:1.2 }}
  //       animate={{ opacity: 1, scale:1 }}
  //       transition={transition}
  //     >
  //     </motion.div> */}

  //   </div>

    // <div>
    //   {/* <Solution/> */}
    //   {/* <PourquoiDiamco/> */}
    //   <div>
    //   {/* <CommentCaMarche/> */}
    //   </div>
    //   {/* <AProposDeNous/> */}
    //   {/* <Nouveau/> */}
    //   {/* <ContactezNous/> */}
    //   {/* <Footer/> */}
    //   {/* <Etape/> */}
    // </div>