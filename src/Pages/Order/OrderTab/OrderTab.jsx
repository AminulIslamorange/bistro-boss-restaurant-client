
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div >
    
    
     <Swiper
     pagination={pagination}
     modules={[Pagination]}
     className="mySwiper"
   >
     <SwiperSlide> <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>{
    items.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
    }</div> </SwiperSlide>
     
   </Swiper>
   </div>
    );
};

export default OrderTab;