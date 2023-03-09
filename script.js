let imageBox = document.getElementById("imageBox");
let QRImage = document.getElementById("QRImage");
let QRURL = document.getElementById("QRURL");



function generateQRCode() {
    QRImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + QRURL.value;
    imageBox.classList.add("show-img");
}