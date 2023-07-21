import React from "react";
import "../../Styles/Restaurant Dashboard/Orders.css";
const Orders = () => {
  return (
    <>
      <div className="adminOrderMainContainer p-4">
        <div className="adminOrderSearchContainer">
          <div className="orderSearchBox">
            <input
              class="form-control"
              type="search"
              placeholder="Search for items..."
              aria-label="Search"
            />
          </div>
          <div className="orderSearchResultBox">
            <div className="orderSearchResult">
              <div className="orderDetails">
                <div className="orderNumber">#39630095167</div>
                <div className="CustomerName">Ashish Ranjan</div>
                <div className="CustomerAddress">
                  Andhra Prince PG,Rasoolpur Nawada,Sector 62,Noida
                </div>
                <div className="OrderBriefDetails">2 items for ₹ 300</div>
                <div className="OrderRecivedTime">Recieved 6 minutes ago</div>
              </div>
              <span class="badge rounded-pill orderStatus text-bg-primary">
                Preparing
              </span>
            </div>
            <div className="orderSearchResult">
              <div className="orderDetails">
                <div className="orderNumber">#39630095167</div>
                <div className="CustomerName">Ashish Ranjan</div>
                <div className="CustomerAddress">
                  Andhra Prince PG,Rasoolpur Nawada,Sector 62,Noida
                </div>
                <div className="OrderBriefDetails">2 items for ₹ 300</div>
                <div className="OrderRecivedTime">Recieved 6 minutes ago</div>
              </div>
              <span class="badge rounded-pill orderStatus ">Ready</span>
            </div>
            <div className="orderSearchResult">
              <div className="orderDetails">
                <div className="orderNumber">#39630095167</div>
                <div className="CustomerName">Ashish Ranjan</div>
                <div className="CustomerAddress">
                  Andhra Prince PG,Rasoolpur Nawada,Sector 62,Noida
                </div>
                <div className="OrderBriefDetails">2 items for ₹ 300</div>
                <div className="OrderRecivedTime">Recieved 6 minutes ago</div>
              </div>
              <span
                class="badge rounded-pill orderStatus "
                style={{ backgroundColor: "green" }}
              >
                Delivered
              </span>
            </div>
            <div className="orderSearchResult">
              <div className="orderDetails">
                <div className="orderNumber">#39630095167</div>
                <div className="CustomerName">Ashish Ranjan</div>
                <div className="CustomerAddress">
                  Andhra Prince PG,Rasoolpur Nawada,Sector 62,Noida
                </div>
                <div className="OrderBriefDetails">2 items for ₹ 300</div>
                <div className="OrderRecivedTime">Recieved 6 minutes ago</div>
              </div>
              <span class="badge rounded-pill orderStatus text-bg-danger">
                Un-delivered
              </span>
            </div>
          </div>
        </div>
        <div className="adminOrderContainer">
          <div className="adminOrderFilterBox">
            <div
              className="adminOrderFilter"
              style={{ backgroundColor: "#fc8019", color: "#fff" }}
            >
              <span></span>
              <i
                class="fa-solid fa-file-plus px-2"
                style={{ color: "#fff" }}
              ></i>
              New
            </div>
            <div className="adminOrderFilter">
              <i class="fa-sharp fa-regular fa-bowl-hot px-2"></i>Preparing
            </div>
            <div className="adminOrderFilter">
              <i class="fa-regular fa-bag-shopping px-2"></i>Ready
            </div>
            <div className="adminOrderFilter">
              <i class="fa-sharp fa-solid fa-grip-dots px-2"></i>Past Orders
            </div>
          </div>
          <div className="adminOrderMainBox">
            <div className="adminOrderBox ">
              <div className="adminOrderItem">
                <div className="adminOrderItemInfoBox">
                  <img
                    src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
                    alt=""
                  />
                  <div className="adminOrderItemInfo">
                    <div className="adminOrderItemName">Paneer Tandori</div>
                    <div className="adminOrderCategory">Main Course</div>
                  </div>
                </div>
                <div className="adminOrderItemPrice">₹ 300</div>
              </div>
            </div>
            <div>
              <div className="adminOrderMainInfoBox">
                <div className="adminOrderInfoBox">
                  <div className="adminOrderInfoTitle">Pick-up-time</div>
                  <div className="adminOrderInfoValue">10 mins</div>
                </div>
                <div className="adminOrderInfoBox">
                  <div className="adminOrderInfoTitle">Delivery Executive</div>
                  <div className="adminOrderInfoValue">Assigning..</div>
                </div>
                <div className="adminOrderInfoBox">
                  <div className="adminOrderInfoTitle">Grand Total</div>
                  <div className="adminOrderInfoValue">₹ 300</div>
                </div>
                <button className="adminOrderInfoActionBtn">Details</button>
              </div>
              <div className="adminOrderActionBtnBox">
                <button className="adminOrderFirstActionBtn">
                  Mark out of Stock
                </button>
                <button className="adminOrderSecondActionBtn">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
