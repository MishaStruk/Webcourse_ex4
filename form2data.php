<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex4 Form 2 accepted Data</title>
</head>
<body>
    <h1> The item you have added is:</h1>
    <?php 
        $name = $_GET["name"];
        $color = $_GET["color"];

        echo "<h2>" . $name . " in the color of " . $color . "</h2>";
    ?>
</body>
</html>