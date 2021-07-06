
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
['Communications from nursing staff', true, false, false],//link to field in nursing documentation for items that need to be communicated to ward round team
['Plan from Last Ward Round', true, false, false],      //carries foward from previous ward round
['Vital Signs',true, true, true],                       //info-box display summary, button in control_box to pop up ICG in window, comments
['Investigations',true, true, true],                    //info-box display summary, button in control_box to pop up ICG in window, comments
['Medications',true, true,true],                        //infobox has medication list. button in control panel to open WPMR, box for comments
['VTE', true, true, false],                             //info-box displays whether VTE assesssment up to date, control_box has buttons to pop up VTE assessment in window and to acess EPMA
['Fluid balance', true, true, true,],                   //info_box shows summary fluid balance, control_box has prsent drop-down menu, vommnets box for additional comments
['Nutrition',false, true,true],
['Mobilisation', false, false, true],                   //comments on mobilisation
['CPR Status', true, true, true],                       //info_box displays current status, contro_box has button to accept status and button to pop up CPR form
['Examination Findings', false, false, true],           //entry for examination findings
['Notes', false, false, true],                          //free text notes
['Complications', false, true, true],                   //three level pull down menu. first chosses system, second chooses complication from system, third chooses clavien dindo severity
['Concerns', false, true, true],                        //two level pull dwon menu fist selects system secomd selects particular concern
['Plan', false, false, true],                             //Free text entry of plan
['Estimated Discharge Date',true,true,true],           //control_box has callender selector, fomments box allows comments
['Discuss at handover meeting',false,true,false],        //radiobox 
['Moves To Date',true,false,false]                     
];
   



//create DOM elements
let main=document.getElementById("main")
form_elements.forEach((element) => {
id_array=element[0].split(" ");//create valid id by replacing spaces with _
id_name=id_array.join("_");
console.log(id_name)
let new_element=document.createElement(`p`);
new_element.id=id_name
new_element.classList.add("outer_element")
let new_element_content=`<h2 class="element_title">` + element[0] + `</h2><p id=`+ id_name + `_info_box class="info_box"></p> <p id= ` + id_name + `_control_box class="control_box"> </p> <p class="comments"><label for=`+ id_name +`_input_box class="comments_label">Comments</label for><br/><input type="text" id=`+ id_name +`_input class="comments_box" </input></p>`;
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

//CONTROLS

//specialties dropdown
specialty_contol_box=document.getElementById('Specialty_control_box')
specialty_question_holder=document.createElement("p")
specialty_question_holder.innerHTML=specialties_dropdown// from html_snippets
specialty_contol_box.append(specialty_question_holder)

//ward dropdown
ward_contol_box=document.getElementById('Ward_control_box')
ward_question_holder=document.createElement("p")
ward_question_holder.innerHTML=ward_dropdown// from html_snippets
ward_contol_box.append(ward_question_holder)



//PCCN review
pccn_contol_box=document.getElementById('PCCN_Reviewed_control_box')
pccn_question_holder=document.createElement("p")
pccn_question_holder.innerHTML=pccn_question_html// from html_snippets
pccn_contol_box.append(pccn_question_holder)

//reason for admission
reason_for_admission_info_box=document.getElementById('Reason_for_Admission_info_box')
reason_info_holder=document.createElement("p")
reason_info_holder.innerText=mock_patient.reason_for_admission
reason_for_admission_info_box.append(reason_info_holder)

//concerns from last ward round
concerns_info_box=document.getElementById('Concerns_from_Last_Ward_Round_info_box')
concerns_info_holder=document.createElement("p")
concerns_info_holder.innerText=mock_patient.concerns_from_last_ward_round.join(", ")
concerns_info_box.append(concerns_info_holder)

//plan from last ward round
prev_plan_info_box=document.getElementById('Plan_from_Last_Ward_Round_info_box')
prev_plan_info_holder=document.createElement("p")
prev_plan_info_holder.innerText=mock_patient.plan_from_last_ward_round
prev_plan_info_box.append(prev_plan_info_holder)

//nusring communications
nursing_info_box=document.getElementById("Communications_from_nursing_staff_info_box")
mock_patient.nursing.forEach((comm)=>{
new_comm=document.createElement('p')
new_comm.innerText=comm
nursing_info_box.append(new_comm)
})

//vital signs
let vital_info_box=document.getElementById('Vital_Signs_info_box');
let vital_table=document.createElement("table");

for (let [property,values] of Object.entries(mock_patient.vital_signs))
    {
       let row_name='vital_' + property
       let vital_row=document.createElement("tr")
       vital_row.setAttribute('id',row_name)
       new_entry=document.createElement("td")
       new_entry.innerText=property
       vital_row.append(new_entry)
       values.forEach((value) =>{
            new_entry=document.createElement("td")
            new_entry.innerText=value
            vital_row.append(new_entry)
            })
    vital_table.append(vital_row)
    }
vital_info_box.append(vital_table)
vital_control_box=document.getElementById('Vital_Signs_control_box')
vital_button_holder=document.createElement("p")
vital_button_holder.innerHTML=vital_icg_button
vital_control_box.append(vital_button_holder)


//investigations
let investigation_info_box=document.getElementById('Investigations_info_box');
let investigation_table=document.createElement("table");

for (let [property,values] of Object.entries(mock_patient.investigations))
    {
       let row_name='investigation_' + property
       let investigation_row=document.createElement("tr")
       investigation_row.setAttribute('id',row_name)
       new_entry=document.createElement("td")
       new_entry.innerText=property
       investigation_row.append(new_entry)
       values.forEach((value) =>{
            new_entry=document.createElement("td")
            new_entry.innerText=value
            investigation_row.append(new_entry)
            })
    investigation_table.append(investigation_row)
    }
investigation_info_box.append(investigation_table)
investigation_control_box=document.getElementById('Investigations_control_box')
investigation_button_holder=document.createElement("p")
investigation_button_holder.innerHTML=investigation_icg_button
investigation_control_box.append(investigation_button_holder)

//medications
let medications_info_box=document.getElementById('Medications_info_box')
mock_patient.medications.forEach((medication)=>{
new_medication=document.createElement('p')
new_medication.innerText=medication
medications_info_box.append(new_medication)
})

medications_control_box=document.getElementById('Medications_control_box')
medications_button_holder=document.createElement('p')
medications_button_holder.innerHTML=epma_button
medications_control_box.append(medications_button_holder)

//VTE
if (mock_patient.vte_due)
    {
    var vte_text="VTE assement is due"    
    }
else
    {
     var vte_text="VTE assessment is up to date"   
    }

if (mock_patient.medications.includes("Daltaparin") )
    {
    var daltaparin_text="Daltaparin is prescribed" 
    }
else  
    {
    var daltaparin_text="Daltaparin is not prescribed"    
    }

let vte_info_box=document.getElementById('VTE_info_box')
let vte_status_holder=document.createElement('p')
vte_status_holder.innerText=vte_text
vte_info_box.append(vte_status_holder)
let daltaparin_status_holder=document.createElement('p')
daltaparin_status_holder.innerText=daltaparin_text
vte_info_box.append(daltaparin_status_holder)

vte_control_box=document.getElementById('VTE_control_box')
vte_button_holder=document.createElement('p')
vte_button_holder.innerHTML=vte_buttons
vte_control_box.append(vte_button_holder)





//nutrition
nutrition=document.getElementById("Nutrition_control_box")
nutrition_dropdown_holder=document.createElement('p')
nutrition_dropdown_holder.innerHTML=nutrition_dropdown
nutrition.append(nutrition_dropdown_holder)
supplements_holder=document.createElement('p')
supplements_holder.innerHTML=supplement_options
nutrition.append(supplements_holder)


//resuscitation
if (mock_patient.dnr)
    {
    var dnr_text="This patient has a DNR directive and is NOT for rescuscitation"
    }
else
    {
    var dnr_text="This patient is for resuscitation"    
    }

let cpr_status_info_box = document.getElementById("CPR_Status_info_box")
dnr_status_holder=document.createElement('p')
dnr_status_holder.innerText = dnr_text
cpr_status_info_box.append(dnr_status_holder)

let cpr_status_control_box=document.getElementById("CPR_Status_control_box")
dnr_button_holder=document.createElement('p')
dnr_button_holder.innerHTML=dnr_button
cpr_status_control_box.append(dnr_button_holder)


//estimated discharge
let discharge_date=false
let estimated_discharge_info_box=document.getElementById("Estimated_Discharge_Date_info_box")
let discharge_date_holder=document.createElement('p')
discharge_date_holder.innerHTML=mock_patient.estimated_discharge
estimated_discharge_info_box.append(discharge_date_holder)

let estimated_discharge_control_box=document.getElementById("Estimated_Discharge_Date_control_box")
let discharge_button_holder=document.createElement('p')
discharge_button_holder.innerHTML=change_discharge_button
estimated_discharge_control_box.append(discharge_button_holder)
discharge_button=document.getElementById("change_discharge_date_button")
discharge_button.addEventListener('click',()=> {
    if (!discharge_date)
    {
        let discharge_date_holder=document.createElement('p')
        discharge_date_holder.innerHTML=enter_discharge_date
        estimated_discharge_control_box.append(discharge_date_holder)
        discharge_date=true
    }
})



//handover
let handover_control_box=document.getElementById("Discuss_at_handover_meeting_control_box")
handover_holder=document.createElement('p')
handover_holder.innerHTML=handover_radio
handover_control_box.append(handover_holder)

//moves to date
let moves_info_box = document.getElementById("Moves_To_Date_info_box")
moves_holder=document.createElement('p')
moves_holder.innerText = mock_patient.moves
moves_info_box.append(moves_holder)






