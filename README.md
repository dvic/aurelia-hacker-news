# Aurelia Hacker News Clone

A recreation of the [Hacker News][hn] website written in [TypeScript][ts] and
built using [Aurelia][aurelia], with [webpack][webpack] as a module bundler.

A running demonstration can be found [here][demo].

<br />

<p align="center">
  <a href="#readme">
    <img src="./assets/preview.png" alt="Preview" />
  </a>
</p>

<br />
<br />
<br />

## Features

- News list with filters for the
  [top][topstories]/[newest][newstories]/[best][beststories] stories.
- Topic view with collapsible comment threads.
- Responsive design for tablet and mobile platforms.
- User profile pages.
- Improved pagination.

## Components

- [Webpack][webpack] as the build system.
- [Aurelia][aurelia] as the client framework.
- [TypeScript][ts] as the primary programming language.
- [Sassy CSS][scss] as the stylesheet language, following the [7-1 pattern][7-1]
  and the [“Block Element Modifier” methodology][bem].
- [Firebase][firebase] as a data store for the [Hacker News API][hn-api].

## Building

The following scripts are configured to run via [npm][npm]:

- `npm start` or `npm run server:dev`
  - Runs the [webpack-dev-server][dev-server] at
    [`http://localhost:8080`][localhost]
- `npm run build`
  - Builds the production distribution and places it under the `./dist`
    directory.
- `npm run server:prod`
  - Starts a local-web-server at [`http://localhost:8080`][localhost] that
    serves the `./dist` directory.
- `npm run clean`
  - Cleans the `./dist` directory.

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`][license] file for the copyright information and licensing terms.

[hn]: https://news.ycombinator.com/news
[ts]: https://www.typescriptlang.org/
[aurelia]: http://aurelia.io/
[webpack]: https://webpack.github.io/
[demo]: https://michaelbull.github.io/aurelia-hacker-news
[topstories]: https://michaelbull.github.io/aurelia-hacker-news/#/news
[beststories]: https://michaelbull.github.io/aurelia-hacker-news/#/best
[newstories]: https://michaelbull.github.io/aurelia-hacker-news/#/newest
[scss]: http://sass-lang.com/
[7-1]: https://sass-guidelin.es/#the-7-1-pattern
[bem]: http://getbem.com/
[firebase]: https://www.npmjs.com/package/firebase
[hn-api]: https://github.com/HackerNews/API
[npm]: https://www.npmjs.com/
[localhost]: http://localhost:8080
[dev-server]: https://github.com/webpack/webpack-dev-server
[github]: https://github.com/michaelbull/aurelia-hacker-news
[license]: LICENSE
