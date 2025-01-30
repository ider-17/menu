const menu = [
  {
    category: "SALADS",
    items: [
      { name: "CHICKEN CAESAR SALAD", tailbar: "Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken", price: "24,900₮" },
      { name: "GREEK SALAD", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: "21,900₮" },
      { name: "QUINOA POWER SALAD", tailbar: "A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing.", price: "22,500₮" },
    ],
  },
  {
    category: "BURGERS",
    items: [
      { name: "CLASSIC BURGER", tailbar: "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries.", price: "18,900₮" },
      { name: "BBQ BACON BURGER", tailbar: "Beef patty topped with crispy bacon, BBQ sauce, cheddar, and onion rings.", price: "21,900₮" },
      { name: "VEGAN BLACK BEAN BURGER", tailbar: "Homemade black bean patty, avocado, lettuce, tomato, and vegan mayo, served on a whole-grain bun.", price: "17,900₮" },
    ],
  },
  {
    category: "PASTA",
    items: [
      { name: "SPAGHETTI PASTA", tailbar: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta.", price: "20,900₮" },
      { name: "SEAFOOD MARINARA", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: "23,500₮" },
      { name: "PESTO CHICKEN PASTA", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: "21,000₮" },
    ],
  },
  {
    category: "PIZZA",
    items: [
      { name: "MARGHERITA PIZZA", tailbar: "Simple and classic with tomato sauce, fresh mozzarella, and basil leaves.", price: "30,900₮" },
      { name: "PEPPERONI FEAST", tailbar: "Loaded with pepperoni and melted mozzarella on a crispy crust.", price: "34,500₮" },
      { name: "VEGETARIAN DELIGHT", tailbar: "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes.", price: "29,900₮" },
    ],
  },
];


function CardFood(props) {

  return (
    <div className="card-container">
      <div className="food-header">
        <p>{props.food.category}</p>
      </div>
      <div className="food">
        <div className="food-title">
          <h6>{props.food.items[0].name}</h6>
          <p>{props.food.items[0].price}</p>
        </div>
        <div className="food-text">{props.food.items[0].tailbar}</div>
      </div>
      <div className="food">
        <div className="food-title">
          <h6>{props.food.items[1].name}</h6>
          <p>{props.food.items[1].price}</p>
        </div>
        <div className="food-text">{props.food.items[1].tailbar}</div>
      </div>
      <div className="food">
        <div className="food-title">
          <h6>{props.food.items[2].name}</h6>
          <p>{props.food.items[2].price}</p>
        </div>
        <div className="food-text">{props.food.items[2].tailbar}</div>
      </div>
    </div>
  )

}

export default function Home() {
  const card = [];

  for (let i = 0; i < menu.length; i++) {
    card.push(<CardFood food={menu[i]}></CardFood>)

  }
  return (
    <div>
      <p className="title">pranzo</p>
      <div className="container">
        {/* <CardFood></CardFood> */}
        {card}
      </div>
    </div>
  );
}