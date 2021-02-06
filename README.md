# Back-end TRACTR challenge

#### Base URL

The base URL of the API is `https://tractr-back.herokuapp.com`.

## End Points

#### Get products `GET '/products'`
Will get you the JSON file of all products, e.g:
```json
{
	"message": "Products fetched.",
	"products": [
		{
			"rating": 3,
			"_id": "601dd8bf81440200042b62cc",
			"title": "amd radeon pro wx 9100 100-505957 16gb 2048-bit hbm2 crossfire supported video card",
			"imageUrl": "https://c1.neweggimages.com/ProductImage/14-105-087-V01.jpg",
			"memory": 16,
			"brand": "amd",
			"price": 2068.99,
			"createdAt": "2021-02-05T23:46:07.409Z",
			"updatedAt": "2021-02-05T23:46:07.409Z",
			"__v": 0
		},
		{
			"rating": 5,
			"_id": "601d7dba86b46264d384e0c5",
			...
		}
	]
}
```
It is possible to filter the results by appending parameters to the url. E.g:
#### Get products `GET '/products?brand=amd&rating=4'`
Valid parameters are:

 - brand, e.g: `?brand=pny`
 - rating, integer values between 1 and 5, e.g: `?rating=4`
-  price, you have the options to set a minimum price, a maximum price or both, e.g: `?min_price=1500`, `?max_price=2000` or `?min_price=1000&max_price=2000`
- memory, integer values, e.g: `?memory=4`

#### Get product `GET '/products/:productID'`
Will get you the JSON file of a specific product, e.g:
```json
{
	"message": "Product fetched.",
	"products": {
		"rating": 3,
		"_id": "601dd8bf81440200042b62cc",
		"title": "amd radeon pro wx 9100 100-505957 16gb 2048-bit hbm2 crossfire supported video card",
		"imageUrl": "https://c1.neweggimages.com/ProductImage/14-105-087-V01.jpg",
		"memory": 16,
		"brand": "amd",
		"price": 2068.99,
		"createdAt": "2021-02-05T23:46:07.409Z",
		"updatedAt": "2021-02-05T23:46:07.409Z",
		"__v": 0
	}
}
```