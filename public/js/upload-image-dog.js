// TO BE DELETED

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dlkk2oyhp',
    uploadPreset: 'playedate_preset'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        // console.log('Done! Here is the image info: ', result.info);
        var pic_hyperlink = result.info.secure_url

        // Changes preview image to the uploaded image
        document.getElementById("preview-img").src = pic_hyperlink;
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);

const updateDogPhoto = async (event) => {
    event.preventDefault();

    

    
}

// document.querySelector('#upload-img-btn').addEventListener('click', updateDogPhoto);

