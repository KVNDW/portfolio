
document.addEventListener("DOMContentLoaded", () => {

    const urlParameter = new URLSearchParams(window.location.search);
    const pdfName = urlParameter.get('pdf');

    const pdfFrame = document.getElementById("pdf-frame");
    const pdfImg = document.getElementById("pdf-img");

    pdfImg.src = `../resources/files/${pdfName}.jpg`;

    pdfFrame.src = `../resources/files/${pdfName}.pdf#zoom=90`;
});