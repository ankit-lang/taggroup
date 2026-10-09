const fs = require('fs');

let localesTs = fs.readFileSync('src/data/locales.ts', 'utf8');

// The file currently has:
//             }
//         }
// 
// };
// 
// export type Locale = keyof typeof locales;
// export const defaultLocale: Locale = "en";
// 
//   }

localesTs = localesTs.replace(/};\s*export type Locale/g, '  }\n};\n\nexport type Locale');
// Remove any trailing `  }` from my echo command
localesTs = localesTs.replace(/export const defaultLocale: Locale = "en";\s*}\s*$/g, 'export const defaultLocale: Locale = "en";\n');

fs.writeFileSync('src/data/locales.ts', localesTs);
console.log("Fixed syntax");
