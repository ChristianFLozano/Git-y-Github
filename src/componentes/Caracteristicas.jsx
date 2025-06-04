function Caracteristicas(props) {
    const { titulo, descripcion, imagen } = props.caracteristica;

    return (
        <div className='bg-gray-100 rounded-lg shadow-lg flex flex-col gap-6 p-5 items-center justify-between'>
            <article className='text-center flex flex-col gap-3 p-5'>
                <header>
                    <h2 className='text-3xl font-semibold'>{titulo}</h2>
                </header>
                <div className="text-justify">
                    <p className='text-xl text-gray-700'>{descripcion}</p>
                </div>
            </article>
            
        </div>
    );
}

export default Caracteristicas;
