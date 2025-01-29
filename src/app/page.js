const menu = [
  {
    category: "SALADS",
    items: [
      { name: "CHICKEN CAESAR SALAD", tailbar: "Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken", price: 24900 },
      { name: "GREEK SALAD", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: 21900 },
      { name: "QUINOA POWER SALAD", tailbar: "A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing.", price: 22500 },
    ],
  },
  {
    category: "BURGERS",
    items: [
      { name: "CLASSIC BURGER", tailbar: "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries.", price: 18900 },
      { name: "BBQ BACON BURGER", tailbar: "Beef patty topped with crispy bacon, BBQ sauce, cheddar, and onion rings.", price: 21900 },
      { name: "VEGAN BLACK BEAN BURGER", tailbar: "Homemade black bean patty, avocado, lettuce, tomato, and vegan mayo, served on a whole-grain bun.", price: 17900 },
    ],
  },
  {
    category: "PASTA",
    items: [
      { name: "SPAGHETTI PASTA", tailbar: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta.", price: 20900 },
      { name: "SEAFOOD MARINARA", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: 23500 },
      { name: "PESTO CHICKEN PASTA", tailbar: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.", price: 21000 },
    ],
  },
  {
    category: "PIZZA",
    items: [
      { name: "MARGHERITA PIZZA", tailbar: "Simple and classic with tomato sauce, fresh mozzarella, and basil leaves.", price: 30900 },
      { name: "PEPPERONI FEAST", tailbar: "Loaded with pepperoni and melted mozzarella on a crispy crust.", price: 34500 },
      { name: "VEGETARIAN DELIGHT", tailbar: "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes.", price: 29900 },
    ],
  },
];


function CardFood(props) {
  
  return (
    <div className="card-container">
      <div className="food-header">
        <p>SALADS</p>
      </div>
      <div className="food">
        <div className="food-title">
          <h6>CHICKEN CAESER SALAD</h6>
          <p>24.900₮</p>
        </div>
        <div className="food-text">Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken</div>
      </div>
      <div className="food">
        <div className="food-title">
          <h6>GREEK SALAD</h6>
          <p>21.900₮</p>
        </div>
        <div className="food-text">Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.</div>
      </div>
      <div className="food">
        <div className="food-title">
          <h6>QUINOA POWER SALAD</h6>
          <p>22.500₮</p>
        </div>
        <div className="food-text">A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing.</div>
      </div>
    </div>
  )

}

export default function Home() {
  const card = [];

  for (let i = 0; i < 4; i++) {
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