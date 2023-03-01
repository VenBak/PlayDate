require("dotenv").config();

// // Require the Cloudinary library
// const cloudinary = require('cloudinary').v2

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// cloudinary.uploader
//     .upload("./public/images/delete-Freepik-32px.png", {
//         resource_type: "image",
//         folder: 'playdate-images'
//     })
//     //callback function to handle success/failures
//     .then((result) => {
//         console.log("sucess", JSON.stringify(result, null, 2));
//     })
//     .catch((error) => {
//         console.log("error", JSON.stringify(error, null, 2));
//     })


// // Generate 
// const url = cloudinary.url(cloudinary.public_id, {
//     width: 100,
//     height: 150,
//     Crop: 'fill'
// });



// // The output url
// console.log(url);
//   // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag


////////////////////////////////////////////////////////////////////

// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});
/*
/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {
    try {
        // Upload the image
        // const result = await cloudinary.uploader.upload("./public/images/delete-Freepik-32px.png", {
        const result = await cloudinary.uploader.upload(imagePath, {
            resource_type: "image",
            folder: 'playdate-images',
            use_filename: true, //Sets the public ID to the filename of the uploaded file.
            unique_filename: false, //Does not apply random characters to the public ID
            overwrite: true, //Does not apply random characters to the public ID
        });
        console.log(result);
        return result.public_id;
    } catch (error) {
        console.error(error);
    }
};

const getAssetInfo = async (publicId) => {

    // Return colors in the response
    const options = {
        colors: true,
    };

    try {
        // Get details about the asset
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors;
    } catch (error) {
        console.error(error);
    }
};

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image  
// focused on the faces, applying an outline of the  
// first color, and setting a background of the second color.
//////////////////////////////////////////////////////////////
const createImageTag = (publicId, ...colors) => {

    // Set the effect color and background color
    const [effectColor, backgroundColor] = colors;

    // Create an image tag with transformations applied to the src URL
    let imageTag = cloudinary.image(publicId, {
        transformation: [
            { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
            { radius: 'max' },
            { effect: 'outline:10', color: effectColor },
            { background: backgroundColor },
        ],
    });

    return imageTag;
};










//////////////////
//
// Main function
//
//////////////////
(async () => {

    // Set the image to upload
    const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

    // Upload the image
    const publicId = await uploadImage(imagePath);

    // Get the colors in the image
    const colors = await getAssetInfo(publicId);

    // Create an image tag, using two of the colors in a transformation
    const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);

    // Log the image tag to the console
    console.log(imageTag);

})();
*/
module.exports = cloudinary;