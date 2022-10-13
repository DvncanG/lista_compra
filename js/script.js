const nuevoalimento = document.getElementById("nuevoalimento");
const list = document.getElementById("list");
const btnaniadir = document.getElementById("btnaniadir");
const btncomprar = document.getElementById("btncomprar");
const error = document.getElementById("error");
const total = document.getElementById("total");

const añadirElemento = () => {
    if (nuevoalimento.value != "") {
        let li = document.createElement("li");
        li.setAttribute("class", "listitem");
        let random = Math.floor((Math.random() + 0.1) * 10).toFixed(2);
        let alimento = document.createElement("SPAN");
        let precio = document.createElement("SPAN");
        let aniadir = document.createElement("BUTTON");
        let bajar = document.createElement("BUTTON");
        let cantidad = document.createElement("SPAN");
        let eliminar = document.createElement("BUTTON");
        aniadir.setAttribute("class", "listbtn__add");
        bajar.setAttribute("class", "listbtn__decrease");
        alimento.setAttribute("class", "listitem__name");
        precio.setAttribute("class", "listitem__price");
        cantidad.setAttribute("class", "listitem__amount");
        eliminar.setAttribute("class", "listbtn__delete");
        precio.textContent = random
        alimento.textContent = nuevoalimento.value;
        aniadir.textContent = "+";
        bajar.textContent = "-";
        cantidad.textContent = 1;
        eliminar.textContent = "X";
        list.appendChild(li);
        li.appendChild(alimento);
        li.appendChild(precio);
        li.appendChild(aniadir);
        li.appendChild(bajar);
        li.appendChild(cantidad);
        li.appendChild(eliminar);
        nuevoalimento.value = "";
        error.textContent = "";
        total.textContent = parseFloat(total.textContent) + parseFloat(random);
    } else {
        error.textContent = "No has introducido ningún alimento";
    }
}

const plusItem = (amount, precio) => {
    amount.textContent = parseFloat(amount.textContent) + 1
    total.textContent = parseFloat(total.textContent) + parseFloat(precio.textContent);
    return total;
}

const minusItem = (amount, precio, item) => {
    if (parseFloat(amount.textContent) > 1) {
        amount.textContent = parseFloat(amount.textContent) - 1
        total.textContent = parseFloat(total.textContent) - parseFloat(precio.textContent).toFixed(2);
    } else {
        total.textContent = parseFloat(total.textContent) - parseFloat(precio.textContent)
        item.remove();
    }
    return total;
}

const deleteItem = (item,precio) => {
    if(parseFloat(total.textContent)>=1){
        item.remove();
        total.textContent = parseFloat(total.textContent) - parseFloat(precio.textContent)
      console.log(total)
    }
    else{
        item.remove();    
        total.textContent = 0.00
    }
}

const btnAlimento = (ev) => {
    if (ev.target.tagName === "BUTTON") {
        let item = ev.target.parentElement;
        let amount = item.lastElementChild.previousElementSibling
        let precio = item.firstElementChild.nextElementSibling
        if (ev.target.textContent === "+") {
            plusItem(amount, precio);
        } else if (ev.target.textContent === "-") {
            minusItem(amount, precio, item);
        } else if (ev.target.textContent === "X") {
            deleteItem(item,precio,amount);
        }
    }
}



list.addEventListener("click", btnAlimento);
btnaniadir.addEventListener("click", añadirElemento);