# reactjs

## O que é React js

O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.

## O que é Node js

Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.

## Hello World

```
npx create-react-app <nome>

```
Podemos iniciar com npm start

## Estrutura Base

* Há algumas pastas e arquivos chave para o sesenvolvimento em React;
* **node_modules**: Onde as dependências do projeto ficam;
* **public**: Assets estáticos e HTML de incialização;
* **src**: Onde vamos programar as nossas apps;
* **src/index.js**: Arquivo de inicialização do React;
* **src/App.js:** Componente principal da aplicação;


## Emmet

* Emmet é uma extensão nativa do VS Code que ajuda a escrevere HTML mais rápido;
*Porém ela não vem configurada para o React!
*Temos que acessar File > Settings > Extensions e procurar por Emmet:
* Lá vamos incluir a linguagem:javascript-javascriptreact;


## Criando componentes

* Na maioria dos projetos os componentes ficam em uma pasta chamada **components**, quee devemos criar;
* Geralmente são nomeados com a **camel case**:FirstComponent.js;
* No arquivo **criamos uma função**, que contém o código deste componente( a lógica e o template);
* E também precisamos **exportar esta função**, para reutilizá-lo;

```
const FirstComponent = () => {

    return (
        <div>
            <h1>Meu Primeiro Componente</h1>
        </div>
    );
};

export default FirstComponent;const FirstComponent = () => {

    return (
        <div>
            <h1>Meu Primeiro Componente</h1>
        </div>
    );
};

export default FirstComponent;
```

## Importando componente

* A impoprtação é a maneira que temos de **reutilizar o componente**;
* Utilizamos a sintaxe: **import x from './components/X'** onde X é o nomee do componente;
* Para colocar o componente importado em outro componente,precisamos colocá-lo em forma de tag: **<FirstComponent/>**
* E então finalizamos o ciclo de importação;
* Vamos iimportar o FirstComponent em App;


## JSX

* **JSX** é o HTML DO React;
* Onde vamos declarar as tags de HTML que serão exibidas no navegador;
* Ficam no return do componente;
* Temos algumas diferenças do HTML, por exemplo: class será **className**;
* Isso se dá pelas **instruções semelhantes dee JS e HTML, pois o JSX é JavaScript, então algumas terão nomes diferentes;
* O JSC pode ter apenas **um elemento pai**;


## Comentários no componente

* Podemos inserir comentários de **duas maneiras** no componente;
* Na parte da função, onde ´eexecutada a lógica, a sintaxe é: // Algum comentário;
* e também no JSC: **{/* Algum comentário */}**
* As chavves nos permite **executar sentenças em JavaScript**, veremos isso mais adiante;


## Template Expressions

* **Template Expressions** é o recurso que nos permite executar JS no JSX e também **interpolar variáves;**
* Isso será muito útil ao longo dos seus projetos em React;
* A sintaxe é: **{algumCódigoEmJS}**
* **Tudo que está entre chaves é processado em JavaScript** e nos retorna um resultado;

```
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

```

## Hierarquia de componentes

* Os componentes que criamos **podem ser reutilizados em vários componentes**
* E ainda componentes **podem formar uma hierarquia**, sendo importados uns dentro dos outros, como fizemos em App;


## Evento de click

* Os eventos para o front-end são **essenciais**;
* Em várias situações vamos precisar do click,como ao **enviar formulários**;
* No React os eventos já estão 'prontos',podemos utilizar **onClick** para ativar uma função ao clicar em um elemento;
* Esta função é criada na própria função do componente;
* As funções geralmente tem o padrão **handleAlgumaCoisa;

```
const Events =()=>{

    const handleMyEvent =()=>{
        console.log("Ativou o envento!")
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
        </div>
    )
}

export default Events;

```

## Funções no evento


* Quando as funções são simples, podemos **realizar a lógica no próprio evento**;
* Isso **torna nosso código mais 'complicado'**, por atrelar lógica com HTML;
* Mas em **algumas situações é aplicável**;

```
const Events =()=>{

    const handleMyEvent =()=>{
        console.log("Ativou o envento!")
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
            
        </div>
    );
}

export default Events;

```

## Funções de renderização

* Podemos criar **funções que retornam JSX**;
* Isso serve para criar situações que **dependam de outras condições;**
* Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo;

```

 const renderSmothing = (x) => {

        if(x){
            return <h1>Renderizando isso</h1>;
        }else{
            return <h1>Também posso renderizar isso!</h1>
        }

    }

{renderSmothing(true)}
{renderSmothing(false)}

```

## Imagens no React

* As **imagens Públicas** do nosso projeto podem ficar na pasta public;
* De lá elas podem ser chamadas pelas tag img diretamente pelo 
**/nome.jpg;**
* Pois **a pasta public dica linkada com o src** das imagens;

```
{/*Quando a imagem está em public, basta uma barra para encontrar */}

      <div>
        <img src="/img1.jpg" alt="" />

      </div>

```

* A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada;
* Mas um padrão bem utilizada para as imagens dos projetos **é colocar em uma pasta chamada assets**, em src;
* Ou seja, você vai encontrar projetos com as **dias abordagens**;
* Em assets **precisamos importar as imagens**, e **o Src é dinâmico** com o nome de importação;

```
import City from './assets/city.jpg'

{/*Imagem em assets*/}

      <div>
        <img src={City} alt="Cidade" />

      </div>

```


## O que são hooks?

* Recursos do React que tem **diversas funções**;
* Como: **guardar e alterar o estado de algum dado** na nossa aplicação;
* Todos os hooks começam com **use**, por exemplo: **useState**;
* Podemos criar os nossos hooks, isso é chamado de **custom hook;**
* Os hooks precisam ser **importados**;
* Geralmente são úteis em todas as aplicações, **utilizaremos diversos ao longo do curso**;
