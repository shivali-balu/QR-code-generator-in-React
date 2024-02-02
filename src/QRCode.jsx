import { useState } from "react";
import "./QRCode.css";

const QRCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrSize] = useState("");

  async function genImg() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (err) {
      console.log("Error of QR code generation : " + err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <h1>QR Code Generator</h1>
      {loading && <p style={{ color: "black" }}>Please wait...</p>}
      {img && <img src={img} className="qr-image" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Link for QR code :
        </label>

        <input
          type="text"
          id="dataInput"
          placeholder="Enter link"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g : 150)
        </label>

        <input
          type="text"
          id="sizeInput"
          placeholder="Enter image size"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />
        <button className="generate-btn" disabled={loading} onClick={genImg}>
          Generate QR code
        </button>
      </div>
      <p>Designed by Sivali Balu</p>
    </div>
  );
};
export default QRCode;
