/**
 * @file Syntax highlighter for the Harper grammar checker's curated dictionary file
 * @author hippietrail
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "harperdict",

  rules: {
    source_file: $ => seq($.number, '\n', repeat($.entry)),
    entry: $ => seq($.word, seq(optional($.annotation), optional($.whitespace_comment)), '\n'),
    annotation: $ => seq($.slash, optional($.flags)),
    whitespace_comment: $ => seq($.whitespace, optional($.comment)),
    number: $ => /\d+/,
    word: $ => /[0-9A-Za-z'áçéíïóü'.]+/,
    slash: $ => '/',
    flags: $ => /[A-Za-z0-9'.!+~-]+/,
    whitespace: $ => /\s+/,
    comment: $ => /.+/, // Matches the rest of the line as a comment
  }
});
