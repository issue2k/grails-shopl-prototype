<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <title>shopl.io</title>

    <style type="text/css">
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
    </style>

    <asset:stylesheet src="concise.min.css"/>
    <asset:stylesheet src="app.css"/>

    <script type="text/javascript">
        window.contextPath = "${request.contextPath}";
    </script>
</head>
<body ng-app="shopl.shoppingList" ng-controller="ShoppingListController as vm">
    <g:render template="../header"/>
    <main container>
    <div id="content" role="main">
        <div ui-view>
            <div ng-include="'/shopl/shoppingList/list.html'"></div>
        </div>
    </div>
    </main>
    <g:render template="../footer"/>
    <asset:javascript src="/shopl/shoppingList/shopl.shoppingList.js" />
</body>
</html>