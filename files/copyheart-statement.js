/* Written on 5th November 2024, 2142 UTC +8. On election day of Kamala Harris (Democrat), Donald J. Trump (Republican), Jill Stein (Green Party, Independent) and other candidates. Let's see who got more casts.*/

const texts = 
    [
        "an act of love", 
        
        "like being Flandre Scarlet's husband", 
        
        "like being Reimu Hakurei's husband", 
        
        "like being Marisa Kirisame's beloved husband", 
        
        "like being a husband to two wife. Reimu Hakurei and Marisa Kirisame",

        "making Reimu Hakurei more happier than ever",

        "Marisa Kirisame",

        "the hard way that Alice will take",

        "a love that intertwines with the interest of geographics and the rules of the nation",

        "acceptable in the Internet age",

        "Alice Margatroid's way to not getting hit with the shovel",

        "not theft",

        "making the Internet more fresh",

        "not outlawed."

        
    ];
    
    const randomIndex = Math.floor(Math.random() * texts.length);

    document.getElementById('copyheart-statement').innerText = texts[randomIndex];
    