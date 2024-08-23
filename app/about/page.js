import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col justify-center gap-4 '>
            <div className='text-center mx-6 my-8'>
                <h1 className='md:text-3xl text-2xl font-bold m-5'>About Get me a Chai</h1>
                <h3 className='font-bold my-5 md:text-base text-sm'>"Fueling Creativity, One Cup at a Time"</h3>
                <p className='md:font-semibold md:text-base text-sm'> Get Me A Chai is a Crowdfunding platform designed for creators to fund their projects with support of their fans. It's a space where your fans can directly contribute to your creative endeavour by buying you a Chai. Unlock the potential of your fanbase and bring your projects to life.</p>
            </div>
            <div className='border border-slate-500 opacity-50'></div>
            <div className='lg:flex lg:flex-row lg:justify-around gap-3 mx-6 my-8'>
                <div className='flex items-center justify-center w-3/4 lg:w-1/2'>
                    <div className='w-24'>
                    <span><img src="/fans.gif" alt="fans" /></span>
                    </div>
                    <div>
                        <h2 className='md:text-xl font-bold my-2'>Fans Want to Collaborate </h2>
                        <p className='text-sm md:text-base'>Your fans are enthusiastic about collaborating with you on your projects. </p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-5 lg:m-0'>
                    <div className='w-32'>
                    <span> <img src="coin.gif" alt="coin" /></span>
                    </div>
                    <div>
                        <h2 className='md:text-xl font-bold my-2'>Support Through Chai  </h2>
                        <p>Recieve support from your fans in the form of Chai purchases directly contributing to your project funding. </p>
                    </div>
                </div>
            </div>
            <div className='border border-slate-500 opacity-50'></div>
            <div className='flex justify-around mx-6 my-8 lg:flex-row flex-col gap-5'>
                <div>
                    <h2 className='text-xl font-bold my-2'>Benefits for Creators</h2>
                    <ul className='list-decimal'>
                        <li>Direct financial support from your fanbase. </li>
                        <li>Engage with your fans on a more personal level.</li>
                        <li>Access to a paltform tailored for creative projects.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold my-2'>Benefits for Fans</h2>
                    <ul className='list-decimal'>
                        <li>Directly contribute to the success of your favourite creators. </li>
                        <li>Exclusive rewards and perks for supporting creators.</li>
                        <li>Be part of the creative process and connect with creators .</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold my-2'>Benefits of Collaboration</h2>
                    <ul className='list-decimal'>
                        <li>Unlock new opportunities through collaboration with fellow creators. </li>
                        <li>Expand your network and reach a wider audience.</li>
                        <li>Combine skills and resources to create innovative projects.</li>
                    </ul>
                </div>
            </div>
            <div className='border border-slate-500 opacity-50'></div>
            <div className='flex flex-col gap-8 m-7'>
                <div className='lg:flex lg:items-center lg:justify-around flex flex-col gap-5'>
                    <div>
                        <h2 className='text-xl font-bold my-2'>Community Engagement</h2>
                        <ul className='list-decimal'>
                            <li>Interact with a supportive community of like-minded individuals. </li>
                            <li>Recieve valuable feedback and encouragement from peers.</li>
                            <li>Participate in discussions and events centered around your interests.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold my-2'>Access to Resources</h2>
                        <ul className='list-decimal'>
                            <li>Gain access to resources such as tutorials, tempelates and tools. </li>
                            <li>Recieve Guidance and mentorship from experienced creators.</li>
                            <li>Stay Updated on industry trends and best practices.</li>
                        </ul>
                    </div>
                </div>
                <div className='lg:flex lg:items-center lg:justify-around flex flex-col gap-5'>
                    <div>
                        <h2 className='text-xl font-bold my-2'>Recognition and Exposure</h2>
                        <ul className='list-decimal'>
                            <li>Showcase your work to a global audience and gain recognition. </li>
                            <li>Feature in promotional materials and campaigns.</li>
                            <li>Build your portfolio and increase your credibility as a creator.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold my-2'>Supportive Community</h2>
                        <ul className='list-decimal'>
                            <li>Join a community that values creativity, diversity, and inclusivity </li>
                            <li>Gain encouragement and inspiration from fellow members</li>
                            <li>Collaborate on projects and share resources for mutual growth</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default About

export const metadata = {
    title: 'About - Get Me A Chai',
  }