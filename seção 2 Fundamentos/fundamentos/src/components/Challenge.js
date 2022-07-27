

const Challenge = () => {


    const handleMyEvent = () => {


        var num1 = document.querySelector('[data-js="num1"]').value;
        var num2 = document.querySelector('[data-js="num2"]').value;
        var resultado = (parseInt(num1) + parseInt(num2));
        document.querySelector( '[data-js="resultado"]' ).innerHTML = resultado;
        



    }
    return (
        <div>
            <p>Digite dois números e em seguida clique em somar</p>
            <div>Número 1<input data-js="num1" /></div>
            <div>Número 2<input data-js="num2" /></div>
            <button onClick={handleMyEvent}>Somar</button>

            <p id="result" data-js="resultado"></p>

        </div>
    )
}

export default Challenge;