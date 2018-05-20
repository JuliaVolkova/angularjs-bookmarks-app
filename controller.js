angular.module(
    "project", []
)
.controller("main", function ($scope) {
    $scope.title = 'hello world';

    $scope.categories = [
        {id: 1, title: 'development'},
        {id: 2, title: 'translation'}
    ];

    $scope.bookmarks = [
        {id: 1, title: 'Egghead', url: 'https://egghead.io/', category: 'development'},
        {id: 2, title: 'Docker', url: 'https://www.docker.com/', category: 'development'},
        {id: 3, title: 'Golang', url: 'https://tour.golang.org/basics/2', category: 'development'},
        {id: 4, title: 'You Don\'t Know JavaScript', url: 'https://github.com/JuliaVolkova/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance2', category: 'translation'}
    ];
});