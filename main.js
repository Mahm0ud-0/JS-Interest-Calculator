function calculate() {
    const totalAmount = document.getElementById("total-amount");
    const principalInp = document.getElementById("principal");
    const rateInp = document.getElementById("rate");
    const yearsInp = document.getElementById("years");


    let principal = Number(principalInp.value);
    let rate = Number(rateInp.value / 100);
    let years = Number(yearsInp.value);

    if(principal < 0 || isNAn(principal))
        principal = 0;
        principalInp.value = 0;

    if(rate < 0 || isNaN(rate))
        rate = 0;
        rateInp.value = 0;


    if(years < 0 || isNaN(years))
        years = 0;
        yearsInp.value = 0;


    const result = principal * Math.pow(1+rate/1, 1* years);

    totalAmount.textContent = result.toLocaleString(undefined,
                                                               {style:"currency",
                                                                currency:"USD"});
}