// src/setMetaTags.js
export const setMetaTags = ({ title, description, image, url }) => {
  document.title = title;

  const metaTags = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ];

  metaTags.forEach(tag => {
    let element = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
    if (element) {
      element.content = tag.content;
    } else {
      element = document.createElement('meta');
      if (tag.name) {
        element.name = tag.name;
      }
      if (tag.property) {
        element.setAttribute('property', tag.property);
      }
      element.content = tag.content;
      document.head.appendChild(element);
    }
  });
};
