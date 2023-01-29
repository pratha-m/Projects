// import React,{useState} from 'react'
// import './Leftsidebar.css'

// export default function Leftsidebar() {
//   const handleOnChange=(event)=>{
//      newText(event.target.value)
//   }
// //   let textareaTextArray=text.split(/\s+/);
// //   console.log(textareaTextArray)
//   const upperAndLowerCaseBtn=()=>{
//     if((/[a-z]/).test(text)){
//        newText(text.toUpperCase())
//        LoBtnText("Lower Case")
//     }
//     else{
//        newText(text.toLowerCase())
//        LoBtnText("Upper Case")
//     }
//   }
//   const removeExtraSpacesBtn=()=>{
//      console.log("remove spaces")
//   } 
//   const copyTextButton=()=>{
//      console.log("copy text btn fired")
//      let textarea=document.querySelector("#textArea");
//      textarea.select();
//      navigator.clipboard.writeText(text);
//      copiedBtnText("Copied");  
//      setTimeout(()=>{
//       copiedBtnText("Copy Text")
//      },2000)
//   }
//   const clearTextButton=()=>{
//      newText(" ");
//    }
//    const findAndReplace=()=>{
//      let containClickableElements=document.getElementById("containClickableElements");
//      let findAndReplaceDiv=document.getElementById("findAndReplaceDiv");
//    if(Array.from(containClickableElements.classList).length===0){
//       containClickableElements.classList.add("containClickableElements");
//       findAndReplaceDiv.classList.add("showFindAndReplaceDiv");
//    }
//    else{
//       containClickableElements.classList.remove("containClickableElements");
//       findAndReplaceDiv.classList.remove("showFindAndReplaceDiv");
//    }
//   } 
//    function toggleArrow(){
//       console.log("arrow toggle ")
//       let openerOfReplace=document.getElementById("openerOfReplace");  
//       let replaceDiv=document.getElementById("replaceDiv");
//       if((Array.from(openerOfReplace.classList)).includes("arrowDown")){
//          openerOfReplace.classList.remove("arrowDown");
//          openerOfReplace.classList.add("arrowUp");
//          replaceDiv.classList.add("showReplaceDiv");
//       }
//       else{
//          openerOfReplace.classList.remove("arrowUp");
//          openerOfReplace.classList.add("arrowDown");
//          replaceDiv.classList.remove("showReplaceDiv");
//       }
//    }
//    const closeFindAndReplace=()=>{
//        let findAndReplaceDiv=document.getElementById("findAndReplaceDiv");
//        findAndReplaceDiv.classList.remove("showFindAndReplaceDiv");
//        let containClickableElements=document.getElementById("containClickableElements");
//        containClickableElements.classList.remove("containClickableElements")
//    }
//    const handleFindChange=(event)=>{
//       dynamicValueFindText(event.target.value);
//       const findInputValue=document.getElementById("findInput").value;
//       let findInputValueRegex=new RegExp(`${findInputValue}`)
//       if(!(findInputValueRegex.test(text))){
//          console.log("not found word")
//       }
//       else{
//          console.log(findInputValue)
//          let replaceTextDiv=document.getElementById("replaceTextDiv");  
//          replaceTextDiv.addEventListener("click",function(){
//              let replaceInputValue=document.getElementById("replaceInput").value;
//              findInputValueRegex=new RegExp(`${findInputValue}g`)
//              console.log(replaceInputValue)
//              let replaceTextOfTextarea=text.replace(findInputValueRegex,replaceInputValue)
//              document.getElementById("textArea").innerText=replaceTextOfTextarea
//          })
//       }   
// }
//   const [text,newText]=useState("");
//   const [upBtnText,LoBtnText]=useState("Upper Case");
//   const [copyBtnText,copiedBtnText]=useState("Copy Text");
//   const [findVal,dynamicValueFindText]=useState(" ");
//   return (
//      <div className='leftSideBar'>
//         <div className='leftSideBarContentDiv'>
//            <div id="containClickableElements">
//               <div className="findAndReplaceDiv" id="findAndReplaceDiv">
//                   <div className="findDiv" id="findDiv">
//                     <div className="openerOfReplace arrowDown" id="openerOfReplace" onClick={toggleArrow}></div>
//                     <div className="findInputAndTextDiv" id="findInputAndTextDiv" >
//                        <div className="findInputDiv"><input type="text" id="findInput" className="findInput" placeholder='Find' value={findVal} onChange={handleFindChange}/></div>
//                        <div className="findTextDiv" >Find</div>
//                     </div>
//                     <div className="closeIconFindAndReplaceDiv" id="closeIconFindAndReplaceDiv" onClick={closeFindAndReplace}></div>
//                   </div>
//                   <div className="replaceDiv" id="replaceDiv">
//                      <div className="replaceInputDiv"><input type="text" id="replaceInput" className="replaceInput" placeholder='Replace'/></div>
//                      <div className="replaceTextDiv" id="replaceTextDiv">Replace</div>
//                   </div>
//                </div>   
//            </div>
//            <div className="createNoteHeading">Create Note</div>
//            <div className="textAreaDiv">
//              <textarea id='textArea' value={text} onChange={handleOnChange}></textarea>
//            </div>
//            <div className="allButtonsDiv" id="allButtonsDiv">
//               <div className="Btns upperAndLowerCaseBtn" onClick={upperAndLowerCaseBtn}>{upBtnText}</div>
//               <div className="Btns removeExtraSpacesBtn" onClick={removeExtraSpacesBtn}>Remove Extra Spaces</div>
//               <div className="Btns copyTextButton" onClick={copyTextButton}>{copyBtnText}</div>
//               <div className="Btns clearTextButton" onClick={clearTextButton}>Clear</div>
//               <div className="Btns findAndReplace" onClick={findAndReplace}>Find And Replace </div>
//            </div>
//            <div className="allInputsDiv">
//              <div className="fontSizeInputAndTextDiv">
//                 <div className="fontSizeText">Font Size :</div>   
//                 <div className="fontSizeInputDiv">
//                    <input list="fontSizes" name="fontSizes" id="fontSizeInput"/>
//                    <datalist id="fontSizes">
//                 <option value="5">5</option>
//                 <option value="5.5">5.5</option>
//                 <option value="6.5">6.5</option>
//                 <option value="7.5">7.5</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//                 <option value="10.5">10.5</option>
//                 <option value="11">11</option>
//                 <option value="12">12</option>
//                 <option value="14">14</option>
//                 <option value="16">16</option>
//                 <option value="18">18</option>
//                 <option value="20">20</option>
//                 <option value="22">22</option>
//                 <option value="26">26</option>
//                 <option value="28">28</option>
//                 <option value="36">36</option>
//                 <option value="48">48</option>
//                 <option value="56">56</option>
//                 <option value="72">72</option>
//                    </datalist>
//                 </div>   
//              </div>
//              <div className="fontStyleInputAndTextDiv">
//                   <div className="fontStyleText">Font Style :</div>
//                   <div className="fontStyleInputDiv">
//                   <input list="fontStyles" name="fontStyles" id="fontStyleInput"/>
//                   <datalist id="fontStyles">
//                      <option value="normal">normal</option>
//                      <option value="italic">italic</option>
//                      <option value="bold">bold</option>
//                      <option value="underline">underline</option>
//                   </datalist>
//                   </div>
//              </div>
//            </div>
//            <div className="textColorBox"></div>
//            <div className="backgroundModesDiv"></div>
//            <div className="createNoteButtonDiv">
//               <div className="createNoteButton">Create Note</div>
//            </div>
//         </div>
//     </div>
//   )
// }
