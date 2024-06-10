/* global Promise */
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');

// https://stackoverflow.com/a/16599668
function getLines(ctx, text, maxWidth) {
  var words = text.split(' ');
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + ' ' + word).width;
    if (width < maxWidth) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

// Generates an open graph image
module.exports = function makeOGImage({
  logoURL,
  title,
  avatars,
  backgrounds,
  socialIcons,
}) {
  const width = 1200;
  const height = 600;
  const imagePadding = height * 0.08;

  // Custom font needs to be registered
  registerFont(path.join(__dirname, './font/titlefont.ttf'), {
    family: 'Lato',
    weight: '900',
    style: 'italic',
  });

  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Background color
  context.fillStyle = '#eae5e1';
  context.fillRect(0, 0, width, height);

  const backgroundImageURL =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return loadImage(backgroundImageURL)
    .then((backgroundImage) => {
      context.drawImage(backgroundImage, 0, 0, width, height);
      return Promise.resolve(true);
    })
    .catch((e) => {
      throw new Error('Failed to load: ' + backgroundImageURL);
    })
    .then(() => {
      return new Promise((resolve, reject) => {
        const logoWidth = Math.round(height * 0.3);
        const logoHeight = logoWidth;

        const logoX = width - logoWidth - imagePadding;
        const logoY = height - logoHeight - imagePadding;

        // Load the logo
        const logoImagePromise = loadImage(logoURL)
          .then((image) => {
            context.drawImage(image, logoX, logoY, logoWidth, logoHeight);
          })
          .catch((e) => {
            throw new Error('Failed to load: ' + logoURL);
          });

        // Main title
        const fontSize = 50;
        const lineHeight = 1.5;
        context.font = 'italic 900 ' + fontSize + 'pt Lato';
        context.textAlign = 'center';
        context.fillStyle = '#122E2A';

        // Text wrapping
        const lines = getLines(context, title, width - imagePadding * 2);
        let lastLineY = null;

        // Write each line of the title
        lines.forEach((line, index) => {
          const initialY = height * 0.25 + imagePadding - fontSize;
          const y = initialY + index * (fontSize * lineHeight);
          context.fillText(line, width / 2, y);

          lastLineY = y;
        });

        // Avatars
        const avatarGap = 10;
        const avatarSize = Math.min(
          height * 0.25,
          ((width - logoWidth) * 0.75 - avatarGap * avatars.length) /
            avatars.length
        );
        const avatarBorderSize = avatarSize * 1.05;
        const avatarBorderColor = 'rgba(0,0,0,0.12)';
        const initialX = imagePadding + avatarSize / 2;

        const avatarPromises = Promise.all(
          avatars.map((avatar) =>
            loadImage(avatar).catch((e) => {
              throw new Error('Failed to load image: ' + avatar);
            })
          )
        ).then((avatarImages) => {
          avatarImages.forEach((avatarImage, index) => {
            const x =
              initialX + index * ((avatarBorderSize || avatarSize) + avatarGap);
            const y = height - avatarSize / 2 - imagePadding;

            // Avatar border
            context.save();
            context.beginPath();
            context.arc(x, y, avatarBorderSize / 2, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();

            context.fillStyle = avatarBorderColor;
            context.fillRect(
              x - avatarBorderSize / 2,
              y - avatarBorderSize / 2,
              avatarBorderSize,
              avatarBorderSize
            );

            context.beginPath();
            context.arc(
              x - avatarBorderSize,
              y - avatarBorderSize,
              avatarBorderSize,
              0,
              Math.PI * 2,
              true
            );
            context.clip();
            context.closePath();
            context.restore();

            // Avatar image
            context.save();
            context.beginPath();
            context.arc(x, y, avatarSize / 2, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();

            context.drawImage(
              avatarImage,
              x - avatarSize / 2,
              y - avatarSize / 2,
              avatarSize,
              avatarSize
            );

            context.beginPath();
            context.arc(
              x - avatarSize,
              y - avatarSize,
              avatarSize,
              0,
              Math.PI * 2,
              true
            );
            context.clip();
            context.closePath();
            context.restore();
          });
        });

        // Social icons
        const socialIconSize = height * 0.09;
        const socialIconGap = 20;

        const socialPromises = Promise.all(
          socialIcons.map((socialIcon) =>
            loadImage(socialIcon).catch((e) => {
              throw new Error('Failed to load image: ' + socialIcon);
            })
          )
        ).then((socialIcons) => {
          socialIcons.forEach((socialIcon, index) => {
            const initialX =
              width / 2 -
              (socialIcons.length * socialIconSize + socialIconGap) / 2 -
              socialIconGap;

            const x = initialX + index * (socialIconSize + socialIconGap);
            const y = lastLineY + imagePadding + socialIconSize / 2;

            // Hack to deal with lack of libsvgr
            // https://github.com/Automattic/node-canvas/issues/957
            socialIcon.width *= 2;
            socialIcon.height *= 2;

            context.drawImage(
              socialIcon,
              x + 0.5,
              y + 0.5,
              socialIconSize,
              socialIconSize
            );
          });
        });

        Promise.all([logoImagePromise, avatarPromises, socialPromises])
          .then(() => {
            const buffer = canvas.toBuffer('image/jpeg');
            resolve(buffer);
          })
          .catch(reject);
      });
    });
};
