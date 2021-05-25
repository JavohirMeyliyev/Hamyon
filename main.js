let umumiy = 0;
let natija = [];
let umumiyKirim = 0;
let umumiyChiqim = 0;
function Add() {
  let kurs = document.getElementById("kurs").value;
  let miqdor = document.getElementById("kirimChiqim").value;
  let turi = document.getElementById("turi").value;
  let sabab = document.getElementById("sabab").value;

  document.getElementById("kurs").value = "";
  document.getElementById("kirimChiqim").value = "";
  //   document.getElementById("turi").value="";
  document.getElementById("sabab").value = "";

  if (kurs.length > 0 && (miqdor.length > 0) & (sabab.length > 0)) {
    if (turi == "Dollor") {
      miqdor1 = miqdor * kurs;
      // console.log("ll");
    } else {
      miqdor1 = miqdor;
    }

    document.getElementById("miqdor").innerHTML = kurs;
    umumiy += parseInt(miqdor1);
    document.getElementById("umumiy").innerHTML = umumiy;

    umumiyKirim += parseInt(miqdor1);
    document.getElementById("umumiykirim").innerHTML = umumiyKirim;

    malumot = {
      miqdor: miqdor,
      kurs: kurs,
      turi: turi,
      sabab: sabab,
      kirimChiqim: "Kirim",
    };

    natija.push(malumot);
    // console.log(natija)

    yozish();
  } else {
    alert("Maydonlarni to'liq to'ldiring");
  }
}

function chiqim() {
  let kurs = document.getElementById("kurs").value;
  let miqdor = document.getElementById("kirimChiqim").value;
  let turi = document.getElementById("turi").value;
  let sabab = document.getElementById("sabab").value;

  document.getElementById("kurs").value = "";
  document.getElementById("kirimChiqim").value = "";
  //   document.getElementById("turi").value="";
  document.getElementById("sabab").value = "";

  if (kurs.length > 0 && (miqdor.length > 0) & (sabab.length > 0)) {
    if (turi == "Dollor") {
      miqdor1 = miqdor * kurs;
      console.log("ll");
    } else {
      miqdor1 = miqdor;
    }

    document.getElementById("miqdor").innerHTML = kurs;
    umumiy -= parseInt(miqdor1);
    document.getElementById("umumiy").innerHTML = umumiy;

    umumiyChiqim -= parseInt(miqdor1);
    document.getElementById("umumiychiqim").innerHTML = umumiyChiqim;

    malumot = {
      miqdor: miqdor,
      kurs: kurs,
      turi: turi,
      sabab: sabab,
      kirimChiqim: "Chiqim",
    };

    natija.push(malumot);
    // console.log(natija)

    yozish();
  } else {
    alert("Maydonlarni to'liq to'ldiring");
  }
}

function yozish() {
  let result = "";

  for (let i = 0; i < natija.length; i++) {
    result +=
      "<div>" +
      "<tr>" +
      "<td>" +
      parseInt(i + 1) +
      "</td>" +
      "<td>" +
      natija[i].miqdor +
      " " +
      natija[i].turi +
      "</td>" +
      "<td>" +
      natija[i].sabab +
      "</td>" +
      "<td>" +
      natija[i].turi +
      "</td>" +
      "<td>" +
      natija[i].kurs +
      "</td>" +
      "<td>" +
      natija[i].kirimChiqim +
      "</td>" +
      "</td>";
    ("</div>");
  }
  document.getElementById("result").innerHTML = result;
}
