
// const submitBtn = document.querySelector('#submit')

// submitBtn.addEventListener('click', function(event) {
//     event.preventDefault()
//     console.log('click')
//     console.log(ZIPcode.value)
// })

const container = document.getElementById('parent-zip')

const ZIPcode = document.querySelector('#input-zip')
const submitbtn = document.querySelector('#submit-zip')

Zipper = (event) => {
    event.preventDefault();

    console.log('click')

    // const zip = document.querySelector('#input-zip');
  
    // console.log(zip.value)
    // fetch(`/api/zip`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     zip: zip.value,
    //   }),
    //   headers: {'Content-Type': 'application/json'}
    // });



    fetch('http://localhost:3009/results/'+`${ZIPcode.value}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)

        console.log(data.local_results)

        // var imgURL = data.local_results[0].photos_link



        // for (let index = 0; index < data.local_results.length; index++) {

        //     // Title of the park
        //     const title = data.local_results[index].title;

        //     // Gets the image of the park
        //     // const imgURL = data.local_results[index].photos_link
        //     // fetch(imgURL)
        //     // .then(response => response.json())
        //     // .then(data => {
        //     //     console.log(data.photos[0])
        //     // })

        //     // Creates HTML element for said title
        //     const element = document.createElement('div');
        //     element.textContent = title;
        //     container.appendChild(element)
        // }
    })



};



const  submit = document.querySelector('#submit-zip')

submitbtn.addEventListener('click', Zipper);