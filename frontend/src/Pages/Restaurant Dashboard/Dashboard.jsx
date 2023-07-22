import React, { useState } from "react";
import "../../Styles/Restaurant Dashboard/Dashboard.css";
import { Chart } from "react-google-charts";
const Dashboard = () => {
  const ordersData = [
    ["Order", "Number per Day"],
    ["Delivered", 220],
    ["Cancelled", 14],
  ];
  const ordersChartOptions = {
    title: "Orders Breakdown",
  };
  const popularDishesData = [
    ["Order", "Number per Day"],
    ["Pizza", 58],
    ["Biryani", 108],
    ["Panner", 90],
    ["Other", 10],
  ];
  const dishesChartOptions = {
    title: "Dishes Order per day",
    is3D: true,
  };
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  return (
    <>
      <div className="dashBoardContainer py-4">
        <div className="dashboardOverviewContainer">
          <div className="overviewMainContainer">
            <div className="overviewTitleBox">
              <div className="overviewTitle">
                <span>Overview</span>
              </div>
              <select
                className="form-select form-select-sm overviewDropBox"
                aria-label=".form-select-sm example"
              >
                <option selected>Today</option>
                <option value="1">Yesterday</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="overviewContainer">
              <div className="overviewBox">
                <div className="overviewBoxValue">34</div>
                <div className="overviewBoxTitle">Total Dishes</div>
              </div>
              <div className="overviewBox">
                <div className="overviewBoxValue">234</div>
                <div className="overviewBoxTitle">Orders Recieved</div>
              </div>
              <div className="overviewBox">
                <div className="overviewBoxValue">₹ 9,900</div>
                <div className="overviewBoxTitle">Total Revenue</div>
              </div>
            </div>
          </div>
          <div className="overviewBreakDownContainer">
            <div className="ordersBreakdownBox">
              <Chart
                chartType="PieChart"
                data={ordersData}
                options={ordersChartOptions}
                width={"max-content"}
                height={"max-content"}
                style={{ padding: "5px" }}
              />
            </div>
            <div className="popularDishesBox">
              <Chart
                chartType="PieChart"
                data={popularDishesData}
                options={dishesChartOptions}
                width={"max-content"}
                height={"max-content"}
                style={{ padding: "5px" }}
              />
            </div>
            <div className="customerFlowBox"></div>
          </div>
        </div>
        <div className="orderOverviewContainer">
          <div className="orderOverviewTitle">Orders Notifications</div>
          <div
            className="orderOverViewSubTitle"
            style={{ display: showOrderDetails ? "none" : "" }}
          >
            <i className="fa-solid fa-file-invoice px-2"></i>Orders
          </div>
          <div
            className="orderOverViewSubTitle orderDetailsPage"
            style={{ display: !showOrderDetails ? "none" : "" }}
          >
            <div>
              <i className="fa-solid fa-file-invoice px-2"></i>Order Details
            </div>
            <i
              className="fa-sharp fa-regular fa-arrow-left"
              onClick={() => setShowOrderDetails(false)}
            ></i>
          </div>
          <div
            className="ordersDashboardContainer"
            style={{ display: showOrderDetails ? "none" : "" }}
          >
            <div
              className="ordersDashboard"
              onClick={() => setShowOrderDetails(true)}
            >
              <i className="fa-regular fa-bowl-food ordersDasboardIcon"></i>
              <div className="ordersDashboardInfoBox">
                <div className="ordersDashboardInfoTitle">Order Number</div>
                <div className="ordersDashboardInfo">#ORID78945612</div>
              </div>
              <div className="ordersDashboardActionBtn">Order Accept</div>
            </div>
            <div
              className="ordersDashboard"
              onClick={() => setShowOrderDetails(true)}
            >
              <i className="fa-regular fa-bowl-food ordersDasboardIcon"></i>
              <div className="ordersDashboardInfoBox">
                <div className="ordersDashboardInfoTitle">Order Number</div>
                <div className="ordersDashboardInfo">#ORID78945612</div>
              </div>
              <div className="ordersDashboardActionBtn">Order Accept</div>
            </div>
            <div
              className="ordersDashboard"
              onClick={() => setShowOrderDetails(true)}
            >
              <i className="fa-regular fa-bowl-food ordersDasboardIcon"></i>
              <div className="ordersDashboardInfoBox">
                <div className="ordersDashboardInfoTitle">Order Number</div>
                <div className="ordersDashboardInfo">#ORID78945612</div>
              </div>
              <div className="ordersDashboardActionBtn">Order Accept</div>
            </div>
            <div
              className="ordersDashboard"
              onClick={() => setShowOrderDetails(true)}
            >
              <i className="fa-regular fa-bowl-food ordersDasboardIcon"></i>
              <div className="ordersDashboardInfoBox">
                <div className="ordersDashboardInfoTitle">Order Number</div>
                <div className="ordersDashboardInfo">#ORID78945612</div>
              </div>
              <div className="ordersDashboardStatusInfoBox">
                <div className="ordersDashboardStatusInfoTitle">Status</div>
                <div className="ordersDashboardStatusInfo">On the way</div>
              </div>
            </div>
            <div className="ordersDashboard deliveredOrder">
              <i className="fa-regular fa-bowl-food ordersDasboardIcon"></i>
              <div className="ordersDashboardInfoBox">
                <div className="ordersDashboardInfoTitle">Order Number</div>
                <div className="ordersDashboardInfo">#ORID78945612</div>
              </div>
              <div className="ordersDashboardStatusInfoBox">
                <div className="ordersDashboardStatusInfoTitle">Status</div>
                <div className="ordersDashboardStatusInfo">Delivered</div>
              </div>
            </div>
            <div className="ordersDashboard undeliveredOrder">
              <i className="fa-regular fa-bowl-food ordersDasboardIcon"></i>
              <div className="ordersDashboardInfoBox">
                <div className="ordersDashboardInfoTitle">Order Number</div>
                <div className="ordersDashboardInfo">#ORID78945612</div>
              </div>
              <div className="ordersDashboardStatusInfoBox">
                <div className="ordersDashboardStatusInfoTitle">Status</div>
                <div className="ordersDashboardStatusInfo">Un-delivered</div>
              </div>
            </div>
          </div>
          <div
            className="orderDashboardDetailsContainer"
            style={{ display: !showOrderDetails ? "none" : "" }}
          >
            <div className="orderDeliveryPersonDetailsBox">
              <div className="orderDeliverPersonTitle">Delivery Person</div>
              <div className="orderDeliveryPersonDetails">
                <img
                  src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1685248438/todoApp/msms4ujwsbxewcropg7a.jpg"
                  alt=""
                />
                <div className="deliveryPersonDetails">
                  <div className="deliveryPersonName">Raj Aryan</div>
                  <div className="deliveryPersonEmployeeInfo">
                    Employee ID - FDB789456
                  </div>
                </div>
              </div>
              <div className="customerDetailsBox py-2">
                <div className="customerDetail">
                  <div className="customerDetailTitle">Customer Name</div>
                  <div className="customerDetailValue">Vinod Rakesh Singh</div>
                </div>
                <div className="customerDetail">
                  <div className="customerDetailTitle">Order Amount</div>
                  <div className="customerDetailValue">Rs. 1800/-</div>
                </div>
                <div className="customerDetail">
                  <div className="customerDetailTitle">Customer Number</div>
                  <div className="customerDetailValue">+91 7371986179</div>
                </div>
                <div className="customerDetail">
                  <div className="customerDetailTitle">Order Number</div>
                  <div className="customerDetailValue">#ORID7584375</div>
                </div>
              </div>
            </div>
            <div className="orderDeliveryPersonDetailsBox">
              <div className="orderDeliverPersonTitle">Order Details</div>
              <div className="orderDeliveryMenuDetails">
                <div className="orderMenuDetailsBox">
                  <div className="orderMenu" style={{ fontSize: "12px" }}>
                    <img
                      src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                      alt=""
                    />
                    <span className="orderQuantity">
                      <span style={{ fontSize: "12px" }}>2</span>
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                    <span
                      className="orderMenuName"
                      style={{ fontSize: "12px" }}
                    >
                      Double Topping Pizza
                    </span>
                  </div>
                  <div
                    className="orderMenuSubTitle"
                    style={{ fontSize: "11px" }}
                  >
                    Paneer &amp; Onion
                  </div>
                </div>
                <div className="orderMenuDetailsBox">
                  <div className="orderMenu" style={{ fontSize: "12px" }}>
                    <img
                      src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                      alt=""
                    />
                    <span className="orderQuantity">
                      <span style={{ fontSize: "12px" }}>2</span>
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                    <span
                      className="orderMenuName"
                      style={{ fontSize: "12px" }}
                    >
                      Double Topping Pizza
                    </span>
                  </div>
                  <div
                    className="orderMenuSubTitle"
                    style={{ fontSize: "11px" }}
                  >
                    Paneer &amp; Onion
                  </div>
                </div>
              </div>
            </div>
            <div className="orderDashboardInfoContainer py-1">
              <div className="orderDashboardDeliveryInfoBox">
                <div className="orderDashboardDeliveryInfoTitle">
                  Delivery Address
                </div>
                <div className="orderDashboardDeliveryInfoValue">
                  Flat No. 15, Andhra Prince PG, Rasoolpur Nawada, Sector
                  62,Noida,UP,India
                </div>
              </div>
              <div className="orderDashboardDeliveryInfoBox">
                <div className="orderDashboardDeliveryInfoTitle">
                  Order Staus
                </div>
                <div className="orderDashboardDeliveryInfoValue">
                  Undelivered
                </div>
              </div>
              <div className="orderDashboardDeliveryInfoBox">
                <div className="orderDashboardDeliveryInfoTitle">
                  Reason if order undelivered
                </div>
                <div className="orderDashboardDeliveryInfoValue">
                  Cancelled by customer packaging is not proper
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
