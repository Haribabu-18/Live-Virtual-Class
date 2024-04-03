let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formitems = form.elements;
    console.dir(formitems)
    let salary = formitems[1].value;
    let performance = formitems[2].value;
    let bonous = claculateBonous(salary, performance);
    let bns = document.createElement("input");
    bns.placeholder = `Bonous:${bonous}`;
    bns.style.fontWeight = "bolder";

    let sal = document.createElement("input");
    let total = Number(salary) + Number(bonous);
    sal.placeholder = `Bonous:${total}`;

    form.append(bns);
    form.append(sal);
});

function claculateBonous(salary, performance) {
    let bonous = 0;
    if (performance == "A") {
        bonous = (30 / 100) * salary;
    } else if (performance == "B") {
        bonous = (10 / 100) * salary;
    } else {
        bonous = 0;
    }
    return bonous;
}