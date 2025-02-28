/**
 * @file Syntax highlighter for the Harper grammar checker's curated dictionary file
 * @author hippietrail
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "harper_dict",

  rules: {
    source_file: $ => seq($.number, repeat($.entry)),
    entry: $ => seq($.word, seq(optional($.annotation), optional($.whitespace_comment)), '\n'),
    annotation: $ => seq($.slash, optional($.flags)),
    whitespace_comment: $ => seq($.whitespace, optional($.commenrt)),
    number: $ => /[0-9]+/,
    word: $ => /[0-9A-Za-z'áçéíïóü']+[A-Za-z'áçéíïóü'][0-9A-Za-z'áçéíïóü']*/,
    slash: $ => '/',
    flags: $ => /[A-Za-z0-9'.!+~-]+/,
    whitespace: $ => /\s+/,
    commenrt: $ => /.+/, // Matches the rest of the line as a comment
  }
});
