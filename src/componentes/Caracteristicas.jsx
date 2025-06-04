function Caracteristicas(props) {
    const { titulo, descripcion, imagen } = props.caracteristica;

    return (
        <div className='bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col gap-6 items-center justify-between'>
            <article className='text-center flex flex-col gap-3'>
                <header>
                    <h2 className='text-3xl font-semibold'>{titulo}</h2>
                </header>
                <div className="text-justify">
                    <p className='text-xl text-gray-700'>{descripcion}</p>
                </div>
            </article>
            <figure className="flex w-full h-72">
                <img className='w-full h-11/12 rounded-lg shadow-md object-cover' src={imagen} alt={titulo} />
            </figure>
        </div>
    );
}

export default Caracteristicas;
