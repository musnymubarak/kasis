import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  burger: [
    { name: 'B1. Chicken Fillet Burger', desc: 'Classic crispy chicken fillet breast in a soft sesame bun with lettuce and mayo.', price: '3.99', mealPrice: '5.99', image: '/images/Burgers/1/chicken_fillet-removebg-preview.png', popular: true },
    { name: 'B2. Double Fillet Burger', desc: 'Two golden crispy chicken breast fillets stacked high with lettuce and mayo.', price: '5.99', mealPrice: '8.49', image: '/images/Burgers/1/Double fillet.png' },
    { name: 'B3. Tower Burger', desc: 'Crispy chicken fillet burger topped with cheese and a golden hash brown.', price: '4.50', mealPrice: '6.99', image: '/images/Burgers/1/Tower burger.png' },
    { name: 'B4. Ringer Burger', desc: 'Delicious chicken fillet burger stacked with crispy onion rings, lettuce, and mayo.', price: '4.50', mealPrice: '6.99', image: '/images/Burgers/1/ringer Burger.png' },
    { name: 'B5. BBQ Burger', desc: 'Tender crispy chicken breast fillet glazed in sweet and smokey BBQ sauce.', price: '5.00', mealPrice: '7.49', image: '/images/Burgers/1/bbq_burger-removebg-preview.png' },
    { name: 'B6. Peri Peri Burger', desc: 'Flame-marinated peri peri chicken breast grilled fresh to order.', price: '6.50', mealPrice: '7.99', image: '/images/Burgers/1/Peri Peri.png' },
    { name: 'B7. Fish Burger', desc: 'Crispy fish fillet served with fresh tartar sauce and melted cheese.', price: '3.50', mealPrice: '4.99', image: '/images/Burgers/2/fioshburger.png' },
    { name: 'B8. Veggi Burger', desc: 'A delicious vegetable patty packed with fresh greens and select herbs.', price: '3.50', mealPrice: '5.49', image: '/images/Burgers/2/veg_burger-removebg-preview.png' },
    { name: 'B9. Cheese Burger', desc: 'Juicy single beef patty topped with melted cheddar cheese, pickles, and ketchup.', price: '2.50', mealPrice: '4.00', image: '/images/Burgers/2/cheese_burger-removebg-preview.png' },
    { name: 'B10. Double Cheese Burger', desc: 'Two savory beef patties stacked with double melted cheese, pickles, and ketchup.', price: '4.00', mealPrice: '5.99', image: '/images/Burgers/2/double_cheese-removebg-preview.png' },
    { name: 'B11. Beef Burger 1/4 Pounder', desc: 'Premium 1/4 lb flame-grilled beef burger served in a soft bun with lettuce and sauce.', price: '4.50', mealPrice: '6.99', image: '/images/Burgers/2/beef burger .png' },
    { name: 'B12. Beef Burger 1/2 Pounder', desc: 'Massive 1/2 lb flame-grilled beef burger stack — the ultimate classic.', price: '5.50', mealPrice: '7.99', image: '/images/Burgers/2/beef burger half.png', popular: true }
  ],
  chicken: [
    { name: 'C1. 1 Piece Meal', desc: '1 piece of signature crispy fried chicken, regular fries, and a soft drink.', price: '3.99', image: '/images/Chicken/1pcs.png' },
    { name: 'C2. 2 Piece Meal', desc: '2 pieces of signature crispy fried chicken, regular fries, and a soft drink.', price: '6.49', image: '/images/Chicken/2pcs.png', popular: true },
    { name: 'C3. 3 Piece Meal', desc: '3 pieces of signature crispy fried chicken, regular fries, and a soft drink.', price: '7.49', image: '/images/Chicken/3pcs.png' },
    { name: 'C4. 6 Piece Meal', desc: '6 pieces of crispy chicken, 3 regular fries, and 2 drink cans.', price: '14.49', image: '/images/Chicken/6pcs.png', family: true },
    { name: 'C5. 10 Piece Meal', desc: '10 pieces of crispy chicken, 4 regular fries, and a 1.5L bottle drink.', price: '19.99', image: '/images/Chicken/6pcs.png', family: true },
    { name: 'C6. 14 Piece Meal', desc: '14 pieces of crispy chicken, 6 regular fries, and a 1.5L bottle drink.', price: '24.99', image: '/images/Chicken/6pcs.png', family: true },
    { name: 'C7. Wings (3 pcs)', desc: '3 hot & spicy wings, perfect as a snack or a full meal.', price: '1.89', mealPrice: '3.99', image: '/images/Chicken/Wings.png' },
    { name: 'C7. Wings (6 pcs)', desc: '6 hot & spicy wings, perfect for sharing.', price: '3.50', mealPrice: '5.49', image: '/images/Chicken/Wings.png' },
    { name: 'C7. Wings (10 pcs)', desc: '10 hot & spicy wings of pure crispy pleasure.', price: '4.89', image: '/images/Chicken/Wings.png' },
    { name: 'C8. Strips (3 strips)', desc: '3 golden crispy chicken breast strips.', price: '2.99', mealPrice: '4.99', image: '/images/Chicken/Strips.png' },
    { name: 'C8. Strips (6 strips)', desc: '6 golden crispy chicken breast strips.', price: '4.99', mealPrice: '6.99', image: '/images/Chicken/Strips.png' },
    { name: 'C9. Popcorn Chicken (Regular)', desc: 'Regular portion of crispy bite-sized popcorn chicken.', price: '4.99', image: '/images/Chicken/Popcorn.png' },
    { name: 'C9. Popcorn Chicken (Large)', desc: 'Large portion of crispy bite-sized popcorn chicken.', price: '5.99', image: '/images/Chicken/Popcorn.png' },
    { name: 'C10. Nuggets (6 pcs Meal)', desc: '6 pieces of nuggets served with regular fries and a drink.', price: '4.99', image: '/images/Chicken/Nuggets.png' },
    { name: 'C10. Nuggets (9 pcs Meal)', desc: '9 pieces of nuggets served with regular fries and a drink.', price: '5.99', image: '/images/Chicken/Nuggets.png' },
    { name: 'C11. BBQ Wings (3 pcs)', desc: '3 pieces of wings coated in sweet BBQ glaze.', price: '2.99', mealPrice: '4.99', image: '/images/Chicken/Wings1.png' },
    { name: 'C11. BBQ Wings (6 pcs)', desc: '6 pieces of wings coated in sweet BBQ glaze.', price: '4.79', mealPrice: '6.79', image: '/images/Chicken/Wings1.png' }
  ],
  wraps: [
    { name: 'R1. Wrap', desc: 'Soft flour tortilla wrapped with crispy chicken fillet and fresh salad.', price: '4.50', mealPrice: '5.99', image: '/images/Wrap/wrap.png' },
    { name: 'R2. Spicy Wrap', desc: 'Fiery spicy chicken fillet wrap with fresh salad and spicy sauce.', price: '4.50', mealPrice: '5.99', image: '/images/Wrap/Spicy wrap.png' },
    { name: 'R3. Peri Peri Wrap', desc: 'Flame-marinated peri peri chicken wrap with fresh salad.', price: '4.50', mealPrice: '5.99', image: '/images/Wrap/periperi wrap.png' },
    { name: 'R4. Lamb Doner Wrap', desc: 'Tender lamb doner inside a soft tortilla wrap with salad.', price: '4.50', mealPrice: '5.99', image: '/images/Wrap/lamb doner.png' },
    { name: 'R5. Veggi Wrap', desc: 'Healthy vegetable wrap filled with fresh salad and savory sauce.', price: '4.50', mealPrice: '5.99', image: '/images/Wrap/veggi wrap.png' },
    { name: 'R6. Hot Dog', desc: 'Classic premium sausage in a soft hot dog bun with sauce.', price: '4.50', mealPrice: '5.99', image: '/images/Wrap/hotdog.png' }
  ],
  box: [
    { name: '1. Classic Fillet Combo', desc: 'Chicken fillet burger, 1 piece of crispy chicken, regular fries, a drink, and baked beans.', price: '6.99', image: '/images/Box meal/1.png', popular: true },
    { name: '2. Wrap & Wings Combo', desc: 'Chicken wrap, 3 pieces of wings, regular fries, and a drink.', price: '6.99', image: '/images/Box meal/2.png' },
    { name: '3. Crispy Choice Combo', desc: '1 piece of crispy chicken, 3 pieces of wings, 3 strips, regular fries, and a drink.', price: '5.99', image: '/images/Box meal/3.3.png' },
    { name: '4. Peri Peri Flame Combo', desc: 'Peri peri burger, 3 wings, fresh coleslaw, regular fries, and a drink.', price: '7.99', image: '/images/Box meal/4.png' },
    { name: '5. Strips Burger Combo', desc: 'Chicken burger, 3 strips, regular fries, and a drink.', price: '7.49', image: '/images/Box meal/5.png' },
    { name: '6. Crunch Feast Box', desc: 'Fillet chicken burger, 3 wings, 1 chicken piece, 1 piece of cake, regular fries, and a drink.', price: '8.99', image: '/images/Box meal/6.png' },
    { name: '24. Noodle Fillet Box', desc: 'Stir-fried noodles with chopped fillet chicken breast pieces and a drink.', price: '6.99', image: '/images/Noodles/Meal 1.1.png' },
    { name: '25. Noodle Peri Box', desc: 'Stir-fried noodles with sliced flame-grilled peri peri chicken and a drink.', price: '6.99', image: '/images/Noodles/Meal 1.2.png' },
    { name: '26. Rice Fillet Box', desc: 'Seasoned savory rice topped with chopped fillet chicken breast pieces and a drink.', price: '6.99', image: '/images/Noodles/Meal 2.png' },
    { name: '27. Rice Peri Box', desc: 'Seasoned savory rice topped with flame-grilled peri peri chicken and a drink.', price: '6.99', image: '/images/Noodles/Meal 3.png' }
  ],
  peri: [
    { name: 'D1. Whole Peri Chicken', desc: 'Flame-grilled whole peri peri chicken, served with salad, regular fries, and a drink.', price: '10.99', mealPrice: '13.99', image: '/images/Peri Peri/D.png', popular: true },
    { name: 'D2. Half Peri Chicken', desc: 'Flame-grilled half peri peri chicken, served with salad, regular fries, and a drink.', price: '7.49', mealPrice: '9.49', image: '/images/Peri Peri/D.png' },
    { name: 'D3. Quarter Peri Chicken', desc: 'Flame-grilled quarter peri peri chicken, served with salad, regular fries, and a drink.', price: '5.49', mealPrice: '7.49', image: '/images/Peri Peri/D.png' },
    { name: 'D4. 6 pcs Peri Wings', desc: '6 flame-marinated peri peri wings, served with regular fries and a drink.', price: '4.99', mealPrice: '6.99', image: '/images/Peri Peri/D...png' },
    { name: 'D5. 8 pcs Peri Wings', desc: '8 flame-marinated peri peri wings, served with regular fries and a drink.', price: '6.49', mealPrice: '7.99', image: '/images/Peri Peri/D...png' },
    { name: 'D6. 12 pcs Peri Wings', desc: '12 flame-marinated peri peri wings, served with regular fries and a drink.', price: '7.99', mealPrice: '10.49', image: '/images/Peri Peri/D...png' }
  ],
  family: [
    { name: 'F1. Family Meal', desc: '2 chicken fillet burgers, 2 cheese burgers, 4 regular fries, and a free bottle of drink.', price: '15.99', image: '/images/Family/F1.png', family: true },
    { name: 'F2. Mix Variety Bucket', desc: '10 pcs chicken, 8 hot wings, 6 fillet strips, 4 regular fries, and a free bottle of drink.', price: '24.99', image: '/images/Family/F2.png', family: true },
    { name: 'F3. Double Burger Deal', desc: '2 chicken fillet burgers, 4 pcs chicken, 2 regular fries, and free 2 cans of drink.', price: '17.99', image: '/images/Family/F3.png' },
    { name: 'F4. Boneless Bucket', desc: '6 pcs boneless fillet breast, 6 pcs strips, 6 nuggets, 4 regular fries, and a free bottle of drink.', price: '23.99', image: '/images/Family/F4.png' },
    { name: 'F5. Party Box', desc: '5 chicken fillet burgers, 8 pcs chicken, 12 hot wings, 8 strips, 6 fries, 4 regular corn cobs, and a free 1.5L bottle drink.', price: '34.99', image: '/images/Family/F5.png', popular: true }
  ],
  loaded_fries: [
    { name: 'Fillet Loaded Fries', desc: 'Golden crispy fries topped with chopped crispy chicken fillet, warm cheese sauce, and signature toppings.', price: '4.99', image: '/images/Extras/fillet_loaded_fries.png', popular: true },
    { name: 'Lamb Doner Loaded Fries', desc: 'Golden crispy fries topped with tender lamb doner, melted cheese sauce, and spices.', price: '4.99', image: '/images/Extras/lamb_doner_loaded_fries.png' },
    { name: 'Chicken Doner Loaded Fries', desc: 'Golden crispy fries topped with savory chicken doner, melted cheese sauce, and signature sauces.', price: '4.99', image: '/images/Extras/chicken_doner_loaded_fries.png' }
  ],
  drinks_shakes: [
    { name: 'KitKat Milkshake', desc: 'Creamy, rich milkshake blended with KitKat chocolate bars, topped with whipped cream.', price: '3.99', image: '/images/Drinks/KITKAT.png' },
    { name: 'Oreo Milkshake', desc: 'Thick, creamy vanilla milkshake blended with Oreo cookies, topped with whipped cream.', price: '3.99', image: '/images/Drinks/OREO.png', popular: true },
    { name: 'Biscoff Milkshake', desc: 'Indulgent creamy milkshake blended with Lotus Biscoff spread and cookie crumbs.', price: '3.99', image: '/images/Drinks/BISCOFF.png' },
    { name: 'Pash "N" Shoot Smoothie', desc: 'A refreshing tropical blend of passion fruit, pineapple, and mango.', price: '3.99', image: '/images/Drinks/pashion.png' },
    { name: 'Strawberry Split Smoothie', desc: 'Classic, sweet blend of fresh strawberries and bananas.', price: '3.99', image: '/images/Drinks/strawberry.png' },
    { name: 'Berry-Go-Round Smoothie', desc: 'A vibrant blend of blackberries, raspberries, and strawberries.', price: '3.99', image: '/images/Drinks/berry.png' },
    { name: 'Avo Go Go Smoothie', desc: 'Rich, creamy blend of nutrient-dense avocado, spinach, pear, and mint.', price: '3.99', image: '/images/Drinks/avacado.png' }
  ],
  extras: [
    { name: 'Regular Fries', desc: 'Hot, crispy, golden potato fries.', price: '1.99', image: '/images/Extras/fries.png' },
    { name: 'Large Fries', desc: 'Jumbo portion of golden crispy potato fries.', price: '2.79', image: '/images/Extras/fries.png' },
    { name: 'Regular Peri Fries', desc: 'Golden fries dusted in Kasis signature fiery peri peri spice mix.', price: '1.99', image: '/images/Extras/periperifrenchfries.png' },
    { name: 'Large Peri Fries', desc: 'Jumbo portion of peri peri spiced fries.', price: '2.79', image: '/images/Extras/periperifrenchfries.png' },
    { name: 'Regular Savory Rice', desc: 'Savory, aromatic seasoned yellow rice.', price: '2.99', image: '/images/Extras/rice.png' },
    { name: 'Large Savory Rice', desc: 'Jumbo portion of savory seasoned rice.', price: '3.99', image: '/images/Extras/rice.png' },
    { name: 'Regular Coleslaw', desc: 'Creamy, tangy, freshly prepared cabbage and carrot coleslaw.', price: '1.60', image: '/images/Extras/coleslaw.png' },
    { name: 'Regular Baked Beans', desc: 'Warm, delicious baked beans in rich tomato sauce.', price: '1.60', image: '/images/Extras/beans.png' },
    { name: 'Fresh Garden Salad', desc: 'Crisp lettuce, cucumber, tomatoes, and red onions with a light dressing.', price: '1.99', image: '/images/Extras/salad.png' },
    { name: 'Regular Corn on the Cob', desc: 'Juicy, sweet, steamed sweetcorn coblet.', price: '1.99', image: '/images/Extras/rcorn.png' },
    { name: 'Large Corn on the Cob', desc: 'A large steamed sweetcorn cob brushed with butter.', price: '2.99', image: '/images/Extras/lcorn.png' },
    { name: 'Potato Wedges', desc: 'Golden baked potato wedges seasoned with herbs.', price: '2.99', image: '/images/Extras/potato.png' },
    { name: 'Jalapeño Cheesy Bites (4 pcs)', desc: '4 pieces of crispy breaded bites filled with spicy jalapeños and melted cheese.', price: '2.99', image: '/images/Extras/jelop.png' },
    { name: 'Jalapeño Cheesy Bites (6 pcs)', desc: '6 pieces of jalapeño cheesy bites.', price: '3.99', image: '/images/Extras/jelop.png' },
    { name: 'Jalapeño Cheesy Bites (12 pcs)', desc: '12 pieces of jalapeño cheesy bites.', price: '6.99', image: '/images/Extras/jelop.png' },
    { name: 'Mozzarella Cheese Sticks (3 pcs)', desc: '3 sticks of golden fried breaded mozzarella cheese.', price: '2.49', image: '/images/Extras/mozzer.png' },
    { name: 'Mozzarella Cheese Sticks (6 pcs)', desc: '6 sticks of mozzarella cheese.', price: '3.99', image: '/images/Extras/mozzer.png' },
    { name: 'Mozzarella Cheese Sticks (12 pcs)', desc: '12 sticks of mozzarella cheese.', price: '6.99', image: '/images/Extras/mozzer.png' },
    { name: 'Mac & Cheese Bites (4 pcs)', desc: '4 golden bites stuffed with rich, creamy macaroni pasta and melted cheese.', price: '2.99', image: '/images/Extras/max.png' },
    { name: 'Mac & Cheese Bites (6 pcs)', desc: '6 mac & cheese bites.', price: '3.99', image: '/images/Extras/max.png' },
    { name: 'Mac & Cheese Bites (12 pcs)', desc: '12 mac & cheese bites.', price: '7.49', image: '/images/Extras/max.png' },
    { name: 'Chilli Cheese Pops (6 pcs)', desc: '6 crispy breaded cheese pops with a spicy chilli kick.', price: '3.99', image: '/images/Extras/Chili Cheese.png' },
    { name: 'Chilli Cheese Pops (12 pcs)', desc: '12 chilli cheese pops.', price: '6.99', image: '/images/Extras/Chili Cheese.png' },
    { name: 'Golden Potato Pops', desc: 'Crispy golden potato globes.', price: '2.99', image: '/images/Extras/potato.png' },
    { name: 'Onion Rings (6 rings)', desc: '6 crispy battered onion rings.', price: '1.99', image: '/images/Extras/onion ring.png' },
    { name: 'Onion Rings (10 rings)', desc: '10 crispy battered onion rings.', price: '2.99', image: '/images/Extras/onion ring.png' },
    { name: 'Samosa (2 pcs)', desc: '2 vegetable or spicy meat samosas with a crispy outer shell.', price: '1.70', image: '/images/Drinks/samosa.png' },
    { name: 'Can Drink', desc: 'Select from Coca-Cola, Diet Coke, Pepsi, or Fanta.', price: '1.19', image: '/images/Extras/can.png' },
    { name: 'Apple Pie', desc: 'Sweet, warm apple pie in a crispy golden shell.', price: '1.39', image: '/images/Extras/pie.png' },
    { name: 'Hash Brown', desc: '1 crispy golden hash brown.', price: '0.60', image: '/images/Extras/fries.png' },
    { name: 'Cheese Slice', desc: 'Extra slice of rich, melted burger cheese.', price: '0.40', image: '/images/Extras/Sliced Cheese Food.png' },
    { name: 'Dips', desc: 'Extra sauces (Mayo, Spicy Mayo, Sweet Chili, BBQ, Ketchup).', price: '0.40', image: '/images/Extras/dips.png' }
  ]
};

const tabLabels = {
  burger: 'Burgers',
  chicken: 'Chicken',
  wraps: 'Wraps',
  box: 'Box & Rice',
  peri: 'Peri Peri',
  family: 'Family Feasts',
  loaded_fries: 'Loaded Fries',
  drinks_shakes: 'Drinks & Shakes',
  extras: 'Extras & Sides'
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 16 },
  },
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('burger');

  return (
    <section className="section bg-light" id="menu">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">What We Serve</div>
          <h2 className="section-title">Full Menu,<br />Every Day.</h2>
          <p className="section-sub mx-auto">Burgers · Chicken · Wraps · Box & Rice Meals · Peri Peri · Family Feasts · Loaded Fries · Shakes & Smoothies · Extras & Sides</p>
        </div>

        <div className="menu-tabs">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              className={`menu-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabLabels[tab] || tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="menu-grid"
          >
            {menuData[activeTab].map((item, i) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                className="menu-card"
              >
                {item.popular && <div className="menu-badge popular">Popular</div>}
                {item.family && <div className="menu-badge family">Family</div>}
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="menu-card-content">
                  <h3 className="menu-card-title">{item.name}</h3>
                  <p className="menu-card-desc">{item.desc}</p>
                  <div className="menu-card-footer">
                    <div className="menu-price-container">
                      <div className="menu-price">
                        {item.mealPrice && <span className="price-type">Solo</span>}
                        £{item.price}
                      </div>
                      {item.mealPrice && (
                        <div className="menu-price meal">
                          <span className="price-type">Meal</span>
                          £{item.mealPrice}
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
