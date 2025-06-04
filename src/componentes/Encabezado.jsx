
import githuLogo from "../assets/githubLogo.webp"

function Encabezado()
{
    return (
        <header className='bg-white w-full h-auto p-4 flex flex-col gap-5 text-center shadow-xl shadow-gray-300 items-center justify-center'>
            <h1 className='md:text-8xl text-3xl sm:text-5xl	'  >La importancia del uso GitHub</h1>
            <div className='flex justify-center items-center w-1/2'>
                <img  onClick={() => window.open('https://github.com/', '_blank')} src={githuLogo} alt="gitHub" 
                    className='transform w-3/5 sm:w-1/5 hover:cursor-pointer hover:scale-105 transition duration-500 rounded-full 
                    hover:shadow-2xl hover:brightness-0 shadow-black '
                />
            </div>
            
        </header>
    )
}

export default Encabezado;