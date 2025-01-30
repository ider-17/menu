

// function Good(props) {
//   const suirel = [];
//   suirel.push(<Good />)
//   // for (let i = 0; i <  )
//   return(
//       <div>
//           <p>{DATA.name}</p>
//           <p>{DATA.price}</p>
//       </div>
//   )
// }

// function Table(props) {
//   const categorys = [];
//   for (let i = 0; i < DATA.length; i++) {
//     categorys.push(<Table category={DATA[i].category} />)
//   }
//   return (
//     <div id="table">
//       <div className="category">{props.categorys}</div>
//       <div className="foodItems">{ }</div>
//     </div>
//   )
// }

// export default function Home() {
//   const DATA = [
//     { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//     { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//     { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//     { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//     { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//     { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
//   ]
//   return (
//     <div>
//       <div style={{ width: 300, border: "1px solid", margin: 50, padding: 10 }}>
//         <div>
//           <input placeholder="Search..." style={{ marginLeft: 20 }} type="text" />
//           <div style={{ display: "flex", flexDirection: "row", gap: 10, marginLeft: 20 }}>
//             <input type="checkbox" style={{ width: 17, marginTop: 10 }}/>
//             <p style={{ marginTop: 10 }}>Only show products in stock</p>
//           </div>
//         </div>
//         <div style={{ marginTop: 20 }}>
//           <div style={{ display: "flex", justifyContent: "center", gap: 70 }}>
//             <p>Name</p>
//             <p>Price</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



function ProductItems() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>Apple</p>
      <p>$1</p>
    </div>
  )
}

function ProductCatelogy() {
  return (
    <div>
      <p style={{ textAlign: "center" }}>Fruits</p>
    </div>
  )
}

function ProductTable() {
  return (
    <div>
      <ProductCatelogy />
      <ProductItems />
    </div>
  )
}

function ProductTableContainer() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Name</p>
        <p>Price</p>
      </div>
      <ProductTable />
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
        },
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

  return (
    <div>
      <div style={{ width: 300, border: "1px solid", margin: 50, padding: 10 }}>
        <Searchbar />
        <ProductTableContainer />
      </div>
    </div>
  )
}