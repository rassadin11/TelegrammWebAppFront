const product = [
  { price: "2000", discription: "erregregg", id: 1 },
  { price: "20", discription: "2342243", id: 2 },
];

export function MakeProduct() {
  return (
    <>
      {product.map((pr) => {
        return (
          <div key={pr.id}>
            <p>{pr.price}</p>
            <p>{pr.discription}</p>
          </div>
        );
      })}
    </>
  );
}
