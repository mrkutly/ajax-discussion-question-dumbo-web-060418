document.addEventListener("DOMContentLoaded", () => {
  const fullname = document.getElementById("fullname");
  const picture = document.querySelector('#profile_picture');
  const email = document.querySelector('#email');
  const street = document.querySelector('#street')
  const state = document.querySelector('#state')
  const city = document.querySelector('#city')
  const postcode = document.querySelector('#postcode')
  const phone = document.querySelector('#phone')
  const cell = document.querySelector('#cell')
  const birthDay = document.querySelector('#date_of_birth')
  const newButton = document.querySelector('#new-button')



  newButton.addEventListener('click', function() {
   fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then(function(json){
      console.log(json)
      let person = json['results'][0]
      let name = person.name

      fullname.innerText = `${name.title} ${name.first} ${name.last}`
      picture.setAttribute('src', person['picture']['large'])
      email.innerText = person.email
      street.innerText = person['location']['street']
      state.innerText = person['location']['state']
      city.innerText = person['location']['city']
      postcode.innerText = person['location']['postcode']
      cell.innerText = person['cell']
      phone.innerText = person['phone']
      birthDay.innerText = person['dob']['date']
    })
  })

});
// location
