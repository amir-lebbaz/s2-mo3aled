document.getElementById("button").addEventListener("click", function () {
    function validateScore(value) {
        let num = parseFloat(value);
        if (isNaN(num)) return 0; 
        return Math.max(0, Math.min(20, num)); 
    }

    // الغو (معامل 4)
    let exameAlgo = validateScore(document.getElementById("exame algo").value);
    let tdAlgo = validateScore(document.getElementById("td algo").value);
    let tpAlgo = validateScore(document.getElementById("tp algo").value);

    // ارشي (معامل 4)
    let exameArch = validateScore(document.getElementById("exame arch").value);
    let tdArch = validateScore(document.getElementById("td arch").value);

    // جبر (معامل 3)
    let exameAlgb = validateScore(document.getElementById("exame algb").value);
    let tdAlgb = validateScore(document.getElementById("td algb").value);

    // اناليز (معامل 3)
    let exameAna = validateScore(document.getElementById("exame ana").value);
    let tdAna = validateScore(document.getElementById("td ana").value);

    // لوجيك (معامل 3)
    let exameLog = validateScore(document.getElementById("exame log").value);
    let tdLog = validateScore(document.getElementById("td log").value);

    // بروبا (معامل 2)
    let exameProba = validateScore(document.getElementById("exame proba").value);
    let tdProba = validateScore(document.getElementById("td proba").value);

    // تيك (معامل 1)
    let exameTec = validateScore(document.getElementById("exame tec").value);

    // حساب النقاط حسب المعاملات
    let Nalgo = ((exameAlgo * 0.6) + (tdAlgo * 0.2) + (tpAlgo * 0.2)) * 4;
    let Narch = ((exameArch * 0.6) + (tdArch * 0.4)) * 4;
    let Nalgebre = ((exameAlgb * 0.6) + (tdAlgb * 0.4)) * 4;
    let Nanalyse = ((exameAna * 0.6) + (tdAna * 0.4)) * 4;
    let Nlogique = ((exameLog * 0.6) + (tdLog * 0.4)) * 4;
    let Nproba = ((exameProba * 0.6) + (tdProba * 0.4)) * 2;
    let Ntec = exameTec * 1;

    let totalPoints = Nalgo + Narch + Nalgebre + Nanalyse + Nlogique + Nproba + Ntec;
    let totalCoefficient = 4 + 4 + 4 + 4 + 4 + 2 + 1; // مجموع المعاملات = 20
    let moyenne = totalPoints / totalCoefficient;

    let fo9 = document.getElementById("fo9");
    let t7t = document.getElementById("t7t");
    let outputElement = fo9.querySelector("p");

    outputElement.textContent = moyenne.toFixed(2);

    if (moyenne >= 10) {
        outputElement.style.color = "green";
        fo9.style.display = "flex";
        t7t.style.display = "none";
    } else {
        outputElement.style.color = "red";
        t7t.querySelector("p").textContent = moyenne.toFixed(2);
        t7t.style.display = "flex";
        fo9.style.display = "none";
    }
});