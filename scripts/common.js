// Store constants
const slogan = "we make ";
const keywords = ["homepages", "portfolios", "landing pages", "the web."];
const sloganHolder = document.querySelector("#slogan");
const keywordHolder = document.querySelector("#keyword");

// Load assets
$("#logo").load("/assets/icons/graphide-logo.svg");

// Animate slogan
setTimeout(function ()
{
    write(slogan, sloganHolder);
}, 2500);

setTimeout(function ()
{
    keywords.forEach(function (item, index)
    {
        setTimeout(function ()
        {
            write(item, keywordHolder);
            if (index !== keywords.length - 1) setTimeout(function ()
            {
                erase(keywordHolder);
            }, 2000);
        }, index * 4000);
    });
}, 3700);

// Functions
function write(word, holder)
{
    let iteration = holder.innerHTML.length;
    holder.innerHTML = word.substr(0, iteration + 1);
    if (++iteration < word.length) setTimeout(function ()
    {
        write(word, holder);
    }, 100);
}

function erase(holder)
{
    holder.innerHTML = holder.innerHTML.substr(0, holder.innerHTML.length - 1);
    if (holder.innerHTML.length > 0) setTimeout(function ()
    {
        erase(holder);
    }, 100);
}