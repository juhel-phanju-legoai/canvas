import { TGlossary } from "@/types/glossary";

export const glossary_data: TGlossary[] = [
  {
      "id": 56,
      "masterId": "ecommerce_data-olist_customers_dataset",
      "technicalName": "olist_customers_dataset",
      "name": "olist_customers_dataset",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.8,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "\"Data for customers of an ecommerce platform\"",
      "sampleData": "['c72a0999496805b6a9c74d76f7315912' 'a35068958ae8c346aaf117b763850f0f'\n '9090eb0daea40644066cee1f3de8f198' '0efd5025e6544ef110881866b945d0cc'\n '5688ba2948d79fc61dd9931d6646929c' '813420d14581bd869f6a532e8bb40f5a'\n '7e8e9e4472228c27e5743df7fc6dce05' '66ae4493fc7c710a8db6d9620901f40d'\n '29eb0189481f8eba53531d09c456776e' '15823b5826557e80b07c3d5dc611568e'\n '373b58bc6a02d3603399480b5a9ae434' '0a4767440baf7c819f8ca5e4c6bd2535'\n '0fb659266bac6a67b53255316058270d' '3b4eceaf171a7e14ccb8ea389f3d0a3b'\n '4af447cbcb836009ce836d9d775d306c' 'f9e6c70b74217d54d7ecca3c83b5f779'\n '38b8752d745e01a425f8df47f7b2f57d' '42503505af8b15a1861dfe20608188a8'\n 'fee24222fefa5a001d302a0492fecc7d' 'd7e306d63be84c9bd5cecf2f851d3c19']",
      "tags": [
          "unique customer id",
          " customer id"
      ],
      "subset": [
          {
              "id": 55,
              "masterId": "ecommerce_data-olist_customers_dataset-customer_zip_code_prefix",
              "technicalName": "olist_customers_dataset",
              "name": "customer_zip_code_prefix",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "county"
              ],
              "businessGlossary": "\"The first few digits of the customers zip code, representing a geographical area.\"",
              "sampleData": "[20511  3077 37552  9271 37570 35530  5887 21060  7752 24220  5348 88058\n 29160  3227 70352 11500 36415 22630  6550 36680]",
              "tags": [
                  "Zip Code",
                  " Zip",
                  " Customer Zip"
              ]
          },
          {
              "id": 57,
              "masterId": "ecommerce_data-olist_customers_dataset-customer_id",
              "technicalName": "olist_customers_dataset",
              "name": "customer_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each customer.\"",
              "sampleData": "['f40ed29ddf8d56ce6055e1a37094ab0e' 'fac64b6875bc7840442069be52752e14'\n '105e31e3b36d904c70058578126c4d12' '97ca397101025587ac98da9417dcfa72'\n '674698501fcd2236a40169c72c802d12' 'f4b4667587b2dfb3a171da98b30fedbc'\n '571f9e60ad9942db4d49ea1a37343445' 'e141589a49c9b47c23e8c232a391438d'\n 'b1ed30407bcc491702594654edf43c48' '10aa8b368f3ed547197e8bf71b29aacb'\n '871055bd7d5ce8c492d02ad3ed010793' '4f48789f76d0b81afbbc50209b157740'\n '0853e40927647b9aeccf91bf5c0706f5' '238a236a505ad5d85b7d1df842095d79'\n 'a9b2194390d054ffd7461fa373923e7f' 'fc2c4598b5694563811540d01c98fbf6'\n 'c769d261fe94fe9791db6a2ec569efd9' '3990e05f8ede91d4ed641781605ac253'\n '46951b0491e0af4f6b2ae12f25dc77ba' 'd0d33cd9e51cbf33e9f855370e6805fe']",
              "tags": [
                  "customer id",
                  " customer code"
              ]
          },
          {
              "id": 53,
              "masterId": "ecommerce_data-olist_customers_dataset-customer_state",
              "technicalName": "olist_customers_dataset",
              "name": "customer_state",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "state"
              ],
              "businessGlossary": "\"The state where the customer resides.\"",
              "sampleData": "['to' 'ms' 'sc' 'go' 'rj' 'sp' 'pb' 'sp' 'rs' 'mg' 'sp' 'pe' 'sp' 'mg'\n 'sp' 'ba' 'sp' 'rj' 'rj' 'go']",
              "tags": [
                  "customer_state",
                  " state_code",
                  " state_short"
              ]
          },
          {
              "id": 56,
              "masterId": "ecommerce_data-olist_customers_dataset-customer_unique_id",
              "technicalName": "olist_customers_dataset",
              "name": "customer_unique_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.8,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Globally unique identifier assigned to each customer, allowing tracking across different systems.\"",
              "sampleData": "['c72a0999496805b6a9c74d76f7315912' 'a35068958ae8c346aaf117b763850f0f'\n '9090eb0daea40644066cee1f3de8f198' '0efd5025e6544ef110881866b945d0cc'\n '5688ba2948d79fc61dd9931d6646929c' '813420d14581bd869f6a532e8bb40f5a'\n '7e8e9e4472228c27e5743df7fc6dce05' '66ae4493fc7c710a8db6d9620901f40d'\n '29eb0189481f8eba53531d09c456776e' '15823b5826557e80b07c3d5dc611568e'\n '373b58bc6a02d3603399480b5a9ae434' '0a4767440baf7c819f8ca5e4c6bd2535'\n '0fb659266bac6a67b53255316058270d' '3b4eceaf171a7e14ccb8ea389f3d0a3b'\n '4af447cbcb836009ce836d9d775d306c' 'f9e6c70b74217d54d7ecca3c83b5f779'\n '38b8752d745e01a425f8df47f7b2f57d' '42503505af8b15a1861dfe20608188a8'\n 'fee24222fefa5a001d302a0492fecc7d' 'd7e306d63be84c9bd5cecf2f851d3c19']",
              "tags": [
                  "unique customer id",
                  " customer id"
              ]
          },
          {
              "id": 54,
              "masterId": "ecommerce_data-olist_customers_dataset-customer_city",
              "technicalName": "olist_customers_dataset",
              "name": "customer_city",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "name"
              ],
              "businessGlossary": "\"The name of the city where the customer resides.\"",
              "sampleData": "['rio de janeiro' 'trindade do sul' 'fortaleza' 'niteroi' 'sao paulo'\n 'sao bernardo do campo' 'sao jose do rio preto' 'aparecida'\n 'rio de janeiro' 'porto alegre' 'pedra branca' 'sao paulo' 'jundiai'\n 'marica' 'sao pedro da aldeia' 'nova iguacu' 'brasilia' 'goiania'\n 'rio de janeiro' 'belo horizonte']",
              "tags": [
                  "city_of_customer",
                  " delivery_city",
                  " customer_locality"
              ]
          }
      ]
  },
  {
      "id": 60,
      "masterId": "ecommerce_data-olist_geolocation_dataset",
      "technicalName": "olist_geolocation_dataset",
      "name": "olist_geolocation_dataset",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.7,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "\"Geolocation data for Brazilian zip codes.\"",
      "sampleData": "[-56.09008999 -49.63474141 -46.63999405 -43.32132773 -46.89802593\n -43.35976936 -35.00488273 -41.66879284 -41.83417386 -54.48123702\n -35.70005661 -43.32792926 -38.35016462 -46.67487716 -42.55028911\n -43.06368362 -45.46378979 -36.48853075 -46.40040575 -46.56904406]",
      "tags": [
          "longitude",
          " location_longitude",
          " geo_longitude"
      ],
      "subset": [
          {
              "id": 58,
              "masterId": "ecommerce_data-olist_geolocation_dataset-geolocation_zip_code_prefix",
              "technicalName": "olist_geolocation_dataset",
              "name": "geolocation_zip_code_prefix",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "country"
              ],
              "businessGlossary": "\"The first few digits of the zip code that represent a specific geographical area.\"",
              "sampleData": "[ 9190  5780  5582 51170  6600 22011 26700  3279 95770 85816 28915 11750\n 48700 74230 25211 37564 69058 76829 58301  5679]",
              "tags": [
                  "zip_code",
                  "  delivery_zone",
                  " shipping_zone"
              ]
          },
          {
              "id": 61,
              "masterId": "ecommerce_data-olist_geolocation_dataset-geolocation_city",
              "technicalName": "olist_geolocation_dataset",
              "name": "geolocation_city",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "operator"
              ],
              "businessGlossary": "\"The name of the city associated with the geolocation coordinates.\"",
              "sampleData": "['juiz de fora' 'viamao' 'simoes filho' 'campos gerais' 'rio das ostras'\n 'joinville' 'valenca' 'adamantina' 'sao goncalo' 'vitoria' 'sao paulo'\n 'pomerode' 'juiz de fora' 'brasilia' 'camamu' 'santo andre'\n 'pontes e lacerda' 'paulo afonso' 'itamarandiba' 'belo horizonte']",
              "tags": [
                  "geo_city",
                  " geo_location",
                  " geo_area"
              ]
          },
          {
              "id": 60,
              "masterId": "ecommerce_data-olist_geolocation_dataset-geolocation_lng",
              "technicalName": "olist_geolocation_dataset",
              "name": "geolocation_lng",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Float",
                  "position"
              ],
              "businessGlossary": "\"The longitude coordinate of the geolocation, indicating the east-west position on the Earths surface.\"",
              "sampleData": "[-56.09008999 -49.63474141 -46.63999405 -43.32132773 -46.89802593\n -43.35976936 -35.00488273 -41.66879284 -41.83417386 -54.48123702\n -35.70005661 -43.32792926 -38.35016462 -46.67487716 -42.55028911\n -43.06368362 -45.46378979 -36.48853075 -46.40040575 -46.56904406]",
              "tags": [
                  "longitude",
                  " location_longitude",
                  " geo_longitude"
              ]
          },
          {
              "id": 59,
              "masterId": "ecommerce_data-olist_geolocation_dataset-geolocation_lat",
              "technicalName": "olist_geolocation_dataset",
              "name": "geolocation_lat",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Float",
                  "city"
              ],
              "businessGlossary": "\"The latitude coordinate of the geolocation, indicating the north-south position on the Earths surface.\"",
              "sampleData": "[-22.41972534 -19.86396146 -23.62513449 -15.89862647  -8.00691409\n -24.10205435 -23.48773169  -9.61321724 -19.38630357 -20.27858258\n  -3.12005516 -29.90322269 -25.45189383 -19.92855582 -14.95546373\n  -1.36521    -22.72086127 -27.65714414 -23.599602   -20.50092459]",
              "tags": [
                  "latitude",
                  " geo_latitude",
                  " latitude_data",
                  " geo_location"
              ]
          },
          {
              "id": 62,
              "masterId": "ecommerce_data-olist_geolocation_dataset-geolocation_state",
              "technicalName": "olist_geolocation_dataset",
              "name": "geolocation_state",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 1,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "class"
              ],
              "businessGlossary": "\"The state or administrative region associated with the geolocation coordinates.\"",
              "sampleData": "['sp' 'mg' 'sp' 'pr' 'rs' 'ce' 'sp' 'sp' 'mg' 'rj' 'rs' 'sp' 'sp' 'ms'\n 'sp' 'mg' 'sp' 'sp' 'mg' 'al']",
              "tags": [
                  "State",
                  " Area",
                  " Region"
              ]
          }
      ]
  },
  {
      "id": 66,
      "masterId": "ecommerce_data-olist_order_items_dataset",
      "technicalName": "olist_order_items_dataset",
      "name": "olist_order_items_dataset",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.7,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "\"Data about orders and order items. \"",
      "sampleData": "[1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 1 2 1]",
      "tags": [
          "item_id",
          " part id"
      ],
      "subset": [
          {
              "id": 65,
              "masterId": "ecommerce_data-olist_order_items_dataset-product_id",
              "technicalName": "olist_order_items_dataset",
              "name": "product_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each product.\"",
              "sampleData": "['2c5ae18918caa7b9adf593b80afb9b42' 'a0cb23ea9b98f51407ac7bd1fcd29c2e'\n '0e2d365a247d105fefc31b17ab8706d9' 'abe664b73da592b7d5d0e5ef9b2789d6'\n 'b25a0f93e25104798df2d1664495d157' '6c6a78e0768babe7473b5eccf0fc6076'\n '404a57563d487aecbc2b1a01d9b89aab' '51250f90d798d377a1928e8a4e2e9ae1'\n 'fc5db2fc460f284583971cf23f3fc75e' '09c3a2ea33f044aebffecd6681e00133'\n '0e83e17abf02965da217273abc39518f' 'a59fb60fddcc72a9878b7ed5cb69d8e4'\n 'c319f453652bff80bc8f9f71d87e56c1' '6f5a84d79bc9f79ecd9095e91fc47a2d'\n '089cc17c8bf2226d13648392e33dabd7' '2c71e9b9845634cb1ea6285a8f3cbf50'\n '0bcc3eeca39e1064258aa1e932269894' 'd1c427060a0f73f6b889a5c7c61f2ac4'\n 'a3b994a761e7a3ef4b527ac7f1057e9c' 'd2085f7e0f9533605386960fc7e987ec']",
              "tags": [
                  "p id",
                  " product code",
                  " product key"
              ]
          },
          {
              "id": 67,
              "masterId": "ecommerce_data-olist_order_items_dataset-order_id",
              "technicalName": "olist_order_items_dataset",
              "name": "order_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 1,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each order.\"",
              "sampleData": "['e611d334e736406a802b01fe71dd8521' '9a6a7ea0e1523950885c7b716b1766cc'\n 'ec88157ad03aa203c3fdfe7bace5ab6b' '72705672ab6238e6354d9889c34ec409'\n 'a5e8bd40b3d57b6a26a1e79bafcae9ea' '30189c9fc2174b8677dd06fda47c097a'\n '9a9b8909d5262facaf818727cf3c9251' '5b4efc11db420f7c28f14d5bbbb56d35'\n '4c309580256bd11b9a9135a26a1a966b' '9f3f85ddc354be372be6cde53a577cd5'\n '8ff6ab5092f178654b69b95482c18556' 'd12089fd9036efcdf0efff1bbddf6272'\n '0b3d6a94ff1d643af663f55ca8418520' '9a44abc905204e1ab8b71a8b7cb4b838'\n 'b33e18d1fcf749a71353cb930defb526' 'bb8d02c6bd5c148f41176b66ee1ae726'\n '92841cc24435590294fb25f6938e295e' '321d9d09f4d1ffa67dd4ca76b9914da0'\n 'bb5ed7e3c00498a15ceff9bbca9ba556' '920b7ed9f8f073005d0fcea7fe293bd7']",
              "tags": [
                  "order_no",
                  " order_code",
                  " order_serial_no"
              ]
          },
          {
              "id": 66,
              "masterId": "ecommerce_data-olist_order_items_dataset-order_item_id",
              "technicalName": "olist_order_items_dataset",
              "name": "order_item_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "weight"
              ],
              "businessGlossary": "\"Identifier for each item within an order.\"",
              "sampleData": "[1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 1 2 1]",
              "tags": [
                  "item_id",
                  " part id"
              ]
          },
          {
              "id": 64,
              "masterId": "ecommerce_data-olist_order_items_dataset-seller_id",
              "technicalName": "olist_order_items_dataset",
              "name": "seller_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.5,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each seller.\"",
              "sampleData": "['001cca7ae9ae17fb1caed9dfb1094831' 'e26901d5ab434ce92fd9b5c256820a4e'\n '4a3ccda38b2129705f3fb522db62ca31' '2528513dd95219a6013d4d05176e391a'\n 'cc63f0dd2acba93ffed4fe9f8e0321fa' '2b03ac196f5ed62ac483960fe0fa3b65'\n '725c32fa80c2faacc4fc88450d27314e' '04308b1ee57b6625f47df1d56f00eedf'\n 'f44b6f775a2b390380e0e30b5c9d3eee' '7a67c85e85bb2ce8582c35f2203ad736'\n 'cc419e0650a3c5ba77189a1882b7556a' 'adbe70ab2c97442046d393988c8d1d27'\n 'f457c46070d02cadd8a68551231220dd' '4a3ca9315b744ce9f8e9374361493884'\n 'ac3508719a1d8f5b7614b798f70af136' '897060da8b9a21f655304d50fd935913'\n '6039e27294dc75811c0d8a39069f52c0' '7901646fdd36a55f564ffaf2dbccaaf7'\n '02f623a8eb246f3c5f7c2f96462654e6' '4a3ca9315b744ce9f8e9374361493884']",
              "tags": [
                  "seller_id",
                  " seller_identity",
                  " seller_code"
              ]
          },
          {
              "id": 63,
              "masterId": "ecommerce_data-olist_order_items_dataset-shipping_limit_date",
              "technicalName": "olist_order_items_dataset",
              "name": "shipping_limit_date",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 1,
              "validCount": 1,
              "dataType": [
                  "Date & Time",
                  "result"
              ],
              "businessGlossary": "\"The date and time limit by which the order should be shipped.\"",
              "sampleData": "['2017-04-13 13:11:11' '2018-03-29 15:55:54' '2017-12-05 20:31:34'\n '2017-09-04 04:45:03' '2018-07-26 10:23:39' '2018-08-22 14:30:20'\n '2017-06-12 22:35:25' '2018-03-29 13:47:25' '2018-06-14 15:12:55'\n '2018-07-06 15:30:29' '2017-07-06 13:30:23' '2018-05-09 12:55:01'\n '2018-05-22 08:57:49' '2018-08-28 04:50:20' '2018-08-09 04:30:19'\n '2018-07-04 09:10:32' '2017-09-21 03:05:48' '2017-02-19 19:37:22'\n '2018-04-19 13:35:44' '2017-12-08 18:08:28']",
              "tags": [
                  "shipping_deadline",
                  " last_shipping_date"
              ]
          },
          {
              "id": 68,
              "masterId": "ecommerce_data-olist_order_items_dataset-price",
              "technicalName": "olist_order_items_dataset",
              "name": "price",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Float",
                  "weight"
              ],
              "businessGlossary": "\"The price of the product in the order.\"",
              "sampleData": "[ 109.     24.9    99.99   99.9   119.85   79.99   29.9    55.9    25.\n   39.98   10.     89.99 1980.    199.9    39.9    98.9    45.    258.76\n   78.71  145.  ]",
              "tags": [
                  "Cost",
                  " Dollar"
              ]
          },
          {
              "id": 69,
              "masterId": "ecommerce_data-olist_order_items_dataset-freight_value",
              "technicalName": "olist_order_items_dataset",
              "name": "freight_value",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Float",
                  "weight"
              ],
              "businessGlossary": "\"The cost of shipping and handling for the order.\"",
              "sampleData": "[52.37 13.71 18.23 13.93 16.58 17.41 13.51 18.23 23.42 12.23 36.76 18.12\n 15.1  23.31  9.31 18.31 10.12 15.1  15.42 18.09]",
              "tags": [
                  "Freight $"
              ]
          }
      ]
  },
  {
      "id": 74,
      "masterId": "ecommerce_data-olist_order_payments_dataset",
      "technicalName": "olist_order_payments_dataset",
      "name": "olist_order_payments_dataset",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.5,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "\"Data about payments for orders. \"",
      "sampleData": "[1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]",
      "tags": [
          "payment_sequence",
          " payment_order"
      ],
      "subset": [
          {
              "id": 71,
              "masterId": "ecommerce_data-olist_order_payments_dataset-payment_value",
              "technicalName": "olist_order_payments_dataset",
              "name": "payment_value",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Float",
                  "sales"
              ],
              "businessGlossary": "\"The total value of the payment, including product cost and any additional fees.\"",
              "sampleData": "[ 34.42 144.78 117.27  31.73  97.79 112.6   47.02 106.54  59.05  70.82\n  54.   107.46  35.18  37.33 236.21 100.73  70.15 228.69  70.7   99.16]",
              "tags": [
                  "payment_amount",
                  " payment_total"
              ]
          },
          {
              "id": 70,
              "masterId": "ecommerce_data-olist_order_payments_dataset-order_id",
              "technicalName": "olist_order_payments_dataset",
              "name": "order_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 1,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each order.\"",
              "sampleData": "['cdd6677f7c680eaddf4183ec4780e65d' '896fbd78a9ef3839b34b893f48f6bc67'\n 'd2dd52f27ff69c333cfe7c6dbd4a6a08' '4bb72dde289a979497e30c301beda3c4'\n '16ab8ecb99315867f046f225b832649e' 'bde3f99beee2c5c327b399fb066e85e4'\n '21a700353585ff0d776cdde844166983' '8734071c7bfc4d453e59546b22c5ce0e'\n '6af5a09bae161896af1bd1d4a83a39ce' 'f62a8a01fbe9e10c2c6d6e66e828f399'\n 'dec6267e55fe1ef26725cbd4c28d9a90' 'db3e8c24c5652c8944bc5a05d9bd3933'\n 'ab2e18197d676ace96bcaab0aeb2a820' 'd087b8e096ca051f548e29b324272834'\n '3d7264091d686b71e3250b37f6ea6f07' 'e33d8345fd55476c9fc022be9809a8e4'\n 'fbffb0b287b62d10b5a1c24a29ae16ea' 'bfdfcb5b457a83ebc43eccb8d8531f7f'\n '2177c4dbccb15e413419402aa089b530' 'b82f05ed1c1a8045489ff9ee86415c9c']",
              "tags": [
                  "order_no",
                  " order_code",
                  " order_serial_no"
              ]
          },
          {
              "id": 74,
              "masterId": "ecommerce_data-olist_order_payments_dataset-payment_sequential",
              "technicalName": "olist_order_payments_dataset",
              "name": "payment_sequential",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.5,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "weight"
              ],
              "businessGlossary": "\"A sequence number indicating the order of payment attempts for a specific order.\"",
              "sampleData": "[1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]",
              "tags": [
                  "payment_sequence",
                  " payment_order"
              ]
          },
          {
              "id": 73,
              "masterId": "ecommerce_data-olist_order_payments_dataset-payment_type",
              "technicalName": "olist_order_payments_dataset",
              "name": "payment_type",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "code"
              ],
              "businessGlossary": "\"The method used for payment, such as credit card, boleto (bank slip), etc.\"",
              "sampleData": "['credit_card' 'boleto' 'credit_card' 'credit_card' 'boleto' 'credit_card'\n 'boleto' 'credit_card' 'credit_card' 'credit_card' 'credit_card'\n 'credit_card' 'credit_card' 'credit_card' 'credit_card' 'credit_card'\n 'credit_card' 'credit_card' 'credit_card' 'credit_card']",
              "tags": [
                  "payment_method",
                  " payment_mode"
              ]
          },
          {
              "id": 72,
              "masterId": "ecommerce_data-olist_order_payments_dataset-payment_installments",
              "technicalName": "olist_order_payments_dataset",
              "name": "payment_installments",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "rank"
              ],
              "businessGlossary": "\"The number of installments (monthly payments) for the payment.\"",
              "sampleData": "[ 4  1  6 10  6  1  1  4  1  5  1  1  5  1 10  3  1  1  4  3]",
              "tags": [
                  "Installment"
              ]
          }
      ]
  },
  {
      "id": 75,
      "masterId": "ecommerce_data-olist_order_reviews_dataset",
      "technicalName": "olist_order_reviews_dataset",
      "name": "olist_order_reviews_dataset",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.5,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "\"Data about the reviews made by customers for the products they have purchased.\"",
      "sampleData": "['recomendo' 'Ã³timo' 'super recomendo' 'bom' 'bom' 'top'\n 'entrega de produto' 'bom' 'super recomendo' 'muito bom'\n 'loja boa / correio nÃ£o' 'boa' 'Ã³timo' 'excelente' 'zero' 'indignada'\n 'super recomendo' 'otimo' 'Ã²timo fornecedor' 'parabÃ©ns']",
      "tags": [
          "title",
          " review_title",
          " comment_title"
      ],
      "subset": [
          {
              "id": 78,
              "masterId": "ecommerce_data-olist_order_reviews_dataset-order_id",
              "technicalName": "olist_order_reviews_dataset",
              "name": "order_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier of the order associated with the review.\"",
              "sampleData": "['4fba4b6ba715a2a3c0c0d0f9cd561640' 'd453150b728f3361801ca4a588bf9a86'\n 'f5245f2d90f66a49a3eb0b86380ef720' '22aa38d79daf931ecd4c115fdb1f9c05'\n 'be3b8d058b8100d8a2539ce0b2c6ec0b' '1a014516e31169d67ede0e351097a9d8'\n 'a96dc2c8b069bb0b45b539cc316a9aa4' '8f7a223cdbc2ea83ac07383d97b46fd6'\n '152d0ef67ad3c06d9bafca4dc8ab8f80' '5a43a71d1ddc76ba951f292c1b4c66c2'\n 'c8d07495cb4d7e181efd6c722f77c5f7' '9fc1cdaa591d198154efdbf0e8e33712'\n 'a87ed2fb6e8666ad9ae06c12d370512c' 'cba655bc3c72fc26b4fe864f2ea5fe38'\n 'dc303df898b2e4f80f8596f6f77c2373' '99aeaeb7e702f9008fe9823750689bbd'\n '8f6113583cb848cc612f68992c04190e' 'aa0f5120dbd7776eb7289031e22a8329'\n 'f5f04dd481f2adae96df163474755163' '04778abaab7b4bdfb0abb1110f1eba52']",
              "tags": [
                  "order_no",
                  " order_code",
                  " order_serial_no"
              ]
          },
          {
              "id": 81,
              "masterId": "ecommerce_data-olist_order_reviews_dataset-review_creation_date",
              "technicalName": "olist_order_reviews_dataset",
              "name": "review_creation_date",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.8,
              "validCount": 1,
              "dataType": [
                  "Date & Time",
                  "result"
              ],
              "businessGlossary": "\"The date and time when the review was created.\"",
              "sampleData": "['2018-04-11 00:00:00' '2017-08-06 00:00:00' '2018-08-15 00:00:00'\n '2018-05-04 00:00:00' '2018-03-27 00:00:00' '2018-04-11 00:00:00'\n '2018-01-09 00:00:00' '2018-08-31 00:00:00' '2017-02-14 00:00:00'\n '2018-05-08 00:00:00' '2018-04-24 00:00:00' '2018-04-25 00:00:00'\n '2018-05-04 00:00:00' '2017-08-12 00:00:00' '2017-04-21 00:00:00'\n '2017-07-06 00:00:00' '2018-01-10 00:00:00' '2018-07-11 00:00:00'\n '2018-08-18 00:00:00' '2018-01-11 00:00:00']",
              "tags": [
                  "review date",
                  " date of review"
              ]
          },
          {
              "id": 76,
              "masterId": "ecommerce_data-olist_order_reviews_dataset-review_comment_message",
              "technicalName": "olist_order_reviews_dataset",
              "name": "review_comment_message",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.5,
              "validCount": 1,
              "dataType": [
                  "Open_ended_text",
                  "description"
              ],
              "businessGlossary": "\"The main text content of the review comment.\"",
              "sampleData": "['adorei otima qualidade'\n 'meu produto nÃ£o chegou em minha casa, me enviaram um email dizendo que havia ocorrido uma ocorrÃªncia ,mas, nÃ£o me comunicaram qual e o que fazer'\n 'fiz a compra e o prazo era de uma semana, quando finalizei estenderam para 1 mÃªs e ainda nÃ£o recebi. nÃ£o recomendo e nÃ£o compro mais aqui'\n 'compraria novamentw' 'me entregaram faltando um pote, insatisfaÃ§Ã£o'\n 'como nÃ£o recebi o produto nÃ£o tem como avaliar' 'top, amei'\n 'gostei venho tudo certinho'\n 'adorei comprar minhas lentes pela internet pela rapidez da entrega e tambÃ©m pelo preÃ§o bem mais barato do que o disponÃ\\xadvel na minha cidade. veio com nota, tudo certo'\n 'produto de qualidade, me surpreendeu, silÃªncioso e pequeno, recomendo'\n 'muito bom'\n 'falta de respeito e total desinformaÃ§Ã£o com o cliente. alÃ©m da omissÃ£o total da stark. uma vergonha'\n 'olÃ¡, meu pedido nÃ£o foi entregue, quero saber o que aconteceu se nÃ£o for resolvido eu vou querer o meu dinheiro de volta.\\r\\nagradeÃ§o desde jÃ¡'\n 'um ponto negativo que achei foi a cobranÃ§a de 3 taxas de entregas, sendo que comprei os 3 produtos iguais numa sÃ³ compra.\\r\\ne mesmo comprando os produtos juntos, chegaram separados'\n 'eu amei o Ã³culos ele Ã© lindo ficou perfeito no rosto'\n 'produto entregue antes do prazo.\\r\\nem perfeito estado.\\r\\nisso Ã© respeito pelo cliente.\\r\\nsuper recomendo'\n 'comprei o cesto para roupa e o mesmo estÃ¡ em desnÃ\\xadvel'\n 'nÃ£o veio o que foi pedido'\n 'entrega feita no prazo. relÃ³gio muito elegante e com materiais de Ã³tima qualidade'\n 'otimo']",
              "tags": [
                  "feedback",
                  " comment",
                  " review"
              ]
          },
          {
              "id": 77,
              "masterId": "ecommerce_data-olist_order_reviews_dataset-review_id",
              "technicalName": "olist_order_reviews_dataset",
              "name": "review_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.5,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each review.\"",
              "sampleData": "['5e65b1cbb7f35817a5c7fcf77a335431' 'f30291cc6cc702bf4fc0af4bdaf5ae59'\n '128c507602eef71e8e4ccc5206707507' '554f6545765e5c000f1751682dd00158'\n '5beb7b85c560bfd37c11045bd13f76c6' '660c786be142ca69274a75b5db685056'\n 'ea06213fafdcc76cc3bd0ce40cf5bb7d' '350cd8f16e0b25f59e2b19d0bf730f2c'\n '7071ca4c66b85b5182ab667c2f2b9739' 'e68b3eefc706a1c5f8e1150944a8c022'\n '0137cc8039d5b0d01b1535c6c7a4a0ab' 'c42731ce6178f1027400d967633e21b1'\n '211e875fd2b79b7d8872a495ff57c668' '507995ab79e0297fa483642dba324ffe'\n '8a45e40c75c7ec011d20ec416df6c280' '4af0a1c0b0cf31b528e6cab99baec2af'\n 'c12614020872b8fe2dca262664f1abb1' 'deab4d88c0f15863d2b2c670cc08c8a4'\n 'a2d78783d8284b1ecadb3b68e18854d2' '6a72eedeeefe27cf71d344fdf29e671b']",
              "tags": [
                  "review_number",
                  " review_code",
                  " review_identifier"
              ]
          },
          {
              "id": 79,
              "masterId": "ecommerce_data-olist_order_reviews_dataset-review_score",
              "technicalName": "olist_order_reviews_dataset",
              "name": "review_score",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.8,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "code"
              ],
              "businessGlossary": "\"Numeric score assigned to the review, indicating the customers satisfaction with the product/service.\"",
              "sampleData": "[1 5 5 5 5 1 5 1 5 5 5 4 2 5 5 5 4 3 3 5]",
              "tags": [
                  "score_rating",
                  " rating_score",
                  " score_review"
              ]
          },
          {
              "id": 75,
              "masterId": "ecommerce_data-olist_order_reviews_dataset-review_comment_title",
              "technicalName": "olist_order_reviews_dataset",
              "name": "review_comment_title",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.5,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "status"
              ],
              "businessGlossary": "\"The title or heading of the review comment.\"",
              "sampleData": "['recomendo' 'Ã³timo' 'super recomendo' 'bom' 'bom' 'top'\n 'entrega de produto' 'bom' 'super recomendo' 'muito bom'\n 'loja boa / correio nÃ£o' 'boa' 'Ã³timo' 'excelente' 'zero' 'indignada'\n 'super recomendo' 'otimo' 'Ã²timo fornecedor' 'parabÃ©ns']",
              "tags": [
                  "title",
                  " review_title",
                  " comment_title"
              ]
          },
          {
              "id": 80,
              "masterId": "ecommerce_data-olist_order_reviews_dataset-review_answer_timestamp",
              "technicalName": "olist_order_reviews_dataset",
              "name": "review_answer_timestamp",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Date & Time",
                  "result"
              ],
              "businessGlossary": "\"The date and time when an answer or response to the review was provided by the seller or platform.\"",
              "sampleData": "['2018-02-25 12:53:27' '2018-02-03 03:03:28' '2018-06-20 00:51:07'\n '2018-08-05 19:31:44' '2017-12-15 19:43:02' '2017-12-04 14:13:21'\n '2017-09-12 20:46:17' '2018-08-19 02:11:31' '2017-12-19 09:20:28'\n '2018-02-28 11:43:48' '2018-01-24 13:37:04' '2017-05-25 12:21:35'\n '2018-05-11 21:49:13' '2018-01-29 11:51:01' '2017-05-26 09:52:54'\n '2018-04-13 10:57:21' '2018-01-02 18:37:24' '2018-02-03 12:01:05'\n '2018-08-04 23:13:17' '2017-06-02 11:48:28']",
              "tags": [
                  "review timestamp"
              ]
          }
      ]
  },
  {
      "id": 82,
      "masterId": "ecommerce_data-olist_orders_dataset",
      "technicalName": "olist_orders_dataset",
      "name": "olist_orders_dataset",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.5,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "\"Data about about orders, customers, and some important dates related to orders.\"",
      "sampleData": "['2018-03-05 18:46:41' '2017-08-04 17:25:42' '2017-12-18 14:17:23'\n '2017-02-07 08:12:06' '2018-04-05 00:18:24' '2018-02-02 16:12:53'\n '2018-01-03 18:07:40' '2018-08-24 18:57:37' '2018-04-26 11:36:42'\n '2017-03-06 14:09:07' '2017-10-27 21:28:01' '2018-03-20 15:11:42'\n '2018-04-13 21:05:52' '2018-05-11 21:16:29' '2018-02-02 15:27:49'\n '2018-02-06 23:16:44' '2018-05-30 10:56:31' '2018-05-14 22:22:32'\n '2018-03-05 18:19:05' '2018-03-08 20:46:28']",
      "tags": [
          "delivery date",
          " delivered_date"
      ],
      "subset": [
          {
              "id": 86,
              "masterId": "ecommerce_data-olist_orders_dataset-order_status",
              "technicalName": "olist_orders_dataset",
              "name": "order_status",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.5,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "species"
              ],
              "businessGlossary": "\"The current status of the order (e.g., delivered, processing, etc.).\"",
              "sampleData": "['delivered' 'delivered' 'delivered' 'delivered' 'delivered' 'delivered'\n 'delivered' 'delivered' 'delivered' 'delivered' 'delivered' 'delivered'\n 'delivered' 'delivered' 'delivered' 'delivered' 'delivered' 'delivered'\n 'delivered' 'delivered']",
              "tags": [
                  "order status"
              ]
          },
          {
              "id": 87,
              "masterId": "ecommerce_data-olist_orders_dataset-order_purchase_timestamp",
              "technicalName": "olist_orders_dataset",
              "name": "order_purchase_timestamp",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 1,
              "validCount": 1,
              "dataType": [
                  "Date & Time",
                  "result"
              ],
              "businessGlossary": "\"The date and time when the order was initially placed.\"",
              "sampleData": "['2017-11-11 21:19:34' '2017-05-23 11:54:23' '2017-09-09 21:11:06'\n '2017-12-27 12:10:16' '2017-03-24 16:48:47' '2018-08-01 13:30:12'\n '2018-05-13 13:35:03' '2018-01-15 16:24:56' '2017-12-11 16:05:00'\n '2017-11-02 15:05:03' '2018-06-07 16:45:11' '2018-08-04 10:45:34'\n '2017-06-16 20:37:28' '2018-02-26 18:58:02' '2017-07-26 16:44:38'\n '2017-04-30 20:33:21' '2018-01-02 15:25:51' '2018-07-26 11:19:45'\n '2018-02-27 19:58:23' '2017-12-05 11:17:58']",
              "tags": [
                  "order_placed_date_time",
                  " order_placed_date"
              ]
          },
          {
              "id": 89,
              "masterId": "ecommerce_data-olist_orders_dataset-order_estimated_delivery_date",
              "technicalName": "olist_orders_dataset",
              "name": "order_estimated_delivery_date",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Date & Time",
                  "result"
              ],
              "businessGlossary": "\"The estimated date and time by which the order is expected to be delivered to the customer.\"",
              "sampleData": "['2018-04-11 00:00:00' '2017-12-28 00:00:00' '2017-09-11 00:00:00'\n '2018-03-28 00:00:00' '2018-04-11 00:00:00' '2017-08-14 00:00:00'\n '2016-11-28 00:00:00' '2017-08-23 00:00:00' '2018-03-23 00:00:00'\n '2017-12-11 00:00:00' '2017-11-03 00:00:00' '2018-04-09 00:00:00'\n '2018-03-02 00:00:00' '2018-08-08 00:00:00' '2018-02-14 00:00:00'\n '2018-01-04 00:00:00' '2018-02-14 00:00:00' '2018-03-07 00:00:00'\n '2018-02-02 00:00:00' '2018-02-08 00:00:00']",
              "tags": [
                  "expected_delivery_date",
                  " estimated_delivery"
              ]
          },
          {
              "id": 83,
              "masterId": "ecommerce_data-olist_orders_dataset-order_delivered_carrier_date",
              "technicalName": "olist_orders_dataset",
              "name": "order_delivered_carrier_date",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Date & Time",
                  "result"
              ],
              "businessGlossary": "\"The date and time when the order was handed over to the carrier for delivery.\"",
              "sampleData": "['2018-02-16 19:42:04' '2018-05-09 15:50:00' '2017-12-05 18:32:04'\n '2018-01-25 17:02:48' '2017-12-26 14:17:43' '2018-06-11 11:37:00'\n '2017-11-24 20:48:38' '2017-03-20 12:47:26' '2018-04-26 09:32:00'\n '2017-09-01 15:29:40' '2018-04-04 19:33:05' '2017-10-24 14:41:38'\n '2017-06-01 15:48:42' '2017-12-22 00:47:04' '2018-03-02 20:58:38'\n '2017-08-21 21:22:24' '2017-08-03 15:25:17' '2018-07-17 13:56:00'\n '2017-12-14 22:19:43' '2018-05-29 07:31:00']",
              "tags": [
                  "carrier_delivery_date",
                  " carrier_shipment_date",
                  "test",
                  "Adding tag"
              ]
          },
          {
              "id": 84,
              "masterId": "ecommerce_data-olist_orders_dataset-order_id",
              "technicalName": "olist_orders_dataset",
              "name": "order_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each order.\"",
              "sampleData": "['4b8f5652792df716a6e936ae0c78a935' 'cad95e56b8bc5ed2c10ee964ba21ac96'\n 'bfaf2a2f0abc56602d3b0fcf99576126' 'f1b8058b666097152bfa8495286f8c61'\n '7b2a59ac3925f388c847aa4b8c3b9cd7' '4dd47e84e6b8ff4a63d0b8425e6d788e'\n 'e2faa52f99b7893fb663270530caf2fc' '93f27293d6f1881d4784abaf47d53ffe'\n 'f6cffce5b4b2b4c67d3e3261a5b63e89' '814449e266f5cbff53f6e336abd1dd5a'\n '2dde1ee3144f40fc9a80df16bb989f4a' '704ee0cb53db0aa5d0912298dd0e0c16'\n '332fbf902a0b37b6919c2d24fb9963c4' '9b80fe8a497834eb67892e43db08b915'\n '6b44342ff71a8b9c36b706c13e015cf0' '070a8baa5e3a99e5eff94da597b78fa1'\n '7ea04d381a2ba7d7f14be55b878830a5' 'bb22b1f374b71ea416e466ba7ff99cea'\n '68c47b8460f7f1e30cc524010aae7464' 'a756c394e02e7cc83cbcc594a969bf59']",
              "tags": [
                  "order_no",
                  " order_code",
                  " order_serial_no"
              ]
          },
          {
              "id": 85,
              "masterId": "ecommerce_data-olist_orders_dataset-customer_id",
              "technicalName": "olist_orders_dataset",
              "name": "customer_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 1,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each customer.\"",
              "sampleData": "['86a8fb1aaab0081f723b823cf8e1f544' 'a33beafb12aa1f0e9e006b2446826721'\n 'e51eb6ff135391a371b5a03a800d27d1' 'd1ee885105a18181bf52979a83068e2a'\n 'cb8186cfd73cbc13a805fb47169868b6' '46f2c4803802c5c0346f522d038dad5e'\n 'd688f50c4d01239dd578a2a79beba7bd' 'ff6615c04179861ddbd77331eafbab7d'\n 'd156a8f86ce1451c235a39502b289767' 'b3d6c3a8afbffdd5c9f9886f0bbe0572'\n '6c15a0dd2659eccc596fa66ed05b23c7' '0b3ab0f6523ee6d07688e1c9cc47b7f3'\n 'e7a63b4918f846a8352704fb37e77763' '52789ab6f6e6f472133760c866d6fe58'\n '758c08b6ea220ebc93f6048997872592' '7e779148dc9ac9f7a27f32ba4025f03b'\n '7000fdb23a3f24ca2df1f91eed449687' '20f0b1f991f8670e4421b202c2f8f454'\n '4faaab7241716e18dbd26260667a0d18' '38d1cd89306128348ffdf4cc23f3a50a']",
              "tags": [
                  "customer id",
                  " customer code"
              ]
          },
          {
              "id": 88,
              "masterId": "ecommerce_data-olist_orders_dataset-order_approved_at",
              "technicalName": "olist_orders_dataset",
              "name": "order_approved_at",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.8,
              "validCount": 1,
              "dataType": [
                  "Date & Time",
                  "result"
              ],
              "businessGlossary": "\"The date and time when the order was approved by the system.\"",
              "sampleData": "['2018-05-02 20:53:26' '2017-12-23 02:13:29' '2017-10-15 23:49:14'\n '2018-03-12 15:01:35' '2018-07-25 02:45:11' '2018-03-22 19:48:07'\n '2018-06-30 18:09:58' '2017-05-23 14:22:57' '2018-01-18 02:11:51'\n '2017-10-19 20:05:07' '2017-10-05 02:44:12' '2018-01-03 14:31:31'\n '2018-01-12 11:29:43' '2018-02-08 17:06:44' '2018-02-16 15:55:40'\n '2017-03-03 12:10:44' '2018-06-20 01:59:00' '2018-01-25 14:19:52'\n '2017-05-09 09:35:13' '2018-02-02 12:51:41']",
              "tags": [
                  "approval date"
              ]
          },
          {
              "id": 82,
              "masterId": "ecommerce_data-olist_orders_dataset-order_delivered_customer_date",
              "technicalName": "olist_orders_dataset",
              "name": "order_delivered_customer_date",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.5,
              "validCount": 1,
              "dataType": [
                  "Date & Time",
                  "result"
              ],
              "businessGlossary": "\"The date and time when the order was delivered to the customer.\"",
              "sampleData": "['2018-03-05 18:46:41' '2017-08-04 17:25:42' '2017-12-18 14:17:23'\n '2017-02-07 08:12:06' '2018-04-05 00:18:24' '2018-02-02 16:12:53'\n '2018-01-03 18:07:40' '2018-08-24 18:57:37' '2018-04-26 11:36:42'\n '2017-03-06 14:09:07' '2017-10-27 21:28:01' '2018-03-20 15:11:42'\n '2018-04-13 21:05:52' '2018-05-11 21:16:29' '2018-02-02 15:27:49'\n '2018-02-06 23:16:44' '2018-05-30 10:56:31' '2018-05-14 22:22:32'\n '2018-03-05 18:19:05' '2018-03-08 20:46:28']",
              "tags": [
                  "delivery date",
                  " delivered_date"
              ]
          }
      ]
  },
  {
      "id": 90,
      "masterId": "ecommerce_data-olist_products_dataset",
      "technicalName": "olist_products_dataset",
      "name": "olist_products_dataset",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.6,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "\"Data about products sold on an ecommerce platform.\"",
      "sampleData": "[13. 18. 46. 11. 25. 11. 20. 15. 11. 13. 38. 16. 15. 35. 25. 52. 16. 60.\n 30. 16.]",
      "tags": [
          "product_width_in_centimeters",
          " product_width"
      ],
      "subset": [
          {
              "id": 95,
              "masterId": "ecommerce_data-olist_products_dataset-product_category_name",
              "technicalName": "olist_products_dataset",
              "name": "product_category_name",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 1,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "species"
              ],
              "businessGlossary": "\"The name of the category to which the product belongs.\"",
              "sampleData": "['telefonia_fixa' 'pet_shop' 'telefonia' 'automotivo' 'cool_stuff'\n 'moveis_escritorio' 'informatica_acessorios' 'cool_stuff'\n 'cama_mesa_banho' 'construcao_ferramentas_construcao' 'telefonia'\n 'pc_gamer' 'brinquedos' 'eletrodomesticos_2' 'cama_mesa_banho'\n 'eletronicos' 'relogios_presentes' 'utilidades_domesticas' 'cool_stuff'\n 'telefonia']",
              "tags": [
                  "category",
                  " category_name",
                  " prod_category"
              ]
          },
          {
              "id": 97,
              "masterId": "ecommerce_data-olist_products_dataset-product_length_cm",
              "technicalName": "olist_products_dataset",
              "name": "product_length_cm",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 1,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "age"
              ],
              "businessGlossary": "\"The length of the product in centimeters.\"",
              "sampleData": "[30. 50. 30. 43. 63. 20. 16. 51. 28. 17. 79. 22. 11. 16. 34. 16. 80. 25.\n 20. 45.]",
              "tags": [
                  "product_length_in_centimeters",
                  " product_length"
              ]
          },
          {
              "id": 90,
              "masterId": "ecommerce_data-olist_products_dataset-product_width_cm",
              "technicalName": "olist_products_dataset",
              "name": "product_width_cm",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "age"
              ],
              "businessGlossary": "\"The width of the product in centimeters.\"",
              "sampleData": "[13. 18. 46. 11. 25. 11. 20. 15. 11. 13. 38. 16. 15. 35. 25. 52. 16. 60.\n 30. 16.]",
              "tags": [
                  "product_width_in_centimeters",
                  " product_width"
              ]
          },
          {
              "id": 94,
              "masterId": "ecommerce_data-olist_products_dataset-product_name_lenght",
              "technicalName": "olist_products_dataset",
              "name": "product_name_lenght",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "age"
              ],
              "businessGlossary": "\"The length (number of characters) of the product name.\"",
              "sampleData": "[60. 45. 21. 38. 25. 59. 39. 47. 58. 52. 29. 47. 63. 45. 32. 37. 58. 58.\n 60. 30.]",
              "tags": [
                  "product_name_length",
                  " name_length"
              ]
          },
          {
              "id": 93,
              "masterId": "ecommerce_data-olist_products_dataset-product_description_lenght",
              "technicalName": "olist_products_dataset",
              "name": "product_description_lenght",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.8,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "code"
              ],
              "businessGlossary": "\"The length (number of characters) of the product description.\"",
              "sampleData": "[ 482.  196. 1186.  100.  352.  182.  157.  471.  161.   60.  293.  267.\n  893.  926.  110. 1239. 1218. 2156.  846.  431.]",
              "tags": [
                  "description_length",
                  " product_review_length"
              ]
          },
          {
              "id": 96,
              "masterId": "ecommerce_data-olist_products_dataset-product_id",
              "technicalName": "olist_products_dataset",
              "name": "product_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "component"
              ],
              "businessGlossary": "\"Unique identifier assigned to each product.\"",
              "sampleData": "['146f7b7f77ccadc63494db1aaad2bc7f' '5dc679875a22e865ee1d7bb2f88786cf'\n '9472a43e0457615f2742ac021d769197' '35b265fd684b08f6f780239bf05a390b'\n 'ef226f256d9c1986ee2d02ff216b15c3' '2c24793fa7743021c907ec930fce14b9'\n '2039ecc2a76b653fb536a86a570e66d8' 'adb4c0f91ab4eb667fed71c378a54fef'\n '4c8c1d73644dce680ac36856d70c1f9d' 'bee760e5d1648771c6923cc199b11ba8'\n '75b44a10da90b5dbfcfb773c62a492c5' 'e51071c4622d7a15494656e912c8d55b'\n '6931796bb4e63c4dd0919290c8cb699e' '8e0fe01ccda36af7936ac8564cf8aee7'\n '14008a0b9bfe0535dfa17f80988553de' '56ce131d9dcf10be8c9eb0b670194766'\n '89cea55405dd7811b48e500d9f263e43' '6b966b123b31a54f73d652b5d8f45bb3'\n '26a4f62a409a78816adb31e0d729a163' '346347724291a3ffbb5f5778e31a9fca']",
              "tags": [
                  "product_code",
                  " product_sku",
                  " product_identifier"
              ]
          },
          {
              "id": 98,
              "masterId": "ecommerce_data-olist_products_dataset-product_photos_qty",
              "technicalName": "olist_products_dataset",
              "name": "product_photos_qty",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.6,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "weight"
              ],
              "businessGlossary": "\"The number of photos associated with the product.\"",
              "sampleData": "[5. 2. 3. 1. 3. 5. 2. 3. 5. 6. 1. 1. 1. 2. 3. 1. 1. 1. 1. 1.]",
              "tags": [
                  "product_photos_quantity",
                  " product_images_qty"
              ]
          },
          {
              "id": 92,
              "masterId": "ecommerce_data-olist_products_dataset-product_weight_g",
              "technicalName": "olist_products_dataset",
              "name": "product_weight_g",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.9,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "day"
              ],
              "businessGlossary": "\"The weight of the product in grams.\"",
              "sampleData": "[12800.  7400.  2500.  2600.   300.  1100.  5150.   350.  1100.  6050.\n  1700.   200.   950.   150.   450.   300.  1300.   100.  1300.  1450.]",
              "tags": [
                  "weight gram",
                  " weight"
              ]
          },
          {
              "id": 91,
              "masterId": "ecommerce_data-olist_products_dataset-product_height_cm",
              "technicalName": "olist_products_dataset",
              "name": "product_height_cm",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.8,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "age"
              ],
              "businessGlossary": "\"The height of the product in centimeters.\"",
              "sampleData": "[20.  3. 50. 14.  3. 15.  7.  8. 10. 14. 26.  6. 10. 70. 17. 10. 60. 30.\n 30. 11.]",
              "tags": [
                  "Product_Height",
                  " Product_Height_in_cm"
              ]
          }
      ]
  },
  {
      "id": 101,
      "masterId": "ecommerce_data-olist_sellers_dataset",
      "technicalName": "olist_sellers_dataset",
      "name": "olist_sellers_dataset",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.7,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "\"Data of sellers who lists products on an ecommerce platform\"",
      "sampleData": "['brasilia' 'ribeirao preto' 'sao paulo' 'santa rita do sapucai'\n 'sao bernardo do campo' 'gaspar' 'santo andre' 'sao jose do rio preto'\n 'sorocaba' 'araucaria' 'cambe' 'rolandia' 'guarulhos' 'sao paulo'\n 'rio de janeiro' 'pacatuba' 'sao paulo' 'santo antonio de padua'\n 'araraquara' 'fortaleza']",
      "tags": [
          "seller city",
          " seller location",
          " seller geography"
      ],
      "subset": [
          {
              "id": 100,
              "masterId": "ecommerce_data-olist_sellers_dataset-seller_zip_code_prefix",
              "technicalName": "olist_sellers_dataset",
              "name": "seller_zip_code_prefix",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.8,
              "validCount": 1,
              "dataType": [
                  "Integer",
                  "rank"
              ],
              "businessGlossary": "\"The first few digits of the sellers zip code, indicating a geographical area.\"",
              "sampleData": "[ 2116 14940  7791 13613 37580 25900 74343 13015 86065 86047 11010 86808\n  4719  7145 71215 99500 85812 80040  9020  9560]",
              "tags": [
                  "seller_zip",
                  " seller_zip_code"
              ]
          },
          {
              "id": 99,
              "masterId": "ecommerce_data-olist_sellers_dataset-seller_id",
              "technicalName": "olist_sellers_dataset",
              "name": "seller_id",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Alphanumeric",
                  "isbn"
              ],
              "businessGlossary": "\"Unique identifier assigned to each seller.\"",
              "sampleData": "['c8b0e2b0a7095e5d8219575d5e7e1181' 'd149de2f383552baea37a7198c2296ce'\n 'cf281cf8b7affbdfe751b29cc85580e1' '4b5f66b7adcf57f1ecc0d3c07dd6b177'\n '2bf28e311bba65237358230cabac3f15' '791cfcfe22fe4a771ece27f90017da92'\n 'ecccfa2bb93b34a3bf033cc5d1dcdc69' '7daca0837f033a41a6f3428c18657533'\n 'f44bdc12aa39f5271f0b95f66cd4c289' 'c157bdeedcbc9a8e3c8bf0d87ff24428'\n 'cd68562d3f44870c08922d380acae552' 'b7cc6c5e001441ae8cdd5c69a480cbe4'\n 'c4d51195486dc781531876a7d00453d8' '1d0646a72178a6fb37ee8082140e06ec'\n '939f6e231201f26803cb5c3a3d2940b3' 'e644cbadf7eeb30d0d29f335ce7d52ec'\n '282c7480173bb9c01dd41cc739fec010' '31da954dc0855f2495c6310f70a2f931'\n '39d61be7a92eb77b7da367bd4845bc0e' 'cda598c48d7c614bc1cad7d8ff6f0010']",
              "tags": [
                  "seller code",
                  " seller identifier"
              ]
          },
          {
              "id": 101,
              "masterId": "ecommerce_data-olist_sellers_dataset-seller_city",
              "technicalName": "olist_sellers_dataset",
              "name": "seller_city",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "city"
              ],
              "businessGlossary": "\"The name of the city where the seller is located.\"",
              "sampleData": "['brasilia' 'ribeirao preto' 'sao paulo' 'santa rita do sapucai'\n 'sao bernardo do campo' 'gaspar' 'santo andre' 'sao jose do rio preto'\n 'sorocaba' 'araucaria' 'cambe' 'rolandia' 'guarulhos' 'sao paulo'\n 'rio de janeiro' 'pacatuba' 'sao paulo' 'santo antonio de padua'\n 'araraquara' 'fortaleza']",
              "tags": [
                  "seller city",
                  " seller location",
                  " seller geography"
              ]
          },
          {
              "id": 102,
              "masterId": "ecommerce_data-olist_sellers_dataset-seller_state",
              "technicalName": "olist_sellers_dataset",
              "name": "seller_state",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.5,
              "validCount": 1,
              "dataType": [
                  "Close_ended_text",
                  "state"
              ],
              "businessGlossary": "\"The state where the seller is located.\"",
              "sampleData": "['es' 'sp' 'sp' 'sp' 'sp' 'pr' 'sp' 'sp' 'mg' 'sp' 'rj' 'rj' 'sp' 'ms'\n 'pr' 'sc' 'sp' 'sp' 'rn' 'mg']",
              "tags": [
                  "seller state",
                  " seller region"
              ]
          }
      ]
  },
  {
      "id": 104,
      "masterId": "ecommerce_data-product_category_name_translation",
      "technicalName": "product_category_name_translation",
      "name": "product_category_name_translation",
      "type": "table",
      "invalidCount": 0,
      "nullCount": 0.7,
      "validCount": 1,
      "dataType": [],
      "businessGlossary": "product category name translation",
      "sampleData": "['construction_tools_lights' 'fixed_telephony' 'la_cuisine'\n 'fashion_sport' 'christmas_supplies' 'health_beauty' 'telephony' 'audio'\n 'small_appliances' 'air_conditioning' 'party_supplies' 'home_comfort_2'\n 'kitchen_dining_laundry_garden_furniture' 'electronics'\n 'diapers_and_hygiene' 'food_drink' 'auto' 'stationery'\n 'furniture_bedroom' 'computers']",
      "tags": [
          "1. construction_tools\n    2. lights\n    3. fixed_telephony\n    4. la_cuisine\n    5. fashion\n    6. sport\n    7. christmas_supplies"
      ],
      "subset": [
          {
              "id": 103,
              "masterId": "ecommerce_data-product_category_name_translation-product_category_name",
              "technicalName": "product_category_name_translation",
              "name": "product_category_name",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Open_ended_text",
                  "classification"
              ],
              "businessGlossary": "'product category name' is the column that denotes the category of product being sold on the ecommerce site. The category can range from 'construcao_ferramentas_construcao' to 'fashion_underwear_e_moda_praia' to 'casa_conforto'. This column may contain multiple categories depending on the product being sold.",
              "sampleData": "['construcao_ferramentas_construcao' 'cama_mesa_banho' 'moveis_sala'\n 'fashion_underwear_e_moda_praia' 'casa_conforto' 'moveis_quarto'\n 'fashion_esporte' 'sinalizacao_e_seguranca' 'artigos_de_natal'\n 'fashion_calcados' 'bebes' 'construcao_ferramentas_iluminacao'\n 'agro_industria_e_comercio' 'artes_e_artesanato' 'alimentos_bebidas'\n 'telefonia_fixa' 'pcs' 'moveis_escritorio' 'moveis_colchao_e_estofado'\n 'construcao_ferramentas_ferramentas']",
              "tags": [
                  "construcao_ferramentas_construcao_END \n                            cama_mesa_banho_END\n                            moveis_sala_END \n                            fashion_underwear_e_moda_praia_END\n                            casa_conforto_END\n\n    *****   Solution   *****\n\nApproach:\n\nWe can use the method .unique() of pandas Series to generate the alternate business taxonomies for the column. Then",
                  " we iterate through the unique values and concatenate the values with the separator string. \n\nCode:\n\nimport pandas as pd\n\n# create sample data\ndata = {'product category name': ['construcao_ferramentas_construcao'",
                  "\n                                  'cama_mesa_banho'",
                  "\n                                  'moveis_sala'",
                  "\n                                  'fashion_underwear_e_moda_praia'",
                  "\n                                  'casa_conforto']}\ndf = pd.DataFrame(data)\nprint(df)\n\n# generate alternate business taxonomies\nseparator = \"_\"\nfor category in df['product category name'].unique():\n    category_end = category+separator+\"END\"\n    print(category_end)\n\nOutput:\n          product category name\n0  construcao_ferramentas_construcao\n1                  cama_mesa_banho\n2                      moveis_sala\n3",
                  "Testing"
              ]
          },
          {
              "id": 104,
              "masterId": "ecommerce_data-product_category_name_translation-product_category_name_english",
              "technicalName": "product_category_name_translation",
              "name": "product_category_name_english",
              "type": "column",
              "invalidCount": 0,
              "nullCount": 0.7,
              "validCount": 1,
              "dataType": [
                  "Open_ended_text",
                  "category"
              ],
              "businessGlossary": "Product Category Name English - These are the english names of the categories to which each product belongs to. The category names are defined based on the type of products they contain.",
              "sampleData": "['construction_tools_lights' 'fixed_telephony' 'la_cuisine'\n 'fashion_sport' 'christmas_supplies' 'health_beauty' 'telephony' 'audio'\n 'small_appliances' 'air_conditioning' 'party_supplies' 'home_comfort_2'\n 'kitchen_dining_laundry_garden_furniture' 'electronics'\n 'diapers_and_hygiene' 'food_drink' 'auto' 'stationery'\n 'furniture_bedroom' 'computers']",
              "tags": [
                  "1. construction_tools\n    2. lights\n    3. fixed_telephony\n    4. la_cuisine\n    5. fashion\n    6. sport\n    7. christmas_supplies"
              ]
          }
      ]
  }
]