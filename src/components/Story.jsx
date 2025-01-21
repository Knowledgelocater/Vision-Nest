import React, {useRef} from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorner from './RoundedCorner'
import Button from './Button'

const Story = () => {
    const frameRef = useRef('null')
    const handleMouseLeave = ()=>{
        const elements = frameRef.current;
        gsap.to(elements, {
            duration: 0.3,
            rotateX : 0,
            rotateY : 0,
            ease: "power1.inOut",
          });
    }
    const handleMouseMove = (e)=>{
        const {clientX , clientY} = e
        const elements = frameRef.current;
        if(!elements) return;
        const rect = elements.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y-centerY) / centerY) * -10;
        const rotateY = ((x-centerX) / centerX) * 10;

        gsap.to(elements, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective:500,
            ease: "power1.inOut",
          });
        
    }

  return (
    <section id ="story" className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>Our Objective</p>
            <div className='relative size-full'>
                <AnimatedTitle 
                    title="Focused on the future of work"
                    sectioId="#story"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10" 
                />
                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img
                                ref={frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                src='/img/Goal.jpg'
                                alt='Goal'
                                className='object-contain'
                            />
                        </div>
                    </div>
                    <RoundedCorner/>
                </div>
            </div>
            
            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                <div className="flex h-full w-fit flex-col items-center md:items-start">
                <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                    Achieve your goals with our innovative solutions that are designed to streamline your workflow and enhance productivity. Our team is dedicated to providing you with the tools and support you need to succeed in the ever-evolving landscape of modern work.
                </p>
                <Button
                    id="realm-btn"
                    title="Schedule Your Meet"
                    containerClass="mt-5"
                />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Story