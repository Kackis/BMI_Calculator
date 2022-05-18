window.onload = () => {
    let button = document.querySelector('#submit');  
    button.addEventListener("click" , calculateBMI);
}

function calculateBMI(){
    let firstName = document.querySelector('#first_name').value;
    let surname = document.querySelector('#surname').value;
    let height  = document.querySelector('#height').value;
    let weight  = document.querySelector('#weight').value;
    let BMI = parseFloat(weight)/Math.pow((parseFloat(height)*100),2);

    let person_data = document.querySelector("#person_data");
    person_data.innerHTML = firstName + " " + surname;

    let BMI_value = document.querySelector("#BMI_value");
    BMI_value.innerHTML = BMI;

    let BMI_status = document.querySelector("#BMI_status");
        
    if(BMI<=18.5){
        BMI_status.innerHTML = "Niedowaga";
    } else if(result>18 && result<25){
        BMI_status.innerHTML = "Prawidłowa";
    } else if(result>=25 && result<30){
        BMI_status.innerHTML = "Nadwaga";
    } else if(result>=30 ){
        BMI_status.innerHTML = "Otyłość";
    } else {
        BMI_status.innerHTML = "Dane są nieprawidłowe";
    }
} 

