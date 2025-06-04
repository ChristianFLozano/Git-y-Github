import React from 'react';
import Encabezado from './componentes/Encabezado';
import Introduccion from './componentes/Introduccion';
import Caracteristicas from './componentes/Caracteristicas';
import caracteristicasGitHub from './Caracteristicas';
import GitInfo from './componentes/GitInfo';
import Video from './componentes/Video';
import Footer from './componentes/Footer';

function App() {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Encabezado />
            <main className='flex flex-col gap-8'>
                <Introduccion />
                <header className='flex items-center justify-center'>
                    <h1 className='text-4xl sm:text-5xl font-bold'>Características</h1>
                </header>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                    {caracteristicasGitHub.map(caracteristica => (
                        <Caracteristicas
                            key={caracteristica.id}
                            caracteristica={caracteristica}
                        /> 
                    ))}
                </section>
                <section>
                    <GitInfo /> 
                </section>
                <figure className='h-auto flex flex-col gap-5'>
                    <Video />
                    <figcaption className='p-5'>
                        <p className='text-xl text-justify sm:text-center' >
                            Este video es una forma de trabajar un proyecto con git, github y vsCode.
                            <br />Este video es de mi propiedad y se elabora desde la creación del repositorio
                            <br />hasta actualizarlo con comando git en visual.
                        </p>
                    </figcaption>
                </figure>
            </main>
            <Footer />
        </div>
    );
}

export default App;
    