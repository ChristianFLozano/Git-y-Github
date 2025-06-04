import image from "../assets/GitLogo.svg"
import comandosGit from "../ComandosGit";
import ListaGit from "./ListaGit";
import caracteristicasGit from "../CaracteristicasGit";
function GitInfo()
{
    return  <div className="flex lg:flex-row flex-col " > 
                <aside className="bg-orange-600 p-2 text-white lg:w-2/12">
                    <h2 className="text-2xl sm:text-3xl">Comandos de Git</h2>
                    <ul className="sm:text-lg flex flex-col gap-2">
                        {comandosGit.map(comando =>{
                            return <ListaGit
                                key = {comando.key}
                                comando = {comando.comando}
                                descripcion = {comando.descripcion}
                            />
                        })}
                    </ul>
                </aside>
                <article className="lg:w-10/12 p-3 bg-sky-950 text-white flex flex-col gap-4" >
                    <figure className="flex justify-center items-center"> 
                        <img className="hover:cursor-pointer w-1/2 sm:w-1/4" src={image} alt="logoGit" 
                                 onClick={() => window.open('https://git-scm.com/', '_blank')}/>
                    </figure>
                    <header>
                        <h1 className="text-4xl" >¿Que es Git?</h1>
                    </header>
                    <p className="text-xl text-justify" >
                        Git es un sistema de control de versiones distribuido de código abierto, 
                        diseñado para manejar proyectos de cualquier tamaño con rapidez y eficiencia. 
                        Fue creado por Linus Torvalds en 2005, el mismo creador del kernel de Linux, 
                        para gestionar el desarrollo del kernel de Linux. Desde entonces. <br />
                        Git se ha convertido en uno de los sistemas de control de versiones más populares
                        y ampliamente utilizados en la industria del desarrollo de software.
                    </p> <br />
                    <h2 className="text-3xl" >Caracteristicas de Git</h2>
                    <ul className="text-xl flex flex-col gap-5">
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