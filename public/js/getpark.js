
// const submitBtn = document.querySelector('#submit')

// submitBtn.addEventListener('click', function(event) {
//     event.preventDefault()
//     console.log('click')
//     console.log(ZIPcode.value)
// })

const container = document.getElementById('row')

const ZIPcode = document.querySelector('#input-zip')
const submitbtn = document.querySelector('#submit-zip')

if (document.querySelector('#submit-zip')) {

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



        for (let index = 0; index < 8; index++) {

            // Title of the park
            const title = data.local_results[index].title;

            const address = data.local_results[index].address

            console.log(address)



            // Gets the image of the park
            // const imgURL = data.local_results[index].photos_link
            // fetch(imgURL)
            // .then(response => response.json())
            // .then(data => {
            //     console.log(data.photos[0])
            // })

            // Creates HTML element for said title
            // const element = document.createElement('div');
            // element.setAttribute('class', 'row')
            // container.appendChild(element)

                
                const element1 = document.createElement('div')
                element1.setAttribute('class', 'col-sm-3 d-inline-flex')
                container.appendChild(element1)
                    const card = document.createElement('div')
                    // card.setAttribute('class', 'card col-lg-1 align-items-stretch')
    
                    
                    element1.appendChild(card)
                        const cardbody = document.createElement('div')
                        cardbody.setAttribute('class', 'card-body')
                        card.appendChild(cardbody)
                            const card_title = document.createElement('h3')
                            card_title.setAttribute('class', 'card-title')
                            card_title.textContent = title
                            cardbody.appendChild(card_title)

                            const card_address = document.createElement('h6')
                            card_address.textContent = address
                            card_address.setAttribute('class', 'card-subtitle mb-2 text-muted')
                            cardbody.appendChild(card_address)

                            const card_img = document.createElement('img')
                            card_img.setAttribute('class', 'card-img')
                            card_img.setAttribute('alt', 'Park')
                            cardbody.appendChild(card_img)

                            const addPark = document.createElement('a')
                            addPark.setAttribute('class', 'btn btn-primary parkEvent'+`${index}`)
                            addPark.setAttribute('name', title)
                            addPark.textContent = 'Choose this Park'
                            cardbody.appendChild(addPark)
                            addPark.addEventListener('click', async () => {

                                console.log(title)
                                var location_name = title
                                
                                if (location_name) {
                                    const response = await fetch('/api/events', {
                                      method: 'POST',
                                      body: JSON.stringify({location_name}),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    });
                                
                                    if (response.ok) {
                                      location.reload();
                                      eventSection.scrollIntoView({ behavior: 'smooth', block: "start" });
                                    } else {
                                      console.log(response.statusText);
                                    }
                                  }
                            })

        }   
    })


    // for (let index = 0; index < 10; index++) {
    //     if (document.querySelector('.parkEvent'+`${index}`)) {
    //     const chosenpark = document.querySelector('.parkEvent'+`${index}`)
    //     const titleofPark = chosenpark.querySelector('name')
    //     chosenpark.addEventListener('click', () => {
    //         console.log(chosenpark)
    //     })


};
}


submitbtn.addEventListener('click', Zipper)