


export function MiAplicacion() {
    const nombre = "Diogenes"
    const apellido = "Carrasco"
    const colores = ["Rojo", "Verde", "Azul", "Amarillo"]
    const isActivo = true
    const direccion = {
        calle: 'Por ahi 123',
        ciudad: 'TropiConce'
    }

    return (
        <>
            <h1>Hola desde mi aplicación</h1>
            <p>Hola {nombre} {apellido} en React</p>
            <h3>Colores</h3>
            <p>{colores.join(', ')}</p>
            <h3>Lista de Colores</h3>
            <ul>
                {
                    colores.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }

            </ul>

            <h4>ESTADO: {isActivo ? "Si" : "No"}</h4>

            <p style={{
                fontFamily: "Verdana",
                fontWeight: 'Bold',
                padding: 10,
                backgroundColor: isActivo ? 'lightGreen' : 'red'
            }}>Estilo</p>
            <br />
            <p>{JSON.stringify(direccion)}</p>


        </>
    )


}

