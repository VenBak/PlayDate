
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dlkk2oyhp',
    uploadPreset: 'playedate_preset'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        // console.log('Done! Here is the image info: ', result.info);
        var pic_hyperlink = result.info.secure_url;

        // Changes preview image to the uploaded image
        document.getElementById("preview-img").src = pic_hyperlink;

        async (pic_hyperlink) => {
            const response = await fetch('/api/owner', {
                method: 'PUT',
                body: JSON.stringify({ pic_hyperlink }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert(response.statusText);
            }
        }

    }
}
)

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);
