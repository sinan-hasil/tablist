const london = document.getElementById("london");
const paris = document.getElementById("paris");
const tokyo = document.getElementById("tokyo");

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

second.classList.add("hidden");
third.classList.add("hidden");

function lndn(){
    second.classList.add("hidden");
    third.classList.add("hidden");
    first.classList.remove("hidden");
    london.classList.add("active");
    paris.classList.remove("active");
    tokyo.classList.remove("active");
}

london.addEventListener("click", lndn);

function scnd() {
    second.classList.remove("hidden");
    first.classList.add("hidden");
    third.classList.add("hidden");
    paris.classList.add("active");
    london.classList.remove("active");
    tokyo.classList.remove("active");
}

paris.addEventListener("click", scnd);

function thrd(){
    first.classList.add("hidden");
    second.classList.add("hidden");
    third.classList.remove("hidden");
    tokyo.classList.add("active");
    london.classList.remove("active");
    paris.classList.remove("active");
}

tokyo.addEventListener("click", thrd);