const SPREADSHEET_ID = "1wtLrishh1vDE6po1hg5SYfA6KQJyN5mF5Aw3aY0YWwE"; // ID da sua planilha do Google Sheets
const RANGE_NAME = "DATABASE!A1:O32"; // Nome do intervalo de células que contém os dados a serem recuperados

// URL da API do Google Sheets
const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_NAME}`;
// Chave de acesso à API do Google Sheets
const API_KEY = "AIzaSyAd_BfkpQbJudRHmSiaTOG-YV1GX8HPREI"; // Substitua esta linha pela sua chave de API

// Elementos HTML onde os valores serão exibidos
const divElem = document.getElementById("div");
const vagasElem = document.getElementById("vagas");

// Faz uma requisição à API do Google Sheets para buscar os dados da planilha
fetch(`${API_URL}?key=${API_KEY}`)
  .then((response) => response.json()) // converte a resposta para JSON
  .then((json) => {
    const data = json.values; // recupera os valores das células retornadas pela API

    // Recupera o valor de uma célula específica (neste exemplo, a célula B3)
    const vagas = data[2][1];
    // Cria um elemento <span> com o valor recuperado e adiciona ao elemento vagasElem
    const vagasSpan = document.createElement("p");
    vagasSpan.textContent = vagas;
    vagasElem.appendChild(vagasSpan);

    const valorB10 = data[9][1];
    const divC10 = data[9][2];
    const divD10 = data[9][3];
    const valorC10 = data[9][2];
    const valorD10 = data[9][3];

    const divCurso01Elem = document.getElementById("valor-curso01");
    const divC10Elem = document.getElementById("divC10");
    const divD10Elem = document.getElementById("divD10");
    const valorB10Elem = document.createElement("h6");
    const valorC10Elem = document.createElement("h6");
    const valorD10Elem = document.createElement("h6");

    valorB10Elem.textContent = valorB10;
    valorC10Elem.textContent = valorC10;
    valorD10Elem.textContent = valorD10;
    divCurso01Elem.appendChild(valorB10Elem);
    divC10Elem.appendChild(valorC10Elem);
    divD10Elem.appendChild(valorD10Elem);

    const valorCurso01 = document.getElementById("valor-curso01").textContent;
    const valorCurso02 = document.getElementById("divC10").textContent;
    const valorCurso03 = document.getElementById("divD10").textContent;
    const valor01 = parseFloat(
      valorCurso01.replace("R$ ", "").replace(",", ".")
    );
    const valor02 = parseFloat(
      valorCurso02.replace("R$ ", "").replace(",", ".")
    );
    const valor03 = parseFloat(
      valorCurso03.replace("R$ ", "").replace(",", ".")
    );
      

    const parcela01 = valor01 / 10;
    const parcela02 = valor02 / 10;
    const parcela03 = valor03 / 10;

    const parcelaFormatada01 = parcela01.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const parcelaFormatada02 = parcela02.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const parcelaFormatada03 = parcela03.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const parcelasElement01 = document.getElementById("parcelas01");
    const parcelasElement02 = document.getElementById("parcelas02");
    const parcelasElement03 = document.getElementById("parcelas03");
    parcelasElement01.textContent = `10x de ${parcelaFormatada01}`;
    parcelasElement02.textContent = `10x de ${parcelaFormatada02}`;
    parcelasElement03.textContent = `10x de ${parcelaFormatada03}`;

    const ocutar01 = data[2][3];
    if (ocutar01 == 0) {
      // Se o valor da célula for 0, oculta a div
      divElem.style.display = "none";
    } else if (ocutar01 == 1) {
      // Se o valor da célula for 1, mostra a div
      divElem.style.display = "block";
    }
  })
  .catch((error) => console.error(error)); // trata erros na requisição
