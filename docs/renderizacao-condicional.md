# [🏠](./README.md) - Componentes

## Renderização condicional

Os nossos componentes muitas vezes precisam de apresentar diferente tipos de conteudo dependendo de certas condições.  
Em React podemos apresentar diferente tipo conteudo em JSX com recurso a Javascript simplesmente utilizando condições `if/else` ou com recurso a `operador ternarios (? :)` ou simplemsmente utilizado o `operador logico &&`.

**_Exemplo:_**
Pretendemos criar um sistema que valide se o produto se encontra em distibuição e adicione a string - "Em entrega" caso o item se encontre em Distribuição

```JSX
// JSX

// Componente Item - recebe parametros :
// - name: nome do produto - string
// - onDelivery: Se se encontra em distibuição - booleano
function Item({ name, onDelivery }) {
  return <li className="item">{name}</li>;
}

// Componente principal
// Este componente possui uma lista de componentes Item
export default function MailingValidationSystem() {
  return (
    <section>
      <h1>Estados das entregas</h1>
      <ul>
        <Item
          onDelivery={true}
          name="Relogio - AMAZON"
        />
        <Item
          onDelivery={true}
          name="Telemovel - PCDIGA"
        />
        <Item
          onDelivery={false}
          name="Meias - Worten"
        />
      </ul>
    </section>
  );
}
```

Reparem que na lista de componentes que queremos apresentar alguns componentes estão a passar a propriedade onDelivery a `true` outros a `false`.  
Temos de adicionar o texto " | Em Distibuição " caso o onDelivery seja `true`.

### **If / Else**

Vejamos como podemos criar esta renderização condicional com recurso a `if / else`:

```JSX
//JSX
function Item({name, onDelivery }) {

    if (onDelivery) {
        return <li className="item">{name} | Em entrega</li>
    }

    return <li className="item">{name}</li>
}
```

### **Operador Ternário**

Vejamos como podemos criar esta renderização condicional com recurso a `Ternários (condicao ? true : false)`:

```JSX
//JSX
function Item({name, onDelivery }) {

    return onDelivery
        ? <li className="item">{name} | Em entrega</li>
        : <li className="item">{name}</li>
    }

// O mesmo que:

function Item({name, onDelivery }) {

    return (
        <li className="item">
            {onDelivery ? `${name} | Em entrega` : name}
        </li>
        )
    }
```

Este tipo de escrita é bom para componentes simples e estruturas pequenas, caso vejam que as coisas começam a ficar com demasiados niveis de logica de ternarios extraiam essa logica para ou outros componentes ou variaveis de forma ao codigo ficar mais legivel.

```JSX
//JSX
function Item({name, onDelivery }) {

    const onDeliveryStatus = onDelivery ? `${name} | Em entrega` : name

    return <li className="item">{onDeliveryStatus}</li>
}
```

### **Operador Logico "&&"**

Outra forma comun que podem vir a encontrar em projetos React é a utilização do operador logico `&&`. Normalmente existe sempre que queremos renderizar algo cuja condição seja valida e não necessitamos de renderizar a condição negativa. Com o `operador &&` poderiamos renderizar o "| Em entrega" só se a variavel onDelivery for true.

```JSX
function Item({name, onDelivery }) {

  return (
      <li className="item">
          {name} {onDelivery &&  "| Em entrega"}
      </li>
      )
  }
```

Componentes em React não são mais do que funções que retornam [JSX](./JSX.md)

```jsx
function Component() {
	return (
		<div>
			<h1>Titulo do Componente</h1>
			<p>Conteudo</p>
		</div>
	);
}
```

Normalmente os componentes são divididos em ficheiros (.jsx, ou .tsx)
