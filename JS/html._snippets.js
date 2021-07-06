pccn_question_html=`<p>
Has the patient entered anything in the PCCN?
<br>
<label for="pccn_done"></label>Yes</label>
<input type="radio" id="pccn_done" name="pccn"/>
<label for="pccn_not_done">No</label>
<input type="radio" id="pccn_done" name="pccn"/>
</p>`

specialties_dropdown=`<select id="specialty_selector" name="specialty">
    <option value="Colorectal"> Colorectal</option>
    <option value="Neurosurgery"> Neurosurgery</option>
    <option value="Renal">Renal</option>
    <option value="Surgeon of the Week">Surgeon of the Week</option>
    <option value="Upper GI">UpperGI</option>
</select>`



ward_dropdown=`<select id="ward_selector" name="ward">
    <option value="ITU"> ITU</option>
    <option value="2a"> Ward 2a Neurosurgery</option>
    <option value="2b"> Ward 2b Neurosurgery</option>
    <option value="11">Ward 11 Upper GI</option>
    <option value=12"> Ward 12 Colorectal</option>
    <option value="25">Ward 25 Renal</option>
</select>`;

vital_icg_button=`<button id="vital_icg_button">Show Vital Signs ICG</button>`

investigation_icg_button=`<button id="investigation_icg_button">Show Investigations ICG</button>`

epma_button=`<button id="epma_button">Show EPMA</button>`

nutrition_dropdown=`<select id="nutrition_selector" name="nutrition">
    <option value="normal">Tolerating normal diet</option>
    <option value="poor_unrestricted">No restrictions but poor intake</option>
    <option value="light">Light diet</option>
    <option value="fluids">Fluids only</option>
    <option value="nbm">Sips or NBM</option>
    </select>`


    supplement_options=`<label for="tpn">TPN</label>
    <input type="checkbox" id="tpn"/>
    <label for="nasogastric">Nasogatric tube feeding</label>
    <input type="checkbox" id="nasogastric">
    <label for="supplements">Enteral supplements</label>
    <input type="checkbox" id="supplements"/>`




vte_buttons=`<button id="epma_button">Show VTE Assessment</button>
<button id="epma_button">Show EPMA</button>`

dnr_button=`<button id="epma_button">Alter DNR status</button>`

change_discharge_button=`<button id="change_discharge_date_button">Change Discharge Date</button>`

enter_discharge_date=`<label for="date_input">Selected New Discharge Date</label>
<input type="date" id="date_input"/>`


handover_radio=`<p>Should the patient be discussed at this evening's handover meeting?</p>
<label for="discuss_yes">Yes</label>
<input type="radio" id ="discuss_yes" name="handover"/>
<label for="discuss_no">No</label>
<Input type="radio" id="discuss_no" name="handover"/>`

