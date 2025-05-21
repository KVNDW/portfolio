
document.addEventListener("DOMContentLoaded", () => {

    const urlParameter = new URLSearchParams(window.location.search);
    const pdfName = urlParameter.get('pdf');

    const pdfFrame = document.getElementById("pdf-frame");

   // pdfFrame.src = `../resources/files/${pdfName}.pdf#zoom=100`;

    pdfFrame.src = `../resources/files/${pdfName}.jpg`;
});