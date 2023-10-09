const callElement = id => { return document.querySelector(id) }
// ------------------------------------------------------------
const resultBT1 = callElement("#ketqua_bai1")
const resultBT2 = callElement("#ketqua_bai2")
const resultBT3 = callElement("#ketqua_bai3")
const resultBT4 = callElement("#ketqua_bai4")
const resultBT5 = callElement("#ketqua_bai5")
const resultBT6 = callElement("#ketqua_bai6")
const spanMaker = callElement("#bai6")
const showTitleBT6 = callElement("#bai6_title")

// ------------------------------------------------------------
const baiTap1 = () => {
    let valueInputBT1 = callElement("#input_bt1").value
    let numberInputBT1 = Number(valueInputBT1)
    let numberBinhPhuong = numberInputBT1 * numberInputBT1
    numberBinhPhuong = numberBinhPhuong.toLocaleString("en-US")

    if (valueInputBT1) {
        resultBT1.textContent = `Bình phương của ${numberInputBT1} là : ${numberBinhPhuong}`
    } else {
        alert("Vui lòng điền 1 số bất kỳ")
    }
}
// ------------------------------------------------------------
const baiTap2 = () => {
    let valueInputBT2 = callElement("#input_bt2").value
    let numberInputBT2 = Number(valueInputBT2)
    let theKy = Math.ceil(numberInputBT2 / 100)

    if (valueInputBT2) {
        resultBT2.textContent = `Năm ${numberInputBT2} thuộc thế kỷ ${theKy}`
    } else {
        alert("Vui lòng nhập 1 năm bất kỳ")
    }
}
// ------------------------------------------------------------
const baiTap3 = () => {
    let valueInputBT3 = callElement("#input_bt3").value
    let string = valueInputBT3.slice(0, 10)
    let dot = "..."
    if (valueInputBT3) {
        if (valueInputBT3 <= 999999999) {
            resultBT3.textContent = `Dãy ký tự của bạn là ${string}`
        } else {
            resultBT3.textContent = `Dãy ký tự của bạn là ${string}${dot}`
        }
    } else {
        alert("Vui lòng nhập 1 số bất kỳ")
    }
}
// ------------------------------------------------------------
const baiTap4 = () => {
    let valueInputBT4 = callElement("#input_bt4").value
    let string = valueInputBT4[0].toUpperCase() + valueInputBT4.slice(1).toLowerCase()
    if (valueInputBT4) {
        resultBT4.textContent = `Sau khi chuyển đổi : ${string}`
    } else {
        alert("Vui lòng không để trống")
    }
}
// ------------------------------------------------------------
const baiTap5 = () => {
    let valueInputBT5 = callElement("#input_bt5").value
    let array = valueInputBT5.split(" ")
    if (valueInputBT5) {
        array.sort((a, b) => {
            return a - b
        })
        resultBT5.textContent = `Số nhỏ nhất trong mảng là : ${array[0]}`
    } else {
        alert("Vui lòng không để trống")
    }
}
// ------------------------------------------------------------
const baiTap6 = () => {
    let valueInputBT6 = callElement("#input_bt6").value
    let danhSach = valueInputBT6.split(" ")
    danhSach.sort()
    if (valueInputBT6) {
        for (let i = 0; i < danhSach.length; i++) {
            let span = document.createElement("span")
            span.textContent = baiTap6BoSung(danhSach[i]);
            spanMaker.appendChild(span);
        }
        showTitleBT6.style.display = "block"
    } else {
        alert("Vui lòng không để trống")
    }
}

const baiTap6BoSung = (str) => {
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}