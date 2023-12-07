function convertTemp(inputField) {
    let celsius = parseFloat(document.getElementById("celsius").value) || 0;
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value) || 0;
    let kelvin = parseFloat(document.getElementById("kelvin").value) || 0;
    let rankine = parseFloat(document.getElementById("rankine").value) || 0;
  
    if (inputField === "celsius") {
      fahrenheit = isNaN(celsius) ? "" : parseFloat((celsius * 9 / 5) + 32).toFixed(4);
      kelvin = isNaN(celsius) ? "" : parseFloat(celsius + 273.15).toFixed(4);
      rankine = isNaN(celsius) ? "" : parseFloat((celsius + 273.15) * 9 / 5).toFixed(4);
    } else if (inputField === "fahrenheit") {
      celsius = isNaN(fahrenheit) ? "" : parseFloat((fahrenheit - 32) * 5 / 9).toFixed(4);
      kelvin = isNaN(fahrenheit) ? "" : parseFloat((fahrenheit - 32) * 5 / 9 + 273.15).toFixed(4);
      rankine = isNaN(fahrenheit) ? "" : parseFloat(fahrenheit + 459.67).toFixed(4);
    } else if (inputField === "kelvin") {
      celsius = isNaN(kelvin) ? "" : parseFloat(kelvin - 273.15).toFixed(4);
      fahrenheit = isNaN(kelvin) ? "" : parseFloat((kelvin - 273.15) * 9 / 5 + 32).toFixed(4);
      rankine = isNaN(kelvin) ? "" : parseFloat(kelvin * 9 / 5).toFixed(4);
    } else if (inputField === "rankine") {
      celsius = isNaN(rankine) ? "" : parseFloat((rankine - 491.67) * 5 / 9).toFixed(4);
      fahrenheit = isNaN(rankine) ? "" : parseFloat(rankine - 459.67).toFixed(4);
      kelvin = isNaN(rankine) ? "" : parseFloat(rankine * 5 / 9).toFixed(4);
    }
  
    document.getElementById("celsius").value = celsius;
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("kelvin").value = kelvin;
    document.getElementById("rankine").value = rankine;
  }