import Flights from "./pages/flights/Flights";

export default function App() {
  return (
    <div className="flex justify-center items-center bg-sky-100 h-screen w-screen">
      <div
        className="bg-white rounded-xl overflow-hidden"
        style={{
          maxHeight: "750px",
          maxWidth: "400px",
          width: "100%",
          height: "100%"
        }}
      >
        <Flights />
      </div>
    </div>
  );
}
