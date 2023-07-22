import React, { useState } from "react";
import "../../Styles/Restaurant Dashboard/Orders.css";
import orders from "../../order.json";
import deliveryBoy from "../../DeliveryBoy.json";
const Orders = () => {
  const [orderItemActive, setOrderItemActive] = useState(0);
  const [orderFilter, setOrderFilter] = useState("new");
  const [modalData, setModalData] = useState(null);
  const [assignedDeliveryBoy, setAssignedDeliveryBoy] = useState(null);
  const [searchItemActive, setSearchItemActive] = useState(null);

  const handlerOrderActive = (indx) => {
    setOrderItemActive(indx);
  };
  const handlerOrderFilter = (filter) => {
    setOrderFilter(filter);
    setOrderItemActive(0);
  };
  const handlerSearchItemActive = (item, indx) => {
    setSearchItemActive(indx);
    setOrderFilter(
      item.orderStatus === "delivered" || item.orderStatus === "un-delivered"
        ? "pastOrders"
        : item.orderStatus
    );
    setOrderItemActive(item.orderNumber);
  };
  const calculateTotalCartPrice = (arr) => {
    if (!arr?.orderDetails) return 0;
    return arr?.orderDetails?.reduce((totalPrice, item) => {
      return totalPrice + item.quantity * item.itemPrice;
    }, 0);
  };
  const handlerPastOrderFilter = () => {
    setOrderFilter("pastOrders");
  };
  return (
    <>
      <div className="adminOrderMainContainer p-4">
        <div className="adminOrderSearchContainer">
          <div className="orderSearchBox">
            <input
              className="form-control"
              type="search"
              placeholder="Search order..."
              aria-label="Search"
            />
          </div>
          <div className="orderSearchResultBox">
            {orders.map((curr, index) => {
              return (
                <div
                  className={`orderSearchResult ${
                    searchItemActive === index ? "adminOrderItemHover" : ""
                  }`}
                  key={index}
                  onClick={() => handlerSearchItemActive(curr, index)}
                >
                  <div className="orderDetails">
                    <div className="orderNumber">{curr.orderNumber}</div>
                    <div className="CustomerName">{curr.customerName}</div>
                    <div className="CustomerAddress">
                      {curr.customerAddress}
                    </div>
                    <div className="OrderBriefDetails">
                      {curr.orderDetails.length}
                      {curr.orderDetails.length > 1 ? "items" : "item"} for ₹
                      {calculateTotalCartPrice(curr)}
                    </div>
                    <div className="OrderRecivedTime">
                      Recieved 6 minutes ago
                    </div>
                  </div>
                  <span
                    className="badge rounded-pill orderStatus"
                    style={{
                      backgroundColor:
                        curr.orderStatus === "delivered"
                          ? "green"
                          : curr.orderStatus === "un-delivered"
                          ? "red"
                          : curr.orderStatus === "preparing"
                          ? "rgb(13, 110, 253)"
                          : curr.orderStatus === "new"
                          ? "rgb(252, 128, 25)"
                          : "rgb(255, 193, 7)",
                    }}
                  >
                    {curr.orderStatus}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="adminOrderContainer">
          <div className="adminOrderFilterBox">
            <div
              className="adminOrderFilter position-relative"
              style={{
                backgroundColor: orderFilter === "new" ? "#fc8019" : "",
                color: orderFilter === "new" ? "#fff" : "",
              }}
              onClick={() => handlerOrderFilter("new")}
            >
              <span></span>
              <i className="fa-solid fa-file-plus px-2"></i>
              New
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger adminFilterBadge">
                {orders.filter((curr) => curr.orderStatus === "new").length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>
            <div
              className="adminOrderFilter"
              style={{
                backgroundColor: orderFilter === "preparing" ? "#fc8019" : "",
                color: orderFilter === "preparing" ? "#fff" : "",
              }}
              onClick={() => handlerOrderFilter("preparing")}
            >
              <i className="fa-sharp fa-regular fa-bowl-hot px-2"></i>Preparing
            </div>
            <div
              className="adminOrderFilter"
              onClick={() => handlerOrderFilter("ready")}
              style={{
                backgroundColor: orderFilter === "ready" ? "#fc8019" : "",
                color: orderFilter === "ready" ? "#fff" : "",
              }}
            >
              <i className="fa-regular fa-bag-shopping px-2"></i>Ready
            </div>
            <div
              className="adminOrderFilter"
              onClick={handlerPastOrderFilter}
              style={{
                backgroundColor: orderFilter === "pastOrders" ? "#fc8019" : "",
                color: orderFilter === "pastOrders" ? "#fff" : "",
              }}
            >
              <i className="fa-sharp fa-solid fa-grip-dots px-2"></i>Past Orders
            </div>
          </div>
          <div className="adminOrderMainBox">
            <div className="adminOrderBox ">
              {orderFilter !== "pastOrders" ? (
                orders
                  .filter((curr) => curr.orderStatus === orderFilter)
                  ?.map((curr, index) => {
                    return (
                      <div
                        className={`adminOrderItem ${
                          orderItemActive === index ||
                          orderItemActive === curr.orderNumber
                            ? "adminOrderItemHover"
                            : ""
                        }`}
                        onClick={() => handlerOrderActive(curr.orderNumber)}
                        key={index}
                      >
                        <div className="adminOrderItemInfo">
                          <div className="adminOrderNumber">
                            {curr.orderNumber}
                          </div>
                          <div className="adminOrderInfo">
                            {curr.orderDetails.length}
                            {curr.orderDetails.length > 1
                              ? "items"
                              : "item"}{" "}
                            for ₹{calculateTotalCartPrice(curr)}
                          </div>
                        </div>
                        <div className="adminOrderTimeInfo">
                          29 Apr 2023 09:51 PM
                        </div>
                        <div className="adminOrderActionBtn">
                          <i className="fa-regular fa-print px-2"></i>Print
                        </div>
                      </div>
                    );
                  })
              ) : (
                <>
                  {orders
                    .filter((curr) => {
                      if (orderItemActive === 0) {
                        return (
                          curr.orderStatus === "delivered" ||
                          curr.orderStatus === "un-delivered"
                        );
                      }
                      return curr.orderNumber === orderItemActive;
                    })
                    ?.splice(0, 1)
                    .map((curr, index) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                          key={index}
                        >
                          <div className="adminOrderItem adminOrderItemHover">
                            <div className="adminOrderItemInfo">
                              <div className="adminOrderNumber">
                                {curr.orderNumber}
                              </div>
                              <div className="adminOrderInfo">
                                {curr.orderDetails.length}
                                {curr.orderDetails.length > 1
                                  ? "items"
                                  : "item"}{" "}
                                for ₹{calculateTotalCartPrice(curr)}
                              </div>
                            </div>
                            <div className="adminOrderTimeInfo">
                              29 Apr 2023 09:51 PM
                            </div>
                            <div className="adminOrderActionBtn">
                              <i className="fa-regular fa-print px-2"></i>Print
                            </div>
                          </div>
                          <div className="adminPastOrderDetailsBox">
                            <div className="orderDeliveryPersonDetailsBox">
                              <div className="orderDeliverPersonTitle">
                                Delivery Person
                              </div>
                              <div className="orderDeliveryPersonDetails">
                                <img
                                  src={
                                    deliveryBoy.find(
                                      (person) =>
                                        person.empID === curr.deliveryBoyID
                                    )?.img
                                  }
                                  alt=""
                                />
                                <div className="deliveryPersonDetails">
                                  <div className="deliveryPersonName">
                                    {
                                      deliveryBoy.find(
                                        (person) =>
                                          person.empID === curr.deliveryBoyID
                                      )?.name
                                    }
                                  </div>
                                  <div className="deliveryPersonEmployeeInfo">
                                    Employee ID - {curr.deliveryBoyID}
                                  </div>
                                </div>
                              </div>
                              <div className="customerDetailsBox py-2">
                                <div className="customerDetail">
                                  <div className="customerDetailTitle">
                                    Customer Name
                                  </div>
                                  <div className="customerDetailValue">
                                    {curr.customerName}
                                  </div>
                                </div>
                                <div className="customerDetail">
                                  <div className="customerDetailTitle">
                                    Order Amount
                                  </div>
                                  <div className="customerDetailValue">
                                    Rs. {calculateTotalCartPrice(curr)}/-
                                  </div>
                                </div>
                                <div className="customerDetail">
                                  <div className="customerDetailTitle">
                                    Customer Number
                                  </div>
                                  <div className="customerDetailValue">
                                    +91 {curr.customerNumber}
                                  </div>
                                </div>
                                <div className="customerDetail">
                                  <div className="customerDetailTitle">
                                    Order Number
                                  </div>
                                  <div className="customerDetailValue">
                                    {curr.orderNumber}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="orderDeliveryPersonDetailsBox">
                              <div className="orderDeliverPersonTitle">
                                Order Details
                              </div>
                              <div className="orderDeliveryMenuDetails">
                                {curr.orderDetails.map((curr, index) => {
                                  return (
                                    <div
                                      className="orderMenuDetailsBox"
                                      key={index}
                                    >
                                      <div
                                        className="orderMenu"
                                        style={{ fontSize: "12px" }}
                                      >
                                        <img
                                          src={
                                            curr.type === "non-veg"
                                              ? "https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                                              : "https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
                                          }
                                          alt=""
                                        />
                                        <span className="orderQuantity">
                                          <span style={{ fontSize: "12px" }}>
                                            {curr.quantity}
                                          </span>
                                          <i className="fa-solid fa-xmark"></i>
                                        </span>
                                        <span
                                          className="orderMenuName"
                                          style={{ fontSize: "12px" }}
                                        >
                                          {curr.itemName}
                                        </span>
                                      </div>
                                      <div
                                        className="orderMenuSubTitle"
                                        style={{ fontSize: "11px" }}
                                      >
                                        {curr.itemSubCategory}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="orderDashboardInfoContainer py-1">
                              <div className="orderDashboardDeliveryInfoBox">
                                <div className="orderDashboardDeliveryInfoTitle">
                                  Delivery Address
                                </div>
                                <div className="orderDashboardDeliveryInfoValue">
                                  {curr.customerAddress}
                                </div>
                              </div>
                              <div className="orderDashboardDeliveryInfoBox">
                                <div className="orderDashboardDeliveryInfoTitle">
                                  Order Staus
                                </div>
                                <div
                                  className="orderDashboardDeliveryInfoValue"
                                  style={{ textTransform: "capitalize" }}
                                >
                                  {curr.orderStatus}
                                </div>
                              </div>
                              <div className="orderDashboardDeliveryInfoBox">
                                <div className="orderDashboardDeliveryInfoTitle">
                                  Reason if order undelivered
                                </div>
                                <div className="orderDashboardDeliveryInfoValue">
                                  {curr.orderStatus === "un-delivered"
                                    ? curr?.cancellationReason
                                    : "NA"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="orderFlowBox">
                            {curr?.orderFlowDetails?.map((curr, index) => {
                              return (
                                <div className="orderFlow" key={index}>
                                  <div className="orderFlowValue">
                                    <i className="fa-sharp fa-solid fa-badge-check px-2"></i>
                                    {Object.values(curr)[0]}
                                  </div>
                                  <div className="orderFlowTitle px-4">
                                    {Object.keys(curr)[0]}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
            {orderFilter !== "pastOrders" && (
              <div>
                <div className="adminOrderMainInfoBox">
                  <div className="adminOrderInfoBox">
                    <div className="adminOrderInfoTitle">Pick-up-time</div>
                    <div className="adminOrderInfoValue">Calculating...</div>
                  </div>
                  <div className="adminOrderInfoBox">
                    <div className="adminOrderInfoTitle">
                      Delivery Executive
                    </div>
                    <div className="adminOrderInfoValue">
                      {assignedDeliveryBoy === null || orderFilter === "new"
                        ? "Assigning.."
                        : assignedDeliveryBoy}
                    </div>
                  </div>
                  <div className="adminOrderInfoBox">
                    <div className="adminOrderInfoTitle">Grand Total</div>
                    <div className="adminOrderInfoValue">
                      ₹{" "}
                      {calculateTotalCartPrice(
                        orders.filter((curr) => {
                          if (orderItemActive === 0) {
                            return curr.orderStatus === orderFilter;
                          }
                          return curr.orderNumber === orderItemActive;
                        })?.[0]
                      )}
                    </div>
                  </div>
                  <button
                    className="adminOrderInfoActionBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#orderDetailsModal"
                    onClick={() =>
                      setModalData(
                        orders.filter((curr) => {
                          if (orderItemActive === 0) {
                            return curr.orderStatus === orderFilter;
                          }
                          return curr.orderNumber === orderItemActive;
                        })?.[0]
                      )
                    }
                  >
                    Details
                  </button>
                </div>
                <div className="adminOrderActionBtnBox">
                  {orderFilter === "new" ? (
                    <button className="adminOrderFirstActionBtn">
                      Mark out of Stock
                    </button>
                  ) : (
                    <div className="dropdown-center">
                      <button
                        className="adminOrderFirstActionBtn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Assign Delivery Boy
                      </button>
                      <ul className="dropdown-menu">
                        {deliveryBoy
                          .sort((a, b) => a.distance - b.distance)
                          .filter((curr) => curr.distance <= 5)
                          .map((curr, index) => {
                            return (
                              <li
                                key={index}
                                className="deliveryBoyListItem"
                                onClick={() =>
                                  setAssignedDeliveryBoy(curr.name)
                                }
                              >
                                <div className="dropdown-item deliveryBoyName">
                                  {curr.name}
                                </div>
                                <div className="deliveryBoyDistance">
                                  {curr.distance} KM
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  )}
                  <button className="adminOrderSecondActionBtn">
                    {orderFilter === "new"
                      ? "Confirm Order"
                      : orderFilter === "preparing"
                      ? "Food Prepared"
                      : "On the way"}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            className="modal fade"
            id="orderDetailsModal"
            tabIndex={-1}
            aria-labelledby="orderDetailsModal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="orderDetailsModal">
                    Order Details
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModalData(null)}
                  />
                </div>
                {modalData !== null && (
                  <div className="modal-body adminOrderDetailModalBody">
                    <div className="customerDetailsBox adminOrderCustomerDetailBox">
                      <div className="customerDetail">
                        <div className="customerDetailTitle">Customer Name</div>
                        <div className="customerDetailValue">
                          {modalData?.customerName}
                        </div>
                      </div>
                      <div className="customerDetail">
                        <div className="customerDetailTitle">Order Amount</div>
                        <div className="customerDetailValue">
                          Rs.{" "}
                          {modalData?.orderDetails?.reduce(
                            (totalPrice, item) => {
                              return (
                                totalPrice + item.quantity * item.itemPrice
                              );
                            },
                            0
                          )}
                          /-
                        </div>
                      </div>
                      <div className="customerDetail">
                        <div className="customerDetailTitle">
                          Customer Number
                        </div>
                        <div className="customerDetailValue">
                          +91 {modalData.customerNumber}
                        </div>
                      </div>
                      <div className="customerDetail">
                        <div className="customerDetailTitle">Order Number</div>
                        <div className="customerDetailValue">
                          {modalData.orderNumber}
                        </div>
                      </div>
                    </div>
                    <div className="orderDeliveryPersonDetailsBox adminOrderDetailBox">
                      <div className="orderDeliverPersonTitle">
                        Order Details
                      </div>
                      <div className="orderDeliveryMenuDetails mb-0">
                        {modalData?.orderDetails?.map((curr, index) => {
                          return (
                            <div className="orderMenuDetailsBox" key={index}>
                              <div
                                className="orderMenu"
                                style={{ fontSize: "12px" }}
                              >
                                <img
                                  src={
                                    curr.type === "non-veg"
                                      ? "https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                                      : "https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
                                  }
                                  alt=""
                                />
                                <span className="orderQuantity">
                                  <span style={{ fontSize: "12px" }}>
                                    {curr.quantity}
                                  </span>
                                  <i className="fa-solid fa-xmark"></i>
                                </span>
                                <span
                                  className="orderMenuName"
                                  style={{ fontSize: "12px" }}
                                >
                                  {curr.itemName}
                                </span>
                              </div>
                              <div
                                className="orderMenuSubTitle"
                                style={{ fontSize: "11px" }}
                              >
                                {curr.itemSubCategory}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="orderDashboardInfoContainer adminOrderDetailInfoBox">
                      <div className="orderDashboardDeliveryInfoBox">
                        <div className="orderDashboardDeliveryInfoTitle pb-1">
                          Delivery Address
                        </div>
                        <div className="orderDashboardDeliveryInfoValue">
                          {modalData.customerAddress}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
