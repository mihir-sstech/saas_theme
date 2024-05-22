import CustomSpinner from "./CustomSpinner";

const CustomLoader = () => {
  return (
    <div style={{ background: "black", height: "100vh", opacity: 0.4, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CustomSpinner />
    </div>
  )
}

export default CustomLoader;