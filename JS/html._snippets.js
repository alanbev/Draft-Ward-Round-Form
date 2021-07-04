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

epma_button=`<button id="epma_button">Show VTE Assessment</button>`

vte_buttons=`<button id="epma_button">Show VTE Assessment</button>
<button id="epma_button">Show EPMA</button>`

dnr_button=`<button id="epma_button">Alter DNR status</button>`

