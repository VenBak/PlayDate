// ME TO DO: 
// --- form for editing the user fields (password needs to have placeholder of "Enter New Password")
// - events end date, cannot pick before start date


// DONE
// -- My Events page delete works (had to change eventcard)
// -- My Events page horizontal scrolling
// -- PUT / UPDATE event: added time
// - DOG summary for edit enable that and hide the edit form (change response.ok section)
// - DOG & OWNER gender edit: shows instruction as default, if user does not pick a new gender, defaults to current gender in DB






// placeholder="{{start_date}}" onfocus="(this.type='date')"
// placeholder="{{end_date}}" onfocus="(this.type='date')"

// // Navigation function tied to profile.handlebars
// // tied to the select tag via onchange

// function navFormHandler(val) {
  
//     if (val == 'userNav') {
//         document.querySelector('#owner-section').style.display = 'block';
//         document.querySelector('#dog-section').style.display = 'none';
//         document.querySelector('#events-section').style.display = 'none';
//     }
//     else if (val == 'dogsNav') {
//         document.querySelector('#owner-section').style.display = 'none';
//         document.querySelector('#dog-section').style.display = 'block';
//         document.querySelector('#events-section').style.display = 'none';
//     } else {
//         document.querySelector('#owner-section').style.display = 'none';
//         document.querySelector('#dog-section').style.display = 'none';
//         document.querySelector('#events-section').style.display = 'block'; }
// };

// {{!-- Allows users navigate the profile page
//     <script src="/js/profile-navigation.js"></script> --}}

// function datePicker(){
//   const staDate = document.querySelector('.staDate').value.trim();
//   const enDate = document.querySelector('.enDate').value.trim();

//   enDate.max = staDate.datePicker(new Date().toLocaleDateString('fr-ca'));
// }



// staDate.datepicker({
//   onSelect: function(dateText){
//     enDate.datepicker('option','minDate',new Date(dateText));
//   }
// });
// enDate.datepicker({
//   onSelect: function(dateText){
//     staDate.datepicker('option','maxDate',new Date(dateText));
//   }
// });