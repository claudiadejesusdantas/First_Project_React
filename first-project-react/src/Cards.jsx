import Card from "./Card"

function Cards(){
    return(
        <section>
            <Card 
                title="Git & Github" 
                paragraph="I started my tech journey by learning about Git, whinch is a code versioning system, where I can share my code, track changes and roll back them, alone or in a group. The platform I used upload my projects and push my git was Github. " 
                link="https://media1.giphy.com/media/l0K4nxdKgRzEZu47u/giphy.gif?cid=ecf05e4728hlcmwssf9jusfqxkjjvs09mkhjcpvjwkpurl6c&rid=giphy.gif&ct=g" 
                alt="a mushroom, a flower and a star being exchanged for their parts."/ >

            <Card 
                title="CSS" 
                paragraph="CSS(Cascading Style Sheets) is a style language, used to style pages. Some very important tools to learn were display grid and display flex, for positioning elements on screen. In addition to working with @media query, for mobile responsiveness." 
                link="https://media4.giphy.com/media/12QMzVeF4QsqTC/giphy.gif?cid=ecf05e47fdqqz9o14lc8sqhd3nkr65bsysm25nt7yrxktgo1&rid=giphy.gif&ct=g" 
                alt="video game Mario changing clothes."/ >

            <Card 
                title="HTML" 
                paragraph="HTML(Hypertext Markup Language) is the structure of the website, the building blocks of a house. When building a website, you need to know tags, which are placed between < and >, these tags have children, values and attributes. When opening a tag it is important to remember its closing, some like img or hr do not have closing. The minimal structure of an html document needs the DOCTYPE which shows the version of html used, the head which contains the metadata and the body which has the visible body of the site to the user." 
                link="https://media4.giphy.com/media/XIhPIFwsPxljcGRC5d/giphy.gif?cid=ecf05e474434eifrc2ptu2w6ofyj77ityy2dl0qv456nzb23&rid=giphy.gif&ct=g" 
                alt="Video game Mario kicking a tortoiseshell at the yellow walls."/ >

            <Card 
                title="Javascript" 
                paragraph="Javascript is a programming language, which along with HTML and CSS, makes up the main triad for web development. It is responsible for the dynamism of the pages, accepted in all the main web browsers, used for both front-end and back-end, with node.js environment." 
                link="https://media0.giphy.com/media/pLTkbqoB7TkQ0/giphy.gif?cid=ecf05e47nfb8wwlbgoyo1ug3i1gzzdfxf21wicx8otwesfei&rid=giphy.gif&ct=g" 
                alt="scene from Mario's game where he hits the monster and runs away."/ >

            <Card 
                title="Scrum" 
                paragraph="Scrum is a set of best practices used in the management of complex projects, focused on team members, Scrum makes processes simpler, as it keeps visible records of the progress of all steps. Agile methodology is the new way for teams to work in software development." 
                link="https://media1.giphy.com/media/BqijAlej4RV7O/giphy.gif?cid=ecf05e479dqtmq7451mlqjrm59ms50gqwt6rwmyitxutpy5i&rid=giphy.gif&ct=g" 
                alt="Luigi and Mario dancing"/ >
        
            <Card 
                title="#..." 
                paragraph="#" 
                link="#" 
                alt="#"/ >
        
        
        
        </section>
    )
}

export default Cards