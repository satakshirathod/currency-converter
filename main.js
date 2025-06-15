console.log("Main.js working");

const populate = async (value, currency) => {
    let mystr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_7gAfYLWOWiLSW33rQqp71ClfQ0XLrFjvfCVfqNYI&base_currency= ";
    let response = await fetch(url)
    let rjson = await response.json()
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rjson["data"])) {
        mystr += ` <tr>
                      <td>${key}</td>
                      <td>${rjson["data"][key]["code"]}</td>
                      <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
                    </tr>`

    }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = mystr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']");
    populate(value, currency)
})

