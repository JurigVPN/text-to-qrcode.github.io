function generateQRCode() {
    const urlInput = document.getElementById('urlInput').value;
    const qrcodeContainer = document.getElementById('qrcode');
    
    if (urlInput.trim() !== '') {
      qrcodeContainer.innerHTML = '';
      
      const qrcode = new QRCode(qrcodeContainer, {
        text: urlInput,
        width: 200,
        height: 200,
      });
    }
  }
  