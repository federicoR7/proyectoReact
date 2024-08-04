import "./Horarios.css"

function Horarios() {
    return (

        <div className="container containerTabla">
            
                <table className="tabla">
                    <thead>
                        <tr className="fila">

                            <th>Atención</th>
                            <th>Días</th>
                            <th>Horarios</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr className="fila">
                            <th>Abierto</th>
                            <td>Lunes</td>
                            <td>9:30hs - 19hs</td>

                        </tr>
                        <tr className="fila">
                            <th>Abierto</th>
                            <td>Martes</td>
                            <td>9:30hs - 19hs</td>

                        </tr>
                        <tr className="fila">
                            <th>Abierto</th>
                            <td>Miércoles</td>
                            <td>9:30hs - 19hs</td>

                        </tr>
                        <tr className="fila">
                            <th>Abierto</th>
                            <td>Jueves</td>
                            <td>9:30hs - 19hs</td>

                        </tr>
                        <tr className="fila">
                            <th>Abierto</th>
                            <td>Viernes</td>
                            <td>9:30hs - 19hs</td>

                        </tr>
                        <tr className="fila">
                            <th>Abierto</th>
                            <td>Sábado</td>
                            <td>9:30hs - 19hs</td>

                        </tr>
                        <tr className="fila">
                            <th>Cerrado</th>
                            <td>Domingo</td>
                            <td class="cerrado"> ------------- </td>

                        </tr>
                    </tbody>
                </table>
            
        </div>

    )
}

export default Horarios;