// The published @retorquere/bibtex-parser package points its "types" entry at a
// dist/types directory that is not actually shipped, so we declare the minimal
// surface we use here.
declare module '@retorquere/bibtex-parser' {
  export type BibtexCreator = {
    firstName?: string
    lastName?: string
    name?: string
  }

  export type BibtexEntry = {
    type: string
    key: string
    fields: { author?: BibtexCreator[] } & Record<string, any>
  }

  export type BibtexParseResult = {
    entries: BibtexEntry[]
  }

  export function parse(
    input: string,
    options?: { sentenceCase?: boolean; [key: string]: unknown },
  ): BibtexParseResult
}
