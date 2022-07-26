const TemplateExpressions = () => {
    const name = "Rodolfo"
    const data = {
        age:30,
        job:"programador",
    }
    return (
        <div>
            <h1>Olá {name},tudo bem?</h1>
            <p>Você atua como {data.job}  certo?</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
            
        </div>
    )
}

export default TemplateExpressions