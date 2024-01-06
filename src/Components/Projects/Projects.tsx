import './projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { swiper_data } from '../../Data/swiper_data'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'

const Projects = () => {
  return (
    <div id='projects' className='container'>
      <div className='swiper_div'>
        <Swiper className="swiper_container"
        direction='horizontal'
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay, Pagination]}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        pagination={{ clickable: true }}
        >
          {
            swiper_data.map(({title, text}, index) => {
              return(
                <SwiperSlide key={index} className='slide'>
                  <div>
                    <h1 className="slide_title">
                      {title}
                    </h1>
                  </div>
                  <div>
                    <p className='slide_text'>
                      {text}
                    </p>
                  </div>
                  <div className='buttn'>
                    <a href="#" className='project_buttn'>
                      See Projects
                    </a>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Projects