<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="./dist/output.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<title>Ciprian Pop's Portofolio</title>
</head>
<body class="bg-slate-500">
    <header>
        <nav class="flex flex-wrap justify-evenly text-lg py-2 my-3">
            <a href="projects.php" class="py-5 px-10 text-2xl">Projects</a>
            <a href="https://file.io/dtOZQhcItVQE" class="py-5 px-10 text-2xl">C.V.</a>
            <a href="" class="py-5 px-10 text-2xl">Experience</a>
            <a href="mailto:ciprianvlad888@gmail.com?subject=The%20subject%20of%20the%20mail" class="py-5 px-10 text-2xl">E-mail</a>
        </nav>
        <div class="flex flex-row bg-slate-600 m-10 p-5">
            <img class="w-44 mr-auto rounded-full" src="images/webdeveloper.jpg" alt="logo">     
        <div class="mb-4">
            <h1 class="p-2 text-4xl font-serif">Hello there! <br> I'm Ciprian Pop, <br> and I'm a Web developer</h1>
            <p>I've been coding and making data visualisation projects since 2020. I have experience and interest in web design (HTML, CSS & JS), 
                In my free time I enjoy gaming, traveling and doing sports.
            </p>
        </div>
            </div>
    </header>   
    <div class="m-16">
        <h2 class="text-center uppercase text-2xl font-serif font-thin">Frontend development</h2>
        <div class="flex flex-row mg py-4 gap-6 justify-evenly frontend">
            <a href="https://noanswerss.github.io/Reservia/" class="space-x-3.5 bg-slate-600 flex flex-row">
                <div class="flex flex-col">
                <h2 class="text-white text-center break-words font-extrabold text-3xl"> Reservia </h2>
                <img src="images/htmlcss.webp" alt="Html and Css logo" class="sm p-5 rounded-xl">
                </div>
                <div class="flex flex-col">
                    <p class="text-white">Hotels Accommodations and Activities</p>
                    <p> Transformed mockup into responsive one-page HTML/CSS static template</p>
                </div>
            </a>
            <a href="https://noanswerss.github.io/ohmyfoodscss/" class="space-x-3.5 bg-slate-600">
                <h2 class="text-white text-center"> OhMyFood</h2>
                <img src="images/sass.png" alt="Sass logo" class="sm p-5">
                <p>Integrated a mobile website with animations in CSS</p>
            <p>Custom made Graphic Effects and Animations</p>
            </a>
            <a href="https://noanswerss.github.io/GoMikeDesigns/" class="space-x-3.5 bg-slate-600">
                <h2 class="text-center"> GoMikeDesigns</h2>
                <img src="images/seo.png" alt="" class="sm p-5">
        <p>Optimized an existing website using S.E.O. techniques</p>
        <p></p>
            </a>
</div>
        <h2 class="text-center text-2xl uppercase font-serif font-extrabold">Backend development</h2>
        <div class="flex flex-row mg py-4 gap-6 backend">
            <a href="https://github.com/NoAnswerss/P5-Web-Dev-Kanap" class="space-x-2 bg-slate-400">
                <h2 class="text-center">Kanap</h2>
                <img src="images/js.png" alt="" class="sm p-5">
                <p>First attempt at a fullstack application where I got to work with an API and fetch products from the backend to display dynamically</p>
            </a>
            <a href="https://github.com/NoAnswerss/Web-Developer-P6"  class="space-x-2 bg-slate-400">
                <h2 class="text-center">Piquante</h2>
                <img src="images/js.png" alt="" class="sm p-5">
                <p>Build the back-end and API for 'Piquante', a new apph2cation from So Pekocko that allows users to h2ke/dish2ke sauces.</p>
            </a>
            <a href="https://github.com/NoAnswerss/GroupMyApp"  class="space-x-2 bg-slate-400">
                <h2 class="text-center">Groupomania</h2>
                <img src="images/js.png" alt="" class="sm  p-5">
                <p>Seventh and last project in the brand new OpenClassrooms web developer course.</p>
                <p>Groupomania is a group specializing in mass distribution, the objective is the development of an internal social network for Groupomania employees</p>
                <p>The purpose of this tool is to facilitate interactions between colleagues.</p>
                <p>The backend part will be carried out with Api platform integrated into Symfony 4 NodeJS, Express framework and React for the frontend part.</p>
            </a>
            </div>
</div>
</body>
<script src="/demo/index.js"></script>
</html>