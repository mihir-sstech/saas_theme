import CustomSpinner from "./CustomSpinner";

const CustomLoader = () => {
  return (
    <div style={{background: "black", height: "100vh", width: "90%", opacity: 0.4, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <CustomSpinner />
    </div>
  )
}

export default CustomLoader;