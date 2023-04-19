import { useRef, useState } from "react";

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string>();

  const handleStartCamera = async () => {
    try {
      // Solicita permissão para acessar a câmera do dispositivo
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Exibe o stream de vídeo no elemento <video>
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Erro ao acessar a câmera do dispositivo", error);
      setError("Erro ao acessar a câmera do dispositivo");
      alert(error);
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <video ref={videoRef} width="320" height="240"></video>
      <button onClick={handleStartCamera}>Iniciar câmera</button>
    </>
  );
};

export default Camera;
