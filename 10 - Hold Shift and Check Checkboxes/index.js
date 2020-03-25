const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastChecked; //for storing the last checked inbox

function hadleClick(e) {
    let inBetween = false;
    if( e.shiftKey && this.checked ) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this; // if checkbox is clicked without pressing shift then take it as last checked.
}

checkboxes.forEach(checkbox => checkbox.addEventListener( "click", hadleClick) );