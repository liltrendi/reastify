import React from 'react'
import { I_ReastifyProps } from '../types/components'
import { I_ReastifyNode } from '../types/util'

export const reastify = (props: I_ReastifyProps) => {
    const {htmlAst}: I_ReastifyProps = props;

    if(!htmlAst){
      return <React.Fragment />
    }
  
    const getLastChildNode = (child: I_ReastifyNode, index: number) => {
      if(!child) return <React.Fragment />
      
      if(child?.type === "text"){
        return (
          <React.Fragment key={index}>
              {child?.value || ""}
          </React.Fragment>
        )
      }
  
      return <React.Fragment />
    }
  
    const getParentNode = (parent: I_ReastifyNode, index: number) => {
      if(!parent) return <React.Fragment />
  
      if(parent?.type === "element" && parent?.tagName === "br"){
        return (
          <br className={props?.brClassName || ""} key={index} />
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "table"){
        return (
          <table className={props?.tableClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </table>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "thead"){
        return (
          <thead className={props?.theadClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </thead>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "tbody"){
        return (
          <tbody className={props?.tbodyClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </tbody>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "tr"){
        return (
          <tr className={props?.trClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </tr>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "th"){
        return (
          <th className={props?.thClassName} key={index}>
            {recursiveHelper(parent?.children)}
          </th>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "td"){
        return (
          <td className={props?.tdClassName} key={index}>
            {recursiveHelper(parent?.children)}
          </td>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "p"){
        return (
          <p className={props?.pClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </p>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "a"){
        return (
          <a onClick={props?.linkOnclick || (() => {})} className={props?.aClassName || ""} key={index} style={{cursor: "pointer"}} href={parent?.properties?.href}>
            {recursiveHelper(parent?.children)}
          </a>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "u"){
        return (
          <u className={props?.uClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </u>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "strong"){
        return (
          <strong className={props?.strongClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </strong>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "em"){
        return (
          <em className={props?.emClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </em>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "h1"){
        return (
          <h1 className={props?.h1ClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </h1>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "h2"){
        return (
          <h2 className={props?.h2ClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </h2>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "h3"){
        return (
          <h3 className={props?.h3ClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </h3>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "h4"){
        return (
          <h4 className={props?.h4ClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </h4>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "h5"){
        return (
          <h5 className={props?.h5ClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </h5>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "h6"){
        return (
          <h6 className={props?.h6ClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </h6>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "ul"){
        return (
          <ul className={props?.ulClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </ul>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "ol"){
        return (
          <ol className={props?.olClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </ol>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "li"){
        return (
          <li className={props?.liClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </li>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "pre"){
        return (
          <pre className={props?.preClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </pre>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "code"){
        return (
          <code className={props?.codeClassName || ""} key={index}>
            {recursiveHelper(parent?.children)}
          </code>
        )
      }
  
      if(parent?.type === "element" && parent?.tagName === "img"){
        return (
          <img className={props?.imgClassName} src={parent?.properties?.src} alt={parent?.properties?.alt} />
        )
      }
  
      return recursiveHelper(parent?.children);
    }
  
    const recursiveHelper = (items: I_ReastifyNode[] | undefined | null): any => {
      if(!items) return undefined;
  
      return items?.map((node: I_ReastifyNode, index: number) => {
        if(!node?.children){
          return getLastChildNode(node, index);
        }
  
        return getParentNode(node, index);
      })
    }
  
    return recursiveHelper(htmlAst?.children);
}