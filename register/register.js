document.addEventListener("DOMContentLoaded", function () {
    let count = 1; 

    function addParticipant() {
        count++;

       
        let participantsFieldset = document.querySelector(".participants");

        
        let newParticipant = document.createElement("section");
        newParticipant.classList.add(`participant${count}`);

       
        newParticipant.innerHTML = `
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select name="grade${count}">
                <option value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
        `;

        
        participantsFieldset.insertBefore(newParticipant, document.getElementById("add"));
    }

   
    document.getElementById("add").addEventListener("click", addParticipant);
});

function submitForm(event) {
    event.preventDefault(); 

    let info = {
        adultName: document.getElementById("adult_name").value,
        numParticipants: document.querySelectorAll(".participants section").length,
        feeTotal: totalFees(),
    };

   
    document.getElementById("summary").innerHTML = successTemplate(info);
}


document.querySelector("form").addEventListener("submit", submitForm);
document.querySelector("form").addEventListener("submit", hide);

function hide() {
    document.querySelector(".testbox").classList.add("hide"); }
function successTemplate(info) {
    return `
        <div class="success-message">
            <h2>Registration Successful!</h2>
            <p>Thank you, <strong>${info.adultName}</strong>, for registering.</p>
            <p>You have registered <strong>${info.numParticipants}</strong> participants.</p>
            <p>Total fee: <strong>$${info.feeTotal.toFixed(2)}</strong></p>
        </div>
    `;
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    return feeElements.reduce((total, input) => total + (parseFloat(input.value) || 0), 0);
}