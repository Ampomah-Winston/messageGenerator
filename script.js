
const messageGenerator = {
     _messageArray :[
        {
            title: 'A TO A+', 
            message:'The definition of a perfectionist: someone who wants to go from point A to point A+. —David Bez'
        },{
            title: 'FREE MAPS', 
            message:'Traveling through the Midwest, I stopped at an Ohio welcome center to pick up a state map. I found plenty of brochures but no maps. Then I spotted two employees and asked whether they had any. “Sure,” said the first guy. “I’ll get you one.” As he walked to the back, the second guy explained, “We keep them in the storage room. If we leave them out on the counter, people just come in and take them.” —James Nealis'
        },
        {
            title:'OVERHEARD AT THE HEALTH CLUB',
            message:`Things I overheard at my health club:
            “I’m only taking this class so I don’t eat for an hour.”
            “Who knew 40 years of neglect would have repercussions?”
            “Does this body make me look fat?” —Mark Garvey`},
        {
            title:'MADE OF COPPER',
            message:`When my local barista handed me my change, one coin stood out. “Look at that. You rarely get one of these old wheat pennies nowadays,” I said, tapping the sheaf of-wheat design. I handed her the penny. Turning it over and over in her hand, she said, “You know, I always thought they were made of copper.” —Linda Neukrug`},
        {
            title:'STEPS FOR MOMMY',
            message:`One of my wife’s third graders was wearing a Fitbit watch, which prompted my wife to ask, “Are you tracking your steps?” “No,” said the little girl. “I wear this for Mommy so she can show Daddy when he gets home.” —James Avery`
        },
        {
            title:'AT THE DOLLAR STORE',
            message:`During a job interview at the 99 Cents store, my son was asked, “Where do you see yourself in five years?” My son’s reply: “At the Dollar Store.” He got the job. —A.K. via rd.com`
        },
        {
            title:'STOLEN CALENDAR',
            message:`Two guys stole a calendar. They got six months each. —Submitted by Alex Del Bene`
        },
        {
            title:'LIBRARIAN BE A BOOKKEEPER',
            message:`Could a ... ... librarian be called a bookkeeper? ... referee be a game warden? ... dairyman be a cowboy? ... cabinetmaker be the president? —Submitted by J. Lee`
        },
        {
            title:'ANSWERS ON MY HAND',
            message:`Since the coronavirus outbreak, my 47-year-old son has been washing his hands religiously. In fact, he said, “I’ve been washing my hands so much, I found the answers to an old eighth-grade math quiz.” —Susan Freeman`
        },
        {
            title:'SECOND TO ADMIT',
            message:`“I make mistakes; I’ll be the second to admit it.” —Jean Kerr, author`
        },
        {
            title:'A DEAD MAN’S CREDIT',
            message:`I tried having my mother’s phone disconnected, but the customer-service rep told me that since the account was in my dad’s name, he’d have to be the one to put in the request. The fact that he’d been dead for 40 years didn’t sway her. Then a solution hit me: “If I stop paying the bill, you can turn off the service, right?” “Well, yes,” she said reluctantly. “But that would ruin his credit.” —Jeannie Gibbs`
        },
        {
            title:'PLEATS WILL COME BACK',
            message:`I loved the dress that I bought at a flea market. It fit perfectly, and the skirt was a swirl of intricate pleats. I wore it confidently to an evening party and glowed when a woman exclaimed, “Oh, how stunning!” Yes, I was grinning from ear to ear, until she added cheerfully, “Hang on to it, honey. Pleats will come back someday.” —Mary Lou Wickham`
        },
        {
            title:'SHOOT AROUND IT',
            message:`Dad always bragged about the gunners on his ship. Once during target practice, an unmanned drone flew past an antiaircraft cruiser. The cruiser opened up, shells furiously flying all around the drone but not hitting it. Then came Dad’s ship’s turn. The gunners’ very first shot sent the drone into the water! Forty years later, Dad met the man responsible, and he told him how impressed he had been. “Yeah, I got in a lot of trouble for that,” the gunner said. “Turns out we were supposed to shoot around it, not hit it.” —Patrick McSherry`
        },
        {
            title:'PLENTY OF TIME IN THE ARMY',
            message:`During World War II, my father often found himself stuck with KP duty. One day, convinced he could improve things, he told the head cook, “If you give me a paring knife, I could peel these potatoes faster.” The cook turned slowly to my father and said, “Son, you’re in the Army. You have plenty of time.” —Jack Girard`
        },
        {
            title:'NO ONE THINKS YOU’RE FUNNY',
            message:`What I remember most about my dad’s jokes is my mother’s reaction. While everyone else was howling at one of his punch lines, my mom would always respond, “Bernard, no one thinks you’re funny.” —Nedra Cawley`
        },
        {
            title:'LEGS ON THE TABLE',
            message:`My dad used to sing little ditties. This was my favorite: There was a young lady named Mabel. She danced on the dining room table. Her face grew red, When the gentleman said ... “Look at the legs on that table!” —Clo Dodge`
        },
        {
            title:'IT LEFT ITS TRACKS',
            message:`Here's my favorite dad joke, with me as the dad: Every Sunday on the way to church, we would have to stop at a railroad crossing. And each time, I’d tell my 12-year-old daughter, “A train just went by. Know how I can tell? It left its tracks.” I got a moan the first couple of Sundays. After a while, every time we’d pull up to the crossing, all I had to do was look in the rearview mirror and she would smile. My daughter is now a college graduate and lives out of state, but every time I cross those tracks, I think of her. —Mike Vanloo`
        }
    ],
    getRandomMessage(array){
        return array[Math.floor(Math.random()*(array.length-1))]
    },
    displayMessage(){
        console.log(this.getRandomMessage(this._messageArray))
    }
}

messageGenerator.displayMessage();