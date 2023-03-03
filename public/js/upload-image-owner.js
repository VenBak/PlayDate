// var myWidget = cloudinary.createUploadWidget({
//     cloudName: 'dlkk2oyhp',
//     uploadPreset: 'playedate_preset'
// }, (error, result) => {
//     if (!error && result && result.event === "success") {
//         // console.log('Done! Here is the image info: ', result.info);
//         var pic_hyperlink = result.info.secure_url;

//         // Changes preview image to the uploaded image
//         document.getElementById("preview-img").src = pic_hyperlink;
//     }
// }
// )

// document.getElementById("upload_widget").addEventListener("click", function () {
//     myWidget.open();
// }, false);

// const updateOwnerPhoto = async (event) => {
//     event.preventDefault();

//     var pic_hyperlink = document.getElementById("preview-img").src

//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const response = await fetch(`/api/owners/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ pic_hyperlink }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     if (response.ok) {
//         document.location.reload();
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('#upload-img-btn').addEventListener('click', updateOwnerPhoto);
