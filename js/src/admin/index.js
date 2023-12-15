/*
 * This file is part of justoverclock/flarum-ext-newsfeed.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';

app.initializers.add('litalino/flarum-ext-news-feed', () => {
  app.extensionData.for('litalino-news-feed').registerSetting({
    setting: 'litalino-news-feed.FeedUrl',
    name: 'FeedUrl',
    type: 'url',
    label: app.translator.trans('flarum-ext-news-feed.admin.feedutltitle'),
    help: app.translator.trans('flarum-ext-news-feed.admin.feedurldesc'),
    placeholder: 'Url of your Rss Feed',
  });
  app.extensionData.for('litalino-news-feed').registerSetting({
    setting: 'litalino-news-feed.byCopy',
    name: 'byCopy',
    type: 'text',
    label: app.translator.trans('flarum-ext-guestengagement.admin.byCopy'),
    help: app.translator.trans('flarum-ext-guestengagement.admin.byCopy'),
    placeholder: 'by Copyright...',
  });
});
