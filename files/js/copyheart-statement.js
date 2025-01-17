const texts = 
    [
        "is an act of love", 
        
        "is like being Flandre Scarlet's husband", 
        
        "is like being Reimu Hakurei's husband", 
        
        "is like being Marisa Kirisame's beloved husband", 
        
        "is like being a husband to two wife. Reimu Hakurei and Marisa Kirisame",

        "is making Reimu Hakurei more happier than ever",

        "is Marisa Kirisame",

        "is the hard way that Alice will take",

        "is love that intertwines with the interest of geographics, broadcasting and the rules of the nation",

        "is acceptable in the Internet age",

        "is Alice Margatroid's way to not getting hit with the shovel",

        "is not theft",

        "makes the Internet more fresh",

        "is not outlawed",

        "multiplies by more",

        "approved",
    ];
    
    const randomIndex = Math.floor(Math.random() * texts.length);

    document.getElementById('copyheart-statement').innerText = texts[randomIndex];