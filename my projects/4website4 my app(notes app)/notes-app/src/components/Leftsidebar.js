import React,{useState} from 'react'
import './Leftsidebar.css'
import $ from 'jquery'
export default function Leftsidebar() {
  // find and replace starts 
   const findAndReplace = () => {
      let containClickableElements = document.getElementById("containClickableElements");
      let findAndReplaceDiv = document.getElementById("findAndReplaceDiv");
      let findAndReplace=document.getElementById("findAndReplace")
      if (Array.from(containClickableElements.classList).length === 0) {
         containClickableElements.classList.add("containClickableElements");
         findAndReplaceDiv.classList.add("showFindAndReplaceDiv");
         findAndReplace.style.backgroundColor="#295129"
      }
      else {
         containClickableElements.classList.remove("containClickableElements");
         findAndReplaceDiv.classList.remove("showFindAndReplaceDiv");
         findAndReplace.backgroundColor="green";
      }
   }
   function toggleArrow() {
      console.log("arrow toggle ")
      let openerOfReplace = document.getElementById("openerOfReplace");
      let replaceDiv = document.getElementById("replaceDiv");
      if ((Array.from(openerOfReplace.classList)).includes("arrowDown")) {
         openerOfReplace.classList.remove("arrowDown");
         openerOfReplace.classList.add("arrowUp");
         replaceDiv.classList.add("showReplaceDiv");
      }
      else {
         openerOfReplace.classList.remove("arrowUp");
         openerOfReplace.classList.add("arrowDown");
         replaceDiv.classList.remove("showReplaceDiv");
      }
   }
   const closeFindAndReplace = () => {
      let findAndReplaceDiv = document.getElementById("findAndReplaceDiv");
      findAndReplaceDiv.classList.remove("showFindAndReplaceDiv");
      let containClickableElements = document.getElementById("containClickableElements");
      containClickableElements.classList.remove("containClickableElements")
      let findAndReplace=document.getElementById("findAndReplace");
      findAndReplace.style.backgroundColor="green";
   }
   $(function(){
      $("#findTextDiv").on("click",function(){
         let findVal=$("#findInput").val();
         $("#textArea").html( 
           $("#textArea").html().replaceAll(findVal,`<span style={{background-color:green;color:white;">${findVal}</span>`)
         );
         setTimeout(function(){
            $("#textArea").html( 
               $("#textArea").html().replaceAll(`<span style={{background-color:green;color:white;">${findVal}</span>`,`<span>${findVal}</span>`)
            )
         },2000)
       })
       $("#replaceTextDiv").on("click",function(){
            let replaceVal=$("#replaceInput").val();
            let containerSpans=$("#textArea").children()
            containerSpans.replaceWith(`<span style={{background-color:gray;color:white;">${replaceVal}</span>`)
            setTimeout(function(){
               $("#textArea").html( 
                  $("#textArea").html().replaceAll(`<span style={{background-color:gray;color:white;">${replaceVal}</span>`,replaceVal)
               )
            },3000)
      })
   })
   // find and replace ends 
   const toUpperLowerToggle=()=>{
      let textArea=document.getElementById("textArea")
      // let upperAndLowerCaseBtn=document.getElementById("upperAndLowerCaseBtn");
      if(textArea.innerText!==textArea.innerText.toUpperCase()){
         textArea.innerText=textArea.innerText.toUpperCase()
         // setUpBtnText("lowercase")
         // upperAndLowerCaseBtn.style.backgroundColor="#295129";
      }
      else{
         textArea.innerText=textArea.innerText.toLowerCase()
         // setUpBtnText("uppercase")
         // upperAndLowerCaseBtn.style.backgroundColor="green";
      }
   }
   const handleCopy=()=>{
      let textArea=document.getElementById("textArea")
      let textAreaText=textArea.innerText;
      let copyTextButton=document.getElementById("copyTextButton")
      // console.log(textAreaText)
      navigator.clipboard.writeText(textAreaText);
      // setCopyBtnText("copied!")
      copyTextButton.style.backgroundColor="#295129"
      setTimeout(function(){
        copyTextButton.style.backgroundColor="gray"
      },1000)
   }
   const handleClear=()=>{
      let textArea=document.getElementById("textArea")
      let clearTextButton=document.getElementById("clearTextButton");
      textArea.innerText=null
      // setClearBtnText("Cleared!")
      clearTextButton.style.backgroundColor="#295129"
      setTimeout(function(){
         //  setClearBtnText("clear")
          clearTextButton.style.backgroundColor="gray"
      },500)
   }
   const handleRemoveExtraSpaces=()=>{
      let textArea=document.getElementById("textArea")
      let textAreaText=textArea.innerText;
      let removeExtraSpacesBtn=document.getElementById("removeExtraSpacesBtn");
      textArea.innerText=textAreaText.replace(/\s+/g," ").trim()
      removeExtraSpacesBtn.style.backgroundColor="#295129";
      setTimeout(function(){
          removeExtraSpacesBtn.style.backgroundColor="gray"; 
      },1000)
   }
   const handleFontSize=(e)=>{
         let input = e.target;
         let inputVal = input.value;
         let list = input.getAttribute("list");
         console.log(list)
         let options = document.getElementById(list).childNodes;
         for (var i = 0; i < options.length; i++) {
               let textArea=document.getElementById("textArea");
               textArea.style.fontSize=`${inputVal}px`;
               break;
         }
   }
   const handleFontFamilies=()=>{
         let selectTag=document.getElementById("fontFamilies")
         let selectedOptionVal=selectTag.options[selectTag.selectedIndex].value
         document.getElementById("textArea").style.fontFamily=selectedOptionVal;
   }
   const boldToggleFunction=()=>{
      let textArea=document.getElementById("textArea");
      let boldBtnDiv=document.getElementById("boldBtn");
      if(textArea.style.fontWeight===""){
         textArea.style.fontWeight="bold";
         boldBtnDiv.style.backgroundColor="#295129"
      }
      else{
         textArea.style.fontWeight="";
         boldBtnDiv.style.backgroundColor="gray"
      }   
   }
   const italicToggleFunction=()=>{
      let textArea=document.getElementById("textArea");
      let italicBtnDiv=document.getElementById("italicBtn");
      if(textArea.style.fontStyle===""){
         textArea.style.font="italic";
         italicBtnDiv.style.backgroundColor="#295129"
      }
      else{
         textArea.style.fontstyle="";
         italicBtnDiv.style.backgroundColor="green"
      }
   }
   const underlineButtonToggleFunction=()=>{
          let selection=window.getSelection();
          let textArea=document.getElementById("textArea");
          let textAreaText=textArea.innerText;
          let underlineBtn=document.getElementById("underlineBtn");
      if(!textArea.innerHTML.includes(`<span style="text-decoration:underline;">`)){
         if(selection.anchorNode!=null){
            if(selection.anchorNode.parentElement.id==="textArea"){
               var selectionContents=window.getSelection().toString();
               console.log("slected text of div:",selectionContents)
               let regex=new RegExp(`${selectionContents}`,"g")
               textArea.innerHTML=textAreaText.replace(regex,`<span style="text-decoration:underline;">${selectionContents}</span>`)
               underlineBtn.style.backgroundColor="#295129";
            }
            else{
                console.log("pls select something")
            }
         }
         else{
            console.log("no text entered bro");
         }
      }
      else{
            console.log("remove underline")
            textArea.innerHTML=textAreaText.replace(`<span style="text-decoration:underline;">${selectionContents}</span>`,selectionContents)
            underlineBtn.style.backgroundColor="green";
          }
      }
   const linethroughToggleFunction = () => {
      let selection = window.getSelection();
      let textArea = document.getElementById("textArea");
      let textAreaText = textArea.innerText;
      let lineThroughBtn=document.getElementById("lineThroughBtn");
      if (!textArea.innerHTML.includes(`<span style="text-decoration:line-through;">`)){
         if (selection.anchorNode != null) {
            if (selection.anchorNode.parentElement.id === "textArea") {
               var selectionContents = window.getSelection().toString();
               console.log("slected text of div:", selectionContents)
               let regex = new RegExp(`${selectionContents}`, "g")
               textArea.innerHTML = textAreaText.replace(regex,`<span style="text-decoration:line-through;">${selectionContents}</span>`)
               lineThroughBtn.style.backgroundColor="#295129";
            }
            else {
               console.log("pls select something")
            }
         }
         else {
            console.log("no text entered bro");
         }
      }
      else {
         console.log("remove line through")
         textArea.innerHTML = textAreaText.replace(`<span style="text-decoration:line-through;">${selectionContents}</span>`,selectionContents)
         lineThroughBtn.style.backgroundColor="green";
      }
   }
   const powerToggleFunction=()=>{
      let selection = window.getSelection();
      let textArea = document.getElementById("textArea");
      let textAreaText = textArea.innerText;
      let powerBtn=document.getElementById("powerBtn");
      if (!textArea.innerHTML.includes(`<span style="vertical-align: super;font-size:10px">`)){
         if (selection.anchorNode != null) {
            if (selection.anchorNode.parentElement.id === "textArea") {
               var selectionContents = window.getSelection().toString();
               console.log("slected text of div:", selectionContents)
               let regex = new RegExp(`${selectionContents}`,"g")
               textArea.innerHTML = textAreaText.replace(regex,`<span style="vertical-align: super;font-size:10px;">${selectionContents}</span>`)
               powerBtn.style.backgroundColor="#295129";
            }
            else {
               console.log("pls select something")
            }
         }
         else {
            console.log("no text entered bro");
         }
      }
      else {
         console.log("remove power")
         textArea.innerHTML = textAreaText.replace(`<span style="vertical-align: super;font-size:10px">${selectionContents}</span>`,selectionContents)
         powerBtn.style.backgroundColor="green";
      }
   }
   const baseToggleFunction=()=>{
      let selection = window.getSelection();
      let textArea = document.getElementById("textArea");
      let textAreaText = textArea.innerText;
      let baseBtn=document.getElementById("baseBtn");
      if (!textArea.innerHTML.includes(`<span style="vertical-align: sub;font-size:10px">`)){
         if (selection.anchorNode != null) {
            if (selection.anchorNode.parentElement.id === "textArea") {
               var selectionContents = window.getSelection().toString();
               console.log("slected text of div:", selectionContents)
               let regex = new RegExp(`${selectionContents}`,"g")
               textArea.innerHTML = textAreaText.replace(regex,`<span style="vertical-align: sub;font-size:10px;">${selectionContents}</span>`)
               baseBtn.style.backgroundColor="#295129";
            }
            else {
               console.log("pls select something")
            }
         }
         else {
            console.log("no text entered bro");
         }
      }
      else {
         console.log("remove power")
         textArea.innerHTML = textAreaText.replace(`<span style={{vertical-align: sub;font-size:10px">${selectionContents}</span>`,selectionContents)
         baseBtn.style.backgroundColor="green";
      }
   } 
   let alignTextLeftBtn=document.getElementById("alignTextLeftBtn");
   let alignTextCenterBtn=document.getElementById("alignTextCenterBtn");
   let alignTextRightBtn=document.getElementById("alignTextRightBtn");
   const alignTextLeftBtnToggle=()=>{
      let textArea=document.getElementById("textArea");
      if(textArea.style.textAlign===""||"center"||"right"){
         textArea.style.textAlign="left"
         alignTextLeftBtn.style.backgroundColor="#295129"
         alignTextCenterBtn.style.backgroundColor="gray"
         alignTextRightBtn.style.backgroundColor="gray"
      }
      else{
         textArea.style.textAlign="" 
         // alignTextLeftBtn.style.backgroundColor="gray"
         // alignTextCenterBtn.style.backgroundColor="gray"
         // alignTextRightBtn.style.backgroundColor="gray"
      }
   }
   const alignTextCenterBtnToggle=()=>{
      let textArea=document.getElementById("textArea");
      if(textArea.style.textAlign===""||"left"||"right"){
         textArea.style.textAlign="center"
         alignTextLeftBtn.style.backgroundColor="gray"
         alignTextCenterBtn.style.backgroundColor="#295129"
         alignTextRightBtn.style.backgroundColor="gray"
      }
      else{
         textArea.style.textAlign=""
         // alignTextLeftBtn.style.backgroundColor="gray"
         // alignTextCenterBtn.style.backgroundColor="gray"
         // alignTextRightBtn.style.backgroundColor="gray"
      }
   }
   const alignTextRightBtnToggle=()=>{
      let textArea=document.getElementById("textArea");
      if(textArea.style.textAlign===""||"left"||"center"){
         textArea.style.textAlign="right"
         alignTextLeftBtn.style.backgroundColor="gray"
         alignTextCenterBtn.style.backgroundColor="gray"
         alignTextRightBtn.style.backgroundColor="#295129"
      }
      else{
         textArea.style.textAlign="" 
         // alignTextLeftBtn.style.backgroundColor="gray"
         // alignTextCenterBtn.style.backgroundColor="gray"
         // alignTextRightBtn.style.backgroundColor="gray"
      }
   }
   const textColorFunction=()=>{
         let textArea=document.getElementById("textArea");
         let colorInput=document.getElementById("colorInput");
         textArea.style.color=colorInput.value;
   }
   // const toggleEffectsOptionsDropdown=()=>{
   //    let textEffectsOptionsDiv=document.getElementById("textEffectsOptionsDiv");
   //    if(textEffectsOptionsDiv.style.display==="none"){
   //       textEffectsOptionsDiv.style.display="flex";
   //    }
   //    else{
   //       textEffectsOptionsDiv.style.display="none";
   //    }
   // }

   // create Note  
   function toast() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   }
   const [title,setTitle]=useState("");
   
   const createNote=()=>{
      const textDesc=document.getElementById("textArea").innerText;
      const arr=[];
      const noteObj={title:title,description:textDesc}
      if(localStorage.getItem("tempNote")===null || localStorage.getItem("tempNote")===""){
         arr.push(noteObj);
         localStorage.setItem("tempNote",JSON.stringify(arr));
         toast()
      }
      else{
         const localArr=JSON.parse(localStorage.getItem("tempNote"));
         localArr.push(noteObj);
         localStorage.setItem("tempNote",JSON.stringify(localArr));
         console.log(localArr);
         toast();
      } 
   }

   // const [upBtnText,setUpBtnText]=useState("uppercase");
   // const [copyBtnText,setCopyBtnText]=useState("copy");
   // const [clearBtnText,setClearBtnText]=useState("clear")
   return (
      <div className='leftSideBar'>
         <div id="containClickableElements">
               <div className="findAndReplaceDiv" id="findAndReplaceDiv">
                  <div className="findDiv" id="findDiv">
                     <div className="openerOfReplace arrowDown" id="openerOfReplace" onClick={toggleArrow}></div>
                     <div className="findInputAndTextDiv" id="findInputAndTextDiv" >
                        <div className="findInputDiv"><input type="text" id="findInput" className="findInput" placeholder='Find' /></div>
                        <div className="findTextDiv" id='findTextDiv'>Find</div>
                     </div>
                     <div className="closeIconFindAndReplaceDiv" id="closeIconFindAndReplaceDiv" onClick={closeFindAndReplace}></div>
                  </div>
                  <div className="replaceDiv" id="replaceDiv">
                     <div className="replaceInputDiv"><input type="text" id="replaceInput" className="replaceInput" placeholder='Replace' /></div>
                     <div className="replaceTextDiv" id="replaceTextDiv">Replace</div>
                  </div>
               </div>
         </div>
         <div className='leftSideBarContentDiv'>
            <div className="createNoteHeading">Create Note</div>
            <div className="textAreaDiv">
               <div className="titleDiv"><input type="text" placeholder='Add Title Here' onInput={(e)=>{setTitle(e.target.value)}}/></div>
               <div contentEditable="true" id='textArea' style={{fontFamily:"Calibri"}} placeholder="Add Note Description "></div>
            </div>
            <div className="allButtonsDiv" id="allButtonsDiv">
               {/* {upBtnText} */}
               {/* {copyBtnText} */}
               {/* {clearBtnText} */}
               <div className="Btns upperAndLowerCaseBtn" id="upperAndLowerCaseBtn" onClick={toUpperLowerToggle}><img src="./images/upper.png" alt="" /></div>
               <div className="Btns removeExtraSpacesBtn" id="removeExtraSpacesBtn" onClick={handleRemoveExtraSpaces}>Remove Spaces</div>
               <div className="Btns copyTextButton" id="copyTextButton" onClick={handleCopy}><img src="./images/copy.png" alt="" /></div>
               <div className="Btns clearTextButton" id="clearTextButton" onClick={handleClear}><img src="./images/clear.png" alt="" /></div>
               <div className="Btns findAndReplace" id="findAndReplace" onClick={findAndReplace}><img src="./images/fandr.png" alt="" /></div>
               <div id="boldBtnDiv"><button id="boldBtn" onClick={boldToggleFunction} className='Btns'><img src="./images/bold.png" alt="" /></button></div> 
               <div id="italicBtnDiv"><button id="italicBtn" onClick={italicToggleFunction} className='Btns'><img src="./images/italic.png" alt="" /></button></div> 
               <div id="underlineBtnDiv"><button id="underlineBtn" onClick={underlineButtonToggleFunction} className='Btns'><img src="./images/underline.png" alt="" /></button></div> 
               <div id="lineThroughBtnDiv"><button id="lineThroughBtn" onClick={linethroughToggleFunction} className='Btns'><img src="./images/linethrough.png" alt="" /></button></div> 
               <div id="powerBtnDiv"><button id="powerBtn" onClick={powerToggleFunction} className='Btns'><img src="./images/power.png" alt="" /></button></div> 
               <div id="baseBtnDiv"><button id="baseBtn" onClick={baseToggleFunction} className='Btns'><img src="./images/base.png" alt="" /></button></div> 
               <div id="alignTextLeftBtnDiv"><button id="alignTextLeftBtn" onClick={alignTextLeftBtnToggle} className='Btns'><img src="./images/leftalign.png" alt="" /></button></div> 
               <div id="alignTextCenterBtnDiv"><button id="alignTextCenterBtn" onClick={alignTextCenterBtnToggle} className='Btns'><img src="./images/centeralign.png" alt="" /></button></div> 
               <div id="alignTextRightBtnDiv"><button id="alignTextRightBtn" onClick={alignTextRightBtnToggle} className='Btns'><img src="./images/rightalign.png" alt="" /></button></div> 
               <div className="Btns">
                     <input type="color" id='colorInput' onChange={textColorFunction}/>
               </div>
               <div className="fontSizeInputAndTextDiv Btns">
                  {/* <div className="fontSizeText">Font Size :</div> */}
                  <div className="fontSizeInputDiv">
                     <input list="fontSizes" className='Btns' defaultValue="16" max="56" onInput={handleFontSize} name="fontSizes" id="fontSizeInput" />
                     <datalist id="fontSizes">
                        <option value="5">5</option>
                        <option value="5.5">5.5</option>
                        <option value="6.5">6.5</option>
                        <option value="7.5">7.5</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="10.5">10.5</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="26">26</option>
                        <option value="28">28</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                     </datalist>
                  </div>
               </div>
               <div className="fontFamilyDiv Btns">
                  {/* <div className="fontFamilyText">Font Family:</div> */}
                  <div className='fontFamilyOptionsDiv'>
                     <select id="fontFamilies" onChange={handleFontFamilies}>
                     {/* <!-- <option disabled value="Sans Serif" style={{background-color: aqua;">Sans Serif</option> --> */}
                     <option value={"Helvetica"} style={{fontFamily:"Helvetica"}}>Helvetica</option>
                     <option value={"Verdana"} style={{fontFamily:"Verdana"}}>Verdana</option>
                     <option value={"Lucida Sans"} style={{fontFamily:"Lucida Sans"}}>Lucida Sans</option>
                     <option value={"Century Gothic"} style={{fontFamily:"Century Gothic"}}>Century Gothic</option>
                     <option value={"Candara"} style={{fontFamily:"Candara"}}>Candara</option>
                     <option value={"Futara"} style={{fontFamily:"Futara"}}>Futara</option>
                     <option value={"Franklin Gothic Medium"} style={{fontFamily:"Franklin Gothic Medium"}}>Franklin Gothic Medium</option>
                     <option value={"Geneva"} style={{fontFamily:"Geneva"}}>Geneva</option>
                     <option value={"Segoe UI"} style={{fontFamily:"Segoe UI"}}>Segoe UI</option>
                     {/* <!-- <opti{n disabled value="Serif" style={{background-color: aqua"}}>Serif</optin> --> */}
                     <option value={"Times New Roman"} style={{fontFamily:"Times New Roman"}}>Times New Roman</option>
                     <option value={"Bodoni MT"} style={{fontFamily:"Bodoni MT"}}>Bodoni MT</option>
                     <option value={"Book Antiqua"} style={{fontFamily:"Book Antiqua"}}>Book Antiqua</option>
                     <option value={"Bookman"} style={{fontFamily:"Bookman"}}>Bookman</option>
                     <option value={"Calisto MT"} style={{fontFamily:"Calisto MT"}}>Calisto MT</option>
                     <option value={"Cambria"} style={{fontFamily:"Cambria"}}>Cambria</option>
                     <option value={"Garamond"} style={{fontFamily:"Garamond"}}>Garamond</option>
                     <option value={"Georgia"} style={{fontFamily:"Georgia"}}>Georgia</option>
                     <option value={"Goudy Old Style"} style={{fontFamily:"Goudy Old Style"}}>Goudy Old Style</option>
                     <option value={"Hoefler Text"} style={{fontFamily:"Hoefler Text"}}>Hoefler Text</option>
                     <option value={"Lucida Bright"} style={{fontFamily:"Lucida Bright"}}>Lucida Bright</option>
                     <option value={"Perpetua"} style={{fontFamily:"Perpetua"}}>Perpetua</option>
                     <option value={"Rockwell"} style={{fontFamily:"Rockwell"}}>Rockwell</option>
                     <option value={"Rockwell Extra Bold"} style={{fontFamily:"Rockwell Extra Bold"}}>Rockwell Extra Bold</option>
                     <option value={"Baskerville"} style={{fontFamily:"Baskerville"}}>Baskerville</option>
                     {/* <!-- <opti{n disabled value="Monospace" style={{background-color: aqua"}}>Monospace</optin>     --> */}
                     <option value={"Consolas"} style={{fontFamily:"Consolas"}}>Consolas</option>
                     <option value={"Courier"} style={{fontFamily:"Courier"}}>Courier</option>
                     <option value={"Courier New"} style={{fontFamily:"Courier New"}}>Courier New</option>
                     <option value={"Lucida Console"} style={{fontFamily:"Lucida Console"}}>Lucida Console</option>
                     <option value={"Lucidatypewriter"} style={{fontFamily:"Lucidatypewriter"}}>Lucidatypewriter</option>
                     <option value={"Lucida Sans Typewriter"} style={{fontFamily:"Lucida Sans Typewriter"}}>Lucida Sans Typewriter</option>
                     <option value={"Monaco"} style={{fontFamily:"Monaco"}}>Monaco</option>
                     <option value={"Andale Mono"} style={{fontFamily:"Andale Mono"}}>Andale Mono</option>
                     {/* <!-- <option disabled value="Cursive" style={{background-color: aqua"}}>Cursive</option>     --> */}
                     <option value={"Comic Sans"} style={{fontFamily:"Comic Sans"}}>Comic Sans</option>
                     <option value={"Comic Sans MS"} style={{fontFamily:"Comic Sans MS"}}>Comic Sans MS</option>
                     <option value={"Brush Script MT"} style={{fontFamily:"Brush Script MT"}}>Brush Script MT</option>
                     <option value={"Snell Roundhan"} style={{fontFamily:"Snell Roundhan"}}>Snell Roundhan</option>
                     <option value={"Coronet script"} style={{fontFamily:"Coronet script"}}>Coronet script</option>
                     <option value={"Parkavenue"} style={{fontFamily:"Parkavenue"}}>Parkavenue</option>
                     <option value={"Zapf Chancery"} style={{fontFamily:"Zapf Chancery"}}>Zapf Chancery</option>
                     {/* <option di{abled value="Fantasy Font" style={{background-color: aqua"}}>Fantasy Font</option>     --> */}
                     <option value={"Impact"} style={{fontFamily:"Impact"}}>Impact</option>
                     <option value={"Brushstroke"} style={{fontFamily:"Brushstroke"}}>Brushstroke</option>
                     <option value={"Stencil Std"} style={{fontFamily:"Stencil Std"}}>Stencil Std</option>
                     <option value={"papyrus"} style={{fontFamily:"papyrus"}}>papyrus</option>
                     {/* <option di{abled value="More Fonts" style={{background-color: aqua"}}>More Fonts</option>     --> */}
                     <option value={"Calibri"} style={{fontFamily:"Calibri"}}>Calibri</option>
                     <option value={"Calibri Light"} style={{fontFamily:" Calibri Light"}}>Calibri Light</option>
                     <option value={"Agency FB"} style={{fontFamily:"Agency FB"}}>Agency FB</option>
                     <option value={"Algerian"} style={{fontFamily:"Algerian"}}>Algerian</option>
                     <option value={"Arial"} style={{fontFamily:"Arial"}}>Arial</option>
                     <option value={"Arial Black"} style={{fontFamily:"Arial Black"}}>Arial Black</option>
                     <option value={"Bahnschrift"} style={{fontFamily:"Bahnschrift"}}>Bahnschrift</option>
                     <option value={"Bahnschrift Condensed"} style={{fontFamily:"Bahnschrift Condensed"}}>Bahnschrift Condensed</option>
                     <option value={"Bahnschrift Light"} style={{fontFamily:"Bahnschrift Light"}}>Bahnschrift Light</option>
                     <option value={"Bahnschrift SemiBold"} style={{fontFamily:"Bahnschrift SemiBold"}}>Bahnschrift SemiBold</option>
                     <option value={"Baskerville Old Face"} style={{fontFamily:"Baskerville Old Face"}}>Baskerville Old Face</option>
                     <option value={"Arial Nova"} style={{fontFamily:"Arial Nova"}}>Arial Nova</option>
                     <option value={"Calisto MT"} style={{fontFamily:"Calisto MT"}}>Calisto MT</option>
                     <option value={"Cambodian"} style={{fontFamily:"Cambodian"}}>Cambodian</option>
                     <option value={"Cambria"} style={{fontFamily:"Cambria"}}>Cambria</option>
                     <option value={"Constantia"} style={{fontFamily:"Constantia"}}>Constantia</option>
                     <option value={"Copperplate Gothic Light"} style={{fontFamily:"Copperplate Gothic Light"}}>Copperplate Gothic Light</option>
                     <option value={"Corbel"} style={{fontFamily:"Corbel"}}>Corbel</option>
                     <option value={"Cordia New"} style={{fontFamily:"Cordia New"}}>Cordia New</option>
                     <option value={"Ebrima"} style={{fontFamily:"Ebrima"}}>Ebrima</option>
                     <option value={"Franklin Gothic Medium"} style={{fontFamily:"Franklin Gothic Medium"}}>Franklin Gothic Medium</option>
                     <option value={"Gabriola"} style={{fontFamily:"Gabriola"}}>Gabriola</option>
                     <option value={"Gadugi"} style={{fontFamily:"Gadugi"}}>Gadugi</option>
                     <option value={"Garamond"} style={{fontFamily:"Garamond"}}>Garamond</option>
                     <option value={"Gautami"} style={{fontFamily:"Gautami"}}>Gautami</option>
                     <option value={"Georgia Pro"} style={{fontFamily:"Georgia Pro"}}>Georgia Pro</option>
                     <option value={"Goudy Old Style"} style={{fontFamily:"Goudy Old Style"}}>Goudy Old Style</option>
                     <option value={"Gulim"} style={{fontFamily:"Gulim"}}>Gulim</option>
                     <option value={"Ink Free"} style={{fontFamily:"Ink Free"}}>Ink Free</option>
                     <option value={"Japanese"} style={{fontFamily:"Japanese"}}>Japanese</option>
                     <option value={"Javanese Text"} style={{fontFamily:"Javanese Text"}}>Javanese Text</option>
                     <option value={"Leelawadee"} style={{fontFamily:"Leelawadee"}}>Leelawadee</option>
                     <option value={"Leelawadee UI"} style={{fontFamily:"Leelawadee UI"}}>Leelawadee UI</option>
                     <option value={"Leelawadee UI Semilight"} style={{fontFamily:"Leelawadee UI Semilight"}}>Leelawadee UI Semilight</option>
                     <option value={"Levenim MT"} style={{fontFamily:"Levenim MT"}}>Levenim MT</option>
                     <option value={"Lucida Console"} style={{fontFamily:"Lucida Console"}}>Lucida Console</option>
                     <option value={"Lucida Handwriting"} style={{fontFamily:"Lucida Handwriting"}}>Lucida Handwriting</option>
                     <option value={"Lucida Sans"} style={{fontFamily:"Lucida Sans"}}>Lucida SansLucida Sans Typewriter</option>
                     <option value={"Lucida Sans Typewriter"} style={{fontFamily:"Lucida Sans Typewriter"}}>Lucida Sans Typewriter</option>
                     <option value={"Lucidatypewriter"} style={{fontFamily:"Lucidatypewriter"}}>Lucidatypewriter</option>
                     <option value={"Malgun Gothic"} style={{fontFamily:"Malgun Gothic"}}>Malgun Gothic</option>
                     <option value={"Microsoft Himalaya"} style={{fontFamily:"Microsoft Himalaya"}}>Microsoft Himalaya</option>
                     <option value={"Microsoft JhengHei"} style={{fontFamily:"Microsoft JhengHeiMicrosoft JhengHei UI"}}>Microsoft JhengHeiMicrosoft JhengHei UI</option>
                     <option value={"Microsoft JhengHei UI"} style={{fontFamily:"Microsoft JhengHei UI"}}>Microsoft JhengHei UI</option>
                     <option value={"Microsoft New Tai Lue"} style={{fontFamily:"Microsoft New Tai Lue"}}>Microsoft New Tai Lue</option>
                     <option value={"Microsoft PhagsPa"} style={{fontFamily:"Microsoft PhagsPa"}}>Microsoft PhagsPa</option>
                     <option value={"Microsoft Sans Serif"} style={{fontFamily:"Microsoft Sans Serif"}}>Microsoft Sans Serif</option>
                     <option value={"Microsoft Tai Le"} style={{fontFamily:"Microsoft Tai Le"}}>Microsoft Tai Le</option>
                     <option value={"Microsoft Uighur"} style={{fontFamily:"Microsoft Uighur"}}>Microsoft Uighur</option>
                     <option value={"Microsoft YaHei"} style={{fontFamily:"Microsoft YaHei"}}>Microsoft YaHei</option>
                     <option value={"Microsoft YaHei UI"} style={{fontFamily:"Microsoft YaHei UI"}}>Microsoft YaHei UI</option>
                     <option value={"Microsoft Yi Baiti"} style={{fontFamily:"Microsoft Yi Baiti"}}>Microsoft Yi Baiti</option>
                     <option value={"MingLiU_HKSCS-ExtB"} style={{fontFamily:"MingLiU_HKSCS-ExtB"}}>MingLiU_HKSCS-ExtB</option>
                     <option value={"MingLiU-ExtB"} style={{fontFamily:"MingLiU-ExtB"}}>MingLiU-ExtB</option>
                     <option value={"MS Gothic"} style={{fontFamily:"MS Gothic"}}>MS Gothic</option>
                     <option value={"MS PGothic"} style={{fontFamily:"MS PGothic"}}>MS PGothic</option>
                     <option value={"MS PMincho"} style={{fontFamily:"MS PMincho"}}>MS PMincho</option>
                     <option value={"MS UI Gothic"} style={{fontFamily:"MS UI Gothic"}}>MS UI Gothic</option>
                     <option value={"MV Boli"} style={{fontFamily:"MV Boli"}}>MV Boli</option>
                     <option value={"Myanmar Text"} style={{fontFamily:"Myanmar Text"}}>Myanmar Text</option>
                     <option value={"Nirmala UI"} style={{fontFamily:"Nirmala UI"}}>Nirmala UI</option>
                     <option value={"NSimSun"} style={{fontFamily:"NSimSun"}}>NSimSun</option>
                     <option value={"Optima"} style={{fontFamily:"Optima"}}>Optima</option>
                     <option value={"Palatino Linotype"} style={{fontFamily:"Palatino LinotypePerpetua"}}>Palatino LinotypePerpetua</option>
                     <option value={"Perpetua"} style={{fontFamily:"Perpetua"}}>Perpetua</option>
                     <option value={"Segoe Print"} style={{fontFamily:"Segoe Print"}}>Segoe Print</option>
                     <option value={"Segoe Script"} style={{fontFamily:"Segoe Script"}}>Segoe Script</option>
                     <option value={"Segoe UI"} style={{fontFamily:"Segoe UI"}}>Segoe UI</option>
                     <option value={"Segoe UI Emoji"} style={{fontFamily:"Segoe UI Emoji"}}>Segoe UI Emoji</option>
                     <option value={"Segoe UI Historic"} style={{fontFamily:"Segoe UI Historic"}}>Segoe UI Historic</option>
                     <option value={"Segoe UI Symbol"} style={{fontFamily:"Segoe UI Symbol"}}>Segoe UI Symbol</option>
                     <option value={"SimSun"} style={{fontFamily:"SimSun"}}>SimSun</option>
                     <option value={"SimSun-ExtB"} style={{fontFamily:"SimSun-ExtB"}}>SimSun-ExtB</option>
                     <option value={"Sylfaen"} style={{fontFamily:"Sylfaen"}}>Sylfaen</option>
                     <option value={"Tahoma"} style={{fontFamily:"Tahoma"}}>Tahoma</option>
                     <option value={"Thai"} style={{fontFamily:"Thai"}}>Thai</option>
                     <option value={"Times New Roman"} style={{fontFamily:"Times New Roman"}}>Times New Roman</option>
                     <option value={"Traditional Arabic"} style={{fontFamily:"Traditional Arabic"}}>Traditional Arabic</option>
                     <option value={"Trebuchet MS"} style={{fontFamily:"Trebuchet MS"}}>Trebuchet MS</option>
                  </select>
                  </div>
               </div>

               {/* we work on this  */}
               {/* <div className="textEffectsDiv" onClick={toggleEffectsOptionsDropdown}>
                  <div className="textEffectsBtn complexBtns Btns">Effects</div>
                  <div className="textEffectsOptionsDiv" id='textEffectsOptionsDiv'>
                     <div className="textEffectEachOption">Word Art</div>
                     <div className="textEffectEachOption">Option1</div>
                     <div className="textEffectEachOption">Option1</div>
                     <div className="textEffectEachOption">Option1</div>
                     <div className="textEffectEachOption">Option1</div>
                  </div>
               </div> 
               <div className="bulletsBtnDiv"><div className="bulletsBtn complexBtns Btns"><img src="./images/bullets.png" alt="" /></div></div> 
               <div className="numberingBtnDiv"><div className="numberingBtn complexBtns Btns"><img src="./images/numberedlist.png" alt="" /></div></div> 
               <div className="checklistBtnDiv"><div className="checklistBtn complexBtns Btns"><img src="./images/checklist.png" alt="" /></div></div>  */}
               {/* we work on this  */}

            </div>
            {/* <div className="allInputsDiv">
               <div className="fontSizeInputAndTextDiv">
                  <div className="fontSizeText">Font Size :</div>
                  <div className="fontSizeInputDiv">
                     <input list="fontSizes" defaultValue="16" max="56" onInput={handleFontSize} name="fontSizes" id="fontSizeInput" />
                     <datalist id="fontSizes">
                        <option value="5">5</option>
                        <option value="5.5">5.5</option>
                        <option value="6.5">6.5</option>
                        <option value="7.5">7.5</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="10.5">10.5</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="26">26</option>
                        <option value="28">28</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                     </datalist>
                  </div>
               </div>
               <div className="fontFamilyDiv">
                  <div className="fontFamilyText">Font Family:</div>
                  <div className='fontFamilyOptionsDiv'>
                     <select id="fontFamilies" onChange={handleFontFamilies}>
                     <option disabled value="Sans Serif" style={{backgroundColor: "aqua"}}>Sans Serif</option> -->
                     <option value={"Helvetica"} style={{fontFamily:"Helvetica"}}>Helvetica</option>
                     <option value={"Verdana"} style={{fontFamily:"Verdana"}}>Verdana</option>
                     <option value={"Lucida Sans"} style={{fontFamily:"Lucida Sans"}}>Lucida Sans</option>
                     <option value={"Century Gothic"} style={{fontFamily:"Century Gothic"}}>Century Gothic</option>
                     <option value={"Candara"} style={{fontFamily:"Candara"}}>Candara</option>
                     <option value={"Futara"} style={{fontFamily:"Futara"}}>Futara</option>
                     <option value={"Franklin Gothic Medium"} style={{fontFamily:"Franklin Gothic Medium"}}>Franklin Gothic Medium</option>
                     <option value={"Geneva"} style={{fontFamily:"Geneva"}}>Geneva</option>
                     <option value={"Segoe UI"} style={{fontFamily:"Segoe UI"}}>Segoe UI</option>
                     <option disabled value="Serif" style={{backgroundColor: "aqua"}}>Serif</option> -->
                     <option value={"Times New Roman"} style={{fontFamily:"Times New Roman"}}>Times New Roman</option>
                     <option value={"Bodoni MT"} style={{fontFamily:"Bodoni MT"}}>Bodoni MT</option>
                     <option value={"Book Antiqua"} style={{fontFamily:"Book Antiqua"}}>Book Antiqua</option>
                     <option value={"Bookman"} style={{fontFamily:"Bookman"}}>Bookman</option>
                     <option value={"Calisto MT"} style={{fontFamily:"Calisto MT"}}>Calisto MT</option>
                     <option value={"Cambria"} style={{fontFamily:"Cambria"}}>Cambria</option>
                     <option value={"Garamond"} style={{fontFamily:"Garamond"}}>Garamond</option>
                     <option value={"Georgia"} style={{fontFamily:"Georgia"}}>Georgia</option>
                     <option value={"Goudy Old Style"} style={{fontFamily:"Goudy Old Style"}}>Goudy Old Style</option>
                     <option value={"Hoefler Text"} style={{fontFamily:"Hoefler Text"}}>Hoefler Text</option>
                     <option value={"Lucida Bright"} style={{fontFamily:"Lucida Bright"}}>Lucida Bright</option>
                     <option value={"Perpetua"} style={{fontFamily:"Perpetua"}}>Perpetua</option>
                     <option value={"Rockwell"} style={{fontFamily:"Rockwell"}}>Rockwell</option>
                     <option value={"Rockwell Extra Bold"} style={{fontFamily:"Rockwell Extra Bold"}}>Rockwell Extra Bold</option>
                     <option value={"Baskerville"} style={{fontFamily:"Baskerville"}}>Baskerville</option>
                     <option disabled value="Monospace" style={{backgroundColor: "aqua"}}>Monospace</option>    
                     <option value={"Consolas"} style={{fontFamily:"Consolas"}}>Consolas</option>
                     <option value={"Courier"} style={{fontFamily:"Courier"}}>Courier</option>
                     <option value={"Courier New"} style={{fontFamily:"Courier New"}}>Courier New</option>
                     <option value={"Lucida Console"} style={{fontFamily:"Lucida Console"}}>Lucida Console</option>
                     <option value={"Lucidatypewriter"} style={{fontFamily:"Lucidatypewriter"}}>Lucidatypewriter</option>
                     <option value={"Lucida Sans Typewriter"} style={{fontFamily:"Lucida Sans Typewriter"}}>Lucida Sans Typewriter</option>
                     <option value={"Monaco"} style={{fontFamily:"Monaco"}}>Monaco</option>
                     <option value={"Andale Mono"} style={{fontFamily:"Andale Mono"}}>Andale Mono</option>
                     <option disabled value="Cursive" style={{backgroundColor: "aqua"}}>Cursive</option>    
                     <option value={"Comic Sans"} style={{fontFamily:"Comic Sans"}}>Comic Sans</option>
                     <option value={"Comic Sans MS"} style={{fontFamily:"Comic Sans MS"}}>Comic Sans MS</option>
                     <option value={"Brush Script MT"} style={{fontFamily:"Brush Script MT"}}>Brush Script MT</option>
                     <option value={"Snell Roundhan"} style={{fontFamily:"Snell Roundhan"}}>Snell Roundhan</option>
                     <option value={"Coronet script"} style={{fontFamily:"Coronet script"}}>Coronet script</option>
                     <option value={"Parkavenue"} style={{fontFamily:"Parkavenue"}}>Parkavenue</option>
                     <option value={"Zapf Chancery"} style={{fontFamily:"Zapf Chancery"}}>Zapf Chancery</option>
                     <option disabled value="Fantasy Font" style={{backgroundColor: "aqua"}}>Fantasy Font</option>   
                     <option value={"Impact"} style={{fontFamily:"Impact"}}>Impact</option>
                     <option value={"Brushstroke"} style={{fontFamily:"Brushstroke"}}>Brushstroke</option>
                     <option value={"Stencil Std"} style={{fontFamily:"Stencil Std"}}>Stencil Std</option>
                     <option value={"papyrus"} style={{fontFamily:"papyrus"}}>papyrus</option>
                     <option disabled value="More Fonts" style={{backgroundColor: "aqua"}}>More Fonts</option>  
                     <option value={"Calibri"} style={{fontFamily:"Calibri"}}>Calibri</option>
                     <option value={"Calibri Light"} style={{fontFamily:" Calibri Light"}}>Calibri Light</option>
                     <option value={"Agency FB"} style={{fontFamily:"Agency FB"}}>Agency FB</option>
                     <option value={"Algerian"} style={{fontFamily:"Algerian"}}>Algerian</option>
                     <option value={"Arial"} style={{fontFamily:"Arial"}}>Arial</option>
                     <option value={"Arial Black"} style={{fontFamily:"Arial Black"}}>Arial Black</option>
                     <option value={"Bahnschrift"} style={{fontFamily:"Bahnschrift"}}>Bahnschrift</option>
                     <option value={"Bahnschrift Condensed"} style={{fontFamily:"Bahnschrift Condensed"}}>Bahnschrift Condensed</option>
                     <option value={"Bahnschrift Light"} style={{fontFamily:"Bahnschrift Light"}}>Bahnschrift Light</option>
                     <option value={"Bahnschrift SemiBold"} style={{fontFamily:"Bahnschrift SemiBold"}}>Bahnschrift SemiBold</option>
                     <option value={"Baskerville Old Face"} style={{fontFamily:"Baskerville Old Face"}}>Baskerville Old Face</option>
                     <option value={"Arial Nova"} style={{fontFamily:"Arial Nova"}}>Arial Nova</option>
                     <option value={"Calisto MT"} style={{fontFamily:"Calisto MT"}}>Calisto MT</option>
                     <option value={"Cambodian"} style={{fontFamily:"Cambodian"}}>Cambodian</option>
                     <option value={"Cambria"} style={{fontFamily:"Cambria"}}>Cambria</option>
                     <option value={"Constantia"} style={{fontFamily:"Constantia"}}>Constantia</option>
                     <option value={"Copperplate Gothic Light"} style={{fontFamily:"Copperplate Gothic Light"}}>Copperplate Gothic Light</option>
                     <option value={"Corbel"} style={{fontFamily:"Corbel"}}>Corbel</option>
                     <option value={"Cordia New"} style={{fontFamily:"Cordia New"}}>Cordia New</option>
                     <option value={"Ebrima"} style={{fontFamily:"Ebrima"}}>Ebrima</option>
                     <option value={"Franklin Gothic Medium"} style={{fontFamily:"Franklin Gothic Medium"}}>Franklin Gothic Medium</option>
                     <option value={"Gabriola"} style={{fontFamily:"Gabriola"}}>Gabriola</option>
                     <option value={"Gadugi"} style={{fontFamily:"Gadugi"}}>Gadugi</option>
                     <option value={"Garamond"} style={{fontFamily:"Garamond"}}>Garamond</option>
                     <option value={"Gautami"} style={{fontFamily:"Gautami"}}>Gautami</option>
                     <option value={"Georgia Pro"} style={{fontFamily:"Georgia Pro"}}>Georgia Pro</option>
                     <option value={"Goudy Old Style"} style={{fontFamily:"Goudy Old Style"}}>Goudy Old Style</option>
                     <option value={"Gulim"} style={{fontFamily:"Gulim"}}>Gulim</option>
                     <option value={"Ink Free"} style={{fontFamily:"Ink Free"}}>Ink Free</option>
                     <option value={"Japanese"} style={{fontFamily:"Japanese"}}>Japanese</option>
                     <option value={"Javanese Text"} style={{fontFamily:"Javanese Text"}}>Javanese Text</option>
                     <option value={"Leelawadee"} style={{fontFamily:"Leelawadee"}}>Leelawadee</option>
                     <option value={"Leelawadee UI"} style={{fontFamily:"Leelawadee UI"}}>Leelawadee UI</option>
                     <option value={"Leelawadee UI Semilight"} style={{fontFamily:"Leelawadee UI Semilight"}}>Leelawadee UI Semilight</option>
                     <option value={"Levenim MT"} style={{fontFamily:"Levenim MT"}}>Levenim MT</option>
                     <option value={"Lucida Console"} style={{fontFamily:"Lucida Console"}}>Lucida Console</option>
                     <option value={"Lucida Handwriting"} style={{fontFamily:"Lucida Handwriting"}}>Lucida Handwriting</option>
                     <option value={"Lucida Sans"} style={{fontFamily:"Lucida Sans"}}>Lucida SansLucida Sans Typewriter</option>
                     <option value={"Lucida Sans Typewriter"} style={{fontFamily:"Lucida Sans Typewriter"}}>Lucida Sans Typewriter</option>
                     <option value={"Lucidatypewriter"} style={{fontFamily:"Lucidatypewriter"}}>Lucidatypewriter</option>
                     <option value={"Malgun Gothic"} style={{fontFamily:"Malgun Gothic"}}>Malgun Gothic</option>
                     <option value={"Microsoft Himalaya"} style={{fontFamily:"Microsoft Himalaya"}}>Microsoft Himalaya</option>
                     <option value={"Microsoft JhengHei"} style={{fontFamily:"Microsoft JhengHeiMicrosoft JhengHei UI"}}>Microsoft JhengHeiMicrosoft JhengHei UI</option>
                     <option value={"Microsoft JhengHei UI"} style={{fontFamily:"Microsoft JhengHei UI"}}>Microsoft JhengHei UI</option>
                     <option value={"Microsoft New Tai Lue"} style={{fontFamily:"Microsoft New Tai Lue"}}>Microsoft New Tai Lue</option>
                     <option value={"Microsoft PhagsPa"} style={{fontFamily:"Microsoft PhagsPa"}}>Microsoft PhagsPa</option>
                     <option value={"Microsoft Sans Serif"} style={{fontFamily:"Microsoft Sans Serif"}}>Microsoft Sans Serif</option>
                     <option value={"Microsoft Tai Le"} style={{fontFamily:"Microsoft Tai Le"}}>Microsoft Tai Le</option>
                     <option value={"Microsoft Uighur"} style={{fontFamily:"Microsoft Uighur"}}>Microsoft Uighur</option>
                     <option value={"Microsoft YaHei"} style={{fontFamily:"Microsoft YaHei"}}>Microsoft YaHei</option>
                     <option value={"Microsoft YaHei UI"} style={{fontFamily:"Microsoft YaHei UI"}}>Microsoft YaHei UI</option>
                     <option value={"Microsoft Yi Baiti"} style={{fontFamily:"Microsoft Yi Baiti"}}>Microsoft Yi Baiti</option>
                     <option value={"MingLiU_HKSCS-ExtB"} style={{fontFamily:"MingLiU_HKSCS-ExtB"}}>MingLiU_HKSCS-ExtB</option>
                     <option value={"MingLiU-ExtB"} style={{fontFamily:"MingLiU-ExtB"}}>MingLiU-ExtB</option>
                     <option value={"MS Gothic"} style={{fontFamily:"MS Gothic"}}>MS Gothic</option>
                     <option value={"MS PGothic"} style={{fontFamily:"MS PGothic"}}>MS PGothic</option>
                     <option value={"MS PMincho"} style={{fontFamily:"MS PMincho"}}>MS PMincho</option>
                     <option value={"MS UI Gothic"} style={{fontFamily:"MS UI Gothic"}}>MS UI Gothic</option>
                     <option value={"MV Boli"} style={{fontFamily:"MV Boli"}}>MV Boli</option>
                     <option value={"Myanmar Text"} style={{fontFamily:"Myanmar Text"}}>Myanmar Text</option>
                     <option value={"Nirmala UI"} style={{fontFamily:"Nirmala UI"}}>Nirmala UI</option>
                     <option value={"NSimSun"} style={{fontFamily:"NSimSun"}}>NSimSun</option>
                     <option value={"Optima"} style={{fontFamily:"Optima"}}>Optima</option>
                     <option value={"Palatino Linotype"} style={{fontFamily:"Palatino LinotypePerpetua"}}>Palatino LinotypePerpetua</option>
                     <option value={"Perpetua"} style={{fontFamily:"Perpetua"}}>Perpetua</option>
                     <option value={"Segoe Print"} style={{fontFamily:"Segoe Print"}}>Segoe Print</option>
                     <option value={"Segoe Script"} style={{fontFamily:"Segoe Script"}}>Segoe Script</option>
                     <option value={"Segoe UI"} style={{fontFamily:"Segoe UI"}}>Segoe UI</option>
                     <option value={"Segoe UI Emoji"} style={{fontFamily:"Segoe UI Emoji"}}>Segoe UI Emoji</option>
                     <option value={"Segoe UI Historic"} style={{fontFamily:"Segoe UI Historic"}}>Segoe UI Historic</option>
                     <option value={"Segoe UI Symbol"} style={{fontFamily:"Segoe UI Symbol"}}>Segoe UI Symbol</option>
                     <option value={"SimSun"} style={{fontFamily:"SimSun"}}>SimSun</option>
                     <option value={"SimSun-ExtB"} style={{fontFamily:"SimSun-ExtB"}}>SimSun-ExtB</option>
                     <option value={"Sylfaen"} style={{fontFamily:"Sylfaen"}}>Sylfaen</option>
                     <option value={"Tahoma"} style={{fontFamily:"Tahoma"}}>Tahoma</option>
                     <option value={"Thai"} style={{fontFamily:"Thai"}}>Thai</option>
                     <option value={"Times New Roman"} style={{fontFamily:"Times New Roman"}}>Times New Roman</option>
                     <option value={"Traditional Arabic"} style={{fontFamily:"Traditional Arabic"}}>Traditional Arabic</option>
                     <option value={"Trebuchet MS"} style={{fontFamily:"Trebuchet MS"}}>Trebuchet MS</option>
                  </select>
                  </div>
               </div>
               <div className="textOtherOptionsDiv">
                        <div className="biulpbOptions">
                           <div id="boldBtnDiv"><button id="boldBtn" onClick={boldToggleFunction} className='textBtn'>bold</button></div> 
                           <div id="italicBtnDiv"><button id="italicBtn" onClick={italicToggleFunction} className='textBtn'>italic</button></div> 
                           <div id="underlineBtnDiv"><button id="underlineBtn" onClick={underlineButtonToggleFunction} className='textBtn'>underline</button></div> 
                           <div id="lineThroughBtnDiv"><button id="lineThroughBtn" onClick={linethroughToggleFunction} className='textBtn'>lineThrough</button></div> 
                           <div id="powerBtnDiv"><button id="powerBtn" onClick={powerToggleFunction} className='textBtn'>power</button></div> 
                           <div id="baseBtnDiv"><button id="baseBtn" onClick={baseToggleFunction} className='textBtn'>base</button></div> 
                        </div>
                        <div className="textAlignmentOptions">
                           <div id="alignTextLeftBtnDiv"><button id="alignTextLeftBtn" onClick={alignTextLeftBtnToggle} className='textBtn'>left</button></div> 
                           <div id="alignTextCenterBtnDiv"><button id="alignTextCenterBtn" onClick={alignTextCenterBtnToggle} className='textBtn'>center</button></div> 
                           <div id="alignTextRightBtnDiv"><button id="alignTextRightBtn" onClick={alignTextRightBtnToggle} className='textBtn'>right</button></div> 
                        </div>
                        <div className="textColorOptions">
                           <div className="textColorBtnDiv">
                              <span>Color</span>
                              <input type="color" id='colorInput' onChange={textColorFunction}/>
                           </div>
                        </div>
               </div>
            </div> */}
            {/* <div className="textOtherComplexOptionsDiv">
               <div className="textEffectsDiv complexBtnsDiv">
                  <button className="textEffectsBtn complexBtns" onClick={toggleEffectsOptionsDropdown}>Text Effects</button>
                  <div className="textEffectsOptionsDiv" id='textEffectsOptionsDiv'>
                     <div className="textEffectEachOption">Word Art</div>
                     <div className="textEffectEachOption">Option1</div>
                     <div className="textEffectEachOption">Option1</div>
                     <div className="textEffectEachOption">Option1</div>
                     <div className="textEffectEachOption">Option1</div>
                  </div>
               </div> 
               <div className="bulletsBtnDiv complexBtnsDiv"><button className="bulletsBtn complexBtns">Bullets</button></div> 
               <div className="numberingBtnDiv complexBtnsDiv"><button className="numberingBtn complexBtns">Numbering</button></div> 
            </div> */}

            <div className="createNoteButtonDiv">
               <div className="createNoteButton" onClick={()=>{createNote()}}>Create Note</div>
            </div>
         </div>
            <div id="snackbar">Note Created Successfully..</div>
      </div>
  )
}
