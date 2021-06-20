
//specification of entry sections
//info_box displays data from EPR,contol-box house special entrhy features (pulldown menus. buttons etc) comments is a text enty field)
//entry title, info_box required, control_box required, comments required
let form_elements=[
['Specialty', false, true, false],                      //dropdown menu
['Ward',false,true,false],                              //drop down menu
['Entry made by (inc GMC number)',false,true,false],    //pulls from login
['Ward Round Lead', false, true, false],                //dropdown menu
['Medical Grade of WR Lead',false, true, false],        //drop down menu
["Problems", false, true, false],                       //drop down menu
['PCCN Reviewed', false, true, true],                   //yes/no checkbox + comments
['Reason for Admission', true, false, true],            //info_box carries forward from previous enty -comments appends extra info
['Concerns from Last Ward Round', true, false, false],  //carries foward from previous enty
['Plan from Last Ward Round', true, false, false],      //carries foward from previous ward round
['Vital Signs',true, true, true],                       //info-box display summary, button in control_box to pop up ICG in window, comments
['investigations',true, true, true],                    //info-box display summary, button in control_box to pop up ICG in window, comments
['Medications',true, true,true],                        //infobox has medication list. button in control panel to open WPMR, box for comments
['VTE', true, true, false],                             //info-box displays whether VTE assesssment up to date, control_box has buttons to pop up VTE assessment in window and to acess EPMA
['Fluid balance', true, true, true,],                   //info_box shows summary fluid balance, control_box has prsent drop-down menu, vommnets box for additional comments
['mobilisation', false, false, true],                   //comments on mobilisation
['CPR Status', true, true, true],                       //info_box displays current status, contro_box has button to accept status and button to pop up CPR form
['Examination Findings', false, false, true],           //entry for examination findings
['Notes', false, false, true],                          //free text notes
['Complications', false, true, true],                   //three level pull down menu. first chosses system, second chooses complication from system, third chooses clavien dindo severity
['Concerns', false, true, true],                        //two level pull dwon menu fist selects system secomd selects particular concern
['Estimated Discharge Date',false,true,true],           //control_box has callender selector, fomments box allows comments
['Ward Moves To Date',true,false,false]
];


//create DOM elements
let main=document.getElementById("main")
form_elements.forEach((element) => {
let new_element=document.createElement(`p`);
new_element.id=element[0];
new_element.classList.add("outer_element")
let new_element_content=`<h2 class="element_title">` + element[0] + `</h2><p class="info_box"></p> <p class="control_box"> </p> <p class="comments"><label for=`+ element +`_input class="comments_label">Comments</label for><br/><input type="text" id=`+ element[0] +`_input class="comments_box" </input></p>`;
new_element.innerHTML=new_element_content;

//hide unwanted components
if(!element[1])
    {
    new_element.querySelector(".info_box").classList.add("hidden")
    }
if (!element[2])
    {
    new_element.querySelector(".control_box").classList.add("hidden")
    }
if (!element[3])
    {
    new_element.querySelector(".comments").classList.add("hidden")
    }
main.append(new_element);  
})