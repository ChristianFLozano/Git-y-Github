function Introduccion() {
    function etapaDelDia() {
        const hora = new Date().getHours();
        
        if (hora >= 0 && hora < 12) {
            return "Buenos días";
        } else if (hora >= 12 && hora < 18) {
            return "Buenas tardes";
        } else {
            return "Buenas noches";
        }
    }
    
    return (
        <section className='bg-slate-900 flex lg:flex-row flex-col p-5 gap-5'>
            <div className='flex flex-col gap-5 lg:w-1/2 p-2 justify-center'>
                <h2 className="text-white text-5xl ">{etapaDelDia()}</h2>
                <p className="text-white text-xl text-justify ">En esta landing page veremos sobre la importancia de GitHub para 
                    proyectos. Desde sus humildes comienzos, GitHub ha experimentado un crecimiento fenomenal. 
                    <br /> Lo que comenzó como un lugar para alojar repositorios de código ha evolucionado rápidamente hacia una plataforma integral que abarca control de versiones, gestión de proyectos, colaboración en equipo, educación y mucho más. En 2018, Microsoft adquirió GitHub, ampliando aún más su alcance y recursos.</p>
            </div>
            <div className='lg:w-1/2 flex justify-center items-center'>
                <figure className="flex flex-col justify-center items-center">
                    <img className="rounded-lg" src="src\assets\gitHubImagen1.webp" alt="Imagen ilustrativa sobre GitHub" />
                    <figcaption className="text-white">Imagen ilustrativa sobre GitHub</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default Introduccion;

