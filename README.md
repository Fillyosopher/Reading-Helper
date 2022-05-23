# What is it?
Inspired by [Bionic Reading](https://twitter.com/juanbuis/status/1526900107379105793/photo/1), this Bookmarklet modifies a webpage to display the first half of each word in bold.  Can also be installed as a Chrome Extension. Works on essentially any webpage!

# Examples
[![Pre convert0](https://i.imgur.com/miu58Yib.png)](https://i.imgur.com/miu58Yi.png)
[![Post convert0](https://i.imgur.com/HRFz7p4b.png)](https://i.imgur.com/HRFz7p4.png)
[![Pre convert1](https://i.imgur.com/K29FCgdb.png)](https://i.imgur.com/K29FCgd.png)
[![Post convert1](https://i.imgur.com/MrfssY3b.png)](https://i.imgur.com/MrfssY3.png)
[![Pre convert2](https://i.imgur.com/BZquDN2b.png)](https://i.imgur.com/BZquDN2.png)
[![Post convert2](https://i.imgur.com/flXqvoEb.png)](https://i.imgur.com/flXqvoE.png)
[![Pre convert3](https://i.imgur.com/CAo40QAb.png)](https://i.imgur.com/CAo40QA.png)
[![Post convert3](https://i.imgur.com/wfqXwijb.png)](https://i.imgur.com/wfqXwij.png)

# Installation
If you're having trouble, we have pictures explaining each step [here](https://github.com/Fillyosopher/Reading-Helper/wiki).

## Bookmarklet Instructions (preferred method):
- Open "readable_text.js"
- Click "Copy Raw Contents" button, which looks like Two Squares
- Create a new Bookmark named "Reading Helper" (or name it something else if you want!)
- In the URL, paste what you copied
- Save the Bookmark
- **When you want to use it, click the Bookmark and it will convert the page**

## Chrome Extension Installation Instructions:
- Click the green Code button above, then click "Download ZIP"
- Unzip the file literally anywhere
- Open Chrome Extensions
- In the upper right, turn on developer mode
- Click "Load Unpacked"
- Select the folder, it should load as Reading Helper extension
- Go to the upper right and click the puzzle piece to show the extension (which will look like a Grey Square with a White R)
- **When you want to use it, click the Extension button and it will convert the page**

# Similar Projects:

## Bookmarklet
- vonrosceau's Bookmarklet: https://twitter.com/vonrosceau/status/1528375035894894592

## Chrome Extension
- TorpedoRead: https://torpedoread.com/
- ansh's Chrome Extension: https://github.com/ansh/bionic-reading
- vzekharov's Chrome Extension: https://github.com/vzakharov/bionic-reading-extension

## Webpage
- axoletlmusic's Not Bionic Reading Webpage: https://not-br.neocities.org
- 100L5's Webpage: https://10015.io/tools/bionic-reading-converter
- abenrob's Webpage: https://observablehq.com/@abenrob/bionic-reading-test

## Document Readers/Converters
- Official Bionic Reading Test Page: https://bionic.staging.webulos.com/test/  (TXT, RTF, RTFD, EPUB or DOCX; online reader)
- TorpedoRead (not yet released): https://torpedoread.com/ (Supposedly will support EPUB and PDF converters)
- GPFSimon's Word Document Macro: https://github.com/GPFSimon/Speed-Bionic-Reading (DOCX; works in word application)

# Other:
If anyone wants to fork this and actually upload it to the Chrome Dev store, please go for it!  This was the work of 3 hours, has many issues, and isn't something I plan to refine much.  I'd be quite happy if someone else took it and made something better! (This entire extention is ~100 lines of text, it's EASY to modify.)

# Changelog
5/22 1.3.0
- TL;DR add support for some unusual webssites, like EPUB readers
- Add iframe documents to traversal

5/22 Rewrite 2
- TL;DR no longer breaks dynamic pages
- No longer processes invisible tags, like style and meta
- No longer processes whitespace individually
- No longer recreates breaks buttons and interactables
- Now also works as a Bookmarklet

5/22 Rewrite 1
- TL;DR catchs text across the entire page, breaks fewer things
- Runs against all elements on the page, rather than a subset
- No longer avoids full sentences if they contain another format tag
- No longer breaks links
- No longer processes script tags

5/21
- Initial Release