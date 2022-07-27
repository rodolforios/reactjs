const Events =()=>{



    const handleMyEvent =()=>{
        console.log("Ativou o envento!")
    }

    const renderSmothing = (x) => {

        if(x){
            return <h1>Renderizando isso</h1>;
        }else{
            return <h1>Também posso renderizar isso!</h1>
        }

    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={()=>console.log("Clicou!")}>Clique também!</button>
                <button onClick={()=>{
                    if(true){
                        console.log("isso não deveria existir =/")
                    }
                }}>Clique aqui por favor!</button>
            </div>
            {renderSmothing(true)}
            {renderSmothing(false)}
            
        </div>
    );
}

export default Events;