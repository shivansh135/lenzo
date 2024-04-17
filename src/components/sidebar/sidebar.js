import "./sidebar.css"

export const RightSideBar = ()=>{
    return(
        <div className="sideBar rightside">
        RightSideBar
        </div>
//         <div className="sideBar rightside">
//             <div className="toolBox">
//   <div className="segment parent" id="align">
//     <div className="title">Align</div>
//     <div className="flex">
//       <span className="material-symbols-outlined" onclick="aling('left')">
//         align_horizontal_left
//       </span>
//       <span className="material-symbols-outlined" onclick="aling('h_center')">
//         align_horizontal_center
//       </span>
//       <span className="material-symbols-outlined" onclick="aling('v_center')">
//         align_vertical_center
//       </span>
//       <span className="material-symbols-outlined" onclick="aling('right')">
//         align_horizontal_right
//       </span>
//       <span className="material-symbols-outlined" onclick="aling('bottom')">
//         align_vertical_bottom
//       </span>
//       <span className="material-symbols-outlined" onclick="aling('top')">
//         align_vertical_top
//       </span>
//     </div>
//   </div>
//   <div className="segment flex parent" id="page">
//     <div className="segment">
//       <div className="heading-cont">
//         <div className="title">Page</div>
//         <div className="button">&nbsp;</div>
//       </div>
//       <div className="color-cont" id="page-bg">
//         <input type="color" oninput="setColoraPage(this.parentElement,'col')" />
//         <input
//           type="text"
//           placeholder="#fffff"
//           oninput="setColoraPage(this.parentElement,'tex')"
//         />
//         <input
//           type="number"
//           min={0}
//           max={100}
//           defaultValue={100}
//           oninput="setColoraPage(this.parentElement,'alp')"
//         />
//       </div>
//     </div>
//     <div className="segment">
//       <div className="heading-cont">
//         <div className="title">Gradient</div>
//         <div
//           className="button"
//           id="add-grad"
//           onclick="
//                   if(iframe.contentWindow.txtDiv.getAttribute('isgradinet')){
//                       iframe.contentWindow.txtDiv.parentNode.removeChild(iframe.contentWindow.txtDiv);
//                       setTxtStyle(iframe.contentWindow.editingarea.querySelector('#bg'));
//                   }else{
//                       iframe.contentWindow.addGradint();
//                   }
//                   setTxtStyle();
//               "
//         >
//           -
//         </div>
//       </div>
//       <div className="color-cont" id="grad">
//         <input
//           type="color"
//           defaultValue="#000000"
//           oninput="setGradient(this.parentElement,'col')"
//         />
//         <input
//           type="text"
//           defaultValue="#000000"
//           oninput="setGradient(this.parentElement,'tex')"
//         />
//         <input
//           type="number"
//           defaultValue={30}
//           oninput="setGradient(this.parentElement)"
//         />
//       </div>
//     </div>
//   </div>
//   <div className="segment parent" id="basics">
//     <div className="flex">
//       <div className="icon-input">
//         <div className="icon">H</div>
//         <input type="number" oninput="setValue(this)" min={0} id="height" />
//       </div>
//       <div className="icon-input">
//         <div className="icon">W</div>
//         <input type="number" oninput="setValue(this)" min={0} id="width" />
//       </div>
//       <div className="icon-input">
//         <div className="icon">X</div>
//         <input type="number" oninput="setValue(this)" id="left" />
//       </div>
//       <div className="icon-input">
//         <div className="icon">Y</div>
//         <input type="number" oninput="setValue(this)" id="top" />
//       </div>
//     </div>
//     <div className="flex">
//       <div className="icon-input">
//         <span
//           className="material-symbols-outlined"
//           onclick="document.querySelector('#rotate').value = '0';setValue(document.querySelector('#rotate'),'deg')"
//         >
//           refresh
//         </span>
//         <input type="number" oninput="setValue(this,'deg')" id="rotate" />
//       </div>
//       <div className="icon-input">
//         <span
//           className="material-symbols-outlined"
//           onclick="document.querySelector('#borderRadius').value = '0';setValue(document.querySelector('#borderRadius'))"
//         >
//           rounded_corner
//         </span>
//         <input
//           type="number"
//           oninput="setValue(this)"
//           min={0}
//           id="borderRadius"
//         />
//       </div>
//       <div className="icon-input">
//         <span className="material-symbols-outlined">opacity</span>
//         <input
//           type="number"
//           oninput="setValue(this,'',100)"
//           min={0}
//           max={100}
//           id="opacity"
//         />
//       </div>
//       <div className="icon-input">
//         <span className="material-symbols-outlined">layers</span>
//         <input type="number" oninput="setValue(this,'')" id="zIndex" />
//       </div>
//     </div>
//   </div>
//   <div className="segment parent" id="text" style={{ display: "none" }}>
//     <div className="title">Text</div>
//     <div className="flex">
//       <select
//         style={{ width: 200 }}
//         id="fontFamily"
//         oninput="iframe.contentWindow.txtDiv.style.fontFamily = this.value"
//       >
//         <optgroup label="Serif">
//           <option
//             style={{ fontFamily: "serif_against_regular" }}
//             value="serif_against_regular"
//           >
//             against_regular
//           </option>
//           <option
//             style={{ fontFamily: "serif_Classyvogueregular" }}
//             value="serif_Classyvogueregular"
//           >
//             Classyvogueregular
//           </option>
//           <option
//             style={{ fontFamily: "serif_Gagisra_Rigade" }}
//             value="serif_Gagisra_Rigade"
//           >
//             Gagisra_Rigade
//           </option>
//           <option
//             style={{ fontFamily: "serif_galabiyah" }}
//             value="serif_galabiyah"
//           >
//             galabiyah
//           </option>
//           <option
//             style={{ fontFamily: "serif_Glitten_Regular" }}
//             value="serif_Glitten_Regular"
//           >
//             Glitten_Regular
//           </option>
//           <option
//             style={{ fontFamily: "serif_Nostalgia" }}
//             value="serif_Nostalgia"
//           >
//             Nostalgia
//           </option>
//           <option
//             style={{ fontFamily: "serif_Perandory" }}
//             value="serif_Perandory"
//           >
//             Perandory
//           </option>
//           <option
//             style={{ fontFamily: "serif_Stigfier" }}
//             value="serif_Stigfier"
//           >
//             Stigfier
//           </option>
//           <option style={{ fontFamily: "niagara" }} value="niagara">
//             niagara
//           </option>
//           <option style={{ fontFamily: "rafaella" }} value="rafaella">
//             rafaella
//           </option>
//           <option
//             style={{ fontFamily: "jeanne-moderno" }}
//             value="jeanne-moderno"
//           >
//             jeanne-moderno
//           </option>
//           <option style={{ fontFamily: "sybarite" }} value="sybarite">
//             sybarite
//           </option>
//           <option style={{ fontFamily: "lust-stencil" }} value="lust-stencil">
//             lust-stencil
//           </option>
//         </optgroup>
//         <optgroup label="San Serif">
//           <option
//             style={{ fontFamily: "san_serif_Antonio_Light" }}
//             value="san_serif_Antonio_Light"
//           >
//             Antonio_Light
//           </option>
//           <option
//             style={{ fontFamily: "san_serif_Raleway" }}
//             value="san_serif_Raleway"
//           >
//             Raleway
//           </option>
//           <option
//             style={{ fontFamily: "san_serif_VisbyRegular" }}
//             value="san_serif_VisbyRegular"
//           >
//             VisbyRegular
//           </option>
//           <option
//             style={{ fontFamily: "all-round-gothic" }}
//             value="all-round-gothic"
//           >
//             all-round-gothic
//           </option>
//           <option style={{ fontFamily: "articulat-cf" }} value="articulat-cf">
//             articulat-cf
//           </option>
//           <option style={{ fontFamily: "sonar-sans" }} value="sonar-sans">
//             sonar-sans
//           </option>
//           <option style={{ fontFamily: "proxima-nova" }} value="proxima-nova">
//             proxima-nova
//           </option>
//         </optgroup>
//         <optgroup label="Cursive">
//           <option style={{ fontFamily: "cursive_A1" }} value="cursive_A1">
//             cursive_A1
//           </option>
//           <option style={{ fontFamily: "cursive_A2" }} value="cursive_A2">
//             cursive_A2
//           </option>
//           <option style={{ fontFamily: "cursive_A3" }} value="cursive_A3">
//             cursive_A3
//           </option>
//           <option style={{ fontFamily: "cursive_A4" }} value="cursive_A4">
//             cursive_A4
//           </option>
//           <option
//             style={{ fontFamily: "cursive_Bastliga_One" }}
//             value="cursive_Bastliga_One"
//           >
//             Bastliga_One
//           </option>
//           <option
//             style={{ fontFamily: "cursive_Better_Saturday" }}
//             value="cursive_Better_Saturday"
//           >
//             Better_Saturday
//           </option>
//           <option
//             style={{ fontFamily: "cursive_Bordeaux" }}
//             value="cursive_Bordeaux"
//           >
//             Bordeaux
//           </option>
//           <option
//             style={{ fontFamily: "cursive_BrittanySignature" }}
//             value="cursive_BrittanySignature"
//           >
//             BrittanySignature
//           </option>
//           <option
//             style={{ fontFamily: "domlovesmary-addons" }}
//             value="domlovesmary-addons"
//           >
//             domlovesmary-addons
//           </option>
//           <option style={{ fontFamily: "memoriampro" }} value="memoriampro">
//             memoriampro
//           </option>
//           <option
//             style={{ fontFamily: "memoriam-headline-pro" }}
//             value="memoriam-headline-pro"
//           >
//             memoriam headline
//           </option>
//           <option
//             style={{ fontFamily: "memoriam-outline-pro" }}
//             value="memoriam-outline-pro"
//           >
//             memoriam outline
//           </option>
//           <option
//             style={{ fontFamily: "p22-allyson-pro" }}
//             value="p22-allyson-pro"
//           >
//             p22-allyson-pro
//           </option>
//           <option style={{ fontFamily: "texas-hero" }} value="texas-hero">
//             texas hero
//           </option>
//           <option
//             style={{ fontFamily: "monsieurladoulaise-pro" }}
//             value="monsieurladoulaise-pro"
//           >
//             monsieurladoulaise-pro
//           </option>
//           <option
//             style={{ fontFamily: "mrcanfields-pro" }}
//             value="mrcanfields-pro"
//           >
//             mrcanfields-pro
//           </option>
//           <option
//             style={{ fontFamily: "six-hands-chalk" }}
//             value="six-hands-chalk"
//           >
//             six-hands-chalk
//           </option>
//           <option style={{ fontFamily: "shabby-chic" }} value="shabby-chic">
//             shabby-chic
//           </option>
//           <option
//             style={{ fontFamily: "sweet-fancy-script" }}
//             value="sweet-fancy-script"
//           >
//             sweet-fancy-script
//           </option>
//           <option style={{ fontFamily: "parlare" }} value="parlare">
//             parlare
//           </option>
//           <option style={{ fontFamily: "erotica-big" }} value="erotica-big">
//             erotica-big
//           </option>
//           <option
//             style={{ fontFamily: "ballet-variable" }}
//             value="ballet-variable"
//           >
//             ballet-variable
//           </option>
//           <option style={{ fontFamily: "milonguita" }} value="milonguita">
//             milonguita
//           </option>
//           <option
//             style={{ fontFamily: "storefront-pro" }}
//             value="storefront-pro"
//           >
//             storefront-pro
//           </option>
//         </optgroup>
//         <optgroup label="Display">
//           <option style={{ fontFamily: "coolvetica" }} value="coolvetica">
//             coolvetica
//           </option>
//           <option style={{ fontFamily: "bd-colonius" }} value="bd-colonius">
//             bd-colonius
//           </option>
//           <option
//             style={{ fontFamily: "alternate-gothic-no-1-d" }}
//             value="alternate-gothic-no-1-d"
//           >
//             Alternate Gothic 1
//           </option>
//           <option
//             style={{ fontFamily: "alternate-gothic-no-2-d" }}
//             value="alternate-gothic-no-2-d"
//           >
//             Alternate Gothic 2
//           </option>
//           <option style={{ fontFamily: "anca" }} value="anca">
//             anca
//           </option>
//           <option style={{ fontFamily: "juniper-std" }} value="juniper-std">
//             juniper-std
//           </option>
//           <option style={{ fontFamily: "hwt-artz" }} value="hwt-artz">
//             hwt-artz
//           </option>
//           <option style={{ fontFamily: "blenny" }} value="blenny">
//             blenny
//           </option>
//           <option style={{ fontFamily: "brim-narrow" }} value="brim-narrow">
//             brim-narrow
//           </option>
//           <option style={{ fontFamily: "chantal" }} value="chantal">
//             chantal
//           </option>
//           <option style={{ fontFamily: "canto-brush" }} value="canto-brush">
//             canto-brush
//           </option>
//           <option style={{ fontFamily: "arboria" }} value="arboria">
//             arboria
//           </option>
//           <option
//             style={{ fontFamily: "roc-grotesk-condensed" }}
//             value="roc-grotesk-condensed"
//           >
//             roc-grotesk-condensed
//           </option>
//           <option
//             style={{ fontFamily: "roc-grotesk-extrawide" }}
//             value="roc-grotesk-extrawide"
//           >
//             roc-grotesk-extrawide
//           </option>
//           <option
//             style={{ fontFamily: "roc-grotesk-wide" }}
//             value="roc-grotesk-wide"
//           >
//             roc-grotesk-wide
//           </option>
//           <option
//             style={{ fontFamily: "louvette-banner" }}
//             value="louvette-banner"
//           >
//             louvette-banner
//           </option>
//           <option
//             style={{ fontFamily: "norman-stencil" }}
//             value="norman-stencil"
//           >
//             norman-stencil
//           </option>
//           <option
//             style={{ fontFamily: "norman-stencil-fat" }}
//             value="norman-stencil-fat"
//           >
//             norman-stencil-fat
//           </option>
//           <option
//             style={{ fontFamily: "ohno-casual-variable" }}
//             value="ohno-casual-variable"
//           >
//             ohno-casual-variable
//           </option>
//           <option style={{ fontFamily: "gigantic" }} value="gigantic">
//             gigantic
//           </option>
//           <option
//             style={{ fontFamily: "santelia-script" }}
//             value="santelia-script"
//           >
//             santelia-script
//           </option>
//           <option
//             style={{ fontFamily: "santelia-rough-two" }}
//             value="santelia-rough-two"
//           >
//             santelia-rough-two
//           </option>
//           <option style={{ fontFamily: "tt-globs" }} value="tt-globs">
//             tt-globs
//           </option>
//           <option style={{ fontFamily: "lone-pine" }} value="lone-pine">
//             lone-pine
//           </option>
//         </optgroup>
//       </select>
//       <div className="flex" style={{ maxWidth: 140 }}>
//         <span
//           className="material-symbols-outlined"
//           onclick="iframe.contentWindow.txtDiv.style.textAlign = 'left'"
//         >
//           format_align_left
//         </span>
//         <span
//           className="material-symbols-outlined"
//           onclick="iframe.contentWindow.txtDiv.style.textAlign = 'center'"
//         >
//           format_align_center
//         </span>
//         <span
//           className="material-symbols-outlined"
//           onclick="iframe.contentWindow.txtDiv.style.textAlign = 'right'"
//         >
//           format_align_right
//         </span>
//         <span
//           className="material-symbols-outlined"
//           onclick="iframe.contentWindow.txtDiv.style.textAlign = 'justify'"
//         >
//           format_align_justify
//         </span>
//       </div>
//     </div>
//     <div className="flex">
//       <select
//         id="fontWeight"
//         value="normal"
//         oninput="iframe.contentWindow.txtDiv.style.fontWeight = this.value;"
//       >
//         <option value={100}>Thin</option>
//         <option value={200}>Extra light</option>
//         <option value={300}>Light</option>
//         <option value={400}>Regular</option>
//         <option value={500}>Medium</option>
//         <option value={600}>Semi bold</option>
//         <option value={700}>Bold</option>
//         <option value={800}>Extra bold</option>
//       </select>
//       <div className="icon-input">
//         <span className="material-symbols-outlined">text_fields</span>
//         <input type="number" id="fontSize" min={1} oninput="setValue(this)" />
//       </div>
//       <div className="flex" style={{ maxWidth: 140 }}>
//         <div
//           className="icon"
//           onclick="iframe.contentWindow.txtDiv.style.textTransform = 'none'"
//         >
//           -
//         </div>
//         <div
//           className="icon"
//           onclick="iframe.contentWindow.txtDiv.style.textTransform = 'lowercase'"
//         >
//           ag
//         </div>
//         <div
//           className="icon"
//           onclick="iframe.contentWindow.txtDiv.style.textTransform = 'capitalize'"
//         >
//           Ag
//         </div>
//         <div
//           className="icon"
//           onclick="iframe.contentWindow.txtDiv.style.textTransform = 'uppercase'"
//         >
//           AG
//         </div>
//       </div>
//     </div>
//     <div className="flex" style={{ gap: 15 }}>
//       <div className="color-cont" id="color">
//         <input type="color" oninput="setColor(this.parentElement,'col')" />
//         <input
//           type="text"
//           placeholder="fffff"
//           oninput="setColor(this.parentElement,'tex')"
//         />
//         <input
//           type="number"
//           min={0}
//           max={100}
//           oninput="setColor(this.parentElement,'alp')"
//         />
//       </div>
//       <div className="flex" style={{ width: 100, gap: 5 }}>
//         <span
//           className="material-symbols-outlined"
//           onclick="
//                   if(iframe.contentWindow.txtDiv.style.fontStyle=='normal' || iframe.contentWindow.txtDiv.style.fontStyle == ''){
//                       iframe.contentWindow.txtDiv.style.fontStyle='italic'
//                   }else{
//                       iframe.contentWindow.txtDiv.style.fontStyle='normal'
//                   }"
//         >
//           format_italic
//         </span>
//         <span
//           className="material-symbols-outlined"
//           onclick="
//                   if (iframe.contentWindow.txtDiv.style.textDecoration === 'none' || iframe.contentWindow.txtDiv.style.textDecoration === '') {
//                       iframe.contentWindow.txtDiv.style.textDecoration = 'underline';
//                   } else {
//                       iframe.contentWindow.txtDiv.style.textDecoration = 'none';
//                   }
//               "
//         >
//           format_underlined
//         </span>
//       </div>
//       <div className="flex" style={{ width: 140 }}>
//         <div className="icon-input">
//           <span
//             className="material-symbols-outlined"
//             onclick="iframe.contentWindow.txtDiv.style.lineHeight = 'normal';setTextValues(iframe.contentWindow.txtDiv)"
//           >
//             format_line_spacing
//           </span>
//           <input
//             type="number"
//             id="lineHeight"
//             placeholder="Auto"
//             oninput="setValue(this)"
//           />
//         </div>
//         <div className="icon-input">
//           <span
//             className="material-symbols-outlined"
//             onclick="iframe.contentWindow.txtDiv.style.letterSpacing = 'normal';setTextValues(iframe.contentWindow.txtDiv)"
//           >
//             format_letter_spacing
//           </span>
//           <input
//             type="number"
//             id="letterSpacing"
//             placeholder="Auto"
//             oninput="setValue(this)"
//           />
//         </div>
//       </div>
//     </div>
//     <div className="heading-cont">
//       <div className="title">Shadow</div>
//       <div
//         className="button"
//         id="add-shadow"
//         onclick="
//           if(iframe.contentWindow.txtDiv.style.textShadow){
//               iframe.contentWindow.txtDiv.style.textShadow='';
//           }
//           else{
//               iframe.contentWindow.txtDiv.style.textShadow='5px 5px 5px #000000'
//           };setTxtStyle()"
//       >
//         +
//       </div>
//     </div>
//     <div className="segment" id="shadow-cont" style={{ maxWidth: "100%" }}>
//       <div className="flex" style={{ gap: 10 }}>
//         <div className="color-cont">
//           <input
//             type="color"
//             id="font-shadow-color"
//             oninput="document.querySelector('#font-shadow-color-text').value=this.value;setTextShadow()"
//           />
//           <input
//             id="font-shadow-color-text"
//             type="text"
//             defaultValue="fffff"
//             oninput="document.querySelector('#font-shadow-color').value=this.value;setTextShadow()"
//           />
//           <input
//             type="number"
//             id="font-shadow-color-alpha"
//             min={0}
//             max={100}
//             oninput="setTextShadow()"
//           />
//         </div>
//         <div className="flex">
//           <div className="icon-input">
//             <div className="icon">X</div>
//             <input
//               type="number"
//               id="font-shadow-left"
//               oninput="setTextShadow()"
//             />
//           </div>
//           <div className="icon-input">
//             <div className="icon">Y</div>
//             <input
//               type="number"
//               id="font-shadow-top"
//               oninput="setTextShadow()"
//             />
//           </div>
//           <span className="material-symbols-outlined">opacity</span>
//           <input
//             type="number"
//             id="font-shadow-blur"
//             min={0}
//             max={20}
//             oninput="setTextShadow()"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="segment flex parent" id="fill-quick">
//     <div className="segment">
//       <div className="heading-cont">
//         <div className="title">Fill</div>
//         <div
//           className="button"
//           id="add-fill"
//           onclick="if(iframe.contentWindow.txtDiv.style.backgroundColor!='transparent'){iframe.contentWindow.txtDiv.style.backgroundColor='transparent';}else{iframe.contentWindow.txtDiv.style.backgroundColor='#ffffff'};setTxtStyle()"
//         ></div>
//       </div>
//       <div className="color-cont" id="backgroundColor">
//         <input type="color" oninput="setColor(this.parentElement,'col')" />
//         <input
//           type="text"
//           placeholder="fffff"
//           oninput="setColor(this.parentElement,'tex')"
//         />
//         <input
//           type="number"
//           min={0}
//           max={100}
//           defaultValue={100}
//           oninput="setColor(this.parentElement,'alp')"
//         />
//       </div>
//     </div>
//     <div className="segment">
//       <div className="heading-cont">
//         <div className="title">Quick Actions</div>
//       </div>
//       <div className="flex" style={{ marginTop: 16 }}>
//         <span
//           className="material-symbols-outlined"
//           onclick="iframe.contentWindow.alingItemsX()"
//         >
//           horizontal_distribute
//         </span>
//         <span
//           className="material-symbols-outlined"
//           onclick="iframe.contentWindow.alignItemsY()"
//         >
//           vertical_distribute
//         </span>
//         <span
//           className="material-symbols-outlined"
//           onclick="iframe.contentWindow.outline()"
//         >
//           capture
//         </span>
//         <span
//           className="material-symbols-outlined"
//           onclick="iframe.contentWindow.inline()"
//         >
//           filter_frames
//         </span>
//       </div>
//     </div>
//   </div>
//   <div className="segment parent" id="padding-cont">
//     <div className="title">Padding</div>
//     <div className="flex">
//       <div className="icon-input">
//         <div className="icon">A</div>
//         <input
//           type="number"
//           min={0}
//           id="padding"
//           oninput="setValue(this);setPadding(iframe.contentWindow.txtDiv)"
//         />
//       </div>
//       <div className="icon-input">
//         <div className="icon">R</div>
//         <input
//           type="number"
//           min={0}
//           id="paddingRight"
//           oninput="setValue(this);setPadding(iframe.contentWindow.txtDiv)"
//         />
//       </div>
//       <div className="icon-input">
//         <div className="icon">L</div>
//         <input
//           type="number"
//           min={0}
//           id="paddingLeft"
//           oninput="setValue(this);setPadding(iframe.contentWindow.txtDiv)"
//         />
//       </div>
//       <div className="icon-input">
//         <div className="icon">U</div>
//         <input
//           type="number"
//           min={0}
//           id="paddingTop"
//           oninput="setValue(this);setPadding(iframe.contentWindow.txtDiv)"
//         />
//       </div>
//       <div className="icon-input">
//         <div className="icon">D</div>
//         <input
//           type="number"
//           min={0}
//           id="paddingBottom"
//           oninput="setValue(this);setPadding(iframe.contentWindow.txtDiv)"
//         />
//       </div>
//     </div>
//   </div>
//   <div className="segment parent" id="stroke">
//     <div className="heading-cont">
//       <div className="title">Stroke</div>
//       <div
//         className="button"
//         id="strokeToggle"
//         onclick="toggleStroke(iframe.contentWindow.txtDiv)"
//       >
//         +
//       </div>
//     </div>
//     <div className="segment" id="stroke-cont" style={{ maxWidth: "100%" }}>
//       <div className="flex" style={{ gap: 30 }}>
//         <div className="color-cont" id="borderColor">
//           <input type="color" oninput="setColor(this.parentElement,'col')" />
//           <input
//             type="text"
//             placeholder="fffff"
//             oninput="setColor(this.parentElement,'tex')"
//           />
//           <input
//             type="number"
//             min={0}
//             max={100}
//             defaultValue={100}
//             oninput="setColor(this.parentElement,'alp')"
//           />
//         </div>
//         <select
//           id="borderStyle"
//           oninput="iframe.contentWindow.txtDiv.style.borderStyle = this.value"
//         >
//           <option value="solid">Solid</option>
//           <option value="dotted">Dotted</option>
//           <option value="dashed">Dashed</option>
//           <option value="double">Double</option>
//         </select>
//         <div className="icon-input">
//           <span className="material-symbols-outlined">line_weight</span>
//           <input
//             type="number"
//             min={0}
//             id="borderWidth"
//             oninput="setValue(this)"
//           />
//         </div>
//       </div>
//       <div className="flex" id="strokeSides">
//         <div className="title">Edges : </div>
//         <span
//           className="material-symbols-outlined"
//           id="_all"
//           onclick="toggleStrokeSides('borderWidth')"
//         >
//           border_outer
//         </span>
//         <span
//           className="material-symbols-outlined"
//           id="_top"
//           onclick="toggleStrokeSides('borderTopWidth')"
//         >
//           border_top
//         </span>
//         <span
//           className="material-symbols-outlined"
//           id="_right"
//           onclick="toggleStrokeSides('borderRightWidth')"
//         >
//           border_right
//         </span>
//         <span
//           className="material-symbols-outlined"
//           id="_bottom"
//           onclick="toggleStrokeSides('borderBottomWidth')"
//         >
//           border_bottom
//         </span>
//         <span
//           className="material-symbols-outlined"
//           id="_left"
//           onclick="toggleStrokeSides('borderLeftWidth')"
//         >
//           border_left
//         </span>
//       </div>
//     </div>
//   </div>
//   <div className="segment parent" id="pallet">
//     <div className="title">Auto Genrated Palette</div>
//     <div className="flex" id="ColorPallet"></div>
//     <div className="flex">
//       <div className="color-cont">
//         <input
//           type="color"
//           id="extra-color"
//           oninput="document.querySelector('#extra-color-text').value=this.value"
//         />
//         <input
//           id="extra-color-text"
//           type="text"
//           defaultValue="fffff"
//           oninput="document.querySelector('#extra-color').value=this.value"
//         />
//         <div
//           className="title"
//           onclick="addColorToPallet()"
//           style={{ cursor: "pointer" }}
//         >
//           Add+
//         </div>
//       </div>
//       <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
//         <input id="Backdround" type="checkbox" />
//         <label htmlFor="Backdround" className="title">
//           Background
//         </label>
//       </div>
//     </div>
//     <div></div>
//   </div>
//   <div className="segment parent">
//     <div className="title">Add</div>
//     <div className="flex">
//       <span
//         className="material-symbols-outlined"
//         onclick="iframe.contentWindow.addHeading()"
//       >
//         insert_text
//       </span>
//       <span
//         className="material-symbols-outlined"
//         onclick="iframe.contentWindow.addLine()"
//       >
//         line_end
//       </span>
//       <span
//         style={{ transform: "rotate(-90deg)" }}
//         className="material-symbols-outlined"
//         onclick="iframe.contentWindow.addLine('borderLeftWidth')"
//       >
//         line_end
//       </span>
//       <span
//         className="material-symbols-outlined"
//         onclick="iframe.contentWindow.addEle()"
//       >
//         add_box
//       </span>
//       <span
//         className="material-symbols-outlined"
//         onclick="iframe.contentWindow.addImg()"
//       >
//         add_photo_alternate
//       </span>
//     </div>
//   </div>
//   <div className="segment" style={{ height: 70 }} />
// </div>

//         </div>
    )
}

export const LeftSideBar = ({children})=>{
    return(
        <div className="sideBar leftside">
            LeftSideBar
            {children}
        </div>
    )
}