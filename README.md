# Obsidian Postfix Plugin

This is a postfix plugin for Obsidian (<https://obsidian.md>).

This project uses Typescript to provide type checking and documentation.
The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

This plugin does the following.

- Allows users to add a postfix to automatically format the text typed in the current line to be substituted with a pattern.

## Usage

Here is a list of templates and examples available:

Here are some examples of how each template in the `templates` array can be used:

1. `###` - Heading level 3
   - Type `My Heading.###` and then hit space to convert to a level 3 heading: `### My Heading`
2. `##` - Heading level 2
   - Type `My Heading.##` and then hit space to convert to a level 2 heading: `## My Heading`
3. `#` - Heading level 1
   - Type `My Heading.#` and then hit space to convert to a level 1 heading: `# My Heading`
4. `-` - Unordered list item
   - Type `My item.-` and then hit space to convert to an unordered list item: `- My item`
5. `>` - Blockquote
   - Type `My quote.>` and then hit space to convert to a blockquote: `> My quote`
6. `+` - Unordered list item (alternative symbol)
   - Type `My item.+` and then hit space to convert to an unordered list item using an alternative symbol: `+ My item`
7. `[ ]` - Incomplete task list item
   - Type `My task.[ ]` and then hit space to convert to an incomplete task list item: `[ ] My task`
8. `[x]` - Completed task list item
   - Type `My task.[x]` and then hit space to convert to a completed task list item: `[x] My task`

These templates allow you to quickly insert common markdown formatting symbols by typing the text followed by a dot and the corresponding symbol, and then hitting space.

## First time developing plugins?

Quick starting guide for new plugin devs:

- Check if [someone already developed a plugin for what you want](https://obsidian.md/plugins)! There might be an existing plugin similar enough that you can partner up with.
- Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
- Clone your repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/your-plugin-name` folder.
- Install NodeJS, then run `npm i` in the command line under your repo folder.
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

## Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: <https://github.com/obsidianmd/obsidian-sample-plugin/releases>
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## Adding your plugin to the community plugin list

- Check <https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md>
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at <https://github.com/obsidianmd/obsidian-releases> to add your plugin.

## How to use

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Improve code quality with eslint (optional)

- [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code.
- To use eslint with this project, make sure to install eslint from terminal:
  - `npm install -g eslint`
- To use eslint to analyze this project use this command:
  - `eslint main.ts`
  - eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
  - `eslint .\src\`

## Funding URL

You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:

```json
{
    "fundingUrl": "https://buymeacoffee.com/bhagyas"
}
```

If you have multiple URLs, you can also do:

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com/bhagyas",
        "GitHub Sponsor": "https://github.com/sponsors",
        "LinkedIn": "https://www.linkedin.com/in/bhagyas/"
    }
}
```

## API Documentation

See <https://github.com/obsidianmd/obsidian-api>

## Author

Bhagya Nirmaan Silva - <https://linkedin.com/in/bhagyas>
