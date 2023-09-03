const fs = require('fs');
const path = require('path');

const sourceDir = './artifacts';
const npmDir = './npm';

const outDirs = fs.readdirSync(npmDir);

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error(`Could not list the directory: ${err}`);
        return;
    }
    files.forEach((file) => {
        // console.log(file);
        const sourcePath = path.join(sourceDir, file);
        console.log(`moving artifact: ${sourcePath}`);
        const terms = file.split('.');
        if (terms.pop() !== 'node') {
            console.error(`non node file found: ${file}`);
            return;
        }
        const platform = terms.pop()
        if (!platform) {
            console.error(`can't find platform for: ${file}`);
            return;
        }

        if (!outDirs.includes(platform)) {
            console.error(`invalid platform: ${platform} for file: ${file}`);
            return;
        }

        const destPath = path.join(npmDir, platform, file);

        fs.copyFile(sourcePath, destPath, (copyErr) => {
            if (copyErr) {
                console.error(`Could not copy the file: ${copyErr}`);
                return;
            }

            console.log(`Copied ${sourcePath} to ${destPath}`);
        });
        // }
    });
});
