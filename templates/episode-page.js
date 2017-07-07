// episodePage
// Episode page content
module.exports = function episodePage(epDate, id, epDesc) {
  'use strict';
  return `<div class="container"><p>Published ${epDate}</p>
<div class="audio">
<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
</div>
<p>${epDesc}</p></div>`;
};