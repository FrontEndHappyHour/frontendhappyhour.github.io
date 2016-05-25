'use strict';
const test = require('tape');
const ga = require('../templates/ga');
const expected = `<script>
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                    ga('create', '1235A', 'auto');
                    ga('send', 'pageview');
                  </script>`;

// test to make sure episode number adds pading '00'
test('Test ga template', function (t) {
  t.equal(ga('1235A'), expected, 'Google analytics template is correct');
  t.comment('Google analytics template is working as expected');

  t.end();
});