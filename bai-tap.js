inputa = prompt("Nhập điểm Vật Lý");
inputb = prompt("Nhập điểm Hoá Học");
inputc = prompt("Nhập điểm Sinh Học");

let a = parseInt(inputa)
let b = parseInt(inputb)
let c = parseInt(inputc)
let dtb=(a+b+c)/3
let tong= a+b+c

document.write("Điểm Trung Bình =" + dtb);
document.write("<br/>");
document.write("Tổng =" + tong);