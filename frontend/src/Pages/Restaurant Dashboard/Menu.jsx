import React, { useState } from "react";
import "../../Styles/Restaurant Dashboard/Menu.css";
const Menu = () => {
  const [active, setActive] = useState(true);
  const [showOtherDiv, setShowOtherDiv] = useState(false);
  const [isEditModal, setEditModal] = useState(false);
  return (
    <>
      <div className="menuMainContainer px-4">
        <div className="menuContainerBox">
          <div className="menuActionBox">
            <div>
              <input
                class="form-control searchItemBox"
                type="search"
                placeholder="Search for items..."
                aria-label="Search"
              />
            </div>
            <button
              className="addNewItemBtn"
              data-bs-toggle="modal"
              data-bs-target="#editMenuModal"
              onClick={() => setEditModal(false)}
            >
              Add new item
            </button>
          </div>
          <div className="menuContainer">
            <div className="menuMainBox">
              <div className="menuBoxTitle">Daily Specials</div>
              <div className="menuBox">
                <div className="menu">
                  <div className="menuInfo">
                    <div className="menuName">Egg Amelet</div>
                    <div className="menuPrice">₹ 70</div>
                  </div>
                  <div className="outOfStockAction">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onClick={() => setActive(!active)}
                        checked={active}
                      />
                    </div>
                    <div className="outOfStockTitle">
                      {active ? "Available" : "Unavailable"}
                    </div>
                  </div>
                  <div className="menuActionBtn">
                    <button className="menuEditBtn">Edit</button>
                    <button className="menuDeleteBtn">Delete</button>
                  </div>
                </div>
                <div className="menu">
                  <div className="menuInfo">
                    <div className="menuName">Onion Dosa</div>
                    <div className="menuPrice">₹ 60</div>
                  </div>
                  <div className="outOfStockAction">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onClick={() => setActive(!active)}
                        checked={active}
                      />
                    </div>
                    <div className="outOfStockTitle">
                      {active ? "Available" : "Unavailable"}
                    </div>
                  </div>
                  <div className="menuActionBtn">
                    <button className="menuEditBtn">Edit</button>
                    <button className="menuDeleteBtn">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="menuMainBox">
              <div className="menuBoxTitle">Starters</div>
              <div className="menuBox">
                <div className="menu">
                  <div className="menuInfo">
                    <div className="menuName">Aloo Fry</div>
                    <div className="menuPrice">₹ 215</div>
                  </div>
                  <div className="outOfStockAction">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onClick={() => setActive(!active)}
                        checked={active}
                      />
                    </div>
                    <div className="outOfStockTitle">
                      {active ? "Available" : "Unavailable"}
                    </div>
                  </div>
                  <div className="menuActionBtn">
                    <button className="menuEditBtn">Edit</button>
                    <button className="menuDeleteBtn">Delete</button>
                  </div>
                </div>
                <div className="menu">
                  <div className="menuInfo">
                    <div className="menuName">Gobi Fry</div>
                    <div className="menuPrice">₹ 135</div>
                  </div>
                  <div className="outOfStockAction">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onClick={() => setActive(!active)}
                        checked={active}
                      />
                    </div>
                    <div className="outOfStockTitle">
                      {active ? "Available" : "Unavailable"}
                    </div>
                  </div>
                  <div className="menuActionBtn">
                    <button
                      className="menuEditBtn"
                      data-bs-toggle="modal"
                      data-bs-target="#editMenuModal"
                      onClick={() => setEditModal(true)}
                    >
                      Edit
                    </button>
                    <button className="menuDeleteBtn">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editMenuModal"
        tabIndex={-1}
        aria-labelledby="editMenuModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editMenuModal">
                {isEditModal ? "Edit Menu" : "Add Menu"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body editMenuContainer">
              <div className="editMenuNameBox">
                <div className="editMenuTitle">Item Name*</div>
                <div className="editMenuValue">
                  <input
                    type="text"
                    inputMode="text"
                    placeholder="Enter item name.."
                  />
                </div>
              </div>
              <div className="editMenuNameBox">
                <div className="editMenuTitle">Item Price*</div>
                <div className="editMenuValue">
                  <input
                    type="text"
                    inputMode="text"
                    placeholder="Enter item price in rupees.."
                  />
                </div>
              </div>
              <div className="editMenuNameBox">
                <div className="editMenuTitle">Item Description*</div>
                <div className="editMenuValue">
                  <textarea
                    name="itemDescription"
                    id="itemDescription"
                    placeholder="Enter item description..."
                  ></textarea>
                </div>
              </div>
              <div className="editMenuNameBox">
                <div className="editMenuTitle">Item Type*</div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="itemType"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Veg
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="itemType"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Non Veg
                  </label>
                </div>
              </div>
              <div className="editMenuNameBox">
                <div className="editMenuTitle">Out of Stock*</div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="outOfStock"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Yes
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="outOfStock"
                    id="inlineRadio2"
                    value="No"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    No
                  </label>
                </div>
              </div>
              <div
                className="editMenuNameBox my-3"
                style={{ alignItems: "flex-start" }}
              >
                <div className="editMenuTitle">Item Image*</div>
                <div className="editMenuValue">
                  <input
                    type="file"
                    inputMode="text"
                    placeholder="Enter item price in rupees.."
                  />
                  <div className="text-center text-muted py-1">or,</div>
                  <input
                    type="url"
                    inputMode="url"
                    placeholder="Enter item image url"
                  />
                </div>
              </div>
              <div
                className="editMenuNameBox my-3"
                style={{ alignItems: "flex-start" }}
              >
                <div className="editMenuTitle">Item Category*</div>
                <div className="editMenuValue">
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option
                      selected
                      value="Daily Specials"
                      onClick={() => setShowOtherDiv(false)}
                    >
                      Daily Specials
                    </option>
                    <option
                      value="Starter"
                      onClick={() => setShowOtherDiv(false)}
                    >
                      Starter
                    </option>
                    <option
                      value="Main Course"
                      onClick={() => setShowOtherDiv(false)}
                    >
                      Main Course
                    </option>
                    <option
                      value="Meals"
                      onClick={() => setShowOtherDiv(false)}
                    >
                      Meals
                    </option>
                    <option
                      value="Others"
                      onClick={() => setShowOtherDiv(true)}
                    >
                      Others
                    </option>
                  </select>
                  <input
                    className="my-3"
                    type="text"
                    inputMode="text"
                    placeholder="Please specify the category.."
                    style={{ display: showOtherDiv ? "block" : "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary px-4"
                data-bs-dismiss="modal"
              >
                {isEditModal ? "Save changes" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
