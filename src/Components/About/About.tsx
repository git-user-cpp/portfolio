import './about.css'

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

const About = () => {
  return (
    <div id='about' className='container'>
      <div className='about'>
        <div className='experience_left'>
          <p className='years'>
            5
          </p>
          <p className='text_under'>
            Years<br/>Experience<br/>Working
          </p>
        </div>
        <div className='experience_right'>
          <p className='text_exp'>
            Great Experience
          </p>
          <p className='description'>
            since 2019 to the present day, I am closely involved in <br/> web development
          </p>
          <p className='services'>
            Ads
          </p>
          <p className='services'>
            Ads
          </p>
          <p className='services'>
            Ads
          </p>
          <p className='services'>
            Ads
          </p>
        </div>
      </div>
    </div>
  )
}

export default About