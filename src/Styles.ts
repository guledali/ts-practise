export const styles: IStyling = {
  /* App.js */
  body: "vh-100 bg-light-silver",


  /* FeedBar.js */
  feed: "ml3 fl w-third",

  card: "center mw5 mw6-ns hidden ba mv4",

  cardtitle: "tc bg-near-black white mv0 pv2 ph3 f1 lh-title sans-serif",

  paragraphbody: "pa3 bt",

  cardescription: "f6 f5-ns lh-copy measure mv0 b sans-serif"


}

export interface IStyling {
  body: string;
  feed: string;
  card: string;
  cardtitle: string;
  paragraphbody: string;
  cardescription: string;
}