import React from "react";
import comandosGit from "../ComandosGit";
import ListaGit from "./ListaGit";
import caracteristicasGit from "../CaracteristicasGit";
function GitInfo()
{
    return  <div className="flex md:flex-row flex-col" > 
                <aside className="bg-orange-600 p-2 text-white md:w-2/12">
                    <h2 className="text-3xl"    >Comandos de Git</h2>
                    <ul>
                        {comandosGit.map(comando =>{
                            return <ListaGit
                                key = {comando.key}
                                comando = {comando.comando}
                                descripcion = {comando.descripcion}
                            />
                        })}
                    </ul>
                </aside>
                <article className="md:w-10/12 p-3 bg-sky-950 text-white" >
                    <figure> <img className="hover:cursor-pointer" src="src/assets/GitLogo.svg" alt="logoGit" 
                                 onClick={() => window.open('https://git-scm.com/', '_blank')}
                    />
                    </figure>
                    <header>
                        <h1 className="text-4xl" >¿Que es Git?</h1>
                    </header>
                    <p className="text-xl" >
                        Git es un sistema de control de versiones distribuido de código abierto, 
                        diseñado para manejar proyectos de cualquier tamaño con rapidez y eficiencia. 
                        Fue creado por Linus Torvalds en 2005, el mismo creador del kernel de Linux, 
                        para gestionar el desarrollo del kernel de Linux. Desde entonces, 
                        Git se ha convertido en uno de los sistemas de control de versiones más populares
                        y ampliamente utilizados en la industria del desarrollo de software.
                    </p> <br />
                    <h2 className="text-3xl" >Caracteristicas de Git</h2>
                    <ul className="text-xl">
                        {caracteristicasGit.map(caracteristica=>{
                            return <ListaGit
                                key = {caracteristica.key}
                                comando = {caracteristica.caracteristica}
                                descripcion = {caracteristica.descripcion}
                            />
                        })}
                    </ul>
                </article>
            </div>
        
}

export default GitInfo;