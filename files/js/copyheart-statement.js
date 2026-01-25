const texts = 
    [
        "is an act of love", 
        
        "is like being Flandre Scarlet's husband", 
        
        "is like being Reimu Hakurei's husband",

        "is like being Kayoko Onikata's epic husband",
        
        "is like being Marisa Kirisame's beloved husband", 
        
        "is like being Suzumi Morizuki's beloved husband", 

        "is like being a husband to two wife. Reimu Hakurei and Marisa Kirisame",

        "is like being a husband to two wife. Suzumi Morizuki and Kayoko Onikata",

        "is making Reimu Hakurei more happier than ever",

        "is making Okusora Ayane even more happier than ever, after all fusses given by her friends",

        "is when Shiroko asks Sensei to rob a bank, which Sensei said no",
        
        "is when Sensei calls Rin Nanagami, Rin-chan (or Rinny in English)",

        "is when Sensei misses his wife (President of Blue Archive, Student Council President), and said: I miss my wife",

        "is making Suzumi Morizuki and Kayoko Onikata more happier than ever",

        "is making The Academy City of Kivotos more happier than ever",

        "is making Yuuka Hayase more happier than ever",

        "is Marisa Kirisame",

        "is love that intertwines with the interest of geographics, broadcasting and the rules of the nation",

        "is acceptable in the Internet age",

        "is Alice Margatroid's way to not getting hit with the shovel",

        "is Aris Tendou's way to complete her sidequests",

        "is not theft",

        "makes the Internet more fresh",

        "is not outlawed",

        "multiplies by more",

        "is when people understands that it's actually free to copy",

        "approved",
    ];
    
    const randomIndex = Math.floor(Math.random() * texts.length);

    document.getElementById('copyheart-statement').innerHTML = texts[randomIndex];
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e) 
{e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView(
  {behavior: 'smooth'});});});