// Unicode character mappings for text formatting
const unicodeStyles = {
    bold: {
        'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
        'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
        'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
        'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
        'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
        '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
    },
    italic: {
        'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫',
        'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵',
        'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
        'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
        'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
        'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡'
    },
    monospace: {
        'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓',
        'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝',
        'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
        'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹',
        'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃',
        'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
        '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
    },
    script: {
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
        'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
        'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
        'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
        'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
        '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
    },
    fraktur: {
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧',
        'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱',
        'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
        'A': '𝔄', 'B': '𝔅', 'C': '𝔆', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': '𝔉', 'I': '𝔍', 'J': '𝔎',
        'K': '𝔏', 'L': '𝔐', 'M': '𝔑', 'N': '𝔒', 'O': '𝔓', 'P': '𝔔', 'Q': '𝔖', 'R': '𝔖', 'S': '𝔗', 'T': '𝔘',
        'U': '𝔙', 'V': '𝔚', 'W': '𝔛', 'X': '𝔜', 'Y': '𝔞𝔷', 'Z': '𝔷'
    },
    doublestrike: {
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
        'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
        'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
        'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
        'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
        '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
    }
};

// Build reverse map for unicode to plain text conversion (created once at load)
function buildReverseMap() {
    const map = {};
    for (let style in unicodeStyles) {
        const styleMap = unicodeStyles[style];
        for (let plain in styleMap) {
            const formatted = styleMap[plain];
            map[formatted] = plain;
        }
    }
    return map;
}
const reverseUnicodeMap = buildReverseMap();

// Check if a character is an emoji or part of an emoji sequence
function isEmoji(char) {
    // Extended emoji detection covering common emoji ranges
    const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{1F000}-\u{1F02F}]|[\u{1F0A0}-\u{1F0FF}]|[\u{2300}-\u{23FF}]|[\u{2500}-\u{259F}]|[\u{2B50}]|[\u{1F1E6}-\u{1F1FF}]|[\u{200D}]|[\u{FE0F}]|[\u{20E3}]/u;
    return emojiRegex.test(char);
}

// Check if a text contains emoji sequences (handles number emojis like 1️⃣)
function hasEmojiSequence(text, index) {
    // Check if current position starts an emoji with variation selector/combining marks
    if (index >= text.length) return false;
    
    const char = text[index];
    const nextChar = text[index + 1];
    const charAfter = text[index + 2];
    
    // Check for digit emoji pattern: digit + variation selector (FE0F) + combining keycap (20E3)
    if (/\d/.test(char) && nextChar === '\uFE0F' && charAfter === '\u20E3') {
        return true;
    }
    
    // Check for general emoji
    if (isEmoji(char)) {
        return true;
    }
    
    return false;
}

// Convert HTML rich text to Unicode formatting
function convertHtmlToUnicode(html, plainText) {
    let hasFormatting = false;
    
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Check if there's any actual formatting
    const hasHeaders = /<h[1-6][^>]*>/i.test(html);
    const hasLists = /<(ul|ol|li)[^>]*>/i.test(html);

    // code elements or preformatted text
    const hasCode = /<code[^>]*>/i.test(html) || /<pre[^>]*>/i.test(html);

    // semantic bold/italic plus ChatGPT-style styled spans
    const hasSemanticBoldOrItalic = /<(b|strong|i|em)[^>]*>/i.test(html);
    const hasSpanBold = /<span[^>]*style=["'][^"']*(font-weight:\s*(bold|[6-9]00))/i.test(html);
    const hasSpanItalic = /<span[^>]*style=["'][^"']*font-style:\s*italic/i.test(html);
    const hasBoldOrItalic = hasSemanticBoldOrItalic || hasSpanBold || hasSpanItalic;

    if (!hasHeaders && !hasLists && !hasCode && !hasBoldOrItalic) {
        // No meaningful formatting found, return plain text as-is
        return {
            text: plainText,
            hasFormatting: false
        };
    }

    // If we have any HTML formatting tags or styled spans, we have formatting
    if (hasBoldOrItalic || hasCode) {
        hasFormatting = true;
    }
    
    // Get list item texts FIRST (before modifying plainText)
    let listItemTexts = [];
    if (hasLists) {
        const listItems = tempDiv.querySelectorAll('li');
        // Normalize list item text (convert smart quotes, NBSP, remove zero-widths) so it matches normalized plain-text
        listItemTexts = Array.from(listItems).map(li => {
            const raw = li.textContent || '';
            return raw
                .replace(/[\u200B\u200C\u200D\uFEFF\u2060]/g, '')
                .replace(/\u00A0/g, ' ')
                .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
                .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
                .trim();
        });
    }
    
    // Build a map of text with formatting
    const formattingMap = new Map();
    
    function buildFormattingMap(node, formats = []) {
        if (node.nodeType === Node.TEXT_NODE) {
            const raw = node.textContent || '';
            // Normalize node text so it matches the normalized plain-text used elsewhere
            // (preserve whitespace/newlines but remove zero-widths, convert NBSP, and normalize smart quotes)
            const text = raw
                .replace(/[\u200B\u200C\u200D\uFEFF\u2060]/g, '')
                .replace(/\u00A0/g, ' ')
                .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
                .replace(/[\u201C\u201D\u201E\u201F]/g, '"');
            if (text) {
                for (let i = 0; i < text.length; i++) {
                    formattingMap.set(formattingMap.size, {
                        char: text[i],
                        formats: [...formats]
                    });
                }
            }
            return;
        }
        
        if (node.nodeType === Node.ELEMENT_NODE) {
            const tagName = node.tagName.toLowerCase();
            const newFormats = [...formats];
            
            if (tagName === 'b' || tagName === 'strong') {
                // Keep track of bold formatting
                newFormats.push('bold');
            } else if (tagName === 'i' || tagName === 'em') {
                // Keep track of italic formatting
                newFormats.push('italic');
            } else if (tagName === 'code' || tagName === 'pre') {
                newFormats.push('monospace');
            } else if (/^h[1-6]$/.test(tagName)) {
                newFormats.push('bold');
            } else if (tagName === 'span') {
                // look at inline style for ChatGPT copy button or similar
                const style = node.getAttribute('style') || '';
                if (/font-weight:\s*(bold|[6-9]00)/i.test(style)) {
                    newFormats.push('bold');
                }
                if (/font-style:\s*italic/i.test(style)) {
                    newFormats.push('italic');
                }
                if (/font-family:\s*[^;]*monospace/i.test(style)) {
                    newFormats.push('monospace');
                }
            }
            
            for (let child of node.childNodes) {
                buildFormattingMap(child, newFormats);
            }
        }
    }
    
    buildFormattingMap(tempDiv);
    
    // Apply formatting to plain text while preserving its structure
    const lines = plainText.split('\n');
    const result = [];
    let mapIndex = 0;
    
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
        const line = lines[lineIdx];
        let formattedLine = '';
        
        for (let charIdx = 0; charIdx < line.length; charIdx++) {
            const char = line[charIdx];
            let matched = false;
            
            // Find matching char in formatting map
            while (mapIndex < formattingMap.size) {
                const mapEntry = formattingMap.get(mapIndex);
                
                // Skip whitespace-only differences
                if (mapEntry.char === char || (char.match(/\s/) && mapEntry.char.match(/\s/))) {
                    matched = true;
                    const formats = mapEntry.formats;
                    let formattedChar = char;
                    
                    // Check for digit emoji sequences (e.g., 1️⃣)
                    const isDigitEmoji = /\d/.test(char) && line[charIdx + 1] === '\uFE0F' && line[charIdx + 2] === '\u20E3';
                    
                    // Skip emoji conversion - preserve emojis and digit emojis as-is
                    if (!isEmoji(char) && !isDigitEmoji) {
                        // Apply formats only to non-emoji characters
                        if (formats.includes('bold') && unicodeStyles.bold[char]) {
                            formattedChar = unicodeStyles.bold[char];
                        } else if (formats.includes('italic') && unicodeStyles.italic[char]) {
                            formattedChar = unicodeStyles.italic[char];
                        } else if (formats.includes('monospace') && unicodeStyles.monospace[char]) {
                            formattedChar = unicodeStyles.monospace[char];
                        }
                    }
                    
                    formattedLine += formattedChar;
                    mapIndex++;
                    break;
                }
                
                mapIndex++;
            }

            // If we exhausted the formatting map without matching the character,
            // something went wrong with alignment (common when plainText is
            // unexpectedly short or contains extra newlines). Bail out and
            // return the unmodified plain text to avoid dropping content.
            if (!matched && mapIndex >= formattingMap.size) {
                // rebuild text quickly and return
                return { text: plainText, hasFormatting };
            }
        }
        
        // Now add bullet prefix if this line matches a list item
        const trimmed = formattedLine.trim();
        if (trimmed && listItemTexts.includes(trimmed)) {
            formattedLine = '• ' + trimmed;
        }
        
        result.push(formattedLine || line);
    }
    
    // Clean up excessive newlines - remove empty lines between bullets, keep one space between groups
    let finalText = result.join('\n');
    
    // Remove lines that are just empty between bullets
    const bulletLines = finalText.split('\n').map((line, idx, arr) => {
        // If this is empty and both prev/next are bullets, skip it
        if (line.trim() === '' && 
            ((idx > 0 && arr[idx - 1].trim().startsWith('•')) || idx === 0) &&
            ((idx < arr.length - 1 && arr[idx + 1].trim().startsWith('•')) || idx === arr.length - 1)) {
            return null;
        }
        return line;
    }).filter(line => line !== null);
    
    finalText = bulletLines.join('\n').replace(/\n{3,}/g, '\n\n');

    // If we've somehow stripped everything but the HTML contained text, fall
    // back to a basic textContent dump so the user at least sees the words.
    if ((!finalText || !finalText.trim()) && tempDiv.textContent && tempDiv.textContent.trim()) {
        finalText = normalizePastedText(tempDiv.textContent);
    }
    
    // (removed header-spacing logic; it was inserting stray blank lines/headers)
    // const headerElements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    // if (headerElements.length >= 2) {
    //     // Get header texts in order and normalize them so smart quotes / NBSP don't cause mismatches
    //     const headerTexts = Array.from(headerElements).map(h => {
    //         const raw = h.textContent || '';
    //         return raw
    //             .replace(/[\u200B\u200C\u200D\uFEFF\u2060]/g, '')
    //             .replace(/\u00A0/g, ' ')
    //             .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    //             .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    //             .trim();
    //     });
    //     
    //     // Add newline between consecutive headers in finalText
    //     const lines = finalText.split('\n');
    //     const spacedLines = [];
    //     
    //     for (let i = 0; i < lines.length; i++) {
    //         const line = lines[i];
    //         const trimmedLine = line.trim();
    //         
    //         // Convert formatted text back to plain for comparison
    //         let plainLine = Array.from(trimmedLine).map(char => reverseUnicodeMap[char] || char).join('');
    //         
    //         // Check if this line matches any header text
    //         const isHeader = headerTexts.includes(plainLine);
    //         
    //         // Check previous line
    //         let prevIsHeader = false;
    //         if (i > 0) {
    //             const prevLine = lines[i - 1].trim();
    //             let prevPlain = Array.from(prevLine).map(char => reverseUnicodeMap[char] || char).join('');
    //             prevIsHeader = headerTexts.includes(prevPlain);
    //         }
    //         
    //         // Add blank line between consecutive headers
    //         if (prevIsHeader && isHeader && trimmedLine) {
    //             spacedLines.push('');
    //         }
    //         
    //         spacedLines.push(line);
    //     }
    //     
    //     finalText = spacedLines.join('\n');
    // }
    
    return {
        text: finalText,
        hasFormatting: hasFormatting || listItemTexts.length > 0
    };
}

// Helper function to apply formatting while preserving emoji sequences
function applyFormattingPreservingEmoji(content, styleMap) {
    let result = '';
    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        
        // Check for digit emoji sequences (e.g., 1️⃣ = digit + FE0F + 20E3)
        if (/\d/.test(char) && content[i + 1] === '\uFE0F' && content[i + 2] === '\u20E3') {
            // Skip emoji sequence - append all 3 characters as-is
            result += char + '\uFE0F' + '\u20E3';
            i += 2;
        } else if (isEmoji(char)) {
            // Skip other emojis
            result += char;
        } else {
            // Apply formatting
            result += styleMap[char] || char;
        }
    }
    return result;
}

// Normalize pasted plain-text (strip invisible characters, normalize spaces and quotes)
function normalizePastedText(text = '') {
    if (!text) return '';

    // Remove common invisible / zero-width characters that break regex detection
    text = text.replace(/[\u200B\u200C\u200D\uFEFF\u2060]/g, '');

    // Normalize CRLF to LF
    text = text.replace(/\r\n/g, '\n');

    // Collapse multiple blank lines
    text = text.replace(/\n{3,}/g, '\n\n');

    // Convert non-breaking spaces to normal spaces
    text = text.replace(/\u00A0/g, ' ');

    // Replace smart quotes with straight quotes (helps markdown detection)
    text = text.replace(/[\u2018\u2019\u201A\u201B]/g, "'");
    text = text.replace(/[\u201C\u201D\u201E\u201F]/g, '"');

    // Trim trailing/leading whitespace on each line
    text = text.split('\n').map(l => l.replace(/[\t ]+$/g, '')).join('\n');

    return text;
}

// Convert markdown formatting to Unicode (supports headers, lists, fenced code, inline code, bold, italic)
function convertMarkdownToUnicode(text) {
    if (!text) return text;

    // Normalize input first to improve detection on mobile clipboard content
    const original = text;
    text = normalizePastedText(text);

    // Convert fenced code blocks (``` ```)
    text = text.replace(/```([\s\S]*?)```/g, function(match, content) {
        // Preserve newlines inside code block and convert to monospace
        const converted = applyFormattingPreservingEmoji(content, unicodeStyles.monospace);
        return converted;
    });

    // Convert markdown headers (#, ##, ###)
    // (disabled - headers were causing unwanted dynamic decorations)
    // text = text.replace(/^#{1}\s*(.+)$/gm, function(m, content) {
    //     const boldText = Array.from(content.trim()).map(c => unicodeStyles.bold[c] || c).join('');
    //     return `━━━━━━━━━━━━━━━━━━━━\n${boldText.toUpperCase()}\n━━━━━━━━━━━━━━━━━━━━`;
    // });
    // text = text.replace(/^#{2}\s*(.+)$/gm, function(m, content) {
    //     const boldText = Array.from(content.trim()).map(c => unicodeStyles.bold[c] || c).join('');
    //     return `▸ ${boldText.toUpperCase()}`;
    // });
    // text = text.replace(/^#{3}\s*(.+)$/gm, function(m, content) {
    //     const boldText = Array.from(content.trim()).map(c => unicodeStyles.bold[c] || c).join('');
    //     return `◉ ${boldText}`;
    // });

    // Convert unordered lists (-, *, +) to bullet points
    text = text.replace(/^[ \t]*([-+\*])\s+(.+)$/gm, function(m, p1, content) {
        return '• ' + content.trim();
    });

    // Convert numbered lists (1. 2. ...) — preserve numbering
    text = text.replace(/^[ \t]*(\d+)\.\s+(.+)$/gm, function(m, num, content) {
        return `${num}. ${content.trim()}`;
    });

    // Convert inline `code` to monospace
    text = text.replace(/`([^`]+?)`/g, function(match, content) {
        return applyFormattingPreservingEmoji(content, unicodeStyles.monospace);
    });

    // Convert strong/bold (**text** or __text__)
    text = text.replace(/\*\*([^\*]+?)\*\*/g, function(match, content) {
        return applyFormattingPreservingEmoji(content, unicodeStyles.bold);
    });
    text = text.replace(/__([^_]+?)__/g, function(match, content) {
        return applyFormattingPreservingEmoji(content, unicodeStyles.bold);
    });

    // Convert emphasis/italic (*text* or _text_)
    // Avoid matching already-processed bold by using lookarounds
    text = text.replace(/(^|\s)\*([^\*\n]+?)\*(?=\s|$)/g, function(m, pre, content) {
        return pre + applyFormattingPreservingEmoji(content, unicodeStyles.italic);
    });
    text = text.replace(/(^|\s)_([^_\n]+?)_(?=\s|$)/g, function(m, pre, content) {
        return pre + applyFormattingPreservingEmoji(content, unicodeStyles.italic);
    });

    // If nothing changed after normalization + markdown pass, return original to avoid false positives
    if (text === normalizePastedText(original)) {
        return original;
    }

    return text;
}

// Emoji collections
// Emoji collection - will be populated from CDN
// Emoji system using emoji-js library
let emojiCollection = {};

// Initialize emoji-js and build emoji database
function initializeEmojiSystem() {
    try {
        // Initialize emoji-js convertor
        const emoji = new EmojiConvertor();
        
        // Build comprehensive emoji database
        emojiCollection = {
            'popular': [
                '😊', '👍', '🎉', '💡', '🚀', '✨', '💪', '🔥', '❤️', '👏',
                '🌟', '💯', '🎯', '📈', '💼', '🏆', '✅', '👋', '🙌', '💬',
                '😂', '🤔', '😍', '🎊', '🔔', '💌', '⚡', '🌈', '🎁', '💯'
            ],
            'smileys': [
                '😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂',
                '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋',
                '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐',
                '🤨', '😐', '😑', '😶', '😏', '😒', '🙁', '😬', '🤥', '😌',
                '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤮'
            ],
            'gestures': [
                '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞',
                '🫰', '🤟', '🤘', '🤙', '👍', '👎', '✊', '👊', '🤛', '🤜',
                '👏', '🙌', '👐', '🫳', '🫴', '🤲', '🤝', '🤜', '🙏', '💅',
                '💪', '🦾', '🦿', '🦵', '🦶', '👂', '👃', '🧠', '🦷', '🦴',
                '👀', '👁️', '👅', '👄', '💋', '👶', '👧', '🧒', '👦', '👨'
            ],
            'animals': [
                '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
                '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒',
                '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗',
                '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🪰', '🦟',
                '🪳', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙'
            ],
            'food': [
                '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈',
                '🍒', '🍑', '🍍', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒',
                '🌶️', '🌽', '🥕', '🥔', '🍠', '🥐', '🍞', '🥖', '🧀', '🥚',
                '🍳', '🥞', '🥓', '🥩', '🍗', '🌭', '🍔', '🍟', '🍕', '🥪',
                '🌮', '🌯', '🥗', '🥙', '🧆', '🍝', '🍜', '🍲', '🍛', '🍣'
            ],
            'travel': [
                '✈️', '🚁', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉',
                '🚊', '🚝', '🚞', '🚋', '🚌', '🚍', '🚎', '🚐', '🚑', '🚒',
                '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜',
                '🏎️', '🏍️', '🛵', '🛴', '🚲', '🛹', '⛵', '🚤', '🛳️', '⛴️',
                '🛥️', '🚨', '🚧', '🚦', '🚥', '🗺️', '🗿', '🗽', '⛩️', '🎪'
            ],
            'nature': [
                '🌋', '⛰️', '🌄', '🌅', '🌆', '🌇', '🌉', '🌁', '⛅', '🌤️',
                '🌥️', '☁️', '🌦️', '🌧️', '⛈️', '🌩️', '🌨️', '❄️', '☃️', '⛄',
                '💨', '💧', '💦', '☔', '⚡', '🌪️', '🌫️', '🌈', '☀️', '⭐',
                '🌟', '✨', '⚡', '☄️', '💥', '🔥', '🌪️', '🌈', '☀️', '🌙'
            ],
            'activities': [
                '⚽', '⚾', '🥎', '🎾', '🏀', '🏐', '🏈', '🏉', '🎱', '🪀',
                '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '⛳', '🪃', '🌾', '⛸️',
                '⛷️', '🎣', '🎽', '🎿', '⛹️', '🏋️', '🚴', '🚵', '🤸', '⛹️',
                '🤼', '🤸', '⛹️', '🤺', '🤾', '🏌️', '🏇', '🧘', '🏄', '🏊'
            ],
            'objects': [
                '💼', '📊', '📈', '📉', '📐', '📏', '🧮', '📎', '📌', '📍',
                '✂️', '✒️', '🖋️', '🖊️', '🖌️', '🖍️', '📝', '✏️', '🔍', '🔎',
                '🔏', '🔐', '🔒', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖲️',
                '🕯️', '💡', '🔦', '🏮', '📔', '📕', '📖', '📗', '📘', '📙',
                '📚', '📓', '📒', '📃', '📜', '📄', '📰', '🧷', '🧹', '🧺'
            ],
            'symbols': [
                '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
                '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '👁️‍🗨️', '💬',
                '👁️', '🗨️', '🗯️', '💭', '💤', '✈️', '🔶', '🔷', '🔸', '🔹',
                '✔️', '☑️', '✖️', '❌', '❎', '➕', '➖', '➗', '➘', '➙',
                '➚', '➛', '➜', '➝', '➞', '➟', '➠', '⬅️', '⬆️', '⬇️'
            ],
            'flag': [
                '🏁', '🚩', '🎌', '🏴', '🏳️', '🏳️‍🌈', '🏴‍☠️', '🇺🇸', '🇬🇧', '🇨🇦',
                '🇦🇺', '🇮🇳', '🇯🇵', '🇩🇪', '🇫🇷', '🇪🇸', '🇮🇹', '🇧🇷', '🇨🇳', '🇮🇩',
                '🇿🇦', '🇧🇩', '🇰🇷', '🇮🇷', '🇦🇫', '🇵🇰', '🇲🇽', '🇳🇬', '🇷🇺', '🇬🇷'
            ],
            'business': [
                '💼', '📊', '📈', '📉', '📋', '📁', '📂', '📃', '📄', '📑',
                '📇', '🗂️', '🗳️', '🗄️', '📋', '📌', '📍', '📎', '🖇️', '📏',
                '📐', '✂️', '✒️', '🖋️', '🖊️', '🖌️', '📝', '✏️', '📞', '☎️',
                '📟', '📠', '🔔', '🔕', '📢', '📣', '📯', '📺', '📻', '📷'
            ],
            'time': [
                '⏰', '⏱️', '⏲️', '🕰️', '⌚', '⌛', '⏳', '📡', '🔋', '🔌',
                '💡', '🔦', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📓',
                '⏰', '⏱️', '⏲️', '🕰️', '⌚', '⏰', '⏱️', '📅', '📆', '🗓️'
            ]
        };
        
    } catch (error) {
        // Emoji system will still work with the default emojiCollection
    }
}

// Undo/Redo system
let undoStack = [];
let redoStack = [];
let currentState = '';
let isUndoRedo = false;

// Initialize on load
// Auto-grow editor with content
function autoResizeEditor() {
    const editor = document.getElementById('editor');
    if (!editor) return;
    
    // Reset height to auto to calculate scrollHeight properly
    editor.style.height = 'auto';
    
    // Get the scrollHeight which is the full content height
    const scrollHeight = editor.scrollHeight;
    
    // Set height to scrollHeight for full content display
    editor.style.height = scrollHeight + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
    initializeEmojiSystem(); // Initialize emoji-js system
    setupEmojiGrid();
    initializeUndoSystem();
});

// Initialize undo system
function initializeUndoSystem() {
    const editor = document.getElementById('editor');
    currentState = editor.value;
    undoStack.push(currentState);
    
    // Track manual typing and paste
    let typingTimer;
    editor.addEventListener('input', function(e) {
        // Auto-resize editor to fit content
        autoResizeEditor();
        
        // Always update preview
        updatePreview();
        
        if (isUndoRedo) {
            isUndoRedo = false;
            return;
        }
        
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            saveState();
        }, 500); // Save state after 500ms of no typing
    });
    
    // Initial resize
    autoResizeEditor();
    
    // Handle window resize to update editor max-height
    window.addEventListener('resize', function() {
        autoResizeEditor();
    });
    
    // Handle paste events with smart formatting detection
    editor.addEventListener('paste', function(e) {
        e.preventDefault();
        
        // Try to get HTML content first (for rich text)
        let htmlContent = '';
        let pastedText = '';
        
        if (e.clipboardData && e.clipboardData.getData) {
            htmlContent = e.clipboardData.getData('text/html') || '';
            pastedText = e.clipboardData.getData('text/plain') || '';
        } else if (window.clipboardData && window.clipboardData.getData) {
            htmlContent = window.clipboardData.getData('HTML') || '';
            pastedText = window.clipboardData.getData('Text') || '';
        }
        
        // Fallback: if no text/html available, try to get structured clipboard data
        if (!htmlContent && !pastedText && e.clipboardData && e.clipboardData.types) {
            for (let type of e.clipboardData.types) {
                if (type.includes('text')) {
                    pastedText = e.clipboardData.getData(type);
                    break;
                }
            }
        }
        
        // Normalize plain-text early to handle mobile clipboard quirks (zero-width, smart quotes, nbsp)
        pastedText = normalizePastedText(pastedText || '');

        let convertedText = pastedText || '';
        let hasFormatting = false;
        
        // First check if plain text has bullet points or numbered lists
        const bulletPattern = /^[\s]*([-•*+]|\d+\.)\s+/m;
        const hasBullets = bulletPattern.test(pastedText);
        
        if (htmlContent) {
            const result = convertHtmlToUnicode(htmlContent, pastedText);
            if (result.hasFormatting) {
                convertedText = result.text;
                hasFormatting = true;
            }
            // if formatting was reported but conversion returned nothing,
            // fall back to whatever plain text we have.
            if (hasFormatting && (!convertedText || !convertedText.trim())) {
                convertedText = pastedText || '';
            }
            // Even if we got something back from HTML conversion, it
            // might still include raw markdown markers (ChatGPT sometimes
            // outputs a mixture of HTML and markdown). Run the markdown
            // converter on the result so we don't ship `**bold**` verbatim.
            if (hasFormatting && convertedText && /\*\*[^\*]+\*\*|__[^_]+__|`[^`]+`/.test(convertedText)) {
                const maybe = convertMarkdownToUnicode(convertedText);
                if (maybe !== convertedText) {
                    convertedText = maybe;
                }
            }
        }

        // --- Enhanced markdown/header/list/code detection (helps mobile plain-text paste from ChatGPT app)
        if (!hasFormatting && pastedText) {
            const markdownConverted = convertMarkdownToUnicode(pastedText);
            if (markdownConverted !== pastedText) {
                convertedText = markdownConverted;
                hasFormatting = true;
            }
        }
        
        // If bullets detected in plain text and no other formatting was found, convert them
        if (!hasFormatting && hasBullets) {
            // Convert various bullet formats to consistent bullet point character
            let normalized = pastedText.replace(/\r\n/g, '\n');
            normalized = normalized.replace(/\n{3,}/g, '\n\n');
            
            convertedText = normalized.split('\n').map(line => {
                const match = line.match(/^(\s*)([-•*])\s+(.*)$/);
                if (match) {
                    return '• ' + match[3].trim();
                }
                return line;
            }).join('\n');
            hasFormatting = true;
        }
        
        // If no HTML formatting found, check for markdown
        if (!hasFormatting) {
            const hasMarkdown = /\*\*[^\*]+?\*\*|__[^_]+?__|\*[^\*]+?\*|_[^_]+?_/.test(pastedText);
            if (hasMarkdown) {
                convertedText = convertMarkdownToUnicode(pastedText);
                hasFormatting = convertedText !== pastedText;
            }
        }
        
        // On Linux, also check if we detected HTML tags but converted nothing visible
        // This handles cases where HTML exists but our converter didn't find "meaningful" changes
        if (!hasFormatting && htmlContent) {
            // If HTML was present, assume some formatting existed
            hasFormatting = true;
        }
        
        // Insert at cursor position
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const before = editor.value.substring(0, start);
        const after = editor.value.substring(end);
        
        editor.value = before + convertedText + after;
        editor.selectionStart = editor.selectionEnd = start + convertedText.length;
        
        // Auto-resize editor after paste
        autoResizeEditor();
        
        // Show notification if formatting was converted
        if (hasFormatting) {
            showToast('✨ Formatting converted to Unicode!', 'success');
        }
        
        updatePreview();
        
        // Update currentState immediately after paste
        currentState = editor.value;
        
        // Save state after paste (clears redo stack on new change)
        if (undoStack[undoStack.length - 1] !== currentState) {
            undoStack.push(currentState);
            redoStack = [];
            if (undoStack.length > 50) {
                undoStack.shift();
            }
        }
    });
    
    // Handle cut events
    editor.addEventListener('cut', function(e) {
        setTimeout(() => {
            updatePreview();
            saveState();
        }, 10);
    });
}

// Save current state to undo stack
function saveState() {
    const editor = document.getElementById('editor');
    const newState = editor.value;
    
    if (newState !== currentState) {
        undoStack.push(newState);
        currentState = newState;
        redoStack = []; // Clear redo stack on new change
        
        // Limit undo stack to 50 items
        if (undoStack.length > 50) {
            undoStack.shift();
        }
    }
}

// Undo function
function undo() {
    if (undoStack.length > 1) {
        const editor = document.getElementById('editor');
        redoStack.push(undoStack.pop());
        currentState = undoStack[undoStack.length - 1];
        
        isUndoRedo = true;
        editor.value = currentState;
        autoResizeEditor();
        updatePreview();
        showToast('↶ Undone', 'info');
    } else {
        showToast('Nothing to undo', 'warning');
    }
}

// Redo function
function redo() {
    if (redoStack.length > 0) {
        const editor = document.getElementById('editor');
        const state = redoStack.pop();
        undoStack.push(state);
        currentState = state;
        
        isUndoRedo = true;
        editor.value = currentState;
        autoResizeEditor();
        updatePreview();
        showToast('↷ Redone', 'info');
    } else {
        showToast('Nothing to redo', 'warning');
    }
}

// Format text with unicode styles
function formatText(style) {
    const editor = document.getElementById('editor');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    
    if (!selectedText) {
        showToast('Please select text to format', 'warning');
        return;
    }
    
    let formattedText = '';
    
    if (style === 'bold' || style === 'italic' || style === 'monospace' || style === 'script' || style === 'fraktur' || style === 'doublestrike') {
        // Process text character by character, detecting and preserving emoji sequences
        formattedText = '';
        for (let i = 0; i < selectedText.length; i++) {
            const char = selectedText[i];
            
            // Check for digit emoji sequences (e.g., 1️⃣ = digit + FE0F + 20E3)
            if (/\d/.test(char) && selectedText[i + 1] === '\uFE0F' && selectedText[i + 2] === '\u20E3') {
                // Skip emoji sequence - append all 3 characters as-is
                formattedText += char + '\uFE0F' + '\u20E3';
                i += 2;
            } else if (isEmoji(char)) {
                // Skip other emojis
                formattedText += char;
            } else {
                // Apply formatting to non-emoji characters
                formattedText += unicodeStyles[style][char] || char;
            }
        }
    } else if (style === 'underline') {
        // Use Array.from() to handle surrogate pairs properly
        formattedText = Array.from(selectedText).map(char => char + '\u0332').join('');
    } else if (style === 'strikethrough') {
        // Use Array.from() to handle surrogate pairs properly
        formattedText = Array.from(selectedText).map(char => char + '\u0336').join('');
    }
    
    const newText = editor.value.substring(0, start) + formattedText + editor.value.substring(end);
    editor.value = newText;
    editor.setSelectionRange(start, start + formattedText.length);
    editor.focus();
    autoResizeEditor();
    saveState();
    updatePreview();
    
    // Show feedback message
    const styleNames = {
        'bold': '𝗕𝗼𝗹𝗱',
        'italic': '𝘐𝘵𝘢𝘭𝘪𝘤',
        'monospace': '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',
        'script': '𝓢𝓬𝓻𝓲𝓹𝓽',
        'fraktur': '𝔉𝔯𝔞𝔨𝔱𝔲𝔯',
        'doublestrike': '𝔻𝔬𝔲𝔟𝔩𝔠𝔯𝔰',
        'underline': 'Underline̲',
        'strikethrough': 'Strikethrough̶'
    };
    const styleName = styleNames[style] || style;
    showToast(`✓ ${styleName} applied`, 'success');
}

// Change text case
function changeCase(caseType) {
    const editor = document.getElementById('editor');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    
    if (!selectedText) {
        showToast('Please select text to change case', 'warning');
        return;
    }
    
    // Convert unicode formatted text back to plain text using global reverseUnicodeMap
    // Use Array.from() to handle surrogate pairs properly
    let plainText = Array.from(selectedText).map(char => {
        // Check if it's a formatted character
        if (reverseUnicodeMap[char]) {
            return reverseUnicodeMap[char];
        }
        // Remove combining marks (underline, strikethrough)
        if (char === '\u0332' || char === '\u0336') {
            return '';
        }
        return char;
    }).join('');
    
    let newText = plainText;
    
    if (caseType === 'upper') {
        newText = plainText.toUpperCase();
    } else if (caseType === 'lower') {
        newText = plainText.toLowerCase();
    } else if (caseType === 'title') {
        // Title case: capitalize first letter of EACH word
        newText = plainText
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    } else if (caseType === 'sentence') {
        // Sentence case: capitalize first letter after periods and at start, preserve newlines
        newText = plainText
            .toLowerCase()
            .replace(/(\.|^)(\s*)([a-z])/g, (match, period, whitespace, letter) => {
                return period + whitespace + letter.toUpperCase();
            });
    }
    
    const fullText = editor.value.substring(0, start) + newText + editor.value.substring(end);
    editor.value = fullText;
    editor.setSelectionRange(start, start + newText.length);
    editor.focus();
    autoResizeEditor();
    saveState();
    updatePreview();
    showToast(`✓ Case changed to ${caseType}`, 'success');
}

// Clear all formatting from text
function clearFormatting() {
    const editor = document.getElementById('editor');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    
    if (start === end) {
        showToast('Please select text to clear formatting', 'warning');
        return;
    }
    
    const selectedText = editor.value.substring(start, end);
    
    // Replace each character - use for...of to handle surrogate pairs properly
    let cleanText = '';
    for (const char of selectedText) {
        // Check if it's a formatted character in reverse map
        if (reverseUnicodeMap[char]) {
            cleanText += reverseUnicodeMap[char];
        }
        // Remove combining marks (underline, strikethrough)
        else if (char !== '\u0332' && char !== '\u0336') {
            cleanText += char;
        }
    }
    
    const fullText = editor.value.substring(0, start) + cleanText + editor.value.substring(end);
    editor.value = fullText;
    editor.setSelectionRange(start, start + cleanText.length);
    editor.focus();
    autoResizeEditor();
    saveState();
    updatePreview();
    showToast('✓ Formatting cleared', 'success');
}

// Add list formatting
function addList(type) {
    const editor = document.getElementById('editor');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    
    let lines = selectedText ? selectedText.split('\n') : [''];
    let bullets = {
        bullet: '• ',
        number: (i) => `${i}. `,
        check: '✓ ',
        arrow: '→ '
    };
    
    let formattedLines = lines.map((line, index) => {
        if (line.trim() === '') return line;
        const bullet = type === 'number' ? bullets.number(index + 1) : bullets[type];
        return bullet + line.trim();
    });
    
    const formattedText = formattedLines.join('\n');
    
    if (selectedText) {
        const newText = editor.value.substring(0, start) + formattedText + editor.value.substring(end);
        editor.value = newText;
    } else {
        insertAtCursor(editor, formattedText);
    }
    
    autoResizeEditor();
    saveState();
    editor.focus();
    updatePreview();
}

// Add header formatting
function addHeader(level) {
    const editor = document.getElementById('editor');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    
    let headerText = selectedText || 'Header Text';
    
    // Convert header text to bold - use Array.from() to handle surrogate pairs
    const boldText = Array.from(headerText).map(char => unicodeStyles.bold[char] || char).join('');
    
    let formattedText = '';
    
    if (level === 'h1') {
        formattedText = `━━━━━━━━━━━━━━━━━━━━\n${boldText.toUpperCase()}\n━━━━━━━━━━━━━━━━━━━━\n`;
    } else if (level === 'h2') {
        formattedText = `▸ ${boldText.toUpperCase()}\n`;
    } else if (level === 'h3') {
        formattedText = `◉ ${boldText}\n`;
    }
    
    if (selectedText) {
        const newText = editor.value.substring(0, start) + formattedText + editor.value.substring(end);
        editor.value = newText;
    } else {
        insertAtCursor(editor, formattedText + '\n');
    }
    autoResizeEditor();
    saveState();
    
    editor.focus();
    updatePreview();
}

// Add divider
function addDivider(type = 'line1') {
    const editor = document.getElementById('editor');
    
    const dividers = {
        'line1': '\n━━━━━━━━━━━━━━━━━━━━━\n',
        'line2': '\n─────────────────────\n',
        'line3': '\n• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •\n',
        'line4': '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'
    };
    
    saveState();
    const divider = dividers[type] || dividers['line1'];
    insertAtCursor(editor, divider);
    autoResizeEditor();
    updatePreview();
}

// Add quote
function addQuote() {
    const editor = document.getElementById('editor');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    
    const quoteText = selectedText || 'Your quote here';
    const formattedQuote = `\n❝ ${quoteText} ❞\n`;
    
    if (selectedText) {
        const newText = editor.value.substring(0, start) + formattedQuote + editor.value.substring(end);
        editor.value = newText;
    } else {
        insertAtCursor(editor, formattedQuote);
    saveState();
    }
    
    autoResizeEditor();
    editor.focus();
    updatePreview();
}

// Add emoji
function addEmoji() {
    document.getElementById('emojiModal').style.display = 'block';
    showEmojiCategory('popular');
}

// Close emoji modal
function closeEmojiModal() {
    document.getElementById('emojiModal').style.display = 'none';
}

// Show emoji category
function showEmojiCategory(category) {
    const emojiGrid = document.getElementById('emojiGrid');
    emojiGrid.innerHTML = '';
    
    // Update active button
    document.querySelectorAll('.emoji-cat-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category.toLowerCase() || 
            btn.textContent.toLowerCase().includes(category.toLowerCase().substring(0, 3))) {
            btn.classList.add('active');
        }
    });
    
    // Display emojis
    emojiCollection[category].forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.textContent = emoji;
        emojiItem.onclick = () => insertEmoji(emoji);
        emojiGrid.appendChild(emojiItem);
    });
}

// Insert emoji
function insertEmoji(emoji) {
    const editor = document.getElementById('editor');
    insertAtCursor(editor, emoji);
    closeEmojiModal();
    saveState();
    updatePreview();
}

// Setup emoji grid
function setupEmojiGrid() {
    const emojiGrid = document.getElementById('emojiGrid');
    emojiCollection.popular.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.textContent = emoji;
        emojiItem.onclick = () => insertEmoji(emoji);
        emojiGrid.appendChild(emojiItem);
    });
}

// Add line spacing
function addSpacing() {
    const editor = document.getElementById('editor');
    insertAtCursor(editor, '\n\n');
    saveState();
    updatePreview();
}

// Insert text at cursor position
function insertAtCursor(editor, text) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const before = editor.value.substring(0, start);
    const after = editor.value.substring(end);
    
    editor.value = before + text + after;
    editor.selectionStart = editor.selectionEnd = start + text.length;
    editor.focus();
}

// Update preview
function updatePreview() {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const charCount = document.getElementById('charCount');
    const lineCount = document.getElementById('lineCount');
    const wordCountEl = document.getElementById('wordCount');
    const readingTimeEl = document.getElementById('readingTime');
    
    const text = editor.value;
    const chars = text.length;
    const lines = text.split('\n').length;
    
    // Calculate word count
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    
    // Calculate reading time (average 200 words per minute for LinkedIn)
    const readingTimeMinutes = Math.ceil(words / 200);
    const readingTimeString = readingTimeMinutes < 1 ? '< 1 min' : readingTimeMinutes + ' min';
    
    // Update counts
    charCount.textContent = chars;
    lineCount.textContent = lines;
    wordCountEl.textContent = words;
    readingTimeEl.textContent = readingTimeString;
    
    // Update character count color
    if (chars > 3000) {
        charCount.style.color = '#cc1016';
        charCount.parentElement.style.fontWeight = 'bold';
    } else if (chars > 2500) {
        charCount.style.color = '#f5b817';
        charCount.parentElement.style.fontWeight = 'bold';
    } else {
        charCount.style.color = '#666666';
        charCount.parentElement.style.fontWeight = 'normal';
    }
    
    // Update preview
    if (text.trim() === '') {
        preview.innerHTML = '<p class="placeholder-text">Your formatted post will appear here...</p>';
    } else {
        preview.textContent = text;
    }
}

// Copy to clipboard
function copyToClipboard() {
    const editor = document.getElementById('editor');
    const text = editor.value;
    
    if (!text.trim()) {
        showToast('Nothing to copy!', 'warning');
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('✓ Copied to clipboard!', 'success');
    }).catch(err => {
        showToast('Failed to copy', 'error');
    });
}
saveState();
        
// Clear editor
function clearEditor() {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'block';
}

// Confirm and clear editor
function confirmClearEditor() {
    document.getElementById('editor').value = '';
    autoResizeEditor();
    updatePreview();
    closeConfirmationModal();
    showToast('Editor cleared', 'info');
}

// Close confirmation modal
function closeConfirmationModal() {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'none';
}



// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    
    // Set color based on type
    const colors = {
        success: '#057642',
        warning: '#f5b817',
        error: '#cc1016',
        info: '#0a66c2'
    };
    
    toast.style.background = colors[type] || colors.success;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Load template
function loadTemplate(type) {
    const editor = document.getElementById('editor');
    let template = '';
    
    switch(type) {
        case 'announcement':
            template = `━━━━━━━━━━━━━━━━━━━━
📢 ANNOUNCEMENT
━━━━━━━━━━━━━━━━━━━━

[Your announcement here]

Key highlights:
• Point 1
• Point 2
• Point 3

Looking forward to your thoughts! 💭

#announcement #news`;
            break;
            
        case 'tips':
            template = `💡 TOP TIPS FOR [TOPIC]

Here are my favorite insights:

1️⃣ Tip One
   → Brief explanation

2️⃣ Tip Two
   → Brief explanation

3️⃣ Tip Three
   → Brief explanation

━━━━━━━━━━━━━━━━━━━━

Which tip resonates with you most? Drop a comment below! 👇

#tips #insights #knowledge`;
            break;
            
        case 'story':
            template = `📖 MY STORY

Let me share something that changed my perspective...

[Your story here]

The lesson? 

❝ Your key takeaway ❞

━━━━━━━━━━━━━━━━━━━━

What's your experience? Let's discuss! 💬

#story #experience #learning`;
            break;
            
        case 'question':
            template = `🤔 QUESTION FOR YOU

I've been thinking about [topic]...

Here's my question:

▸ [Your question here]

I'd love to hear:
• Your perspective
• Your experiences
• Your insights

Drop your thoughts in the comments! 👇

#question #discussion #community`;
            break;
            
        case 'achievement':
            template = `🏆 ACHIEVEMENT UNLOCKED!

Excited to share that [your achievement]!

The journey:
✓ Challenge faced
✓ Action taken
✓ Result achieved

Key learnings:
→ Learning 1
→ Learning 2
→ Learning 3

━━━━━━━━━━━━━━━━━━━━

Grateful for everyone who supported along the way! 🙏

#achievement #milestone #success`;
            break;
            
        case 'event':
            template = `📅 EVENT ANNOUNCEMENT

🎉 [Event Name]

📍 Location: [Where]
📆 Date: [When]
⏰ Time: [What time]

What to expect:
• Benefit 1
• Benefit 2
• Benefit 3

━━━━━━━━━━━━━━━━━━━━

Interested? Comment below or DM me for details! 💬
saveState();
    
#event #networking #opportunity`;
            break;
    }
    
    editor.value = template;
    autoResizeEditor();
    saveState();
    updatePreview();
    showToast('Template loaded!', 'success');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const emojiModal = document.getElementById('emojiModal');
    const confirmationModal = document.getElementById('confirmationModal');
    
    if (event.target === emojiModal) {
        closeEmojiModal();
    }
    
    if (event.target === confirmationModal) {
        closeConfirmationModal();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    const editor = document.getElementById('editor');
    
    // Ctrl/Cmd + Z for undo
    if ((e.ctrlKey || e.metaKey) && e.code === 'KeyZ' && !e.shiftKey) {
        e.preventDefault();
        undo();
    }
    
    // Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y for redo
    if (((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyZ') || 
        ((e.ctrlKey || e.metaKey) && e.code === 'KeyY')) {
        e.preventDefault();
        redo();
    }
    
    // Ctrl/Cmd + B for bold
    if ((e.ctrlKey || e.metaKey) && e.code === 'KeyB') {
        e.preventDefault();
        editor.focus();
        formatText('bold');
    }
    
    // Ctrl/Cmd + I for italic
    if ((e.ctrlKey || e.metaKey) && e.code === 'KeyI') {
        e.preventDefault();
        editor.focus();
        formatText('italic');
    }
    
    // Ctrl/Cmd + U for underline
    if ((e.ctrlKey || e.metaKey) && e.code === 'KeyU') {
        e.preventDefault();
        editor.focus();
        formatText('underline');
    }
});
