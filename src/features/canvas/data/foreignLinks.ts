export const foregnLinks = [
  {
    source: "ecommerce_data-olist_customers_dataset-customer_id",
    target: "ecommerce_data-olist_orders_dataset-customer_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_customers_dataset-customer_zip_code_prefix",
    target:
      "ecommerce_data-olist_geolocation_dataset-geolocation_zip_code_prefix",
    score: 0.93,
  },
  {
    source:
      "ecommerce_data-olist_geolocation_dataset-geolocation_zip_code_prefix",
    target: "ecommerce_data-olist_customers_dataset-customer_zip_code_prefix",
    score: 0.93,
  },
  {
    source: "ecommerce_data-olist_order_items_dataset-order_id",
    target: "ecommerce_data-olist_order_payments_dataset-order_id ",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_items_dataset-order_id",
    target: "ecommerce_data-olist_order_reviews_dataset-order_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_items_dataset-order_id",
    target: "ecommerce_data-olist_orders_dataset-order_id ",
    score: 0.99,
  },
  {
    source: "ecommerce_data-olist_order_items_dataset-order_item_id",
    target: "ecommerce_data-olist_order_payments_dataset-payment_sequential",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_items_dataset-product_id",
    target: "ecommerce_data-olist_products_dataset-product_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_items_dataset-seller_id",
    target: "ecommerce_data-olist_sellers_dataset-seller_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_payments_dataset-order_id",
    target: "ecommerce_data-olist_order_items_dataset-order_id ",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_payments_dataset-order_id",
    target: "ecommerce_data-olist_order_reviews_dataset-order_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_payments_dataset-order_id",
    target: "ecommerce_data-olist_orders_dataset-order_id ",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_payments_dataset-payment_sequential",
    target: "ecommerce_data-olist_order_items_dataset-order_item_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_reviews_dataset-order_id",
    target: "ecommerce_data-olist_order_items_dataset-order_id ",
    score: 0.99,
  },
  {
    source: "ecommerce_data-olist_order_reviews_dataset-order_id",
    target: "ecommerce_data-olist_order_payments_dataset-order_id ",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_order_reviews_dataset-order_id",
    target: "ecommerce_data-olist_orders_dataset-order_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_orders_dataset-customer_id",
    target: "ecommerce_data-olist_customers_dataset-customer_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_orders_dataset-order_id",
    target: "ecommerce_data-olist_order_items_dataset-order_id ",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_orders_dataset-order_id",
    target: "ecommerce_data-olist_order_payments_dataset-order_id ",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_orders_dataset-order_id",
    target: "ecommerce_data-olist_order_reviews_dataset-order_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_products_dataset-product_id",
    target: "ecommerce_data-olist_order_items_dataset-product_id",
    score: 1,
  },
  {
    source: "ecommerce_data-olist_sellers_dataset-seller_id",
    target: "ecommerce_data-olist_order_items_dataset-seller_id",
    score: 1,
  },
];
