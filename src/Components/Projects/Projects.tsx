import './projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { swiper_data } from '../../Data/swiper_data'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'

/*
MIT License

Copyright (c) 2024 Andrew Kushyk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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