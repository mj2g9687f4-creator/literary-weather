(function(){
  const track=document.querySelector('[data-climate-track]');
  if(track){
    const slides=[...track.querySelectorAll('.climate-slide')];
    const count=document.querySelector('[data-climate-count]');
    let index=0;
    const show=(nextIndex,direction=1)=>{
      const previous=index;
      index=(nextIndex+slides.length)%slides.length;
      slides.forEach((slide,i)=>{
        slide.classList.toggle('is-active',i===index);
        slide.classList.toggle('is-past',i===previous&&i!==index);
        slide.setAttribute('aria-hidden',i===index?'false':'true');
        slide.tabIndex=i===index?0:-1;
      });
      track.dataset.direction=direction>0?'next':'prev';
      count.textContent=`${String(index+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
    };
    slides.forEach((slide,i)=>{
      slide.setAttribute('role','button');
      slide.setAttribute('aria-label',`${slide.querySelector('h3').textContent}，点击查看下一种天气`);
      slide.addEventListener('click',()=>{if(i===index)show(index+1,1)});
      slide.addEventListener('keydown',event=>{
        if(i===index&&(event.key==='Enter'||event.key===' ')){event.preventDefault();show(index+1,1)}
      });
    });
    document.querySelector('[data-climate-prev]').addEventListener('click',()=>show(index-1,-1));
    document.querySelector('[data-climate-next]').addEventListener('click',()=>show(index+1,1));
    track.addEventListener('keydown',event=>{
      if(event.key==='ArrowRight'){event.preventDefault();show(index+1,1)}
      if(event.key==='ArrowLeft'){event.preventDefault();show(index-1,-1)}
    });
    show(0);
  }
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced||!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline({defaults:{ease:'power3.out'}}).from('.hero-copy>*',{y:30,opacity:0,duration:.8,stagger:.09}).from('.hero-polaroid',{scale:.88,opacity:0,duration:1},'-=.6');
  gsap.fromTo('.hero-polaroid',{scale:.9},{scale:1,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.from('.climate-track',{y:42,opacity:0,duration:.85,scrollTrigger:{trigger:'.climate-track',start:'top 86%'}});
  gsap.from('.method-steps li',{y:70,opacity:0,stagger:.14,scrollTrigger:{trigger:'.method-steps',start:'top 78%'}});
})();
