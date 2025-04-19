import './App.css'
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom'

function Header () {
  return <header><h1>React Router</h1></header>
}

function Nav () {
  return <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li> <Link to="/contact">Contact</Link></li>
           </ul>
        </nav>
}

function Footer () {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  return <footer><h2 className='footer-head'>&copy;{year} All Rights Reserved</h2></footer>
}

function Home () {
  return <section>
    <h2>Home Page</h2>
    <p>This is a very simple React Based SPA with a 404 Page</p>
  </section>
}

function About () {
  return <section>
    <h2>About Us</h2>
    <table border="1">
  <thead>
    <tr>
      <th>Company</th>
      <th>Industry</th>
      <th>Location</th>
      <th>Founded</th>
      <th>Tagline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AlphaTech</td>
      <td>App Development</td>
      <td>Indonesia</td>
      <td>2015</td>
      <td>Innovate with ease</td>
    </tr>
    <tr>
      <td>CodeBridge</td>
      <td>Software Solutions</td>
      <td>Kenya</td>
      <td>2012</td>
      <td>Connecting ideas</td>
    </tr>
    <tr>
      <td>WebNest</td>
      <td>Web Development</td>
      <td>USA</td>
      <td>2018</td>
      <td>Your digital home</td>
    </tr>
    <tr>
      <td>BrightBuzz</td>
      <td>Digital Marketing</td>
      <td>UK</td>
      <td>2010</td>
      <td>Shine online</td>
    </tr>
    <tr>
      <td>SkyNetix</td>
      <td>Cloud Services</td>
      <td>Germany</td>
      <td>2016</td>
      <td>Above and beyond</td>
    </tr>
  </tbody>
</table>

  </section>
}

function Service () {
  return <section>
    <h2>Our Services</h2>
    <p>
      At TechNova Solutions, we offer a wide range of services tailored to meet the unique needs of businesses in the digital age. Our team is dedicated to delivering innovative, scalable, and user-focused solutions that drive results. Whether you're a startup or an enterprise, we're here to help you grow and succeed through technology.
    </p>

    <ul>
      <li>Custom Web Application Development</li>
      <li>Mobile App Design & Development</li>
      <li>Cloud Infrastructure Setup</li>
      <li>Search Engine Optimization (SEO)</li>
      <li>UI/UX Design Services</li>
      <li>E-commerce Platform Integration</li>
      <li>Technical Consulting & IT Support</li>
    </ul>

  </section>
}

function Contact () {
  return <section>
  <h2>Contact Us</h2>
  <form action="#" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required/>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Send</button>
  </form>
</section>

   
}

function NotFound(){
  return <section>
    <h2>404 Page Not Found</h2>
    <p>Sorry the page you are looking for does not exist</p>
  </section>
}


function Router() {
  

  return (
    <>
     
    <BrowserRouter>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  


    </>
  )
}

export default Router

