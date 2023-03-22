import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import ArrowButton from '/public/arrow-button.webp'
import Instagram from '/public/instagram.webp'
import Facebook from '/public/facebook.webp'
import LinkedIn from '/public/linkedin.webp'
import Twitter from '/public/Twitter.webp'
import Blog_1_1 from '/public/blog-1-1.jpeg'
import Blog_1_2 from '/public/blog-1-2.webp'
import Blog_1_3 from '/public/blog-1-3.webp'



export default function BlogCover1() {
  return (
        <div id='home' className=' background-blog grid place-content-start pb-[5em]'>
            <Nav></Nav>
            <div className='grid relative place-content-center place-self-center w-[100%] grid-flow-row lg:grid-flow-col lg:justify-center lg:px-[5em] mt-[10em] mb-[5em] lg:gap-x-[2em]'>
                <div className='text-center lg:text-left lg:block grid place-content-center place-self-center'>
                    <h1 className='font-extrabold lg:text-[2.5em] text-[3em] leading-tight text-blue place-self-center'>The<br></br>Inspiration behind<br></br>the Neoverse</h1>
                    <p className='lg:w-[28em] w-[25em] leading-[1.8em] mt-[0em] text-blue font-normal lg:text-sm text-sm lg:place-self-start place-self-center'><strong>Shubkarman</strong>  ----- January 8, 2023</p>
                    <div className='grid grid-flow-col h-[3em] w-[auto] ml-0 lg:mt-[2em] mt-[1em] p-0 place-content-center lg:place-content-start'>
                        <div className=' w-[2.3em] ml-[-0.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.instagram.com/neolen_services/' target="_blank" rel="noreferrer"><Image src={Instagram} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://twitter.com/neolen_services' target="_blank" rel="noreferrer"><Image  src={Twitter} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] mr-[1.5em] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.facebook.com/Neolenofficial/' target="_blank" rel="noreferrer"><Image src={Facebook} alt="img"></Image></a></div>
                        <div className=' w-[2.3em] lg:mr-[1.5em] mr-[0] pl-0 cursor-pointer ease-in-out duration-500 hover:translate-y-[-0.5em]'><a href='https://www.linkedin.com/company/neolen/' target="_blank" rel="noreferrer"><Image src={LinkedIn} alt="img"></Image></a></div>
                    </div>
                </div>
            
                <div className=' place-self-center lg:w-[40em] w-[20em] lg:h-[auto] h-[auto] grid place-content-center bg-[#ffffff94] rounded-xl p-[2em]'>
                    
                    <Image src={Blog_1_3}  alt="img"></Image>

                </div>
            </div>

            <div className='grid place-content-center bg-white lg:mx-[10em] mx-[1em] px-[1em] bg-[#ffffff94] lg:px-[20em] py-[3em] rounded-md'>

                <p className='text-base my-[1em]'>
                A place of wonder, magic and power, the Neoverse is a completely different world, god, dwarves, trolls, and elves all coexist peacefully in these lands…or do they? Long ago, In the distant past, the gods and their offspring engaged in an endless battle for control of the universe and the right to be regarded as the one true deity.
                <br></br>
                <br></br>
                All the gods had fought and destroyed each other, putting an end to the protracted horrific conflict and leaving the sky, the sea, the land, and the stars without a ruler.
                </p>
                <div className=' place-self-center my-[1em] lg:w-[100%] w-[100%] lg:h-[auto] h-[auto] grid place-content-center bg-[#ffffff94] rounded-xl p-[2em]'>
                    <Image src={Blog_1_1} alt="img"></Image>
                </div>
                <p className='opacity-70 text-sm mb-[1em] text-left'>In-game still of the Neoverse</p>
                <p className='text-base my-[1em]'>
                One god, known as the “God of Games,” who had not taken part in the conflict, was declared the winner by default. The Neoverse thereafter began to exist under the rules and command of the one true god, the “God of Games”.
                <br></br>
                <br></br>
                In the Neoverse, the Five Pledges spell forbids the citizens from harming one another, forcing people to settle disputes by staking their money on games with magically enforced rules and rewards.
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                The races in the game
                </h2>

                <div className=' place-self-center my-[1em] lg:w-[100%] w-[100%] lg:h-[auto] h-[auto] grid place-content-center bg-[#ffffff94] rounded-xl p-[2em]'>
                    <Image alt="img" src={Blog_1_2}></Image>
                </div>
                <p className='opacity-70 text-sm mb-[1em] text-left'>Choose your own Avatars.</p>
                <p className='text-base my-[1em]'>
                You can create your own avatars in the Neoverse and challenge everyone to uphold its unbending laws.
                <br></br>
                <br></br>
                You can select a human, elf, dwarf, treant, hobgoblin, or troll as your avatar for this voyage through the Neoverse when creating your character.
                <br></br>
                <br></br>
                Every race planet includes guilds that aid players in honing their abilities and locating or generating challenges. Every player in Neoverse is there to become the best player in the world, defeat the finest players, and rule the kingdoms of this universe.
                <br></br>
                <br></br>
                Neoverse is the future of strategy-based gaming where you can use your gaming and strategy-forming skills to have fun and earn.
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                The spell of the five pledges
                </h2>

                <p className='text-base my-[1em]'>
                This spell governs all citizens and places the guidelines that need to be followed during any challenges.
                <br></br><br></br>
                &emsp;1. All conflict is to be resolved through games
                <br></br><br></br>
                Every event in the Neoverse will be decided by a game chosen by both sides, from settling a little everyday argument to choosing the monarch of the realm.Every and all arguments will be handled by both parties playing a game to decide the victor.
                <br></br><br></br>
                &emsp;2. Each party will have to stake an asset of equal value
                <br></br><br></br>
                Both parties in any Neoverse challenge should agree that the assets wagered in the challenge are of about equal value. The challenge will only be accepted after that.These assets can be in the form of Coins, Tokens, NFTs or any other digital assets on the internet.The challenge will be allowed to proceed as long as both participants concur that they are satisfied with the asset the other player has placed up for stake.
                <br></br><br></br>
                &emsp;3. The Challenged party has the right to decide the rules of the games
                <br></br><br></br>
                The party being challenged has the right to determine the rules that will govern the game. Neoverse contains a variety of games, so when a player is challenged to one of them, they have the option of selecting the rules for that game. For example, they can choose a different variation of chess when the other party challenges them to a game of the same.
                
                <br></br><br></br>
                &emsp;4. Any bet made in accordance with the pledges must be upheld
                <br></br><br></br>

                Neoverse uses Blockchain technology to secure any claim that needs to be kept. Every challenge in Neoverse will be a Game Smart Contract, which guarantees ownership, security, and transparency. The winner will receive ownership of the assets used in the challenge thanks to Neoverse blockchain technology. The public blockchain will record game inputs so that anybody may verify the outcome.
                <br></br><br></br>
                &emsp;5. Conflict between two groups will be taken care of by the chosen representatives.
                <br></br><br></br>
                Every group in the Neoverse will elect a leader who will be in charge of all of the organization’s resources. Any group leader will have ownership access to all of the group’s resources. Any assets cannot be wagered in the challenge or transferred to accounts without the leader’s approval.The squad can select its own captains and the players who will represent it in a challenge against another team.
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                Levelling up in the Neoverse
                </h2>
                <div className=' place-self-center my-[1em] lg:w-[100%] w-[100%] lg:h-[auto] h-[auto] grid place-content-center bg-[#ffffff94] rounded-xl p-[2em]'>
                    <Image alt="img" src={Blog_1_3}></Image>
                </div>
                <p className='opacity-70 text-sm mb-[1em] text-left'>The strategy game-based Metaverse.</p>
                <p className='text-base my-[1em]'>
                Neoverse is a special metaverse since it allows users to make their own games within the setting; as a result, the games available are not restricted to those that the developers have produced.
                <br></br><br></br>
                These games can be played between any two parties, and the winner receives the “spoils of war” that have been wagered on the contest, provided the challenges are in accordance with the five pledges.
                <br></br><br></br>
                Neoverse will greatly encourage levelling because it has benefits that can make a player the ruler of the world.
                <br></br><br></br>
                Ranking battles are weekly competitions that pit all players against one another.The winner of these ranking tournaments will be proclaimed the world’s king or queen and will be authorised to use their influence to extract a certain tax from each player in the Neoverse.
                </p>

                <h2 className='my-[1em] text-2xl font-semibold'>
                Conclusion
                </h2>
                <p className='text-base my-[1em]'>
                Through a variety of games where each participant stakes some assets, Neoverse users can compete against one another. If the five pledges are followed, the challenge’s outcome will be enforced, and the winner will receive the assets that the losing player had staked.
                <br></br><br></br>
                In this metaverse, levelling up is crucial because the player who rises to the top will be crowned the land’s ruler and be eligible to benefit from the king’s position.
                </p>


            </div>
        </div>
  )
}