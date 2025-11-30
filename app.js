const handleGenQRCode = () => {
  const url = document.getElementById("urlInput").value.trim();
  if (!url) return alert("Provide Valid URL");

  document.getElementById("urlInput").value = "";

  const qrContainer = document.getElementById("QR-Code");
  if (!qrContainer) {
    console.error("No element with id 'QR-Code' found");
    return;
  }
  while (qrContainer.firstChild) qrContainer.removeChild(qrContainer.firstChild);

  try {
    new QRCode(qrContainer, {
      text: url,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });
  } catch (err) {
    console.error(err);
  }
};
