// Navigation function tied to profile.handlebars
// tied to the select tag via onchange

function navFormHandler(val) {
  
    if (val == 'userNav') {
        document.querySelector('#owner-section').style.display = 'block';
        document.querySelector('#dog-section').style.display = 'none';
        document.querySelector('#events-section').style.display = 'none';
    }
    else if (val == 'dogsNav') {
        document.querySelector('#owner-section').style.display = 'none';
        document.querySelector('#dog-section').style.display = 'block';
        document.querySelector('#events-section').style.display = 'none';
    } else {
        document.querySelector('#owner-section').style.display = 'none';
        document.querySelector('#dog-section').style.display = 'none';
        document.querySelector('#events-section').style.display = 'block'; }
};