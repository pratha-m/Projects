
// import React,{useState} from 'react'
// import './Leftsidebar.css'
// import $, { error } from 'jquery'
// export default function Leftsidebar() {
//   // find and replace starts 
//    const findAndReplace = () => {
//       let containClickableElements = document.getElementById("containClickableElements");
//       let findAndReplaceDiv = document.getElementById("findAndReplaceDiv");
//       if (Array.from(containClickableElements.classList).length === 0) {
//          containClickableElements.classList.add("containClickableElements");
//          findAndReplaceDiv.classList.add("showFindAndReplaceDiv");
//       }
//       else {
//          containClickableElements.classList.remove("containClickableElements");
//          findAndReplaceDiv.classList.remove("showFindAndReplaceDiv");
//       }
//    }
//    function toggleArrow() {
//       console.log("arrow toggle ")
//       let openerOfReplace = document.getElementById("openerOfReplace");
//       let replaceDiv = document.getElementById("replaceDiv");
//       if ((Array.from(openerOfReplace.classList)).includes("arrowDown")) {
//          openerOfReplace.classList.remove("arrowDown");
//          openerOfReplace.classList.add("arrowUp");
//          replaceDiv.classList.add("showReplaceDiv");
//       }
//       else {
//          openerOfReplace.classList.remove("arrowUp");
//          openerOfReplace.classList.add("arrowDown");
//          replaceDiv.classList.remove("showReplaceDiv");
//       }
//    }
//    const closeFindAndReplace = () => {
//       let findAndReplaceDiv = document.getElementById("findAndReplaceDiv");
//       findAndReplaceDiv.classList.remove("showFindAndReplaceDiv");
//       let containClickableElements = document.getElementById("containClickableElements");
//       containClickableElements.classList.remove("containClickableElements")
//    }
//    $(function(){
//       $("#findTextDiv").on("click",function(){
//          let findVal=$("#findInput").val();
//          $("#textArea").html( 
//            $("#textArea").html().replaceAll(findVal,`<span style="background-color:green;color:white;">${findVal}</span>`)
//          );
//          setTimeout(function(){
//             $("#textArea").html( 
//                $("#textArea").html().replaceAll(`<span style="background-color:green;color:white;">${findVal}</span>`,`<span>${findVal}</span>`)
//             )
//          },2000)
//        })
//        $("#replaceTextDiv").on("click",function(){
//             let replaceVal=$("#replaceInput").val();
//             let containerSpans=$("#textArea").children()
//             containerSpans.replaceWith(`<span style="background-color:gray;color:white;">${replaceVal}</span>`)
//             setTimeout(function(){
//                $("#textArea").html( 
//                   $("#textArea").html().replaceAll(`<span style="background-color:gray;color:white;">${replaceVal}</span>`,replaceVal)
//                )
//             },3000)
//       })
//    })
//    // find and replace ends 
//    const toUpperLowerToggle=()=>{
//       let textArea=document.getElementById("textArea")
//       if(textArea.innerText!=textArea.innerText.toUpperCase()){
//          textArea.innerText=textArea.innerText.toUpperCase()
//          setUpBtnText("convert To lowercase")
//       }
//       else{
//          textArea.innerText=textArea.innerText.toLowerCase()
//          setUpBtnText("convert To uppercase")
//       }
//    }
//    const handleCopy=()=>{
//       let textArea=document.getElementById("textArea")
//       let textAreaText=textArea.innerText;
//       console.log(textAreaText)
//       navigator.clipboard.writeText(textAreaText);
//       setCopyBtnText("copied!")
//       setTimeout(function(){
//          setCopyBtnText("copy")
//       },4000)
//    }
//    const handleClear=()=>{
//       let textArea=document.getElementById("textArea")
//       textArea.innerText=null
//       setClearBtnText("Cleared!")
//       setTimeout(function(){
//           setClearBtnText("clear")
//       },3000)
//    }
//    const handleRemoveExtraSpaces=()=>{
//       let textArea=document.getElementById("textArea")
//       let textAreaText=textArea.innerText;
//       textArea.innerText=textAreaText.replace(/\s+/g," ").trim()
//    }
//    // normal,italic,bold handle section starts 
//    let fontStyleInputElement=document.getElementById("fontStyleInput")
//    console.log(fontStyleInputElement)
//    // fontStyleInputElement.addEventListener("input",function(e){
//    //    console.log("hello")
//       // let input = e.target;
//       // inputVal = input.value;
//       // list = input.getAttribute("list");
//       // options = document.getElementById(list).childNodes;
//       // for (var i = 0; i < options.length; i++) {
//       //    if (options[i].innerText === inputVal) {
//       //       console.log("selected item is :" + inputVal);
//       //       break;
//       //    }
//       // }
//    // })
//    // normal,italic,bold handle section starts
//    const [upBtnText,setUpBtnText]=useState("convert To uppercase");
//    const [copyBtnText,setCopyBtnText]=useState("copy");
//    const [clearBtnText,setClearBtnText]=useState("clear")
//    return (
//       <div className='leftSideBar'>
//          <div className='leftSideBarContentDiv'>
//             <div id="containClickableElements">
//                <div className="findAndReplaceDiv" id="findAndReplaceDiv">
//                   <div className="findDiv" id="findDiv">
//                      <div className="openerOfReplace arrowDown" id="openerOfReplace" onClick={toggleArrow}></div>
//                      <div className="findInputAndTextDiv" id="findInputAndTextDiv" >
//                         <div className="findInputDiv"><input type="text" id="findInput" className="findInput" placeholder='Find' /></div>
//                         <div className="findTextDiv" id='findTextDiv'>Find</div>
//                      </div>
//                      <div className="closeIconFindAndReplaceDiv" id="closeIconFindAndReplaceDiv" onClick={closeFindAndReplace}></div>
//                   </div>
//                   <div className="replaceDiv" id="replaceDiv">
//                      <div className="replaceInputDiv"><input type="text" id="replaceInput" className="replaceInput" placeholder='Replace' /></div>
//                      <div className="replaceTextDiv" id="replaceTextDiv">Replace</div>
//                   </div>
//                </div>
//             </div>
//             <div className="createNoteHeading">Create Note</div>
//             <div className="textAreaDiv">
//                <div contentEditable="true" id='textArea'></div>
//             </div>
//             <div className="allButtonsDiv" id="allButtonsDiv">
//                <div className="Btns upperAndLowerCaseBtn" onClick={toUpperLowerToggle}>{upBtnText}</div>
//                <div className="Btns removeExtraSpacesBtn" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</div>
//                <div className="Btns copyTextButton" onClick={handleCopy}>{copyBtnText}</div>
//                <div className="Btns clearTextButton" onClick={handleClear}>{clearBtnText}</div>
//                <div className="Btns findAndReplace" onClick={findAndReplace}>Find And Replace </div>
//             </div>
//             <div className="allInputsDiv">
//                <div className="fontSizeInputAndTextDiv">
//                   <div className="fontSizeText">Font Size :</div>
//                   <div className="fontSizeInputDiv">
//                      <input list="fontSizes" name="fontSizes" id="fontSizeInput" />
//                      <datalist id="fontSizes">
//                         <option value="5">5</option>
//                         <option value="5.5">5.5</option>
//                         <option value="6.5">6.5</option>
//                         <option value="7.5">7.5</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                         <option value="10.5">10.5</option>
//                         <option value="11">11</option>
//                         <option value="12">12</option>
//                         <option value="14">14</option>
//                         <option value="16">16</option>
//                         <option value="18">18</option>
//                         <option value="20">20</option>
//                         <option value="22">22</option>
//                         <option value="26">26</option>
//                         <option value="28">28</option>
//                         <option value="36">36</option>
//                         <option value="48">48</option>
//                         <option value="56">56</option>
//                         <option value="72">72</option>
//                      </datalist>
//                   </div>
//                </div>
//                <div className="fontStyleInputAndTextDiv">
//                   <div className="fontStyleText">Font Style :</div>
//                   <div className="fontStyleInputDiv">
//                      <input list="fontStyles" name="fontStyles" id="fontStyleInput" />
//                      <datalist id="fontStyles">
//                         <option  value="normal">normal</option>
//                         <option value="italic">italic</option>
//                         <option value="bold">bold</option>
//                         <option value="underline">underline</option>
//                      </datalist>
//                   </div>
//                </div>
//             </div>
//             <div className="textColorBox"></div>
//             <div className="backgroundModesDiv"></div>
//             <div className="createNoteButtonDiv">
//                <div className="createNoteButton">Create Note</div>
//             </div>
//          </div>
//       </div>
//   )
  
// }
