<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./dist/output.css">
    <title>Ciprian Pop's Portofolio</title>
</head>
<body class="bg-blue-400">
    
    <?php
        $introduction = "Hello world";
        $books = [
            "Random book",
            "Nice book",
            "Awful book"
        ]
    ?>
    <div>
    <h1 class="bg-green-200">Hello dude</h1>
        <?= $introduction; ?>
        <ul>
            <?php 
            foreach ($books as $book)
            {
                // echo $book;
                    echo "<li>$book</li>";
            }
            ?>
        </ul>
    </div>
</body>
</html>