import React from "react";
import "../../Styles/Restaurant Dashboard/Review.css";
const Review = () => {
  return (
    <>
      <div className="reviewMainContainer p-5">
        <div className="reviewHeadingBox">
          <div className="reviewTitle">Reviews</div>
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
        <div className="reviewContainer">
          <div className="reviewBox">
            <div className="reviewInfoBox">
              <div className="reviewOrderNumber">#3245678901</div>
              <div className="ratingButton">
                3.8
                <i
                  className="fa-regular fa-star"
                  style={{ color: "white", marginLeft: 5 }}
                />
              </div>
            </div>
            <div className="reviewDetails">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ea cum officia perspiciatis repellat.
            </div>
          </div>
          <div className="reviewBox">
            <div className="reviewInfoBox">
              <div className="reviewOrderNumber">#3245678901</div>
              <div className="ratingButton">
                3.8
                <i
                  className="fa-regular fa-star"
                  style={{ color: "white", marginLeft: 5 }}
                />
              </div>
            </div>
            <div className="reviewDetails">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ea cum officia perspiciatis repellat.
            </div>
          </div>
          <div className="reviewBox">
            <div className="reviewInfoBox">
              <div className="reviewOrderNumber">#3245678901</div>
              <div className="ratingButton">
                3.8
                <i
                  className="fa-regular fa-star"
                  style={{ color: "white", marginLeft: 5 }}
                />
              </div>
            </div>
            <div className="reviewDetails">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ea cum officia perspiciatis repellat.
            </div>
          </div>
          <div className="reviewBox">
            <div className="reviewInfoBox">
              <div className="reviewOrderNumber">#3245678901</div>
              <div className="ratingButton">
                3.8
                <i
                  className="fa-regular fa-star"
                  style={{ color: "white", marginLeft: 5 }}
                />
              </div>
            </div>
            <div className="reviewDetails">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ea cum officia perspiciatis repellat.
            </div>
          </div>
          <div className="reviewBox">
            <div className="reviewInfoBox">
              <div className="reviewOrderNumber">#3245678901</div>
              <div className="ratingButton">
                3.8
                <i
                  className="fa-regular fa-star"
                  style={{ color: "white", marginLeft: 5 }}
                />
              </div>
            </div>
            <div className="reviewDetails">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              veritatis ab quam accusamus magnam obcaecati harum minima a
              praesentium. Modi iste, quod facere unde incidunt, totam ullam
              sapiente dolores doloribus eaque repudiandae cum neque odio eos
              tempora soluta sunt hic, illum architecto laudantium officiis ut
              vel. Excepturi dolore numquam magnam velit molestiae tenetur
              recusandae? Amet laboriosam adipisci doloremque laborum aperiam
              nesciunt consequatur rem, officia ipsam eos alias? Deserunt
              corrupti ad accusamus cumque aut voluptatum fugit nesciunt, sed
              tempora facilis animi! Pariatur quam odio nulla consequatur hic
              inventore perspiciatis beatae officia illum corrupti sunt esse
              exercitationem, quo repellendus veritatis. Asperiores, obcaecati!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
