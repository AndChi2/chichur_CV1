<?php

$recepient = "sideroalogo8@gmail.com";
$sitename = "Chs";

$name = trim($_POST["email"]);

$message = "Имя: $name";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");