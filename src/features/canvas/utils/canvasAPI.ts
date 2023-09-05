import { TGlossary } from "@/types/glossary";
import { foregnLinks } from "../data/foreignLinks";
import { configData } from "../data/configData";
// import { glossary } from "./data";

type TForignKey = {
  source: string;
  target: string;
  // score: number;
};

type TNode = {
  name: string;
  type: string;
  level: number;
  parentId: string | null;
  size: number;
  technicalName: string;
  masterId: string;
  icon: string | undefined;
  dataType?: string[];
  color?: string;
};

type TLink = {
  source: TNode;
  target: TNode;
  color: string;
  distance?: number;
  score?: number;
  child?: TGlossary[];
};

// export async function getNodesAndLinks() {
//   const data = glossary;

//   let nodes: TNode[] = [];
//   let links: TLink[] = [];

//   let atLevel = 1;

//   while (true) {
//     let nodeAtLevel = data.filter((record) => record.level == atLevel);
//     if (nodeAtLevel.length == 0) break;

//     nodeAtLevel.forEach((record) => {
//       const node: TNode = {
//         id: record.id,
//         name: record.name,
//         type: record.type,
//         level: record.level,
//         parentId: record.parentId,
//         size: 20,
//         technicalName: "test",
//       };

//       let parentNode: TNode | null = null;
//       if (record.parentId) {
//         const tempNode = nodes.filter((rec) => rec.id == record.parentId)[0];
//         if (tempNode) {
//           parentNode = tempNode;
//         }
//       }

//       nodes.push(node);
//       if (parentNode)
//         links.push({ source: node, target: parentNode, distance: 75 });
//     });
//     atLevel += 1;
//   }

//   return { nodes, links };
// }

// const ForeignKeys: TForignKey[] = [
//   {
//     source: "ecommerce_data-olist_order_items_dataset-product_id",
//     target:
//       "ecommerce_data-olist_order_reviews_dataset-review_answer_timestamp",
//     score: 12,
//   },
//   {
//     source: "ecommerce_data-olist_sellers_dataset-seller_id",
//     target:
//       "ecommerce_data-product_category_name_translation-product_category_name",
//     score: 12,
//   },
//   {
//     source: "ecommerce_data-olist_order_reviews_dataset-review_id",
//     target: "ecommerce_data-olist_orders_dataset-order_id",
//     score: 12,
//   },
// ];

export async function getNodesAndLinksFromGlossary(data: TGlossary[]) {
  let nodes: TNode[] = [];
  let links: TLink[] = [];

  let nodeData: {}[] = [];

  const graphConfigData = configData;

  if (graphConfigData) {
    nodeData = graphConfigData.nodes;
  }

  data.forEach((record) => {
    let color = "rgb(255, 165, 0 )";
    let data: any = nodeData.filter((d: any) => d.id == record.name)[0];
    if (data && data.color) {
      color = data.color;
    }
    const tableNode: TNode = {
      name: record.name,
      type: record.type,
      masterId: record.masterId,
      technicalName: record.technicalName,
      level: 0,
      parentId: null,
      size: 40,
      dataType: record.dataTypes,
      icon: record.type,
      color: color,
    };
    nodes.push(tableNode);

    record.subset?.forEach((col) => {
      const node: TNode = {
        name: col.name,
        type: col.type,
        masterId: col.masterId,
        technicalName: col.technicalName,
        level: 1,
        parentId: record.masterId,
        size: 20,
        dataType: record.dataTypes,
        icon: col.dataTypes[0] ?? "",
        color: color,
      };
      nodes.push(node);

      links.push({
        source: tableNode,
        target: node,
        distance: 180,
        color: "#808080",
        child: record.subset,
      });
    });
  });

  return { nodes, links };
}

export async function getLinksOfForeignConnection(nodes: TNode[]) {
  let links: TLink[] = [];
  let foreignConnections: TForignKey[] = foregnLinks;

  foreignConnections.forEach((con) => {
    // console.log(con)
    let source = nodes.filter((node) => node.masterId == con.source)[0];
    let target = nodes.filter((node) => node.masterId == con.target)[0];

    if (source && target) {
      links.push({ source, target, color: "#ffffff", distance: 100, score: 0 });
    }
  });
  return links;
}
