import React from "react";
import "./ListStory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";

export default function ListStory() {
  // check code. don't work
  $(window).on(function() {
    var carouselEl = $(".owl-carousel");
    console.log("zzz", carouselEl);
    carouselEl.owlCarousel({
      items: 8
    });

    $(".arrow-left").click(function() {
      console.log("clicked left");
      carouselEl.trigger("next.owl.carousel");
    });

    $(".arrow-right").click(function() {
      console.log("clicked right");
      carouselEl.trigger("prev.owl.carousel");
    });
  });

  return (
    <div className="storys">
      <div className="s-content">
        <div className="wrapper-storys">
          <div className="show-storys">
            {/* <OwlCarousel className="owl-theme" margin={0}> */}
            <OwlCarousel
              className=""
              loop="true"
              // autoplay
              // autoplayTimeout="5000"
              margin={0}
            >
              {/* <ul> */}
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              <li>
                <div className="story-item">
                  <button>
                    <div className="story-view">
                      <canvas className="CfWVH" height="83" width="83" />
                      <span>
                        <img
                          alt="x"
                          src="https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-19/s150x150/83816796_180676393242289_4146198532333764608_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_ohc=JyfTMlkv_uwAX-R3XPP&oh=a2e47f4c43b1d1d4decf95876e80706c&oe=5EE61599"
                        />
                      </span>
                    </div>
                    <div className="userName">po.trann</div>
                  </button>
                </div>
              </li>
              {/* </ul> */}
            </OwlCarousel>
          </div>
          <div className="">
            <button type="button" role="presentation" className="arrow-right">
              <div className="icon" />
            </button>
            <button type="button" role="presentation" className="arrow-left">
              <div className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
