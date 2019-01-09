import styled from "styled-components";

export const CodeMirrorContainer = styled.div`
  /* Force an increase in specificity to override these styles*/
  .CodeMirror {
    height: "100%";
    font-family: "Source Code Pro";
    font-size: 14px;
    line-height: 20px;

    height: auto;

    background: none;
  }

  .CodeMirror-cursor {
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: var(--cm-color, black);
  }

  .CodeMirror-scroll {
    overflow-x: auto !important;
    overflow-y: hidden !important;
    width: 100%;
  }

  .CodeMirror-lines {
    padding: 0.4em;
  }

  .CodeMirror-linenumber {
    padding: 0 8px 0 4px;
  }

  .CodeMirror-gutters {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  /** Override particular styles to allow for theming via CSS Variables */
  &.cm-s-composition.CodeMirror {
    font-family: "Source Code Pro", monospace;
    letter-spacing: 0.3px;
    word-spacing: 0px;
    background: var(--cm-background, #fafafa);
    color: var(--cm-color, black);
  }
  &.cm-s-composition .CodeMirror-lines {
    padding: 10px;
  }
  &.cm-s-composition .CodeMirror-gutters {
    background-color: var(--cm-gutter-bg, white);
    padding-right: 10px;
    z-index: 3;
    border: none;
  }

  &.cm-s-composition span.cm-comment {
    color: var(--cm-comment, #a86);
  }
  &.cm-s-composition span.cm-keyword {
    line-height: 1em;
    font-weight: bold;
    color: var(--cm-keyword, blue);
  }
  &.cm-s-composition span.cm-string {
    color: var(--cm-string, #a22);
  }
  &.cm-s-composition span.cm-builtin {
    line-height: 1em;
    font-weight: bold;
    color: var(--cm-builtin, #077);
  }
  &.cm-s-composition span.cm-special {
    line-height: 1em;
    font-weight: bold;
    color: var(--cm-special, #0aa);
  }
  &.cm-s-composition span.cm-variable {
    color: var(--cm-variable, black);
  }
  &.cm-s-composition span.cm-number,
  &.cm-s-composition span.cm-atom {
    color: var(--cm-number, #3a3);
  }
  &.cm-s-composition span.cm-meta {
    color: var(--cm-meta, #555);
  }
  &.cm-s-composition span.cm-link {
    color: var(--cm-link, #3a3);
  }
  &.cm-s-composition span.cm-operator {
    color: var(--cm-operator, black);
  }
  &.cm-s-composition span.cm-def {
    color: var(--cm-def, black);
  }
  &.cm-s-composition .CodeMirror-activeline-background {
    background: var(--cm-activeline-bg, #e8f2ff);
  }
  &.cm-s-composition .CodeMirror-matchingbracket {
    border-bottom: 1px solid var(--cm-matchingbracket-outline, grey);
    color: var(--cm-matchingbracket-color, black) !important;
  }
`;
