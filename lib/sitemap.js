// Create episode URLs
module.exports = function createSiteMap() {
    const path = require('path');
    const fs = require('fs');
    const write = require('./write');
    let content = '';

    content += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
    <loc>https://frontendhappyhour.com/</loc>
    <priority>1.00</priority>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/about/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/episodes/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/subscribe/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/terms/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/privacy/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/panelists/ryan-burgess/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/panelists/jem-young/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/panelists/stacy-london/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/panelists/augustus-yuan/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/panelists/mars-jullian/</loc>
    </url>
    <url>
    <loc>https://frontendhappyhour.com/panelists/shirley-wu/</loc>
    </url>`;

    const directoryPath = path.join(__dirname, 'episodes');

    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        // list all the episodes
        files.forEach(function (file) {
            // replace & in the url names
            if (file.includes('&')) {
                console.log(file)
                file = file.replace(/&/g, '%26');
            }
            content += `\n<url>
            <loc>https://frontendhappyhour.com/episodes/${file}/</loc>
            </url>`;
        });

        content += `\n</urlset>`;

        // create sitemap file
        write('sitemap.xml', content);
    });
};
