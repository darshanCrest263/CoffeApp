import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";
const dummy_data = [
  {
    name: "Espresso",
    price: 10,
    image: "https://coffeeatthree.com/wp-content/uploads/espresso-2.jpg",
    recipe: [
      {
        name: "espresso",
        quantity: 30,
      },
    ],
  },
  {
    name: "Espresso Macchiato",
    price: 12,
    image:
      "https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Espresso-Macchiato.jpg",
    recipe: [
      {
        name: "espresso",
        quantity: 30,
      },
      {
        name: "milk foam",
        quantity: 15,
      },
    ],
  },
  {
    name: "Cappucino",
    price: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Italian_breakfast_cappucino%2C_Esino_Lario.jpg/800px-Italian_breakfast_cappucino%2C_Esino_Lario.jpg",
    recipe: [
      {
        name: "espresso",
        quantity: 30,
      },
      {
        name: "steamed milk",
        quantity: 20,
      },
      {
        name: "milk foam",
        quantity: 50,
      },
    ],
  },
  {
    name: "Mocha",
    price: 8,
    image:
      "https://www.vitamix.com/media/other/images/Peppermint-Mocha-470x449.jpg",
    recipe: [
      {
        name: "espresso",
        quantity: 30,
      },
      {
        name: "chocolate syrup",
        quantity: 20,
      },
      {
        name: "steamed milk",
        quantity: 25,
      },
      {
        name: "whipped cream",
        quantity: 25,
      },
    ],
  },
  {
    name: "Flat White",
    price: 18,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-d8ada0f.jpg?quality=90&webp=true&resize=300,272",
    recipe: [
      {
        name: "espresso",
        quantity: 30,
      },
      {
        name: "steamed milk",
        quantity: 50,
      },
    ],
  },
  {
    name: "Americano",
    price: 7,
    image: "https://cdn.buttercms.com/AB7ud4YSE6nmOX0iGlgA",
    recipe: [
      {
        name: "espresso",
        quantity: 30,
      },
      {
        name: "water",
        quantity: 70,
      },
    ],
  },
  {
    name: "Cafe Latte",
    price: 16,
    image:
      "https://www.thespruceeats.com/thmb/TDlsRygTdhIGR11jn7OdJGLx9kA=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-caffe-latte-765372-hero-01-2417e49c4a9c4789b3abdd36885f06ab.jpg",
    recipe: [
      {
        name: "espresso",
        quantity: 30,
      },
      {
        name: "steamed milk",
        quantity: 50,
      },
      {
        name: "milk foam",
        quantity: 20,
      },
    ],
  },
  {
    name: "Espresso Con Panna",
    price: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Caff%C3%A8_con_panna.jpg/800px-Caff%C3%A8_con_panna.jpg",
    recipe: [
      {
        name: "espresso",
        quantity: 30,
      },
      {
        name: "whipped cream",
        quantity: 15,
      },
    ],
  },
  {
    name: "Cafe Breve",
    price: 15,
    image:
      "https://sipcoffeehouse.com/wp-content/uploads/2020/12/breve-768x432.jpg",
    recipe: [
      {
        name: "espresso",
        quantity: 25,
      },
      {
        name: "steamed milk",
        quantity: 30,
      },
      {
        name: "steamed cream",
        quantity: 30,
      },
      {
        name: "milk foam",
        quantity: 15,
      },
    ],
  },
];
function Menu() {
  return (
    <div className={classes.container}>
      {dummy_data.map((item) => {
        return (
          <MenuItem
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}
            ingredients={item.recipe}
          ></MenuItem>
        );
      })}
    </div>
  );
}

export default Menu;
