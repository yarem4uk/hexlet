В форме создания новой машины есть два поля для загрузки файлов.

<input class="file" type="file" name="car[pictures][]">
<input class="file" type="file" name="car[pictures][]">
После загрузки на сервер (обработчик POST /cars) происходит проверка на ошибки и готовится массив, содержащий список загруженных файлов:

<?php

$pictures = [
    ['name' => basename($tmpFileName)],
    ...
];

При этом сами файлы должны быть перемещены в папку:

<?php

$newName = __DIR__ . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . basename($tmpFileName);
public/index.php
Допишите логику загрузки файлов в соответствующем обработчике. Она включает в себя формирование массива ошибок $errors (при условии что они были), а так же формирование массива $pictures, который уже будет использоваться для сохранения загруженных картинок.
