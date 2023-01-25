const jokes=document.getElementById("jokes");
const jokebtn=document.getElementById("btn");
const generateJokes = async () =>
{
try{
const setHeader = 
{
    headers:
    {
        Accept : "application/json"
    }
}
    const res= await fetch('https://icanhazdadjoke.com/', setHeader);
    const data=await res.json();
    jokes.innerHTML=data.joke;
}
catch(err)
{

}
}
jokebtn.addEventListener('click',generateJokes);
generateJokes();