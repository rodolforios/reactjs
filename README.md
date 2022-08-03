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



## CSS global

* O **CSS global** é utilizado para estilizar diversos elementos em comun ou fazer um reset noCSS;
* Ulilizamos o arquivo **index.css** para isso;
* Ele está na pasta src;

## CSS  de componente
* O **CSS de componente** é utilizado para um componente em específico;
* Geralmentne **é criado um arquivo com o mesmo nome do componente** e este ´-e **importado non componente**;
* Note que este método **não é scoped**, ou seja, o CSS vaza para outros componentes se houver uma regra em colisão;
* O React já cria um exemplo desta técnica com o App.css/js;

## Inline style

* O inlinne syle do react é **igual o do CSS**;
* Por meio do **atributo style** consneguimos aplicar regras diretametne em umm elemento;
* **Devemos optar por outras maneiras de CSS**, o inline pode dificultar a manutenção ou deixar o código imprevisível em algumas situações;

```
 <p style={{color:"blue",padding:"25px",borderTop:"2px solid red"}}>Este elemento foi estilizado de formo inline</p>
```


## Inline style Dinâmico

* O **CSS dinâmico inline** aplica estilo baseado em uma condicional;
* Vamos inserir no atributo um **if ternário**;
Dejpendendo da condição podemos mudar que regras de estili um elemento recebe;
```
const n = 15
<h2 style={n < 10 ? ({color:"purple"}):({color:"pink"}) }>CSS dinâmico</h2>
```


## Classese dinâmicas no CSS 
* Podemos também aplicar lógica para **mudar a classe de CSS de um elemento**;
* Também utilizaremos o **if ternário**;
* Essa abordagem é **mais interessante que o CSS inline**;
* Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código;

```
const redTitle = true;
<h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
```

## CSS Modules

* O **CSS Modules é um recurso de CSS scoped;
* Ou seja, ele vai ser **exlusivo do componente**;
* O nome do arquivo é : Componente.module.css;
* Precisamos importá-lo também no componente;

## Formulários e React

* No React vamos também utilizar a **tag form** para formulários;
* As labels dos inputs contém o atributo **htmlFor**, que deve ter o valor do name do input;
* **Não utilizamos action**, pois o processamento será feito de form assíncrona;
```
<form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" />
            </div>
            <input type="submit" value="Enviar" />
 </form>
 ```

## Label envolvendo o input

* Em React um padrão comum é a **tag label envolvendo o unput**;
* Isso faz com que o atraibuto for se torne **opcional**;
* **Simplificando nossa estrutura de HTML**, sem perder a semântica;

```
<label>
            <span>E-mail</span>
            <input type="email" name="email" placeholder="Digite seu e-mail" />
</label>
```

## Manipulação de valores

* Para manipular os valores dos inputs vamos utilizar o **hook useState**;

* Ou seja, podemos armazenar na varável **e utilizar o set para alterar o valor;**
* Vamos criar uma função para alterar o valor no evento **onChange**;
* Deixando nosso código fávil de trabalhar nas próximas etapas: como envio dos dados para BD e validação;

```
// Geraciamento de dados
  const [name,setName] = useState()

   const handleName = (e)=>{
    setName(e.target.value)
  }


<div>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} />
</div>
```

## Simplificando a manipulação

* Quando temos vários inputs podemos **realizar a manipulação de forma mais simnples**;
* Basicamente criamos uma **função inline no onChange**;
* Ela vai **alterar o valor do state** com o método set, da mesma forma que a função isolada;

```
 <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
```

## Envio de formulário

* Para enviar um form vamos utilizar o evento **onSubmit**ç
* **Ele chamará uma função**, e nesta devemos lembrar de parar a submissão com o **preventDefault**;
* Nesta etapa podemos realizar validações, envio de form para os ervidor,reset de form e outras ações;

```
<form onSubmit={handleSubmit}>


const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("enviando formulário")
    console.log(name,email);
  }


```

## Controlled inputs

* **Controlled inputs** é um recurso que nos permite mais flexibilidade nos forms de React;
* Precisamos apenas **igualar o valor ao state**;
* Um uso muito comum: formuláriosde edição, que os dados vem do back-end, conseguiremos preencer o input mais facilmente;

```
//props no app.js
<MyForm user={{name:"Pedro", email: "pedro@pedrosa.com"}} />

//props no MyForm.js
const MyForm = ({user})

//Adição de value no final de cada input

<input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>

```

## Limpando formulários

* Com o controller inputs limpar o form será **fácil**;
* Basta **atribuir um valor de uma string vazia aos states** e pronto!
* Isso será feito após o envio, em formulários que o usuário precisa preencher novamente;

```
  setName('');
  setEmail('');
```

## Input de Textarea

* O textarea **pode ser considerado um input de text**normal;
* Utilizaremos o **value** para alterar o state inicial;
* E o evento **onChange** para modificar o valor do state;

```
<label htmlFor="bio" >
          <span>Bio:</span>
          <textarea name="bio"  placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)}></textarea>
</label>
```

## Input de Select

* O select também será **muito semelhante** aos outros inputs;
* Quando temos a alteração de um valor o **evento onChange** pode captar isso;
* O value também pode atribuir qual **option** estará selecionada;

```
 <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) =>setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="Editor">Editor</option>
            <option value="Admin">Admin</option>
          </select>
</label>

```

## JSON server

* O **JSON server** é um pacote npm;
* Ele **simula API**, e isso nos possibilita fazer requisições HTTP;
* Vamos aprender a **integrar este recurso com o React**;
* Podemos entender isso como uma etapa de preparação para APIs reais;
* Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no back-end

```
//inserir no package.json
"server": "json-server --watch data/db.json"
```

## A importância do useEffect

* O **useEffect** faz com que determinada ação seja executada apenas uma vez;
* Isso é interessante pois os comopnentes estão sempre se **re-renderizando**, então precisamos ter ações únicas às vezes;
* O useEffect ainda possui um **array de dependências** que deve conter os dados que ativem a execução da função de forma automática;
* O useEffect estará presente sempre nas **requisições assíncronas**!


## Resgatando dados com React

* Para trazer os dados vamos ter que utilizar vários recursos;
* Primeiramente ter um local para salvá-los (**useState**);
* Renderizar a chamada a API  apenas uma vez(**useEffect**);
* Um meio de fazer a requisição assíncrona(**Fetch API**);

## Adicionando dados

* Para adicionar um item vamos precisar resgatar os dados do form com o **useState**;
* Reunir eles em uma **função após o submit** e enviar um request de **POST** para a nossa **API**
* O processo é bem parecido com o de resgate de dados, mas  agora estamos **enviando dados**;

```
const handleSubmit = async(e)=>{
    e.preventDefault()

    const product = {
      name,
      price,
    };
    const res = await fetch(url,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(product),
    })
    

  }


  <ul>
        {products.map((product)=>(

          <li key ={product.id}>{product.name} - R$ {product.price}</li>


        ))}


        <div className="add-product">
        <form onSubmit={handleSubmit}>

          <label>Nome:
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </label>
          <label>Preço:
            <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>


```

## Carregamento dinâmico dde dados

* Se a requisição foi feita com sucesso, podemos **adicionar o item a lista após o request**
* Isso torna nossa aplicação mais **performática**;
* Utilizaremos o **set do useState** para isso;

```

const addedProduct = await res.json()

setProducts((prevProducts)=>[...prevProducts,addedProduct])

setName('');
setPrice('');
  }

```

## Custom hook para o fetch

* É normal dividir funções que poddem ser reaproveitadas em hooks;
* Esta técnica é chamada de **custom hook**, e vamos criar um para o resgate de dados;
* Os hooks geralmente ficam na **pasta hooks**;
* Devemos utilizar o padrão **useName**;
* Basicamente criamos uma função e exportamos ela;

## Refatorando o POST

* Poddemos **utilizar o mesmo hook** para incluir uma etapa de POST;
* **Vamos criar um novo useEffect** que mapeia uma outra mudança de estado;
* Após ela ocorrer executamos a adição de produto;
* **Obs:** nem sempre reutilizar um hook é a melhor estratégia.


## Estado de loading
* Quando fizermos requisições para APIs **é normal que haja um interrvalo de loading entre a requisição e o recebimento** da resposta;
* POdemos fazer isso no nosso **hook** também;
* **Identificar quando começa e termina**este estado;

## Estado de loading no POST
* Podemos bloquear ações indevidas em outras requests também, **como no POST**;
* Uma ação interessante é **remover a ação de adicionar outro item** enquanto o request ainda não finalizou;

## Tratando erros

* Podemos tratar os erros das requisições por meio de um **try cactch**;
* Além de pegar os dados do erro, também podemos **alterar um state para imprimir um elemento se algo der errado**
* Desta maneira conseguimos **prever vários cenários**(dados resgatados,carregamento e erro);


## O que é React Router?

* **React Router** é um dos pacotes mais utilizados para criar uma estrutura de rotas em aplicações de React;
* Ou seja, permite que nossas **SPAs tenham múltiplas páginas*;
* Precisamos **instalar** no nosso projeto;
* *A **configuração e utilização é simples;
* também temos outras funções como: **Redirect,Nested Routes, Not Found Routes** e outos;
```
npm install react-router-dom
npm install json-server
```


## Configurando o React Router

* Para configurar o React Router vamos ter que importar três elementos de **react-router-dom**;
* **BrowserRouter**: Define onde a área do nosso app que vai trocar as páginas;
* **Routes**: Define as rotas;
* **Route** um elemento deste para cada rota, configurar com path e componennte da rota;

```


<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>

          
        </Routes>

</BrowserRouter>

```

## Adicionando Links

* Para criar links para as páginas vamos precisar utilizar o **Link** do React Router;
* No link configuramos o parâmetro **to**, que recebe a **URL/path** que será redirecionado quem clicar no link;

```
<nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
</nav>

```

## Carregando dados

* Vamos exercitar novamente o carregamento de dados com nosso hook **useFetch**;

* Depois poderemos utilizá-los para o **carregamento de dados individuais**;
* Utilizaremos o hook igual ao da última seção e vamos imprimir os produtos na Home da mesma forma;


## Rota dinâmica

* Para criar uma rota dinâmica vamos precisar definir uma **nova Route** em App.js;
* Que deve ter o padrão de: **/products/:id**
* Onde **:id** é o dado dinâmico, ou seja, podemos ter qualquer valor;
* Na página podemos utilizar o hook **useParams** para resgatar esta informação;

## Carregando dado individual

* Graças ao passo dado na aula passada o **carregamento individual** de um produto será fácil;
* Vamos utilizar o id recebido para **formar a nova URL**;
* E por fim poddemos utilizar o hook **useFetch** para trazer o item;
* Por fim faremos a **validação e impressão** do mesmo no JSX;

## Nested route

* As nested routes indicam ** URLs mais complexas**, como:
**/products/:id/something;**
* Neste caso vamos precisar criar um componente que corresponda com o padrão indicado e também a URL em App.js;
* Na nested route **teremos o acesso ao parâmetro da URL** também;


## No match route(404)

* Podemos criar uma **página 404** facilmente com o React Router;
* Basta **criarmos o componente** da página;
* E no arquivo App.js definir um **path como***

## Link ativo

* Para ter fácil acesso a uma modificação para os links ativos vamos trocar o Link pelo **NavLink**;
* Neste elemento temos acesso a um valor chamado **isActive**;
* Ou seja, podemos **ativar uma classe** se a rota atual for a que está no **atributo to**;


## Search Params

* **Search Params** é um recurso que permitee obter o que vem na URL em forma de parâmetro, ex: produtos/ **q=camisa**
* Utilizamos o hook **useSearchParams** para obtê-lis;
* Com este recurso fica simples fazer uma **funcionalidade de busca** no sistema;


## Redirect

* Podemos precisar de um **redirecionamento de páginas** eventualmente;
* **Exemplo:** uma página antiga do sistema responde agora a uma nova URL;
* Para isso vamos **criar a rota com Route** normalmente;
* Mas em element vamos utilizar o **componente Navigate** com **to** que vai para a rota correta;


-----------------------------------

## Instalando typescript

* Para instalar o TypeScript vamos utilizar o **npm**;
* O nome do pacote é **typescript**;
* E vamos adicionar de forma global com a **flag -g**
* A partir da instalação temos como **executar/compilar** TS em qualquer local da nossa máquina, com o comando tsc;

## React com TS

* Adicionar **TypeSAcript ao React** nos dá mais possibilidades;
* Seguindo a mesma linha de que em JS, **temos uma forma mais padronizada** para programar;
* Como **tipos para componentes** ou mapeamento de **props por meio de interface**
* Isso dá mais **confiabilidade** ao projeto e está sendo cada vez mais utilizado hoje em dia;

## Instalando React com TS

* Para instalar o TS junto do React é simples;

* Vamos começar com create-react-app e adicionar a  lag-template com o valor de typescript;

• **Um novo projeto é criado**, agora com arquivos .**tsx;**

* Podemos inicializá-lo normalmente;

```
npx create-react-app 11_react_com_ts --template typescript
```

## Estrutura de React
• A estrutura de React quando adicionamos TS **não muda muito**;

* Temos as pastas clássicas como: **node_modules**, **src** e **public**;

• Em src que as coisas ficam diferentes, temos a criação de **arquivos.tsx**;

* **Que são arquivos jsx** porém com a possibilidade de aplicação das funcionalidades de TS;

Podemos executar o projeto com **npm run start**;

## Criação de varáveis em componentes

* Podemos **criar varáveis** dentro dos componentes;
* e elas podem receber os tipos que já vimos até este momento do curso;
* Isso nos permite **trabalhar com JSX** com apoio destas variáveis e seus tipos;

## Criação de funções em componentes

* Podemos também criar **funções em componentes**;
* Estas funções recebem **parâmetros**, que **podem ser tipados**;
* E o saeu retorno também;
* Ou seja, podemos aplicar os mesmos conceitos que já vimos de TS;


## Extensão para react com TS

* A extensão que vamos utilizar é a **TypeScript React code snippets**;
* Ela nos ajuda com **atalhos** para programar mais rápido;
* Como o **tsrafce**, que cria um componente funcional;
* Isso torna o nosso dia a dia mais simples;


## Importando componentes

* A importação de componente **funciona da mesma forma que sem TypeScript**
* Porém temos que nos atentar aos **valores e tipos das props** de cada componente;
* O TS interage de forma mais sucinta na parte da importação;
