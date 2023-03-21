<nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary d-block">
    <img src="assets/images/nav-line.svg" class="nav-line">
    <div class="container d-flex">
        <a class="navbar-brand" href="index.php"><img src="assets/images/banner.svg" alt="" class=""
                style="width: 8em;"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
                <?php
                $links = ['about-us.php', 'stories.php', 'publications.php', 'partners.php', 'contact-us.php'];
                $page_names = ['About Us', 'Stories', 'Publications', 'Partners', 'Contact Us'];
                $current_page = substr($_SERVER["SCRIPT_NAME"], strrpos($_SERVER["SCRIPT_NAME"], "/") + 1);
                foreach ($links as $key => $link) {
                    if ($link == $current_page && $link != 'contact-us.php')
                        echo '<a class="nav-link" id="current-page">' . $page_names[$key] . '</a>';
                    else if ($link != $current_page && $link == 'contact-us.php')
                        echo '<button type="button" class="nyli-btn-nav ms-2">
                            <a id="nav-cta" href="contact-us.php">Contact Us</a>
                        </button>';
                    else if ($link == $current_page && $link == 'contact-us.php')
                        echo '<button type="button" class="nyli-btn-nav-current ms-2">
                        <a id="nav-cta" href="contact-us.php">Contact Us</a>
                    </button>';
                    else echo '<a class="nav-link" href="' . $link . '">' . $page_names[$key] . '</a>';
                }
                ?>
            </div>
        </div>
    </div>
</nav>