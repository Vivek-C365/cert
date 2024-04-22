import React from "react";
import { connect } from "react-redux";

const TotalReceived = () => {
  return (
    <div
      className="box-right"
      style={{
        padding: "30px 25px",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <div className="col-md-8 ps-0">
        <p className="ps-3 text-muted fw-bold h6 mb-0">TOTAL RECEIVED</p>
        <p className="h1 fw-bold d-flex">
          <span className="fas fa-dollar-sign text-muted pe-1 h6 align-text-top mt-1"></span>
          84,254<span className="text-muted">.58</span>
        </p>
      </div>
    </div>
  );
};

const QuickPayNote = () => {
  return (
    <div
      className="box-right"
      style={{
        padding: "30px 25px",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <div className="d-flex pb-2">
        <p className="fw-bold h7">
          <span className="text-muted">quickpay.to/</span>Publicnote
        </p>
        <p className="ms-auto p-blue">
          <span className="bg btn btn-primary fas fa-pencil-alt me-3"></span>
          <span className="bg btn btn-primary far fa-clone"></span>
        </p>
      </div>
      <div
        className="bg-blue p-2"
        style={{ backgroundColor: "#dfe9fc9c", borderRadius: "5px" }}
      >
        <p className="h8 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          recusandae dolorem voluptas nemo, modi eos minus nesciunt.
        </p>
        <p className="p-blue bg btn btn-primary h8">LEARN MORE</p>
      </div>
    </div>
  );
};

const Checkout = ({ cartItems }) => {
  return (
    <div
      className="containers"
      style={{ backgroundColor: "#e8eaf6", padding: "35px" }}
    >
      <div className="row m-0">
        <div className="col-md-7 col-12">
          <div className="row">
            <div className="col-12 mb-4">
              <TotalReceived />
            </div>
            <div className="col-12 px-0 mb-4">
              <QuickPayNote />
            </div>
          </div>
        </div>
        <div className="col-md-5 col-12 ps-md-5 p-0">
          <div
            className="box-left"
            style={{
              padding: "20px 20px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
            <p className="text-muted h8">Invoice</p>
            <p className="fw-bold h7">Alex Parkinson</p>
            <p className="text-muted h8">3897 Hickroy St, salt Lake city</p>
            <p className="text-muted h8 mb-2">Utah, United States 84104</p>

            <div className="h8">
              <table className="table table-bordered border mb-3">
                <thead>
                  <tr>
                    <th className="text-muted py-2">Items</th>
                    <th className="text-muted p-2 text-center">Qty</th>
                    <th className="text-muted p-2 text-center">Price</th>
                    <th className="text-muted p-2 text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems
                    .reduce((acc, item) => {
                      const existingItem = acc.find(
                        (cartItem) =>
                          cartItem.certificate.certificate_title ===
                          item.certificate.certificate_title
                      );
                      if (existingItem) {
                        existingItem.quantity += 1;
                        existingItem.totalPrice += item.price;
                      } else {
                        acc.push({
                          ...item,
                          quantity: 1,
                          totalPrice: item.price,
                        });
                      }
                      return acc;
                    }, [])
                    .map((item, index) => (
                      <tr key={index}>
                        <td className="h8 pe-0 ps-2">
                          <span className="d-block py-2 ">
                            {item.certificate.certificate_title}
                          </span>
                        </td>
                        <td className="text-center p-0">
                          {/* quantity */}
                          <span className="d-block p-2 ">{item.quantity}</span>
                        </td>
                        <td className="p-0 text-center h8 border-end">
                          <span className="d-block py-2">
                            <span className="fas fa-dollar-sign"></span>
                            {item.price}
                          </span>
                        </td>
                        <td className="p-0 text-center">
                          <span className="d-block py-2">
                            <span className="fas fa-dollar-sign"></span>
                            {item.price * item.quantity}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="d-flex h7 mb-2">
                <p>Total Amount</p>
                <p className="ms-auto">
                  <span className="fas fa-dollar-sign"></span>1400
                </p>
              </div>
            </div>

            <div className="">
              <p className="h7 fw-bold mb-1">Pay this Invoice</p>
              <p className="text-muted h8 mb-2">
                Make payment for this invoice by filling in the details
              </p>
              <div className="form">
                <div className="row">
                  <div className="col-12">
                    <div className="card border-0">
                      <input
                        className="form-control ps-5"
                        type="text"
                        placeholder="Card number"
                      />
                      <span className="far fa-credit-card"></span>
                    </div>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control my-3"
                      type="text"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control my-3"
                      type="text"
                      placeholder="cvv"
                    />
                  </div>
                  <p className="p-blue h8 fw-bold mb-3">MORE PAYMENT METHODS</p>
                </div>
                <div className="btn btn-primary d-block h8">
                  PAY <span className="fas fa-dollar-sign ms-2"></span>1400
                  <span className="ms-3 fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items, // Assuming your cart state structure has 'items' array
  };
};

export default connect(mapStateToProps)(Checkout);
