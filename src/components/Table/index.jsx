import './table.css'

const Table = () => {
    return (
        <>
            <h2 className='table-title'>Classificação de IMC</h2>
            <table>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='IMC'>Abaixo do peso</td>
                        <td className='IMC'>Menor que 18,5</td>
                    </tr>
                    <tr>
                        <td className='IMC'>Peso normal</td>
                        <td className='IMC'>18,5 - 24,9</td>
                    </tr>
                    <tr>
                        <td className='IMC'>Sobrepeso</td>
                        <td className='IMC'>25,0 - 29,9</td>
                    </tr>
                    <tr>
                        <td className='IMC'>Obesidade grau 1</td>
                        <td className='IMC'>30,0 - 34,9</td>
                    </tr>
                    <tr>
                        <td className='IMC'>Obesidade grau 2</td>
                        <td className='IMC'>35,0 - 39,9</td>
                    </tr>
                    <tr>
                        <td className='IMC'>Obesidade grau 3 (obesidade mórbida)</td>
                        <td className='IMC'>Maior ou igual a 40,0</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;