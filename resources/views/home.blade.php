<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
</head>
<body class="d-flex h-100 text-center bg-light">
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root" class="d-flex flex-column w-100 h-100"></div>
<script src="{{ mix('/js/manifest.js') }}"></script>
<script src="{{ mix('/js/vendor.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
