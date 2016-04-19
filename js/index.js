function yeah() {
  
  var quotes = [ '"Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind." <br>- Dr. Seuss', '"Don’t look for society to give you permission to be yourself." <br> - Steve Maraboli', '"Tension is who you think you should be. Relaxation is who you are." <br> - Chinese Proverb', '"Whatever the mind of man can conceive and believe, it can achieve." <br>– Napoleon Hill', '"Every strike brings me closer to the next home run." <br> – Babe Ruth', '"We become what we think about." <br> – Earl Nightingale', 'The best time to plant a tree was 20 years ago. The second best time is now." <br> – Chinese Proverb', '"The mind is everything. What you think you become." <br> – Buddha', '"You can never cross the ocean until you have the courage to lose sight of the shore." <br> –   Christopher Columbus', '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."<br> – Mark Twain', '"Definiteness of purpose is the starting point of all achievement." <br>– W. Clement Stone', '" I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."<br> – Michael Jordan', '"Strive not to be a success, but rather to be of value." <br> – Albert Einstein', '"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference." <br>  – Robert Frost']
                
                
  var quotes1 = quotes[Math.floor(Math.random()*quotes.length)];
  
  document.getElementById("qu").innerHTML = quotes1;
  


  var quotes2 = 'https://twitter.com/intent/tweet?text=' + quotes1 + ' @_drewpiper ';


  $(".twitter-share-button").attr("href", quotes2);
};

