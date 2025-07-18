import react from 'react'
import { useNavigate } from 'react-router';

import image from '/star.svg'
import logo from '/star.svg'
import matrix from '/star.svg'

const Humans = () => {

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
    <div className='bg-black'>
      <nav className="navbar navbar-expand-lg d-flex">
        <div className="container-fluid">
          <img className='mx-2'id='img1' src={image}/>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='d-flex justify-content-center'>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 text-center">
              <li className="nav-item">
                <a className="nav-link text-light mx-3 fs-5" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light mx-3 fs-5" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light mx-3 fs-5" href="#">Sponsors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light mx-3 fs-5" href="#">Humans</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light mx-3 fs-5" href="#">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light mx-3 fs-5" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          </div>
          <form className="d-flex" role="search">
            <button className="btn btn-danger px-4" type="submit" onClick={handleRegisterClick}>Register</button>
          </form>
        </div>
      </nav>
        <h1 className='text-danger my-5 fw-bold fs-1 mx-5 text-center'>The Team Behind the Vibe</h1>
        <p className='msg text-light fs-5 mx-5 text-center'> Meet the students, designers, and developers turning ideas into action. Organizers, mentors, and the extended Matrix family</p>
        <div className='msg1 text-light fs-5 mx-5 text-center'> — working together to make <p className='msg11 text-danger d-inline-block'>VIBE CODE 2025</p> a reality.</div>
      <h2 className='faculty text-light opacity-75 my-5 text-decoration-underline text-center fw-bold'>Faculty Advisors</h2>
      <div className="row text-center d-flex justify-content-center mx-0 mt-5">
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
      </div> 
      <h2 className='faculty text-light opacity-75 my-5 text-decoration-underline text-center fw-bold'>Student Coordinators</h2>
      <div className="row text-center d-flex justify-content-center mx-0 mt-5">
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
      </div> 
      <h2 className='faculty text-light opacity-75 my-5 text-decoration-underline text-center fw-bold'>Volunteers</h2>
      <div className="row text-center d-flex justify-content-center mx-0 mt-5">
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Suraj Dubey,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Aaditya Patel,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Ishaan Singh,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Naman Yadav,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Sariska,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Akansha,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
      </div> 
      <h2 className='faculty text-light opacity-75 my-5 text-decoration-underline text-center fw-bold'>Domain Heads</h2>
      <div className="row text-center d-flex justify-content-center mx-0 mt-5">
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>John Smith,</div>
                  <div className='text-black'>CEO and Founder</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
      </div> 
      <h2 className='faculty text-light opacity-75 my-5 text-decoration-underline text-center fw-bold'>Website Developers</h2>
      <div className="row text-center d-flex justify-content-center mx-0 mt-5">
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Shivam Mishra,</div>
                  <div className='text-black'>Student Technical Council</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Anshika Gupta,</div>
                  <div className='text-black'>Student Technical Council</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Monal Jain,</div>
                  <div className='text-black'>Student Technical Council</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
        <div className="mb-3 w-auto">
          <div className="card rounded-5 bg-secondary opacity-75">
            <div>
              <div className="card-body d-flex justify-content-evenly">
              <img className='img2 rounded-circle mt-3' id='img2' src={logo}/>
              <div className='d-flex align-items-end flex-column text-center'>
                <div>
                  <div className="fa-solid fa-envelope text-danger fs-3 mx-2 my-2"></div>
                  <div className="fa-brands fa-linkedin text-danger fs-3"></div>
                </div>
                  <div className='text-black fw-bold mt-4'>Deepesh Gupta,</div>
                  <div className='text-black'>Student Technical Council</div>
              </div>
              </div>
            </div>
            <hr className='mx-2 bg-black'></hr>
            <p className='mx-5 text-left w-80'>Student at JEC and a member of MATRIX JEC.</p>
          </div>
        </div>
      </div> 
      <div className='d-flex justify-content-between py-5'>
        <div>
        <div className='d-flex'>
          <img className='mx-4 mt-5'id='img4' src={matrix}/>
          <div>
            <div className='text-light fw-bold fs-4 mt-5'>Building the</div>
            <div className='text-danger fw-bold fs-4'>Future together.</div>
          </div>
        </div>
        <div className='text-light fw-bold mx-4 mt-5'> &copy; Matrix JEC, All rights are reserved</div>
        </div>
        <div>
          <div className='text-light fw-bold mx-4 fs-4 text-center mt-5'>Connect with Us</div>
          <div className='d-flex fs-5 ms-5 mt-3'>
                <a href="#"><i className="fa-brands fa-x-twitter text-secondary mx-2"></i></a>
                <a href="#"><i className="fa-brands fa-instagram text-secondary mx-2"></i></a>
                <a href="#"><i className="fa-brands fa-github text-secondary mx-2"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin text-secondary mx-2"></i></a>
            </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Humans