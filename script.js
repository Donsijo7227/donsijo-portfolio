// document.addEventListener("DOMContentLoaded", function() {
//     // You can add more functionality here if needed
//   });
  

// const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("phone");
const message = document.getElementById("message");

function sendEmail(){
  const bodyMessage = `Fullname: ${fullName.value}<br> Email: ${email.value}<br> Phone number: ${number.value}<br> Message: ${message.value}`;
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "donsijo19@gmail.com",
      Password : "9444DD7B2494ABFB307413378FD573C56BEE",
      To : 'donsijo19@gmail.com',
      From : "donsijo19@gmail.com",
      Subject : "Contact form submission",
      Body : bodyMessage
  }).then(
    message => {
      if(message == "OK"){
        alert("Thank you! Your message has been sent successfully.");
      }
    }
  );
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  sendEmail();
});