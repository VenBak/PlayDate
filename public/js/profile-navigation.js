const navFormHandler = async (event) => {
    event.preventDefault();
    const choice = document.querySelector('#profile-navigation').value.trim();
  
    if (choice == 'userNav') {
        document.querySelector('#owner-section').style.display = 'block';
        document.querySelector('#dog-section').style.display = 'none';
        document.querySelector('#events-section').style.display = 'none';
    }
    else if (choice == 'dogsNav') {
        document.querySelector('#owner-section').style.display = 'none';
        document.querySelector('#dog-section').style.display = 'block';
        document.querySelector('#events-section').style.display = 'none';
    } else {
        document.querySelector('#owner-section').style.display = 'none';
        document.querySelector('#dog-section').style.display = 'none';
        document.querySelector('#events-section').style.display = 'block';    }
};
document.querySelector('#submitNav-btn').addEventListener('click', navFormHandler);
    
// function showUserSection() {
//     document.querySelector('#owner-section').style.display = 'block';
// }

// function showDogsSection() {
//     document.querySelector('#dog-section').style.display = 'block';
// }

// function showEventsSection() {
//     document.querySelector('#events-section').style.display = 'block';
// }