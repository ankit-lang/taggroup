const fs = require('fs');
const path = require('path');
const glob = require('glob');

// We don't have glob installed maybe? We can write a simple recursive function.
function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('.tsx')) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync('src/app/(public)', function(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Force dark mode on hero banners
    content = content.replace(/className="relative bg-background py-32 text-center overflow-hidden"/g, 'className="relative bg-background py-32 text-center overflow-hidden dark"');
    
    // 2. We only want to replace white colors that are hardcoded to be responsive.
    // However, some sections like footer or forced dark sections might be okay. But since we use responsive classes, it's safe everywhere.
    // Except wait! What if it is already in a dark section? If it's in a `dark` section, `text-foreground` is still white! So it's 100% safe.
    
    content = content.replace(/text-white\/60/g, 'text-muted-foreground/80');
    content = content.replace(/text-white\/70/g, 'text-muted-foreground');
    content = content.replace(/text-white\/80/g, 'text-muted-foreground');
    content = content.replace(/border-white\/5/g, 'border-border/50');
    content = content.replace(/border-white\/10/g, 'border-border/50');
    content = content.replace(/border-white\/20/g, 'border-border');
    content = content.replace(/bg-white\/5/g, 'bg-secondary/20');
    content = content.replace(/bg-white\/10/g, 'bg-secondary/50');
    
    // Replace text-white but exclude 'text-white/...' because we already did that (though we did /60, /70, /80)
    // Wait, let's just do an exact match of text-white using boundaries.
    content = content.replace(/\btext-white\b(?!\/)/g, 'text-foreground');
    
    // But what about buttons? bg-white text-black -> bg-foreground text-background
    content = content.replace(/bg-white/g, 'bg-foreground');
    content = content.replace(/text-black/g, 'text-background');
    content = content.replace(/hover:bg-white\/90/g, 'hover:bg-foreground/90');
    content = content.replace(/hover:bg-white\/10/g, 'hover:bg-muted');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log('Updated: ' + filePath);
    }
});
