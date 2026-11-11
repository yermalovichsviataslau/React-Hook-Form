function Modal({ modalDate, closeModal }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          color: "#333",
        }}
      >
        <h3>Успешная регистрация!</h3>
        <p>data in format JSON:</p>
        <p
          style={{
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderRadius: "4px",
            overflowX: "auto",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          {JSON.stringify(modalDate)}
        </p>
        <button
          onClick={closeModal}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          close
        </button>
      </div>
    </div>
  );
}

export default Modal;
