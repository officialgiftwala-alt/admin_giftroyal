document.addEventListener("DOMContentLoaded",function(){
  const sb=document.getElementById("sidebar");
  if(sb){
    const path=location.pathname.split("/").pop().toLowerCase();
    sb.innerHTML=`<div class="logo">
      <svg height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
     <circle style="fill:#FFC61B;" cx="256" cy="256" r="256"/>
     <path style="fill:#EAA22F;" d="M294.996,509.049c105.746-16.162,190.195-97.028,211.687-200.923l-110.485-112.63l-11.102,12.448
	l-99.711-98.695l-86.776,137.052l-47.94-47.937l-31.799,16.649l81.846,82.198l-64.445,53.646L294.996,509.049z"/>
    <path style="fill:#06776A;" d="M368.635,256c0-3.798-0.19-7.551-0.56-11.252c-0.498-4.994,1.431-9.923,5.277-13.148l19.778-16.586
	c5.585-4.684,7.001-12.705,3.356-19.018l-18.279-31.658c-3.646-6.313-11.298-9.097-18.148-6.603l-24.254,8.835
	c-4.722,1.72-9.961,0.922-14.039-2.015c-6.072-4.375-12.597-8.159-19.49-11.271c-4.57-2.064-7.866-6.197-8.737-11.136l-4.47-25.398
	c-1.264-7.18-7.501-12.416-14.793-12.416h-36.555c-7.29,0-13.527,5.235-14.793,12.416l-4.47,25.398
	c-0.869,4.939-4.165,9.073-8.737,11.136c-6.894,3.112-13.419,6.896-19.49,11.271c-4.077,2.938-9.316,3.736-14.039,2.015
	l-24.254-8.835c-6.851-2.496-14.503,0.288-18.148,6.603l-18.279,31.658c-3.646,6.313-2.231,14.334,3.356,19.018l19.778,16.586
	c3.846,3.225,5.775,8.152,5.277,13.148c-0.369,3.701-0.56,7.454-0.56,11.252c0,3.825,0.193,7.606,0.567,11.331
	c0.503,5.008-1.434,9.947-5.298,13.174l-19.732,16.484c-5.603,4.68-7.028,12.714-3.379,19.037l18.254,31.616
	c3.651,6.323,11.319,9.106,18.175,6.592l24.142-8.847c4.732-1.734,9.987-0.938,14.074,2.012c6.111,4.41,12.681,8.223,19.625,11.35
	c4.584,2.065,7.887,6.215,8.749,11.167l4.405,25.305c1.252,7.194,7.496,12.443,14.796,12.443h36.507
	c7.301,0,13.545-5.251,14.796-12.443l4.405-25.305c0.862-4.953,4.165-9.102,8.749-11.167c6.946-3.129,13.515-6.94,19.625-11.35
	c4.086-2.95,9.342-3.746,14.074-2.012l24.142,8.847c6.856,2.512,14.524-0.269,18.175-6.592l18.254-31.616
	c3.651-6.323,2.226-14.355-3.379-19.037l-19.732-16.484c-3.862-3.227-5.799-8.166-5.298-13.174
	C368.442,263.606,368.635,259.825,368.635,256z"/>
    <path style="fill:#CCD1D0;" d="M237.096,407.666h37.81c8.447,0,15.294-6.847,15.294-15.294v-75.186c0-1.203-0.976-2.181-2.181-2.181
	h-64.038c-1.203,0-2.181,0.976-2.181,2.181v75.186C221.801,400.818,228.649,407.666,237.096,407.666z"/>
    <path style="fill:#F5F5F5;" d="M290.637,183.637v68.532l-34.944,13.712l-34.942-13.712v-68.218
	c-24.51,12.75-41.262,38.362-41.262,67.901c0,42.256,34.256,76.51,76.51,76.51c42.256,0,76.51-34.256,76.51-76.51
	C332.51,222.068,315.48,196.277,290.637,183.637z"/>
    </svg>
      <span>Admin Dashboard</span>
    </div>
    <nav class="nav">
      <a href="index.html" ${path==="index.html"?'class="active"':''}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 4h16v12H6l-2 4z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span>Requests</span>
      </a>
      <a href="code.html" ${path==="code.html"?'class="active"':''}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <span>Codes</span>
      </a>
      <a href="products.html" ${path==="products.html"?'class="active"':''}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M3 7h18v10H3zM7 7V4h10v3" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span>Products</span>
      </a>
      <a href="slider.html" ${path==="slider.html"?'class="active"':''}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h7" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span>Slider</span>
      </a>
      <a href="task.html" ${path==="task.html"?'class="active"':''}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 4h16v14H4zM8 8h8M8 12h6" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span>Tasks</span>
      </a>
      <a href="users.html" ${path==="users.html"?'class="active"':''}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 8a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span>Users</span>
      </a>
      <a href="videos.html" ${path==="videos.html"?'class="active"':''}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 6h12v12H4zM16 10l4-2v8l-4-2" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span>Videos</span>
      </a>
      <a href="withdraw.html" ${path==="withdraw.html"?'class="active"':''}>
        <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <span>Withdraw</span>
      </a><a href="extra.html" ${path==="extra.html"?'class="active"':''}>
        <svg enable-background="new 0 0 48 48" height="18" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="18" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_3"><polygon fill="#241F20" points="48,19.612 28.389,19.612 28.389,0.005 19.672,0.005 19.672,19.612 0.06,19.612 0.06,28.328    19.672,28.328 19.672,47.936 28.389,47.936 28.389,28.328 48,28.328  "/></g></svg>
        <span>Withdraw</span>
      </a>
    </nav>`;
  }
  const toggle=document.getElementById("menuToggle");
  if(toggle&&sb){
    toggle.addEventListener("click",()=>{sb.classList.toggle("open")});
  }
  document.addEventListener("click",e=>{
    if(window.matchMedia("(max-width: 960px)").matches){
      const insideSidebar=e.target.closest("#sidebar");
      const isToggle=e.target.closest("#menuToggle");
      if(!insideSidebar&&!isToggle){sb.classList.remove("open")}
    }
  });
});
