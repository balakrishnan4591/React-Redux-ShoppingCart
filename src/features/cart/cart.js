import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "./cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  //calculate total quantity and amount

  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalAmount = products.reduce(
    (total, product) =>
      total +
      product.quantity *
        (product.price -
          Math.round(
            product.price -
              (product.price -
                product.price * (product.discountPercentage / 100))
          )),
    0
  );

  return (
    <>
      <div className="col-md-12">
        {products.map((product) => (
          <div
            className="card"
            style={{ width: "80%", borderRadius: "20px" }}
            key={product.id}
          >
            <div className="row g-0 ">
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img
                  src={product.images}
                  className="img-fluid product-img"
                  alt={product.title}
                  style={{ borderRadius: "30px" }}
                />
              </div>

              <div className="col-md-7">
                <div className="row g-0">
                  <div className="col-md">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h5 className="card-title">{product.title}</h5>
                        </div>
                        <div className="col">
                          <h5 className="card-title d-flex justify-content-end ">
                            ${product.price}
                          </h5>
                          <div className="row">
                            <div className="col d-flex align-items-center justify-content-end">
                              <div>
                                <button
                                  className="btn btn-danger"
                                  onClick={() =>
                                    dispatch(decreaseQuantity(product.id))
                                  }
                                >
                                  <strong>-</strong>
                                </button>
                                <span> {product.quantity} </span>
                                <button
                                  className="btn btn-success"
                                  onClick={() =>
                                    dispatch(increaseQuantity(product.id))
                                  }
                                >
                                  <strong>+</strong>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="card-text">
                            <b>Brand : </b>
                            {product.brand}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="card-text">{product.description}</p>
                        </div>
                        <div className="col d-flex justify-content-end"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* start - discount  */}
                <div className="row g-0 p-4 subtotal">
                  <div className="row">
                    <div className="card-title col">Price:</div>
                    <div className="card-title col text-end">
                      ${product.price}
                    </div>
                  </div>
                  <div className="row">
                    <div className="card-title col text-success">
                      Discount Amount :
                    </div>
                    <div className="card-title col text-end text-success">
                      $
                      {Math.round(
                        product.price -
                          (product.price -
                            product.price * (product.discountPercentage / 100))
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="card-title col d-flex align-items-center">
                      SUB TOTAL :
                    </div>
                    <div className="card-title col text-end fs-4 fw-normal">
                      $
                      {product.price -
                        Math.round(
                          product.price -
                            (product.price -
                              product.price *
                                (product.discountPercentage / 100))
                        )}
                    </div>
                  </div>
                </div>
                {/* end - discount */}
              </div>

              <div className="row">
                <div className="col d-flex justify-content-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-12 d-flex justify-content-center align-items-center cart-total">
        <div className="card">
          <p>
            Total Quantity: <span id="total-quantity">{totalQuantity}</span>
          </p>
          <p>
            Total Amount:{" "}
            <span id="total-amount">{totalAmount.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
