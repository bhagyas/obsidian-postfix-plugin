import { App, Editor, MarkdownView, Modal, Notice, PluginSettingTab, Setting } from 'obsidian';

import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
  async onload() {
    console.log('My plugin has loaded!');

    const templates = [
      { regex: /(.*)\.###\s+(.*)$/, before: '### ', after: '$1$2' },
      { regex: /(.*)\.##\s+(.*)$/, before: '## ', after: '$1$2' },
      { regex: /(.*)\.#\s+(.*)$/, before: '# ', after: '$1$2' },
      { regex: /(.*)\.\-\s+(.*)$/, before: '- ', after: '$1$2' },
      { regex: /(.*)\.>\s+(.*)$/, before: '> ', after: '$1$2' },
      { regex: /(.*)\.\+\s+(.*)$/, before: '+ ', after: '$1$2' },
      { regex: /\-(.*)\.\[\]\s+(.*)$/, before: '- [ ] ', after: '$1$2 ' },
      { regex: /(.*)\.\[\]\s+(.*)$/, before: '[ ] ', after: '$1$2 ' },
      { regex: /\-(.*)\.\[x\]\s+(.*)$/, before: '- [x] ', after: '$1$2 ' },
      { regex: /(.*)\.\[x\]\s+(.*)$/, before: '[x] ', after: '$1$2 ' },
    ];

    this.registerEvent(
      this.app.workspace.on('editor-change', (editor) => {
        const cm  = editor;
        const cursor = cm.getCursor();
        const line = cm.getLine(cursor.line);
        const lineLength = line.length;
        const prevLine = cm.getLine(cursor.line - 1);
        const prevLineLength = prevLine.length;

        for (const { regex, before, after } of templates) {
          if (regex.test(line)) {
            const newLine = line.replace(regex, `${before}$2${after}`);
            cm.replaceRange(newLine, { line: cursor.line, ch: 0 }, { line: cursor.line, ch: lineLength });
            break;
          } else if (regex.test(prevLine)) {
            const newLine = prevLine.replace(regex, `${before}$2${after}`);
            cm.replaceRange(newLine, { line: cursor.line - 1, ch: 0 }, { line: cursor.line - 1, ch: prevLineLength });
            break;
          }
        }
      })
    );
  }

  onunload() {
    console.log('My plugin has been unloaded!');
    //unhook

  }
}


