import Lottie from 'lottie-react'
import { Footer } from '../../Layout'
import { Check, Contacts } from '../../assets'
import './contact.css'

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

const Contact = () => {
  return (
    <div id='contact' className='container'>
      <div className='contact'>
        <div className='all_options'>
          <div className='contact_anim'>
            <Lottie animationData={Contacts} className='c_anim' />
          </div>
          <div className='contact_description'>
            <h1>
              Andrew Kushyk
            </h1>
            <div className='contact_links'>
              <a href="https://linktr.ee/tech_certificates_andy_kushyk" target='_blank'>
                <Lottie animationData={Check} className='cont_shield'/><p>Tech Certificates</p>
              </a>
              <a href="https://linktr.ee/en_certificates_andy_kushyk" target='_blank'>
                <Lottie animationData={Check} className='cont_shield'/><p>English Certificates</p>
              </a>
            </div>
          </div>
        </div>
        <div className='footer_contact'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Contact