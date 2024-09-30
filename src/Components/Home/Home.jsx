import imge from '../../assets/banner.jpg'

const Home = () => {
    return (
        <div
            className="hero container mx-auto m-6">
            <img src={imge} alt="" className=' rounded-2xl lg:w-[100%] h-[500px]'/>
            <div class="hero-overlay bg-opacity-40 rounded-2xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="lg:w-[750px]">
                    <h1 className="mb-5 lg:text-5xl text-3xl font-bold">Discover an exceptional cooking <br />class tailored for you!</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className='flex justify-center items-center gap-10'>
                    <button className="font-bold btn bg-[#0BE58A]">Explore Now</button>
                    <button className="border-2 p-2 rounded-2xl font-bold lg:text-xl">Our Feedback</button>
                    </div>
                </div>
            </div>          
        </div>
    );
};

export default Home;