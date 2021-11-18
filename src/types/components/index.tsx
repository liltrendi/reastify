import { I_ReastifyNode } from "../util";

export interface I_ReastifyProps {
    htmlAst?: I_ReastifyNode;
    tableClassName?: string;
    theadClassName?: string;
    tbodyClassName?: string;
    trClassName?: string;
    tdClassName?: string;
    thClassName?: string;
    pClassName?: string;
    h1ClassName?: string;
    h2ClassName?: string;
    h3ClassName?: string;
    h4ClassName?: string;
    h5ClassName?: string;
    h6ClassName?: string;
    imgClassName?: string;
    brClassName?: string;
    aClassName?: string;
    uClassName?: string;
    strongClassName?: string;
    emClassName?: string;
    ulClassName?: string;
    olClassName?: string;
    liClassName?: string;
    preClassName?: string;
    codeClassName?: string;
    linkOnclick?: (event: React.MouseEvent<HTMLElement>) => any;
}