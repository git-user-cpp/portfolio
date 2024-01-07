import { Portrait } from '../../assets';
import './home.css'
import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import { Git } from '../../assets';
import { useRef } from 'react';

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

const Home = () => {
  const git_animation = useRef<LottieRefCurrentProps>(null);

  return (
    <div id='home' className='home container'>
      <div className='left'>
        <a href="https://www.instagram.com/andy_insta_art" target='_blank'>
          <img src={Portrait} alt="portrait" className='portrait' />
        </a>
      </div>
      <div className='right'>
        <div className='right_items'>
          <div className='github_button'>
            <a href="https://github.com/git-user-cpp" target='_blank'>
              <Lottie 
                lottieRef={git_animation} 
                animationData={Git} 
                className='git_anim'
              />
            </a>
          </div>
          <div className='profession'>
            junior full stack developer
          </div>
          <div className='name'>
            Andrew Kushyk
          </div>
          <div className="stack">
            C, C++, Rust, Java, SQL, Spring, JavaScript, TypeScript, React, Tailwind CSS, Python
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home