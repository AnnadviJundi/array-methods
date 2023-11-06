 let kota = ["Surabaya", "Jakarta", "Yogyakarta", "Malang", "Bandung", "Aceh"];

 function hasil() {
     let keluar = document.getElementById("output");
     keluar.innerHTML = "Data saat ini: " + kota.join(", ");
 }
 hasil();

 document.getElementById("pushButton").addEventListener("click", function () {
     kota.push("Sumbawa");
     hasil();
 });

 document.getElementById("popButton").addEventListener("click", function () {
     kota.pop();
     hasil();
 });

 document.getElementById("shiftButton").addEventListener("click", function () {
     kota.shift();
     hasil();
 });

 document.getElementById("unshiftButton").addEventListener("click", function () {
     kota.unshift("Balikpapan");
     hasil();
 });