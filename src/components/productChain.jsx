class Product {
  constructor(name, price, description) {
    this;
    this._name = name;
    this._price = price;
    this._description = description;
    this.product = {
      name: this.name,
      price: this.price,
      description: this.description_,
    };
    return "faefafqefqff";
  }
}
export function MakeProduct() {
  const product = new Product("apple", 100, "goood");
  return (
    <>
      <div>{product._name}</div>
    </>
  );
}
