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

## useState hook

* O hook de **useState** é um dos mais utilizados;
* Utilizamos para **gerenciar o estado de algum dado,** variáveis não funcionam corretamente, o componente não re-renderiza;
* Para guardar o dado definimos o nome da variável e para alterar vamos utilziar **setNome**, onde nome é o nome do nosso dado;

```
import React from 'react'
import { useState } from 'react';

const ManageData = () => {
    let someData = 10;

    const [Number, setNumber] = useState(15);

    return (
        <div>
                      
          <div>
            <p>Valor: {Number}</p>
            <button onClick={() => setNumber(20)}>Mudar state</button>
          </div>
        </div>
      );
}

```

## Renderização de lista

* Uma outra ação bem comum é **renderizar listas** de dados no template;
* Fazemos isso com os dados com tipo de array;
* Utilizando o **método map** para nos auxiliar;
* Além dos dados podemos **inserir JSX** em cada iteração;


## A propriedade key

* Iterar listas sem a **propriedade key** nos gera um warning, podemos verificar isso no console;
* **O React precisa de uma chave única** em cada um dos itens iterados;
* Isso serve para **ajudá-lo na renderização do componente**;
* Geralmente teremos um **array de objetos** e podemos colocar key como alguma chave única, como  **id** de algum dado;
* Em **último caso** devemos utilizar o index do método map;

```
const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "João"]);
    const [users] = useState([
        { id: 78932, name: "Matheus", age: 13 },
        { id: 64654, name: "João", age: 50 },
        { id: 76124, name: "Pedro", age: 21 }

    ])
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>


        </div>
    )
}
```

## Previous state

* **Previous state** é um recurso que nos permite pegar o dado em seu vamor original dentro de um set de dado;
* **Isso é muito utilizado para modificar listas**, pois temos o valor antigo e transformamos em um valor novo;
* O **primeiro argumento** de um set sempre será o previous state;


## Renderização condicional

* **Renderização condicional** é quando imprimimos uma parte do template baseado em uma condição;
* Ou seja, utilizando uma **checagem com if**;
* Isso é interessante em sutuações como: usuário autenticado/não autenticado;

### Adicionando um else

* Podemos também reealizar um **if/else no JSX**;
* Aqui deveemos utilizar o **if ternário**;
* Onde temos a sintaxe: condição ? bloco 1: bloco 2;



## Props

* **Props** é outro recurso fundamental do React;
* Nos permite **passar valores de um componente pai para um componente filho;**
* Isso será muito útil quando os dados forem carregados via banco de dados, por exemplo;
* As props vem em um objeto no **argumento da função do componente**;

### Desestruturando props

* É super comum passar **mais de uma prop em um componente**;
* Para facilitar isso o React nos permite **desestruturar as propriedades que chegam,** com o recurso de destructuring;
* Se temos duas props: nage e age;
* Podemos fazer assim function MyComponent({name,age});
* Agora **não precisamos mais utilizar** props.algumaCoisa;

### Reutilização de componentes
* Com **props** a **reutilização de components** começa a fazer muito sentido;
* Se temos os dados de 1000 carros por exemplo, podemos **reaproveitar o nosso CarDetails 1000 vezes**

### Reutilização com loop

* Os arrays de dados podem ter **muitos itens** também;
* Então o correto é utilizar uma **estrutura de loop(map)** para sua exibição;
* E com isso conseguimos conciliar os **três conceitos**: renderização de listas,reaproveitamento de componentes e props;

```
{cars.map((car)=>(
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
```
## React Fragments

* Os **React fragments** são interessantes para quando precisamos ter mais de um elemento pai em um componente;
* Criamos uma tag vazia: <>...<>
* **E ela serve como elemento pai**, não alterando a estrutura do HTML com uma div, por exemplo;



## Children prop

* **Children Prop** é um recurso utilizado para quando um componente precisa ter JSX dentro dele;
* Porém **este JSX vem do componente pai**;
* Então o componente age como um **container**, abraçando estes elementos;
* E children é considerada uma **prop do componente**;


## Funções em props
* As **funções podem ser passadas para as props** normalmente;
* Basta criar a função no componente pai e **enviar como prop** para o componente;
* No componente filho ela pode ser ativada por um evento, por exemplo;

## Elevação de state



* Elevação de state ou **State lift** é quando um valor é elevado do componente filho para o componente pai;
* Geralmente temos **um componente que usa o state e outro que o altera**;
* Então precisamos passar a alteração para o componente pai, e este passa para o componente que usa o state;





