document.write(`\
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <link rel="stylesheet" href="./includes/includes.css">
    <script src="https://kit.fontawesome.com/cc63fd1b91.js" crossorigin="anonymous"></script>
   
</head>
<body>
    <div class="head-top">
        <div class="head-top-div">
            <i class="fa-solid fa-location-dot" id="location"></i>
            <p id="top-paragraph">14 Herne Hill, Toronto ON M9A 2X1 CA</p>
        </div>
        <div class="head-top-div div2">
            <i class="fa-solid fa-phone" id="contact-number"></i>
            <p>(647) 822 9322</p>
        </div>
    </div>
    <header class="main-header">
        <a href="../index.html"><img class="logo"src="./pictures/header + footer/logo.png" alt="logo"></a>
        <a href="#" class="toggle-button">
        <i id="icon" class="fa-solid fa-bars fa-2xl"></i>
        </a>
        <div class="menuToggle">
            <nav>
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../donation.html">Donation</a></li>
                    <li><a href="../partner.html">Partners</a></li>
                    <li><a href="../about.html">About</a></li>
                </ul>
            </nav>
        </div>
    </header>
</body>
<script src="./includes/index.js"></script>
</html>
`);