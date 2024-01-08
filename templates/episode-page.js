// episodePage
// Episode page content
module.exports = function episodePage(epDate, id, vidID, epDesc) {
  'use strict';

  let videoContent = '';

  // Look for video id to display a YouTube video of the episode
  if (vidID !== null && vidID !== '' && vidID !== undefined) {
    videoContent = `<div class="audio"><iframe src="https://www.youtube.com/embed/${vidID}" width="100%" height="400px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  }

  return `<div class="container"><p>Published ${epDate}</p>
  ${videoContent}
<div class="audio">
<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
</div>
<p>${epDesc}</p></div>`;
};