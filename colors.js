h1=document.querySelector('h1')
function colorchange(color1,delay,nextfun){
  setTimeout(()=>{
  h1.style.color=color1;
  if (nextfun)nextfun();
},delay);
}

colorchange("blue",1000,()=>{
  colorchange("green",1000)
})