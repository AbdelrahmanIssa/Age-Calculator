var yearInput = document.getElementById("yearInput");
var ageElement = document.getElementById("age");
var typeElement  = document.getElementById("type");
var asteriskElement  = document.getElementById("asterisk");
function calcAge() {
      asteriskElement.innerHTML=''
      var birthYear =yearInput.value;
      var date =new Date ;
      var age= date.getFullYear() - birthYear; 
            ageElement.innerHTML="Your age is  "+age;
      if (age>=18) {
            typeElement.innerHTML="Your are old";
      }
      else{
            typeElement.innerHTML="Your are young";
      };

      for (var i = 0; i < age; i++) {
            asteriskElement.innerHTML+='Enjoy! '
            
      }
}
