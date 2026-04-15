const fs = require('fs');

const content = fs.readFileSync('c:/python projects/fund/Funduz/src/views/SearchView.vue', 'utf8');
const template = content.match(/<template>([\s\S]*)<\/template>/)[1];

function countTags(html) {
    const stack = [];
    const tags = html.match(/<\/?([a-zA-Z0-9-]+)[^>]*>/g);
    
    tags.forEach(tag => {
        if (tag.startsWith('<!--')) return;
        const isClosing = tag.startsWith('</');
        const tagName = tag.match(/<\/?([a-zA-Z0-9-]+)/)[1];
        
        // Skip self-closing or known self-closing
        if (tag.endsWith('/>') || ['img', 'br', 'hr', 'input'].includes(tagName)) {
            return;
        }

        if (isClosing) {
            if (stack.length === 0) {
                console.log(`Error: Extra closing tag </${tagName}>`);
            } else {
                const last = stack.pop();
                if (last !== tagName) {
                    console.log(`Error: Mismatched tag. Expected </${last}>, found </${tagName}>`);
                }
            }
        } else {
            stack.push(tagName);
        }
    });

    if (stack.length > 0) {
        console.log(`Error: Unclosed tags: ${stack.join(', ')}`);
    } else {
        console.log('Template tags are balanced!');
    }
}

countTags(template);
