<?php

namespace Shop;

require_once 'cart.php';
require_once 'item.php';



$cart = new Cart();

/* $cart->count(); */

echo "\n";
$cart->add(new Item(3, "orange", 15));
$cart->add(new Item(1, 'milk', 5));
$cart->add(new Item(2, 'water', 2));

/* echo $cart->count(); */

echo count($cart);

echo "\n";

echo $cart->total();

echo "\n";

/* var_dump($cart); */
/* $cart->remove(2); */

/* $cart->clear(); */
/* var_dump($cart); */
/* echo $cart->count(); */

/* echo count($cart); */

foreach ($cart as $item) {
      echo "id: " . $item->id . ", name: " . $item->name . ", price: " . $item->price . PHP_EOL;
}
