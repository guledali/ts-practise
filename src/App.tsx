import { request } from 'graphql-request'
import * as React from 'react';
import FeedBar from './components/FeedBar';
import { styles } from './Styles'

interface IProps {
  id?: string
  title?: string
  text?: string
}

type manyItems = Iitem[]

interface Idrafts {
  drafts : manyItems
}

interface IState {
  data: Idrafts | any
}

interface Iitem {
  id: string 
  title: string
  text: string
}


export default class App extends React.Component<IProps, IState> {
  public state = {
    data: {
     drafts: [
       {
         id: "12334",
         text: "hello",
         title: "some"
       }
     ]
   }
 }

public async componentDidMount() {
 const query = `
 query some {
     drafts {
       id
       isPublished
       title
       text
     }
   }    
 `
 
await request('https://typescript-graphql-hvmkecudya.now.sh/', query).then(data => this.setState({
   data
 }))
}
  public render() {
    const items = this.state.data
    return (
      <div className={styles.body}>
        {items.drafts.map(link => <FeedBar key={link.id} id={link.id} text={link.text} title={link.title} />)}
      </div>
    );
  }
}

