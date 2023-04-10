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
