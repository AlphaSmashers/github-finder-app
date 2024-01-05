import loading from "./assets/loading.gif"

function Spinner() {
  return (
    <div className="w-100 mt-20">
        <img src={loading} alt="Loading..." width={200} className="text-center mx-auto"/>
    </div>
  )
}

export default Spinner