const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.vue')) {
                results.push(file);
            }
        }
    });
    return results;
}

const vueFiles = walk(path.join(__dirname, '../src'));
let changedFiles = 0;

vueFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if we need to replace
    if (content.includes('text-gray-400') || content.includes('text-gray-300')) {
        // Replace text-gray-400 with text-gray-500
        content = content.replace(/text-gray-400/g, 'text-gray-500');
        // Replace text-gray-300 with text-gray-400 (for placeholders and very light text)
        content = content.replace(/text-gray-300/g, 'text-gray-400');
        
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
    }
});

console.log(`Successfully updated contrast classes in ${changedFiles} files!`);
