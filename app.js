const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector("form");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer,index)=> {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    //console.log(score);

    const result = document.querySelector(".result");
    //const span = document.querySelector("span");
    //span.textContent = `${score}%`;
    window.scrollTo(0,0);
    //window keyword can be ignored becuase it is the global object just like it is ignored in console.log()
    result.querySelector("span").textContent = `${score}%`;
    result.classList.remove('d-none');
    
});