/*
 * This file is part of justoverclock/flarum-ext-newsfeed.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import RSS from 'vanilla-rss';
import app from 'flarum/app';
//import humanTime from 'flarum/common/helpers/humanTime';

app.initializers.add('litalino/flarum-ext-news-feed', () => {
  extend(IndexPage.prototype, 'view', function (vdom) {
    if (vdom.children && vdom.children.splice) {
      //const insert = m('div', { className: 'NewsFeed', id: 'divRss' });
      const byCopy = app.forum.attribute('byCopy');
      const insert = m('div', { class: 'NewsFeed', id: 'divRss' }, [
        m('span', { class: 'NewsFeed_ul' }, [
          m('i', { class: 'fas fa-dove' }),
          'News Feed',
        ]),
      ]);
      vdom.children.splice(1, 0, insert);
    }
  });
});
extend(IndexPage.prototype, 'oncreate', function () {
  //const today = dayjs().format('YYYY-MM-DD');

  const FeedUrl = app.forum.attribute('FeedUrl');
  /*const rss = new RSS(document.querySelector('#divRss'), FeedUrl, {
    limit: 5,
    ssl: true,
    layoutTemplate: "<div class='feed-container'>{entries}</div>",
    entryTemplate: "<li class='licss'><a class='titleFeed' target='_blank' href=\"{url}\">{title}</a><br/>{shortBodyPlain}... -  <b>{author}</b></li>",
  });
  rss.render().then(() => {});*/
  const rss = new RSS(document.querySelector('#divRss'), FeedUrl, {
    limit: 4,

    // want to offset results being displayed?
    // want to offset results being displayed?
    // default: false
    // valid values: any integer
    offsetStart: false, // offset start point
    offsetEnd: false, // offset end point

    ssl: true,
    // option to seldomly render ads
    // ads help covering the costs for the feedrapp server hosting and future improvements
    // default: true
    // valid values: false, true
    support: false,

    // outer template for the html transformation
    // default: "<ul>{entries}</ul>"
    // valid values: any string
    layoutTemplate: "<ul class='feed-container'>{entries}</ul>",

    // inner template for each entry
    // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
    // valid values: any string
    //entryTemplate: "<li class='licss'><a class='titleFeed' target='_blank' href=\"{url}\" rel=\"ugc noopener nofollow\">{title}</a><br/>{teaserImage}{shortBodyPlain}... -  <i>[@{author} - {date}]</i></li>",
    entryTemplate: "<li class='licss'><a class='titleFeed' target='_blank' href=\"{url}\" rel=\"ugc noopener nofollow\">{title}</a> - <i>[@{author} - {date}]</i></li>",
    // formats the date with moment.js (optional)
    // default: 'dddd MMM Do'
    // valid values: see http://momentjs.com/docs/#/displaying/
    //dateFormat: 'MMM DD, YYYY',


    // formats the date in whatever manner you choose. (optional)
    // this function should return your formatted date.
    // this is useful if you want to format dates without moment.js.
    // if you don't use moment.js and don't define a dateFormatFunction, the dates will
    // not be formatted; they will appear exactly as the RSS feed gives them to you.
    dateFormatFunction: function(date){
        //date, 'MMMM DD, YYYY'
        return dayjs().format('YYYY-MMM-DD');

    },

    // Defined the order of the feed's entries.
    // Default: undefined (keeps the order of the original feed)
    // valid values: All entry properties; title, link, content, contentSnippet, publishedDate, categories, author, thumbnail
    // Order can be reversed by prefixing a dash (-)
    order: '-publishedDate',

    fetchFeed: (apiUrl) => {
        return new Promise((resolve) => {
          $.getJSON(apiUrl, resolve);
        });
      }
  });

  rss
  // Trình quan sát được kích hoạt sau khi nhận được dữ liệu nhưng trước khi hiển thị.
  /*.on('data', (data) => {
    console.log(data.rss); // Trả về phiên bản rss
    console.log(data.feed); // Trả về thông tin meta nguồn cấp dữ liệu
    console.log(data.entries); // Trả về các mục nguồn cấp dữ liệu
  })*/
  .render()
  .then(

        // A callback, which gets triggered when every entry was loaded and rendered successfully
        () => {},
        // Lệnh gọi lại, được kích hoạt khi xảy ra lỗi
        (e)=>{
            console.log();
            //this.handleErrors(e);
        }
    );
});
