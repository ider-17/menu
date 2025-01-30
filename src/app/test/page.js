const DATA = [
  {
    category: "Fruits",
    items: [
      {
        price: "$1", stocked: true, name: "Apple"
      },
      {
        price: "$1", stocked: true, name: "Dragonfruit"
      },
      {
        price: "$2", stocked: false, name: "Passionfruit"
      }
    ]
  },
  {
    category: "Vegetables",
    items: [
      {
        price: "$2", stocked: true, name: "Spinach"
      },
      {
        price: "$4", stocked: false, name: "Pumpkin"
      },
      {
        price: "$1", stocked: true, name: "Peas"
      }
    ]
  },
  {
    category: "Vegetables",
    items: [
      {
        price: "$2", stocked: true, name: "Spinach"
      },
      {
        price: "$4", stocked: false, name: "Pumpkin"
      },
      {
        price: "$1", stocked: true, name: "Peas"
      }
    ]
  }
]

function ProductRow(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>{props.foods.name}</p>
      <p>{props.foods.price}</p>
    </div>
  )
}

function ProductCatelogyRow(props) {
  const itemsArray = props.datasBox.items
  const itemsBox = [];
  for (let i = 0; i < itemsArray.length; i++) {
    itemsBox.push(<ProductRow foods={itemsArray[i]}/>)
  }

  return (
    <div>
      <div>
        <p style={{ textAlign: "center" }}>{props.datasBox.category}</p>
        {itemsBox}
      </div>
    </div>

  )
}

function ProductTable() {
  const datas = [];
  for (let i = 0; i < DATA.length; i++) {
    datas.push(<ProductCatelogyRow datasBox={DATA[i]} />)
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Name</p>
        <p>Price</p>
      </div>
      {datas}
    </div>
  )
}

function Searchbar() {
  return (
    <div>
      <input placeholder="Search..." style={{ marginLeft: 20 }} type="text" />
      <div style={{ display: "flex", flexDirection: "row", gap: 10, marginLeft: 20 }}>
        <input type="checkbox" style={{ marginTop: 10 }} />
        <p style={{ marginTop: 10, }}>Only show products in stock</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <div style={{ width: 300, border: "1px solid", margin: 50, padding: 10 }}>
        <Searchbar />
        <ProductTable />
      </div>
    </div>
  )
}