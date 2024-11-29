import React from 'react'

function Encabezado()
{
    return (
        <header className='bg-white w-full h-auto p-4 flex flex-col text-center shadow-xl shadow-gray-300 items-center justify-center'>
            <h1 className='md:text-8xl text-3xl sm:text-5xl	'  >La importancia del uso GitHub</h1>
            <img  onClick={() => window.open('https://github.com/', '_blank')} src="./src/assets/githubLogo.webp" alt="gitHub" 
                className='w-1/2 sm:w-1/5 hover:cursor-pointer hover:scale-105 '
            />
        </header>
    )
}

export default Encabezado;