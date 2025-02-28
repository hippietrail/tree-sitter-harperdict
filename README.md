# Harper curated dictionary file support for Tree-sitter

[Harper](https://writewithharper.com/) is a grammar checker. [(GitHb repo)](https://github.com/Automattic/harper)

Harper's curated dictionary is very simple.

The first line is a number specifying the approximate number of entries (lines) in the dictionary.

Each line after that starts with a mandatory **word** which is optionally followed by a series of **annotation** flags, separated from the word by a `/`.

This syntax highlighter also supports optional comments which are separated from the word and annotation by whitespace.

To learn about the annotation flags please consult [the official documentation](https://writewithharper.com/docs/contributors/dictionary).

## Known Issues

The author knows nothing about Tree-sitter. So please feel free to contribute improvements that turn this into proper Tree-sitter code.

## See also

[My VS Code + TextMate version](https://github.com/hippietrail/harper-dict-syntax)
