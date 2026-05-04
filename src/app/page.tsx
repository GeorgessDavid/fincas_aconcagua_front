import Image from "next/image";
import Parcela from "@/components/Parcela";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h1 className="text-7xl font-noto-serif text-text-primary font-bold">Fincas de Aconcagua</h1>
      <span className="text-xl font-montserrat text-black">Esto es una prueba</span>
      <div className="flex flex-row flex-1 items-center justify-center mt-24 relative">
        <Parcela numero="1" metrosCuadrados={1054.50} status="Disponible" forma="rectangle" />
        <Parcela numero="2" metrosCuadrados={1030.24} status="Reservado" forma="rectangle" />
        <Parcela numero="3" metrosCuadrados={1000.00} status="Disponible" forma="rectangle" />
        <Parcela numero="4" metrosCuadrados={975.12} status="Vendido" forma="rectangle" />
        <Parcela numero="5" metrosCuadrados={1004.50} status="Disponible" forma="rectangle" />
        <Parcela numero="6" metrosCuadrados={1004.50} status="Disponible" forma="square" />
        <Parcela numero="7" metrosCuadrados={1004.50} status="Disponible" forma="square" />
      </div>
    </div>
  );
}
