export default function CertificadoRespaldo() {
  return (
    <section className="bg-white py-16 md:py-24" id="sobre mi">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Certificación */}
          <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-6">
            Certificación digital
          </h2>
          <p className="font-body text-dark mb-10 max-w-2xl text-lg">
            Recibe tu certificado digital con <span className="font-bold">código QR</span> verificable y firma digital del Ing. Roberto Tello Yuen, Gerente General y Capacitador.
          </p>
          
          {/* Certificate Image Placeholder */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm w-full max-w-2xl mx-auto relative group">
            <div className="border-4 border-double border-gray-200 w-full aspect-[4/3] flex flex-col items-center justify-center p-6 md:p-10 text-center transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="text-2xl md:text-3xl font-title font-extrabold text-dark tracking-tighter mb-4 md:mb-6">
                AGENDA <span className="text-primary text-sm md:text-base tracking-[0.2em] block">2050</span>
              </div>
              <h3 className="font-title font-bold text-gray-800 text-xl md:text-2xl uppercase tracking-widest mb-4 md:mb-6">
                Certificado
              </h3>
              <div className="h-1 w-3/4 bg-gray-300 mb-4"></div>
              <p className="font-body text-xs md:text-sm text-gray-500 mb-4">Otorgado a:</p>
              <p className="font-title font-bold text-dark text-2xl md:text-3xl mb-8">Nombres y Apellidos</p>
              <div className="flex justify-between w-full mt-auto items-end px-4">
                <div className="w-20 h-20 bg-gray-200 flex items-center justify-center border border-gray-300">
                  <span className="text-[10px] text-gray-500 font-bold">QR Code</span>
                </div>
                <div className="text-center">
                  <div className="w-32 md:w-40 h-1 bg-gray-400 mb-2"></div>
                  <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase">Firma Autorizada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
