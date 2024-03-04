
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
function Front() {
  return(
    <div className=" text-white " >
      <Navbar />
        <div className="md:pb-5 md:max-w-full size-full bg-center bg-scroll bg-cover pt-28 bg-[url('/src/endless-constellation.svg')]">
           <h1 className='text-center text-6xl font-bold max-sm:text-3xl'>WELCOME TO <span className='text-orange-500 font-bold'>TicketBK</span></h1>
           <p className='text-3xl mt-20 text-center'>Book Tickets Here And Enjoy Your Travel 💕</p>
           <p className='text-l mt-3 text-center'>LET'S START TO EXPLORE  👇</p>
           <center>
             <Link to='/create-ticket' type="button" class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 mt-4 h-12 w-auto">Start</Link>
           </center>
        <section className='grid gap-8 mt-4 md:grid-cols-2 rounded-lg md:items-center md:text-left p-10 bg-gray-500 m-4'>
         <div className=''>
           <img className='w-full rounded-lg h-72' src='/images/Trainplatform3.jpg' alt="train_img"></img>
         </div>
         <div>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium omnis commodi mollitia quod facilis eos sed dolores fuga. Vel, in dolor. Molestiae quidem illo facere laborum cupiditate blanditiis nisi provident.
            </p>
              <center>
                <button type="button" class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 mt-4 h-12 w-auto">Read</button>
              </center>     
         </div>
        </section>
      </div>
        <div className='bg-zinc-900 grid md:grid gap-3 md:grid-cols-5 md:p-4'>
              <div className='bg-white h-60 w-auto hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train1.jpg)"}}>
                  
              </div>
              <div className='bg-white h-60 w-auto hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train2.jpg)"}}>
                  
              </div>
              <div className='bg-white h-60 w-auto hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train3.jpg)"}}>
                  
              </div>
              <div className='bg-white h-60 w-auto hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train4.jpg)"}}>
                  
              </div>
              <div className='bg-white h-60 w-auto hover:scale-105 duration-500 bg-center bg-cover rounded-lg' style={{backgroundImage:"url(/images/Train7.jpg)"}}>
                  
              </div>
          </div>
          <Footer />
    </div>
  );
}

export default Front;