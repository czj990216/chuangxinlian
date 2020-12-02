import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "swiper/components/scrollbar/scrollbar.less";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function SalesRevenueList() {
  return (
    <div className="sales-revenue-list">
      <div className="title">
        <span>排名</span>
        <span className="company-name">企业名称</span>
        <span className="sale-price">销售额度</span>
      </div>
      <Swiper
        loop={true}
        direction={"vertical"}
        slidesPerView={17}
        autoplay={{delay: 1000, disableOnInteraction: false}}
      >
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>1</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>2</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>2</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>2</span>
          <span className="company-name">成都亚马逊科技有限公司</span>
          <span className="sale-price">20000亿</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SalesRevenueList;
