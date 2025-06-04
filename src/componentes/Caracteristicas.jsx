
function Caracteristicas(props) {
    const { titulo, descripcion, imagen } = props.caracteristica;

    return (
        <div className='bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center justify-between'>
            <article className='text-center'>
                <header className='mb-4'>
                    <h2 className='text-2xl font-semibold'>{titulo}</h2>
                </header>
                <div>
                    <p className='text-gray-700'>{descripcion}</p>
                </div>
            </article>
            <figure className='mt-4'>
                <img className='w-full h-auto rounded-lg shadow-md' src={imagen} alt={titulo} />
            </figure>
        </div>
    );
}

export default Caracteristicas;
