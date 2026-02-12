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
    }
};

// Convert markdown formatting to Unicode
function convertMarkdownToUnicode(text) {
    // Convert **bold** to Unicode bold
    text = text.replace(/\*\*([^\*]+?)\*\*/g, function(match, content) {
        return content.split('').map(char => unicodeStyles.bold[char] || char).join('');
    });
    
    // Convert __bold__ to Unicode bold
    text = text.replace(/__([^_]+?)__/g, function(match, content) {
        return content.split('').map(char => unicodeStyles.bold[char] || char).join('');
    });
    
    // Convert *italic* to Unicode italic (single asterisk)
    text = text.replace(/\*([^\*]+?)\*/g, function(match, content) {
        return content.split('').map(char => unicodeStyles.italic[char] || char).join('');
    });
    
    // Convert _italic_ to Unicode italic (single underscore)
    text = text.replace(/_([^_]+?)_/g, function(match, content) {
        return content.split('').map(char => unicodeStyles.italic[char] || char).join('');
    });
    
    return text;
}

// Emoji collections
const emojiCollection = {
    popular: ['😊', '👍', '🎉', '💡', '🚀', '✨', '💪', '🔥', '❤️', '👏', '🌟', '💯', '🎯', '📈', '💼', '🏆', '✅', '👋', '🙌', '💬'],
    smileys: ['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋'],
    gestures: ['👍', '👎', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💪', '🦾', '🤳', '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏'],
    objects: ['💼', '📊', '📈', '📉', '💻', '⌨️', '🖥️', '📱', '📲', '💾', '💿', '📀', '🖱️', '🖨️', '⌚', '📞', '☎️', '📟', '📠', '📺'],
    symbols: ['✅', '✔️', '☑️', '✖️', '❌', '❎', '➕', '➖', '➗', '✳️', '✴️', '❇️', '‼️', '⁉️', '❓', '❔', '❕', '❗', '〰️', '💯']
};

// Undo/Redo system
let undoStack = [];
let redoStack = [];
let currentState = '';
let isUndoRedo = false;

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
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
    
    // Handle paste events with smart formatting detection
    editor.addEventListener('paste', function(e) {
        e.preventDefault();
        
        // Get pasted content
        let pastedText = '';
        if (e.clipboardData && e.clipboardData.getData) {
            pastedText = e.clipboardData.getData('text/plain');
        } else if (window.clipboardData && window.clipboardData.getData) {
            pastedText = window.clipboardData.getData('Text');
        }
        
        // Check if markdown exists
        const hasMarkdown = /\*\*[^\*]+?\*\*|__[^_]+?__|\*[^\*]+?\*|_[^_]+?_/.test(pastedText);
        
        // Convert markdown-style formatting to Unicode
        const convertedText = convertMarkdownToUnicode(pastedText);
        
        // Insert at cursor position
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const before = editor.value.substring(0, start);
        const after = editor.value.substring(end);
        
        editor.value = before + convertedText + after;
        editor.selectionStart = editor.selectionEnd = start + convertedText.length;
        
        // Show notification if markdown was converted
        if (hasMarkdown && convertedText !== pastedText) {
            showToast('✨ Markdown converted to Unicode formatting!', 'success');
        }
        
        updatePreview();
        saveState();
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
    
    if (style === 'bold' || style === 'italic') {
        formattedText = selectedText.split('').map(char => {
            return unicodeStyles[style][char] || char;
        }).join('');
    } else if (style === 'underline') {
        formattedText = selectedText.split('').map(char => char + '\u0332').join('');
    } else if (style === 'strikethrough') {
        formattedText = selectedText.split('').map(char => char + '\u0336').join('');
    }
    
    const newText = editor.value.substring(0, start) + formattedText + editor.value.substring(end);
    editor.value = newText;
    editor.setSelectionRange(start, start + formattedText.length);
    editor.focus();
    saveState();
    updatePreview();
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
    let formattedText = '';
    
    if (level === 'h1') {
        formattedText = `━━━━━━━━━━━━━━━━━━━━\n${headerText.toUpperCase()}\n━━━━━━━━━━━━━━━━━━━━`;
    } else if (level === 'h2') {
        formattedText = `▸ ${headerText.toUpperCase()}`;
    } else if (level === 'h3') {
        formattedText = `◉ ${headerText}`;
    }
    
    if (selectedText) {
        const newText = editor.value.substring(0, start) + formattedText + editor.value.substring(end);
        editor.value = newText;
    } else {
        insertAtCursor(editor, formattedText + '\n\n');
    }
    saveState();
    
    editor.focus();
    updatePreview();
}

// Add divider
function addDivider() {
    const editor = document.getElementById('editor');
    const dividers = [
        '\n━━━━━━━━━━━━━━━━━━━━\n',
        '\n─────────────────────\n',
        '\n• • • • • • • • • • •\n',
        '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'
    ];
    saveState();
    const randomDivider = dividers[Math.floor(Math.random() * dividers.length)];
    insertAtCursor(editor, randomDivider);
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
    
    const text = editor.value;
    const chars = text.length;
    const lines = text.split('\n').length;
    
    // Update counts
    charCount.textContent = chars;
    lineCount.textContent = lines;
    
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
        console.error('Failed to copy: ', err);
    });
}
saveState();
        
// Clear editor
function clearEditor() {
    if (confirm('Are you sure you want to clear all content?')) {
        document.getElementById('editor').value = '';
        updatePreview();
        showToast('Editor cleared', 'info');
    }
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
    saveState();
    updatePreview();
    showToast('Template loaded!', 'success');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('emojiModal');
    if (event.target === modal) {
        closeEmojiModal();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Z for undo
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
    }
    
    // Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y for redo
    if (((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'z') || 
        ((e.ctrlKey || e.metaKey) && e.key === 'y')) {
        e.preventDefault();
        redo();
    }
    
    // Ctrl/Cmd + B for bold
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        formatText('bold');
    }
    
    // Ctrl/Cmd + I for italic
    if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
        e.preventDefault();
        formatText('italic');
    }
    
    // Ctrl/Cmd + U for underline
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        formatText('underline');
    }
});
